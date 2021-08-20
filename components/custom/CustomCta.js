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
  padding: 0.5rem;
  border-radius: 0.75rem;

  color: ${({ theme }) => theme.textColor};
  border: 2px solid ${({ theme }) => theme.textColor};
  transition: all 200ms ease-in-out;

  &:hover {
    border-radius: initial;
  }
`;

const CustomCta = ({ children, ...props }) => {
  return <StyledCustomCta {...props}>{children}</StyledCustomCta>;
};

export default CustomCta;
