export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-10">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-600">
        The page youâ€™re looking for doesnâ€™t exist. Try the menu or go back to the homepage.
      </p>
      <a href="/" className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
        Back to Home
      </a>
    </main>
  );
}
