import { NotificacionesService } from './notificaciones.service';
export declare class NotificacionesController {
    private notificacionesService;
    constructor(notificacionesService: NotificacionesService);
    findAll(user: any): import(".prisma/client").Prisma.PrismaPromise<({
        lead: {
            id: string;
            nombre: string;
            apellido: string;
        } | null;
        noticia: {
            id: string;
            titulo: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.NotificacionTipo;
        leadId: string | null;
        titulo: string;
        noticiaId: string | null;
        mensaje: string;
        leida: boolean;
    })[]>;
    marcarLeida(id: string): import(".prisma/client").Prisma.Prisma__NotificacionClient<{
        id: string;
        createdAt: Date;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.NotificacionTipo;
        leadId: string | null;
        titulo: string;
        noticiaId: string | null;
        mensaje: string;
        leida: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    marcarTodasLeidas(user: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
