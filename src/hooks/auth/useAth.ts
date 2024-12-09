// Hook to verify if the user is authenticated and has the necessary permissions to access the page

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const useAuth = () => {
  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await fetch(
          "https://users.cacaoapi.online/protected",
          {
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer token'
            }
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setStatus(false);
          setLoading(false);
          router.push("/no-autorizado");
        }

        setStatus(true);
        setLoading(false);
        setData(() => data);
      } catch  {
        router.push("/no-autorizado");
        setStatus(false);
        setLoading(false);
      } 
    };
    verify();
  }, [router]);


  return {status, loading, data};
};

export default useAuth;
