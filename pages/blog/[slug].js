import { data } from "autoprefixer";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Layout from "../../components/layout";
import Link from "next/link";
import ImgText from "../../components/imgText";
import LeftImgSection from "../../components/leftImgSection";
import RightImgSection from "../../components/rightImgSection";
import PositiveInfo from "../../components/positiveInfo";
import NegativeInfo from "../../components/negativeInfo";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function blogPage({ blogPosts }) {
  // console.log(blogPosts);

  const blogImage = "https:" + blogPosts.fields.heroImage.fields.file.url;

  return (
    <div>
      <Head>
        <title>{blogPosts.fields.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          {/* <img src={"https:" + blogPosts.fields.heroImage.fields.file.url}></img> */}
          <Image
            loader={() => blogImage}
            layout={`responsive`}
            width={`100vw`}
            height={`50vw`}
            src={blogImage}
          />
          <ImgText />
          <PositiveInfo />
          <LeftImgSection />
          <NegativeInfo />
          <RightImgSection />
          {/* <h1>{blogPosts.fields.title}</h1>
          <p>{blogPosts.fields.body}</p>
          <p>{blogPosts.fields.description}</p>
          <p>{blogPosts.fields.heroImage.fields.title}</p>
          <p>{blogPosts.fields.heroImage.fields.file.url}</p> */}
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
