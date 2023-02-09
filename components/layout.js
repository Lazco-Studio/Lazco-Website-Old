import Head from "next/head";
import NavBar from "@/components/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lazco Team</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-full">
        <NavBar />
        {children}
      </div>
    </>
  );
}
