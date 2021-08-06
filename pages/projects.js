import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Projects from "../components/Projects";
import { getPortfolioData } from "../lib/data";

const ProjectsPage = styled(motion.section)`
  width: 100%;
`;

function projects({ projectsData }) {
  const { projects } = projectsData;
  return (
    <ProjectsPage initial={{ y: 50 }} animate={{ y: 0 }}>
      <Projects projects={projects} />
    </ProjectsPage>
  );
}

export const getStaticProps = async () => {
  const { projectsData } = await getPortfolioData();

  return {
    props: {
      projectsData,
    },
  };
};

export default projects;
