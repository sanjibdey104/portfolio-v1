import {createGlobalStyle} from 'styled-components';

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
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
        
        line-height: 1.4;
        transition: all 200ms ease-in-out;
    }

    a, button, input {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    p {
        font-family: 'Source Code Pro', monospace;
    }

    img {
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

    --box-shadow: 
        inset 3px 3px 8px 0 hsla(0deg, 0%, 100%, 80%), 
        inset -3px -3px 8px 0 rgba(24, 50, 95, 16%), 
        1px 1px 5px 0 rgba(178, 0, 255, 10%);

    .container {
        width: 75%;
        margin: 0 auto;
        min-height: 100vh;
        padding: 1rem;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;

        @media (max-width: 768px) {
            width: 90%;
        }
    }
`

export const lightTheme = {
    backgroundColor: "#fff",
    textColor: "#000",
    buttonText: "#fff",
    primary: "#4262ff",
    border: "1px solid #000",
    mobileNavLink: "#fff",
    mobileNavBg: "rgba(66,98,255, 0.5)"
}

export const darkTheme = {
    backgroundColor: "#121212",
    textColor: "#ffffffda",
    buttonText: "#000",
    primary: "#bb86fc",
    border: "1px solid #fff",
    mobileNavLink: "#000",
    mobileNavBg: "rgba(187,134,252, 0.5)"
}