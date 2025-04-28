//Avecs me marca el error que no lo encuentra como modulo entonces 
//tengo que aplicar esta libreria pa que no pase
import { Router } from 'express';
import { loginHandler } from '../handler/cafe'; // Ajusta esta ruta si es necesario

const router = Router();

// Configurar la ruta POST para el login
router.post('/login', loginHandler);

export default router;



