import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <HeadSeo title="Pricing | Truvern" url="https://www.truvern.com/pricing" />
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-700">Pricing</h1>
        <p className="mt-4 text-gray-700">Start free and scale as you grow.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 text-center"><h3 className="text-xl font-semibold">Free</h3><p className="mt-2 text-gray-600">1 assessor, 1 active assessment, PDF export.</p></div>
          <div className="rounded-2xl border-2 border-indigo-600 p-6 text-center shadow-sm"><h3 className="text-xl font-semibold text-indigo-600">Pro</h3><p className="mt-2 text-gray-600">3 users, unlimited assessments, remediation, heatmap.</p></div>
          <div className="rounded-2xl border p-6 text-center"><h3 className="text-xl font-semibold">Enterprise</h3><p className="mt-2 text-gray-600">SSO, advanced exports, dedicated support.</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
