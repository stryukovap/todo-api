import * as mongoose from 'mongoose';

export const Todochema = new mongoose.Schema({
    author: String,
    id: Number,
    title: String,
    description: String,
    created_date: Date,
    updated_date: Date,
});
