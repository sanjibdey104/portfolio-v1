import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        /* font */
        --font-primary: 'Inter', sans-serif;

        /* background */
        --bg-color: #f0f4f9;

        /* foreground */        
        --fg-deep: #0f0f0f;
        --fg-light: #555555;
        --fg-lighter: #888888;
        
        background-color: var(--bg-color);
        color: var(--fg-light);

        /* --fg-light: #0f0f0f; */

        /* accent colors */
        --green-100: #99d98c;
    }

    [data-theme="dark"] {
        --bg-color: #131314;

        --fg-deep: #ffffff;
        --fg-light: #bbbbbb;
        --fg-lighter: #888888;
        
        background-color: var(--bg-color);
        color: var(--fg-light);
        
        /* --fg-light: #e3e3e3; */
        /* --fg-lighter: #c4c7c5; */
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
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        font-family: var(--font-primary);
    }

    button {
        border: 0;
        padding: 0.5rem;
        background-color: transparent;
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,p,ul {
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,h4,h5 {
        color: var(--fg-deep);
    }

    a {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 8px;

        text-decoration: none;
        color: var(--fg-deep);
        cursor: pointer;

        &:hover, &:active {
            text-decoration: underline;
        }

        svg {
            font-size: 1rem;
            width: 1rem;
            height: 1rem;
        }
    }

    img,svg {
        display: block;
    }

    ul {
        list-style: none;
    }

    .prose {
        color: var(--fg-light);
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .container {
        width: 70%;
        margin: 0 auto;
        max-width: 1100px;
        min-height: 100vh;
        padding: 0 1rem 2rem 1rem;
        position: relative;
        
        display: flex;
        flex-direction: column;
        gap: 5rem;
        
        @media (max-width: 768px) {
            width: 100%;
            margin: 0;
        }
    }

    .text-light {
        color: var(--fg-deep);
    }

    .text-lighter {
        color: var(--fg-lighter);
    }

    .text-lightest {
        color: var(--fg-lightest);
    }
`;

export default GlobalStyles;
