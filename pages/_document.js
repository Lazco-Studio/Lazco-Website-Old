import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
<<<<<<< HEAD
    return (
        <Html lang="zh-TW">
            <Head>
                <meta charSet="UTF-8" />
                {/*<!-- Primary Meta Tags -->*/}
                <meta name="title" content="Lazco" />
                <meta
                    name="description"
                    content="Lazco是專業的網站開發和托管團隊，提供全面的數位解決方案。我們秉持規劃、開發和提供的原則，與客戶密切合作，創建出符合需求的定制網站。選擇Lazco，提升您的在線品牌形象。"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
=======
  return (
    <Html lang="zh-TW">
      <Head>
        <meta charSet="UTF-8" />
        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="Lazco" />
        <meta
          name="description"
          content="Lazco是專業的網站開發和托管團隊，提供全面的數位解決方案。我們秉持規劃、開發和提供的原則，與客戶密切合作，創建出符合需求的定制網站。選擇Lazco，提升您的在線品牌形象。"
        />
>>>>>>> bbf41698258bfb231e093efb7b2523c5a21b585f

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lazco.dev/" />
        <meta property="og:title" content="Lazco" />
        <meta
          property="og:description"
          content="Lazco是專業的網站開發和托管團隊，提供全面的數位解決方案。我們秉持規劃、開發和提供的原則，與客戶密切合作，創建出符合需求的定制網站。選擇Lazco，提升您的在線品牌形象。"
        />
        <meta property="og:image" content="/images/banner.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lazco.dev/" />
        <meta property="twitter:title" content="Lazco" />
        <meta
          property="twitter:description"
          content="Lazco是專業的網站開發和托管團隊，提供全面的數位解決方案。我們秉持規劃、開發和提供的原則，與客戶密切合作，創建出符合需求的定制網站。選擇Lazco，提升您的在線品牌形象。"
        />
        <meta property="twitter:image" content="/images/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
