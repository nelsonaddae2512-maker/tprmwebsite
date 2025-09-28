import { useState } from "react";
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ComparePlans from "../components/ComparePlans";
import PricingFAQ from "../components/PricingFAQ";
import PricingToggle from "../components/PricingToggle";
import PlanCards from "../components/PlanCards";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <HeadSeo
        title="Pricing • Truvern"
        description="Simple, transparent pricing for vendor risk assessments, auto-scoring, and remediation."
        url="https://www.truvern.com/pricing"
      />
      <Nav />

      {/* Hero + Toggle */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Pricing that scales with your risk program
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Start free. Upgrade to Pro for unlimited assessments and built-in remediation. Enterprise for SSO & controls at scale.
          </p>

          <div className="mt-6 flex justify-center">
            <PricingToggle value={billing} onChange={setBilling} />
          </div>
        </div>
      </section>

      {/* Plan Cards react to toggle */}
      <PlanCards billing={billing} />

      {/* Compare Plans + FAQ */}
      <ComparePlans />
      <PricingFAQ />

      <Footer />
    </>
  );
}
