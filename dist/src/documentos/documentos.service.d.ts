import { PrismaService } from '../prisma/prisma.service';
import { DocumentoTipo } from '@prisma/client';
export declare class DocumentosService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(tipo?: DocumentoTipo): import(".prisma/client").Prisma.PrismaPromise<({
        subidor: {
            nombre: string;
            apellido: string;
        };
    } & {
        id: string;
        nombre: string;
        createdAt: Date;
        descripcion: string | null;
        tipo: import(".prisma/client").$Enums.DocumentoTipo;
        url: string;
        storagePath: string;
        subidoPor: string;
    })[]>;
    crear(data: {
        nombre: string;
        descripcion?: string;
        tipo: DocumentoTipo;
        url: string;
    }, perfilId: string): import(".prisma/client").Prisma.Prisma__DocumentoClient<{
        id: string;
        nombre: string;
        createdAt: Date;
        descripcion: string | null;
        tipo: import(".prisma/client").$Enums.DocumentoTipo;
        url: string;
        storagePath: string;
        subidoPor: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    eliminar(id: string): Promise<{
        id: string;
        nombre: string;
        createdAt: Date;
        descripcion: string | null;
        tipo: import(".prisma/client").$Enums.DocumentoTipo;
        url: string;
        storagePath: string;
        subidoPor: string;
    }>;
}
