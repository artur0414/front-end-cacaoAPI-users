// Profile component

"use client";

import useAuth from "@/hooks/auth/useAth";
import { Loader } from "@/components/ui/loader";
import clsx from "clsx";

export default function Perfil() {
  const { loading, data } = useAuth();
  const role = data.role === "admin" ? "Super Administrador" : "Administrador";

  return loading ? (
    <Loader sizeParent={true} />
  ) : (
    <>
      <section className="w-full h-full flex justify-center md:items-center py-8">
        <div className="w-full max-w-xl px-4">
          <h2 className="mb-6 text-2xl md:text-3xl">Perfil</h2>
          <div className="sm:w-max-[300px] w-full max-h-[60vh] bg-white flex flex-col gap-8 py-8 px-4 overflow-y-auto dark:bg-custom-black-2">
            <div className="flex flex-col gap-3">
              <h4>Nombre</h4>
              <p className="text-gray-500 text-sm">{data.name}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4>Correo Electrónico</h4>
              <p className="text-gray-500 text-sm">{data.email}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4>Nombre de Usuario</h4>
              <p className="text-gray-500 text-sm">{data.username}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4>Rol</h4>
              <p
                className={clsx(
                  "text-sm font-semibold",
                  data.role === "admin" && "text-custom-blue",
                  data.role === "user" && "text-custom-yellow"
                )}
              >
                {role}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
