import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";

const StyledHeader = styled.header`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-link {
    display: flex;
    align-items: center;
    gap: 8px;

    .nav-link {
      font-size: 12px;
      border: 1px solid red;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <section className="nav-links">
        <Link href="/blog">
          <a className="nav-link blog-nav-link">Blog</a>
        </Link>
      </section>
    </StyledHeader>
  );
};

export default Header;
