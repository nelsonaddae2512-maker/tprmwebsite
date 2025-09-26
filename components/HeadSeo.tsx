// components/HeadSeo.tsx
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string; // /images/og.jpg
};
export default function HeadSeo({
  title = "Truvern | Third-Party Risk, handled.",
  description = "Interactive assessments, auto-scoring, and remediation in one vendor-friendly portal.",
  url = "https://www.truvern.com/",
  image = "https://www.truvern.com/images/og.jpg",
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
