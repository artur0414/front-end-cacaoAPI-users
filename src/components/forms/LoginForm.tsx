// form to login

"use client";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
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
import { FiEye, FiEyeOff } from "react-icons/fi";
import { userValidation } from "@/schemas/userValidation";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/ui/loader";

export default function IniciarSesionForm() {
  const router = useRouter();

  const { login, loading, error } = useLogin();

  const form = useForm<z.infer<typeof userValidation>>({
    resolver: zodResolver(userValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values: z.infer<typeof userValidation>) => {
    const response = await login(values);
    if (response) {
      router.push("/dashboard");
    }
  };

  return (
    <>
      <div className=" flex flex-col gap-2 w-full">
        <h3 className="text-2xl px-2">Iniciar Sesión</h3>
        <p className="text-xs md:text-sm text-gray-400 px-2">
          Inicia sesión para contribuir con nuestro cacaoAPI
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nombre de usuario"
                    autoComplete="on"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Nombre público con el que te identificas en nuestro sistema
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    <button
                      type="button"
                      className="absolute right-4 text-gray-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            className={buttonVariants({ variant: "link", size: "sm" })}
            href={"/auth/recuperacion"}
          >
            ¿Olvidaste tu contraseña?
          </Link>
          {error && (
            <p className="text-destructive text-sm text-center">{error} </p>
          )}
          <Button type="submit">Iniciar Sesión</Button>
        </form>
      </Form>
      {loading && <Loader />}
    </>
  );
}
