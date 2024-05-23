"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMoonFill, PiSunFill } from "react-icons/pi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit absolute right-5 top-2 z-10 md:fixed md:right-5 md:top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-[#242424] text-neutral-200 dark:bg-neutral-200 dark:text-[#242424]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Change Theme"
    >
      {theme === "light" ? <PiMoonFill /> : <PiSunFill />}
    </button>
  );
};
