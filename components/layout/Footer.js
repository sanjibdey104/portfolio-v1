import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.65rem;
  color: var(--fg-light);

  .contact-links {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 0.75rem;
    color: var(--accent-color-primary);

    a {
      font-size: 1.2rem;
      &:hover {
        color: var(--fg-bold);
      }
    }
  }

  #attributions {
    a {
      color: var(--accent-color-primary);
      font-weight: 500;
      &:hover {
        color: var(--fg-bold);
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <ul className="contact-links">
        <li>
          <a
            href="https://github.com/sanjibdey104"
            rel="noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
            aria-label="Linkedin"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:sanjibdey.dey4@gmail.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Sanjib_104"
            rel="noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
        </li>
      </ul>
      <p>&copy; 2021, Sanjib Kumar Dey</p>
      <p>build with 💗 and powered by</p>
      <p id="attributions">
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        ,{" "}
        <a href="https://graphcms.com/" target="_blank" rel="noreferrer">
          GraphCMS
        </a>
        ,{" "}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          Vercel
        </a>
      </p>
    </StyledFooter>
  );
}

export default Footer;
