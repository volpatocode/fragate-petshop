import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import {UserContextProvider} from "../contexts/UserContext";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  body {
    background-color: #F3F3F3;
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
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
