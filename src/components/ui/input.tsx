// Input component from Shadcn UI

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 text-[16px] md:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-1 focus:ring-custom-blue/40 dark:bg-transparent dark:focus:border-custom-blue",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
