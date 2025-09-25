import Head from "next/head";

export default function Trust() {
  return (
    <>
      <Head>
        <title>Trust Center | Truvern</title>
        <meta name="description" content="Security, compliance, and availability of the Truvern platform." />
      </Head>

      <main className="mx-auto max-w-5xl p-8">
        <h1 className="text-4xl font-bold text-indigo-600">Trust Center</h1>
        <p className="mt-4 text-gray-700">
          We publish our security controls, certifications, and status to help you assess risk quickly.
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Security</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-600">
              <li>Encryption in transit & at rest</li>
              <li>Least privilege & audit logging</li>
              <li>Patch & vulnerability management</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Compliance</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-600">
              <li>SOC 2 (in progress)</li>
              <li>GDPR readiness</li>
              <li>DPA & SCCs on request</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Availability</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-600">
              <li>Status page & incident history</li>
              <li>Backups & disaster recovery</li>
              <li>Uptime targets & SLAs</li>
            </ul>
          </div>
        </section>

        <div className="mt-10">
          <a href="/security.pdf" className="text-indigo-600 underline hover:text-indigo-700">
            Download Security Overview (PDF)
          </a>
        </div>
      </main>
    </>
  );
}
