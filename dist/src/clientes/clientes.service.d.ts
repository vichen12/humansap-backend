import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { RolTipo } from '@prisma/client';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(user: {
        id: string;
        rol: RolTipo;
    }): Promise<({
        _count: {
            ventas: number;
            consultas: number;
        };
        vendedor: {
            id: string;
            nombre: string;
            apellido: string;
        };
    } & {
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
    })[]>;
    findOne(id: string, user: {
        id: string;
        rol: RolTipo;
    }): Promise<{
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
        consultas: {
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
        }[];
        vendedor: {
            id: string;
            nombre: string;
            apellido: string;
        };
    } & {
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
    }>;
    create(dto: CreateClienteDto, userId: string): Promise<{
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
    }>;
    update(id: string, dto: Partial<CreateClienteDto>, user: {
        id: string;
        rol: RolTipo;
    }): Promise<{
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
    }>;
    remove(id: string, user: {
        id: string;
        rol: RolTipo;
    }): Promise<{
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
    }>;
}
