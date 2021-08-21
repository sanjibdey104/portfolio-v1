import React from "react";
import Layout from "../components/layout/Layout";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
