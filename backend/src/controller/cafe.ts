import { users, User } from '../db/cafe';  // Importamos la lista de usuarios desde la base de datos

// Definimos el tipo de respuesta que esperamos del controlador
interface LoginResponse {
  success: boolean;
  fullName?: string;
  membershipNumber?: number;
  message?: string;
}

// Función para validar el login
export const loginUser = (username: string, password: string): LoginResponse => {
  console.log('Buscando usuario:', username);

  // Buscamos si existe un usuario que coincida con el nombre de usuario y la contraseña
  const user: User | undefined = users.find(u => u.username === username && u.password === password);

  // Si el usuario existe y las credenciales son correctas
  if (user) {
    return {
      success: true,
      fullName: user.fullName,
      membershipNumber: user.membershipNumber
    };
  } else {
    // Si el usuario no existe o la contraseña es incorrecta
    console.log('Usuario no encontrado o contraseña incorrecta');
    return {
      success: false,
      message: 'Usuario o contraseña incorrectos'
    };
  }
};
