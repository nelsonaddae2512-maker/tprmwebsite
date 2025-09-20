// app/vendors/page.tsx
export default function VendorsPage() {
  return (
    <main className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-600 text-center">
        For Vendors
      </h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Simple, secure, and free. Respond to customer assessments with confidence.
      </p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Why Vendors Like It</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>No spreadsheets — one secure portal</li>
            <li>Guided questionnaire with examples</li>
            <li>Upload evidence once, not over email</li>
            <li>Clear remediation tasks if needed</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
            <li>Accept the invite from your customer</li>
            <li>Fill in guided questions & upload docs</li>
            <li>Submit securely — your customer gets instant results</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Vendor FAQs</h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-medium">Do I pay for this?</dt>
              <dd className="text-gray-600">No. The requesting company covers the cost.</dd>
            </div>
            <div>
              <dt className="font-medium">Is my data secure?</dt>
              <dd className="text-gray-600">Yes. All answers are encrypted and access-limited.</dd>
            </div>
            <div>
              <dt className="font-medium">Can I reuse answers?</dt>
              <dd className="text-gray-600">Yes. You can export a copy for your records or other clients.</dd>
            </div>
            <div>
              <dt className="font-medium">How long will it take?</dt>
              <dd className="text-gray-600">Most vendors complete an assessment in under 1 hour.</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="mt-12 text-center">
        <a
          href="/vendor-login"
          className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700"
        >
          Vendor Login
        </a>
      </div>
    </main>
  );
}
