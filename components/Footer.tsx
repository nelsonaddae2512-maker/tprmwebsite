cd "C:\Users\MR.NELSON\tprmwebsite"

# 1) See ALL Footer.tsx files (there should only be one under components)
Get-ChildItem -Recurse -Filter Footer.tsx | Select-Object FullName

# 2) Delete ANY stray copies outside .\components\
#   (adjust path(s) printed above if different)
if (Test-Path .\Footer.tsx) { del .\Footer.tsx -Force }
if (Test-Path .\pages\Footer.tsx) { del .\pages\Footer.tsx -Force }

# 3) Force-overwrite the real component with correct content
@'
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
'@ | Out-File -Encoding utf8 -Force .\components\Footer.tsx

# 4) Sanity check the file now contains NO imports and only ONE default export
Get-Content .\components\Footer.tsx | Select-Object -First 5
