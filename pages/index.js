import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({ blogPosts }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Box>
          <Hero />
          {/* <Article sx={{ height: "60px" }} name="MyName" /> */}
        </Box>
        {blogPosts.map((item) => (
          <div key={item.sys.id}>
            <Link as={"/blog/" + item.fields.slug} href="/blog/[slug]">
              {item.fields.title}
            </Link>
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
