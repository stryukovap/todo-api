import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
    @ApiModelProperty()
    readonly title: string;
    @ApiModelProperty()
    readonly description: string;
    @ApiModelProperty()
    readonly 'updated_date': any;
}
