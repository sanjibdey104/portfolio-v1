import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const ProjectList = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
    gap: 2rem;
    pointer-events: none;
    justify-content: center;
    margin: 2rem 0;

    &:hover > .project-card:hover {
        transform: scale(1.15);
        z-index: 5;
    }

    &:hover > .project-card:not(:hover) {
        opacity: 0.5;
    }
`

const Projects = ({projects}) => {
    return (
        <ProjectList>
            {projects.map(project => <Project key={project.id} projectDetails={project}/>)}
        </ProjectList>
    )
}

export default Projects;