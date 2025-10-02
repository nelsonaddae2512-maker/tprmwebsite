// pages/index.tsx
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Truvern — Third-Party Risk, handled.</title>
        <meta
          name="description"
          content="Interactive vendor assessments with auto-scoring and built-in remediation in one vendor-friendly portal."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Nav />

      {/* HERO */}
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-indigo-700">
            Third-Party Risk, handled.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
            Interactive assessments, auto-scoring, and remediation—delivered in a single
            vendor-friendly portal. Cut cycle time from weeks to days.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-md border border-indigo-600 px-6 py-3 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
            >
              View Pricing
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-navy mb-8">Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Interactive Assessments",
                  desc: "Guided questions, evidence upload, contextual help.",
                },
                {
                  title: "Auto Risk Scoring",
                  desc: "Control-level H/M/L plus portfolio heatmap.",
                },
                {
                  title: "Remediation Built-In",
                  desc: "Tasks, owners, SLAs and due dates.",
                },
                {
                  title: "Exports & Audit Trail",
                  desc: "PDF/CSV, signatures, timestamps, change history.",
                },
                {
                  title: "Vendor Friendly",
                  desc: "Minimal friction, real-time status, reminders.",
                },
                {
                  title: "Security First",
                  desc: "Encryption, least-privilege, audit logging.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-navy">{f.title}</h3>
                  <p className="mt-2 text-slate-700">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-indigo-600 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold">How it works</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { num: "1", text: "Invite your vendor." },
                { num: "2", text: "They complete the guided questionnaire." },
                { num: "3", text: "You approve risks or launch remediation." },
              ].map((s) => (
                <div key={s.num} className="rounded-2xl bg-white/10 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-700 font-bold">
                    {s.num}
                  </div>
                  <p className="mt-4 text-lg">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-navy text-center">Pricing</h2>

            {/* Toggle (static UI; pricing values are illustrative) */}
            <div className="mt-6 flex items-center justify-center gap-3 text-sm">
              <span className="font-medium text-slate-700">Monthly</span>
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-indigo-700">
                Save 20% annually
              </span>
              <span className="font-medium text-slate-700">Annual</span>
            </div>

            <div className="mx-auto mt-10 grid gap-6 md:grid-cols-3">
              {/* Free */}
              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="mt-2 text-slate-700">
                  1 assessor seat, 1 active assessment, PDF export.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Guided assessments</li>
                  <li>• Basic exports</li>
                  <li>• Email support</li>
                </ul>
                <Link
                  href="/signup"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-indigo-600 px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-50 transition"
                >
                  Get Started
                </Link>
              </div>

              {/* Pro (Most Popular) */}
              <div className="rounded-2xl border-2 border-indigo-600 p-6 shadow-md relative">
                <div className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-indigo-700">Pro</h3>
                <p className="mt-2 text-slate-700">
                  3 members, unlimited assessments, remediation workflows, risk heatmap.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Everything in Free</li>
                  <li>• Auto risk scoring</li>
                  <li>• Remediation tasks & SLAs</li>
                  <li>• Portfolio risk heatmap</li>
                </ul>
                <Link
                  href="/signup"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 transition"
                >
                  Start Pro
                </Link>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl border p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="mt-2 text-slate-700">
                  SSO, advanced exports, dedicated support, security packet.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Everything in Pro</li>
                  <li>• SSO & user provisioning</li>
                  <li>• Custom questionnaires</li>
                  <li>• Dedicated success manager</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-indigo-600 px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-50 transition"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* FAQ (accordion-lite; static) */}
            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              <details className="rounded-xl border p-4">
                <summary className="cursor-pointer text-base font-semibold">
                  Can vendors fill assessments without an account?
                </summary>
                <p className="mt-2 text-slate-700">
                  Yes—vendors receive a secure link to a guided portal with save/resume and evidence upload.
                </p>
              </details>
              <details className="rounded-xl border p-4">
                <summary className="cursor-pointer text-base font-semibold">
                  Do you support SIG/CAIQ/ISO mappings?
                </summary>
                <p className="mt-2 text-slate-700">
                  We provide mappings to common frameworks and exportable evidence for audits.
                </p>
              </details>
              <details className="rounded-xl border p-4">
                <summary className="cursor-pointer text-base font-semibold">
                  Can I export results to PDF/CSV/JSON?
                </summary>
                <p className="mt-2 text-slate-700">
                  Absolutely—exports and a full audit trail are built-in.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-navy text-center">What customers say</h2>
            <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-700 italic">
              “We cut our assessment cycle from weeks to days.”
              <span className="not-italic"> — Head of Security, Mid-Market SaaS</span>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 py-16 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Start your first assessment in minutes</h2>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
          >
            Start Free
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
