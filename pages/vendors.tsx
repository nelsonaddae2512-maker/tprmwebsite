import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Vendors() {
  return (
    <>
      <HeadSeo
        title="For Vendors • Truvern"
        description="A quick, guided experience for completing security questionnaires."
        url="https://www.truvern.com/vendors"
      />
      <Nav />
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Vendor Experience</h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-700">
            A friendly, guided workflow to complete assessments fast—evidence uploads, auto-save, and status tracking.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Guided Questionnaire</h2>
              <p className="mt-2 text-gray-700">Contextual help, sample answers, and validation checks.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Evidence Uploads</h2>
              <p className="mt-2 text-gray-700">Attach policies and reports; reuse across assessments.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Remediation Tasks</h2>
              <p className="mt-2 text-gray-700">Track follow-ups with owners, SLAs, and due dates.</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">How it works</h2>
            <ol className="mt-3 list-decimal pl-6 text-gray-700">
              <li>Receive invite link from your customer</li>
              <li>Complete the guided questionnaire and upload evidence</li>
              <li>Respond to remediation (if any) and submit</li>
            </ol>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/signup"
              className="inline-block rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
