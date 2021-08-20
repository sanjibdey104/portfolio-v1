import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectList = styled.ul`
  margin: 3rem 0;
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 20rem));
  justify-content: space-evenly;
  gap: 6rem;
`;

const Projects = ({ projects }) => {
  const sortedProjectList = projects.slice().sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  return (
    <ProjectList>
      {sortedProjectList.map((project) => (
        <Project key={project.id} projectDetails={project} />
      ))}
    </ProjectList>
  );
};

export default Projects;
