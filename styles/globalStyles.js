import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

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
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
        
        line-height: 1.4;
        transition: all 200ms ease-in-out;

        --accent-color: #1976d2;
        --font-primary: 'Montserrat', sans-serif;
        --font-secondary: 'Space Mono', monospace;
    }

    a, button, input {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    p {
        font-family: 'Lora', sans-serif;
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

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 768px) {
            width: 95%;
        }
    }
`;

export const lightTheme = {
  backgroundColor: "#eee",
  textColor: "#000",
  buttonText: "#fff",
  accentColor: "#3f51b5",
  layerShadow: "rgba(0,0,0,0.3)",
  border: "1px solid #000",
  mobileNavLink: "#ffffffda",
  mobileNavBg: "#000",
};

export const darkTheme = {
  backgroundColor: "#121212",
  textColor: "#ffffffda",
  buttonText: "#000",
  accentColor: "#bb86fc",
  layerShadow: "#000",
  border: "1px solid #fff",
  mobileNavLink: "#000",
  mobileNavBg: "#fff",
};
