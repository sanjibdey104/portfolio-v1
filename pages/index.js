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
  SiCodepen,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import Work from "../components/Work";
import { getPortfolioData } from "../lib/data";
import { motion } from "framer-motion";
import React from "react";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 3rem;

  & > * {
    width: 75%;
    margin: 0 auto;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const Intro = styled(motion.section)`
  height: 22rem;
  display: grid;
  place-content: center;

  width: 60%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }

  .about-self {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-family: var(--font-secondary);
    }

    h2 {
      font-size: calc(1rem + 1.5vw);

      span {
        color: white;
        font-size: clamp(2rem, 12vw, 4.5rem);
        display: block;
        text-transform: uppercase;
        text-shadow: 3px 3px ${({ theme }) => theme.layerShadow},
          5px 5px 0px ${({ theme }) => theme.accentColor};
        -webkit-text-stroke: 1px ${({ theme }) => theme.textColor};
        color: #ffba08;
      }
    }
  }
`;

const Brief = styled.section`
  width: 60%;
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
    font-size: 0.9rem;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    font-family: var(--font-secondary);
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-around;
    width: 10rem;

    font-size: 0.85rem;
    color: black;
    box-shadow: 0 0 3px ${({ theme }) => theme.layerShadow};
    background-color: #eee;
    padding: 0.3rem;
    border-radius: 0.5rem;
  }

  svg {
    display: inline;
    font-size: 1.5rem;
    transition: color 150ms ease-in-out;
  }
`;

const Experience = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
        <div className="about-self">
          <h2>
            Hey, I'm <span>Sanjib</span>
          </h2>
          <h2>A front-end web developer based in Delhi, India</h2>
          <p>
            Passionate about building human-first web applications (who isn't 🤷‍♂️
            ?)
          </p>
        </div>
      </Intro>

      <Brief>
        <h2>More about me: </h2>
        <p>Firm believer of learning by sharing.</p>
        <p>
          Quite obsessed with design, Dribbble is the window you'll find me
          staring 👀.
        </p>
        <p>
          I'm often sketching, scribbling on blank canvas in front, glaring 👩‍🎨.
        </p>
        <p>
          Free verse poetry ✍ and short stories 📝 are some hobbies I'm
          layering.
        </p>
        <p>(and you just got a taste of that 😉)</p>
        <div className="links">
          <a
            href="https://codepen.io/sanjib104"
            rel="noreferrer"
            target="_blank"
          >
            Peep my pens: <SiCodepen />
          </a>
          <a
            href="https://github.com/sanjibdey104"
            rel="noreferrer"
            target="_blank"
          >
            Catch my code: <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
          >
            Link with me: <SiLinkedin />
          </a>
        </div>
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
