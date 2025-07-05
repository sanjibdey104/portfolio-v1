import { techAndTools } from "../data";
import Work from "../components/Work";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import { FiDownload } from "react-icons/fi";

const Homepage = styled.main`
  gap: 4rem;

  .section-title {
    /* width: fit-content; */
    font-size: 1rem;
    color: var(--fg-light);
    border-bottom: 1px solid var(--fg-light);
  }

  .about-section {
    gap: 4rem;

    section {
      gap: 1rem;
    }
  }

  .tech-and-tools-section {
    .tech-and-tools-list {
      flex-wrap: wrap;
      gap: 1rem;

      li {
        position: relative;
        padding-left: 0.5rem;
        color: var(--fg-light);

        &:hover {
          color: var(--fg-deep);
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
          background-color: var(--fg-lighter);
        }
      }
    }
  }
`;

const Intro = styled.section`
  gap: 1.5rem;

  .hero-text {
    font-weight: 400;
    font-size: 2rem;

    .dev-name {
      font-weight: 700;
    }
  }

  .brief-intro-text {
    .location-name,
    .current-company {
      font-weight: 600;
      display: inline-block;
      color: var(--fg-deep);
    }
  }
`;

const Home = () => {
  return (
    <Homepage className="flex-col">
      <Intro className="intro-section flex-col">
        <h2 className="hero-text text-lightest">
          <span>Namaste, I'm</span>{" "}
          <span className="dev-name text-light">Sanjib.</span>
        </h2>

        <p className="brief-intro-text prose">
          A <span className="location-name">Bangalore</span> based frontend
          developer, currently working at{" "}
          <a
            className="current-company"
            href="https://qoruz.com/"
            target="_blank"
          >
            Qoruz.
          </a>
        </p>

        <a
          className="download-resume-handler"
          href="Resume_Sanjib_Kumar_Dey.pdf"
          download
        >
          <span>Download resume</span> <FiDownload />
        </a>
      </Intro>

      <div className="about-section flex-col">
        <section className="experience flex-col">
          <h3 className="section-title">experience</h3>
          <Work />
        </section>

        <section className="tech-and-tools-section flex-col">
          <h2 className="section-title">tech and tools</h2>

          <ul className="tech-and-tools-list flex-row">
            {techAndTools.map((tool) => (
              <li key={tool.value}>{tool.label}</li>
            ))}
          </ul>
        </section>
      </div>

      <Footer />
    </Homepage>
  );
};

export default Home;
