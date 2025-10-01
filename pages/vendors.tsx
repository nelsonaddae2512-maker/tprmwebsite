// pages/vendors.tsx
import HeadSeo from "../components/HeadSeo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Vendors() {
  return (
    <>
      <HeadSeo
        title="For Vendors — Faster Security Reviews"
        description="Answer once, reuse everywhere. Truvern helps vendors finish security questionnaires faster with guidance, evidence uploads, and friendly reminders."
        url="https://www.truvern.com/vendors"
      />
      <Nav />

      <main className="bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-indigo-700 md:text-5xl">
            Faster, friendlier security questionnaires.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Answer once, reuse everywhere. Guided help, evidence upload,
            and clear status so you’re never guessing what’s next.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/signup"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-indigo-600 px-6 py-3 font-medium text-indigo-700 hover:bg-indigo-50"
            >
              Talk to us
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-14 md:grid-cols-3">
            {[
              {
                title: "Guided completion",
                desc: "Inline tips and examples cut down on back-and-forth.",
              },
              {
                title: "Evidence uploads",
                desc: "Attach policies, SOC 2, and diagrams once, reference anywhere.",
              },
              {
                title: "Clear status",
                desc: "See exactly what’s required, what’s reviewed, and what’s left.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-indigo-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-indigo-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-bold text-indigo-700">
              How it works
            </h2>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "1",
                  text: "Accept your customer’s invite and open the questionnaire.",
                },
                {
                  step: "2",
                  text: "Answer with guidance and upload evidence where needed.",
                },
                {
                  step: "3",
                  text: "Submit. Track reviews and respond to any follow-ups.",
                },
              ].map((s) => (
                <li
                  key={s.step}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                    {s.step}
                  </div>
                  <p className="mt-3 text-gray-800">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h3 className="text-2xl font-bold text-indigo-700">
            Save hours on every questionnaire.
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-700">
            Vendors use Truvern to finish reviews faster and keep deals moving.
          </p>
          <div className="mt-6">
            <a
              href="/signup"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Create your free account
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
