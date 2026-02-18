"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products, featuredProducts, type Product } from "../data/products";

function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[var(--luxury-charcoal)]/70 backdrop-blur-sm" />
      <motion.div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-[var(--luxury-cream)] shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 w-full overflow-hidden bg-[var(--luxury-border)] md:h-72">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-8">
          {product.tagline && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--luxury-gold)]">
            {product.tagline}
          </p>
        )}
          <h2
            className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--luxury-charcoal)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.name}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--luxury-muted)]">
            {product.description}
          </p>
          <p className="mt-5 text-lg font-semibold text-[var(--luxury-gold)]">₹{product.price}</p>
          <button
            type="button"
            className="mt-6 rounded-full border-2 border-[var(--luxury-gold)] bg-transparent px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-[var(--luxury-gold)] hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-cream)] transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full p-2 text-[var(--luxury-muted)] hover:bg-white/80 hover:text-[var(--luxury-charcoal)]"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--luxury-cream)]">
      <Header />
      <main id="main" className="flex-1">
        {/* Page hero */}
        <section className="section-padding bg-[var(--aayat-purple)] text-center">
          <div className="container-wide">
            <p
              className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--aayat-yellow)]/90"
              style={{ letterSpacing: "0.25em" }}
            >
              Our range
            </p>
            <h1
              className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold tracking-tight text-[var(--aayat-white)] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Products
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--aayat-yellow)]/95">
              Handcrafted sweets with premium ingredients. FSSAI certified, traditional recipes.
            </p>
          </div>
        </section>

        {/* Featured / Special products */}
        {featuredProducts.length > 0 && (
          <section className="section-padding bg-[var(--luxury-cream)]">
            <div className="container-wide">
              <p
                className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--luxury-muted)]"
                style={{ letterSpacing: "0.2em" }}
              >
                Special
              </p>
              <h2
                className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[var(--luxury-charcoal)] sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Featured products
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {featuredProducts.map((product) => (
                  <motion.article
                    key={product.id}
                    className="group relative overflow-hidden rounded-2xl border border-[var(--luxury-border)] bg-[var(--aayat-white)] shadow-sm transition hover:border-[var(--luxury-gold)] hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                  >
                    <button
                      type="button"
                      className="flex w-full flex-col text-left"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luxury-border)]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-[var(--aayat-purple)] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--aayat-white)]">
                          Featured
                        </span>
                      </div>
                      <div className="p-6 md:p-8">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--luxury-gold)]">
                          {product.tagline}
                        </p>
                        <h3
                          className="mt-2 font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight text-[var(--luxury-charcoal)] sm:text-2xl"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {product.name}
                        </h3>
                        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-[var(--luxury-muted)]">
                          {product.description}
                        </p>
                        <p className="mt-4 text-base font-semibold text-[var(--luxury-gold)]">
                          ₹{product.price}
                        </p>
                        <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-widest text-[var(--luxury-gold)]">
                          View details →
                        </span>
                      </div>
                    </button>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All products grid */}
        <section className="section-padding border-t border-[var(--luxury-border)] bg-[var(--aayat-white)]">
          <div className="container-wide">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--luxury-muted)]"
              style={{ letterSpacing: "0.2em" }}
            >
              Full range
            </p>
            <h2
              className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[var(--luxury-charcoal)] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              All products
            </h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <motion.li
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--luxury-border)] bg-[var(--luxury-cream)] shadow-sm transition hover:border-[var(--luxury-gold)] hover:shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 18 }}
                >
                  <button
                    type="button"
                    className="flex h-full w-full flex-col text-left"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-[var(--luxury-border)]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      {product.tagline && (
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--luxury-gold)]">
                        {product.tagline}
                      </p>
                    )}
                      <h3
                        className="mt-1.5 font-[family-name:var(--font-playfair)] text-lg font-bold tracking-tight text-[var(--luxury-charcoal)]"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {product.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--luxury-muted)]">
                        {product.description}
                      </p>
                      <p className="mt-auto pt-4 text-base font-semibold text-[var(--luxury-gold)]">
                        ₹{product.price}
                      </p>
                      <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--luxury-gold)]">
                        View details
                      </span>
                    </div>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[var(--luxury-cream)] text-center">
          <div className="container-wide">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--luxury-muted)]">
              Need help choosing?
            </p>
            <p className="mt-2 text-lg text-[var(--luxury-charcoal)]">
              Get in touch for orders and custom gift boxes.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-[var(--luxury-gold)] bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--luxury-gold)] transition hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-cream)]"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence mode="wait">
        {selectedProduct && (
          <ProductDetailModal
            key={selectedProduct.id}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
