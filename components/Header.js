import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  width: 100%;
  height: 3rem;
  margin-bottom: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
