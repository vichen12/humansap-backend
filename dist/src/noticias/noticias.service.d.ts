import { PrismaService } from '../prisma/prisma.service';
export declare class NoticiasService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(soloActivas?: boolean): import(".prisma/client").Prisma.PrismaPromise<({
        publicador: {
            nombre: string;
            apellido: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        activa: boolean;
        titulo: string;
        contenido: string;
        imagenUrl: string | null;
        publicadoPor: string;
    })[]>;
    crear(data: {
        titulo: string;
        contenido: string;
        imagenUrl?: string;
    }, perfilId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        activa: boolean;
        titulo: string;
        contenido: string;
        imagenUrl: string | null;
        publicadoPor: string;
    }>;
    eliminar(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        activa: boolean;
        titulo: string;
        contenido: string;
        imagenUrl: string | null;
        publicadoPor: string;
    }>;
}
