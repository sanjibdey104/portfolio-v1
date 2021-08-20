import React from "react";
import styled from "styled-components";

const StyledCustomLink = styled.a`
  cursor: pointer;
  padding: 0.5rem;
  position: relative;

  &:hover::before,
  &:hover::after {
    transform: scale(1);
  }

  &::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border-left: 2px solid ${({ theme }) => theme.textColor};
    border-top: 2px solid ${({ theme }) => theme.textColor};
    transform: scale(0);
    transition: transform 150ms ease-in-out;
  }

  &::after {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    border-right: 2px solid ${({ theme }) => theme.textColor};
    border-bottom: 2px solid ${({ theme }) => theme.textColor};
    transform: scale(0);
    transition: transform 150ms ease-in-out;
  }
`;

const CustomLink = ({ children }) => {
  return <StyledCustomLink>{children}</StyledCustomLink>;
};

export default CustomLink;
