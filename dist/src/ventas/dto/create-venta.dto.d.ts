import { VentaEstado } from '@prisma/client';
export declare class CreateVentaDto {
    leadId?: string;
    clienteId?: string;
    cotizacionId?: string;
    producto: string;
    compania?: string;
    montoPrima?: number;
    montoComision?: number;
    porcentajeComision?: number;
    estado?: VentaEstado;
    fechaVenta: string;
    fechaVencimiento?: string;
    notas?: string;
}
