// Hook to handle the login process

import { LoginRequest } from "@/types/authType";
import { useState } from "react";


export const useLogin = () => {

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null); 

  const login = async (values: LoginRequest): Promise<Boolean> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://backend-users-8r0y.onrender.com/login", {
      method: "POST",
      credentials: "include", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Error desconocido");
        setLoading(false)
        return false;
      }

      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      setError("Hubo un error al intentar iniciar sesión.");
      return false
    }
  };

  return { login, loading, error };
};