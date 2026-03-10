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
var KpisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KpisService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let KpisService = KpisService_1 = class KpisService {
    prisma;
    logger = new common_1.Logger(KpisService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async calcularKpisMensuales() {
        this.logger.log('Calculando KPIs mensuales...');
        const ahora = new Date();
        await this.calcularPeriodo(client_1.PeriodoTipo.mensual, new Date(ahora.getFullYear(), ahora.getMonth(), 1), new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0));
    }
    async calcularKpisSemanales() {
        this.logger.log('Calculando KPIs semanales...');
        const ahora = new Date();
        const lunes = new Date(ahora);
        lunes.setDate(ahora.getDate() - ahora.getDay() + 1);
        const domingo = new Date(lunes);
        domingo.setDate(lunes.getDate() + 6);
        await this.calcularPeriodo(client_1.PeriodoTipo.semanal, lunes, domingo);
    }
    async calcularPeriodo(tipo, inicio, fin) {
        const vendedores = await this.prisma.profile.findMany({
            where: { activo: true, rol: { not: 'admin' } },
            select: { id: true },
        });
        const config = await this.prisma.rankingConfig.findFirst({ where: { activa: true } });
        for (const vendedor of vendedores) {
            await this.calcularParaVendedor(vendedor.id, tipo, inicio, fin, config);
        }
        this.logger.log(`KPIs ${tipo} calculados para ${vendedores.length} vendedores`);
    }
    async calcularParaVendedor(perfilId, periodoTipo, inicio, fin, config) {
        const [leadsRecibidos, leadsTomados, leadsContactados, reuniones, cotizaciones, ventasCerradas, ventasPerdidas, primaYComision,] = await Promise.all([
            this.prisma.lead.count({ where: { zonaId: { not: null }, createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.lead.count({ where: { vendedorId: perfilId, tomadoAt: { gte: inicio, lte: fin } } }),
            this.prisma.leadActividad.count({ where: { vendedorId: perfilId, tipo: 'contactado', createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.leadActividad.count({ where: { vendedorId: perfilId, tipo: 'reunion_realizada', createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.cotizacion.count({ where: { vendedorId: perfilId, createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.venta.count({ where: { vendedorId: perfilId, estado: 'vigente', fechaVenta: { gte: inicio, lte: fin } } }),
            this.prisma.lead.count({ where: { vendedorId: perfilId, estado: 'perdido', updatedAt: { gte: inicio, lte: fin } } }),
            this.prisma.venta.aggregate({
                where: { vendedorId: perfilId, estado: 'vigente', fechaVenta: { gte: inicio, lte: fin } },
                _sum: { montoPrima: true, montoComision: true },
            }),
        ]);
        const primaTotalVendida = Number(primaYComision._sum.montoPrima ?? 0);
        const comisionGenerada = Number(primaYComision._sum.montoComision ?? 0);
        const tasaContacto = leadsTomados > 0 ? (leadsContactados / leadsTomados) * 100 : 0;
        const tasaConversion = leadsContactados > 0 ? (ventasCerradas / leadsContactados) * 100 : 0;
        const ticketPromedio = ventasCerradas > 0 ? primaTotalVendida / ventasCerradas : 0;
        const rentabilidad = leadsTomados > 0 ? comisionGenerada / leadsTomados : 0;
        const puntos = config
            ? ventasCerradas * Number(config.pesoVentas) +
                leadsContactados * Number(config.pesoLeadsContactados) +
                tasaConversion * Number(config.pesoConversion) +
                ticketPromedio * Number(config.pesoTicketPromedio) +
                reuniones * Number(config.pesoReuniones)
            : ventasCerradas * 10 + leadsContactados * 1;
        await this.prisma.vendedorKpisPeriodo.upsert({
            where: { perfilId_periodoTipo_periodoInicio: { perfilId, periodoTipo, periodoInicio: inicio } },
            create: {
                perfilId, periodoTipo, periodoInicio: inicio, periodoFin: fin,
                leadsRecibidos, leadsTomados, leadsContactados,
                reunionesRealizadas: reuniones, cotizacionesEnviadas: cotizaciones,
                ventasCerradas, ventasPerdidas,
                primaTotalVendida, comisionGenerada,
                tasaContacto, tasaConversion, ticketPromedio, rentabilidad, puntos,
            },
            update: {
                leadsRecibidos, leadsTomados, leadsContactados,
                reunionesRealizadas: reuniones, cotizacionesEnviadas: cotizaciones,
                ventasCerradas, ventasPerdidas,
                primaTotalVendida, comisionGenerada,
                tasaContacto, tasaConversion, ticketPromedio, rentabilidad, puntos,
            },
        });
    }
    async getDashboardVendedor(perfilId, mes, anio) {
        const ahora = new Date();
        const m = mes ?? ahora.getMonth() + 1;
        const a = anio ?? ahora.getFullYear();
        const inicio = new Date(a, m - 1, 1);
        const kpis = await this.prisma.vendedorKpisPeriodo.findFirst({
            where: { perfilId, periodoTipo: client_1.PeriodoTipo.mensual, periodoInicio: inicio },
        });
        const stats = await this.prisma.vendedorStats.findUnique({ where: { perfilId } });
        const ranking = await this.prisma.rankingResultado.findFirst({
            where: { perfilId },
            include: { periodo: true },
            orderBy: { createdAt: 'desc' },
        });
        return { kpis, stats, ranking };
    }
    async getDashboardAdmin() {
        const ahora = new Date();
        const inicio = new Date(ahora.getFullYear(), ahora.getMonth(), 1);
        const [totalVentas, totalLeads, topVendedores, peorRendimiento] = await Promise.all([
            this.prisma.venta.aggregate({
                where: { fechaVenta: { gte: inicio }, estado: 'vigente' },
                _sum: { montoPrima: true, montoComision: true },
                _count: true,
            }),
            this.prisma.lead.count({ where: { createdAt: { gte: inicio } } }),
            this.prisma.vendedorKpisPeriodo.findMany({
                where: { periodoTipo: client_1.PeriodoTipo.mensual, periodoInicio: inicio },
                orderBy: { puntos: 'desc' },
                take: 5,
                include: { perfil: { select: { nombre: true, apellido: true, avatarUrl: true } } },
            }),
            this.prisma.vendedorKpisPeriodo.findMany({
                where: { periodoTipo: client_1.PeriodoTipo.mensual, periodoInicio: inicio },
                orderBy: { puntos: 'asc' },
                take: 5,
                include: { perfil: { select: { nombre: true, apellido: true } } },
            }),
        ]);
        return {
            mes: { inicio },
            ventas: {
                cantidad: totalVentas._count,
                prima_total: totalVentas._sum.montoPrima,
                comision_total: totalVentas._sum.montoComision,
            },
            leads_totales: totalLeads,
            top_vendedores: topVendedores,
            peor_rendimiento: peorRendimiento,
        };
    }
    async forzarCalculo() {
        await this.calcularKpisMensuales();
        return { mensaje: 'KPIs recalculados' };
    }
};
exports.KpisService = KpisService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_2AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KpisService.prototype, "calcularKpisMensuales", null);
__decorate([
    (0, schedule_1.Cron)('0 2 * * 1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KpisService.prototype, "calcularKpisSemanales", null);
exports.KpisService = KpisService = KpisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], KpisService);
//# sourceMappingURL=kpis.service.js.map