import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <>
      <HeadSeo title="Create Account | Truvern" url="https://www.truvern.com/signup" />
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-3xl font-bold text-indigo-700">Create your account</h1>
        <p className="mt-3 text-gray-700">Weâ€™ll email you a link to get started.</p>
        <form action="https://formspree.io/f/your_form_id" method="POST" className="mt-8 grid gap-4">
          <input name="email" type="email" required placeholder="Work email" className="rounded-lg border p-3" />
          <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
            Continue
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
