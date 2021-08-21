import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --accent-color: #1976d2;
        --font-primary: 'Montserrat', sans-serif;
        --font-secondary: 'Crimson Text', 'Source Serif Pro', serif;
    }

    html {
        box-sizing: border-box;
        font-size: 100%;
    }

    *,*::before,*::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    
    body {
        width: 100%;
        height: 100vh;
        
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
        line-height: 1.4;
        font-family: var(--font-secondary);

    }

    a, button, input {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img,svg {
        display: block;
    }

    ul {
        list-style: none;
    }

    button {
        border: 0;
        padding: 0.5rem;
        background-color: transparent;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        min-height: 100vh;
        padding: 1rem;
        position: relative;
        font-family: var(--font-primary);

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const lightTheme = {
  backgroundColor: "#fbfbfb",
  textColor: "#121212",
  accentColor: "#3f51b5",
  layerShadow: "rgba(0,0,0,0.3)",
  mobileNavLink: "#ffffffda",
  mobileNavBg: "#000",
};

export const darkTheme = {
  backgroundColor: "#121212",
  textColor: "hsla(0, 100%, 100%, 0.87)",
  accentColor: "#a1b567",
  layerShadow: "#000",
  mobileNavLink: "#000",
  mobileNavBg: "#fff",
};
