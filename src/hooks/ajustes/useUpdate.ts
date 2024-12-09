// Hook to update the user's password

import { UsersProps } from "@/types/userTypes";
import { useState } from "react";

export const useUpdate = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const update = async (data: UsersProps) => {
        try {
            setLoading(true);
            const response =  await fetch ('https://users.cacaoapi.online/update-password', {
                method: 'PATCH',
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.error || 'Error desconocido');
                setLoading(false);
                return false;
            }

            setLoading(false);
            return true;
        
        } catch (error) {
            setLoading(false);
            setError((error as Error).message || 'Hubo un error al intentar actualizar la contraseña');
            return false;
        }
    }

    return { update, loading, error };
}