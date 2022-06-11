import express from 'express';
import cors from 'cors';
const app = express();
const port = 9000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    return console.log(`Listening on port ${port}`)
})
