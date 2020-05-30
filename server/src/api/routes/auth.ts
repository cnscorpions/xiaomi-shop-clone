import { Router, Request, Response, NextFunction } from 'express';
import { celebrate, Joi } from 'celebrate';
import logger from '../../loaders/logger';
import AuthService from '../../services/auth.service';
import { UserDTO } from '../../interfaces/IUser';

const router = Router();

export default (app: Router) => {
    // 挂在当前路由模块到主应用的/auth路径下
    app.use('/auth', router);

    // 登录/注册
    router.post(
        '/verify',
        celebrate({
            body: Joi.object({
                email: Joi.string().required(),
                password: Joi.string().required(),
            }),
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            logger.debug('Calling Sign-In endpoint with body: %o', req.body);
            try {
                const { email, password } = req.body;
                const authService = new AuthService();
                const { user, token, message } = await authService.signIn(email, password);
                return res.status(200).json({ user, token, message });
            } catch (error) {
                logger.error('🔥 error: %o', error);
                return next(error);
            }
        },
    );
};
