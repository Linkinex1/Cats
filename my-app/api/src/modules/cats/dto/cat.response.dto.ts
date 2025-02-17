import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';


@Exclude()
export class CatResponseDto{
    @Expose()
    @ApiProperty({
        description: "Cat name", example: "Tom"
    })
    name: string
}