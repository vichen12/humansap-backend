import { PrismaService } from '../prisma/prisma.service';
import { CreateConsultaDto, UpdateConsultaDto } from './dto/create-consulta.dto';
import { RolTipo } from '@prisma/client';
export declare class ConsultasService {
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
        descripcion: string;
        estado: import(".prisma/client").$Enums.ConsultaEstado;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.ConsultaTipo;
        leadId: string | null;
        clienteId: string | null;
        resolucion: string | null;
    })[]>;
    findOne(id: string, user: {
        id: string;
        rol: RolTipo;
    }): Promise<{
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
        cliente: {
            id: string;
            email: string | null;
            nombre: string;
            apellido: string;
            telefono: string;
            activo: boolean;
            createdAt: Date;
            updatedAt: Date;
            provincia: string | null;
            notas: string | null;
            vendedorId: string;
            direccion: string | null;
            localidad: string | null;
            fechaNacimiento: Date | null;
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
        descripcion: string;
        estado: import(".prisma/client").$Enums.ConsultaEstado;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.ConsultaTipo;
        leadId: string | null;
        clienteId: string | null;
        resolucion: string | null;
    }>;
    create(dto: CreateConsultaDto, userId: string): Promise<{
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        estado: import(".prisma/client").$Enums.ConsultaEstado;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.ConsultaTipo;
        leadId: string | null;
        clienteId: string | null;
        resolucion: string | null;
    }>;
    update(id: string, dto: UpdateConsultaDto, user: {
        id: string;
        rol: RolTipo;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        estado: import(".prisma/client").$Enums.ConsultaEstado;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.ConsultaTipo;
        leadId: string | null;
        clienteId: string | null;
        resolucion: string | null;
    }>;
    remove(id: string, user: {
        id: string;
        rol: RolTipo;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        estado: import(".prisma/client").$Enums.ConsultaEstado;
        vendedorId: string;
        tipo: import(".prisma/client").$Enums.ConsultaTipo;
        leadId: string | null;
        clienteId: string | null;
        resolucion: string | null;
    }>;
}
