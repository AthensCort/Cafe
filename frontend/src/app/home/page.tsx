'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "./page.module.css"; 
import Background from "../background/page"; 

export default function WelcomePage() {
  const [mensajeBienvenida, setMensajeBienvenida] = useState('¡Hola, Socio! Gracias por ser parte de Café Aurora');

  useEffect(() => {
    //recordar que esto es un mensaje que me envia desde handler y esta completo con el nombre
    //entonces no se le agrega nada ams que eso
    const mensajeGuardado = localStorage.getItem('mensajeBienvenida');
    if (mensajeGuardado) {
      setMensajeBienvenida(mensajeGuardado);
    }
  }, []);

  return (
    /*aqui el mensaje simplemente, queria comentar mas abajo pero me lo tomaba como texto lol*/ 
    <div className="h-screen w-full flex justify-center items-center">
      <Background />
      <Card className={`${styles.card} w-full max-w-[400px]`}>
        <CardContent className="flex justify-center items-center p-8">
          <h1 className="text-3xl font-semibold text-white text-center">
        
            {mensajeBienvenida}
          </h1>
        </CardContent>
      </Card>
    </div>
  );
}
