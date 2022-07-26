import "../styles/index.css";
import * as React from "react";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ||
    "qAarRWIruOPFz-MIlM056yuwQz6AER_ThexbZg_w_sI",
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

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Ninad Faterpekar</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </CacheProvider>
  );
}
