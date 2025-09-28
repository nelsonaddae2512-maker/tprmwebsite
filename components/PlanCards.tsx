import Link from "next/link";
import { FEATURES } from "./featuresData";

type Billing = "monthly" | "annual";

type Plan = {
  name: "Free" | "Pro" | "Enterprise";
  monthly: number;
  annual: number;
  blurb: string;
  highlight?: boolean;
  cta: { label: string; href: string };
  include: string[]; // IDs from FEATURES
  contact?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    blurb: "Get started with vendor assessments.",
    cta: { label: "Start free", href: "/signup" },
    include: ["interactive", "exports"],
  },
  {
    name: "Pro",
    monthly: 49,
    annual: 39,
    blurb: "Unlimited assessments, remediation & risk heatmap.",
    highlight: true,
    cta: { label: "Upgrade to Pro", href: "/signup" },
    include: ["interactive", "scoring", "remediation", "exports"],
  },
  {
    name: "Enterprise",
    monthly: 0,
    annual: 0,
    blurb: "For teams needing scale & compliance.",
    cta: { label: "Contact sales", href: "/contact" },
    contact: true,
    include: ["interactive", "scoring", "remediation", "exports", "vendor", "security"],
  },
];

function Price({ plan, billing }: { plan: Plan; billing: Billing }) {
  if (plan.name === "Enterprise") return <div className="text-3xl font-extrabold text-gray-900">Custom</div>;
  if (plan.name === "Free") return <div className="text-3xl font-extrabold text-gray-900">$0</div>;

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
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => {
          const includedFeatures = FEATURES.filter((f) => plan.include.includes(f.id));
          return (
            <article
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                plan.highlight ? "border-indigo-600 ring-1 ring-indigo-600" : "border-gray-200"
              }`}
            >
              <header className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.highlight && (
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                    Most popular
                  </span>
                )}
              </header>

              <p className="mt-2 text-gray-600">{plan.blurb}</p>

              <div className="mt-6">
                <Price plan={plan} billing={billing} />
              </div>

              <h4 className="mt-6 text-sm font-semibold text-gray-900">What’s included</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {includedFeatures.map((f) => (
                  <li key={f.id} className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">✓</span>
                    <span>{f.title}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`mt-6 inline-block w-full rounded-lg px-4 py-3 text-center font-medium transition ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 text-gray-900 hover:border-gray-400"
                }`}
              >
                {plan.cta.label}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
