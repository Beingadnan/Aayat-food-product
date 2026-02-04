const products = [
  {
    name: "Elaichi Soan Papdi",
    tagline: "Cardamom-infused flakes",
    description: "Clarified sugar, gram flour, edible vegetable oil, refined wheat flour, glucose, cardamom, almond, pistachio & wheat fibre.",
    highlight: "Best before 6 months from date of packaging.",
  },
  {
    name: "Desi Ghee Soan Papdi",
    tagline: "Pure ghee, hand-pulled texture",
    description: "The golden standard. Melt-in-the-mouth magic with layers so thin they dissolve on your tongue.",
    highlight: "100% pure Desi Ghee.",
  },
  {
    name: "Saffron Pistachio Soan Papdi",
    tagline: "Royal indulgence",
    description: "Premium saffron and crushed pistachios in every flake. A festive favourite.",
    highlight: "Premium nuts & saffron.",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-[var(--aayat-cream)]">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--aayat-purple)] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Sweets
          </h2>
          <p className="mt-4 text-lg text-[var(--aayat-muted)]">
            Traditional recipes, premium ingredients, and FSSAI-certified quality in every pack.
          </p>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.name}
              className="group flex flex-col rounded-2xl border border-[var(--aayat-border)] bg-[var(--aayat-white)] p-6 shadow-sm transition hover:border-[var(--aayat-purple)]/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--aayat-purple)]/10 text-[var(--aayat-purple)] transition group-hover:bg-[var(--aayat-purple)]/20">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--aayat-green)]">{product.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--aayat-muted)]">
                {product.description}
              </p>
              <p className="mt-4 text-xs font-medium text-[var(--aayat-purple)]">{product.highlight}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
