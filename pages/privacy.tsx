// pages/privacy.tsx
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Truvern</title>
        <meta
          name="description"
          content="How Truvern collects, uses, and protects your data."
        />
      </Head>

      <Nav />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold text-indigo-700">Privacy Policy</h1>
        <p className="mt-4 text-gray-700">
          At Truvern, we value your trust. This Privacy Policy explains how we
          collect, use, and safeguard your information.
        </p>

        <section className="mt-8 space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p>Contact details, account info, usage and log data, and documents you upload.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">2. How We Use Information</h2>
            <p>To deliver services, provide support, improve the product, and meet legal obligations.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">3. Data Security</h2>
            <p>Encryption in transit/at rest, access controls, and audit logging.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">4. Your Rights</h2>
            <p>Request access, correction, deletion, or a copy of your data where applicable.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">5. Contact</h2>
            <p>
              Questions? Email the Trust team via the{" "}
              <a className="text-indigo-700 underline" href="/contact">contact page</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
