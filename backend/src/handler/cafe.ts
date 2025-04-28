//Avecs me marca el error que no lo encuentra como modulo entonces 
//tengo que aplicar esta libreria pa que no pase
import {} from "module";
import { Request, Response } from 'express';
import { loginUser } from '../controller/cafe';

export const loginHandler = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  const result = loginUser(username, password);

  if (result.success) {
    res.status(200).json({
      message: `¡Hola, ${result.fullName}! Gracias por ser parte de Café Aurora`,
      membershipNumber: result.membershipNumber
    });
  } else {
    res.status(400).json({ error: result.message });
  }
};
