"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--aayat-border)] bg-[var(--aayat-white)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--aayat-white)]/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--aayat-purple)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="container-wide flex h-14 items-center justify-between gap-6 px-4 py-3 md:h-14 md:px-6 md:py-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-[var(--aayat-cream)]"
          aria-label="Aayat Tasty Treat — Home"
        >
          <span
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-tight text-[var(--aayat-green)] md:text-xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            AAYAT
          </span>
          <span
            className="hidden text-sm font-medium italic text-[var(--aayat-muted)] sm:inline"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tasty Treat
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--aayat-cream)] hover:text-[var(--aayat-purple)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-[var(--foreground)] hover:bg-[var(--aayat-cream)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-[var(--aayat-border)] bg-[var(--aayat-white)] transition-[grid-template-rows] duration-200 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--aayat-cream)] hover:text-[var(--aayat-purple)]"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
