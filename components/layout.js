import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lazco Team</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </>
  );
}
