// updated password message as a modal

import { UpdatedPasswordModalProps } from "@/types/authType";
import { useRouter } from "next/navigation";
import { Button } from "./button";

const UpdatedPasswordModal = ({ action }: UpdatedPasswordModalProps) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (action === "forgotPassword") {
      console.log("forgotPassword");
      router.push("/auth");
    } else if (action === "updatePassword") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="inset-0 z-10 overflow-y-auto flex justify-center items-center">
      <div className="absolute inset-0 bg-white opacity-95 flex items-center justify-center dark:bg-custom-black dark:opacity-100">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md transform overflow-hidden text-center shadow-xl dark:bg-custom-black-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Contraseña Actualizada
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              !Tu contraseña ha sido actualizada correctamente!
            </p>
          </div>

          <div className="mt-4">
            <Button
              type="button"
              className="bg-custom-blue/60 px-4 py-2 hover:bg-custom-blue/80"
              onClick={handleRedirect}
            >
              {action === "forgotPassword"
                ? "Iniciar Sesión"
                : "Ir al Dashboard"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedPasswordModal;
