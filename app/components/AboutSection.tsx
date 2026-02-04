export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--aayat-white)]">
      <div className="container-wide flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--aayat-purple)] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About AAYAT Food Products
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--aayat-muted)]">
            We craft premium Indian sweets with time-honoured recipes and the finest ingredients. Every pack of AAYAT Tasty Treat is made with care at our facility in Kolkata, ensuring consistent quality and authentic flavour.
          </p>
          <ul className="mt-8 space-y-3 text-[var(--aayat-muted)]">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--aayat-green)]" />
              <span>Mfd. & Mktd. by AAYAT FOOD PRODUCTS</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--aayat-green)]" />
              <span>Diamond Harbour Road, Kolkata-700027, WB</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--aayat-green)]" />
              <span>FSSAI License: 22820041000128</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6 rounded-2xl bg-[var(--aayat-purple)] p-8 text-[var(--aayat-white)] md:p-10">
          <h3 className="text-xl font-semibold text-[var(--aayat-yellow)]">Why choose us</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[var(--aayat-yellow)]" aria-hidden>✓</span>
              <span>Pure ingredients — clarified sugar, gram flour, edible vegetable oil, cardamom, almond, pistachio</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--aayat-yellow)]" aria-hidden>✓</span>
              <span>Vegetarian • FSSAI certified • Best before 6 months from packaging</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--aayat-yellow)]" aria-hidden>✓</span>
              <span>Traditional methods and consistent quality for every batch</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
