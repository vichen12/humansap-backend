"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMe(id) {
        const user = await this.prisma.profile.findUnique({
            where: { id },
            select: {
                id: true, email: true, nombre: true, apellido: true,
                telefono: true, rol: true, matricula: true, activo: true,
                avatarUrl: true, createdAt: true,
                zona: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return user;
    }
    async updateMe(id, data) {
        if (data.nombre !== undefined && !data.nombre.trim()) {
            throw new common_1.BadRequestException('El nombre no puede estar vacío');
        }
        if (data.apellido !== undefined && !data.apellido.trim()) {
            throw new common_1.BadRequestException('El apellido no puede estar vacío');
        }
        return this.prisma.profile.update({
            where: { id },
            data: {
                ...(data.nombre && { nombre: data.nombre.trim() }),
                ...(data.apellido && { apellido: data.apellido.trim() }),
                ...(data.telefono !== undefined && { telefono: data.telefono.trim() || null }),
                ...(data.avatar_url !== undefined && { avatarUrl: data.avatar_url || null }),
            },
            select: {
                id: true, email: true, nombre: true, apellido: true,
                telefono: true, rol: true, matricula: true, activo: true,
                avatarUrl: true, createdAt: true, zona: true,
            },
        });
    }
    async changePassword(id, currentPassword, newPassword) {
        if (!newPassword || newPassword.length < 8) {
            throw new common_1.BadRequestException('La contraseña nueva debe tener al menos 8 caracteres');
        }
        const user = await this.prisma.profile.findUnique({
            where: { id },
            select: { passwordHash: true },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const valid = await bcrypt.compare(currentPassword, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('La contraseña actual es incorrecta');
        const newHash = await bcrypt.hash(newPassword, 10);
        await this.prisma.profile.update({
            where: { id },
            data: { passwordHash: newHash },
        });
        return { message: 'Contraseña actualizada correctamente' };
    }
    async getVendedores() {
        return this.prisma.profile.findMany({
            where: { rol: { in: [client_1.RolTipo.vendedor_matriculado, client_1.RolTipo.vendedor_sin_matricula] } },
            select: {
                id: true, nombre: true, apellido: true, email: true,
                telefono: true, rol: true, matricula: true, activo: true,
                zona: true, createdAt: true,
            },
            orderBy: { nombre: 'asc' },
        });
    }
    async crear(data) {
        const existe = await this.prisma.profile.findUnique({ where: { email: data.email } });
        if (existe)
            throw new common_1.ConflictException('El email ya esta registrado');
        const passwordHash = await bcrypt.hash(data.password, 10);
        const { password: _pw, ...rest } = data;
        const user = await this.prisma.profile.create({
            data: { ...rest, passwordHash },
            select: {
                id: true, email: true, nombre: true, apellido: true,
                rol: true, activo: true, createdAt: true,
            },
        });
        await this.prisma.vendedorStats.create({ data: { perfilId: user.id } });
        return user;
    }
    async actualizar(id, data) {
        return this.prisma.profile.update({
            where: { id },
            data,
            select: {
                id: true, email: true, nombre: true, apellido: true,
                rol: true, activo: true, zona: true,
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map