"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "../ui/input";
import { useWindowSize } from "@/hooks/global/useWindowSize";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { UserPlusIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { UserTableProps } from "@/types/userTypes";

export function UsersTable({ data, columns }: UserTableProps) {
  const [display] = useWindowSize(); // Valor calculado y control manual

  const router = useRouter();

  const filteredColumns = display
    ? columns
    : columns.filter((column) =>
        ["name", "role", "actions"].includes(column.accessorKey)
      );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data: data,
    columns: filteredColumns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] max-w-full h-full py-5 px-4 box-border flex justify-center items-center">
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center py-4 justify-between gap-4">
          <Input
            placeholder="Filtrando usuarios por nombre..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm w-full dark:bg-transparent dark:border-gray-500"
          />
          <Button
            onClick={() => router.push("/dashboard/usuarios/nuevo")}
            className="w-20 h-full"
          >
            <UserPlusIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="overflow-auto rounded-md border dark:border-gray-500">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="dark:border-gray-500 dark:hover:bg-custom-black-2"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="dark:border-gray-500  dark:hover:bg-custom-black-2"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={clsx({
                          "text-custom-blue": cell.getValue() === "admin",
                          "text-custom-yellow": cell.getValue() === "user",
                        })}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={filteredColumns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
