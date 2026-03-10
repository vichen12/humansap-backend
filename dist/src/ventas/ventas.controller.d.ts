import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
export declare class VentasController {
    private ventasService;
    constructor(ventasService: VentasService);
    findAll(user: any): Promise<({
        lead: {
            id: string;
            nombre: string;
            apellido: string;
        } | null;
        cliente: {
            id: string;
            nombre: string;
            apellido: string;
        } | null;
        vendedor: {
            id: string;
            nombre: string;
            apellido: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notas: string | null;
        estado: import(".prisma/client").$Enums.VentaEstado;
        vendedorId: string;
        leadId: string | null;
        clienteId: string | null;
        cotizacionId: string | null;
        producto: string;
        compania: string | null;
        montoPrima: import("@prisma/client/runtime/library").Decimal | null;
        montoComision: import("@prisma/client/runtime/library").Decimal | null;
        porcentajeComision: import("@prisma/client/runtime/library").Decimal | null;
        fechaVenta: Date;
        fechaVencimiento: Date | null;
    })[]>;
    resumen(user: any, mes: string, anio: string): Promise<{
        cantidad: number;
        prima_total: number;
        comision_total: number;
        ticket_promedio: number;
    }>;
    findOne(id: string): Promise<{
        lead: {
            id: string;
            email: string | null;
            nombre: string;
            apellido: string;
            telefono: string;
            zonaId: string | null;
            createdAt: Date;
            updatedAt: Date;
            origen: import(".prisma/client").$Enums.LeadOrigen;
            notas: string | null;
            estado: import(".prisma/client").$Enums.LeadEstado;
            vendedorId: string | null;
            tomadoAt: Date | null;
            contactadoAt: Date | null;
        } | null;
        cotizacion: {
            id: string;
            createdAt: Date;
            descripcion: string | null;
            estado: import(".prisma/client").$Enums.CotizacionEstado;
            vendedorId: string;
            leadId: string;
            producto: string;
            compania: string | null;
            montoPrima: import("@prisma/client/runtime/library").Decimal | null;
            fechaEnvio: Date;
        } | null;
        vendedor: {
            id: string;
            nombre: string;
            apellido: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notas: string | null;
        estado: import(".prisma/client").$Enums.VentaEstado;
        vendedorId: string;
        leadId: string | null;
        clienteId: string | null;
        cotizacionId: string | null;
        producto: string;
        compania: string | null;
        montoPrima: import("@prisma/client/runtime/library").Decimal | null;
        montoComision: import("@prisma/client/runtime/library").Decimal | null;
        porcentajeComision: import("@prisma/client/runtime/library").Decimal | null;
        fechaVenta: Date;
        fechaVencimiento: Date | null;
    }>;
    create(dto: CreateVentaDto, user: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notas: string | null;
        estado: import(".prisma/client").$Enums.VentaEstado;
        vendedorId: string;
        leadId: string | null;
        clienteId: string | null;
        cotizacionId: string | null;
        producto: string;
        compania: string | null;
        montoPrima: import("@prisma/client/runtime/library").Decimal | null;
        montoComision: import("@prisma/client/runtime/library").Decimal | null;
        porcentajeComision: import("@prisma/client/runtime/library").Decimal | null;
        fechaVenta: Date;
        fechaVencimiento: Date | null;
    }>;
}
