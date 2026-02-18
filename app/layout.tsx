import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aayat Tasty Treat | Buy Soan Papdi Online — Premium Indian Sweets, Kolkata",
  description:
    "Buy premium Soan Papdi online from AAYAT Food Products, Kolkata. Elaichi Soan Papdi, Desi Ghee Soan Papdi — FSSAI certified. Clear pricing, fast delivery. Diamond Harbour Road.",
  keywords: [
    "Soan Papdi",
    "Soan Papdi online",
    "buy Soan Papdi",
    "Elaichi Soan Papdi",
    "Desi Ghee Soan Papdi",
    "Indian sweets Kolkata",
    "Aayat",
    "Aayat Tasty Treat",
  ],
  openGraph: {
    title: "Aayat Tasty Treat | Soan Papdi & Indian Sweets — Kolkata",
    description: "Premium Soan Papdi with clear pricing. FSSAI certified. Buy online from AAYAT Food Products, Kolkata.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
