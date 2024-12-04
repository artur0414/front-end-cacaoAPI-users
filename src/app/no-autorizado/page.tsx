// Page for unauthorized access

"use client";

import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const { error } = useLogin();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth");
  };

  return (
    <div className="inset-0 z-10 overflow-y-auto flex justify-center items-center gap-5">
      <div className="absolute inset-0 bg-gray-100 opacity-70 flex justify-center items-center dark:bg-custom-black">
        {/* Fondo oscuro */}
        <div className="bg-white rounded-2xl p-6 w-full max-w-md transform overflow-hidden text-center flex flex-col gap-4 dark:bg-custom-black-2">
          <div className="mt-2 flex flex-col gap-2">
            <h3 className="text-lg font-medium leading-6 text-destructive dark:text-red-500">
              Acceso No Autorizado
            </h3>
            <p className="text-sm text-gray-500 dark:text-white">
              Lo sentimos, no tienes permisos para acceder a esta página.
              {error}
            </p>
          </div>

          <div className="mt-4">
            <Button type="button" variant={"default"} onClick={handleRedirect}>
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
