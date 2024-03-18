import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Router from "next/router";
import Loader from "../components/Loader";
import NProgress from "nprogress";
import Head from "next/head";
import axios from "axios";
import { setCookies } from "cookies-next";

export default function MyApp({ Component, pageProps }) {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  });

  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    // console.log("router is Changingsdf..")
    NProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setLoading(false);
  });

  const theme = extendTheme({ breakpoints });

  const colortheme = extendTheme({
    colors: {
      brand: {
        100: "#274E8D",
        200: "#3162B1",
      },
    },
    fonts: {
      font: {
        100: "Kantumruy-Regular",
      },
    },
  });

  useEffect(() => {
    const loginUser = async () => {
      try {
        await axios
          .post(`${process.env.NEXT_PUBLIC_CMS_API}/api/cms/users/login`, {
            email: process.env.NEXT_PUBLIC_CMS_USER_NAME,
            password: process.env.NEXT_PUBLIC_CMS_PASSWORD,
          })
          .then((response) => {
            console.log(response?.data);
            localStorage.setItem("user", response?.data?.data?.token);
            setCookies("user", response?.data?.data?.token);
          });
      } catch (err) {
        if (err.response) {
          console.log("Error data", err.response.data);
          console.log("Error header", err.response.status);
          console.log("Error header", err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    loginUser();
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="../logo.png"></link>
      </Head>
      {loading && <Loader />}
      <ChakraProvider theme={(theme, colortheme)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </div>
  );
}
