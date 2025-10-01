del .\components\HeadSeo.tsx -Force 2>$null

$code = @'
import Head from "next/head";

interface HeadSeoProps {
  title?: string;
  description?: string;
}

export default function HeadSeo({ title, description }: HeadSeoProps) {
  const siteTitle = title ? `${title} • Truvern` : "Truvern — Third-Party Risk, Simplified";
  const siteDescription = description || "Interactive vendor risk assessments, auto-scoring, and remediation in one vendor-friendly portal.";

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content="/images/og.jpg" />
    </Head>
  );
}
'@
Set-Content -Path .\components\HeadSeo.tsx -Value $code -Encoding utf8
