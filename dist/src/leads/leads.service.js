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
exports.LeadsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let LeadsService = class LeadsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        if (user.rol === client_1.RolTipo.admin) {
            return this.prisma.lead.findMany({
                include: { zona: true, vendedor: { select: { id: true, nombre: true, apellido: true } } },
                orderBy: { createdAt: 'desc' },
            });
        }
        const profile = await this.prisma.profile.findUnique({ where: { id: user.id } });
        return this.prisma.lead.findMany({
            where: {
                OR: [
                    { vendedorId: user.id },
                    { zonaId: profile?.zonaId ?? undefined, estado: client_1.LeadEstado.nuevo },
                ],
            },
            include: { zona: true, vendedor: { select: { id: true, nombre: true, apellido: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const lead = await this.prisma.lead.findUnique({
            where: { id },
            include: {
                zona: true,
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                actividades: { orderBy: { createdAt: 'desc' } },
                cotizaciones: true,
                ventas: true,
            },
        });
        if (!lead)
            throw new common_1.NotFoundException('Lead no encontrado');
        return lead;
    }
    async create(dto, userId) {
        const lead = await this.prisma.lead.create({
            data: { ...dto, estado: client_1.LeadEstado.nuevo },
        });
        await this.prisma.leadActividad.create({
            data: { leadId: lead.id, vendedorId: userId, tipo: 'recibido' },
        });
        if (lead.zonaId) {
            const vendedoresZona = await this.prisma.profile.findMany({
                where: { zonaId: lead.zonaId, activo: true, rol: { not: client_1.RolTipo.admin } },
                select: { id: true },
            });
            await this.prisma.notificacion.createMany({
                data: vendedoresZona.map((v) => ({
                    titulo: 'Nuevo lead disponible',
                    mensaje: `${lead.nombre} ${lead.apellido} - ${lead.telefono}`,
                    tipo: 'lead_nuevo',
                    vendedorId: v.id,
                    leadId: lead.id,
                })),
            });
        }
        return lead;
    }
    async tomarLead(id, userId) {
        const lead = await this.prisma.lead.findUnique({ where: { id } });
        if (!lead)
            throw new common_1.NotFoundException('Lead no encontrado');
        if (lead.estado !== client_1.LeadEstado.nuevo)
            throw new common_1.ForbiddenException('Lead ya fue tomado');
        const updated = await this.prisma.lead.update({
            where: { id },
            data: {
                vendedorId: userId,
                estado: client_1.LeadEstado.tomado,
                tomadoAt: new Date(),
            },
        });
        await this.prisma.leadActividad.create({
            data: { leadId: id, vendedorId: userId, tipo: 'tomado' },
        });
        return updated;
    }
    async actualizarEstado(id, estado, userId, notas) {
        const lead = await this.prisma.lead.findUnique({ where: { id } });
        if (!lead)
            throw new common_1.NotFoundException('Lead no encontrado');
        if (lead.vendedorId !== userId)
            throw new common_1.ForbiddenException('No es tu lead');
        const data = { estado };
        if (estado === client_1.LeadEstado.contactado)
            data.contactadoAt = new Date();
        const updated = await this.prisma.lead.update({ where: { id }, data });
        const eventoMap = {
            contactado: 'contactado',
            en_proceso: 'cotizacion_enviada',
            cerrado: 'venta_cerrada',
            perdido: 'perdido',
        };
        const tipo = eventoMap[estado];
        if (tipo) {
            await this.prisma.leadActividad.create({
                data: { leadId: id, vendedorId: userId, tipo: tipo, notas },
            });
        }
        return updated;
    }
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeadsService);
//# sourceMappingURL=leads.service.js.map