// form to update the password

"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { updatePasswordValidation } from "@/schemas/updatePassword";
import { useUpdate } from "@/hooks/ajustes/useUpdate";
import UpdatedPasswordModal from "@/components/ui/UpdatedPasswordModal";
import Loader from "../ui/loader";

interface UpdatePasswordModalProps {
  closeModal: (value: boolean) => void; // Función que recibe un booleano
}

export default function UpdatePassword({
  closeModal,
}: UpdatePasswordModalProps) {
  const [passwordChaned, setPaswordChanged] = useState<boolean>(false);
  const { update, loading, error } = useUpdate();

  const form = useForm<z.infer<typeof updatePasswordValidation>>({
    resolver: zodResolver(updatePasswordValidation),
    defaultValues: {
      password: "",
      newPassword: "",
      repeatedPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(values: z.infer<typeof updatePasswordValidation>) {
    const response = await update(values);
    if (response) {
      setPaswordChanged(true);
    }
  }

  return (
    <div className=" absolute flex items-center justify-center top-0 left-0 w-full h-full bg-white dark:bg-custom-black">
      <div className="bg-white w-full max-w-[300px] max-h-[90vh] sm:w-[350px] md:w-full md:h-auto md:max-w-[450px] lg:w-full  lg:max-h-[97vh] px-5 py-8 sm:py-10 md:py-12 shadow-lg flex flex-col gap-7 overflow-auto dark:bg-custom-black-2">
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-2xl px-2">Actualizar Contraseña</h3>
          <p className="text-xs md:text-sm text-gray-400 px-2">
            Por favor, introduce los datos solicitados para actualizar tu
            contraseña.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 px-2"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña Anterior</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input placeholder="********" type={"text"} {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nueva Contraseña ontraseña</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        placeholder="********"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    La contraseña debe tener al menos 8 caracteres, al menos una
                    letra mayúscula, al menos una letra minúscula, al menos un
                    número y al menos un carácter especial ( @ # $ % ^ & + = etc
                    )
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repeatedPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repetir Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        placeholder="********"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={"link"}
              className="align-right justify-end"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            </Button>
            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}
            <Button type="submit">Restablecer Contraseña</Button>
            <Button
              type="button"
              onClick={() => closeModal(false)}
              variant={"secondary"}
            >
              Regresar
            </Button>
          </form>
        </Form>
        {loading && <Loader />}
        {passwordChaned && <UpdatedPasswordModal action={"updatePassword"} />}
      </div>
    </div>
  );
}
