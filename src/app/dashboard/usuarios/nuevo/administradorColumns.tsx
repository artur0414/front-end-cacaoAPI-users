// Array of objects with the columns for the Administrador form

export const administrador = [
  {
    id: 1,
    name: "name",
    label: "Nombre Completo",
    placeholder: "Nombre Completo",
    type: "text",
  },
  {
    id: 2,
    name: "username",
    label: "Nombre de Usuario",
    placeholder: "Nombre de usuario",
    description: "El nombre de usuario debe tener al menos 5 caracteres.",
    type: "text",
  },
  {
    id: 3,
    name: "email",
    label: "Correo Electrónico",
    placeholder: "Correo Electrónico",
    type: "text",
  },
  {
    id: 4,
    name: "password",
    label: "Contraseña",
    placeholder: "Contraseña",
    description:
      "La contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula, al menos una letra minúscula, al menos un número y al menos un carácter especial ( @ # $ % ^ & + = etc )",
    type: "password",
  },
  {
    id: 5,
    name: "repeatedPassword",
    label: "Confirmar Contraseña",
    placeholder: "Confirmar Contraseña",
    type: "password",
  },
];
