import express from 'express';
import cors from 'cors';
require('dotenv').config();
import db from '../config/db';
import route from './route';

const app = express();
const port = 9090;

app.use(cors());

app.use(route);

app.listen(port, () => {
    return console.log(`Listening on port ${port}`);
})
