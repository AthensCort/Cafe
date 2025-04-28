import { Request, Response } from 'express';
import { loginUser } from '../controller/cafe';  // Importamos la función de validación

export const loginHandler = (req: Request, res: Response): void => {
  const { username, password } = req.body;  // Extraemos username y password del cuerpo de la solicitud

  const result = loginUser(username, password);  // Llamamos a la función loginUser del controlador

  // Si la validación es exitosa
  if (result.success) {
    res.status(200).json({
      message: `¡Hola, ${result.fullName}! Gracias por ser parte de Café Aurora`,
      membershipNumber: result.membershipNumber
    });
  } else {
    // Si la validación falla
    res.status(400).json({ error: result.message });
  }
};
