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
import HighlightedText from "../components/custom/HighlightedText";

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

  .about-me div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
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

  .highlighted-span {
    position: relative;

    #svg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      overflow: visible;
    }

    .path {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      animation: dash 650ms ease-out forwards;
      animation-delay: 1s;
    }
    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
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
    font-size: clamp(1.85rem, 3.75vw, 3.75rem);
    border: 0;
  }

  p {
    margin-top: 1rem;
    font-size: 1.1rem;
  }

  #name {
    font-size: clamp(2.5rem, 12vw, 4.5rem);
    color: var(--accent-color-primary);
    text-shadow: 2px 2px var(--fg-bold);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;

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
          (those bots 🤖 can sort themselves out).
        </p>
        <p>
          I'm <HighlightedText>currently looking</HighlightedText> for a{" "}
          <HighlightedText>developer role</HighlightedText>. Have a look around,
          if the profile looks promising, maybe{" "}
          <HighlightedText>hire me?</HighlightedText>
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

        <div>
          <p>
            <HighlightedText>A knack for visual design</HighlightedText>,
            exposure to plethora of web applications, and eventually finding out
            that tech and tools like HTML, CSS, JS would allow me visually shape
            and <HighlightedText>build</HighlightedText> such{" "}
            <HighlightedText>robust</HighlightedText>{" "}
            <HighlightedText>applications</HighlightedText> from scratch,
            exposed my passion for web development.
          </p>
          <p>
            Blogging is a tool I use to{" "}
            <HighlightedText>document</HighlightedText> my{" "}
            <HighlightedText>learning</HighlightedText> and hopefully{" "}
            <HighlightedText>help others</HighlightedText> along the way. Catch
            it live here{" "}
            <a href="https://webdevref.vercel.app/" target="_blank">
              WebDevRef
            </a>
            .
          </p>
          <p>
            I regularly scour{" "}
            <a href="https://dribbble.com/" target="_blank">
              Dribble
            </a>{" "}
            to meet my UI idea cravings and bring onboard the design principles
            in my own projects.
          </p>
          <p>
            Outside tech, you could find me sketching, writing free verse poetry
            and short stories.
          </p>
        </div>
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
