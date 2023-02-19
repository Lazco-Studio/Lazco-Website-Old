import "@/styles/globals.css";
import Layout from "@/components/layout";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function App({ Component, pageProps }) {
  return (
    <ReCaptchaProvider reCaptchaKey="6LdbjZYkAAAAABy-baRdHf36BxSx1Q2Dz_alLbcw">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReCaptchaProvider>
  );
}
