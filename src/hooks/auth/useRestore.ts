// Hook to handle the password restoration process

import { RestorePasswordRequest } from "@/types/authType";
import { useState } from "react";

export const useRestore = () => {
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState<string | null>(null); 
    const restore = async (values: RestorePasswordRequest) => {
        setLoading(true);
        setError(null); 
        try {
            const response = await fetch("https://users.cacaoapi.online/update", {
                method: "PATCH",
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
        }
        catch (err) {
            setLoading(false);
            setError((err as Error).message || "Hubo un error al intentar restaurar la contraseña.");
            return false;
        }
    };
    return { restore, loading, error };
}