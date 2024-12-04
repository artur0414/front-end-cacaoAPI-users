// Hook to handle the theme change

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]); 

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  return { theme, toggleTheme };
};

export default useTheme;
