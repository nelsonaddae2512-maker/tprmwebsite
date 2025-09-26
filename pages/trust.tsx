import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Trust() {
  return (
    <>
      <HeadSeo title="Trust Center | Truvern" url="https://www.truvern.com/trust" />
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-700">Trust Center</h1>
        <p className="mt-4 text-gray-700">Security, compliance, and availability.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6"><h3 className="font-semibold">Security</h3><ul className="mt-2 list-disc pl-5 text-gray-600"><li>TLS + at-rest encryption</li><li>Least privilege</li><li>Audit logging</li></ul></div>
          <div className="rounded-2xl border p-6"><h3 className="font-semibold">Compliance</h3><ul className="mt-2 list-disc pl-5 text-gray-600"><li>SOC 2 (in progress)</li><li>GDPR readiness</li><li>DPA/SCCs</li></ul></div>
          <div className="rounded-2xl border p-6"><h3 className="font-semibold">Availability</h3><ul className="mt-2 list-disc pl-5 text-gray-600"><li>Status & incidents</li><li>Backups/DR</li><li>Uptime targets</li></ul></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
