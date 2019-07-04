
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiModelProperty()
    readonly author: string;
    @ApiModelProperty()
    readonly title: string;
    @ApiModelProperty()
    readonly description: string;
    @ApiModelProperty()
    readonly 'created_date': any;
}