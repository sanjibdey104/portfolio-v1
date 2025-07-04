import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        /* font */
        --font-primary: 'Inter', sans-serif;

        /* background */
        --bg-color: #f0f4f9;

        /* foreground */        
        --fg-deep: #1f1f1f;
        --fg-light:#0f0f0f;
        --fg-lighter: #555555;
        --fg-lightest: #888888;

        background-color: var(--bg-color);
        color: var(--fg-light);
    }

    [data-theme="dark"] {
        --bg-color: #131314;

        --fg-deep: #fff;
        --fg-light: #e3e3e3;
        --fg-lighter: #c4c7c5;
        --fg-lightest: #888;

        background-color: var(--bg-color);
        color: var(--fg-deep);
    }

    *,*::before,*::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 100%;
    }

  

    body {
        width: 100%;
        line-height: 1.5;
        background-color: var(--bg-light);
        font-family: var(--font-primary);
        color: var(--fg-light);
    }

    a, button, input,textarea {
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
        padding: 0 1rem 1rem 1rem;
        font-family: var(--font-primary);
        
        display: flex;
        flex-direction: column;
        gap: 48px;
        position: relative;
        
        @media (max-width: 768px) {
            width: 100%;
            margin: 0;
        }
    }

    .light-text {
        color: var(--fg-light)
    }

    .lighter-text {
        color: var(--fg-lighter)
    }

    .lightest-text {
        color: var(--fg-lightest)
    }
`;

export default GlobalStyles;
