import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create.dto';
import { UpdateTodoDto } from './dto/update.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return await this.todoService.create({...createTodoDto, 'created_date': Date.now()});
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return await this.todoService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return await this.todoService.updateOne(id, {...updateTodoDto, 'updated_date': Date.now()});
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.todoService.deleteOne(id);
    }
}
