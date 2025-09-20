// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl p-6 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} TPRM, Inc.</div>
        <nav className="flex gap-4">
          <Link href="/trust">Trust Center</Link>
          <Link href="/vendors">For Vendors</Link> {/* ← new */}
          <Link href="/pricing">Pricing</Link>
        </nav>
      </div>
    </footer>
  );
}
