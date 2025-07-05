import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
    };

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = storedTheme || (prefersDark ? "dark" : "light");

    applyTheme(theme);

    // Only sync with system if user hasn't set a manual theme
    if (!storedTheme) {
      const handleChange = (e) => {
        const newTheme = e.matches ? "dark" : "light";
        applyTheme(newTheme);
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

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
