import { LeadOrigen } from '@prisma/client';
export declare class CreateLeadDto {
    nombre: string;
    apellido: string;
    email?: string;
    telefono: string;
    zonaId?: string;
    origen?: LeadOrigen;
    notas?: string;
}
