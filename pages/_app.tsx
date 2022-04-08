import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { GlobalStyle } from "../styles/global-styles";
import { theme } from "../styles/theme";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
