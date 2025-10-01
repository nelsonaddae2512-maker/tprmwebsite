// pages/trust.tsx
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Trust() {
  return (
    <>
      <HeadSeo
        title="Trust & Security — Truvern"
        description="Learn how Truvern protects your data: encryption, least privilege, audit logging, and secure development practices."
        url="https://www.truvern.com/trust"
      />
      <Nav />

      <main className="bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-indigo-700 md:text-5xl">
            Security, built in.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            We protect customer and vendor data with encryption, least-privilege
            access, logging, and continuous review.
          </p>
        </section>

        {/* Controls overview */}
        <section className="border-t">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-14 md:grid-cols-3">
            {[
              {
                title: "Encryption",
                desc: "TLS in transit, AES-256 at rest. Keys rotated and access-scoped.",
              },
              {
                title: "Access control",
                desc: "SSO & MFA support. Role-based access with least-privilege defaults.",
              },
              {
                title: "Audit logging",
                desc: "Comprehensive event logs retained with tamper-resistant storage.",
              },
              {
                title: "Secure SDLC",
                desc: "Code reviews, dependency scanning, and change management gates.",
              },
              {
                title: "Backups & DR",
                desc: "Automated backups, integrity checks, and disaster-recovery testing.",
              },
              {
                title: "Compliance-ready",
                desc: "Designed to support SOC 2 & ISO 27001 control expectations.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-indigo-700">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data handling */}
        <section className="bg-indigo-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-bold text-indigo-700">Data handling</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              <li>Customer data stored in regional, SOC 2–audited cloud providers.</li>
              <li>Vendor evidence is scoped to assessments and access-controlled.</li>
              <li>Support access is time-bound and requires explicit customer approval.</li>
            </ul>
          </div>
        </section>

        {/* Contact trust */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold text-indigo-700">Questions?</h2>
          <p className="mt-2 max-w-2xl text-gray-700">
            Need a security packet or want to discuss architecture? We’re happy to help.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="rounded-lg border border-indigo-600 px-6 py-3 font-medium text-indigo-700 hover:bg-indigo-50"
            >
              Contact the Trust team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
