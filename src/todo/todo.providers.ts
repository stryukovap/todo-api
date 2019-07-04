import { Connection } from 'mongoose';
import { Todochema } from './todo.schema';

export const todoProviders = [
  {
    provide: 'TODO_MODEL',
    useFactory: (connection: Connection) => connection.model('Todo', Todochema),
    inject: ['DATABASE_CONNECTION'],
  },
];
