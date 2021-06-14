import React from 'react';
import styled from 'styled-components';
import Projects from '../components/Projects';
import { getProjectsData } from '../lib/data';


const ProjectsPage = styled.section`
  .project-section {
    width: 80%;
    margin-left: auto;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  }
`

export const getStaticProps = async() => {

  const data = await getProjectsData();

  return {
    props: {
      data
    }
  }
}


function projects({data}) {
    const {projects} = data;

    return (
      <ProjectsPage> 
      <Projects className="project-section" projects={projects} />
      </ProjectsPage>
    )
}

export default projects
