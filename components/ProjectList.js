import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjectList = styled.ul`
  margin: 3rem 0;
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 20rem));
  justify-content: space-evenly;
  gap: 6rem;
`;

const ProjectList = ({ projects }) => {
  const sortedProjectList = projects.slice().sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  return (
    <StyledProjectList>
      {sortedProjectList.map((project) => (
        <ProjectCard key={project.id} projectDetails={project} />
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;
