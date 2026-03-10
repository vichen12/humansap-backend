"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const leads_module_1 = require("./leads/leads.module");
const ventas_module_1 = require("./ventas/ventas.module");
const kpis_module_1 = require("./kpis/kpis.module");
const ranking_module_1 = require("./ranking/ranking.module");
const users_module_1 = require("./users/users.module");
const zonas_module_1 = require("./zonas/zonas.module");
const noticias_module_1 = require("./noticias/noticias.module");
const notificaciones_module_1 = require("./notificaciones/notificaciones.module");
const documentos_module_1 = require("./documentos/documentos.module");
const clientes_module_1 = require("./clientes/clientes.module");
const consultas_module_1 = require("./consultas/consultas.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            leads_module_1.LeadsModule,
            ventas_module_1.VentasModule,
            kpis_module_1.KpisModule,
            ranking_module_1.RankingModule,
            users_module_1.UsersModule,
            zonas_module_1.ZonasModule,
            noticias_module_1.NoticiasModule,
            notificaciones_module_1.NotificacionesModule,
            documentos_module_1.DocumentosModule,
            clientes_module_1.ClientesModule,
            consultas_module_1.ConsultasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map