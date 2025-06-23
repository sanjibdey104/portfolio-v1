import styled from "styled-components";

const StyledBlogPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  &.blog-page {
    .blog-page__title {
      font-size: 24px;
    }

    .blog-page__body {
      display: flex;
      flex-direction: column;
      gap: 12px;

      p {
        font-size: 0.9rem;
      }
    }
  }
`;

const BlogPage = () => {
  return (
    <StyledBlogPage className="blog-page">
      <h3 className="blog-page__title">welcome to the blog page</h3>

      <section className="blog-page__body">
        <p>
          consider this as the single point of access to everything floating
          around in my headspace, exploring tech from different perspectives.
        </p>

        <p>
          it's like a satellite hovering my head"space" :P, capturing everything
          that floats around in my mind keeping the sparks of learning about
          tech alive.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          doloremque minima neque recusandae blanditiis laboriosam tempore!
          Nihil impedit iure unde quisquam id quo quasi illo, exercitationem
          asperiores numquam totam necessitatibus nesciunt beatae laborum
          provident voluptate. Molestiae, eveniet. Atque, quas nostrum? Suscipit
          accusantium doloremque culpa itaque? Nostrum exercitationem sunt vero
          perferendis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          doloremque minima neque recusandae blanditiis laboriosam tempore!
          Nihil impedit iure unde quisquam id quo quasi illo, exercitationem
          asperiores numquam totam necessitatibus nesciunt beatae laborum
          provident voluptate. Molestiae, eveniet. Atque, quas nostrum? Suscipit
          accusantium doloremque culpa itaque? Nostrum exercitationem sunt vero
          perferendis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          doloremque minima neque recusandae blanditiis laboriosam tempore!
          Nihil impedit iure unde quisquam id quo quasi illo, exercitationem
          asperiores numquam totam necessitatibus nesciunt beatae laborum
          provident voluptate. Molestiae, eveniet. Atque, quas nostrum? Suscipit
          accusantium doloremque culpa itaque? Nostrum exercitationem sunt vero
          perferendis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          doloremque minima neque recusandae blanditiis laboriosam tempore!
          Nihil impedit iure unde quisquam id quo quasi illo, exercitationem
          asperiores numquam totam necessitatibus nesciunt beatae laborum
          provident voluptate. Molestiae, eveniet. Atque, quas nostrum? Suscipit
          accusantium doloremque culpa itaque? Nostrum exercitationem sunt vero
          perferendis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          doloremque minima neque recusandae blanditiis laboriosam tempore!
          Nihil impedit iure unde quisquam id quo quasi illo, exercitationem
          asperiores numquam totam necessitatibus nesciunt beatae laborum
          provident voluptate. Molestiae, eveniet. Atque, quas nostrum? Suscipit
          accusantium doloremque culpa itaque? Nostrum exercitationem sunt vero
          perferendis.
        </p>
      </section>
    </StyledBlogPage>
  );
};

export default BlogPage;
