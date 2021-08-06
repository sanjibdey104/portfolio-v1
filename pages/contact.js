import React from "react";
import { SiLinkedin, SiGithub, SiTwitter, SiGmail } from "react-icons/si";
import styled from "styled-components";

const ContactSection = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  gap: 3rem;
`;

const ContactPointList = styled.ul`
  display: flex;
  gap: 3rem;
  justify-content: space-around;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    transition: color 150ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

function contact() {
  return (
    <ContactSection>
      <h3>Feel free to reach out:</h3>

      <ContactPointList>
        <li>
          <a
            href="https://github.com/sanjibdey104"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
          >
            <SiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Sanjib_104"
            rel="noreferrer"
            target="_blank"
          >
            <SiTwitter />
          </a>
        </li>
        <li>
          <a className="mail" href="mailto:sanjibdey.dey4@gmail.com">
            <SiGmail />
          </a>
        </li>
      </ContactPointList>
    </ContactSection>
  );
}

export default contact;
