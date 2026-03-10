import { PrismaService } from '../prisma/prisma.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { RolTipo } from '@prisma/client';
export declare class VentasService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(user: {
        id: string;
        rol: RolTipo;
    }): Promise<({
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
    create(dto: CreateVentaDto, userId: string): Promise<{
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
    resumenMes(userId: string, mes: number, anio: number): Promise<{
        cantidad: number;
        prima_total: number;
        comision_total: number;
        ticket_promedio: number;
    }>;
}
