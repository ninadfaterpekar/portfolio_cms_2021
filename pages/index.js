import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Intro from "../components/intro";
import Article from "../components/article";
import Layout from "../components/layout";
import Image from "next/image";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

const getImgUrl = (imageObject) => {
  console.log(imageObject);
  console.log(imageObject.fields.heroImage);
  // return "https://tinyurl.com/2p8n5kjx";
  return imageObject.fields.heroImage?.fields?.file?.url
    ? "https:" + imageObject.fields.heroImage.fields.file.url
    : "https://tinyurl.com/2p8n5kjx";
};
export default function Home({ blogPosts }) {
  // console.log(blogPosts);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Box>
          <Intro />
        </Box>
        {blogPosts.map((item) => (
          <div key={item.sys.id}>
            <Article
              title={item.fields.title}
              description={item.fields.description}
              imgURL={getImgUrl(item)}
              slug={item.fields.slug}
            />

            {/* <Link as={"/blog/" + item.fields.slug} href="/blog/[slug]">
              {item.fields.title}
            </Link> */}
          </div>
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "blogPost",
  });
  return {
    props: {
      blogPosts: data.items,
    },
  };
}
