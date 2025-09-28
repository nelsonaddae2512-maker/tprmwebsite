import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(r.ok ? "done" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold text-indigo-700">Contact Sales</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input name="name" placeholder="Full name" className="rounded border p-3" required />
        <input name="email" type="email" placeholder="Work email" className="rounded border p-3" required />
        <textarea name="message" placeholder="Tell us about your TPRM needs…" className="rounded border p-3" rows={5} required />
        <button disabled={status==="sending"} className="rounded bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700 disabled:opacity-60">
          {status==="sending" ? "Sending…" : "Send"}
        </button>
        {status==="done" && <p className="text-green-700">Thanks! We’ll be in touch.</p>}
        {status==="error" && <p className="text-red-700">Something went wrong. Try again.</p>}
      </form>
    </main>
  );
}
