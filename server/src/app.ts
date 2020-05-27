import express, { Request, Response } from 'express';
import config from './config';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Express and Typescript');
});

app.listen(config.port, () => {
    console.log(`server is listening on ${config.port}`);
});
