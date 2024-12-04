// Hook to handle the password recovery process

import { RecoveryRequest } from "@/types/authType";
import { useState } from "react";


export const useRecovery = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const recovery = async (values: RecoveryRequest): Promise<boolean> => {
        setLoading(true);
        setError(null);
    
        try {
        const response = await fetch("https://backend-users-8r0y.onrender.com/forgot", {
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
            setLoading(false);
            return false;
        }
    
        setLoading(false);
        return true;
        } catch (err) {
            setLoading(false);
            setError((err as Error).message || "Hubo un error al intentar recuperar la contraseña.");
            return false;
        }
    };
    
    return { recovery, loading, error };
}