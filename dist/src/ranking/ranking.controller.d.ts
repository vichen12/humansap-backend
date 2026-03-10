import { RankingService } from './ranking.service';
export declare class RankingController {
    private rankingService;
    constructor(rankingService: RankingService);
    getPeriodoActivo(): Promise<({
        resultados: ({
            perfil: {
                id: string;
                nombre: string;
                apellido: string;
                avatarUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            ventas: number;
            perfilId: string;
            leadsContactados: number;
            primaTotal: import("@prisma/client/runtime/library").Decimal;
            comisionGenerada: import("@prisma/client/runtime/library").Decimal;
            tasaConversion: import("@prisma/client/runtime/library").Decimal;
            puntos: import("@prisma/client/runtime/library").Decimal;
            rankingPeriodoId: string;
            posicion: number | null;
        })[];
    } & {
        id: string;
        nombre: string;
        createdAt: Date;
        estado: import(".prisma/client").$Enums.RankingEstado;
        fechaInicio: Date;
        fechaFin: Date;
        rankingConfigId: string | null;
    }) | null>;
    getPeriodos(): Promise<({
        config: {
            id: string;
            nombre: string;
            createdAt: Date;
            activa: boolean;
            pesoVentas: import("@prisma/client/runtime/library").Decimal;
            pesoLeadsContactados: import("@prisma/client/runtime/library").Decimal;
            pesoConversion: import("@prisma/client/runtime/library").Decimal;
            pesoTicketPromedio: import("@prisma/client/runtime/library").Decimal;
            pesoReuniones: import("@prisma/client/runtime/library").Decimal;
        } | null;
    } & {
        id: string;
        nombre: string;
        createdAt: Date;
        estado: import(".prisma/client").$Enums.RankingEstado;
        fechaInicio: Date;
        fechaFin: Date;
        rankingConfigId: string | null;
    })[]>;
    getRanking(id: string): Promise<({
        perfil: {
            id: string;
            nombre: string;
            apellido: string;
            avatarUrl: string | null;
            zona: {
                id: string;
                nombre: string;
                createdAt: Date;
                provincia: string;
                pais: string;
                descripcion: string | null;
                activa: boolean;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        ventas: number;
        perfilId: string;
        leadsContactados: number;
        primaTotal: import("@prisma/client/runtime/library").Decimal;
        comisionGenerada: import("@prisma/client/runtime/library").Decimal;
        tasaConversion: import("@prisma/client/runtime/library").Decimal;
        puntos: import("@prisma/client/runtime/library").Decimal;
        rankingPeriodoId: string;
        posicion: number | null;
    })[]>;
    crearPeriodo(body: any): Promise<{
        id: string;
        nombre: string;
        createdAt: Date;
        estado: import(".prisma/client").$Enums.RankingEstado;
        fechaInicio: Date;
        fechaFin: Date;
        rankingConfigId: string | null;
    }>;
    cerrarPeriodo(id: string): Promise<{
        mensaje: string;
        total_vendedores: number;
    }>;
    getConfig(): Promise<{
        id: string;
        nombre: string;
        createdAt: Date;
        activa: boolean;
        pesoVentas: import("@prisma/client/runtime/library").Decimal;
        pesoLeadsContactados: import("@prisma/client/runtime/library").Decimal;
        pesoConversion: import("@prisma/client/runtime/library").Decimal;
        pesoTicketPromedio: import("@prisma/client/runtime/library").Decimal;
        pesoReuniones: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    actualizarConfig(id: string, body: any): Promise<{
        id: string;
        nombre: string;
        createdAt: Date;
        activa: boolean;
        pesoVentas: import("@prisma/client/runtime/library").Decimal;
        pesoLeadsContactados: import("@prisma/client/runtime/library").Decimal;
        pesoConversion: import("@prisma/client/runtime/library").Decimal;
        pesoTicketPromedio: import("@prisma/client/runtime/library").Decimal;
        pesoReuniones: import("@prisma/client/runtime/library").Decimal;
    }>;
}
