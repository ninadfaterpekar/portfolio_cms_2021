import { data } from "autoprefixer";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Layout from "../../components/layout";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function blogPage({ blogPosts }) {
  console.log(blogPosts);

  const blogImage = "https:" + blogPosts.fields.heroImage.fields.file.url;

  return (
    <div>
      <Head>
        <title>{blogPosts.fields.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1>{blogPosts.fields.title}</h1>
          {/* <img src={"https:" + blogPosts.fields.heroImage.fields.file.url}></img> */}
          <Image
            loader={() => blogImage}
            width={700}
            src={blogImage}
            height={500}
          />
          <p>{blogPosts.fields.body}</p>
          <p>{blogPosts.fields.description}</p>
          <p>{blogPosts.fields.heroImage.fields.title}</p>
          <p>{blogPosts.fields.heroImage.fields.file.url}</p>
        </main>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "blogPost",
  });
  return {
    props: {
      blogPosts: data.items[0],
    },
  };
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "blogPost",
  });
  return {
    paths: data.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
}
