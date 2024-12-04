// Hook to handle the window size with manual control.

import { useState, useEffect } from "react";

export function useWindowSize(initialSize?: boolean) {
  const [isDesktop, setIsDesktop] = useState(initialSize || false); 

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); 
    };

    if (initialSize === undefined) {
      handleResize(); 
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialSize]);

  const setSize = (value: boolean) => {
    setIsDesktop(value);
  };

  return [isDesktop, setSize] as const; 
}
