// Logo component for the dashboard

import { Bars3Icon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import clsx from "clsx";

const Logo = ({ display }: { display: boolean }) => {
  return (
    <div
      className={clsx(
        "flex  w-full h-[48px] gap-2 items-center rounded-md text-sm font-medium hover:text-custom-blue cursor-pointer",
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
      {display && <h1>CacaoApi</h1>}
    </div>
  );
};

export default Logo;
