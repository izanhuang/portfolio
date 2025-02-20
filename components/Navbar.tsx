"use client";

import { Navbar as NextraNavbar, useTheme } from "nextra-theme-docs";
import { Sun, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const ThemeIcon = theme === "light" ? MoonStar : Sun;

  function setCurrentTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const Logo = (
    <div className="transition-all ease-in-out flex gap-2 hover:gap-4 font-bold">
      <span className="text-pink-500">[</span>
      <span className="hover:text-pink-500 transition-colors">Izan</span>
      <span className="text-pink-500">]</span>
    </div>
  );

  return (
    <NextraNavbar
      logo={Logo}
      projectLink="https://github.com/izanhuang"
      children={
        <button className="hover:cursor-pointer" onClick={setCurrentTheme}>
          <ThemeIcon />
        </button>
      }
    />
  );
}
