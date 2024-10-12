import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World Today');
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost ${PORT}`)
});