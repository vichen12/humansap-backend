import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { LeadEstado } from '@prisma/client';
export declare class LeadsController {
    private leadsService;
    constructor(leadsService: LeadsService);
    findAll(user: any): Promise<({
        zona: {
            id: string;
            nombre: string;
            createdAt: Date;
            provincia: string;
            pais: string;
            descripcion: string | null;
            activa: boolean;
        } | null;
        vendedor: {
            id: string;
            nombre: string;
            apellido: string;
        } | null;
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        zona: {
            id: string;
            nombre: string;
            createdAt: Date;
            provincia: string;
            pais: string;
            descripcion: string | null;
            activa: boolean;
        } | null;
        cotizaciones: {
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
        }[];
        ventas: {
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
        }[];
        vendedor: {
            id: string;
            nombre: string;
            apellido: string;
        } | null;
        actividades: {
            id: string;
            createdAt: Date;
            notas: string | null;
            vendedorId: string | null;
            tipo: import(".prisma/client").$Enums.LeadEventoTipo;
            leadId: string;
        }[];
    } & {
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
    }>;
    create(dto: CreateLeadDto, user: any): Promise<{
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
    }>;
    tomar(id: string, user: any): Promise<{
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
    }>;
    actualizarEstado(id: string, estado: LeadEstado, notas: string, user: any): Promise<{
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
    }>;
}
