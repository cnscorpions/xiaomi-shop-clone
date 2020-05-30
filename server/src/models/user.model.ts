import mongoose from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            lowercase: true,
            unique: true,
            index: true,
        },
        password: String,
        salt: String,
        role: {
            type: String,
            default: 'user',
        },
    },
    {
        timestamps: true,
    },
);

const user = mongoose.model<IUser & mongoose.Document>('User', userSchema);

export default user;
