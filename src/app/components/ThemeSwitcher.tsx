// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme('light')}><CiLight /></button>
      <button onClick={() => setTheme('dark')}><MdOutlineDarkMode /></button>
    </div>
  )
};
