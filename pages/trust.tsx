import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Trust() {
  return (
    <>
      <HeadSeo
        title="Trust Center • Truvern"
        description="Security, privacy, and reliability at Truvern."
        url="https://www.truvern.com/trust"
      />
      <Nav />
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Trust Center</h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-700">
            Our commitment to security, privacy, and reliability.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Security</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>Encryption in transit and at rest</li>
                <li>Least-privilege access</li>
                <li>Audit logging</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Privacy</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>DPA available on request</li>
                <li>Subprocessors disclosed</li>
                <li>Region-aware hosting</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Compliance</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>SOC 2 (in progress)</li>
                <li>ISO 27001 (planned)</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Subprocessors</h2>
            <p className="mt-2 text-gray-700">
              We are transparent about our vendors and their purposes.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Vercel — Hosting & CDN</li>
              <li>GitHub — Source control / CI triggers</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Request our security packet
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
