import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config/index';

export default async (): Promise<Db> => {
    const connection = await mongoose.connect(<string>config.databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return connection.connection.db;
};
