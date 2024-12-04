import { z } from "zod";

export const recoveryValidation = z.object({
  username: z
    .string()
    .min(5, {
      message: "El nombre de usuario debe tener al menos 5 caracteres.",
    })
    .max(20, {
      message: "El nombre de usuario no puede superar los 20 caracteres.",
    }), 
  
  email: z
  .string()
    .email({
        message: "El email no es válido."
    })
});