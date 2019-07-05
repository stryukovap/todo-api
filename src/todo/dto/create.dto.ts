
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly author: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly title: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly description: string;

    readonly 'created_date': any;
}
