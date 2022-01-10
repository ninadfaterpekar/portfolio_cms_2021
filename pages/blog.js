import Head from "next/head";
// import { blogPosts } from "../lib/data";
import Link from "next/link";

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

export default function Blog({ blogPosts }) {
  // console.log(blogPosts);
  return (
    <div>
      <Head>
        <title> Blog title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog</h1>
      </main>
      <div>
        {blogPosts.map((item) => (
          <div key={item.sys.id}>
            <Link as={"/blog/" + item.fields.slug} href="/blog/[slug]">
              {item.fields.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
