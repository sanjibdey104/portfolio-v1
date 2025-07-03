import styled from "styled-components";
import Work from "../components/Work";
import { FiDownload } from "react-icons/fi";
import Footer from "../components/layout/Footer";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;

  p,
  ul {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  .section-title {
    font-size: clamp(1.4rem, 1.8vw, 1.6rem);
    border-bottom: 1px solid;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .tech-and-tools-section {
    .tech-and-tools-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      li {
        position: relative;
        padding-left: 0.5rem;
        color: var(--fg-lighter);
        line-height: 1;

        &:hover {
          color: var(--fg-light);
        }

        &::before {
          content: "";
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);

          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--fg-lightest);
        }
      }
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
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  .hero-text {
    color: var(--fg-lightest);
    font-weight: 500;
    font-size: 1.2rem;

    p.dev-name {
      display: inline-block;
      color: var(--fg-light);
      font-weight: 700;
      font-size: clamp(2.5rem, 10vw, 3.5rem);
      line-height: clamp(2.5rem, 10vw, 3.5rem);
    }
  }

  .brief-intro-text {
    font-size: 1.2rem;
    color: var(--fg-lightest);

    p {
      display: inline-block;
      font-size: inherit;
    }

    p.dev-name,
    p.location-name,
    a.current-company {
      color: var(--fg-light);
      font-weight: 600;
    }
  }

  .download-resume-handler {
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

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const Home = () => {
  return (
    <Homepage>
      <Intro className="intro-section">
        <h1 className="hero-text">
          <span>Namaste, I'm</span> <p className="dev-name">Sanjib.</p>
        </h1>

        <div className="brief-intro-text">
          A <p className="location-name">Bangalore</p> based web developer,
          currently working at{" "}
          <a
            className="current-company"
            href="https://qoruz.com/"
            target="_blank"
          >
            Qoruz
          </a>
          .
        </div>

        <a
          className="download-resume-handler"
          href="Resume_Sanjib_Kumar_Dey.pdf"
          download
        >
          <span>Download resume</span> <FiDownload />
        </a>
      </Intro>

      <div className="about-section">
        <section className="experience">
          <h2 className="section-title">experience</h2>
          <Work />
        </section>

        <section className="tech-and-tools-section">
          <h2 className="section-title">tech and tools</h2>

          <ul className="tech-and-tools-list">
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Firebase</li>
          </ul>
        </section>
      </div>

      <Footer />
    </Homepage>
  );
};

export default Home;
