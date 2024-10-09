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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cat_entity_1 = require("./cat.entity");
const typeorm_2 = require("typeorm");
const cat_response_dto_1 = require("./dto/cat.response.dto");
const class_transformer_1 = require("class-transformer");
let CatsService = class CatsService {
    async getAll() {
        const cats = await this.catsRepository.find();
        return (0, class_transformer_1.plainToInstance)(cat_response_dto_1.CatResponseDto, cats);
    }
    async getOne(id) {
        try {
            const cats = await this.catsRepository.findOneOrFail({
                where: {
                    id
                }
            });
            return (0, class_transformer_1.plainToInstance)(cat_response_dto_1.CatResponseDto, cats);
        }
        catch (e) {
            throw new common_1.NotFoundException('Cat not found');
        }
    }
    async create(payload) {
        try {
            const createdCat = await this.catsRepository.save({
                name: payload.name
            });
            return (0, class_transformer_1.plainToInstance)(cat_response_dto_1.CatResponseDto, createdCat);
        }
        catch (e) {
            console.log('exception');
            throw new common_1.BadRequestException('Wrong cat');
        }
    }
    async delete(id) {
        const existingCat = await this.getOne(id);
        this.catsRepository.delete(id);
    }
    async update(id, payload) {
        const cat = await this.catsRepository.findOne({ where: { id } });
        if (!cat) {
            throw new common_1.NotFoundException(`Cat with id ${id} not found`);
        }
        Object.assign(cat, payload);
        await this.catsRepository.save(cat);
        return cat;
    }
};
exports.CatsService = CatsService;
__decorate([
    (0, typeorm_1.InjectRepository)(cat_entity_1.CatEntity),
    __metadata("design:type", typeorm_2.Repository)
], CatsService.prototype, "catsRepository", void 0);
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)()
], CatsService);
//# sourceMappingURL=cats.service.js.map