import { gql, GraphQLClient } from "graphql-request";

export const getProjectsData = async() => {
    
  const endpoint = 'https://api-ap-northeast-1.graphcms.com/v2/ckpgq45jr0yku01xtco5gcwu7/master';
    
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