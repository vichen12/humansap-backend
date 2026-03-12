import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CicloTipo, CriterioDesempate } from '@prisma/client';

@Injectable()
export class ConfiguracionService {
  constructor(private prisma: PrismaService) {}

  // ── Ciclo de ventas ───────────────────────────────────────────────

  async getCiclo() {
    return this.prisma.configCiclo.findFirst({
      where: { activo: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async upsertCiclo(data: {
    tipo: CicloTipo;
    diaInicio?: number;
    diaFin?: number;
    duracionDias?: number;
    fechaInicioCustom?: string;
    fechaFinCustom?: string;
  }) {
    const existing = await this.prisma.configCiclo.findFirst({ where: { activo: true } });
    const payload = {
      tipo: data.tipo,
      diaInicio: data.diaInicio ?? null,
      diaFin: data.diaFin ?? null,
      duracionDias: data.duracionDias ?? null,
      fechaInicioCustom: data.fechaInicioCustom ? new Date(data.fechaInicioCustom) : null,
      fechaFinCustom: data.fechaFinCustom ? new Date(data.fechaFinCustom) : null,
    };
    if (existing) {
      return this.prisma.configCiclo.update({ where: { id: existing.id }, data: payload });
    }
    return this.prisma.configCiclo.create({ data: { ...payload, activo: true } });
  }

  // ── Sorteos ───────────────────────────────────────────────────────

  async getSorteos() {
    return this.prisma.sorteo.findMany({
      where: { activo: true },
      orderBy: { fecha: 'asc' },
    });
  }

  async createSorteo(data: {
    titulo: string;
    descripcion?: string;
    premio: string;
    fecha: string;
    imagenUrl?: string;
  }) {
    return this.prisma.sorteo.create({
      data: { ...data, fecha: new Date(data.fecha) },
    });
  }

  async updateSorteo(
    id: string,
    data: Partial<{
      titulo: string;
      descripcion: string;
      premio: string;
      fecha: string;
      imagenUrl: string;
      activo: boolean;
    }>,
  ) {
    const sorteo = await this.prisma.sorteo.findUnique({ where: { id } });
    if (!sorteo) throw new NotFoundException('Sorteo no encontrado');
    return this.prisma.sorteo.update({
      where: { id },
      data: { ...data, fecha: data.fecha ? new Date(data.fecha) : undefined },
    });
  }

  async deleteSorteo(id: string) {
    const sorteo = await this.prisma.sorteo.findUnique({ where: { id } });
    if (!sorteo) throw new NotFoundException('Sorteo no encontrado');
    return this.prisma.sorteo.update({ where: { id }, data: { activo: false } });
  }

  // ── Fórmula de ranking ────────────────────────────────────────────

  async getRankingConfig() {
    return this.prisma.rankingConfig.findFirst({ where: { activa: true } });
  }

  async upsertRankingConfig(data: {
    pesoVentas: number;
    pesoLeadsContactados: number;
    pesoConversion: number;
    pesoTicketPromedio: number;
    pesoReuniones: number;
    criterioDesempate: CriterioDesempate;
  }) {
    const existing = await this.prisma.rankingConfig.findFirst({ where: { activa: true } });
    if (existing) {
      return this.prisma.rankingConfig.update({ where: { id: existing.id }, data });
    }
    return this.prisma.rankingConfig.create({ data: { nombre: 'default', ...data } });
  }
}
