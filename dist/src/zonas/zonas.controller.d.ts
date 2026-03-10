import { ZonasService } from './zonas.service';
export declare class ZonasController {
    private zonasService;
    constructor(zonasService: ZonasService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nombre: string;
        createdAt: Date;
        provincia: string;
        pais: string;
        descripcion: string | null;
        activa: boolean;
    }[]>;
    crear(body: any): import(".prisma/client").Prisma.Prisma__ZonaClient<{
        id: string;
        nombre: string;
        createdAt: Date;
        provincia: string;
        pais: string;
        descripcion: string | null;
        activa: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
