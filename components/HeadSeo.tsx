import Head from "next/head";

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
  const metaDescription = description || "Truvern – Third-Party Risk Management made simple.";
  const metaImage = image || "/og-image.png";
  const metaUrl = url || "https://www.truvern.com";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
