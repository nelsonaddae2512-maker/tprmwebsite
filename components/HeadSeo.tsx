// components/HeadSeo.tsx
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function HeadSeo({
  title = "Truvern — Third-Party Risk, Simplified",
  description = "Interactive vendor assessments with auto-scoring and remediation in one portal. Start free.",
  url = "https://www.truvern.com/",
  image = "/images/og.jpg",
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
}
