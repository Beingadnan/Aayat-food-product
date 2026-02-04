import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Aayat Tasty Treat",
  description:
    "Explore our range of premium Soan Papdi and Indian sweets. Elaichi, Desi Ghee, Saffron Pistachio & gift boxes. FSSAI certified.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
