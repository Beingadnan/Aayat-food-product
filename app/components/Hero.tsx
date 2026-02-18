import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] flex-col items-center justify-center bg-[var(--aayat-purple)] px-6 py-16 text-center md:min-h-[75vh] md:py-20"
      aria-label="Aayat Tasty Treat — Premium Soan Papdi"
    >
      <div className="container-narrow relative z-10 flex flex-col items-center gap-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--aayat-yellow)]/40 bg-[var(--aayat-purple-dark)]/60 px-4 py-1.5 text-sm font-medium text-[var(--aayat-yellow)]">
          <span className="size-2 rounded-full bg-[var(--aayat-green-light)]" aria-hidden />
          FSSAI Certified • Kolkata
        </div>
        <h1
          className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-[var(--aayat-white)] sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          AAYAT{" "}
          <span className="block text-[var(--aayat-yellow)] sm:inline">Tasty Treat</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
          Premium Soan Papdi & Indian sweets. Pure Desi Ghee, handcrafted in Kolkata.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-[var(--aayat-yellow)] px-6 py-3 text-base font-semibold text-[var(--aayat-purple)] transition hover:bg-[var(--aayat-yellow-light)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aayat-yellow)]"
          >
            View Soan Papdi
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--aayat-yellow)] bg-transparent px-6 py-3 text-base font-semibold text-[var(--aayat-yellow)] transition hover:bg-[var(--aayat-yellow)]/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, var(--aayat-yellow) 0%, transparent 40%), radial-gradient(circle at 80% 20%, var(--aayat-green) 0%, transparent 30%)`,
        }}
      />
    </section>
  );
}
