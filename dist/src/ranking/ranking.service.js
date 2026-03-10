"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const kpis_service_1 = require("../kpis/kpis.service");
const client_1 = require("@prisma/client");
let RankingService = class RankingService {
    prisma;
    kpisService;
    constructor(prisma, kpisService) {
        this.prisma = prisma;
        this.kpisService = kpisService;
    }
    async getPeriodos() {
        return this.prisma.rankingPeriodo.findMany({
            include: { config: true },
            orderBy: { fechaInicio: 'desc' },
        });
    }
    async getPeriodoActivo() {
        return this.prisma.rankingPeriodo.findFirst({
            where: { estado: client_1.RankingEstado.activo },
            include: {
                resultados: {
                    orderBy: { posicion: 'asc' },
                    include: {
                        perfil: { select: { id: true, nombre: true, apellido: true, avatarUrl: true } },
                    },
                },
            },
        });
    }
    async getRanking(periodoId) {
        return this.prisma.rankingResultado.findMany({
            where: { rankingPeriodoId: periodoId },
            orderBy: { posicion: 'asc' },
            include: {
                perfil: { select: { id: true, nombre: true, apellido: true, avatarUrl: true, zona: true } },
            },
        });
    }
    async crearPeriodo(data) {
        return this.prisma.rankingPeriodo.create({
            data: {
                nombre: data.nombre,
                fechaInicio: new Date(data.fechaInicio),
                fechaFin: new Date(data.fechaFin),
                rankingConfigId: data.rankingConfigId,
                estado: client_1.RankingEstado.pendiente,
            },
        });
    }
    async cerrarPeriodo(periodoId) {
        const periodo = await this.prisma.rankingPeriodo.findUnique({ where: { id: periodoId } });
        if (!periodo)
            throw new common_1.NotFoundException('Periodo no encontrado');
        if (periodo.estado === client_1.RankingEstado.cerrado)
            throw new common_1.BadRequestException('Ya esta cerrado');
        const config = periodo.rankingConfigId
            ? await this.prisma.rankingConfig.findUnique({ where: { id: periodo.rankingConfigId } })
            : await this.prisma.rankingConfig.findFirst({ where: { activa: true } });
        await this.kpisService.calcularPeriodo(client_1.PeriodoTipo.mensual, periodo.fechaInicio, periodo.fechaFin);
        const kpis = await this.prisma.vendedorKpisPeriodo.findMany({
            where: {
                periodoTipo: client_1.PeriodoTipo.mensual,
                periodoInicio: periodo.fechaInicio,
            },
            orderBy: { puntos: 'desc' },
        });
        await this.prisma.$transaction(kpis.map((kpi, index) => this.prisma.rankingResultado.upsert({
            where: { rankingPeriodoId_perfilId: { rankingPeriodoId: periodoId, perfilId: kpi.perfilId } },
            create: {
                rankingPeriodoId: periodoId,
                perfilId: kpi.perfilId,
                puntos: kpi.puntos,
                posicion: index + 1,
                ventas: kpi.ventasCerradas,
                leadsContactados: kpi.leadsContactados,
                tasaConversion: kpi.tasaConversion,
                comisionGenerada: kpi.comisionGenerada,
                primaTotal: kpi.primaTotalVendida,
            },
            update: {
                puntos: kpi.puntos,
                posicion: index + 1,
                ventas: kpi.ventasCerradas,
                leadsContactados: kpi.leadsContactados,
                tasaConversion: kpi.tasaConversion,
                comisionGenerada: kpi.comisionGenerada,
                primaTotal: kpi.primaTotalVendida,
            },
        })));
        await this.prisma.rankingPeriodo.update({
            where: { id: periodoId },
            data: { estado: client_1.RankingEstado.cerrado },
        });
        return { mensaje: 'Periodo cerrado y ranking guardado', total_vendedores: kpis.length };
    }
    async getConfig() {
        return this.prisma.rankingConfig.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async actualizarConfig(id, data) {
        return this.prisma.rankingConfig.update({ where: { id }, data });
    }
};
exports.RankingService = RankingService;
exports.RankingService = RankingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        kpis_service_1.KpisService])
], RankingService);
//# sourceMappingURL=ranking.service.js.map