import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ComparePlans from "../components/ComparePlans";
import PricingFAQ from "../components/PricingFAQ";

export default function Pricing() {
  return (
    <>
      <HeadSeo
        title="Pricing • Truvern"
        description="Simple, transparent pricing for vendor risk assessments, auto-scoring, and remediation."
        url="https://www.truvern.com/pricing"
      />
      <Nav />

      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Pricing that scales with your risk program
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Start free. Upgrade to Pro for unlimited assessments and built-in remediation. Enterprise for SSO & controls at scale.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/signup" className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">Get started</a>
            <a href="/contact" className="rounded-lg border border-gray-300 px-5 py-3 text-gray-800 hover:border-gray-400">Contact sales</a>
          </div>
        </div>
      </section>

      {/* Compare Plans */}
      <ComparePlans />

      {/* FAQ */}
      <PricingFAQ />

      <Footer />
    </>
  );
}
