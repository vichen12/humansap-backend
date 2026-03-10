import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getMe(user: any): Promise<{
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
    updateMe(user: any, body: {
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
    changePassword(user: any, body: {
        current_password: string;
        new_password: string;
    }): Promise<{
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
    crear(body: any): Promise<{
        id: string;
        email: string;
        nombre: string;
        apellido: string;
        rol: import(".prisma/client").$Enums.RolTipo;
        activo: boolean;
        createdAt: Date;
    }>;
    actualizar(id: string, body: any): Promise<{
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
