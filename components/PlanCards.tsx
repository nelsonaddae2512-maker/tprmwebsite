import Link from "next/link";

type Billing = "monthly" | "annual";

type Plan = {
  name: "Free" | "Pro" | "Enterprise";
  monthly: number;
  annual: number;
  blurb: string;
  highlight?: boolean;
  cta: { label: string; href: string };
  features: string[];
  contact?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    blurb: "1 assessment • 1 seat • PDF export",
    cta: { label: "Start free", href: "/signup" },
    features: ["1 assessor seat", "1 active assessment", "PDF export"],
  },
  {
    name: "Pro",
    monthly: 49,
    annual: 39, // billed yearly (approx 20% savings)
    blurb: "Unlimited assessments • Remediation • Heatmap",
    highlight: true,
    cta: { label: "Upgrade to Pro", href: "/signup" },
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
    contact: true,
    features: ["SSO/SAML", "Advanced exports", "Security packet", "Dedicated support"],
  },
];

function Price({ plan, billing }: { plan: Plan; billing: Billing }) {
  if (plan.name === "Enterprise") {
    return <div className="text-3xl font-extrabold text-gray-900">Custom</div>;
  }
  if (plan.name === "Free") {
    return <div className="text-3xl font-extrabold text-gray-900">$0</div>;
  }
  const value = billing === "monthly" ? plan.monthly : plan.annual;
  return (
    <div className="flex items-baseline gap-2">
      <div className="text-4xl font-extrabold text-gray-900">${value}</div>
      <div className="text-gray-600">
        /mo{" "}
        {billing === "annual" && (
          <span className="ml-1 rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
            billed yearly
          </span>
        )}
      </div>
    </div>
  );
}

export default function PlanCards({ billing }: { billing: Billing }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="plans-heading">
      <h2 id="plans-heading" className="sr-only">
        Pricing plans
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <article
            key={p.name}
            className={`relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md
              ${p.highlight ? "border-indigo-600 ring-1 ring-indigo-600" : "border-gray-200"}`}
            aria-label={`${p.name} plan`}
          >
            <header className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.highlight && (
                <span
                  className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                  aria-label="Most popular"
                >
                  Most popular
                </span>
              )}
            </header>

            <p className="mt-2 text-gray-600">{p.blurb}</p>

            <div className="mt-6">
              <Price plan={p} billing={billing} />
              {p.name === "Pro" && billing === "annual" && (
                <p className="mt-2 text-xs text-gray-500">
                  Save ~20% vs monthly (${p.monthly}/mo billed monthly).
                </p>
              )}
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1" aria-hidden>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={p.cta.href}
              className={`mt-6 inline-block w-full rounded-lg px-4 py-3 text-center font-medium transition
                ${p.highlight
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "border border-gray-300 text-gray-900 hover:border-gray-400"}`}
              aria-label={`${p.cta.label} for ${p.name}`}
            >
              {p.cta.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
