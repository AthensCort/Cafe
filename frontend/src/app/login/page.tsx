


'use client'
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Background from "../background/page"; 
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import styles from "./page.module.css";


export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className= "h-screen w-full">
    <Background />
      <div className={`${styles.container} flex justify-center items-center`}>
      <div className="relative max-w-[1000px]  ml-10">
      </div>
        <Card className={`${styles.card} w-full max-w-[400px] min-w-[280px] `}>
          <CardContent>
            <h2 className={`${styles.title} text-[2rem]`}>Welcome back!</h2>
            <div className={styles["social-buttons"]}>
            </div>
          
            <div className="input-group space-y-4">
              <div>
                <label className={styles.label}>Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={styles.input}
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
              <Link href="/dashboard">
                <Button className={styles["submit-button"]}>Create account</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}