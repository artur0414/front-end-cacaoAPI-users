import { z } from "zod";

export const addUserValidation = z.object({
  name: z.
    string()
    .min(5, {
        message: "El nombre debe tener al menos 10 caracteres."
    })
    .max(50, {
        message: "El nombre no puede superar los 50 caracteres"
    }),
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
    }),

    role: z
    .string()
    .min(4, {
      message: "El rol debe tener al menos 4 caracteres.",
    })
    .max(5, {
      message: "El rol no puede superar los 5 caracteres.",
    }),
    
}).refine(data => data.password === data.repeatedPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["repeatedPassword"],
});