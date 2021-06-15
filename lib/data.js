import { gql, GraphQLClient } from "graphql-request";

const endpoint = `${process.env.GRAPHCMS_PROJECT_API_ENDPOINT}`;  
const graphQLClient = new GraphQLClient(endpoint, 
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    }
  }
);

export const getPortfolioData = async() => {

  const projectsDataQuery = gql`
  {
    projects {
      id
      title
      slug
      stack
      description
      githubLink
      liveLink
      thumbnail {
        url
        width
        height
      }
    }
  }
  `

  const workDataQuery = gql`
  {
    works {
      id
      company
      position
      duration
      responsibilities
    }
  }
  `
  const projectsData = await graphQLClient.request(projectsDataQuery);
  const workData = await graphQLClient.request(workDataQuery);

  return {projectsData: projectsData, workData: workData};
}


export const getProjectData = async(slug) => {

  const projectDataQuery = gql`
    query ProjectsBySlug($slug:String){
      projects(where: {slug: $slug}) {
        id
        title
        slug
        stack
        description
        githubLink
        liveLink
        thumbnail {
          url
          width
          height
        }
      }
    }
  `
  
  const variables = {
    slug,
  }
  const projectData = await graphQLClient.request(projectDataQuery, variables);
  return projectData;
}

export const getProjectSlugs = async () => {
  const query = gql`
    {
      projects {
        slug
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data.projects;
};