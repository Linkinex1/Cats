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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cats_service_1 = require("./cats.service");
const cat_response_dto_1 = require("./dto/cat.response.dto");
const cat_create_dto_1 = require("./dto/cat.create.dto");
const cat_update_dto_1 = require("./dto/cat.update.dto");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async getAll() {
        return await this.catsService.getAll();
    }
    async getOne(id) {
        return await this.catsService.getOne(id);
    }
    async create(payload) {
        return await this.catsService.create(payload);
    }
    async delete(id) {
        return await this.catsService.delete(id);
    }
    async update(id, payload) {
        return await this.catsService.update(id, payload);
    }
};
exports.CatsController = CatsController;
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: "Cats list" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Cats list",
        type: cat_response_dto_1.CatResponseDto,
        isArray: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Cats list" }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: "Cats list",
        type: cat_response_dto_1.CatResponseDto,
        isArray: false
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create cat" }),
    (0, swagger_1.ApiOkResponse)({
        description: "Created cat",
        type: cat_response_dto_1.CatResponseDto,
        isArray: false
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cat_create_dto_1.CatCreateDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Delete a cat by ID" }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID', type: 'number' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Update a cat" }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID', type: 'number' }),
    (0, swagger_1.ApiOkResponse)({
        description: "Updated cat",
        type: cat_response_dto_1.CatResponseDto,
        isArray: false
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cat_update_dto_1.CatUpdateDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "update", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    (0, swagger_1.ApiTags)('Cats controller'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
//# sourceMappingURL=cats.controller.js.map