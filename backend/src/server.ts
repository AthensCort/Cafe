import express, { Application } from 'express';
import cors from 'cors'; // Importar el middleware cors
import bodyParser from 'body-parser';
import loginRouter from './router/cafe'; // Ajusta la ruta si es necesario

const app: Application = express();
const port: number = 3001;

// Middleware para permitir CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(bodyParser.json());

// Usar el router de login para las rutas que comienzan con '/api'
app.use('/api', loginRouter);

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
