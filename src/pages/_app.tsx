import "@/styles/globals.css";

import { Open_Sans, PT_Sans } from "next/font/google";

import type { AppProps } from "next/app";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-OpenSans",
});

const PtSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-PtSans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${OpenSans.variable}  ${PtSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
