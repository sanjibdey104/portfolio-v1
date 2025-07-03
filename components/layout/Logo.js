import styled from "styled-components";
import BouncingBallCanvas from "../canvas/BouncingBallCanvas";
import Link from "next/link";

const StyledLogo = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: var(--fg-bold);
  position: relative;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>
        <span className="logo-text">SKD</span>

        <BouncingBallCanvas />
      </StyledLogo>
    </Link>
  );
};

export default Logo;
