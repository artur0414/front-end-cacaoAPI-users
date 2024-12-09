import { useState } from "react";

export const useUpdateRole = () => {
  const [error, setError] = useState<string | null>(null);


  const updateRole = async (username: string, role: string): Promise<boolean> => {
    setError(null); // Limpiar cualquier error previo

    // Cambiar el rol: si es "admin", lo cambiamos a "user" y viceversa.
    const newRole = role === "admin" ? "user" : "admin";

    try {
      const response = await fetch(`https://users.cacaoapi.online/update-role`, {
        method: "PATCH",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, role: newRole }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Error desconocido");
        return false;
      }

      return true;
    } catch (error) {
      setError((error as Error).message);
      return false;
    } 
  };

  return { updateRole, error };
};
