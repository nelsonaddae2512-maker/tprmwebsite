import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TrustAccordion from "../components/TrustAccordion";
import StatusBadge from "../components/StatusBadge";
import SubprocessorsTable from "../components/SubprocessorsTable";

const SUBPROCESSORS = [
  { name: "Vercel", purpose: "Hosting & CDN", location: "USA/EU", dpa: "https://vercel.com/legal/dpa" },
  { name: "GitHub", purpose: "Source control (CI trigger)", location: "USA/EU", dpa: "https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement" },
  // Add more as needed
];

export default function Trust() {
  return (
    <>
      <HeadSeo
        title="Trust Center • Truvern"
        description="Security, compliance, and reliability information for Truvern."
        url="https://www.truvern.com/trust"
      />
      <Nav />

      <main className="bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Trust Center</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
            Our commitment to security, privacy, and reliability.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <StatusBadge label="Platform: Operational" state="operational" />
            <StatusBadge label="API: Operational" state="operational" />
          </div>
        </section>

        {/* Certifications / Security / Privacy */}
        <section className="mx-auto max-w-6xl px-4 pb-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>SOC 2 (in progress)</li>
                <li>ISO 27001 (planned)</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Security</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>Encryption in transit (TLS) and at rest</li>
                <li>Least-privilege access controls</li>
                <li>Audit logging</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Privacy</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>Data Processing Addendum available</li>
                <li>Subprocessors disclosed below</li>
                <li>Region-aware hosting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Subprocessors */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-2xl font-bold text-indigo-700">Subprocessors</h2>
          <p className="mt-2 text-gray-700">We are transparent about our vendors and their purposes.</p>
          <div className="mt-4">
            <SubprocessorsTable rows={SUBPROCESSORS} />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-indigo-700">Security FAQ</h2>
          <div className="mt-4">
            <TrustAccordion
              items={[
                {
                  title: "Where is data hosted?",
                  content: "Primary hosting via Vercel; data may be processed in the USA/EU depending on edge/network routing.",
                },
                {
                  title: "Do you offer a DPA?",
                  content: "Yes. Contact sales to execute a Data Processing Addendum aligned with GDPR requirements.",
                },
                {
                  title: "How do you handle vulnerabilities?",
                  content: "We practice timely patching, dependency scanning, and incident response with root-cause analysis.",
                },
              ]}
            />
          </div>
        </section>

        {/* Contact CTA */}
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
