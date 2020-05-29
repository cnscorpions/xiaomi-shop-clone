import { Router, Request, Response, NextFunction } from 'express';
import { celebrate, Joi } from 'celebrate';
import logger from '../../loaders/logger';
import AuthService from '../../services/auth.service';
import { UserDTO } from '../../interfaces/IUser';

const router = Router();

export default (app: Router) => {
    // 挂在当前路由模块到主应用的/auth路径下
    app.use('/auth', router);

    // 注册
    router.post(
        '/signup',
        celebrate({
            body: Joi.object({
                name: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required(),
            }),
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
            try {
                const authService = new AuthService();
                const { user, token } = await authService.signUp(req.body as UserDTO);
                return res.status(201).json({ user, token });
            } catch (error) {
                logger.error('🔥 error: %o', error);
                return next(error);
            }
        },
    );

    // 登录
    router.post(
        '/signin',
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
                const { user, token } = await authService.signIn(email, password);
                return res.status(200).json({ user, token });
            } catch (error) {
                logger.error('🔥 error: %o', error);
                return next(error);
            }
        },
    );
};
