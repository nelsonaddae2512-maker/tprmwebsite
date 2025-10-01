HEAD
import Head from "next/head";

﻿import Head from "next/head";
52d8314 (fix(HeadSeo): single default export; remove duplicates)

type HeadSeoProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function HeadSeo({
  title,
  description,
  image,
  url,
}: HeadSeoProps) {
HEAD
  const metaDescription = description || "Truvern – Third-Party Risk Management made simple.";
  const metaImage = image || "/og-image.png";
  const metaUrl = url || "https://www.truvern.com";

  const metaDescription = description ?? "Truvern – Third-Party Risk Management made simple.";
  const metaImage = image ?? "/images/og.jpg";
  const metaUrl = url ?? "https://www.truvern.com";
 52d8314 (fix(HeadSeo): single default export; remove duplicates)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
 HEAD
      
      <meta property="og:type" content="website" />
 52d8314 (fix(HeadSeo): single default export; remove duplicates)
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
 HEAD
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href={metaUrl} />
 52d8314 (fix(HeadSeo): single default export; remove duplicates)
    </Head>
  );
}
