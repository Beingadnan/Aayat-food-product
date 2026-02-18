import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--aayat-border)] bg-[var(--aayat-purple)] py-12 text-[var(--aayat-yellow)]">
      <div className="container-wide section-padding">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-start">
          <div className="text-center md:text-left">
            <p
              className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--aayat-white)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              AAYAT Tasty Treat
            </p>
            <p className="mt-1 text-sm text-[var(--aayat-yellow)]/90">
              Premium Indian Sweets • FSSAI Certified
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/#products" className="hover:text-[var(--aayat-white)] transition">Products</Link>
            <Link href="/#about" className="hover:text-[var(--aayat-white)] transition">About</Link>
            <Link href="/#contact" className="hover:text-[var(--aayat-white)] transition">Contact</Link>
          </nav>
        </div>
        <div className="mt-10 border-t border-[var(--aayat-yellow)]/20 pt-8 text-center text-sm text-[var(--aayat-yellow)]/80">
          <p>© {new Date().getFullYear()} AAYAT Food Products. All rights reserved.</p>
          <p className="mt-2">Diamond Harbour Road, Kolkata-700027, WB • FSSAI 22820041000128</p>
        </div>
      </div>
    </footer>
  );
}
