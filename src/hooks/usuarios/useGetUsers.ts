
import { useEffect, useState } from "react";


export const useGetUsers = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            getUsers();
        }
    }, [users.length]); 
    

    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://backend-users-8r0y.onrender.com/getAll", {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const data = await response.json();
            if (!response.ok) {
                setLoading(false);
                return;
            }

            setUsers(data);
            setLoading(false);       
        } catch {
            setLoading(false);
        }
    }

    return { getUsers, loading, users };
}