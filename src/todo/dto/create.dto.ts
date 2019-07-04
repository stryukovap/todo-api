
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiModelProperty()
    readonly author: string;
    @ApiModelProperty()
    readonly title: string;
    @ApiModelProperty()
    readonly description: string;
    readonly 'created_date': any;
}
