import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Fragate</title>
        <link rel="shortcut icon" href="/fragate-title-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
