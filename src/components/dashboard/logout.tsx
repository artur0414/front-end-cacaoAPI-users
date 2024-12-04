// Logout component for the dashboard

import { useLogOut } from "@/hooks/global/useLogOut";
import { useRouter } from "next/navigation";

const LogoutLink = ({ displayFullNav }: { displayFullNav: boolean }) => {
  const { logOut } = useLogOut();
  const router = useRouter();

  const handleLogOut = async () => {
    const response = await logOut();
    if (response) {
      router.push("/auth");
    }
  };

  return (
    <>
      {displayFullNav && (
        <button onClick={handleLogOut} className="text-sm font-medium">
          Cerrar Sesión
        </button>
      )}
    </>
  );
};

export default LogoutLink;
