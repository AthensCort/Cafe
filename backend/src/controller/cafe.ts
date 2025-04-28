import { users, User } from '../db/cafe';

interface LoginResponse {
    success: boolean;
    fullName?: string;
    membershipNumber?: number;
    message?: string;
  }
  
  export const loginUser = (username: string, password: string): LoginResponse => {
    const user: User | undefined = users.find((u: User) => u.username === username && u.password === password);
  
    if (user) {
      return { success: true, fullName: user.fullName, membershipNumber: user.membershipNumber };
    } else {
      return { success: false, message: 'Algo traes mal shavo, no se si al contraseña o el nombre' };
    }
  };
