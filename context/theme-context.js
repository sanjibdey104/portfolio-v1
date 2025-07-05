import { createContext } from "react";
import useAppTheme from "../hooks/useAppTheme";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
