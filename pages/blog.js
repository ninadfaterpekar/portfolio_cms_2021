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
            <Link href={"/blog/${item.slug}"}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
