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
          content="Learn how Truvern protects your privacy and data when you use our services."
        />
      </Head>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold text-indigo-700">Privacy Policy</h1>
        <p className="mt-4 text-gray-700">
          At Truvern, we value your trust. This Privacy Policy explains how we
          collect, use, and safeguard your information.
        </p>
        <section className="mt-8 space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when using our
            platform, such as your name, email, and business details.
          </p>

          <h2 className="text-xl font-semibold">2. How We Use Information</h2>
          <p>
            Your data is used to provide services, improve assessments, and
            ensure compliance with applicable laws.
          </p>

          <h2 className="text-xl font-semibold">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-semibold">4. Your Rights</h2>
          <p>
            You have the right to request access, correction, or deletion of
            your data at any time.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
