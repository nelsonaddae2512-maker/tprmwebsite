import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <HeadSeo
        title="Privacy Policy | Truvern"
        description="How Truvern collects, uses, and protects your information."
        url="https://www.truvern.com/privacy"
      />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-700">Privacy Policy</h1>
        <p className="mt-4 text-gray-700">
          We respect your privacy. This policy explains what we collect, why, and how we protect it.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Information We Collect</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-700">
          <li>Account details (name, work email)</li>
          <li>Usage data (pages visited, actions taken)</li>
          <li>Support communications</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">How We Use Information</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-700">
          <li>Provide and improve the Truvern service</li>
          <li>Security, fraud prevention, and diagnostics</li>
          <li>Customer support and service notifications</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Data Retention & Security</h2>
        <p className="mt-2 text-gray-700">
          We apply least privilege, encryption in transit and at rest, and regular backups.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Your Rights</h2>
        <p className="mt-2 text-gray-700">
          Contact us to access, correct, or delete your personal data where applicable.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">
          Email: <a className="text-indigo-600 underline" href="mailto:privacy@truvern.com">privacy@truvern.com</a>
        </p>

        <p className="mt-10 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </main>
      <Footer />
    </>
  );
}
