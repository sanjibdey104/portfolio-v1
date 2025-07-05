import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 5rem;
  gap: 1rem;

  font-size: 0.75rem;
  line-height: 0.75rem;
  color: var(--fg-light);

  .connect-links {
    align-items: center;
    gap: 1.5rem;
  }

  .attribution {
    gap: 0.5rem;
    color: var(--fg-lighter);

    .tech-behind {
      gap: 0.2rem;

      a {
        font-weight: 600;
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter className="flex-col">
      <p className="work-together-header">
        If you found anything interesting, feel free to connect:
      </p>

      <ul className="connect-links flex-row">
        <li>
          <a
            id="github_connect-link"
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
            id="linkedin_connect-link"
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
            id="email_connect-link"
            href="mailto:sanjibdey.dey4@gmail.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </li>
      </ul>

      <div className="attribution flex-col">
        <div className="tech-behind flex-row">
          <p>built with 💗 and powered by</p>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js
          </a>{" "}
          +{" "}
          <a href="https://vercel.com/" target="_blank" rel="noreferrer">
            Vercel
          </a>
        </div>

        <p>&copy; 2025, Sanjib Kumar Dey</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
