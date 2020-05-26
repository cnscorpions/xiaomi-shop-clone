import express, { Request, Response } from 'express';

const app: express.Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Express and Typescript');
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
