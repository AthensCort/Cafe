import { Request, Response } from 'express';
import { loginUser } from '../controller/cafe'; 

export const loginHandler = (req: Request, res: Response): void => {
  const { username, password } = req.body;  

  const result = loginUser(username, password);  

  if (result.success) {
    res.status(200).json({
        //Dentro de este mensaje escribo todo con l nombre completo y aparte tambien envia el umero de membresía
      message: `¡Hola, ${result.fullName}! Gracias por ser parte de Café Aurora`,
      membershipNumber: result.membershipNumber
    });
  } else {
    res.status(400).json({ error: result.message });
  }
};
