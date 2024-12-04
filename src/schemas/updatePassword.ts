import {z} from "zod";

export const updatePasswordValidation = z.object({
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
    }),

    newPassword: z
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
    }),

    repeatedPassword: z
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
    
}).refine(data => data.newPassword === data.repeatedPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["repeatedPassword"],
});
