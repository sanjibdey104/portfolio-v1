import styled from "styled-components";
import Logo from "./Logo";
import BouncingBallCanvas from "../canvas/BouncingBallCanvas";

const StyledHeader = styled.header`
  width: 100%;
  height: 3rem;
  position: relative;

  display: flex;
  align-items: center;

  #bouncing-ball-canvas {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <BouncingBallCanvas />
    </StyledHeader>
  );
};

export default Header;
