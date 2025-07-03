// pages/blog/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { globalBlogComponents } from "../../lib/mdx-global-components-map";

export default function BlogPost({ source, frontMatter }) {
  const components = {
    ...globalBlogComponents,
  };

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <section>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>

        <MDXRemote {...source} components={components} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx?$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
