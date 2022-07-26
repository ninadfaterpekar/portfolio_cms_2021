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
import PostBody from "../../components/post-body";

let client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export default function blogPage({ blogPosts }) {
  console.log(blogPosts);

  // const blogImage = "https:" + blogPosts.fields.heroImage.fields.file.url;

  // const getImgUrl = (imageObject) => {
  //   // return "https://tinyurl.com/2p8n5kjx";
  //   return imageObject.fields.heroImage?.fields?.file?.url
  //     ? "https:" + imageObject.fields.heroImage.fields.file.url
  //     : "https://tinyurl.com/2p8n5kjx";
  // };

  // const renderContentBodyContent = (nodeType) => {
  //   console.log("nodetype", nodeType);
  //   switch (nodeType) {
  //     case "heading-1": {
  //       console.log("returning IMg texr");

  //       // return <ImgText />;
  //       return <h2>Extrract the content here somehow.</h2>;
  //     }
  //     case "paragraph": {
  //       return <PositiveInfo />;
  //     }
  //     default: {
  //       return "not sure what to render";
  //     }
  //   }
  // };

  return (
    <div>
      <Head>
        <title>{blogPosts.fields.slug}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <PostBody content={blogPosts.fields.contentBody} />
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
      blogPosts: data.items.find((item) => item.fields.slug == params.slug),
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
