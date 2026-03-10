import { ConsultaEstado, ConsultaTipo } from '@prisma/client';
export declare class CreateConsultaDto {
    clienteId?: string;
    leadId?: string;
    tipo?: ConsultaTipo;
    descripcion: string;
}
export declare class UpdateConsultaDto {
    estado?: ConsultaEstado;
    resolucion?: string;
}
