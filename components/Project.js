import React from 'react';
import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectCard = styled.li`
  width: 20rem;
  height: 13rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;

    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border-right: 1px solid ${({theme}) => theme.mobileNavLinks};

    background-color: inherit;
    box-shadow: inset -2px 0 rgba(0,0,0,0.3);
    transform: translateX(-50%) translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  background-color: ${({theme}) => theme.backgroundColor};
  
  pointer-events: auto;  
  transform: scale(1);
  opacity: 1;
  transition: all 150ms ease-in-out; 
  
  display: flex;
  align-items: center;
  gap: 2rem;
  
  .title {
    color: ${({theme}) => theme.textColor};
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    border-left: 1px dashed ${({theme}) => theme.mobileNavLinks};
    padding-right: 0.5rem;
    height: 100%;
    text-align: center;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
  }

  .other-half {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .description {
      font-size: 0.9rem;
    }

    .tech-stack {
      font-size: 0.85rem;
      font-family: var(--font-primary);
    }
  }
  
`

const ProjectLinks = styled.section`
  display: flex;
  gap: 2rem;
  font-size: 1.3rem;
`

const Project = ({projectDetails}) => {
    
  const { title, description, stack, githubLink, liveLink} = projectDetails;

  const techStack = stack.join(', ');

  return (
    <ProjectCard className="project-card">   
      <h3 className="title">{title}</h3>
      
      <section className="other-half">
        <p className="description">{description}</p>
        <p className="tech-stack">{techStack}</p>

        <ProjectLinks>
          <a href={githubLink} rel="noreferrer" target="_blank">
          <SiGithub />
          </a>
          <a href={liveLink} rel="noreferrer" target="_blank">
          <BiLinkExternal />
          </a>
        </ProjectLinks>
      </section>
    </ProjectCard>
  )
}

export default Project;
