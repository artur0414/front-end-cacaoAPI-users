import { AddUserRequest } from "@/types/userTypes";
import { useState } from "react";


export const useAddUsers = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addUsers = async (values:AddUserRequest ) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://users.cacaoapi.online/register", {
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
        }
        catch (err) {
            setLoading(false);
            setError((err as Error).message || "Hubo un error al intentar registrar al usuario.");
            return false;
        }
    };

    return { addUsers, loading, error };
}