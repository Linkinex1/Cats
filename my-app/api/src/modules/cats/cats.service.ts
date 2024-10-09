import { BadRequestException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CatEntity } from "./cat.entity";
import { Repository } from "typeorm";
import { CatResponseDto } from "./dto/cat.response.dto";
import { plainToInstance } from "class-transformer";
import { CatCreateDto } from "./dto/cat.create.dto";
import { CatUpdateDto } from "./dto/cat.update.dto";

@Injectable()
export class CatsService{
    @InjectRepository(CatEntity)
    private catsRepository: Repository<CatEntity>

    async getAll(): Promise<CatResponseDto[]>{
        const cats = await this.catsRepository.find()
        return plainToInstance(CatResponseDto, cats)
    }

    async getOne(id: number): Promise<CatResponseDto>{
        try{
            const cats = await this.catsRepository.findOneOrFail({
                where: {
                    id
                }
            })
            return plainToInstance(CatResponseDto, cats)
        } catch(e){
            throw new NotFoundException('Cat not found')
        }
        
    }

    async create(payload: CatCreateDto): Promise<CatResponseDto>{
        try{
            const createdCat = await this.catsRepository.save({
                name: payload.name
            })

            return plainToInstance(CatResponseDto, createdCat)
        } catch(e){
            console.log('exception')
            throw new BadRequestException('Wrong cat')
        }        
    }

    async delete(id: number){

        const existingCat = await this.getOne(id)

        this.catsRepository.delete(id)
    }

    async update(id: number, payload: CatUpdateDto): Promise<CatResponseDto> {
        const cat = await this.catsRepository.findOne({ where: { id } });

        if (!cat) {
            throw new NotFoundException(`Cat with id ${id} not found`);
        }

        Object.assign(cat, payload);

        await this.catsRepository.save(cat);

        return cat;  
    }
}