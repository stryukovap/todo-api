import { Controller, Get, Post, Body, Patch, Delete, Param, Query } from '@nestjs/common';
import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create.dto';
import { UpdateTodoDto } from './dto/update.dto';

@ApiUseTags('todo')
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return await this.todoService.create({ ...createTodoDto, 'created_date': Date.now() });
    }

    @Get()
    @ApiImplicitQuery({ name: 'author' })
    async findAll(@Query() { author }: any): Promise<Todo[]> {
        return await this.todoService.findAll(author);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.todoService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return await this.todoService.updateOne(id, { ...updateTodoDto, 'updated_date': Date.now() });
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.todoService.deleteOne(id);
    }
}
