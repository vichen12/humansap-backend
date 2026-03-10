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
exports.NoticiasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NoticiasService = class NoticiasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(soloActivas = false) {
        return this.prisma.noticia.findMany({
            where: soloActivas ? { activa: true } : undefined,
            include: { publicador: { select: { nombre: true, apellido: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async crear(data, perfilId) {
        const noticia = await this.prisma.noticia.create({
            data: { ...data, publicadoPor: perfilId },
        });
        const vendedores = await this.prisma.profile.findMany({
            where: { rol: { not: 'admin' }, activo: true },
            select: { id: true },
        });
        if (vendedores.length > 0) {
            await this.prisma.notificacion.createMany({
                data: vendedores.map((v) => ({
                    titulo: 'Nueva novedad publicada',
                    mensaje: data.titulo,
                    tipo: 'noticia',
                    vendedorId: v.id,
                    noticiaId: noticia.id,
                })),
            });
        }
        return noticia;
    }
    async eliminar(id) {
        const noticia = await this.prisma.noticia.findUnique({ where: { id } });
        if (!noticia)
            throw new common_1.NotFoundException('Noticia no encontrada');
        await this.prisma.notificacion.deleteMany({ where: { noticiaId: id } });
        return this.prisma.noticia.delete({ where: { id } });
    }
};
exports.NoticiasService = NoticiasService;
exports.NoticiasService = NoticiasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NoticiasService);
//# sourceMappingURL=noticias.service.js.map