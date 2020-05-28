import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate, Joi } from 'celebrate';
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
            const logger: any = Container.get('logger');
            logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
            try {
                const authService = Container.get(AuthService);
                const { user, token } = await authService.SignUp(req.body as UserDTO);
                return res.status(201).json({ user, token });
            } catch (error) {
                logger.error('🔥 error: %o', error);
                return next(error);
            }
        },
    );
};
