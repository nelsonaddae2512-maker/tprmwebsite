// pages/404.tsx
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="text-5xl font-extrabold text-indigo-700">404</h1>
        <p className="mt-3 text-gray-700">Page not found.</p>
        <Link href="/" className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white">
          Go home
        </Link>
      </div>
    </main>
  );
}
