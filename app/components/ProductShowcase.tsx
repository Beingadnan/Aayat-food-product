"use client";

import { useRef, useState, useEffect } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "elaichi",
    name: "Elaichi Soan Papdi",
    tagline: "Cardamom-infused flakes",
    description:
      "Clarified sugar, gram flour, edible vegetable oil, cardamom, almond, pistachio. Best before 6 months from packaging.",
    price: "From ₹199",
    gridClass: "col-span-2 row-span-1",
    parallaxSpeed: 0.04,
    gradient: "from-amber-100/90 via-amber-50/80 to-[var(--luxury-cream)]",
    image: "/product/soan-papdi-284.jpg",
    cardBg: "bg-emerald-50/70",
  },
  {
    id: "desi-ghee",
    name: "Desi Ghee Soan Papdi",
    tagline: "Pure ghee, hand-pulled",
    description: "The golden standard. Melt-in-the-mouth layers. 100% pure Desi Ghee.",
    price: "From ₹449",
    gridClass: "col-span-1 row-span-1",
    parallaxSpeed: -0.02,
    gradient: "from-amber-200/70 via-yellow-50/70 to-[var(--luxury-cream)]",
    image: "/product/fresh-premium-kumaoni-soan-papdi-qo60ablv.jpg",
    cardBg: "bg-amber-50/80",
  },
  {
    id: "saffron",
    name: "Saffron Pistachio",
    tagline: "Royal indulgence",
    description: "Premium saffron and crushed pistachios in every flake.",
    price: "From ₹549",
    gridClass: "col-span-1 row-span-1",
    parallaxSpeed: 0.03,
    gradient: "from-rose-100/60 via-amber-50/70 to-[var(--luxury-cream)]",
    image: "/product/istockphoto-450453423-612x612.jpg",
    cardBg: "bg-rose-50/80",
  },
  {
    id: "gift-pack",
    name: "Premium Gift Box",
    tagline: "Curated selection",
    description: "An assortment of our finest Soan Papdi. Perfect for gifting.",
    price: "From ₹899",
    gridClass: "col-span-2 row-span-1",
    parallaxSpeed: -0.03,
    gradient: "from-stone-200/50 via-amber-50/60 to-[var(--luxury-cream)]",
    image: "/product/360_F_1629229340_OH1wCN8mKC3NQ4l4qHKG15drclxDsCXn.jpg",
    cardBg: "bg-stone-100/80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
    },
  },
};

function ProductCard({
  product,
  parallaxY,
  onQuickView,
}: {
  product: (typeof products)[0];
  parallaxY: MotionValue<number>;
  onQuickView: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      className={`relative overflow-hidden rounded-2xl ${product.gridClass}`}
      variants={itemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        role="button"
        tabIndex={0}
        className={`group relative flex h-full min-h-[320px] cursor-pointer flex-col rounded-2xl border border-[var(--luxury-border)] p-8 shadow-sm md:min-h-[380px] ${product.cardBg ?? "bg-[var(--luxury-cream)]"}`}
        whileHover={{ borderColor: "var(--luxury-gold)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={() => onQuickView()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onQuickView();
          }
        }}
      >
        {/* Product image with parallax */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-2xl"
          style={{ y: parallaxY }}
        >
          <motion.div
            layoutId={`product-image-${product.id}`}
            className={`relative absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br ${product.gradient}`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{ scale: 1.05 }}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <>
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(255,255,255,0.4) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute bottom-1/4 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-amber-300/30 blur-2xl"
                  aria-hidden
                />
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Content overlay — premium text hierarchy */}
        <div className="relative z-10 flex flex-1 flex-col justify-end">
          <p
            className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--luxury-gold)]"
            style={{ letterSpacing: "0.22em" }}
          >
            {product.tagline}
          </p>
          <h3
            className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--luxury-charcoal)] md:text-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--luxury-muted)] line-clamp-2">
            {product.description}
          </p>
          <p className="mt-4 text-base font-semibold text-[var(--luxury-gold)]">{product.price}</p>

          {/* Quick View — always visible so it works on mobile (tap); also card is fully clickable */}
          <motion.button
            type="button"
            className="mt-6 w-fit rounded-full border-2 border-[var(--luxury-gold)] bg-[var(--luxury-cream)] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[var(--luxury-gold)] transition-colors hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-cream)]"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
          >
            Quick View
          </motion.button>
        </div>
      </motion.div>
    </motion.li>
  );
}

function ProductModal({
  product,
  onClose,
  layoutId,
}: {
  product: (typeof products)[0];
  onClose: () => void;
  layoutId: string;
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
        {/* Image that "flew" in — shared layoutId for layout animation */}
        <motion.div
          layoutId={layoutId}
          className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${product.gradient} md:h-64`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(255,255,255,0.4) 0%, transparent 60%)",
              }}
            />
          )}
        </motion.div>
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--luxury-gold)]">
            {product.tagline}
          </p>
          <h3
            className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--luxury-charcoal)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--luxury-muted)]">
            {product.description}
          </p>
          <p className="mt-5 text-lg font-semibold text-[var(--luxury-gold)]">{product.price}</p>
          <button
            type="button"
            className="mt-6 rounded-full border-2 border-[var(--luxury-gold)] bg-transparent px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-[var(--luxury-gold)] hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-cream)]"
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

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [quickViewProduct, setQuickViewProduct] = useState<(typeof products)[0] | null>(null);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-[var(--luxury-cream)]"
    >
      <div className="container-wide">
        {/* Typography: Large serif + small all-caps + muted body */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--luxury-muted)]"
            style={{ letterSpacing: "0.25em" }}
          >
            Our Sweets
          </p>
          <h2
            className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-semibold tracking-tight text-[var(--luxury-charcoal)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Handcrafted with care
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--luxury-muted)]">
            Traditional recipes, premium ingredients. Each piece is given room to breathe.
          </p>
        </div>

        {/* Bento grid — gap-16 breathing room; 3 cols × 2 rows on sm+ */}
        <motion.ul
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:grid-rows-2 sm:gap-16 md:mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product) => {
            const parallaxY = useTransform(
              scrollYProgress,
              [0, 0.3, 0.7, 1],
              [0, 30 * product.parallaxSpeed, -20 * product.parallaxSpeed, 0]
            );
            return (
              <ProductCard
                key={product.id}
                product={product}
                parallaxY={parallaxY}
                onQuickView={() => setQuickViewProduct(product)}
              />
            );
          })}
        </motion.ul>
      </div>

      <AnimatePresence mode="wait">
        {quickViewProduct && (
          <ProductModal
            key={quickViewProduct.id}
            product={quickViewProduct}
            layoutId={`product-image-${quickViewProduct.id}`}
            onClose={() => setQuickViewProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
