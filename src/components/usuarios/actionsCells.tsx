// Component for the actions cell in the usuarios table that contains the dropdown menu with the options to update the role or delete the user

"use client";

import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateRole } from "@/hooks/usuarios/useUpdateRole";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import DeleteAlert from "../ui/DeleteAlert";
import { ActionsCellProps } from "@/types/userTypes";

const ActionsCell = ({ username, userRole, id }: ActionsCellProps) => {
  const { updateRole, error } = useUpdateRole();
  const [showAlert, setShowAlert] = useState(false);

  const handleUpdate = async () => {
    const result = await updateRole(username, userRole);
    if (result) {
      window.location.href = "/dashboard/usuarios";
    }
  };

  if (showAlert) {
    const remove = (value: boolean) => {
      setShowAlert(value);
    };
    return (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
        <DeleteAlert remove={remove} id={id} />
      </div>
    );
  }

  return error ? (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
        <Alert className="w-full max-w-lg p-6 bg-white rounded-md shadow-md flex flex-col gap-5">
          <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
          <AlertTitle>Ups Ocurrió un error!</AlertTitle>
          <AlertDescription>
            Por favor intenta de nuevo o contacta con el administrador.
          </AlertDescription>
          <Button
            onClick={() => (window.location.href = "/dashboard/usuarios")}
          >
            Regresar
          </Button>
        </Alert>
      </div>
    </>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-4 flex items-center justify-center"
        >
          <EllipsisVerticalIcon className="w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="start" sideOffset={4}>
        <DropdownMenuItem>
          <Button
            onClick={() => setShowAlert(!showAlert)}
            variant={"ghost"}
            className="text-destructive justify-start dark:text-red-500"
          >
            Eliminar usuario
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            variant={"ghost"}
            className="text-custom-blue justify-start"
            onClick={handleUpdate} // Llamar a handleUpdate directamente
          >
            Actualizar Rol
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionsCell;
