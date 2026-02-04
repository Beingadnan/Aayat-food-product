const badges = [
  {
    label: "FSSAI Certified",
    sub: "Licensed & compliant",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Vegetarian",
    sub: "100% veg",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    label: "Best before 6 months",
    sub: "From date of packaging",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Premium ingredients",
    sub: "Pure ghee, nuts & cardamom",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-[var(--luxury-border)] bg-[var(--aayat-white)] py-10 md:py-12" aria-label="Quality & trust">
      <div className="container-wide section-padding">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {badges.map(({ label, sub, icon }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-[var(--aayat-purple)]/10 text-[var(--aayat-purple)]">
                {icon}
              </span>
              <div>
                <p className="font-semibold text-[var(--luxury-charcoal)]">{label}</p>
                <p className="mt-0.5 text-xs text-[var(--luxury-muted)]">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
