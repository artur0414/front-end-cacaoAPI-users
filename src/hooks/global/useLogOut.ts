// Hook to handle the logout process

export function useLogOut()  {
    const logOut = async (): Promise<Boolean>  => {
        try {
            const result = await fetch(
                "https://backend-users-8r0y.onrender.com/logout",
                {
                  method: "POST",
                  credentials: "include",
                  mode: "cors",
                }
              );
        
              const data = await result.json();

              console.log(data.message)
        
              if (!result.ok) {
                return false
            }
              return true;
        } catch (error) {
            return false
        }
    }
    return { logOut };
}