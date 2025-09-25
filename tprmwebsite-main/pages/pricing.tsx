import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | Truvern</title>
        <meta name="description" content="Transparent pricing for third-party risk assessments. Free, Pro, and Enterprise tiers." />
      </Head>

      <main className="mx-auto max-w-5xl p-8">
        <h1 className="text-4xl font-bold text-indigo-600">Pricing</h1>
        <p className="mt-4 text-gray-700">Pick a plan that fits your program today—scale later without migration.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-2 text-gray-600">1 assessor, 1 active assessment, PDF export.</p>
          </div>
          <div className="rounded-xl border-2 border-indigo-600 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600">Pro</h3>
            <p className="mt-2 text-gray-600">3 users, unlimited assessments, remediation tasks, risk heatmap.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-gray-600">SSO, advanced exports, Trust Center, dedicated support.</p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <a href="/signup" className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
            Get Started
          </a>
          <a href="/contact" className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50">
            Talk to Sales
          </a>
        </div>
      </main>
    </>
  );
}
