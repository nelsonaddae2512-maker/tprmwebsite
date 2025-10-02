// components/Nav.tsx
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// throttle helper
function throttle<T extends (...args: any[]) => void>(fn: T, ms = 100) {
  let last = 0;
  let timer: any;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remain = ms - (now - last);
    if (remain <= 0) {
      last = now;
      fn(...args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = Date.now();
        fn(...args);
      }, remain);
    }
  };
}

// smooth scroll with offset for sticky header
function scrollToHash(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  const sections = useMemo(
    () => [
      { id: "features", label: "Features" },
      { id: "how-it-works", label: "How it works" },
      { id: "pricing", label: "Pricing" },
      { id: "testimonials", label: "Customers" },
    ],
    []
  );

  const enableSpy = pathname === "/";

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scrollspy + deep link handling
  useEffect(() => {
    if (!enableSpy) {
      setActiveHash("");
      return;
    }

    const OFFSET = 120;

    const computeActive = () => {
      let bestId = "";
      let bestTop = -Infinity;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        if (window.scrollY >= top && top > bestTop) {
          bestTop = top;
          bestId = s.id;
        }
      }
      setActiveHash(bestId);
    };

    // initial: respect deep link if present
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      setActiveHash(hash);
      // scroll to it after mount to avoid layout jank
      setTimeout(() => scrollToHash(hash, 90), 0);
    } else {
      computeActive();
    }

    const onScroll = throttle(computeActive, 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enableSpy, sections]);

  const handleNavClick = () => setOpen(false);

  const linkBase = "transition hover:text-indigo-600";
  const activeRoute = "text-indigo-700 underline underline-offset-4";
  const activeHashCls = "text-indigo-700 underline underline-offset-4";

  // route links
  const routeLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={`${linkBase} ${pathname === href ? activeRoute : ""}`}
      onClick={handleNavClick}
    >
      {label}
    </Link>
  );

  // hash links (with offset scrolling)
  const hashLink = (hashId: string, label: string) => (
    <a
      key={hashId}
      href={`/#${hashId}`}
      className={`${linkBase} ${enableSpy && activeHash === hashId ? activeHashCls : ""}`}
      onClick={(e) => {
        // If on homepage, intercept to smooth scroll with offset
        if (enableSpy) {
          e.preventDefault();
          setOpen(false);
          scrollToHash(hashId, 90);
          history.replaceState(null, "", `/#${hashId}`); // update URL without jumping
        }
      }}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" onClick={handleNavClick}>
          <img src="/logo.svg" alt="Truvern Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-indigo-600">Truvern</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {hashLink("features", "Features")}
          {hashLink("how-it-works", "How it works")}
          {hashLink("pricing", "Pricing")}
          {hashLink("testimonials", "Customers")}
          {routeLink("/vendors", "Vendors")}
          {routeLink("/trust", "Trust")}
          {routeLink("/contact", "Contact")}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/signup"
            className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon: hamburger / close */}
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t bg-white transition-[max-height] duration-300 ease-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="grid gap-3 text-sm font-medium">
            {hashLink("features", "Features")}
            {hashLink("how-it-works", "How it works")}
            {hashLink("pricing", "Pricing")}
            {hashLink("testimonials", "Customers")}
            {routeLink("/vendors", "Vendors")}
            {routeLink("/trust", "Trust")}
            {routeLink("/contact", "Contact")}
          </div>
          <div className="mt-4">
            <Link
              href="/signup"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition"
              onClick={handleNavClick}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
