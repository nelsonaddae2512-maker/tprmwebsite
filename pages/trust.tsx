import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Footer";
import Footer from "../components/Footer";

export default function Trust() {
  return (
    <>
      <HeadSeo
        title="Trust Center • Truvern"
        description="Security, privacy, and reliability at Truvern. Learn about our controls, subprocessors, and compliance roadmap."
        url="https://www.truvern.com/trust"
      />
      <Nav />

      <main className="bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Trust Center</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
            Our commitment to security, privacy, and reliability across the Truvern platform.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Platform: Operational
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              API: Operational
            </span>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-6xl grid gap-6 px-4 pb-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Security</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>TLS in transit; encrypted at rest</li>
              <li>Least-privilege access controls</li>
              <li>Audit logging and review</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Privacy</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Data Processing Addendum (on request)</li>
              <li>Transparent subprocessors</li>
              <li>Region-aware hosting</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Compliance</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>SOC 2 Type II (in progress)</li>
              <li>ISO 27001 (planned)</li>
              <li>Security reviews on request</li>
            </ul>
          </div>
        </section>

        {/* Subprocessors */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-2xl font-bold text-indigo-700">Subprocessors</h2>
          <p className="mt-2 text-gray-700">
            We’re transparent about vendors used to deliver the service.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left">Provider</th>
                  <th className="px-4 py-3 text-left">Purpose</th>
                  <th className="px-4 py-3 text-left">Location</th>
                  <th className="px-4 py-3 text-left">DPA/Terms</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-white">
                  <td className="px-4 py-3">Vercel</td>
                  <td className="px-4 py-3">Hosting & CDN</td>
                  <td className="px-4 py-3">USA / EU</td>
                  <td className="px-4 py-3">
                    <a className="text-indigo-600 hover:underline" href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">GitHub</td>
                  <td className="px-4 py-3">Source control (CI trigger)</td>
                  <td className="px-4 py-3">Global</td>
                  <td className="px-4 py-3">
                    <a className="text-indigo-600 hover:underline" href="https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement" target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-indigo-700">Security FAQ</h2>
          <div className="mt-4 space-y-3">
            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Where is data hosted?</summary>
              <p className="mt-2 text-gray-700">Primary hosting via Vercel; data may be processed in the USA/EU depending on edge/network routing.</p>
            </details>
            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer select-none font-medium text-gray-900">Do you offer a DPA?</summary>
              <p className="mt-2 text-gray-700">Yes — contact sales to execute a Data Processing Addendum aligned with GDPR.</p>
            </details>
            <details className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer select-none font-medium text-gray-900">How are vulnerabilities handled?</summary>
              <p className="mt-2 text-gray-700">We practice timely patching, dependency scanning, and incident response with RCA.</p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center text-white">
            <h2 className="text-2xl font-bold">Need our security packet?</h2>
            <p className="mt-2 opacity-90">Request SOC 2, pen test summaries, or DPA.</p>
            <a href="/contact" className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 hover:bg-gray-100">
              Contact Security
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
