import { gql, GraphQLClient } from "graphql-request";

const endpoint = `${process.env.GRAPHCMS_PROJECT_API_ENDPOINT}`;
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
  },
});

export const getPortfolioData = async () => {
  const projectsDataQuery = gql`
    {
      projects {
        id
        title
        stack
        description
        githubLink
        liveLink
        updatedAt
      }
    }
  `;

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
  `;
  const projectsData = await graphQLClient.request(projectsDataQuery);
  const workData = await graphQLClient.request(workDataQuery);

  return { projectsData: projectsData, workData: workData };
};
