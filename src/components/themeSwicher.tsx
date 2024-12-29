"use client";

import { Sun, Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  console.log("Current theme:", theme);

  return (
    <>
      <button
        className="rounded-full stroke-gray-800 p-1 hover:bg-gray-800 hover:stroke-gray-300 dark:bg-gray-800 dark:stroke-gray-300 dark:hover:bg-gray-300 dark:hover:stroke-gray-800"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "system" ? (
          <SunMoon className="size-auto stroke-inherit" />
        ) : theme === "dark" ? (
          <Moon className="size-auto stroke-inherit" />
        ) : (
          <Sun className="size-auto stroke-inherit" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
