import styled from "styled-components";
import { getProject, getProjectSlugs } from "../../lib/data";

const StyledProjectTourTemplate = styled.main`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  font-family: var(--font-secondary);
`;

const ProjectTemplate = ({ projectData }) => {
  const project = projectData[0];
  const {
    title,
    stack,
    githubLink,
    liveLink,
    goal,
    learnings,
    prospective,
    problems,
  } = project;

  return (
    <StyledProjectTourTemplate>
      <h2>{title}</h2>
      <p>{goal}</p>

      <h2>learnings: </h2>
      {learnings.map((learning, index) => (
        <li key={index}>{learning}</li>
      ))}

      <h2>problems: </h2>
      {problems.map((problem, index) => (
        <li key={index}>{problem}</li>
      ))}

      <h2>prospective</h2>
      {prospective.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
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
