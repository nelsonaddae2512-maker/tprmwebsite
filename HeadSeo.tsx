import HeadSeo from "../components/HeadSeo";

export default function Vendors() {
  return (
    <>
      <HeadSeo
        title="Vendors • Truvern"
        description="Guided vendor risk assessments with evidence upload and auto-scoring."
        url="https://www.truvern.com/vendors"
      />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-5xl font-bold text-indigo-700">VENDORS PAGE</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is where vendors complete their assessments.
        </p>
      </main>
    </>
  );
}
