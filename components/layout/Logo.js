import Link from "next/link";

import styled from "styled-components";

const StyledLogo = styled.h3`
  font-size: 1.3rem;
  cursor: pointer;
  color: var(--fg-bold);
  margin-right: auto;
`;

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>SKD.</StyledLogo>
    </Link>
  );
};

export default Logo;
