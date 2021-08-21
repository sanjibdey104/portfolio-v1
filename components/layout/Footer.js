import React from "react";
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

  .contact-links {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.accentColor};

    a {
      font-size: 1.2rem;

      &:hover {
        color: ${({ theme }) => theme.highEmphasis};
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
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:sanjibdey.dey4@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <FiMail />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Sanjib_104"
            rel="noreferrer"
            target="_blank"
          >
            <FiTwitter />
          </a>
        </li>
      </ul>
      <p>&copy; 2021, Sanjib Kumar Dey</p>
      <p>build with 💗 and Next JS</p>
    </StyledFooter>
  );
}

export default Footer;
