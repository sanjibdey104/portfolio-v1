import React from 'react';
import styled from 'styled-components';
import Projects from '../components/Projects';
import { getPortfolioData } from '../lib/data';


const ProjectsPage = styled.section`
    width: 100%;
`

function projects({projectsData}) {
  const {projects} = projectsData;

  return (
    <ProjectsPage> 
    <Projects projects={projects} />
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
