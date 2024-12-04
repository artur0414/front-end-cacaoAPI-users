// form to send a code through email to the user to recover their password

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
import { recoveryValidation } from "@/schemas/recoveryValidation";
import { useRecovery } from "@/hooks/auth/useRecovery";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/ui/loader";

export default function RecoveryForm() {
  const router = useRouter();
  const { recovery, loading, error } = useRecovery();

  const form = useForm<z.infer<typeof recoveryValidation>>({
    resolver: zodResolver(recoveryValidation),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof recoveryValidation>) {
    const response = await recovery(values);
    if (response) {
      router.push("/auth/insertar-codigo");
    }
  }

  return (
    <>
      <div className=" flex flex-col gap-2 w-full">
        <h3 className="text-2xl px-2">Recuperar Contraseña</h3>
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
                  <Input placeholder="user.name" autoComplete="on" {...field} />
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input placeholder="usuario.ejemplo@mail.com" {...field} />
                  </div>
                </FormControl>
                <FormDescription>
                  Dirección de correo electrónico asociada a tu cuenta
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-destructive text-sm text-center">{error} </p>
          <Button type="submit">Recuperar contraseña</Button>
          <Button
            type="button"
            onClick={() => router.push("/auth")}
            variant={"secondary"}
          >
            Regresar
          </Button>
        </form>
      </Form>
      {loading && <Loader />}
    </>
  );
}
