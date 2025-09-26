// components/Nav.tsx
import Link from "next/link";

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
          <a
            href="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
