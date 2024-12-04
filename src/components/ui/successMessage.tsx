// Success message component

"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { MessageProps } from "@/types/userTypes";

export const SuccessMessage = ({
  action,
  message,
  buttonContent,
  buttonPath,
}: MessageProps) => {
  const router = useRouter();

  return (
    <div className="absolute inset-0 z-10 overflow-y-auto flex justify-center items-center">
      <div className="absolute inset-0 bg-white opacity-95 flex justify-center items-center dark:bg-custom-black dark:opacity-100">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md transform overflow-hidden text-center shadow-xl dark:bg-custom-black-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            {action}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{message}</p>
          </div>

          <div className="mt-4">
            <Button
              type="button"
              className="bg-custom-blue/60 px-4 py-2 hover:bg-custom-blue/80"
              onClick={() => {
                buttonPath ? router.push(buttonPath) : window.location.reload();
              }}
            >
              {buttonContent}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
