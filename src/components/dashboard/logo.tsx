"use client";

// Logo component for the dashboard

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import clsx from "clsx";
import { useWindowSize } from "@/hooks/global/useWindowSize";

const Logo = ({
  display,
  setDisplay,
}: {
  display: boolean;
  setDisplay: (value: boolean) => void;
}) => {
  const [desktop] = useWindowSize();

  return (
    <div
      className={clsx(
        "flex w-full h-[10%] gap-2 items-center rounded-md text-sm font-medium hover:text-custom-blue cursor-pointer",
        {
          "justify-center": !display,
          "justify-start": display,
        }
      )}
    >
      <Button
        variant={"ghost"}
        className="w-6 flex items-center justify-center"
      >
        <Bars3Icon className="w-5" />
      </Button>
      {display && (
        <div className="flex items-center justify-between flex-grow">
          <h1>CacaoApi</h1>
          {!desktop && (
            <Button
              variant={"ghost"}
              className="w-6 flex items-center justify-center"
              onClick={() => setDisplay(false)}
            >
              <XMarkIcon className="text-gray-500 w-5 dark:text-white" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
