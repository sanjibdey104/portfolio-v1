import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextDotJs,
  SiGraphql,
  SiFirebase,
  SiLinkedin,
  SiGmail,
  SiTwitter,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import Work from "../components/Work";
import { getPortfolioData } from "../lib/data";
import { motion } from "framer-motion";
import React from "react";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 5rem;
`;

const Intro = styled(motion.section)`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  p {
    padding: 0.5rem 0;
    font-family: var(--font-secondary);
  }

  h2 {
    font-size: calc(1rem + 1.5vw);
  }

  #name {
    display: block;
    font-size: clamp(2rem, 12vw, 4.5rem);
    text-transform: uppercase;
    text-shadow: 3px 3px ${({ theme }) => theme.layerShadow},
      5px 5px 0px ${({ theme }) => theme.accentColor};
    -webkit-text-stroke: 1px ${({ theme }) => theme.textColor};
    color: #ffba08;
  }

  .quick-contact-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;

    a {
      min-width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-size: 0.85rem;
      font-weight: 500;
      padding: 0.4rem;
      border-radius: 0.5rem;

      color: ${({ theme }) => theme.backgroundColor};
      background-color: ${({ theme }) => theme.textColor};
      border: 2px solid ${({ theme }) => theme.textColor};
      transition: all 200ms ease-in-out;
    }

    a:hover {
      color: ${({ theme }) => theme.textColor};
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    svg {
      font-size: 1.3rem;
    }
  }
`;

const Brief = styled.section`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    font-family: var(--font-secondary);
  }
`;

const Experience = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 75%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    border-bottom: 2px solid ${({ theme }) => theme.textColor};
  }
`;

const Technologies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2rem;

  width: 75%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2rem);
    font-size: clamp(1.5rem, 3vw, 2rem);
    border-bottom: 2px solid ${({ theme }) => theme.textColor};
  }

  .tech-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    list-style: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Home = ({ workData }) => {
  const { works } = workData;

  return (
    <Homepage>
      <Intro
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>
          Namaste 🙏, I'm <span id="name">Sanjib</span>
        </h2>
        <h2>A front-end web developer based in Delhi, India</h2>
        <p>
          Passionate about building human-centered web applications (who isn't
          🤷‍♂️ ?)
        </p>
        <div className="quick-contact-links">
          <a href="#">
            Fetch resume <FiDownload />
          </a>
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
      </Intro>

      <Brief>
        <h2>A bit more about me: </h2>
        <p>
          I find blogging as a handy tool to document my learning and hopefully
          help others along the way.
        </p>
        <p>
          Exploring tech and tools that can help bring my notion to fruition.
        </p>
        <p>
          Obsess over UI design and onboard the core learning in my own
          projects.
        </p>
        <p>
          Outside dev environment, you could find me sketching, scribbling on
          blank canvas, writing free verse poetry and short stories.
        </p>
      </Brief>

      <Experience>
        <h2>experience</h2>
        <Work works={works} />
      </Experience>

      <Technologies>
        <h2>technologies</h2>
        <div className="tech-stack">
          <SiHtml5 />
          <SiCss3 />
          <SiSass />
          <SiJavascript />
          <SiReact />
          <SiNextDotJs />
          <SiGraphql />
          <SiFirebase />
        </div>
      </Technologies>
    </Homepage>
  );
};

export const getStaticProps = async () => {
  const { workData } = await getPortfolioData();

  return {
    props: {
      workData,
    },
  };
};

export default Home;
