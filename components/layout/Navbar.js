import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavbarDisplayContext } from "../../context/NavbarDisplayContext";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 90%;
    position: fixed;
    padding: 0.5rem 0;
    bottom: 0.5rem;
    z-index: 10;

    border-radius: 1.5rem;
    box-shadow: var(--box-shadow);
    color: var(--fg-bold);
    background-color: var(--accent-color-secondary);

    transform: translateY(120%);
    transition: transform 200ms ease-in-out;

    &#open {
      transform: translateY(0);
    }
  }
`;

const NavLinks = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 3rem;

  a {
    color: var(--fg-bold);
    font-weight: 600;
    transition: all 200ms ease-in-out;

    &:hover {
      color: var(--accent-color-primary);
    }
  }

  @media (max-width: 600px) {
    a {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

const NavToggleButton = styled.button`
  display: none;

  span {
    width: 70%;
    height: 2px;
    background-color: var(--fg-bold);
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

    transform: translateY(-110%) translateX(35%);
  }
`;

const Navbar = () => {
  const { navDisplay, toggleNavDisplay } = useContext(NavbarDisplayContext);

  return (
    <Nav id={navDisplay ? "open" : null}>
      <NavLinks>
        <Link href="/">
          <li>
            <a>home.</a>
          </li>
        </Link>

        <Link href="/projects">
          <li>
            <a>projects.</a>
          </li>
        </Link>
      </NavLinks>

      <NavToggleButton onClick={() => toggleNavDisplay()}>
        <span></span>
        <span></span>
        <span></span>
      </NavToggleButton>
    </Nav>
  );
};

export default Navbar;
