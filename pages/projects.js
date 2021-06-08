import React from 'react';
import Projects from '../components/Projects';
import { getProjectsData } from '../lib/data';

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
        <Projects projects={projects} />
    )
}

export default projects
