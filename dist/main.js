/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(4);
const prisma_module_1 = __webpack_require__(5);
const auth_module_1 = __webpack_require__(8);
const leads_module_1 = __webpack_require__(18);
const ventas_module_1 = __webpack_require__(26);
const kpis_module_1 = __webpack_require__(30);
const ranking_module_1 = __webpack_require__(34);
const users_module_1 = __webpack_require__(37);
const zonas_module_1 = __webpack_require__(40);
const noticias_module_1 = __webpack_require__(43);
const notificaciones_module_1 = __webpack_require__(46);
const documentos_module_1 = __webpack_require__(49);
const clientes_module_1 = __webpack_require__(52);
const consultas_module_1 = __webpack_require__(56);
const configuracion_module_1 = __webpack_require__(60);
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
            configuracion_module_1.ConfiguracionModule,
        ],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(2);
const client_1 = __webpack_require__(7);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(9);
const passport_1 = __webpack_require__(10);
const config_1 = __webpack_require__(4);
const auth_controller_1 = __webpack_require__(11);
const auth_service_1 = __webpack_require__(12);
const jwt_strategy_1 = __webpack_require__(16);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.get('JWT_SECRET'),
                    signOptions: { expiresIn: config.get('JWT_EXPIRES_IN') },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(12);
const login_dto_1 = __webpack_require__(14);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(dto) {
        return this.authService.login(dto);
    }
    refresh(token) {
        return this.authService.refresh(token);
    }
    logout(token) {
        return this.authService.logout(token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(9);
const config_1 = __webpack_require__(4);
const bcrypt = __importStar(__webpack_require__(13));
const prisma_service_1 = __webpack_require__(6);
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async login(dto) {
        const user = await this.prisma.profile.findUnique({ where: { email: dto.email } });
        if (!user || !user.activo)
            throw new common_1.UnauthorizedException('Credenciales invalidas');
        const passwordOk = await bcrypt.compare(dto.password, user.passwordHash);
        if (!passwordOk)
            throw new common_1.UnauthorizedException('Credenciales invalidas');
        await this.prisma.profile.update({
            where: { id: user.id },
            data: { ultimoAcceso: new Date() },
        });
        return this.generateTokens(user.id, user.email);
    }
    async refresh(token) {
        const stored = await this.prisma.refreshToken.findUnique({ where: { token } });
        if (!stored || stored.revocado || stored.expiresAt < new Date()) {
            throw new common_1.ForbiddenException('Refresh token invalido o expirado');
        }
        await this.prisma.refreshToken.update({
            where: { id: stored.id },
            data: { revocado: true },
        });
        return this.generateTokens(stored.perfilId, '');
    }
    async logout(token) {
        await this.prisma.refreshToken.updateMany({
            where: { token },
            data: { revocado: true },
        });
    }
    async generateTokens(userId, email) {
        const payload = { sub: userId, email };
        const accessToken = this.jwt.sign(payload, {
            secret: this.config.get('JWT_SECRET'),
            expiresIn: this.config.get('JWT_EXPIRES_IN'),
        });
        const refreshToken = this.jwt.sign(payload, {
            secret: this.config.get('JWT_REFRESH_SECRET'),
            expiresIn: this.config.get('JWT_REFRESH_EXPIRES_IN'),
        });
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        await this.prisma.refreshToken.create({
            data: { perfilId: userId, token: refreshToken, expiresAt },
        });
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(15);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(10);
const passport_jwt_1 = __webpack_require__(17);
const config_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(6);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(config, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.getOrThrow('JWT_SECRET'),
        });
        this.prisma = prisma;
    }
    async validate(payload) {
        const user = await this.prisma.profile.findUnique({
            where: { id: payload.sub },
            select: { id: true, email: true, rol: true, activo: true, nombre: true, apellido: true },
        });
        if (!user || !user.activo)
            throw new common_1.UnauthorizedException();
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeadsModule = void 0;
const common_1 = __webpack_require__(2);
const leads_controller_1 = __webpack_require__(19);
const leads_service_1 = __webpack_require__(20);
let LeadsModule = class LeadsModule {
};
exports.LeadsModule = LeadsModule;
exports.LeadsModule = LeadsModule = __decorate([
    (0, common_1.Module)({
        controllers: [leads_controller_1.LeadsController],
        providers: [leads_service_1.LeadsService],
    })
], LeadsModule);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeadsController = void 0;
const common_1 = __webpack_require__(2);
const leads_service_1 = __webpack_require__(20);
const create_lead_dto_1 = __webpack_require__(21);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const user_decorator_1 = __webpack_require__(25);
const client_1 = __webpack_require__(7);
let LeadsController = class LeadsController {
    constructor(leadsService) {
        this.leadsService = leadsService;
    }
    findAll(user) {
        return this.leadsService.findAll(user);
    }
    findOne(id) {
        return this.leadsService.findOne(id);
    }
    create(dto, user) {
        return this.leadsService.create(dto, user.id);
    }
    tomar(id, user) {
        return this.leadsService.tomarLead(id, user.id);
    }
    actualizarEstado(id, estado, notas, user) {
        return this.leadsService.actualizarEstado(id, estado, user.id, notas);
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_lead_dto_1.CreateLeadDto !== "undefined" && create_lead_dto_1.CreateLeadDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id/tomar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "tomar", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __param(2, (0, common_1.Body)('notas')),
    __param(3, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof client_1.LeadEstado !== "undefined" && client_1.LeadEstado) === "function" ? _c : Object, String, Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "actualizarEstado", null);
exports.LeadsController = LeadsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('leads'),
    __metadata("design:paramtypes", [typeof (_a = typeof leads_service_1.LeadsService !== "undefined" && leads_service_1.LeadsService) === "function" ? _a : Object])
], LeadsController);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeadsService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
const client_1 = __webpack_require__(7);
let LeadsService = class LeadsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        if (user.rol === client_1.RolTipo.admin) {
            return this.prisma.lead.findMany({
                include: { zona: true, vendedor: { select: { id: true, nombre: true, apellido: true } } },
                orderBy: { createdAt: 'desc' },
            });
        }
        const profile = await this.prisma.profile.findUnique({ where: { id: user.id } });
        return this.prisma.lead.findMany({
            where: {
                OR: [
                    { vendedorId: user.id },
                    { zonaId: profile?.zonaId ?? undefined, estado: client_1.LeadEstado.nuevo },
                ],
            },
            include: { zona: true, vendedor: { select: { id: true, nombre: true, apellido: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const lead = await this.prisma.lead.findUnique({
            where: { id },
            include: {
                zona: true,
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                actividades: { orderBy: { createdAt: 'desc' } },
                cotizaciones: true,
                ventas: true,
            },
        });
        if (!lead)
            throw new common_1.NotFoundException('Lead no encontrado');
        return lead;
    }
    async create(dto, userId) {
        const lead = await this.prisma.lead.create({
            data: { ...dto, estado: client_1.LeadEstado.nuevo },
        });
        await this.prisma.leadActividad.create({
            data: { leadId: lead.id, vendedorId: userId, tipo: 'recibido' },
        });
        if (lead.zonaId) {
            const vendedoresZona = await this.prisma.profile.findMany({
                where: { zonaId: lead.zonaId, activo: true, rol: { not: client_1.RolTipo.admin } },
                select: { id: true },
            });
            await this.prisma.notificacion.createMany({
                data: vendedoresZona.map((v) => ({
                    titulo: 'Nuevo lead disponible',
                    mensaje: `${lead.nombre} ${lead.apellido} - ${lead.telefono}`,
                    tipo: 'lead_nuevo',
                    vendedorId: v.id,
                    leadId: lead.id,
                })),
            });
        }
        return lead;
    }
    async tomarLead(id, userId) {
        const lead = await this.prisma.lead.findUnique({ where: { id } });
        if (!lead)
            throw new common_1.NotFoundException('Lead no encontrado');
        if (lead.estado !== client_1.LeadEstado.nuevo)
            throw new common_1.ForbiddenException('Lead ya fue tomado');
        const updated = await this.prisma.lead.update({
            where: { id },
            data: {
                vendedorId: userId,
                estado: client_1.LeadEstado.tomado,
                tomadoAt: new Date(),
            },
        });
        await this.prisma.leadActividad.create({
            data: { leadId: id, vendedorId: userId, tipo: 'tomado' },
        });
        return updated;
    }
    async actualizarEstado(id, estado, userId, notas) {
        const lead = await this.prisma.lead.findUnique({ where: { id } });
        if (!lead)
            throw new common_1.NotFoundException('Lead no encontrado');
        if (lead.vendedorId !== userId)
            throw new common_1.ForbiddenException('No es tu lead');
        const data = { estado };
        if (estado === client_1.LeadEstado.contactado)
            data.contactadoAt = new Date();
        const updated = await this.prisma.lead.update({ where: { id }, data });
        const eventoMap = {
            contactado: 'contactado',
            en_proceso: 'cotizacion_enviada',
            cerrado: 'venta_cerrada',
            perdido: 'perdido',
        };
        const tipo = eventoMap[estado];
        if (tipo) {
            await this.prisma.leadActividad.create({
                data: { leadId: id, vendedorId: userId, tipo: tipo, notas },
            });
        }
        return updated;
    }
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], LeadsService);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateLeadDto = void 0;
const class_validator_1 = __webpack_require__(15);
const client_1 = __webpack_require__(7);
class CreateLeadDto {
}
exports.CreateLeadDto = CreateLeadDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "zonaId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.LeadOrigen),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof client_1.LeadOrigen !== "undefined" && client_1.LeadOrigen) === "function" ? _a : Object)
], CreateLeadDto.prototype, "origen", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "notas", void 0);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(10);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
const roles_decorator_1 = __webpack_require__(24);
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles)
            return true;
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.includes(user.rol);
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(2);
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(2);
exports.CurrentUser = (0, common_1.createParamDecorator)((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VentasModule = void 0;
const common_1 = __webpack_require__(2);
const ventas_controller_1 = __webpack_require__(27);
const ventas_service_1 = __webpack_require__(28);
let VentasModule = class VentasModule {
};
exports.VentasModule = VentasModule;
exports.VentasModule = VentasModule = __decorate([
    (0, common_1.Module)({
        controllers: [ventas_controller_1.VentasController],
        providers: [ventas_service_1.VentasService],
        exports: [ventas_service_1.VentasService],
    })
], VentasModule);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VentasController = void 0;
const common_1 = __webpack_require__(2);
const ventas_service_1 = __webpack_require__(28);
const create_venta_dto_1 = __webpack_require__(29);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const user_decorator_1 = __webpack_require__(25);
let VentasController = class VentasController {
    constructor(ventasService) {
        this.ventasService = ventasService;
    }
    findAll(user) {
        return this.ventasService.findAll(user);
    }
    resumen(user, mes, anio) {
        const now = new Date();
        return this.ventasService.resumenMes(user.id, mes ? parseInt(mes) : now.getMonth() + 1, anio ? parseInt(anio) : now.getFullYear());
    }
    findOne(id) {
        return this.ventasService.findOne(id);
    }
    create(dto, user) {
        return this.ventasService.create(dto, user.id);
    }
};
exports.VentasController = VentasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('resumen'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('mes')),
    __param(2, (0, common_1.Query)('anio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "resumen", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_venta_dto_1.CreateVentaDto !== "undefined" && create_venta_dto_1.CreateVentaDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "create", null);
exports.VentasController = VentasController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('ventas'),
    __metadata("design:paramtypes", [typeof (_a = typeof ventas_service_1.VentasService !== "undefined" && ventas_service_1.VentasService) === "function" ? _a : Object])
], VentasController);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VentasService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
const client_1 = __webpack_require__(7);
let VentasService = class VentasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        const where = user.rol === client_1.RolTipo.admin ? {} : { vendedorId: user.id };
        return this.prisma.venta.findMany({
            where,
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                lead: { select: { id: true, nombre: true, apellido: true } },
                cliente: { select: { id: true, nombre: true, apellido: true } },
            },
            orderBy: { fechaVenta: 'desc' },
        });
    }
    async findOne(id) {
        const venta = await this.prisma.venta.findUnique({
            where: { id },
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                lead: true,
                cotizacion: true,
            },
        });
        if (!venta)
            throw new common_1.NotFoundException('Venta no encontrada');
        return venta;
    }
    async create(dto, userId) {
        const venta = await this.prisma.venta.create({
            data: {
                ...dto,
                vendedorId: userId,
                fechaVenta: new Date(dto.fechaVenta),
                fechaVencimiento: dto.fechaVencimiento ? new Date(dto.fechaVencimiento) : undefined,
            },
        });
        if (dto.leadId) {
            await this.prisma.lead.update({
                where: { id: dto.leadId },
                data: { estado: 'cerrado' },
            });
        }
        await this.prisma.vendedorStats.upsert({
            where: { perfilId: userId },
            create: {
                perfilId: userId,
                ventasTotales: 1,
                primaTotal: venta.montoPrima ?? 0,
                comisionesTotales: venta.montoComision ?? 0,
            },
            update: {
                ventasTotales: { increment: 1 },
                primaTotal: { increment: Number(venta.montoPrima ?? 0) },
                comisionesTotales: { increment: Number(venta.montoComision ?? 0) },
            },
        });
        return venta;
    }
    async resumenMes(userId, mes, anio) {
        const inicio = new Date(anio, mes - 1, 1);
        const fin = new Date(anio, mes, 0);
        const ventas = await this.prisma.venta.findMany({
            where: {
                vendedorId: userId,
                fechaVenta: { gte: inicio, lte: fin },
                estado: 'vigente',
            },
        });
        const totalPrima = ventas.reduce((s, v) => s + Number(v.montoPrima ?? 0), 0);
        const totalComision = ventas.reduce((s, v) => s + Number(v.montoComision ?? 0), 0);
        return {
            cantidad: ventas.length,
            prima_total: totalPrima,
            comision_total: totalComision,
            ticket_promedio: ventas.length > 0 ? totalPrima / ventas.length : 0,
        };
    }
};
exports.VentasService = VentasService;
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], VentasService);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateVentaDto = void 0;
const client_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(15);
class CreateVentaDto {
}
exports.CreateVentaDto = CreateVentaDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "leadId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "clienteId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "cotizacionId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "producto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "compania", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVentaDto.prototype, "montoPrima", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVentaDto.prototype, "montoComision", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVentaDto.prototype, "porcentajeComision", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.VentaEstado),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof client_1.VentaEstado !== "undefined" && client_1.VentaEstado) === "function" ? _a : Object)
], CreateVentaDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "fechaVenta", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "fechaVencimiento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "notas", void 0);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KpisModule = void 0;
const common_1 = __webpack_require__(2);
const schedule_1 = __webpack_require__(31);
const kpis_controller_1 = __webpack_require__(32);
const kpis_service_1 = __webpack_require__(33);
let KpisModule = class KpisModule {
};
exports.KpisModule = KpisModule;
exports.KpisModule = KpisModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot()],
        controllers: [kpis_controller_1.KpisController],
        providers: [kpis_service_1.KpisService],
        exports: [kpis_service_1.KpisService],
    })
], KpisModule);


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KpisController = void 0;
const common_1 = __webpack_require__(2);
const kpis_service_1 = __webpack_require__(33);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const user_decorator_1 = __webpack_require__(25);
const client_1 = __webpack_require__(7);
let KpisController = class KpisController {
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
    __metadata("design:paramtypes", [typeof (_a = typeof kpis_service_1.KpisService !== "undefined" && kpis_service_1.KpisService) === "function" ? _a : Object])
], KpisController);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var KpisService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KpisService = void 0;
const common_1 = __webpack_require__(2);
const schedule_1 = __webpack_require__(31);
const prisma_service_1 = __webpack_require__(6);
const client_1 = __webpack_require__(7);
let KpisService = KpisService_1 = class KpisService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(KpisService_1.name);
    }
    async calcularKpisMensuales() {
        this.logger.log('Calculando KPIs mensuales...');
        const ahora = new Date();
        await this.calcularPeriodo(client_1.PeriodoTipo.mensual, new Date(ahora.getFullYear(), ahora.getMonth(), 1), new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0));
    }
    async calcularKpisSemanales() {
        this.logger.log('Calculando KPIs semanales...');
        const ahora = new Date();
        const lunes = new Date(ahora);
        lunes.setDate(ahora.getDate() - ahora.getDay() + 1);
        const domingo = new Date(lunes);
        domingo.setDate(lunes.getDate() + 6);
        await this.calcularPeriodo(client_1.PeriodoTipo.semanal, lunes, domingo);
    }
    async calcularPeriodo(tipo, inicio, fin) {
        const vendedores = await this.prisma.profile.findMany({
            where: { activo: true, rol: { not: 'admin' } },
            select: { id: true },
        });
        const config = await this.prisma.rankingConfig.findFirst({ where: { activa: true } });
        for (const vendedor of vendedores) {
            await this.calcularParaVendedor(vendedor.id, tipo, inicio, fin, config);
        }
        this.logger.log(`KPIs ${tipo} calculados para ${vendedores.length} vendedores`);
    }
    async calcularParaVendedor(perfilId, periodoTipo, inicio, fin, config) {
        const [leadsRecibidos, leadsTomados, leadsContactados, reuniones, cotizaciones, ventasCerradas, ventasPerdidas, primaYComision,] = await Promise.all([
            this.prisma.lead.count({ where: { zonaId: { not: null }, createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.lead.count({ where: { vendedorId: perfilId, tomadoAt: { gte: inicio, lte: fin } } }),
            this.prisma.leadActividad.count({ where: { vendedorId: perfilId, tipo: 'contactado', createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.leadActividad.count({ where: { vendedorId: perfilId, tipo: 'reunion_realizada', createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.cotizacion.count({ where: { vendedorId: perfilId, createdAt: { gte: inicio, lte: fin } } }),
            this.prisma.venta.count({ where: { vendedorId: perfilId, estado: 'vigente', fechaVenta: { gte: inicio, lte: fin } } }),
            this.prisma.lead.count({ where: { vendedorId: perfilId, estado: 'perdido', updatedAt: { gte: inicio, lte: fin } } }),
            this.prisma.venta.aggregate({
                where: { vendedorId: perfilId, estado: 'vigente', fechaVenta: { gte: inicio, lte: fin } },
                _sum: { montoPrima: true, montoComision: true },
            }),
        ]);
        const primaTotalVendida = Number(primaYComision._sum.montoPrima ?? 0);
        const comisionGenerada = Number(primaYComision._sum.montoComision ?? 0);
        const tasaContacto = leadsTomados > 0 ? (leadsContactados / leadsTomados) * 100 : 0;
        const tasaConversion = leadsContactados > 0 ? (ventasCerradas / leadsContactados) * 100 : 0;
        const ticketPromedio = ventasCerradas > 0 ? primaTotalVendida / ventasCerradas : 0;
        const rentabilidad = leadsTomados > 0 ? comisionGenerada / leadsTomados : 0;
        const puntos = config
            ? ventasCerradas * Number(config.pesoVentas) +
                leadsContactados * Number(config.pesoLeadsContactados) +
                tasaConversion * Number(config.pesoConversion) +
                ticketPromedio * Number(config.pesoTicketPromedio) +
                reuniones * Number(config.pesoReuniones)
            : ventasCerradas * 10 + leadsContactados * 1;
        await this.prisma.vendedorKpisPeriodo.upsert({
            where: { perfilId_periodoTipo_periodoInicio: { perfilId, periodoTipo, periodoInicio: inicio } },
            create: {
                perfilId, periodoTipo, periodoInicio: inicio, periodoFin: fin,
                leadsRecibidos, leadsTomados, leadsContactados,
                reunionesRealizadas: reuniones, cotizacionesEnviadas: cotizaciones,
                ventasCerradas, ventasPerdidas,
                primaTotalVendida, comisionGenerada,
                tasaContacto, tasaConversion, ticketPromedio, rentabilidad, puntos,
            },
            update: {
                leadsRecibidos, leadsTomados, leadsContactados,
                reunionesRealizadas: reuniones, cotizacionesEnviadas: cotizaciones,
                ventasCerradas, ventasPerdidas,
                primaTotalVendida, comisionGenerada,
                tasaContacto, tasaConversion, ticketPromedio, rentabilidad, puntos,
            },
        });
    }
    async getDashboardVendedor(perfilId, mes, anio) {
        const ahora = new Date();
        const m = mes ?? ahora.getMonth() + 1;
        const a = anio ?? ahora.getFullYear();
        const inicio = new Date(a, m - 1, 1);
        const kpis = await this.prisma.vendedorKpisPeriodo.findFirst({
            where: { perfilId, periodoTipo: client_1.PeriodoTipo.mensual, periodoInicio: inicio },
        });
        const stats = await this.prisma.vendedorStats.findUnique({ where: { perfilId } });
        const ranking = await this.prisma.rankingResultado.findFirst({
            where: { perfilId },
            include: { periodo: true },
            orderBy: { createdAt: 'desc' },
        });
        return { kpis, stats, ranking };
    }
    async getDashboardAdmin() {
        const ahora = new Date();
        const inicio = new Date(ahora.getFullYear(), ahora.getMonth(), 1);
        const ventasPorMes = [];
        for (let i = 5; i >= 0; i--) {
            const mesInicio = new Date(ahora.getFullYear(), ahora.getMonth() - i, 1);
            const mesFin = new Date(ahora.getFullYear(), ahora.getMonth() - i + 1, 0);
            const agg = await this.prisma.venta.aggregate({
                where: { fechaVenta: { gte: mesInicio, lte: mesFin }, estado: 'vigente' },
                _sum: { montoPrima: true },
                _count: true,
            });
            const label = mesInicio.toLocaleDateString('es-AR', { month: 'short', year: '2-digit' });
            ventasPorMes.push({ mes: label, ventas: agg._count, prima: Number(agg._sum.montoPrima ?? 0) });
        }
        const [totalVentas, leadsActivos, leadsTotal, vendedoresActivos, topVendedores, leadsPorEstado,] = await Promise.all([
            this.prisma.venta.aggregate({
                where: { fechaVenta: { gte: inicio }, estado: 'vigente' },
                _sum: { montoPrima: true, montoComision: true },
                _count: true,
            }),
            this.prisma.lead.count({
                where: { estado: { in: ['nuevo', 'contactado', 'en_proceso'] } },
            }),
            this.prisma.lead.count({ where: { createdAt: { gte: inicio } } }),
            this.prisma.profile.count({ where: { activo: true, rol: { not: 'admin' } } }),
            this.prisma.vendedorKpisPeriodo.findMany({
                where: { periodoTipo: client_1.PeriodoTipo.mensual, periodoInicio: inicio },
                orderBy: { puntos: 'desc' },
                take: 10,
                include: { perfil: { select: { id: true, nombre: true, apellido: true, avatarUrl: true } } },
            }),
            this.prisma.lead.groupBy({
                by: ['estado'],
                _count: true,
            }),
        ]);
        const leadsContactadosMes = await this.prisma.leadActividad.count({
            where: { tipo: 'contactado', createdAt: { gte: inicio } },
        });
        const tasaConversionGlobal = leadsContactadosMes > 0
            ? Math.round((totalVentas._count / leadsContactadosMes) * 100)
            : 0;
        return {
            mes: { inicio },
            ventas: {
                cantidad: totalVentas._count,
                prima_total: totalVentas._sum.montoPrima,
                comision_total: totalVentas._sum.montoComision,
            },
            leads_activos: leadsActivos,
            leads_totales: leadsTotal,
            vendedores_activos: vendedoresActivos,
            tasa_conversion_global: tasaConversionGlobal,
            top_vendedores: topVendedores,
            ventas_por_mes: ventasPorMes,
            leads_por_estado: leadsPorEstado,
        };
    }
    async forzarCalculo() {
        await this.calcularKpisMensuales();
        return { mensaje: 'KPIs recalculados' };
    }
};
exports.KpisService = KpisService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_2AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KpisService.prototype, "calcularKpisMensuales", null);
__decorate([
    (0, schedule_1.Cron)('0 2 * * 1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KpisService.prototype, "calcularKpisSemanales", null);
exports.KpisService = KpisService = KpisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], KpisService);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RankingModule = void 0;
const common_1 = __webpack_require__(2);
const ranking_controller_1 = __webpack_require__(35);
const ranking_service_1 = __webpack_require__(36);
const kpis_module_1 = __webpack_require__(30);
let RankingModule = class RankingModule {
};
exports.RankingModule = RankingModule;
exports.RankingModule = RankingModule = __decorate([
    (0, common_1.Module)({
        imports: [kpis_module_1.KpisModule],
        controllers: [ranking_controller_1.RankingController],
        providers: [ranking_service_1.RankingService],
    })
], RankingModule);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RankingController = void 0;
const common_1 = __webpack_require__(2);
const ranking_service_1 = __webpack_require__(36);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const client_1 = __webpack_require__(7);
let RankingController = class RankingController {
    constructor(rankingService) {
        this.rankingService = rankingService;
    }
    getPeriodoActivo() {
        return this.rankingService.getPeriodoActivo();
    }
    getPeriodos() {
        return this.rankingService.getPeriodos();
    }
    getRanking(id) {
        return this.rankingService.getRanking(id);
    }
    crearPeriodo(body) {
        return this.rankingService.crearPeriodo(body);
    }
    cerrarPeriodo(id) {
        return this.rankingService.cerrarPeriodo(id);
    }
    getConfig() {
        return this.rankingService.getConfig();
    }
    actualizarConfig(id, body) {
        return this.rankingService.actualizarConfig(id, body);
    }
};
exports.RankingController = RankingController;
__decorate([
    (0, common_1.Get)('activo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "getPeriodoActivo", null);
__decorate([
    (0, common_1.Get)('periodos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "getPeriodos", null);
__decorate([
    (0, common_1.Get)('periodos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "getRanking", null);
__decorate([
    (0, common_1.Post)('periodos'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "crearPeriodo", null);
__decorate([
    (0, common_1.Post)('periodos/:id/cerrar'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "cerrarPeriodo", null);
__decorate([
    (0, common_1.Get)('config'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "getConfig", null);
__decorate([
    (0, common_1.Patch)('config/:id'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "actualizarConfig", null);
exports.RankingController = RankingController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('ranking'),
    __metadata("design:paramtypes", [typeof (_a = typeof ranking_service_1.RankingService !== "undefined" && ranking_service_1.RankingService) === "function" ? _a : Object])
], RankingController);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RankingService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
const kpis_service_1 = __webpack_require__(33);
const client_1 = __webpack_require__(7);
let RankingService = class RankingService {
    constructor(prisma, kpisService) {
        this.prisma = prisma;
        this.kpisService = kpisService;
    }
    async getPeriodos() {
        return this.prisma.rankingPeriodo.findMany({
            include: { config: true },
            orderBy: { fechaInicio: 'desc' },
        });
    }
    async getPeriodoActivo() {
        return this.prisma.rankingPeriodo.findFirst({
            where: { estado: client_1.RankingEstado.activo },
            include: {
                resultados: {
                    orderBy: { posicion: 'asc' },
                    include: {
                        perfil: { select: { id: true, nombre: true, apellido: true, avatarUrl: true } },
                    },
                },
            },
        });
    }
    async getRanking(periodoId) {
        return this.prisma.rankingResultado.findMany({
            where: { rankingPeriodoId: periodoId },
            orderBy: { posicion: 'asc' },
            include: {
                perfil: { select: { id: true, nombre: true, apellido: true, avatarUrl: true, zona: true } },
            },
        });
    }
    async crearPeriodo(data) {
        return this.prisma.rankingPeriodo.create({
            data: {
                nombre: data.nombre,
                fechaInicio: new Date(data.fechaInicio),
                fechaFin: new Date(data.fechaFin),
                rankingConfigId: data.rankingConfigId,
                estado: client_1.RankingEstado.pendiente,
            },
        });
    }
    async cerrarPeriodo(periodoId) {
        const periodo = await this.prisma.rankingPeriodo.findUnique({ where: { id: periodoId } });
        if (!periodo)
            throw new common_1.NotFoundException('Periodo no encontrado');
        if (periodo.estado === client_1.RankingEstado.cerrado)
            throw new common_1.BadRequestException('Ya esta cerrado');
        const config = periodo.rankingConfigId
            ? await this.prisma.rankingConfig.findUnique({ where: { id: periodo.rankingConfigId } })
            : await this.prisma.rankingConfig.findFirst({ where: { activa: true } });
        await this.kpisService.calcularPeriodo(client_1.PeriodoTipo.mensual, periodo.fechaInicio, periodo.fechaFin);
        const kpis = await this.prisma.vendedorKpisPeriodo.findMany({
            where: {
                periodoTipo: client_1.PeriodoTipo.mensual,
                periodoInicio: periodo.fechaInicio,
            },
            orderBy: { puntos: 'desc' },
        });
        await this.prisma.$transaction(kpis.map((kpi, index) => this.prisma.rankingResultado.upsert({
            where: { rankingPeriodoId_perfilId: { rankingPeriodoId: periodoId, perfilId: kpi.perfilId } },
            create: {
                rankingPeriodoId: periodoId,
                perfilId: kpi.perfilId,
                puntos: kpi.puntos,
                posicion: index + 1,
                ventas: kpi.ventasCerradas,
                leadsContactados: kpi.leadsContactados,
                tasaConversion: kpi.tasaConversion,
                comisionGenerada: kpi.comisionGenerada,
                primaTotal: kpi.primaTotalVendida,
            },
            update: {
                puntos: kpi.puntos,
                posicion: index + 1,
                ventas: kpi.ventasCerradas,
                leadsContactados: kpi.leadsContactados,
                tasaConversion: kpi.tasaConversion,
                comisionGenerada: kpi.comisionGenerada,
                primaTotal: kpi.primaTotalVendida,
            },
        })));
        await this.prisma.rankingPeriodo.update({
            where: { id: periodoId },
            data: { estado: client_1.RankingEstado.cerrado },
        });
        return { mensaje: 'Periodo cerrado y ranking guardado', total_vendedores: kpis.length };
    }
    async getConfig() {
        return this.prisma.rankingConfig.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async actualizarConfig(id, data) {
        return this.prisma.rankingConfig.update({ where: { id }, data });
    }
};
exports.RankingService = RankingService;
exports.RankingService = RankingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof kpis_service_1.KpisService !== "undefined" && kpis_service_1.KpisService) === "function" ? _b : Object])
], RankingService);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(2);
const users_controller_1 = __webpack_require__(38);
const users_service_1 = __webpack_require__(39);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(2);
const users_service_1 = __webpack_require__(39);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const user_decorator_1 = __webpack_require__(25);
const client_1 = __webpack_require__(7);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getMe(user) {
        return this.usersService.getMe(user.id);
    }
    updateMe(user, body) {
        return this.usersService.updateMe(user.id, body);
    }
    changePassword(user, body) {
        return this.usersService.changePassword(user.id, body.current_password, body.new_password);
    }
    getVendedores() {
        return this.usersService.getVendedores();
    }
    crear(body) {
        const { zona_id, ...rest } = body;
        return this.usersService.crear({ ...rest, zonaId: zona_id });
    }
    actualizar(id, body) {
        return this.usersService.actualizar(id, body);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateMe", null);
__decorate([
    (0, common_1.Post)('me/change-password'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)('vendedores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getVendedores", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "crear", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "actualizar", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(2);
const bcrypt = __importStar(__webpack_require__(13));
const prisma_service_1 = __webpack_require__(6);
const client_1 = __webpack_require__(7);
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMe(id) {
        const user = await this.prisma.profile.findUnique({
            where: { id },
            select: {
                id: true, email: true, nombre: true, apellido: true,
                telefono: true, rol: true, matricula: true, activo: true,
                avatarUrl: true, createdAt: true,
                zona: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return user;
    }
    async updateMe(id, data) {
        if (data.nombre !== undefined && !data.nombre.trim()) {
            throw new common_1.BadRequestException('El nombre no puede estar vacío');
        }
        if (data.apellido !== undefined && !data.apellido.trim()) {
            throw new common_1.BadRequestException('El apellido no puede estar vacío');
        }
        return this.prisma.profile.update({
            where: { id },
            data: {
                ...(data.nombre && { nombre: data.nombre.trim() }),
                ...(data.apellido && { apellido: data.apellido.trim() }),
                ...(data.telefono !== undefined && { telefono: data.telefono.trim() || null }),
                ...(data.avatar_url !== undefined && { avatarUrl: data.avatar_url || null }),
            },
            select: {
                id: true, email: true, nombre: true, apellido: true,
                telefono: true, rol: true, matricula: true, activo: true,
                avatarUrl: true, createdAt: true, zona: true,
            },
        });
    }
    async changePassword(id, currentPassword, newPassword) {
        if (!newPassword || newPassword.length < 8) {
            throw new common_1.BadRequestException('La contraseña nueva debe tener al menos 8 caracteres');
        }
        const user = await this.prisma.profile.findUnique({
            where: { id },
            select: { passwordHash: true },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const valid = await bcrypt.compare(currentPassword, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('La contraseña actual es incorrecta');
        const newHash = await bcrypt.hash(newPassword, 10);
        await this.prisma.profile.update({
            where: { id },
            data: { passwordHash: newHash },
        });
        return { message: 'Contraseña actualizada correctamente' };
    }
    async getVendedores() {
        return this.prisma.profile.findMany({
            where: { rol: { in: [client_1.RolTipo.vendedor_matriculado, client_1.RolTipo.vendedor_sin_matricula] } },
            select: {
                id: true, nombre: true, apellido: true, email: true,
                telefono: true, rol: true, matricula: true, activo: true,
                zona: true, createdAt: true,
            },
            orderBy: { nombre: 'asc' },
        });
    }
    async crear(data) {
        const existe = await this.prisma.profile.findUnique({ where: { email: data.email } });
        if (existe)
            throw new common_1.ConflictException('El email ya esta registrado');
        const passwordHash = await bcrypt.hash(data.password, 10);
        const { password: _pw, ...rest } = data;
        const user = await this.prisma.profile.create({
            data: { ...rest, passwordHash },
            select: {
                id: true, email: true, nombre: true, apellido: true,
                rol: true, activo: true, createdAt: true,
            },
        });
        await this.prisma.vendedorStats.create({ data: { perfilId: user.id } });
        return user;
    }
    async actualizar(id, data) {
        return this.prisma.profile.update({
            where: { id },
            data,
            select: {
                id: true, email: true, nombre: true, apellido: true,
                rol: true, activo: true, zona: true,
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZonasModule = void 0;
const common_1 = __webpack_require__(2);
const zonas_controller_1 = __webpack_require__(41);
const zonas_service_1 = __webpack_require__(42);
let ZonasModule = class ZonasModule {
};
exports.ZonasModule = ZonasModule;
exports.ZonasModule = ZonasModule = __decorate([
    (0, common_1.Module)({
        controllers: [zonas_controller_1.ZonasController],
        providers: [zonas_service_1.ZonasService],
    })
], ZonasModule);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZonasController = void 0;
const common_1 = __webpack_require__(2);
const zonas_service_1 = __webpack_require__(42);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const client_1 = __webpack_require__(7);
let ZonasController = class ZonasController {
    constructor(zonasService) {
        this.zonasService = zonasService;
    }
    findAll() {
        return this.zonasService.findAll();
    }
    crear(body) {
        return this.zonasService.crear(body);
    }
};
exports.ZonasController = ZonasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZonasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ZonasController.prototype, "crear", null);
exports.ZonasController = ZonasController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('zonas'),
    __metadata("design:paramtypes", [typeof (_a = typeof zonas_service_1.ZonasService !== "undefined" && zonas_service_1.ZonasService) === "function" ? _a : Object])
], ZonasController);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZonasService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
let ZonasService = class ZonasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.zona.findMany({
            where: { activa: true },
            orderBy: { nombre: 'asc' },
        });
    }
    crear(data) {
        return this.prisma.zona.create({ data });
    }
};
exports.ZonasService = ZonasService;
exports.ZonasService = ZonasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ZonasService);


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoticiasModule = void 0;
const common_1 = __webpack_require__(2);
const noticias_controller_1 = __webpack_require__(44);
const noticias_service_1 = __webpack_require__(45);
let NoticiasModule = class NoticiasModule {
};
exports.NoticiasModule = NoticiasModule;
exports.NoticiasModule = NoticiasModule = __decorate([
    (0, common_1.Module)({
        controllers: [noticias_controller_1.NoticiasController],
        providers: [noticias_service_1.NoticiasService],
    })
], NoticiasModule);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoticiasController = void 0;
const common_1 = __webpack_require__(2);
const noticias_service_1 = __webpack_require__(45);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const user_decorator_1 = __webpack_require__(25);
const client_1 = __webpack_require__(7);
let NoticiasController = class NoticiasController {
    constructor(noticiasService) {
        this.noticiasService = noticiasService;
    }
    findAll(activas, user) {
        const soloActivas = user.rol !== client_1.RolTipo.admin || activas === 'true';
        return this.noticiasService.findAll(soloActivas);
    }
    crear(body, user) {
        return this.noticiasService.crear(body, user.id);
    }
    eliminar(id) {
        return this.noticiasService.eliminar(id);
    }
};
exports.NoticiasController = NoticiasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('activas')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "crear", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "eliminar", null);
exports.NoticiasController = NoticiasController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('noticias'),
    __metadata("design:paramtypes", [typeof (_a = typeof noticias_service_1.NoticiasService !== "undefined" && noticias_service_1.NoticiasService) === "function" ? _a : Object])
], NoticiasController);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoticiasService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
let NoticiasService = class NoticiasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(soloActivas = false) {
        return this.prisma.noticia.findMany({
            where: soloActivas ? { activa: true } : undefined,
            include: { publicador: { select: { nombre: true, apellido: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async crear(data, perfilId) {
        const noticia = await this.prisma.noticia.create({
            data: { ...data, publicadoPor: perfilId },
        });
        const vendedores = await this.prisma.profile.findMany({
            where: { rol: { not: 'admin' }, activo: true },
            select: { id: true },
        });
        if (vendedores.length > 0) {
            await this.prisma.notificacion.createMany({
                data: vendedores.map((v) => ({
                    titulo: 'Nueva novedad publicada',
                    mensaje: data.titulo,
                    tipo: 'noticia',
                    vendedorId: v.id,
                    noticiaId: noticia.id,
                })),
            });
        }
        return noticia;
    }
    async eliminar(id) {
        const noticia = await this.prisma.noticia.findUnique({ where: { id } });
        if (!noticia)
            throw new common_1.NotFoundException('Noticia no encontrada');
        await this.prisma.notificacion.deleteMany({ where: { noticiaId: id } });
        return this.prisma.noticia.delete({ where: { id } });
    }
};
exports.NoticiasService = NoticiasService;
exports.NoticiasService = NoticiasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], NoticiasService);


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificacionesModule = void 0;
const common_1 = __webpack_require__(2);
const notificaciones_controller_1 = __webpack_require__(47);
const notificaciones_service_1 = __webpack_require__(48);
let NotificacionesModule = class NotificacionesModule {
};
exports.NotificacionesModule = NotificacionesModule;
exports.NotificacionesModule = NotificacionesModule = __decorate([
    (0, common_1.Module)({
        controllers: [notificaciones_controller_1.NotificacionesController],
        providers: [notificaciones_service_1.NotificacionesService],
    })
], NotificacionesModule);


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificacionesController = void 0;
const common_1 = __webpack_require__(2);
const notificaciones_service_1 = __webpack_require__(48);
const jwt_auth_guard_1 = __webpack_require__(22);
const user_decorator_1 = __webpack_require__(25);
let NotificacionesController = class NotificacionesController {
    constructor(notificacionesService) {
        this.notificacionesService = notificacionesService;
    }
    findAll(user) {
        return this.notificacionesService.findAll(user.id);
    }
    marcarLeida(id) {
        return this.notificacionesService.marcarLeida(id);
    }
    marcarTodasLeidas(user) {
        return this.notificacionesService.marcarTodasLeidas(user.id);
    }
};
exports.NotificacionesController = NotificacionesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id/leer'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificacionesController.prototype, "marcarLeida", null);
__decorate([
    (0, common_1.Patch)('leer-todas'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificacionesController.prototype, "marcarTodasLeidas", null);
exports.NotificacionesController = NotificacionesController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('notificaciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof notificaciones_service_1.NotificacionesService !== "undefined" && notificaciones_service_1.NotificacionesService) === "function" ? _a : Object])
], NotificacionesController);


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificacionesService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
let NotificacionesService = class NotificacionesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(vendedorId) {
        return this.prisma.notificacion.findMany({
            where: { vendedorId },
            include: {
                lead: { select: { id: true, nombre: true, apellido: true } },
                noticia: { select: { id: true, titulo: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 30,
        });
    }
    marcarLeida(id) {
        return this.prisma.notificacion.update({
            where: { id },
            data: { leida: true },
        });
    }
    marcarTodasLeidas(vendedorId) {
        return this.prisma.notificacion.updateMany({
            where: { vendedorId, leida: false },
            data: { leida: true },
        });
    }
};
exports.NotificacionesService = NotificacionesService;
exports.NotificacionesService = NotificacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], NotificacionesService);


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentosModule = void 0;
const common_1 = __webpack_require__(2);
const documentos_controller_1 = __webpack_require__(50);
const documentos_service_1 = __webpack_require__(51);
let DocumentosModule = class DocumentosModule {
};
exports.DocumentosModule = DocumentosModule;
exports.DocumentosModule = DocumentosModule = __decorate([
    (0, common_1.Module)({
        controllers: [documentos_controller_1.DocumentosController],
        providers: [documentos_service_1.DocumentosService],
    })
], DocumentosModule);


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentosController = void 0;
const common_1 = __webpack_require__(2);
const documentos_service_1 = __webpack_require__(51);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const user_decorator_1 = __webpack_require__(25);
const client_1 = __webpack_require__(7);
let DocumentosController = class DocumentosController {
    constructor(documentosService) {
        this.documentosService = documentosService;
    }
    findAll(tipo) {
        return this.documentosService.findAll(tipo);
    }
    crear(body, user) {
        return this.documentosService.crear(body, user.id);
    }
    eliminar(id) {
        return this.documentosService.eliminar(id);
    }
};
exports.DocumentosController = DocumentosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof client_1.DocumentoTipo !== "undefined" && client_1.DocumentoTipo) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "crear", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "eliminar", null);
exports.DocumentosController = DocumentosController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('documentos'),
    __metadata("design:paramtypes", [typeof (_a = typeof documentos_service_1.DocumentosService !== "undefined" && documentos_service_1.DocumentosService) === "function" ? _a : Object])
], DocumentosController);


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentosService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
let DocumentosService = class DocumentosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(tipo) {
        return this.prisma.documento.findMany({
            where: tipo ? { tipo } : undefined,
            include: { subidor: { select: { nombre: true, apellido: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    crear(data, perfilId) {
        return this.prisma.documento.create({
            data: { ...data, storagePath: data.url, subidoPor: perfilId },
        });
    }
    async eliminar(id) {
        const doc = await this.prisma.documento.findUnique({ where: { id } });
        if (!doc)
            throw new common_1.NotFoundException('Documento no encontrado');
        return this.prisma.documento.delete({ where: { id } });
    }
};
exports.DocumentosService = DocumentosService;
exports.DocumentosService = DocumentosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], DocumentosService);


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientesModule = void 0;
const common_1 = __webpack_require__(2);
const clientes_controller_1 = __webpack_require__(53);
const clientes_service_1 = __webpack_require__(54);
let ClientesModule = class ClientesModule {
};
exports.ClientesModule = ClientesModule;
exports.ClientesModule = ClientesModule = __decorate([
    (0, common_1.Module)({
        controllers: [clientes_controller_1.ClientesController],
        providers: [clientes_service_1.ClientesService],
        exports: [clientes_service_1.ClientesService],
    })
], ClientesModule);


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientesController = void 0;
const common_1 = __webpack_require__(2);
const clientes_service_1 = __webpack_require__(54);
const create_cliente_dto_1 = __webpack_require__(55);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const user_decorator_1 = __webpack_require__(25);
let ClientesController = class ClientesController {
    constructor(clientesService) {
        this.clientesService = clientesService;
    }
    findAll(user) {
        return this.clientesService.findAll(user);
    }
    findOne(id, user) {
        return this.clientesService.findOne(id, user);
    }
    create(dto, user) {
        return this.clientesService.create(dto, user.id);
    }
    update(id, dto, user) {
        return this.clientesService.update(id, dto, user);
    }
    remove(id, user) {
        return this.clientesService.remove(id, user);
    }
};
exports.ClientesController = ClientesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_cliente_dto_1.CreateClienteDto !== "undefined" && create_cliente_dto_1.CreateClienteDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "remove", null);
exports.ClientesController = ClientesController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('clientes'),
    __metadata("design:paramtypes", [typeof (_a = typeof clientes_service_1.ClientesService !== "undefined" && clientes_service_1.ClientesService) === "function" ? _a : Object])
], ClientesController);


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientesService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
const client_1 = __webpack_require__(7);
let ClientesService = class ClientesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        const where = user.rol === client_1.RolTipo.admin ? {} : { vendedorId: user.id };
        return this.prisma.cliente.findMany({
            where,
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                _count: { select: { ventas: true, consultas: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, user) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id },
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                ventas: { orderBy: { fechaVenta: 'desc' } },
                consultas: { orderBy: { createdAt: 'desc' } },
            },
        });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        if (user.rol !== client_1.RolTipo.admin && cliente.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return cliente;
    }
    async create(dto, userId) {
        return this.prisma.cliente.create({
            data: {
                ...dto,
                vendedorId: userId,
                fechaNacimiento: dto.fechaNacimiento ? new Date(dto.fechaNacimiento) : undefined,
            },
        });
    }
    async update(id, dto, user) {
        const cliente = await this.prisma.cliente.findUnique({ where: { id } });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        if (user.rol !== client_1.RolTipo.admin && cliente.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.cliente.update({
            where: { id },
            data: {
                ...dto,
                fechaNacimiento: dto.fechaNacimiento ? new Date(dto.fechaNacimiento) : undefined,
            },
        });
    }
    async remove(id, user) {
        const cliente = await this.prisma.cliente.findUnique({ where: { id } });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        if (user.rol !== client_1.RolTipo.admin && cliente.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.cliente.update({ where: { id }, data: { activo: false } });
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ClientesService);


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateClienteDto = void 0;
const class_validator_1 = __webpack_require__(15);
class CreateClienteDto {
}
exports.CreateClienteDto = CreateClienteDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "localidad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "provincia", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "notas", void 0);


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsultasModule = void 0;
const common_1 = __webpack_require__(2);
const consultas_controller_1 = __webpack_require__(57);
const consultas_service_1 = __webpack_require__(58);
let ConsultasModule = class ConsultasModule {
};
exports.ConsultasModule = ConsultasModule;
exports.ConsultasModule = ConsultasModule = __decorate([
    (0, common_1.Module)({
        controllers: [consultas_controller_1.ConsultasController],
        providers: [consultas_service_1.ConsultasService],
    })
], ConsultasModule);


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsultasController = void 0;
const common_1 = __webpack_require__(2);
const consultas_service_1 = __webpack_require__(58);
const create_consulta_dto_1 = __webpack_require__(59);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const user_decorator_1 = __webpack_require__(25);
let ConsultasController = class ConsultasController {
    constructor(consultasService) {
        this.consultasService = consultasService;
    }
    findAll(user) {
        return this.consultasService.findAll(user);
    }
    findOne(id, user) {
        return this.consultasService.findOne(id, user);
    }
    create(dto, user) {
        return this.consultasService.create(dto, user.id);
    }
    update(id, dto, user) {
        return this.consultasService.update(id, dto, user);
    }
    remove(id, user) {
        return this.consultasService.remove(id, user);
    }
};
exports.ConsultasController = ConsultasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsultasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConsultasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_consulta_dto_1.CreateConsultaDto !== "undefined" && create_consulta_dto_1.CreateConsultaDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], ConsultasController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof create_consulta_dto_1.UpdateConsultaDto !== "undefined" && create_consulta_dto_1.UpdateConsultaDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], ConsultasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConsultasController.prototype, "remove", null);
exports.ConsultasController = ConsultasController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('consultas'),
    __metadata("design:paramtypes", [typeof (_a = typeof consultas_service_1.ConsultasService !== "undefined" && consultas_service_1.ConsultasService) === "function" ? _a : Object])
], ConsultasController);


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsultasService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
const client_1 = __webpack_require__(7);
let ConsultasService = class ConsultasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(user) {
        const where = user.rol === client_1.RolTipo.admin ? {} : { vendedorId: user.id };
        return this.prisma.consulta.findMany({
            where,
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                cliente: { select: { id: true, nombre: true, apellido: true } },
                lead: { select: { id: true, nombre: true, apellido: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, user) {
        const consulta = await this.prisma.consulta.findUnique({
            where: { id },
            include: {
                vendedor: { select: { id: true, nombre: true, apellido: true } },
                cliente: true,
                lead: true,
            },
        });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta no encontrada');
        if (user.rol !== client_1.RolTipo.admin && consulta.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return consulta;
    }
    async create(dto, userId) {
        return this.prisma.consulta.create({
            data: {
                ...dto,
                vendedorId: userId,
            },
            include: {
                cliente: { select: { id: true, nombre: true, apellido: true } },
                lead: { select: { id: true, nombre: true, apellido: true } },
            },
        });
    }
    async update(id, dto, user) {
        const consulta = await this.prisma.consulta.findUnique({ where: { id } });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta no encontrada');
        if (user.rol !== client_1.RolTipo.admin && consulta.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.consulta.update({ where: { id }, data: dto });
    }
    async remove(id, user) {
        const consulta = await this.prisma.consulta.findUnique({ where: { id } });
        if (!consulta)
            throw new common_1.NotFoundException('Consulta no encontrada');
        if (user.rol !== client_1.RolTipo.admin && consulta.vendedorId !== user.id) {
            throw new common_1.ForbiddenException();
        }
        return this.prisma.consulta.delete({ where: { id } });
    }
};
exports.ConsultasService = ConsultasService;
exports.ConsultasService = ConsultasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ConsultasService);


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateConsultaDto = exports.CreateConsultaDto = void 0;
const client_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(15);
class CreateConsultaDto {
}
exports.CreateConsultaDto = CreateConsultaDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "clienteId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "leadId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.ConsultaTipo),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof client_1.ConsultaTipo !== "undefined" && client_1.ConsultaTipo) === "function" ? _a : Object)
], CreateConsultaDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "descripcion", void 0);
class UpdateConsultaDto {
}
exports.UpdateConsultaDto = UpdateConsultaDto;
__decorate([
    (0, class_validator_1.IsEnum)(client_1.ConsultaEstado),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof client_1.ConsultaEstado !== "undefined" && client_1.ConsultaEstado) === "function" ? _b : Object)
], UpdateConsultaDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateConsultaDto.prototype, "resolucion", void 0);


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfiguracionModule = void 0;
const common_1 = __webpack_require__(2);
const configuracion_service_1 = __webpack_require__(61);
const configuracion_controller_1 = __webpack_require__(62);
const prisma_module_1 = __webpack_require__(5);
let ConfiguracionModule = class ConfiguracionModule {
};
exports.ConfiguracionModule = ConfiguracionModule;
exports.ConfiguracionModule = ConfiguracionModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [configuracion_controller_1.ConfiguracionController],
        providers: [configuracion_service_1.ConfiguracionService],
        exports: [configuracion_service_1.ConfiguracionService],
    })
], ConfiguracionModule);


/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfiguracionService = void 0;
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(6);
let ConfiguracionService = class ConfiguracionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCiclo() {
        return this.prisma.configCiclo.findFirst({
            where: { activo: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async upsertCiclo(data) {
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
    async getSorteos() {
        return this.prisma.sorteo.findMany({
            where: { activo: true },
            orderBy: { fecha: 'asc' },
        });
    }
    async createSorteo(data) {
        return this.prisma.sorteo.create({
            data: { ...data, fecha: new Date(data.fecha) },
        });
    }
    async updateSorteo(id, data) {
        const sorteo = await this.prisma.sorteo.findUnique({ where: { id } });
        if (!sorteo)
            throw new common_1.NotFoundException('Sorteo no encontrado');
        return this.prisma.sorteo.update({
            where: { id },
            data: { ...data, fecha: data.fecha ? new Date(data.fecha) : undefined },
        });
    }
    async deleteSorteo(id) {
        const sorteo = await this.prisma.sorteo.findUnique({ where: { id } });
        if (!sorteo)
            throw new common_1.NotFoundException('Sorteo no encontrado');
        return this.prisma.sorteo.update({ where: { id }, data: { activo: false } });
    }
    async getRankingConfig() {
        return this.prisma.rankingConfig.findFirst({ where: { activa: true } });
    }
    async upsertRankingConfig(data) {
        const existing = await this.prisma.rankingConfig.findFirst({ where: { activa: true } });
        if (existing) {
            return this.prisma.rankingConfig.update({ where: { id: existing.id }, data });
        }
        return this.prisma.rankingConfig.create({ data: { nombre: 'default', ...data } });
    }
};
exports.ConfiguracionService = ConfiguracionService;
exports.ConfiguracionService = ConfiguracionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ConfiguracionService);


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfiguracionController = void 0;
const common_1 = __webpack_require__(2);
const configuracion_service_1 = __webpack_require__(61);
const jwt_auth_guard_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(24);
const client_1 = __webpack_require__(7);
let ConfiguracionController = class ConfiguracionController {
    constructor(configuracionService) {
        this.configuracionService = configuracionService;
    }
    getCiclo() {
        return this.configuracionService.getCiclo();
    }
    upsertCiclo(body) {
        return this.configuracionService.upsertCiclo(body);
    }
    getSorteos() {
        return this.configuracionService.getSorteos();
    }
    createSorteo(body) {
        return this.configuracionService.createSorteo(body);
    }
    updateSorteo(id, body) {
        return this.configuracionService.updateSorteo(id, body);
    }
    deleteSorteo(id) {
        return this.configuracionService.deleteSorteo(id);
    }
    getRankingConfig() {
        return this.configuracionService.getRankingConfig();
    }
    upsertRankingConfig(body) {
        return this.configuracionService.upsertRankingConfig(body);
    }
};
exports.ConfiguracionController = ConfiguracionController;
__decorate([
    (0, common_1.Get)('ciclo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "getCiclo", null);
__decorate([
    (0, common_1.Post)('ciclo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "upsertCiclo", null);
__decorate([
    (0, common_1.Get)('sorteos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "getSorteos", null);
__decorate([
    (0, common_1.Post)('sorteos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "createSorteo", null);
__decorate([
    (0, common_1.Patch)('sorteos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "updateSorteo", null);
__decorate([
    (0, common_1.Delete)('sorteos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "deleteSorteo", null);
__decorate([
    (0, common_1.Get)('ranking-formula'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "getRankingConfig", null);
__decorate([
    (0, common_1.Post)('ranking-formula'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "upsertRankingConfig", null);
exports.ConfiguracionController = ConfiguracionController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.RolTipo.admin),
    (0, common_1.Controller)('configuracion'),
    __metadata("design:paramtypes", [typeof (_a = typeof configuracion_service_1.ConfiguracionService !== "undefined" && configuracion_service_1.ConfiguracionService) === "function" ? _a : Object])
], ConfiguracionController);


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnakeCaseInterceptor = void 0;
const common_1 = __webpack_require__(2);
const operators_1 = __webpack_require__(64);
function toSnake(str) {
    return str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}
function transformKeys(obj) {
    if (Array.isArray(obj))
        return obj.map(transformKeys);
    if (obj !== null && typeof obj === 'object' && !(obj instanceof Date)) {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [toSnake(k), transformKeys(v)]));
    }
    return obj;
}
let SnakeCaseInterceptor = class SnakeCaseInterceptor {
    intercept(_ctx, next) {
        return next.handle().pipe((0, operators_1.map)(transformKeys));
    }
};
exports.SnakeCaseInterceptor = SnakeCaseInterceptor;
exports.SnakeCaseInterceptor = SnakeCaseInterceptor = __decorate([
    (0, common_1.Injectable)()
], SnakeCaseInterceptor);


/***/ }),
/* 64 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const snake_case_interceptor_1 = __webpack_require__(63);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalInterceptors(new snake_case_interceptor_1.SnakeCaseInterceptor());
    app.enableCors({
        origin: (origin, callback) => {
            const allowed = [
                'http://localhost:3000',
                'http://localhost:3001',
                process.env.FRONTEND_URL ?? '',
            ];
            if (!origin || allowed.includes(origin) || origin.endsWith('.vercel.app')) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    });
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    console.log(`Backend corriendo en http://localhost:${port}/api`);
}
bootstrap();

})();

/******/ })()
;