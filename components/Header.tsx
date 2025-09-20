// components/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust Center" },
  { href: "/vendors", label: "For Vendors" }, // ← new
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-indigo-600">TPRM</Link>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-3 py-2 rounded-lg hover:bg-gray-100 ${
                  pathname === l.href ? "text-indigo-600 font-medium" : "text-gray-700"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Link href="/signup" className="px-4 py-2 rounded-xl border text-sm">Start free</Link>
          <Link href="/demo" className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm">Book demo</Link>
        </div>
      </nav>
    </header>
  );
}
