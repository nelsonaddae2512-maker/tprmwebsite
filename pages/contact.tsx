import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <HeadSeo title="Contact Sales | Truvern" url="https://www.truvern.com/contact" />
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-3xl font-bold text-indigo-700">Talk to Sales</h1>
        <p className="mt-3 text-gray-700">Tell us about your program and timelines.</p>

        <form
          action="https://formspree.io/f/your_form_id"
          method="POST"
          className="mt-8 grid gap-4"
        >
          <input name="name" required placeholder="Your name" className="rounded-lg border p-3" />
          <input name="email" type="email" required placeholder="Work email" className="rounded-lg border p-3" />
          <textarea name="message" required placeholder="What are you looking to achieve?" className="rounded-lg border p-3 h-32" />
          <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
