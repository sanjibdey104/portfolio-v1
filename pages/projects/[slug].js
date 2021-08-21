import styled from "styled-components";
import { getProject, getProjectSlugs } from "../../lib/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const StyledProjectTourTemplate = styled.main`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 600px) {
    width: 100%;
  }

  #title {
    font-size: clamp(2.5rem, 4.3vw, 4rem);
    color: var(--fg-bold);
  }

  p,
  li,
  a {
    font-family: var(--font-secondary);
    color: var(--fg-light);
  }

  .stack,
  .links {
    display: flex;
    gap: 2rem;
  }

  .stack {
    ul {
      display: flex;
      gap: 2rem;
      list-style: circle;

      li {
        color: var(--accent-color-primary);
        font-weight: 500;
      }
    }
  }

  .links {
    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: var(--accent-color-secondary);
      box-shadow: var(--box-shadow);
      transition: all 200ms ease-in-out;

      &:hover {
        box-shadow: var(--hover-box-shadow);
      }
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0.85rem;
    margin-bottom: 4rem;

    & > * {
      flex: 300px;
    }

    h2 {
      height: min-content;
      font-size: 1.5rem;
      border-bottom: 1.5px solid;
      color: var(--fg-bold);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      list-style: circle;
    }
  }

  section:nth-of-type(2n) {
    flex-direction: row-reverse;
    h2 {
      text-align: right;
    }
  }

  #goal {
    ul {
      list-style: none;
    }
  }
`;

const ProjectTemplate = ({ projectData }) => {
  const project = projectData[0];
  const {
    title,
    stack,
    githubLink,
    liveLink,
    description,
    goal,
    learnings,
    prospective,
    challenges,
    screens,
  } = project;

  // fetch the desktop banner image
  const desktopBanner = screens[0];

  return (
    <StyledProjectTourTemplate>
      <h2 id="title">{title}</h2>

      <p>{description}</p>

      <div className="stack">
        <p>stack:</p>
        <ul>
          {stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="links">
        <a href={githubLink} rel="noreferrer" target="_blank">
          view the code <FiGithub />
        </a>
        <a href={liveLink} rel="noreferrer" target="_blank">
          catch it live <FiExternalLink />
        </a>
      </div>

      {desktopBanner ? (
        <div className="banner">
          <img src={desktopBanner.url} alt="banner" />
        </div>
      ) : null}

      <section id="goal">
        <h2>Goal</h2>
        <ul>
          {goal.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Learnings</h2>
        <ul>
          {learnings.map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <ul>
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Prospective</h2>
        <ul>
          {prospective.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </StyledProjectTourTemplate>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getProject(params.slug);

  return {
    props: {
      projectData: data.projects,
    },
  };
};

export default ProjectTemplate;

export async function getStaticPaths() {
  const projects = await getProjectSlugs();

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
