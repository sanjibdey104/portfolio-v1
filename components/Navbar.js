import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeToggleButton } from './ThemeToggleButton';
import Link from 'next/link';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content:center;
    position: relative;

    @media (max-width: 768px) {
        width: 90%;
        position: fixed;
        padding: 0.2rem 0;
        bottom: 0.5rem;
        z-index: 10;

        border-radius: 1rem;
        box-shadow: var(--box-shadow);
        background-color: ${({theme}) => theme.mobileNavBg};
        backdrop-filter: blur(5px);
        color: ${({ theme }) => theme.textColor};

        transform: translateY(120%);
        transition: transform 200ms ease-in-out;

        &#open {
            transform: translateY(0);
        }
    }
`

const NavLinks = styled.ul`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    a {
        cursor: pointer;
        &:hover {
            color: ${({theme}) => theme.primary};
        }
    }

    @media (max-width: 768px) {
        li {
            font-size: 1.2rem;
        }
    }
`

const NavToggler = styled.button`
    display: none;

    span {
        width: 70%;
        height: 2px;
        background-color: black;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0;
        right: 0;
        background: inherit;
        box-shadow: inherit;
        height: 2.75rem;
        width: 2.75rem;
        border-radius: 50%;

        transform: translateY(-110%) translateX(40%);
    }
`



const Navbar = () => {

    const [navDisplay, setNavDisplay] = useState(false);

    const toggleNavDisplay = () => {
        setNavDisplay(!navDisplay);
    }

    return (
        <Nav id={navDisplay ? 'open' : null }>
            <NavLinks>
                <Link href="/about">
                    <li><a>About</a></li>
                </Link>

                <Link href="/projects">
                    <li><a>Projects</a></li>
                </Link>

                <Link href="/contact">
                    <li><a>Contact</a></li>
                </Link>
                
                <li><ThemeToggleButton /></li>
            </NavLinks>

            <NavToggler
            onClick={() => toggleNavDisplay()}
            >
            <span></span>
            <span></span>
            <span></span>
            </NavToggler>
        </Nav>
    )
}


export default Navbar;