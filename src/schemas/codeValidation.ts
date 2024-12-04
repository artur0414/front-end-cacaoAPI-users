import {z} from "zod";

export const codeValidation = z.object({
    code: z
        .string()
        .min(6, {
        message: "El código debe tener al menos 6 caracteres.",
        })
        .max(6, {
        message: "El código no puede superar los 6 caracteres.",
        })
    });
    