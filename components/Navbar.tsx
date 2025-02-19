"use client";

import { Navbar as NextraNavbar, useTheme } from "nextra-theme-docs";
import { Sun, MoonStar } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const ThemeIcon = theme === "light" ? MoonStar : Sun;

  function setCurrentTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <NextraNavbar
      logo={<b>Izan Huang</b>}
      projectLink="https://github.com/izanhuang"
      children={
        <button onClick={setCurrentTheme}>
          <ThemeIcon />
        </button>
      }
    />
  );
}
