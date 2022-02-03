import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/GlobalStyle";
import { RecoilRoot } from "recoil";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
export default MyApp;
