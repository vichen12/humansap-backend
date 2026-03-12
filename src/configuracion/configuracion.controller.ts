import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolTipo } from '@prisma/client';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(RolTipo.admin)
@Controller('configuracion')
export class ConfiguracionController {
  constructor(private configuracionService: ConfiguracionService) {}

  // Ciclo de ventas
  @Get('ciclo')
  getCiclo() {
    return this.configuracionService.getCiclo();
  }

  @Post('ciclo')
  upsertCiclo(@Body() body: any) {
    return this.configuracionService.upsertCiclo(body);
  }

  // Sorteos
  @Get('sorteos')
  getSorteos() {
    return this.configuracionService.getSorteos();
  }

  @Post('sorteos')
  createSorteo(@Body() body: any) {
    return this.configuracionService.createSorteo(body);
  }

  @Patch('sorteos/:id')
  updateSorteo(@Param('id') id: string, @Body() body: any) {
    return this.configuracionService.updateSorteo(id, body);
  }

  @Delete('sorteos/:id')
  deleteSorteo(@Param('id') id: string) {
    return this.configuracionService.deleteSorteo(id);
  }

  // Fórmula de ranking
  @Get('ranking-formula')
  getRankingConfig() {
    return this.configuracionService.getRankingConfig();
  }

  @Post('ranking-formula')
  upsertRankingConfig(@Body() body: any) {
    return this.configuracionService.upsertRankingConfig(body);
  }
}
