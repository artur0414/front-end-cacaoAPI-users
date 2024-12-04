// This file contains the columns configuration for the users table.

import ActionsCell from "@/components/usuarios/actionsCells";
import { UsersProps } from "@/types/userTypes";
import { ColumnDef } from "@tanstack/react-table";

export const Columns: ColumnDef<UsersProps>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <ActionsCell
          id={user.id}
          username={user.username}
          userRole={user.role}
        />
      );
    },
  },
];
