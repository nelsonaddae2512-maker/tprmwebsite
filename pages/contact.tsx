// pages/contact.tsx
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const form = e.currentTarget;
      const data = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      };
      // Replace with your real endpoint or email service
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <HeadSeo
        title="Contact Sales"
        description="Talk to Truvern about third-party risk assessments, pricing, and security."
        url="https://www.truvern.com/contact"
      />
      <Nav />

      <main className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-3xl font-bold text-indigo-700">Contact Sales</h1>
        <p className="mt-2 text-gray-700">
          Tell us a bit about your program and we’ll get back to you shortly.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <input name="name" placeholder="Full name" className="rounded border p-3" required />
          <input name="email" type="email" placeholder="Work email" className="rounded border p-3" required />
          <textarea name="message" placeholder="How can we help?" className="min-h-[120px] rounded border p-3" required />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "sent" && <p className="text-green-700">Thanks! We’ll be in touch.</p>}
          {status === "error" && <p className="text-red-700">Something went wrong. Please try again.</p>}
        </form>
      </main>

      <Footer />
    </>
  );
}
