import React from 'react';
import styled from 'styled-components';
import Projects from '../components/Projects';
import { getPortfolioData } from '../lib/data';


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

function projects({projectsData}) {
  const {projects} = projectsData;

  return (
    <ProjectsPage> 
    <Projects className="project-section" projects={projects} />
    </ProjectsPage>
  )
}

export const getStaticProps = async() => {
  const {projectsData} = await getPortfolioData();

  return {
    props: {
      projectsData
    }
  }
}

export default projects
