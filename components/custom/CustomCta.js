import React from "react";
import styled from "styled-components";

const StyledCustomCta = styled.a`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 0.5rem;

  color: var(--fg-bold);
  box-shadow: var(--box-shadow);
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: var(--hover-box-shadow);
    background-color: var(--accent-primary);
  }
`;

const CustomCta = ({ children, ...props }) => {
  return <StyledCustomCta {...props}>{children}</StyledCustomCta>;
};

export default CustomCta;
