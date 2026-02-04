import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Dancing_Script } from "next/font/google";
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

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aayat Tasty Treat | Premium Soan Papdi & Indian Sweets",
  description:
    "AAYAT Food Products — Premium Elaichi Soan Papdi, Desi Ghee sweets & traditional Indian confectionery. Diamond Harbour Road, Kolkata. FSSAI certified.",
  keywords: ["Aayat", "Soan Papdi", "Indian sweets", "Kolkata", "Elaichi", "Tasty Treat"],
  openGraph: {
    title: "Aayat Tasty Treat | Premium Indian Sweets",
    description: "Premium Soan Papdi & traditional sweets from AAYAT Food Products, Kolkata.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
