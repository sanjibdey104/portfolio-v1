import { getProject, getProjectSlugs } from "../../lib/data";

const ProjectTemplate = ({ projectData }) => {
  const project = projectData[0];
  const { title } = project;
  console.log(title);

  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getProject(params.slug);

  return {
    props: {
      projectData: data.projects,
    },
  };
};

export default ProjectTemplate;

export async function getStaticPaths() {
  const projects = await getProjectSlugs();

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
