import React from "react";

type QA = { q: string; a: React.ReactNode };

const faqs: QA[] = [
  {
    q: "What counts as an active assessment?",
    a: "Any vendor questionnaire that is open for responses or review. Closed/archived ones do not count toward limits.",
  },
  {
    q: "Can vendors access the portal for free?",
    a: "Yes. Vendors always complete assessments for free. Only your team’s seats are billable.",
  },
  {
    q: "Is there a free trial of Pro?",
    a: "Yes, you can start on Free and upgrade to Pro anytime. We also offer a 14-day Pro trial on request.",
  },
  {
    q: "Do you support custom questionnaires or frameworks?",
    a: "Pro supports custom sections and questions. Enterprise includes tailored mappings (e.g., SOC 2, ISO 27001, SIG).",
  },
  {
    q: "What integrations are available?",
    a: "Email notifications are built-in. Enterprise includes SSO/SAML and offers custom exports & API access on request.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-bold text-indigo-700">Pricing FAQ</h2>
      <div className="mt-6 divide-y rounded-xl border bg-white">
        {faqs.map((item, i) => (
          <details key={i} className="group">
            <summary className="cursor-pointer list-none select-none px-5 py-4 font-medium text-gray-900 flex items-center justify-between">
              <span>{item.q}</span>
              <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700">{item.a}</div>
            {i < faqs.length - 1 && <div className="h-px bg-gray-100" />}
          </details>
        ))}
      </div>
    </section>
  );
}
