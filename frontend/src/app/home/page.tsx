'use client';

import { Card, CardContent } from "@/components/ui/card";
import styles from "./page.module.css"; 

export default function WelcomePage() {
  const nombreSocio = "Socio"; 

  return (
    <div className="h-screen w-full bg-gray-900 flex justify-center items-center">
      <Card className={`${styles.card} w-full max-w-[400px]`}>
        <CardContent className="flex justify-center items-center p-8">
          <h1 className="text-3xl font-semibold text-white text-center">
            ¡Hola, {nombreSocio}! <br /> Gracias por ser parte de Café Aurora.
          </h1>
        </CardContent>
      </Card>
    </div>
  );
}