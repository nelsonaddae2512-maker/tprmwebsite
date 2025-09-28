import Link from "next/link";

type Billing = "monthly" | "annual";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    blurb: "1 assessment, 1 seat, PDF export",
    cta: { label: "Start free", href: "/signup" },
    highlight: false,
    features: ["1 assessor seat", "1 active assessment", "PDF export"],
  },
  {
    name: "Pro",
    monthly: 49,
    annual: 39, // billed yearly (save ~20%)
    blurb: "Unlimited assessments with remediation & risk heatmap",
    cta: { label: "Upgrade to Pro", href: "/signup" },
    highlight: true,
    features: [
      "3 team seats",
      "Unlimited assessments",
      "Remediation workflows",
      "Portfolio risk heatmap",
      "CSV & PDF exports",
    ],
  },
  {
    name: "Enterprise",
    monthly: 0,
    annual: 0,
    blurb: "Security & scale for larger programs",
    cta: { label: "Contact sales", href: "/contact" },
    highlight: false,
    features: ["SSO/SAML", "Advanced exports", "Security packet", "Dedicated support"],
    contact: true,
  },
];

export default function PlanCards({ billing }: { billing: Billing }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const isFree = p.name === "Free";
          const isEnterprise = p.contact;
          const price =
            isFree || isEnterprise
              ? 0
              : billing === "monthly"
              ? p.monthly
              : p.annual;

          return (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                p.highlight ? "border-indigo-600 shadow-md" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.highlight && (
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                    Most popular
                  </span>
                )}
              </div>

              <p className="mt-2 text-gray-600">{p.blurb}</p>

              <div className="mt-6">
                {isEnterprise ? (
                  <div className="text-3xl font-extrabold text-gray-900">Custom</div>
                ) : isFree ? (
                  <div className="text-3xl font-extrabold text-gray-900">$0</div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-extrabold text-gray-900">
                      ${price}
                    </div>
                    <div className="text-gray-600">
                      /{billing === "monthly" ? "mo" : "mo"}{" "}
                      {billing === "annual" && (
                        <span className="ml-1 text-xs rounded bg-green-50 px-2 py-0.5 font-medium text-green-700">
                          billed yearly
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.cta.href}
                className={`mt-6 inline-block w-full rounded-lg px-4 py-3 text-center font-medium transition ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 text-gray-900 hover:border-gray-400"
                }`}
              >
                {p.cta.label}
              </Link>

              {!isFree && !isEnterprise && billing === "annual" && (
                <p className="mt-2 text-xs text-gray-500">
                  Save ~20% vs monthly. ${p.monthly}/mo billed monthly.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
