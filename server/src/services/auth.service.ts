import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import config from '../config';
import logger from '../loaders/logger';
import userModel from '../models/user.model';
import { IUser, UserDTO } from '../interfaces/IUser';

@Service()
export default class AuthSerice {
    // random salt
    private getRandomSalt() {
        return Math.random().toString().slice(2, 5);
    }

    // encrypt pwd via md5 with salt
    private encryptPwd(pwd: string, salt: string) {
        const saltedPwd = `${pwd}:${salt}`;

        // 加盐密码的md5值
        const md5 = crypto.createHash('md5');
        const result = md5.update(saltedPwd).digest('hex');
        return result;
    }

    // generate jwt
    private generateJwt(user: any) {
        // 设置0.5小时过期
        const today = new Date();
        const exp = new Date(today);
        exp.setHours(today.getHours() + 0.5);
        logger.silly(`Sign JWT for userId: ${user._id}`);
        const jwtSecret = <jwt.Secret>config.jwtSecret;
        return jwt.sign(
            {
                _id: user._id, // We are gonna use this in the middleware 'isAuth'
                role: user.role,
                name: user.name,
                exp: exp.getTime() / 1000,
            },
            jwtSecret,
        );
    }

    /**
     * 注册
     * @param userDTO
     */
    public async signUp(userDTO: UserDTO): Promise<{ user: IUser; token: string }> {
        try {
            logger.silly('Hashing password');
            // 生成随机salt
            const salt = this.getRandomSalt();
            // 密码加密
            const hashedPwd = this.encryptPwd(userDTO.password, salt);
            logger.silly('Creating user db record');

            const userRecord = await new userModel({
                ...userDTO,
                salt,
                password: hashedPwd,
            });

            // 保存到数据库
            await userRecord.save();

            logger.silly('Generating JWT');
            const token = this.generateJwt(userRecord);

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, 'salt');
            return { user, token };
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    /**
     * 登录
     * @param email
     * @param pwd
     */
    public async signIn(email: string, pwd: string): Promise<{ user: IUser; token: string }> {
        const userRecord = await userModel.findOne({ email });
        if (!userRecord) {
            throw new Error('User not registered');
        }
        logger.silly('Checking password');
        const { password, salt } = userRecord;
        // 通过用户登录密码和存起来的salt，获得hash2
        const hash2 = this.encryptPwd(pwd, salt);
        // 比较password和hash2即可
        if (password === hash2) {
            logger.silly('Password is valid!');
            logger.silly('Generating JWT');

            const token = this.generateJwt(userRecord);

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, 'salt');
            return { user, token };
        } else {
            throw new Error('Invalid Password');
        }
    }
}
