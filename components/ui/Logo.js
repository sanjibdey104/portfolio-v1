import styled from "styled-components";
import BouncingBallCanvas from "../canvas/BouncingBallCanvas";
import Link from "next/link";

const StyledLogo = styled.h3`
  margin: 0;
  position: relative;
  cursor: pointer;

  font-size: 1.3rem;
  text-transform: lowercase;
  color: var(--fg-deep);
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
