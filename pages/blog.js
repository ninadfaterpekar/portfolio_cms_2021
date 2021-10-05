import Head from "next/head";
import { blogPosts } from "../lib/data";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Head>
        <title> Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog</h1>
      </main>
      <div>
        {blogPosts.map((item) => (
          <div key={item.slug}>
            <Link as={"/blog/" + item.slug} href="/blog/[slug]">
              <a>{item.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
