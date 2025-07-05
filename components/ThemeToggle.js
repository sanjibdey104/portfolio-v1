import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import styled from "styled-components";

const StyledThemeToggle = styled.button`
  padding: 0;
  display: grid;
  place-content: center;
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // [TODO]: extract into an util
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </StyledThemeToggle>
  );
}
