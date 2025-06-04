import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styled from "styled-components";
import ContactForm from "../custom/ContactForm";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 5rem 0 2rem 0;

  & > section {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;

    .left {
      order: 2;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    font-size: 0.75rem;
    line-height: 0.75rem;
    color: var(--fg-lighter);

    .work-together-header {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .contact-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      font-size: 1rem;

      &:hover {
        color: var(--fg-light);
      }
    }
  }

  .attribution {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--fg-lightest);

    .tech-behind {
      display: flex;
      gap: 5px;

      a {
        font-weight: 500;
        color: var(--fg-lighter);

        &:hover {
          color: var(--fg-light);
          text-decoration: underline;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <section className="left">
        <h3 className="work-together-header">Let's connect</h3>

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

        <div className="attribution">
          <div className="tech-behind">
            <p>build with 💗 and powered by</p>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next.js
            </a>{" "}
            +{" "}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              Vercel
            </a>
          </div>

          <p>&copy; 2021, Sanjib Kumar Dey</p>
        </div>
      </section>

      <section className="right">
        <ContactForm />
      </section>
    </StyledFooter>
  );
}

export default Footer;
