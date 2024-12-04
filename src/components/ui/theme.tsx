// Component to toggle between light and dark theme in the app

"use client";

import useAuth from "@/hooks/auth/useAth";
import useTheme from "@/hooks/global/useTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { data } = useAuth();

  return (
    <div className="absolute  top-auto bottom-8 right-4 flex justify-center items-center px-8 py-4 rounded-full bg-white dark:bg-custom-black-2 gap-4 shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
      {" "}
      <h2 className="">{data.username}</h2>
      <button
        onClick={toggleTheme}
        className="transition-opacity duration-600 ease-in-out opacity-100 hover:opacity-80"
      >
        {theme === "dark" ? (
          <SunIcon className="w-5 h-5 text-yellow-500 " />
        ) : (
          <MoonIcon className="w-5 h-5 text-slate-400" />
        )}
      </button>
    </div>
  );
}
