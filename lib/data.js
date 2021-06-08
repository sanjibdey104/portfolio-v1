import { gql, GraphQLClient } from "graphql-request";

export const getProjectsData = async() => {
    
  const endpoint = `${process.env.GRAPHCMS_PROJECT_API_ENDPOINT}`;
    
  const graphQLClient = new GraphQLClient(endpoint, 
    {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
      }
  }
  );

  const query = gql`
  {
    projects {
      id
      title
      stack
      description
      githubLink
      liveLink
    }
  }
  `
  const projectsData = await graphQLClient.request(query);
  return projectsData;
}