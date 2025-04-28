export interface User {
    username: string;
    password: string;
    fullName: string;
    membershipNumber: number;
  }
  
  export const users: User[] = [
    { username: 'sandra.g', password: 'latte123', fullName: 'Sandra García', membershipNumber: 5001 },
    { username: 'roberto.m', password: 'capuccino456', fullName: 'Roberto Martínez', membershipNumber: 5002 },
    { username: 'esteban.l', password: 'espresso789', fullName: 'Esteban López', membershipNumber: 5003 }
  ];
  