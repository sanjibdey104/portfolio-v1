import { clientOnly } from "../../lib/client-only-import";
import Link from "next/link";
import Logo from "../ui/Logo";
import styled from "styled-components";

const ThemeToggle = clientOnly(() => import("../ThemeToggle"));

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;

  position: sticky;
  top: 0;

  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-color);
  z-index: 2;

  .nav-links {
    align-items: center;
    gap: 1rem;

    a.nav-link {
      font-size: 0.9rem;
      color: var(--fg-light);

      &:hover,
      &:focus {
        color: var(--fg-deep);
        text-decoration: none;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader className="flex-row">
      <Logo />

      <section className="nav-links flex-row">
        <Link href="/blog">
          <a className="nav-link blog-nav-link">Blog</a>
        </Link>

        <ThemeToggle />
      </section>
    </StyledHeader>
  );
};

export default Header;
