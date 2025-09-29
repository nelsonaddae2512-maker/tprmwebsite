// pages/index.tsx
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FeatureGrid from "../components/FeatureGrid";

export default function Home() {
  return (
    <>
      <HeadSeo
        title="Truvern — Third-Party Risk, Simplified"
        description="Interactive vendor assessments with auto-scoring and remediation in one portal. Start free."
        url="https://www.truvern.com/"
      />

      <Nav />

      <main className="bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-indigo-700">
            Third-Party Risk, handled.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Interactive assessments, auto-scoring, and remediation in one vendor-friendly portal.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/signup"
              className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="/pricing"
              className="rounded-lg border border-gray-300 px-5 py-3 text-gray-900 hover:border-gray-400"
            >
              View Pricing
            </a>
          </div>
        </section>

        {/* Features pulled from shared FEATURES data */}
        <FeatureGrid />

        {/* CTA */}
        <section className="bg-indigo-600">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
            <h2 className="text-2xl font-bold">Start your first assessment in minutes</h2>
            <a
              href="/signup"
              className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 hover:bg-gray-100"
            >
              Start Free
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
