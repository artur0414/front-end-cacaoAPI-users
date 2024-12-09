// Hook to remove a user from the database

import { useState } from "react";

export const useRemoveUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteUser = async (id: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://users.cacaoapi.online/delete/${id}`, {
                method: "DELETE",
                credentials: "include",
                mode: "cors",
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
            setError((err as Error).message || "Hubo un error al intentar eliminar al usuario.");
            return false;
        }
    };

    return { deleteUser, loading, error };
}