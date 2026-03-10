"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KpisController = void 0;
const common_1 = require("@nestjs/common");
const kpis_service_1 = require("./kpis.service");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const user_decorator_1 = require("../common/decorators/user.decorator");
const client_1 = require("@prisma/client");
let KpisController = class KpisController {
    kpisService;
    constructor(kpisService) {
        this.kpisService = kpisService;
    }
    dashboardVendedor(user, mes, anio) {
        return this.kpisService.getDashboardVendedor(user.id, mes ? parseInt(mes) : undefined, anio ? parseInt(anio) : undefined);
    }
    dashboardAdmin() {
        return this.kpisService.getDashboardAdmin();
    }
    recalcular() {
        return this.kpisService.forzarCalculo();
    }
};
exports.KpisController = KpisController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('mes')),
    __param(2, (0, common_1.Query)('anio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], KpisController.prototype, "dashboardVendedor", null);
__decorate([
    (0, common_1.Get)('admin'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KpisController.prototype, "dashboardAdmin", null);
__decorate([
    (0, common_1.Post)('recalcular'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KpisController.prototype, "recalcular", null);
exports.KpisController = KpisController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('kpis'),
    __metadata("design:paramtypes", [kpis_service_1.KpisService])
], KpisController);
//# sourceMappingURL=kpis.controller.js.map