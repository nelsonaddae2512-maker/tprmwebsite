import { useState } from "react";

type Billing = "monthly" | "annual";

export default function PricingToggle({
  value,
  onChange,
}: {
  value: Billing;
  onChange: (v: Billing) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
          value === "monthly"
            ? "bg-indigo-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange("annual")}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
          value === "annual"
            ? "bg-indigo-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        Annual <span className="ml-1 text-xs opacity-90">(save 20%)</span>
      </button>
    </div>
  );
}
