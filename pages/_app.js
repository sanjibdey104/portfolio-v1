import Layout from "../components/layout/Layout";
import GlobalStyles from "../styles/globalStyles";
import ThemeProvider from "../context/theme-context";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
