// Navigation links for the side navigation in the dashboard.

"use client";

import {
  Square3Stack3DIcon,
  PowerIcon,
  UserGroupIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LogoutLink from "./logout";

interface Props {
  displayFullNav: boolean;
  isAdmin: boolean;
}

// Map of links to display in the side navigation.
const links = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  {
    name: "Perfil",
    href: "/dashboard/perfil",
    icon: UserIcon,
  },
  { name: "API", href: "/dashboard/api", icon: Square3Stack3DIcon },
  { name: "Usuarios", href: "/dashboard/usuarios", icon: UserGroupIcon },
  { name: "Ajustes", icon: Cog6ToothIcon, href: "/dashboard/ajustes" },
  { name: "Cerrar Sesión", icon: PowerIcon, href: "/auth" },
];

export default function NavLinks({ displayFullNav, isAdmin }: Props) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full">
      {links
        .filter((link) => !(!isAdmin && link.name === "Usuarios"))
        .map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;
          const linkClasses = clsx(
            "flex h-[48px] gap-2 items-center  p-3 text-sm font-medium hover:bg-custom-blue/10 hover:text-custom-blue cursor-pointer md:p-2 md:px-3 my-1",
            {
              "bg-custom-blue/20 text-custom-blue": isActive,
              "text-gray-500": !isActive,
              "justify-center": !displayFullNav,
            }
          );

          const additionalClass = link.name === "Ajustes" ? "mt-auto" : "";

          return link.name === "Cerrar Sesión" ? (
            // Handle logout link separately due to different behavior
            <Link
              key={link.name}
              className={clsx(linkClasses, additionalClass)}
              href={link.href!}
            >
              <div className="flex gap-2">
                <LinkIcon className="w-4" />
                <LogoutLink displayFullNav={displayFullNav} />
              </div>
            </Link>
          ) : (
            // handle other links
            <Link
              key={link.name}
              href={link.href!}
              className={clsx(linkClasses, additionalClass)}
              aria-current={isActive ? "page" : undefined}
              aria-label={link.name}
            >
              <LinkIcon className="w-4" />
              {displayFullNav && <p>{link.name}</p>}
            </Link>
          );
        })}
    </div>
  );
}
