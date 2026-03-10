import { PrismaService } from '../prisma/prisma.service';
import { RolTipo } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getMe(id: string): Promise<{
        id: string;
        email: string;
        nombre: string;
        apellido: string;
        telefono: string | null;
        rol: import(".prisma/client").$Enums.RolTipo;
        matricula: string | null;
        activo: boolean;
        avatarUrl: string | null;
        createdAt: Date;
        zona: {
            id: string;
            nombre: string;
            createdAt: Date;
            provincia: string;
            pais: string;
            descripcion: string | null;
            activa: boolean;
        } | null;
    }>;
    updateMe(id: string, data: {
        nombre?: string;
        apellido?: string;
        telefono?: string;
        avatar_url?: string;
    }): Promise<{
        id: string;
        email: string;
        nombre: string;
        apellido: string;
        telefono: string | null;
        rol: import(".prisma/client").$Enums.RolTipo;
        matricula: string | null;
        activo: boolean;
        avatarUrl: string | null;
        createdAt: Date;
        zona: {
            id: string;
            nombre: string;
            createdAt: Date;
            provincia: string;
            pais: string;
            descripcion: string | null;
            activa: boolean;
        } | null;
    }>;
    changePassword(id: string, currentPassword: string, newPassword: string): Promise<{
        message: string;
    }>;
    getVendedores(): Promise<{
        id: string;
        email: string;
        nombre: string;
        apellido: string;
        telefono: string | null;
        rol: import(".prisma/client").$Enums.RolTipo;
        matricula: string | null;
        activo: boolean;
        createdAt: Date;
        zona: {
            id: string;
            nombre: string;
            createdAt: Date;
            provincia: string;
            pais: string;
            descripcion: string | null;
            activa: boolean;
        } | null;
    }[]>;
    crear(data: {
        email: string;
        password: string;
        nombre: string;
        apellido: string;
        telefono?: string;
        rol: RolTipo;
        zonaId?: string;
        matricula?: string;
    }): Promise<{
        id: string;
        email: string;
        nombre: string;
        apellido: string;
        rol: import(".prisma/client").$Enums.RolTipo;
        activo: boolean;
        createdAt: Date;
    }>;
    actualizar(id: string, data: {
        activo?: boolean;
        zonaId?: string;
        telefono?: string;
    }): Promise<{
        id: string;
        email: string;
        nombre: string;
        apellido: string;
        rol: import(".prisma/client").$Enums.RolTipo;
        activo: boolean;
        zona: {
            id: string;
            nombre: string;
            createdAt: Date;
            provincia: string;
            pais: string;
            descripcion: string | null;
            activa: boolean;
        } | null;
    }>;
}
