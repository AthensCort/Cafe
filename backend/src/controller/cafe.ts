import { users, User } from '../db/cafe';  


interface LoginResponse {
  success: boolean;
  fullName?: string;
  membershipNumber?: number;
  message?: string;
}

export const loginUser = (username: string, password: string): LoginResponse => {
  console.log('Buscando usuario:', username);

 
  const user: User | undefined = users.find(u => u.username === username && u.password === password);


  if (user) {
    return {
      success: true,
      fullName: user.fullName,
      membershipNumber: user.membershipNumber
    };
  } else {

    console.log('Usuario no encontrado o contraseña incorrecta :P');
    return {
      success: false,
      message: 'Usuario o contraseña incorrectos :P'
    };
  }
};
