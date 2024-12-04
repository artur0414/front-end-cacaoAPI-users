// Settings component

"use client";

import useAuth from "@/hooks/auth/useAth";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import UpdatePassword from "./updatePassword";

export default function Ajustes() {
  const { loading, data } = useAuth();
  const [updatedPassword, setUpdatedPassword] = useState(false);

  const onUpdatePassword = (value: boolean) => {
    setUpdatedPassword(value);
  };

  return loading ? (
    <Loader sizeParent={true} />
  ) : (
    <>
      <section className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-xl px-4">
          <h2 className="mb-6 text-2xl md:text-3xl">Ajustes</h2>
          <div className="sm:w-max-[300px] w-full max-h-[60vh] bg-white flex flex-col gap-8 py-8 px-4 overflow-y-auto dark:bg-custom-black-2">
            <div className="flex flex-col gap-3">
              <h4>Nombre</h4>
              <p className="text-gray-500 text-sm">{data.name}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4>Nombre de Usuario</h4>
              <p className="text-gray-500 text-sm">{data.username}</p>
            </div>
            <Button
              onClick={() => setUpdatedPassword(!updatedPassword)}
              type="button"
              variant={"link"}
              className="px-0"
            >
              Actualizar Contraseña
            </Button>
          </div>
        </div>
      </section>
      {updatedPassword && <UpdatePassword showModal={onUpdatePassword} />}
    </>
  );
}
