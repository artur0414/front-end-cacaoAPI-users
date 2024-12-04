// interfaz para agregar usuarios 

import { ColumnDef } from "@tanstack/react-table";

export interface AddUserRequest {
    name: string;
    username: string;
    email: string;
    password: string;
    role: string;
}

// Messages 

export interface MessageProps {
    action: string; 
    message: string;
    buttonContent: string;
    buttonPath ?: string; 
}

// Delete Alert

export interface DeleteAlertProps {
    remove: (value: boolean) => void;
    id: string;
  }

// Users Table

export interface UsersProps{
    nombre: string;
    role: string;
    email: string;
    username: string;
    id: string;
};

// User Role

export interface ActionsCellProps {
    username: string;
    userRole: string;
    id: string;
}


// Columnas de la tabla de usuarios

export type ExtendedColumn = ColumnDef<UsersProps> & {
    accessorKey: string;
};

// Users table 

export interface UserTableProps {
    data: UsersProps[]; // Lista de datos
    columns: ExtendedColumn[];
}
