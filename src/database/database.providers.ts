import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/telegaUsers', { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false }),
  },
];