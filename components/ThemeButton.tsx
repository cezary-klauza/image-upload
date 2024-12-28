"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

      setTheme(darkMode.matches ? "dark" : "light");
    } else setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--background", "#121826");
      root.style.setProperty("--foreground", "#F9FAFB");
      root.style.setProperty("--card", "#212936");
      root.style.setProperty("--border", "#4D5562");
    } else {
      root.style.setProperty("--background", "#F9FAFB");
      root.style.setProperty("--foreground", "#121826");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--border", "#E5E7EB");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="p-2 rounded-lg border border-border"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Image
          src="Moon_fill.svg"
          alt="switch to dark theme"
          width={32}
          height={32}
        />
      ) : (
        <Image
          src="Sun_fill.svg"
          alt="switch to light theme"
          width={32}
          height={32}
        />
      )}
    </button>
  );
};

export default ThemeButton;
