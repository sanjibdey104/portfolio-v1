import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = styled.li`
    
    height: 15rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;

    
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.textColor};
    box-shadow: var(--box-shadow);
    
    pointer-events: auto;
    
    transform: scale(1);
    opacity: 1;
    transition: all 150ms ease-in-out; 
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .title {
      color: ${({ theme }) => theme.primary};
    }
    
    .description {
      font-size: 0.9rem;
    }
    
    &:nth-child(n) {
      transform: rotate(-5deg);
    }

    .tech-stack {
      font-size: 0.85rem;
      color: ${({theme}) => theme.primary};
    }
`

const ProjectLinks = styled.section`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
`

const Project = ({projectDetails}) => {
    
    const { title, description, stack, githubLink, liveLink} = projectDetails;

    const techStack = stack.join(',');
    // console.log(stack);

    return (
      <ProjectCard className="project-card">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <p className="tech-stack">{techStack}</p>
        <ProjectLinks>
          <a href={githubLink} rel="noreferrer" target="_blank">
          <FaGithub />
          </a>
          <a href={liveLink} rel="noreferrer" target="_blank">
          <FaExternalLinkAlt />
          </a>
        </ProjectLinks>
      </ProjectCard>
    )
}

export default Project;
