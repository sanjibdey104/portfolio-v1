import React from 'react';
import styled from 'styled-components';
import { ThemeToggleButton } from './ThemeToggleButton';
import Link from 'next/link';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content:center;
    position: relative;
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
`


const Navbar = () => {
    return (
        <Nav>
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
        </Nav>
    )
}


export default Navbar;