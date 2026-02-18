import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import TrustSection from "./components/TrustSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { products } from "./data/products";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Soan Papdi — Aayat Tasty Treat Products",
  description: "Premium Soan Papdi and Indian sweets from AAYAT Food Products, Kolkata.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "INR",
      },
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <ProductShowcase />
        <TrustSection />
        <AboutSection />
        <ContactSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
