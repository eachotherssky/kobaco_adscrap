/* pages/_app.tsx */
import "@/styles/globals.css";          // Tailwind & 전역 CSS
import Head from "next/head";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 사이트 기본 <head> 값 */}
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Ad Scrap — Alture × Liquid Glass Design</title>
        <meta
          name="description"
          content="A sophisticated ad platform combining Alture's typography-first aesthetic with Apple's Liquid Glass design language"
        />
      </Head>

      {/* 각 페이지 컴포넌트 */}
      <Component {...pageProps} />
    </>
  );
}
