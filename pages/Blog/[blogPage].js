import Head from "next/head";

export default function blogPage(title, date, content) {
  return (
    <div>
      <Head>
        <title> Blog Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog Page</h1>
      </main>
    </div>
  );
}
