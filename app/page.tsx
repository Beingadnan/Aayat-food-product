import Header from "./components/Header";
import Hero from "./components/Hero";
import AppleScrollSection from "./components/AppleScrollSection";
import ProductShowcase from "./components/ProductShowcase";
import TrustSection from "./components/TrustSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <AppleScrollSection />
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
