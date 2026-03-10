import { PrismaService } from '../prisma/prisma.service';
export declare class ZonasService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nombre: string;
        createdAt: Date;
        provincia: string;
        pais: string;
        descripcion: string | null;
        activa: boolean;
    }[]>;
    crear(data: {
        nombre: string;
        provincia: string;
        pais?: string;
        descripcion?: string;
    }): import(".prisma/client").Prisma.Prisma__ZonaClient<{
        id: string;
        nombre: string;
        createdAt: Date;
        provincia: string;
        pais: string;
        descripcion: string | null;
        activa: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
