import { NoticiasService } from './noticias.service';
export declare class NoticiasController {
    private noticiasService;
    constructor(noticiasService: NoticiasService);
    findAll(activas: string, user: any): import(".prisma/client").Prisma.PrismaPromise<({
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
    crear(body: any, user: any): Promise<{
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
