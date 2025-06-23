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
      p {
        font-size: 0.9rem;
      }

      .blog-post {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .blog-post__header {
          display: flex;
          flex-direction: column;
          gap: 12px;

          .blog-post__banner {
            width: 100%;
            height: 10rem;
            border-radius: 16px;
            background-color: #ffffff;
            background-repeat: repeat;
            background-size: 80px 40px;
          }
        }

        .blog-post__content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      }
    }
  }
`;

const BlogPostBanner = () => {
  const fillColor = "1bad0e";
  const encodedFillColor = encodeURIComponent(`#${fillColor}`);

  const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='${encodedFillColor}' fill-opacity='0.6' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`;

  return (
    <div
      className="blog-post__banner"
      style={{
        border: `1px solid #${fillColor}`,
        backgroundImage: bgPattern,
      }}
    ></div>
  );
};

const BlogPage = () => {
  return (
    <StyledBlogPage className="blog-page">
      {/* <h3 className="blog-page__title">welcome to the blog page</h3> */}

      <section className="blog-page__body">
        <div className="blog-post">
          <section className="blog-post__header">
            <BlogPostBanner />

            <div className="blog-post__info">
              <h4 className="blog-post__title">HeadSpace</h4>
              <p className="blog-post__date">23.06.2025</p>
            </div>
          </section>

          <section className="blog-post__content">
            <p>
              consider this as the single point of access to everything floating
              around in my headspace, exploring tech from different
              perspectives.
            </p>

            <p>
              it's like a satellite hovering my head"space" :P, capturing
              everything that floats around in my mind keeping the sparks of
              learning about tech alive.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate doloremque minima neque recusandae blanditiis
              laboriosam tempore! Nihil impedit iure unde quisquam id quo quasi
              illo, exercitationem asperiores numquam totam necessitatibus
              nesciunt beatae laborum provident voluptate. Molestiae, eveniet.
              Atque, quas nostrum? Suscipit accusantium doloremque culpa itaque?
              Nostrum exercitationem sunt vero perferendis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate doloremque minima neque recusandae blanditiis
              laboriosam tempore! Nihil impedit iure unde quisquam id quo quasi
              illo, exercitationem asperiores numquam totam necessitatibus
              nesciunt beatae laborum provident voluptate. Molestiae, eveniet.
              Atque, quas nostrum? Suscipit accusantium doloremque culpa itaque?
              Nostrum exercitationem sunt vero perferendis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate doloremque minima neque recusandae blanditiis
              laboriosam tempore! Nihil impedit iure unde quisquam id quo quasi
              illo, exercitationem asperiores numquam totam necessitatibus
              nesciunt beatae laborum provident voluptate. Molestiae, eveniet.
              Atque, quas nostrum? Suscipit accusantium doloremque culpa itaque?
              Nostrum exercitationem sunt vero perferendis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate doloremque minima neque recusandae blanditiis
              laboriosam tempore! Nihil impedit iure unde quisquam id quo quasi
              illo, exercitationem asperiores numquam totam necessitatibus
              nesciunt beatae laborum provident voluptate. Molestiae, eveniet.
              Atque, quas nostrum? Suscipit accusantium doloremque culpa itaque?
              Nostrum exercitationem sunt vero perferendis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate doloremque minima neque recusandae blanditiis
              laboriosam tempore! Nihil impedit iure unde quisquam id quo quasi
              illo, exercitationem asperiores numquam totam necessitatibus
              nesciunt beatae laborum provident voluptate. Molestiae, eveniet.
              Atque, quas nostrum? Suscipit accusantium doloremque culpa itaque?
              Nostrum exercitationem sunt vero perferendis.
            </p>
          </section>
        </div>
      </section>
    </StyledBlogPage>
  );
};

export default BlogPage;
