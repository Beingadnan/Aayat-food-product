import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding bg-[var(--luxury-cream)] text-center">
      <div className="container-wide">
        <h2
          className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[var(--luxury-charcoal)] sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready to order?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--luxury-muted)]">
          Explore our full range or get in touch for custom orders and gift boxes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#products"
            className="inline-flex items-center justify-center rounded-full bg-[var(--luxury-gold)] px-6 py-3 text-base font-semibold text-[var(--luxury-cream)] shadow-lg transition hover:bg-[var(--luxury-gold-light)]"
          >
            View all products
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--luxury-gold)] bg-transparent px-6 py-3 text-base font-semibold text-[var(--luxury-charcoal)] transition hover:bg-[var(--luxury-gold)]/10"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
