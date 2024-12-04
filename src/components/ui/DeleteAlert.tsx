// Alert when someone tries to delete a user

"use client";

import { useRemoveUser } from "@/hooks/auth/useRemoveUser";
import { Button } from "./button";
import { SuccessMessage } from "./successMessage";
import { Loader } from "@/components/ui/loader";
import { useState } from "react";
import { DeleteAlertProps } from "@/types/userTypes";

export default function DeleteAlert({ remove, id }: DeleteAlertProps) {
  const { deleteUser, loading, error } = useRemoveUser();
  const [deleted, setDeleted] = useState(false);

  const handleRemove = async () => {
    const response = await deleteUser(id);
    if (response) {
      setDeleted(true);
    }
  };

  return (
    <div className="absolute inset-0 z-10 overflow-y-auto flex justify-center items-center">
      <div className="absolute inset-0 bg-white opacity-95 flex justify-center items-center dark:bg-custom-black">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md transform overflow-hidden text-center shadow-xl flex flex-col gap-4 dark:bg-custom-black-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Eliminar Usuario
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              ¿Estás seguro/a de querer eliminar al usuario?
            </p>
          </div>

          <div className="mt-4 flex gap-4">
            <Button
              onClick={() => {
                remove(false);
              }}
            >
              regresar
            </Button>
            <Button variant={"destructive"} onClick={handleRemove}>
              Eliminar
            </Button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </div>
      </div>
      {deleted && (
        <SuccessMessage
          message="Usuario eliminado exitosamente"
          action="Usuario Eliminado"
          buttonContent="Regresar"
        />
      )}
      {loading && <Loader />}
    </div>
  );
}
