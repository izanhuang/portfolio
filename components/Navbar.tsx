"use client";

import { Navbar as NextraNavbar, useTheme } from "nextra-theme-docs";
import { Sun, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    pagefind: any;
  }
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    async function loadPageFind() {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ "../../../../_pagefind/pagefind.js"
          );
        } catch (e) {
          window.pagefind = { search: () => ({ results: [] }), izan: () => {} };
        }
      }
    }
    loadPageFind();
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
