// Form to add a new user to the database

"use cliente";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button, buttonVariants } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { addUserValidation } from "@/schemas/addUserValidation";
import { administrador } from "@/app/dashboard/usuarios/nuevo/administradorColumns";
import { useAddUsers } from "@/hooks/usuarios/useAddUsers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SuccessMessage } from "@/components/ui/successMessage";
import Loader from "@/components/ui/loader";
import { useWindowSize } from "@/hooks/global/useWindowSize";

// AddUserForm component
export default function AddUserForm() {
  // Hook to manage the router
  const router = useRouter();

  // Hook to verify windows size to add close button on mobile devices
  const [isDesktop] = useWindowSize();

  // Hook to manage the form
  const { addUsers, loading, error } = useAddUsers();

  // Hook to manage the state of the adminAdded variable
  const [adminAdded, setAdminAdded] = useState<boolean>(false);

  // Hook to manage the form data and validation with zod
  const form = useForm<z.infer<typeof addUserValidation>>({
    resolver: zodResolver(addUserValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      repeatedPassword: "",
      role: "admin",
    },
  });

  // Function to handle the form submission
  const onSubmit = async (values: z.infer<typeof addUserValidation>) => {
    const result = await addUsers(values);
    if (result) {
      setAdminAdded(true);
    }
  };

  return (
    <section className="relative w-full h-full flex justify-center items-center flex-col z-50">
      <div className=" bg-white w-full max-w-[300px] max-h-[90vh] sm:w-[350px] md:w-full md:h-auto md:max-w-[600px] lg:w-full lg:max-w-[900px] lg:max-h-[97vh] px-5 py-8 sm:py-10 md:py-12 shadow-lg flex flex-col gap-7 overflow-auto dark:bg-custom-black-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl px-2">Agregar usuario</h3>
          <p className="text-xs md:text-sm text-gray-400 px-2">
            Por favor ingresa los datos correspondientes al nuevo administrador.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 px-2"
          >
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Rol</FormLabel>
                  <FormControl className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-custom-black-2 dark:text-white focus:outline-none focus:ring-1 focus:ring-custom-blue/40">
                    <select
                      {...field}
                      className="input-select dark:focus:border-custom-blue"
                      value={field.value || "admin"}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </FormControl>
                  <FormDescription>
                    Selecciona el rol que tendrá el usuario
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {administrador.map((admin) => (
              <FormField
                key={admin.id}
                control={form.control}
                name={
                  admin.name as
                    | "name"
                    | "username"
                    | "email"
                    | "password"
                    | "repeatedPassword"
                }
                render={({ field }) => {
                  return (
                    <FormItem key={admin.id}>
                      <FormLabel>{admin.placeholder}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={admin.placeholder}
                          autoComplete="off"
                          type={admin.type}
                          {...field}
                        />
                      </FormControl>
                      {admin.description && (
                        <FormDescription>{admin.description}</FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            ))}
            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}
            <div className="flex justify-center items-center flex-col gap-4 pt-4 lg:flex-row lg:pt-6">
              <Button type="submit">Agregar</Button>
              <Button
                type="button"
                className={buttonVariants({ variant: "secondary" })}
                onClick={() => {
                  router.push("/dashboard/usuarios");
                }}
              >
                Regresar
              </Button>
            </div>
          </form>
          {!isDesktop && (
            <div className="absolute p-0 top-0 right-0 dark:bg-custom-yellow">
              <Button
                type="button"
                variant={"ghost"}
                onClick={() => {
                  router.push("/dashboard/usuarios");
                }}
              >
                x
              </Button>
            </div>
          )}
        </Form>
      </div>
      {loading && <Loader />}
      {adminAdded && (
        <SuccessMessage
          action="Usuario agregado"
          message="El usuario ha sido agregado exitosamente"
          buttonContent="Continuar"
          buttonPath="/dashboard/usuarios"
        />
      )}
    </section>
  );
}
