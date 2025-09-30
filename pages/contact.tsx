// pages/contact.tsx
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Footer";
import Footer from "../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) setStatus("Thanks, we'll be in touch!");
    else setStatus("Something went wrong. Please try again.");
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold text-indigo-700">Contact Sales</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input name="name" placeholder="Full name" className="rounded border p-3" required />
        <input name="email" type="email" placeholder="Email" className="rounded border p-3" required />
        <textarea name="message" placeholder="Message" rows={5} className="rounded border p-3" required />
        <button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </main>
  );
}
