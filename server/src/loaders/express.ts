import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default ({ app }: { app: express.Application }) => {
    // 测试接口
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello Express and Typescript');
    });

    // 解决前端跨域问题
    app.use(cors());

    // 请求体转换为json格式
    app.use(bodyParser.json());

    // 捕获404，转发给error handler
    app.use((req, res, next) => {
        const err: any = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
};
