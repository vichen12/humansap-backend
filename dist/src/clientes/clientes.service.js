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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ClientesService = class ClientesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        const where = user.rol === client_1.RolTipo.admin ? {} : { vendedorId: user.id };
        return this.prisma.cliente.findMany({
            where,
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                _count: { select: { ventas: true, consultas: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, user) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id },
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                ventas: { orderBy: { fechaVenta: 'desc' } },
                consultas: { orderBy: { createdAt: 'desc' } },
            },
        });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        if (user.rol !== client_1.RolTipo.admin && cliente.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return cliente;
    }
    async create(dto, userId) {
        return this.prisma.cliente.create({
            data: {
                ...dto,
                vendedorId: userId,
                fechaNacimiento: dto.fechaNacimiento ? new Date(dto.fechaNacimiento) : undefined,
            },
        });
    }
    async update(id, dto, user) {
        const cliente = await this.prisma.cliente.findUnique({ where: { id } });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        if (user.rol !== client_1.RolTipo.admin && cliente.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.cliente.update({
            where: { id },
            data: {
                ...dto,
                fechaNacimiento: dto.fechaNacimiento ? new Date(dto.fechaNacimiento) : undefined,
            },
        });
    }
    async remove(id, user) {
        const cliente = await this.prisma.cliente.findUnique({ where: { id } });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        if (user.rol !== client_1.RolTipo.admin && cliente.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.cliente.update({ where: { id }, data: { activo: false } });
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map