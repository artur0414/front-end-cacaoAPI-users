import { z } from "zod";

export const userValidation = z.object({
  username: z
    .string()
    .min(5, {
      message: "El nombre de usuario debe tener al menos 5 caracteres.",
    })
    .max(20, {
      message: "El nombre de usuario no puede superar los 20 caracteres.",
    }), 
  
  password: z
    .string()
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres.",
    })
    .max(20, {
      message: "La contraseña no puede superar los 20 caracteres.",
    })
    .regex(/[a-z]/, {
      message: "La contraseña debe contener al menos una letra minúscula.",
    })
    .regex(/[A-Z]/, {
      message: "La contraseña debe contener al menos una letra mayúscula.",
    })
    .regex(/[0-9]/, {
      message: "La contraseña debe contener al menos un número.",
    })
    .regex(/[\W_]/, {
      message: "La contraseña debe contener al menos un carácter especial (como !, @, #, etc.).",
    })
});