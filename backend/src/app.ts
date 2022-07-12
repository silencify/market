import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import 'dotenv/config';
import route from './route';

const app: Express = express();
const port: number = 9090;

app.use(cors());
app.use(json());

app.use(route);

app.listen(port, () => {
    return console.log(`Listening on port ${port}`);
})
