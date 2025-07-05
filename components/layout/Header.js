import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import { clientOnly } from "../../lib/client-only-import";

const ThemeToggle = clientOnly(() => import("../ThemeToggle"));

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;

  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-color);
  z-index: 2;

  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;

    a.nav-link {
      font-size: 0.8rem;
      color: var(--fg-lighter);

      &:hover {
        color: var(--fg-light);
      }
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

        <ThemeToggle />
      </section>
    </StyledHeader>
  );
};

export default Header;
