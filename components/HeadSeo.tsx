// components/HeadSeo.tsx
import Head from "next/head";

interface HeadSeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function HeadSeo({
  title,
  description,
  url,
  image,
}: HeadSeoProps) {
  const siteTitle = title ? `${title} • Truvern` : "Truvern — Third-Party Risk, Simplified";
  const siteDescription = description ?? "Interactive vendor assessments with auto-scoring and remediation in one portal. Start free.";
  const siteUrl = url ?? "https://www.truvern.com";
  const siteImage = image ?? "/images/og.jpg";

  return (
    <Head>
      <title>{siteTitle}</title>
      {siteDescription && <meta name="description" content={siteDescription} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
}