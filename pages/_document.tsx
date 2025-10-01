// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Safe global tags only (icons, preconnects, fonts, meta) */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="bg-white text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
