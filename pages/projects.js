import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import CustomCta from "../components/custom/CustomCta";
import { SiGithub } from "react-icons/si";

const ProjectsPage = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  h2 {
    color: var(--fg-lighter);
    font-size: 1.5rem;
    text-align: center;
  }

  .github-link {
    width: 18rem;
    font-size: 1rem;
    background-color: var(--accent-color-secondary);

    svg {
      font-size: 1.5rem;
    }
  }
`;

function projects() {
  return (
    <ProjectsPage>
      <h2>Stuff I've worked on...</h2>
      <ProjectList projects={[]} />
      <CustomCta
        id="github-link"
        href="https://github.com/sanjibdey104"
        className="github-link"
        rel="noreferrer"
        target="_blank"
      >
        <SiGithub />
        <span>Head to the hub for more</span>
      </CustomCta>
    </ProjectsPage>
  );
}

export default projects;
