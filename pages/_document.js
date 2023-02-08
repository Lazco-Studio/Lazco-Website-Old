import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="Lazco Team" />
        <meta name="description" content="" />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lazco.dev/" />
        <meta property="og:title" content="Lazco Team" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/banner.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lazco.dev/" />
        <meta property="twitter:title" content="Lazco Team" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
