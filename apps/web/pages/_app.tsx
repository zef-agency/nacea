import "../styles/globals.css";

import type { AppProps } from "next/app";

import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const blackMango = localFont({
  variable: "--font-blackMango",
  src: [
    {
      path: "../styles/fonts/BlackMango-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/BlackMango-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/BlackMango-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/BlackMango-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/BlackMango-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/BlackMango-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${blackMango.variable}`}>
      <Component {...pageProps} />{" "}
    </main>
  );
}
