export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
  gradient?: string;
  /** Soft background for card, matches product theme */
  cardBg?: string;
}

export const products: Product[] = [
  {
    id: "elaichi",
    name: "Elaichi Soan Papdi",
    tagline: "Cardamom-infused flakes",
    description:
      "Clarified sugar, gram flour, edible vegetable oil, cardamom, almond, pistachio. Best before 6 months from packaging.",
    price: "From ₹199",
    image: "/product/soan-papdi-284.jpg",
    featured: true,
    gradient: "from-amber-100/90 via-amber-50/80 to-[var(--luxury-cream)]",
    cardBg: "bg-emerald-50/70",
  },
  {
    id: "desi-ghee",
    name: "Desi Ghee Soan Papdi",
    tagline: "Pure ghee, hand-pulled",
    description: "The golden standard. Melt-in-the-mouth layers. 100% pure Desi Ghee.",
    price: "From ₹449",
    image: "/product/fresh-premium-kumaoni-soan-papdi-qo60ablv.jpg",
    featured: true,
    gradient: "from-amber-200/70 via-yellow-50/70 to-[var(--luxury-cream)]",
    cardBg: "bg-amber-50/80",
  },
  {
    id: "saffron",
    name: "Saffron Pistachio",
    tagline: "Royal indulgence",
    description: "Premium saffron and crushed pistachios in every flake.",
    price: "From ₹549",
    image: "/product/istockphoto-450453423-612x612.jpg",
    featured: false,
    gradient: "from-rose-100/60 via-amber-50/70 to-[var(--luxury-cream)]",
    cardBg: "bg-rose-50/80",
  },
  {
    id: "gift-pack",
    name: "Premium Gift Box",
    tagline: "Curated selection",
    description: "An assortment of our finest Soan Papdi. Perfect for gifting.",
    price: "From ₹899",
    image: "/product/360_F_1629229340_OH1wCN8mKC3NQ4l4qHKG15drclxDsCXn.jpg",
    featured: false,
    gradient: "from-stone-200/50 via-amber-50/60 to-[var(--luxury-cream)]",
    cardBg: "bg-stone-100/80",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const allProducts = products;

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
