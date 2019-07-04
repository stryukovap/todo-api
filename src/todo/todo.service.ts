import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create.dto';
import { UpdateTodoDto } from './dto/update.dto';

@Injectable()
export class TodoService {
  constructor(@Inject('TODO_MODEL') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = this.todoModel(createTodoDto);
    return await createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async updateOne(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.todoModel.updateOne({_id: id}, updateTodoDto);
  }

  async deleteOne(id: string): Promise<any> {
    return await this.todoModel.deleteOne({_id: id});
  }
}
