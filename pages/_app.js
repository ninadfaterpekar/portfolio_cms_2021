import "../styles/index.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Post from "./posts/[slug]";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

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

const Article = ({ blogPosts }) => {
  console.log("article is printing");
  return (
    <div>
      {blogPosts &&
        blogPosts.map((item) => (
          <>
            <div key={item.sys.id}>
              <Link as={"/blog/" + item.fields.slug} href="/blog/[slug]">
                {item.fields.title}
              </Link>
            </div>
            <div>{props.name}</div>
          </>
        ))}
    </div>
  );
  console.log("article done printing");
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </CacheProvider>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
