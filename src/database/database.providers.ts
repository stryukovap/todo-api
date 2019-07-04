import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://raysael:XigyG4XYq2GWvnU@ds347467.mlab.com:47467/heroku_t4g0qnvp', { useNewUrlParser: true }),
  },
];
