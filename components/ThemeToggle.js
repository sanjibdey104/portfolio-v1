import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledThemeToggle = styled.button`
  padding: 0;
  display: grid;
  place-content: center;
`;

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current || "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </StyledThemeToggle>
  );
}
