import { ApiProperty } from "@nestjs/swagger";

export class CatUpdateDto {
    @ApiProperty({ example: 'Tom', description: 'Name of the cat', required: false })
    name?: string;

    @ApiProperty({ example: 2, description: 'Age of the cat', required: false })
    age?: number;

}
