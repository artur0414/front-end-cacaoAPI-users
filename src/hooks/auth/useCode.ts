// Hook to verify the code sent to the user's email

import { useState } from "react";


export const useCode = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const verifyCode = async (code: string): Promise<boolean> => {
        setLoading(true);
        setError(null);
    
        try {
        const response = await fetch("https://users.cacaoapi.online/recover", {
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
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
            setError((err as Error).message || "Hubo un error al intentar verificar el código.");
            return false;
        }
    };
    
    return { verifyCode, loading, error };
    };