// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-gray-500">© 2025 Truvern. All rights reserved.</p>
        <nav className="flex gap-6 text-sm">
          <a href="/pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="/trust" className="hover:text-indigo-600">Trust</a>
          <a href="/privacy" className="hover:text-indigo-600">Privacy</a>
          <a href="/terms" className="hover:text-indigo-600">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
