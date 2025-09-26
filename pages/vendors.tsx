import HeadSeo from "../components/HeadSeo";
// ...
<HeadSeo />
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Vendors() {
  return (
    <>
      <Head><title>For Vendors | Truvern</title></Head>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-700">For Vendors</h1>
        <p className="mt-4 text-gray-700">Respond fast with guided questions and evidence uploads.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6"><h3 className="font-semibold">Guided</h3><p className="mt-2 text-gray-600">Only relevant questions.</p></div>
          <div className="rounded-2xl border p-6"><h3 className="font-semibold">Evidence</h3><p className="mt-2 text-gray-600">Attach policies, SOC 2, pentests.</p></div>
          <div className="rounded-2xl border p-6"><h3 className="font-semibold">Deadlines</h3><p className="mt-2 text-gray-600">Clear due dates and reminders.</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
