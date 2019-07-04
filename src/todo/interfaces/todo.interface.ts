import { Document } from 'mongoose';

export interface Todo extends Document {
    readonly author: string;
    readonly title: string;
    readonly description: string;
    readonly created_date: any;
    readonly updated_date: any;
}
