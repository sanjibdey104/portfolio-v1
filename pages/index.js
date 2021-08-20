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
import CustomCta from "../components/custom/CustomCta";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 5rem;

  h2 {
    font-size: clamp(1.3rem, 1.8vw, 1.5rem);
    color: ${({ theme }) => theme.accentColor};
    border-bottom: 2px solid ${({ theme }) => theme.textColor};
  }

  p,
  li {
    font-size: 1.15rem;
    font-family: var(--font-secondary);
    color: ${({ theme }) => theme.textColor};
  }

  .about-me,
  .experience,
  .technologies {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .about-me ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-family: var(--font-secondary);
    font-size: 1.1rem;
  }

  .tech-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    svg {
      font-size: 1.75rem;
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

const Intro = styled(motion.section)`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  h2 {
    font-size: clamp(1.3rem, 2.2vw, 1.75rem);
    color: ${({ theme }) => theme.textColor};
    border: 0;
  }

  #name {
    display: block;
    font-size: clamp(2rem, 10vw, 4rem);
    text-transform: uppercase;
    color: ${({ theme }) => theme.accentColor};
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;

    /* a {
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-size: 0.85rem;
      font-weight: 500;
      padding: 0.5rem;
      border-radius: 0.5rem;

      color: ${({ theme }) => theme.textColor};
      border: 2px solid ${({ theme }) => theme.textColor};
      transition: all 200ms ease-in-out;
    } */

    a:nth-child(1) {
      color: ${({ theme }) => theme.backgroundColor};
      background-color: ${({ theme }) => theme.textColor};
      border: 2px solid ${({ theme }) => theme.textColor};
    }

    a:hover {
      border-radius: initial;
    }

    svg {
      font-size: 1.3rem;
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
        <div className="cta">
          <CustomCta href="Sanjib_Kumar_Dey_Resume.pdf" download>
            Fetch resume <FiDownload />
          </CustomCta>
          <CustomCta
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
          >
            Forge a link @ <SiLinkedin />
          </CustomCta>
          <CustomCta href="mailto:sanjibdey.dey4@gmail.com">
            Drop a mail @ <SiGmail />
          </CustomCta>
        </div>
      </Intro>

      <section className="about-me">
        <h2>A bit more about me: </h2>

        <ul>
          <li>
            I find blogging as a handy tool to document my learning and
            hopefully help others along the way.
          </li>
          <li>
            Exploring tech and tools that can help bring my notion to fruition.
          </li>
          <li>
            Obsess over UI design and onboard the core learning in my own
            projects.
          </li>
          <li>
            Outside dev environment, you could find me sketching, scribbling on
            blank canvas, writing free verse poetry and short stories.
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>experience</h2>
        <Work works={works} />
      </section>

      <section className="technologies">
        <h2>technologies I've worked with:</h2>
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
      </section>
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
