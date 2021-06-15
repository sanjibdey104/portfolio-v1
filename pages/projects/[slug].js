import React from 'react';
import styled from 'styled-components';
import { getProjectData, getProjectSlugs } from '../../lib/data';
import Image from 'next/image';

const ProjectDetailsSection = styled.section`

    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;

    @media (max-width: 768px) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`


function projects({projectData}) {
  const project = projectData[0];
  const {title, description, stack, githubLink, liveLink, thumbnail } = project;

  return (
    <ProjectDetailsSection>
    
    <h2>{title}</h2>

    <div className="brief">
        <p>Brief</p>
        <p>{description}</p>
    </div>

    <div className="display-image" data-tooltip={title}>
        <Image
        src={thumbnail.url}
        width={384}
        height={288}
        />
    </div>

    <div className="links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            source code
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
            live link
        </a>
    </div>
    
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, numquam quae, eligendi et sequi officia voluptatem impedit est a iste doloribus dicta perspiciatis nobis eius facilis ratione! Dolore, cumque fugit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, numquam quae, eligendi et sequi officia voluptatem impedit est a iste doloribus dicta perspiciatis nobis eius facilis ratione! Dolore, cumque fugit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, numquam quae, eligendi et sequi officia voluptatem impedit est a iste doloribus dicta perspiciatis nobis eius facilis ratione! Dolore, cumque fugit?</p>

    </ProjectDetailsSection>
  )
}

export const getStaticProps = async({ params }) => {
  const data = await getProjectData(params.slug);

  return {
    props: {
      projectData: data.projects
    }
  }
}

export default projects


export async function getStaticPaths() {
    const projects = await getProjectSlugs();

    return {
      paths: projects.map(({ slug }) => ({
        params: { slug },
      })),
      fallback: false,
    }
}