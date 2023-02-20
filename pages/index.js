import Head from "next/head";

import Service from "@/components/home/Service";
import Solutions from "@/components/home/Solutions";
import Top from "@/components/home/Top";


export default function Home() {
    return (
        <>
            <Head>
                <title>Lazco | Home</title> {/* Lazco Team */}
            </Head>
            <main>
                <Top />
                <Service />
                <Solutions />
            </main>
        </>
    );
}
