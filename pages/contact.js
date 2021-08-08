import React from "react";
import { SiLinkedin, SiTwitter, SiGmail } from "react-icons/si";
import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  flex-grow: 1;

  p {
    font-weight: 500;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    a {
      width: 12rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      padding: 0.3rem;
      border-radius: 0.5rem;
      font-size: 0.85rem;

      /* border: 1px solid ${({ theme }) => theme.accentColor}; */
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
      box-shadow: 0 0 5px ${({ theme }) => theme.layerShadow};
      transition: all 200ms ease-in-out;

      svg {
        font-size: 1.3rem;
      }

      &:hover {
        box-shadow: 0 0 3px ${({ theme }) => theme.layerShadow},
          2px 2px ${({ theme }) => theme.accentColor};
      }
    }
  }
`;

function Contact() {
  return (
    <ContactSection>
      <p>Profile looked promising ? Then, maybe...</p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
          rel="noreferrer"
          target="_blank"
        >
          Forge a link @ <SiLinkedin />
        </a>
        <a className="mail" href="mailto:sanjibdey.dey4@gmail.com">
          Drop a mail @ <SiGmail />
        </a>
        <a
          href="https://twitter.com/Sanjib_104"
          rel="noreferrer"
          target="_blank"
        >
          Nudge the bird @ <SiTwitter />
        </a>
      </div>
    </ContactSection>
  );
}

export default Contact;
