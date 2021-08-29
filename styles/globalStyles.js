import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --font-primary: 'Montserrat', sans-serif;
        --font-secondary: 'Karla', sans-serif;
        --bg-light: #fbfbfb;
        --mobile-nav-bg: #000000;
        --mobile-nav-text: #ffffffda;

        --accent-color-primary: #1976d2;
        --accent-color-secondary: #ffc800;

        --fg-bold: #212121;
        --fg-light: #424242;
        --fg-lighter: #616161;
        --fg-lightest: #adb5bd;

        --box-shadow: rgba(50, 50, 90, 0.25) 0px 8px 10px -5px, 
        rgba(0, 0, 0, 0.2) 0px 8px 10px -8px, 
        rgba(10, 40, 50, 0.2) 0px -2px 5px 0px inset;
        --hover-box-shadow: rgba(50, 50, 90, 0.25) 0px 3px 5px -3px, 
        rgba(0, 0, 0, 0.2) 0px 3px 5px -3px, 
        rgba(10, 40, 50, 0.2) 0px -1px 3px 0px inset;
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
        
        line-height: 1.5;
        background-color: var(--bg-light);
        font-family: var(--font-primary);
        color: var(--fg-light);
    }

    a, button, input {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
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
        cursor: pointer;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        max-width: 1100px;
        min-height: 100vh;
        padding: 1rem;
        position: relative;
        font-family: var(--font-primary);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;

        @media (max-width: 768px) {
            width: 100%;
        }

    }
`;

export default GlobalStyles;
