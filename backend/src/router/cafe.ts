//Avecs me marca el error que no lo encuentra como modulo entonces 
//tengo que aplicar esta libreria pa que no pase  --> la quite lol
import { Router } from 'express';
import { loginHandler } from '../handler/cafe'; 

const router = Router();
router.post('/login', loginHandler);

export default router;



