import { PrismaService } from '../prisma/prisma.service';
import { PeriodoTipo } from '@prisma/client';
export declare class KpisService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    calcularKpisMensuales(): Promise<void>;
    calcularKpisSemanales(): Promise<void>;
    calcularPeriodo(tipo: PeriodoTipo, inicio: Date, fin: Date): Promise<void>;
    calcularParaVendedor(perfilId: string, periodoTipo: PeriodoTipo, inicio: Date, fin: Date, config: any): Promise<void>;
    getDashboardVendedor(perfilId: string, mes?: number, anio?: number): Promise<{
        kpis: {
            id: string;
            createdAt: Date;
            perfilId: string;
            leadsContactados: number;
            ventasPerdidas: number;
            ticketPromedio: import("@prisma/client/runtime/library").Decimal;
            leadsRecibidos: number;
            leadsTomados: number;
            ventasCerradas: number;
            periodoTipo: import(".prisma/client").$Enums.PeriodoTipo;
            periodoInicio: Date;
            periodoFin: Date;
            reunionesRealizadas: number;
            cotizacionesEnviadas: number;
            primaTotalVendida: import("@prisma/client/runtime/library").Decimal;
            comisionGenerada: import("@prisma/client/runtime/library").Decimal;
            comisionPagada: import("@prisma/client/runtime/library").Decimal;
            tasaContacto: import("@prisma/client/runtime/library").Decimal;
            tasaConversion: import("@prisma/client/runtime/library").Decimal;
            rentabilidad: import("@prisma/client/runtime/library").Decimal;
            puntos: import("@prisma/client/runtime/library").Decimal;
            posicionRanking: number | null;
        } | null;
        stats: {
            updatedAt: Date;
            perfilId: string;
            leadsTotales: number;
            leadsContactados: number;
            reunionesTotales: number;
            cotizacionesTotales: number;
            ventasTotales: number;
            ventasPerdidas: number;
            primaTotal: import("@prisma/client/runtime/library").Decimal;
            comisionesTotales: import("@prisma/client/runtime/library").Decimal;
            tasaConversionTotal: import("@prisma/client/runtime/library").Decimal;
            ticketPromedio: import("@prisma/client/runtime/library").Decimal;
        } | null;
        ranking: ({
            periodo: {
                id: string;
                nombre: string;
                createdAt: Date;
                estado: import(".prisma/client").$Enums.RankingEstado;
                fechaInicio: Date;
                fechaFin: Date;
                rankingConfigId: string | null;
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
        }) | null;
    }>;
    getDashboardAdmin(): Promise<{
        mes: {
            inicio: Date;
        };
        ventas: {
            cantidad: number;
            prima_total: import("@prisma/client/runtime/library").Decimal | null;
            comision_total: import("@prisma/client/runtime/library").Decimal | null;
        };
        leads_totales: number;
        top_vendedores: ({
            perfil: {
                nombre: string;
                apellido: string;
                avatarUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            perfilId: string;
            leadsContactados: number;
            ventasPerdidas: number;
            ticketPromedio: import("@prisma/client/runtime/library").Decimal;
            leadsRecibidos: number;
            leadsTomados: number;
            ventasCerradas: number;
            periodoTipo: import(".prisma/client").$Enums.PeriodoTipo;
            periodoInicio: Date;
            periodoFin: Date;
            reunionesRealizadas: number;
            cotizacionesEnviadas: number;
            primaTotalVendida: import("@prisma/client/runtime/library").Decimal;
            comisionGenerada: import("@prisma/client/runtime/library").Decimal;
            comisionPagada: import("@prisma/client/runtime/library").Decimal;
            tasaContacto: import("@prisma/client/runtime/library").Decimal;
            tasaConversion: import("@prisma/client/runtime/library").Decimal;
            rentabilidad: import("@prisma/client/runtime/library").Decimal;
            puntos: import("@prisma/client/runtime/library").Decimal;
            posicionRanking: number | null;
        })[];
        peor_rendimiento: ({
            perfil: {
                nombre: string;
                apellido: string;
            };
        } & {
            id: string;
            createdAt: Date;
            perfilId: string;
            leadsContactados: number;
            ventasPerdidas: number;
            ticketPromedio: import("@prisma/client/runtime/library").Decimal;
            leadsRecibidos: number;
            leadsTomados: number;
            ventasCerradas: number;
            periodoTipo: import(".prisma/client").$Enums.PeriodoTipo;
            periodoInicio: Date;
            periodoFin: Date;
            reunionesRealizadas: number;
            cotizacionesEnviadas: number;
            primaTotalVendida: import("@prisma/client/runtime/library").Decimal;
            comisionGenerada: import("@prisma/client/runtime/library").Decimal;
            comisionPagada: import("@prisma/client/runtime/library").Decimal;
            tasaContacto: import("@prisma/client/runtime/library").Decimal;
            tasaConversion: import("@prisma/client/runtime/library").Decimal;
            rentabilidad: import("@prisma/client/runtime/library").Decimal;
            puntos: import("@prisma/client/runtime/library").Decimal;
            posicionRanking: number | null;
        })[];
    }>;
    forzarCalculo(): Promise<{
        mensaje: string;
    }>;
}
