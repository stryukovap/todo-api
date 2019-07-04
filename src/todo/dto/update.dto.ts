import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
    @ApiModelProperty()
    readonly title: string;
    @ApiModelProperty()
    readonly description: string;
    readonly 'updated_date': any;
}
