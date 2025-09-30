// components/Nav.tsx
import Head from "next/head";
import Nav from "../components/Nav"; // ensure the path & case match the file name exactly

export default function Trust() {
  return (
    <>
      <Head><title>Trust • Truvern</title></Head>
      <Nav />
      <main style={{padding: 40}}>…</main>
    </>
  );
}

export default function Nav() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Truvern
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/vendors" className="hover:text-indigo-600">Vendors</Link>
          <Link href="/pricing" className="hover:text-indigo-600">Pricing</Link>
          <Link href="/trust" className="hover:text-indigo-600">Trust</Link>
          <Link
            href="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
