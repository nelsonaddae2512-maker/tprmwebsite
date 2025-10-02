// components/Nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Truvern Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-indigo-600">Truvern</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/vendors" className="hover:text-indigo-600">
            Vendors
          </Link>
          <Link href="/pricing" className="hover:text-indigo-600">
            Pricing
          </Link>
          <Link href="/trust" className="hover:text-indigo-600">
            Trust
          </Link>
          <Link href="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <div>
          <Link
            href="/signup"
            className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
