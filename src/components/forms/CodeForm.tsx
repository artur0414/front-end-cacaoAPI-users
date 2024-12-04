// Form to use the code sent to the user's email to verify the account

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
import { codeValidation } from "@/schemas/codeValidation";
import { useCode } from "@/hooks/auth/useCode";
import Loader from "@/components/ui/loader";
import { useRouter } from "next/navigation";

export default function CodeForm() {
  const { verifyCode, loading, error } = useCode();
  const router = useRouter();
  const form = useForm<z.infer<typeof codeValidation>>({
    resolver: zodResolver(codeValidation),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(values: z.infer<typeof codeValidation>) {
    const result = await verifyCode(values.code);
    if (result) {
      router.push("/auth/restablecer");
    }
  }

  return (
    <>
      <div className=" flex flex-col gap-2 w-full">
        <h3 className="text-2xl px-2">Código de Verificación</h3>
        <p className="text-xs md:text-sm text-gray-400 px-2">
          Por favor ingresa el código de verificación que te enviamos a tu
          correo electrónico.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-2">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de Verificación</FormLabel>
                <FormControl>
                  <Input placeholder="123456" autoComplete="on" {...field} />
                </FormControl>
                <div>
                  <FormDescription>
                    Si no recibiste el código, revisa tu bandeja de spam o
                    solicitalo nuevamente.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}
          <Button type="submit">Envíar</Button>
          <Button
            type="button"
            onClick={() => router.push("/auth/recuperacion")}
            variant={"secondary"}
          >
            Regresar
          </Button>
          <Link
            className={buttonVariants({ variant: "link", size: "sm" })}
            href={"/auth/recuperacion"}
          >
            Solicitar nuevo código
          </Link>
        </form>
      </Form>
      {loading && <Loader />}
    </>
  );
}
