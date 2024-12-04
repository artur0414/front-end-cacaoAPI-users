// page to see all users

"use client";

import { Columns } from "@/app/dashboard/usuarios/columns";
import { UsersTable } from "@/components/usuarios/userTable";
import { useGetUsers } from "@/hooks/usuarios/useGetUsers";
import { Loader } from "@/components/ui/loader";
import { ExtendedColumn } from "@/types/userTypes";

export default function UsuariosPage() {
  const { loading, users } = useGetUsers();

  return loading ? (
    <Loader sizeParent={true} />
  ) : (
    <div className="w-full h-full flex justify-center items-center bg-white dark:bg-transparent">
      <UsersTable columns={Columns as ExtendedColumn[]} data={users} />
    </div>
  );
}
