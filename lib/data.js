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
        unikey
        title
        slug
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

export const getProject = async (slug) => {
  const projectQuery = gql`
    query ProjectsBySlug($slug: String) {
      projects(where: { slug: $slug }) {
        id
        unikey
        title
        slug
        stack
        description
        githubLink
        liveLink
        goal
        challenges
        learnings
        prospective
        screens {
          id
          url
        }
      }
    }
  `;
  const variables = { slug };

  const projectData = await graphQLClient.request(projectQuery, variables);
  return projectData;
};

export const getProjectSlugs = async () => {
  const slugQuery = gql`
    query Projects {
      projects {
        slug
      }
    }
  `;
  const slugData = await graphQLClient.request(slugQuery);
  return slugData.projects;
};
