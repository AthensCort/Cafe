import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import loginRouter from './router/cafe';

const app: Application = express();
const port: number = 3001;

app.use(cors()); 


app.use(bodyParser.json());

app.use('/api', loginRouter);
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
