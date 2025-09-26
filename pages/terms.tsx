import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <HeadSeo
        title="Terms of Service | Truvern"
        description="The terms that govern your use of Truvern."
        url="https://www.truvern.com/terms"
      />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-700">Terms of Service</h1>
        <p className="mt-4 text-gray-700">
          By using Truvern, you agree to these terms. If you do not agree, do not use the service.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Use of Service</h2>
        <p className="mt-2 text-gray-700">
          You are responsible for your account and for complying with applicable laws and regulations.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Acceptable Use</h2>
        <p className="mt-2 text-gray-700">
          No unlawful, abusive, or disruptive activity. We may suspend accounts that violate these rules.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Intellectual Property</h2>
        <p className="mt-2 text-gray-700">
          Truvern and its content are protected. You retain rights to your uploaded content.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Disclaimers & Liability</h2>
        <p className="mt-2 text-gray-700">
          Service provided â€œas isâ€ without warranties. Liability is limited to the maximum extent permitted by law.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Changes</h2>
        <p className="mt-2 text-gray-700">
          We may update these terms. Continued use after changes indicates acceptance.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">
          Email: <a className="text-indigo-600 underline" href="mailto:legal@truvern.com">legal@truvern.com</a>
        </p>

        <p className="mt-10 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </main>
      <Footer />
    </>
  );
}

