-- CreateEnum
CREATE TYPE "CicloTipo" AS ENUM ('mensual', 'quincenal', 'semanal', 'personalizado');

-- CreateEnum
CREATE TYPE "CriterioDesempate" AS ENUM ('ventas_cerradas', 'prima_total', 'leads_contactados', 'tasa_conversion', 'reuniones');

-- AlterTable
ALTER TABLE "ranking_config" ADD COLUMN     "criterio_desempate" "CriterioDesempate" NOT NULL DEFAULT 'ventas_cerradas';

-- CreateTable
CREATE TABLE "config_ciclo" (
    "id" TEXT NOT NULL,
    "tipo" "CicloTipo" NOT NULL DEFAULT 'mensual',
    "dia_inicio" INTEGER,
    "dia_fin" INTEGER,
    "duracion_dias" INTEGER,
    "fecha_inicio_custom" DATE,
    "fecha_fin_custom" DATE,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "config_ciclo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sorteos" (
    "id" TEXT NOT NULL,
    "titulo" VARCHAR(200) NOT NULL,
    "descripcion" TEXT,
    "premio" VARCHAR(200) NOT NULL,
    "fecha" DATE NOT NULL,
    "imagen_url" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sorteos_pkey" PRIMARY KEY ("id")
);
