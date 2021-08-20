import styled from "styled-components";
import { getProject, getProjectSlugs } from "../../lib/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import CustomLink from "../../components/custom/CustomLink";

const StyledProjectTourTemplate = styled.main`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  #title {
    font-size: 2.85rem;
  }

  p,
  li,
  a {
    font-size: 1.1rem;
    font-family: var(--font-secondary);
  }

  .links {
    display: flex;
    gap: 2rem;

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.accentColor};
      }
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }

  section {
    width: 100%;
    padding: 0.85rem;
    margin-bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    & > * {
      flex: 300px;
    }

    h2 {
      font-size: 1.5rem;
      border-bottom: 1.5px solid;
      height: min-content;
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

      <div className="links">
        <CustomLink href={githubLink} rel="noreferrer" target="_blank">
          view the code <FiGithub />
        </CustomLink>
        <CustomLink href={liveLink} rel="noreferrer" target="_blank">
          catch it live <FiExternalLink />
        </CustomLink>
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
