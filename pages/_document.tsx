import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
      </Head>
      {/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />
<script
  dangerouslySetInnerHTML={{
    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXX');`,
  }}
/>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
