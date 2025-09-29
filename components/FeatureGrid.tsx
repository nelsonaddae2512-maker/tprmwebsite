// components/FeatureGrid.tsx
import { FEATURES } from "./featuresData";

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-indigo-700 text-center">What you get</h2>
        <p className="mt-2 text-center text-gray-600">
          Everything you need to run vendor risk assessments end-to-end.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <article key={f.id} className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-700">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
