'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Background from "../background/page"; 
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import styles from "./page.module.css";

export default function SignUpForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();  
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();

          localStorage.setItem('mensajeBienvenida', data.message);
          if (response.ok) { //con esto si lo encontraos ps se guarda para home y ponr el nombre
            router.push('/home');  
          } else {
            setErrorMessage(data.error || 'No se sabe qué pasó');
          }
        } catch (error) {
          setErrorMessage('Oye loco, no estas en la db');
        }
      };

    return (
        <div className="h-screen w-full">
          <Background />
          <div className={`${styles.container} flex justify-center items-center`}>
            <div className="relative max-w-[1000px] ml-10"></div>
            <Card className={`${styles.card} w-full max-w-[400px] min-w-[280px]`}>
              <CardContent>
                <h2 className={`${styles.title} text-[2rem]`}>Bienvenido!</h2>
                <h2 className={`${styles.title} text-[2rem]`}>
                  Café Aurora! <br />
                  <span className="italic text-[1.0rem]">Membership exclusive</span>
                </h2>
    
                {/* Mostrar mensaje de error si lo hay */}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    
                <div className="input-group space-y-4">
                  <div>
                    <label className={styles.label}>Nombre de usuario</label>
                    <Input
                      type="text"
                      placeholder="Ingrese usuario"
                      className={styles.input}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={styles.label}>Contraseña</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingrese contraseña"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className={styles["toggle-password"]}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>
    
                  <Button
                    className={styles["submit-button"]}
                    onClick={handleLogin}
                  >
                    Acceder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
}
