import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config';
import routes from '../api';

export default ({ app }: { app: express.Application }) => {
    // 测试endpoint api
    app.get('/', (req: Request, res: Response) => {
        res.send('endpoint works!');
    });

    // 解决前端跨域问题
    app.use(cors());

    // 请求体转换为json格式
    app.use(bodyParser.json());

    // 加载api
    app.use(config.api.prefix, routes());

    // 捕获404，转发给error handler
    app.use((req, res, next) => {
        const err: any = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /// error handlers
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res.status(err.status).send({ message: err.message }).end();
        }
        return next(err);
    });
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};
