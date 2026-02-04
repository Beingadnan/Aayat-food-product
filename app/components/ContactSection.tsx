export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[var(--aayat-cream)]">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--aayat-purple)] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-[var(--aayat-muted)]">
            For suggestions, orders & comments we’d love to hear from you.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 md:gap-16">
          <a
            href="mailto:aayatfoodproducts@gmail.com"
            className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--aayat-border)] bg-[var(--aayat-white)] px-8 py-6 text-center shadow-sm transition hover:border-[var(--aayat-purple)]/30 hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-[var(--aayat-purple)]/10 text-[var(--aayat-purple)]">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="font-medium text-[var(--foreground)]">Email</span>
            <span className="text-sm text-[var(--aayat-muted)] break-all">aayatfoodproducts@gmail.com</span>
          </a>
          <a
            href="tel:+919142620238"
            className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--aayat-border)] bg-[var(--aayat-white)] px-8 py-6 text-center shadow-sm transition hover:border-[var(--aayat-purple)]/30 hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-[var(--aayat-green)]/10 text-[var(--aayat-green)]">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="font-medium text-[var(--foreground)]">Call us</span>
            <span className="text-sm text-[var(--aayat-muted)]">+91 9142620238</span>
          </a>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--aayat-border)] bg-[var(--aayat-white)] px-8 py-6 text-center shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-full bg-[var(--aayat-yellow)]/20 text-[var(--aayat-purple)]">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="font-medium text-[var(--foreground)]">Address</span>
            <span className="text-sm text-[var(--aayat-muted)]">
              Diamond Harbour Road,<br />Kolkata-700027, WB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
