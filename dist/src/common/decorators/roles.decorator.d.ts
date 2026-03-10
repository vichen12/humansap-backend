import { RolTipo } from '@prisma/client';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: RolTipo[]) => import("@nestjs/common").CustomDecorator<string>;
