import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = styled.li`
  width: 100%;
  margin: 0 auto;
  height: 20rem;
  position: relative;
  border-radius: 0.5rem;

  transition: transform 200ms ease-in-out;
  transform-origin: center;
  cursor: pointer;

  &:hover .card-layer-two {
    transform: rotate(6deg);
  }
  &:hover .card-layer-three {
    transform: rotate(10deg);
  }

  .card-layer-three {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.accentColor};
    background-color: #e63946;
    border-radius: 0.5rem;
    z-index: -2;
    transform: rotate(5deg);
    transition: transform 200ms ease-in-out;
  }

  .card-layer-two {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.accentColor};
    border-radius: 0.5rem;
    z-index: -1;
    transform: rotate(3deg);
    transition: transform 200ms ease-in-out;
  }

  .card-layer-one {
    height: 100%;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 0 3px ${({ theme }) => theme.accentColor};
  }

  #title {
    color: ${({ theme }) => theme.accentColor};
    font-size: clamp(1.3rem, 2vw, 1.5rem);
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
  const { title, description, stack, githubLink, liveLink } = projectDetails;

  const techStack = stack.join(", ");

  return (
    <ProjectCard className="project-card">
      <div className="card-layer-one">
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
      <div className="card-layer-two"></div>
      <div className="card-layer-three"></div>
      {/* <div className="project-main">
      </div> */}
    </ProjectCard>
  );
};

export default Project;
