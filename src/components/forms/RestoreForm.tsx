// form to restore password

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
import { restoreValidation } from "@/schemas/restoreValidation";
import { useRestore } from "@/hooks/auth/useRestore";
import { Loader } from "@/components/ui/loader";
import UpdatedPasswordModal from "../ui/UpdatedPasswordModal";
import { useRouter } from "next/navigation";

export default function RestoreForm() {
  const router = useRouter();
  const [passwordChaned, setPaswordChanged] = useState<boolean>(false);
  const { restore, loading, error } = useRestore();
  const form = useForm<z.infer<typeof restoreValidation>>({
    resolver: zodResolver(restoreValidation),
    defaultValues: {
      password: "",
      repeatedPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(values: z.infer<typeof restoreValidation>) {
    const result = await restore(values);
    if (result) {
      setPaswordChanged(true);
    }
  }

  return (
    <>
      <div className=" flex flex-col gap-2 w-full">
        <h3 className="text-2xl px-2">Restablecer Contraseña</h3>
        <p className="text-xs md:text-sm text-gray-400 px-2">
          Por favor, introduce tu nueva contraseña para restablecer el acceso a
          tu cuenta
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
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
                  número y al menos un carácter especial ( @ # $ % ^ & + = etc )
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
            onClick={() => router.push("/auth/insertar-codigo")}
            variant={"secondary"}
          >
            Regresar
          </Button>
        </form>
      </Form>
      {passwordChaned && <UpdatedPasswordModal action="forgotPassword" />}
      {loading && <Loader />}
    </>
  );
}
