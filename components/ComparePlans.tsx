import React from "react";

const rows = [
  { feature: "Active assessments", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Assessor seats", free: "1", pro: "3", enterprise: "Custom" },
  { feature: "Interactive questionnaires", free: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Auto risk scoring", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Remediation workflows", free: "—", pro: "✓", enterprise: "✓ (SLAs)" },
  { feature: "Exports (PDF/CSV)", free: "✓", pro: "✓", enterprise: "Advanced" },
  { feature: "Portfolio heatmap", free: "—", pro: "✓", enterprise: "✓ (Custom views)" },
  { feature: "SSO / SAML", free: "—", pro: "—", enterprise: "✓" },
  { feature: "Support", free: "Community", pro: "Email", enterprise: "Dedicated" },
];

export default function ComparePlans() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-indigo-700">Compare plans</h2>
      <p className="mt-2 text-gray-600">Pick the plan that fits your TPRM maturity.</p>

      {/* Mobile cards */}
      <div className="mt-8 grid gap-6 md:hidden">
        {rows.map((r) => (
          <div key={r.feature} className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="font-medium text-gray-900">{r.feature}</div>
            <div className="mt-3 grid grid-cols-3 text-center text-sm">
              <div>
                <div className="font-semibold">Free</div>
                <div className="mt-1 text-gray-700">{r.free}</div>
              </div>
              <div>
                <div className="font-semibold text-indigo-700">Pro</div>
                <div className="mt-1 text-gray-700">{r.pro}</div>
              </div>
              <div>
                <div className="font-semibold">Enterprise</div>
                <div className="mt-1 text-gray-700">{r.enterprise}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="mt-8 hidden overflow-x-auto md:block">
        <table className="min-w-full border-separate border-spacing-0 rounded-xl border bg-white shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="sticky left-0 z-10 border-b px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Feature</th>
              <th className="border-b px-4 py-3 text-sm font-semibold text-gray-900">Free</th>
              <th className="border-b px-4 py-3 text-sm font-semibold text-indigo-700">Pro</th>
              <th className="border-b px-4 py-3 text-sm font-semibold text-gray-900">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.feature} className={i % 2 ? "bg-white" : "bg-gray-50/60"}>
                <td className="sticky left-0 z-10 whitespace-nowrap border-t px-4 py-3 text-sm text-gray-800 bg-inherit">
                  {r.feature}
                </td>
                <td className="border-t px-4 py-3 text-center text-sm text-gray-800">{r.free}</td>
                <td className="border-t px-4 py-3 text-center text-sm font-semibold text-indigo-700">{r.pro}</td>
                <td className="border-t px-4 py-3 text-center text-sm text-gray-800">{r.enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/signup" className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">Start free</a>
        <a href="/contact" className="rounded-lg border border-gray-300 px-5 py-3 text-gray-800 hover:border-gray-400">Talk to sales</a>
      </div>
    </section>
  );
}
