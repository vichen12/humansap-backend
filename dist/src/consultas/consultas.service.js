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
exports.ConsultasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ConsultasService = class ConsultasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        const where = user.rol === client_1.RolTipo.admin ? {} : { vendedorId: user.id };
        return this.prisma.consulta.findMany({
            where,
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                cliente: { select: { id: true, nombre: true, apellido: true } },
                lead: { select: { id: true, nombre: true, apellido: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, user) {
        const consulta = await this.prisma.consulta.findUnique({
            where: { id },
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                cliente: true,
                lead: true,
            },
        });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta no encontrada');
        if (user.rol !== client_1.RolTipo.admin && consulta.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return consulta;
    }
    async create(dto, userId) {
        return this.prisma.consulta.create({
            data: {
                ...dto,
                vendedorId: userId,
            },
            include: {
                cliente: { select: { id: true, nombre: true, apellido: true } },
                lead: { select: { id: true, nombre: true, apellido: true } },
            },
        });
    }
    async update(id, dto, user) {
        const consulta = await this.prisma.consulta.findUnique({ where: { id } });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta no encontrada');
        if (user.rol !== client_1.RolTipo.admin && consulta.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.consulta.update({ where: { id }, data: dto });
    }
    async remove(id, user) {
        const consulta = await this.prisma.consulta.findUnique({ where: { id } });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta no encontrada');
        if (user.rol !== client_1.RolTipo.admin && consulta.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.consulta.delete({ where: { id } });
    }
};
exports.ConsultasService = ConsultasService;
exports.ConsultasService = ConsultasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsultasService);
//# sourceMappingURL=consultas.service.js.map