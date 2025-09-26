// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-6xl p-6 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} Truvern. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/pricing" className="hover:text-indigo-600">Pricing</Link>
            <Link href="/trust" className="hover:text-indigo-600">Trust</Link>
            <a href="/security.pdf" className="hover:text-indigo-600">Security PDF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
