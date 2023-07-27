import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../public/apple-touch-icon.png /"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../public/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../public/favicon-16x16.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="../public/site.webmanifest" />
          <link
            rel="mask-icon"
            href="../public/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Toaster />
        <EditModal />
        <LoginModal />
        <RegisterModal />
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </SessionProvider>
    </>
  );
}
