import React from "react";
import Head from "next/head";
import { MainContent } from "./components.styles";
import { Footer, HeaderHome } from "@/components";
import { LayoutProps } from "./interfaces";

export default function LayoutHome({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`CoffeSite - ${title}`}</title>
      </Head>
      <HeaderHome />
      <MainContent>
        <main>{children}</main>
      </MainContent>

      <Footer />
    </>
  );
}
