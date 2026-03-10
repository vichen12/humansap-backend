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
exports.VentasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let VentasService = class VentasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        const where = user.rol === client_1.RolTipo.admin ? {} : { vendedorId: user.id };
        return this.prisma.venta.findMany({
            where,
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                lead: { select: { id: true, nombre: true, apellido: true } },
                cliente: { select: { id: true, nombre: true, apellido: true } },
            },
            orderBy: { fechaVenta: 'desc' },
        });
    }
    async findOne(id) {
        const venta = await this.prisma.venta.findUnique({
            where: { id },
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                lead: true,
                cotizacion: true,
            },
        });
        if (!venta)
            throw new common_1.NotFoundException('Venta no encontrada');
        return venta;
    }
    async create(dto, userId) {
        const venta = await this.prisma.venta.create({
            data: {
                ...dto,
                vendedorId: userId,
                fechaVenta: new Date(dto.fechaVenta),
                fechaVencimiento: dto.fechaVencimiento ? new Date(dto.fechaVencimiento) : undefined,
            },
        });
        if (dto.leadId) {
            await this.prisma.lead.update({
                where: { id: dto.leadId },
                data: { estado: 'cerrado' },
            });
        }
        await this.prisma.vendedorStats.upsert({
            where: { perfilId: userId },
            create: {
                perfilId: userId,
                ventasTotales: 1,
                primaTotal: venta.montoPrima ?? 0,
                comisionesTotales: venta.montoComision ?? 0,
            },
            update: {
                ventasTotales: { increment: 1 },
                primaTotal: { increment: Number(venta.montoPrima ?? 0) },
                comisionesTotales: { increment: Number(venta.montoComision ?? 0) },
            },
        });
        return venta;
    }
    async resumenMes(userId, mes, anio) {
        const inicio = new Date(anio, mes - 1, 1);
        const fin = new Date(anio, mes, 0);
        const ventas = await this.prisma.venta.findMany({
            where: {
                vendedorId: userId,
                fechaVenta: { gte: inicio, lte: fin },
                estado: 'vigente',
            },
        });
        const totalPrima = ventas.reduce((s, v) => s + Number(v.montoPrima ?? 0), 0);
        const totalComision = ventas.reduce((s, v) => s + Number(v.montoComision ?? 0), 0);
        return {
            cantidad: ventas.length,
            prima_total: totalPrima,
            comision_total: totalComision,
            ticket_promedio: ventas.length > 0 ? totalPrima / ventas.length : 0,
        };
    }
};
exports.VentasService = VentasService;
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VentasService);
//# sourceMappingURL=ventas.service.js.map