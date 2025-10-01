// pages/terms.tsx
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Truvern</title>
        <meta
          name="description"
          content="Review the Terms of Service for using Truvern’s platform."
        />
      </Head>

      <Nav />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold text-indigo-700">Terms of Service</h1>
        <p className="mt-4 text-gray-700">
          These Terms of Service (“Terms”) govern your use of Truvern’s platform and
          services. By accessing or using Truvern, you agree to these Terms.
        </p>

        <section className="mt-8 space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By signing up for Truvern, you accept and agree to abide by these Terms
              and our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Use of Service</h2>
            <p>
              You may use Truvern only for lawful purposes and in accordance with
              these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and activities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
            <p>
              Truvern is not liable for indirect or consequential damages arising from
              use of the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Contact</h2>
            <p>
              For questions, please contact us via the{" "}
              <a className="text-indigo-700 underline" href="/contact">
                contact page
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
