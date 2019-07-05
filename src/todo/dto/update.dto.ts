import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {
    @ApiModelProperty()
    @IsNotEmpty()
    readonly title: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly description: string;
    readonly 'updated_date': any;
}
