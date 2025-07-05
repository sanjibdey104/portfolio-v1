import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import styled from "styled-components";

const StyledThemeToggle = styled.button`
  padding: 0;
  display: grid;
  place-content: center;
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </StyledThemeToggle>
  );
}
