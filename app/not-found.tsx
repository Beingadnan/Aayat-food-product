import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--luxury-cream)] px-6">
      <p
        className="font-[family-name:var(--font-playfair)] text-6xl font-semibold text-[var(--luxury-charcoal)] sm:text-8xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        404
      </p>
      <h1 className="mt-4 text-xl font-semibold text-[var(--luxury-charcoal)] sm:text-2xl">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-center text-[var(--luxury-muted)]">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--luxury-gold)] px-6 py-3 text-sm font-semibold text-[var(--luxury-cream)] transition hover:bg-[var(--luxury-gold-light)]"
      >
        Back to home
      </Link>
      <Link
        href="/products"
        className="mt-4 text-sm font-medium text-[var(--luxury-gold)] hover:underline"
      >
        View products
      </Link>
    </div>
  );
}
