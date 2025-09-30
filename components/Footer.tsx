// components/Footer.tsx
import Head from "next/head";
import Nav from "../components/Footer"; // ensure the path & case match the file name exactly

export default function Trust() {
  return (
    <>
      <Head><title>Trust • Truvern</title></Head>
      <Nav />
      <main style={{padding: 40}}>…</main>
    </>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-6xl p-6 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Truvern. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/pricing" className="hover:text-indigo-600">
              Pricing
            </Link>
            <Link href="/trust" className="hover:text-indigo-600">
              Trust
            </Link>
            <Link href="/privacy" className="hover:text-indigo-600">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-indigo-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
