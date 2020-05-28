import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import config from '../config';
import { IUser, UserDTO } from '../interfaces/IUser';

@Service()
export default class AuthSerice {
    constructor(@Inject('userModel') private userModel: any, @Inject('logger') private logger: any) {}

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
        this.logger.silly(`Sign JWT for userId: ${user._id}`);
        return jwt.sign(
            {
                _id: user._id, // We are gonna use this in the middleware 'isAuth'
                role: user.role,
                name: user.name,
                exp: exp.getTime() / 1000,
            },
            config.jwtSecret,
        );
    }

    /**
     * 注册
     * @param userDTO
     */
    public async SignUp(userDTO: UserDTO): Promise<{ user: IUser; token: string }> {
        try {
            this.logger.silly('Hashing password');
            // 生成随机salt
            const salt = this.getRandomSalt();
            // 密码加密
            const hashedPwd = this.encryptPwd(userDTO.password, salt);
            this.logger.silly('Creating user db record');
            const userRecord = await this.userModel.create({
                ...userDTO,
                salt,
                password: hashedPwd,
            });
            // 保存到数据库
            userRecord.save();

            this.logger.silly('Generating JWT');
            const token = this.generateJwt(userRecord);

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, 'salt');
            return { user, token };
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
