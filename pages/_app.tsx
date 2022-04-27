import type {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import {RecoilRoot} from "recoil";
import "antd/dist/antd.css";
import {GlobalStyle} from "../styles/global-styles";
import {theme} from "../styles/theme";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <script
                src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <GlobalStyle/>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </RecoilRoot>
        </>
    );
}
