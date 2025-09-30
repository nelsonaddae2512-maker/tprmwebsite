import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Footer";
import Footer from "../components/Footer";

export default function Vendors() {
  return (
    <>
      <HeadSeo
        title="For Vendors • Truvern"
        description="A friendly, guided experience for vendors completing security questionnaires. Evidence uploads, auto-save, and remediation tracking."
        url="https://www.truvern.com/vendors"
      />
      <Nav />

      <main className="bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Vendor Experience</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
            Complete assessments fast with a guided workflow, evidence uploads, and clear status.
          </p>
        </section>

        {/* Benefits */}
        <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Guided Questionnaire</h2>
            <p className="mt-2 text-gray-700">Contextual help, validation, and reusable answers for common controls.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Evidence Uploads</h2>
            <p className="mt-2 text-gray-700">Attach policies and reports; reuse across assessments with versioning.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Remediation Tasks</h2>
            <p className="mt-2 text-gray-700">Track follow-ups with owners, SLAs, and due dates in one place.</p>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-indigo-700">How it works</h2>
          <ol className="mt-4 list-decimal pl-6 text-gray-700">
            <li>Receive an invite link from your customer</li>
            <li>Complete the guided questionnaire and upload evidence</li>
            <li>Address any remediation items and submit</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center text-white">
            <h2 className="text-2xl font-bold">Ready to breeze through questionnaires?</h2>
            <p className="mt-2 opacity-90">Spin up your portal in minutes.</p>
            <a href="/signup" className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 hover:bg-gray-100">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
