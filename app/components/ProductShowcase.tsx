"use client";

import { useState } from "react";
import { products, type Product } from "../data/products";

function ProductCard({
  product,
  onViewDetails,
}: {
  product: Product;
  onViewDetails: () => void;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[var(--aayat-border)] bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--aayat-cream)]">
        {product.image ? (
            <>
            <img
              src={product.image}
              alt={`${product.name} — Aayat Tasty Treat Soan Papdi`}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const next = target.nextElementSibling as HTMLElement;
                if (next) next.style.display = "flex";
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-[var(--aayat-cream)] text-[var(--aayat-muted)]"
              style={{ display: "none" }}
              aria-hidden
            >
              <span className="text-sm">Product image</span>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-[var(--aayat-cream)] text-[var(--aayat-muted)] text-sm">
            Product image
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--aayat-purple)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--aayat-muted)]">{product.weight}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--foreground)]">
          {product.description}
        </p>
        <p className="mt-4 text-2xl font-bold text-[var(--aayat-green)]">
          ₹{product.price}
        </p>
        <button
          type="button"
          onClick={onViewDetails}
          className="mt-4 w-full rounded-lg bg-[var(--aayat-purple)] py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--aayat-purple-dark)]"
        >
          View details
        </button>
      </div>
    </article>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-[var(--aayat-cream)]">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[var(--aayat-muted)] text-sm">Product image</div>
          )}
        </div>
        <div className="p-6">
          <h2 id="modal-title" className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--aayat-purple)]" style={{ fontFamily: "var(--font-playfair)" }}>
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-[var(--aayat-muted)]">{product.weight}</p>
          <p className="mt-3 text-[var(--foreground)]">{product.description}</p>
          <p className="mt-4 text-2xl font-bold text-[var(--aayat-green)]">₹{product.price}</p>
          <a
            href={`mailto:aayatfoodproducts@gmail.com?subject=Order: Aayat Tasty Treat - ${encodeURIComponent(product.name)}`}
            className="mt-4 inline-block w-full rounded-lg bg-[var(--aayat-purple)] py-3 text-center font-semibold text-white transition hover:bg-[var(--aayat-purple-dark)]"
          >
            Order by email
          </a>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-[var(--aayat-muted)] hover:bg-white/80 hover:text-[var(--foreground)]"
          aria-label="Close"
        >
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      id="products"
      className="section-padding bg-[var(--aayat-cream)]"
      aria-labelledby="products-heading"
    >
      <div className="container-wide">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="products-heading"
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--aayat-purple)] sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Soan Papdi — Our Products
          </h2>
          <p className="mt-3 text-lg text-[var(--aayat-muted)]">
            Premium Soan Papdi with clear pricing. FSSAI certified. Order by phone or email.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard
                product={product}
                onViewDetails={() => setSelectedProduct(product)}
              />
            </li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
