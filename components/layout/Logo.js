import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h3`
  font-size: 1rem;
  cursor: pointer;
  margin-right: auto;
  padding: 0.5rem;

  color: ${({ theme }) => theme.accentColor};
  border-bottom-right-radius: 50%;

  display: grid;
  place-content: center;
  position: relative;

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border-left: 2px solid ${({ theme }) => theme.fgBold};
    border-top: 2px solid ${({ theme }) => theme.fgBold};
  }

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    border-right: 2px solid ${({ theme }) => theme.fgBold};
    border-bottom: 2px solid ${({ theme }) => theme.fgBold};
  }

  &:hover {
    &::before {
      left: -0.2rem;
      top: -0.2rem;
    }
    &::after {
      right: -0.2rem;
      bottom: -0.2rem;
    }
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>SKD</StyledLogo>
    </Link>
  );
};

export default Logo;
