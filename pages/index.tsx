// pages/index.tsx
import Script from "next/script";
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* SEO meta */}
      <HeadSeo />

      {/* JSON-LD (Organization) */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Truvern",
            url: "https://www.truvern.com/",
            logo: "https://www.truvern.com/favicon.ico",
            sameAs: ["https://www.linkedin.com/company/truvern"],
          }),
        }}
      />

      <Nav />

      {/* Hero */}
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-indigo-700">
            Third-Party Risk, handled.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-700">
            Interactive assessments, auto-scoring, and remediation in one vendor-friendly portal.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/signup"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="/pricing"
              className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50"
            >
              View Pricing
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-12 md:grid-cols-3">
          {[
            { t: "Interactive Assessments", d: "Guided questions, evidence upload, contextual help." },
            { t: "Auto Risk Scoring", d: "Control-level H/M/L plus portfolio heatmap." },
            { t: "Remediation Built-In", d: "Tasks, owners, SLAs and due dates." },
            { t: "Exports & Audit Trail", d: "PDF/CSV, signatures, timestamps, change history." },
            { t: "Vendor Friendly", d: "Minimal friction, status, reminders." },
            { t: "Security First", d: "Encryption, least-privilege, logging." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{f.t}</h3>
              <p className="mt-2 text-gray-600">{f.d}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 py-14 text-center text-white">
          <h2 className="text-2xl font-bold">Start your first assessment in minutes</h2>
          <a
            href="/signup"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Start Free
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
