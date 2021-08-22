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
    color: var(--fg-bold);
    border-bottom: 1px solid;
  }

  p,
  ul,
  li,
  svg {
    font-size: 1rem;
    font-family: var(--font-secondary);
    color: ${({ theme }) => theme.fgLight};
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
    gap: 1rem;

    a {
      position: relative;
      color: var(--accent-color-primary);
      font-weight: 600;
    }
  }

  .tech-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    svg {
      font-size: 1.75rem;
      color: var(--fg-light);
    }
  }
`;

const Intro = styled(motion.section)`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: 100%;
  }

  h2 {
    font-size: clamp(1.85rem, 3.85vw, 3.85rem);
    border: 0;
  }

  p {
    margin-top: 1rem;
    font-size: 1.12rem;
  }

  #name {
    font-size: clamp(2.5rem, 13vw, 4.75rem);
    color: var(--accent-color-primary);
    text-shadow: 2px 2px var(--fg-bold);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2.5rem 0;

    a:nth-child(1) {
      background: var(--accent-color-secondary);
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
      <Intro>
        <h2>
          Namaste 🙏, I'm <span id="name">SANJIB</span>
        </h2>
        <h2>A front-end web developer from India</h2>
        <p>
          Passionate about building handy, human-centered web applications
          (those bots 🤖 can sort themselves out)
        </p>
        <div className="cta">
          <CustomCta href="Resume_Sanjib_Kumar_Dey.pdf" download>
            Fetch resume <FiDownload />
          </CustomCta>
          <CustomCta
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
          >
            Forge a link @ <SiLinkedin />
          </CustomCta>
        </div>
      </Intro>

      <section className="about-me">
        <h2>About me: </h2>

        <ul>
          <li>
            A soft corner for visual design is what exposed my passion for web
            development. Years of internet quest exposed me to a plethora of web
            applications, and finding out that tech and tools like HTML, CSS, JS
            would allow me visually shape and build such websites and
            applications from scratch, is what got me started.
          </li>
          <li>
            Passionate about building handy, human-centered web applications
            (those bots 🤖 can sort themselves out)
          </li>
          <li>
            Blogging is a handy tool I use to document my learning and hopefully
            help others along the way. Catch it live here{" "}
            <a href="https://webdevref.vercel.app/" target="_blank">
              WebDevRef
            </a>
            .
          </li>
          <li>
            I regularly scour{" "}
            <a href="https://dribbble.com/" target="_blank">
              Dribble
            </a>{" "}
            to satisfy my UI design cravings and bring onboard the principle
            learning in my own projects.
          </li>
          <li>
            Outside tech, you could find me sketching, writing free verse poetry
            and short stories.
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
