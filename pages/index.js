import styled from "styled-components";
import { SiLinkedin } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import Work from "../components/Work";
import CustomCta from "../components/custom/CustomCta";
import HighlightedText from "../components/custom/HighlightedText";
import TechStack from "../components/TechStack";

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
  ul {
    font-size: 1rem;
    /* font-family: var(--font-secondary); */
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

const Intro = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  h2 {
    font-size: clamp(1.85rem, 3.75vw, 3.75rem);
    border: 0;
  }

  p {
    margin: 0;
    font-size: 1.1rem;
  }

  .hero-text {
    font-size: clamp(4.5rem, 16vw, 6.5rem);
    line-height: clamp(4.5rem, 16vw, 6.5rem);
  }

  .brief-intro-text {
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--fg-lighter);

    p {
      display: inline-block;
      font-size: inherit;
    }

    p.dev-name,
    p.location-name,
    a.current-company {
      color: var(--fg-light);
      font-weight: bolder;
    }
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 8px;

      color: var(--fg-lighter);
      font-size: 1rem;
      line-height: 1rem;

      svg {
        font-size: 1rem;
      }

      &:hover,
      &:active,
      &:focus {
        color: var(--fg-light);
      }
    }
  }
`;

const Home = () => {
  return (
    <Homepage>
      <Intro>
        <h1 className="hero-text">Frontend Developer</h1>

        <div className="brief-intro-text">
          Namaste, I'm <p className="dev-name">Sanjib</p>. A{" "}
          <p className="location-name">Bangalore</p> based web developer,
          currently at{" "}
          <a
            className="current-company"
            href="https://qoruz.com/"
            target="_blank"
          >
            Qoruz
          </a>
          .
        </div>

        <div className="cta">
          <a href="Resume_Sanjib_Kumar_Dey.pdf" download>
            <span>Download resume</span> <FiDownload />
          </a>

          {/* <a
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
          >
            <span>Connect on</span> <SiLinkedin />
          </a> */}
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
            I've been researching and building applications with the intent of
            implementing my learnings, get better conceptual clarity, developing
            accessible, user-facing applications.
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
        {/* <Work works={works} />/ */}
      </section>

      <section className="technologies">
        <h2>tech and tools I've worked with:</h2>
        <TechStack />
      </section>
    </Homepage>
  );
};

export default Home;
