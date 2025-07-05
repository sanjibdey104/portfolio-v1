import styled from "styled-components";
import UnderConstructionMsg from "../components/UnderConstructionMsg";

const StyledBlogSection = styled.section``;

const Blog = () => {
  return (
    <StyledBlogSection className="blog-listing page">
      <UnderConstructionMsg />
    </StyledBlogSection>
  );
};

export default Blog;
