import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectList = styled.ul`
  margin: 3rem 0;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 24rem));
  justify-content: center;
  gap: 4rem;
`;

const Projects = ({ projects }) => {
  return (
    <ProjectList>
      {projects.map((project) => (
        <Project key={project.id} projectDetails={project} />
      ))}
    </ProjectList>
  );
};

export default Projects;
