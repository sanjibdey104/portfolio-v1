import { useEffect, useState } from "react";
import { getInitialTheme } from "../lib/theme-init";

export default function useAppTheme() {
  const [theme, setTheme] = useState(getInitialTheme());

  const applyThemeOnToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // Only sync with system if user hasn't set a manual theme
    if (!storedTheme) {
      const onSysThemePrefChange = (e) => {
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
      };

      mediaQuery.addEventListener("change", onSysThemePrefChange);

      return () => {
        mediaQuery.removeEventListener("change", onSysThemePrefChange);
      };
    }
  }, []);

  return { theme, toggleTheme: applyThemeOnToggle };
}
