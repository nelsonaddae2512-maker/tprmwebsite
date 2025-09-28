import Head from "next/head";

type Thing = Record<string, unknown>;

export default function JsonLd({ data }: { data: Thing }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        // Ensure valid JSON string
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
