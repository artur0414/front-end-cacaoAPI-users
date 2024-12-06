// side navigation component

"use client";

import NavLinks from "./nav-links";
import { clsx } from "clsx";
import { DashboardProps } from "@/types/authType";
import Logo from "./logo";
import { useWindowSize } from "@/hooks/global/useWindowSize";

export default function SideNav({ isAdmin }: Partial<DashboardProps>) {
  const [display, setDisplay] = useWindowSize();

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div
      className={clsx(
        "h-screen bg-slate-100 dark:bg-custom-black-2 min-h-[100dvh]",
        {
          "w-64 transition-all duration-200": display,
          "w-16 transition-all duration-200": !display,
        }
      )}
    >
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div onClick={handleDisplay} className="flex py-4 md:px-1">
          <Logo display={display} />
        </div>
        <NavLinks displayFullNav={display} isAdmin={isAdmin!} />
      </div>
    </div>
  );
}
