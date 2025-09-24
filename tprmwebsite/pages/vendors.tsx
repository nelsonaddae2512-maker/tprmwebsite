import Head from "next/head";

export default function Vendors() {
  return (
    <>
      <Head>
        <title>For Vendors | Truvern</title>
        <meta name="description" content="Simple, secure vendor assessments. Upload evidence, answer guided questions, and track remediation." />
      </Head>

      <main className="mx-auto max-w-5xl p-8">
        <h1 className="text-4xl font-bold text-indigo-600">For Vendors</h1>
        <p className="mt-4 text-gray-700">
          Respond to assessments quickly with guided questions, contextual help, and evidence uploads. Everything in one portal.
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Guided Questionnaire</h3>
            <p className="mt-2 text-gray-600">Only see questions that apply to your product and data flows.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Evidence Upload</h3>
            <p className="mt-2 text-gray-600">Attach policies, SOC 2, penetration tests, diagrams, and more.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Status & Deadlines</h3>
            <p className="mt-2 text-gray-600">Track due dates and requested remediations with clear owners.</p>
          </div>
        </section>

        <div className="mt-10">
          <a href="/signup" className="inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
            Start as a Vendor
          </a>
        </div>
      </main>
    </>
  );
}
