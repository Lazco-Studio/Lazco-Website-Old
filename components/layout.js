import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lazco Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full min-h-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
