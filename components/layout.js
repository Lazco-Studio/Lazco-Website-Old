import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lazco Team</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="lazco" />
      </Head>
      <div className="h-screen grid grid-rows-[auto_1fr_auto] m-0">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
