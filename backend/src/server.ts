import express, { Application } from 'express';
import bodyParser from 'body-parser';
import authRouter from './router/cafe';

const app: Application = express();
//Andaba trabajando en otros proyectos y estaban abiertos por eso el cambio de puerto
const port: number = 3000;

app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
