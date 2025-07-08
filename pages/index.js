import styled from "styled-components";
import WorkHistory from "../components/WorkHistory";
import UnderConstructionMsg from "../components/UnderConstructionMsg";
import CurrentlyReading from "../components/CurrentlyReading";

const Homepage = styled.main`
  gap: 5rem;

  .about-section {
    gap: 4rem;
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

        <p className="prose">
          My approach to learning and upskilling is Project Driven Development -
          be it Vanilla.js, Web APIs, Chrome Extentions, custom workflow tooling
          or recent indulgence in math and physics-based simulations.
        </p>

        <p className="prose">
          This portfolio is my way to not only highlight my projects, but also
          document my raw thought process and problem solving approach -
          including all the set-backs and learning - in the hope that it might
          help someone build their own learning framework.
        </p>

        <p className="prose">
          Beyond programming, I enjoy movies, photography, reading fiction,
          writing poems and short-stories. And many of my personal projects are
          hobby-centric, as an effort to embrace a create-more-than-consume
          mindset.
        </p>

        <UnderConstructionMsg />

        {/* <a
          className="download-resume-handler"
          href="Resume_Sanjib_Kumar_Dey.pdf"
          download
        >
          <span>Download resume</span> <FiDownload />
        </a> */}
      </Intro>

      <div className="about-section flex-col">
        <WorkHistory />

        <hr class="section-separator" />

        <CurrentlyReading />
      </div>
    </Homepage>
  );
};

export default Home;
