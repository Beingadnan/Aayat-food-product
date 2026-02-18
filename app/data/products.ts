export const products = [
  {
    id: "elaichi",
    name: "Elaichi Soan Papdi",
    weight: "284 g",
    tagline: "Cardamom-infused flakes",
    description:
      "Cardamom-infused flakes. Clarified sugar, gram flour, edible vegetable oil, cardamom, almond, pistachio. Best before 6 months from packaging.",
    price: 199,
    image: "/product/soan-papdi-284.jpg",
  },
  {
    id: "desi-ghee",
    name: "Desi Ghee Soan Papdi",
    weight: "400 g",
    tagline: "Pure ghee, hand-pulled",
    description:
      "Pure Desi Ghee, hand-pulled. Melt-in-the-mouth layers. 100% pure Desi Ghee.",
    price: 449,
    image: "/product/fresh-premium-kumaoni-soan-papdi-qo60ablv.jpg",
  },
  {
    id: "saffron",
    name: "Saffron Pistachio Soan Papdi",
    weight: "400 g",
    tagline: "Royal indulgence",
    description: "Premium saffron and crushed pistachios in every flake.",
    price: 549,
    image: "/product/istockphoto-450453423-612x612.jpg",
  },
  {
    id: "gift-pack",
    name: "Premium Gift Box",
    weight: "Assorted",
    tagline: "Curated selection",
    description: "Assortment of our finest Soan Papdi. Ideal for gifting.",
    price: 899,
    image: "/product/360_F_1629229340_OH1wCN8mKC3NQ4l4qHKG15drclxDsCXn.jpg",
  },
] as const;

export type Product = (typeof products)[number];

/** Featured products for /products page (first two). */
export const featuredProducts = products.slice(0, 2);
