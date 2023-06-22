import React from "react";
import Head from "next/head";
import { LayoutProps } from "./interfaces";
import { MainContent } from "./components.styles";
import { Footer, Header } from "@/components";

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`CoffeSite - ${title}`}</title>
      </Head>
      <Header />
      <MainContent>
        <main>{children}</main>
      </MainContent>

      <Footer />
    </>
  );
}
