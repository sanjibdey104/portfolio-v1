import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

const ProjectCard = styled.li`
  margin: 0 auto;
  min-height: 20rem;
  padding: 0.75rem;
  position: relative;
  border-radius: 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }

  .project-image {
    padding: 0;
    display: grid;
    place-content: center;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

    img {
      width: 100%;
      object-fit: cover;
      margin: 0;
    }
  }

  .project-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.5rem;
  }

  #title {
    color: ${({ theme }) => theme.accentColor};
    font-size: clamp(1.2rem, 2vw, 1.4rem);
  }

  #description,
  #tech-stack {
    font-size: 0.85rem;
    font-family: var(--font-secondary);
  }
`;

const ProjectLinks = styled.section`
  display: flex;
  gap: 2rem;
  font-size: 1.3rem;

  a:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Project = ({ projectDetails }) => {
  const { title, description, stack, thumbnail, githubLink, liveLink } =
    projectDetails;

  const techStack = stack.join(", ");

  return (
    <ProjectCard className="project-card">
      <div className="project-image">
        <Image
          src={thumbnail.url}
          placeholder="project screenshot"
          width={384}
          height={288}
        />
      </div>
      <div className="project-main">
        <h3 id="title">{title}</h3>
        <p id="description">{description}</p>
        <p id="tech-stack">{techStack}</p>

        <ProjectLinks id="project-links">
          <a href={githubLink} rel="noreferrer" target="_blank">
            <SiGithub />
          </a>
          <a href={liveLink} rel="noreferrer" target="_blank">
            <BiLinkExternal />
          </a>
        </ProjectLinks>
      </div>
    </ProjectCard>
  );
};

export default Project;
