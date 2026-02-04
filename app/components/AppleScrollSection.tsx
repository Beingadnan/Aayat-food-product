"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const FRAME_COUNT = 120;
const GHEE_IMAGE_PATH = (frame: number) =>
  `/Ghee/ezgif-frame-${String(frame).padStart(3, "0")}.png`;

// 3 marketing lines — cycle every 2 seconds
const SCROLL_MESSAGES = [
  "Pure Desi Ghee. Pure love.",
  "Handcrafted, one flake at a time.",
  "The melt-in-your-mouth magic.",
];
const MESSAGE_DURATION_MS = 2000;

// Responsive scroll runway — taller = slower scroll animation (more scroll per frame)
function getScrollRunwayVh(): number {
  if (typeof window === "undefined") return 500;
  const w = window.innerWidth;
  if (w < 640) return 380;
  if (w < 1024) return 450;
  return 500;
}

function getScrollProgress(sectionTop: number, sectionHeight: number): number {
  const vh = window.innerHeight;
  const scrollY = window.scrollY;
  const start = sectionTop - vh;
  const end = sectionTop + sectionHeight - vh;
  const total = end - start;
  if (total <= 0) return 0;
  const current = scrollY - start;
  return Math.max(0, Math.min(1, current / total));
}

export default function AppleScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [resizeKey, setResizeKey] = useState(0);
  const [runwayVh, setRunwayVh] = useState(500);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const rafRef = useRef<number>(0);

  // Preload first frame so we know when to hide loading state
  useEffect(() => {
    const img = new Image();
    img.src = GHEE_IMAGE_PATH(1);
    img.onload = () => {
      imagesCache.current.set(1, img);
      setIsLoaded(true);
    };
    img.onerror = () => setIsLoaded(true); // hide loader even on error so UX isn't stuck
  }, []);

  const updateProgress = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { top, height } = section.getBoundingClientRect();
    const sectionTop = top + window.scrollY;
    const progress = getScrollProgress(sectionTop, height);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };
    const handleResize = () => {
      setRunwayVh(getScrollRunwayVh());
      updateProgress();
    };
    setRunwayVh(getScrollRunwayVh());
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  // Cycle through 3 messages every 2 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setMessageIndex((i) => (i + 1) % SCROLL_MESSAGES.length);
    }, MESSAGE_DURATION_MS);
    return () => clearInterval(t);
  }, []);

  const currentMessage = SCROLL_MESSAGES[messageIndex];

  const frameIndex = Math.min(
    FRAME_COUNT,
    Math.max(1, Math.round(scrollProgress * (FRAME_COUNT - 1)) + 1)
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };
    const onResize = () => {
      setSize();
      setResizeKey((k) => k + 1);
    };
    setSize();
    window.addEventListener("resize", onResize);

    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    const cached = imagesCache.current.get(frameIndex);
    if (cached?.complete && cached.naturalWidth) {
      const scale = Math.max(w / cached.naturalWidth, h / cached.naturalHeight);
      const dw = cached.naturalWidth * scale;
      const dh = cached.naturalHeight * scale;
      const dx = (w - dw) / 2;
      const dy = (h - dh) / 2;
      ctx.drawImage(cached, 0, 0, cached.naturalWidth, cached.naturalHeight, dx, dy, dw, dh);
    } else {
      ctx.fillStyle = "#FDFCF0";
      ctx.fillRect(0, 0, w, h);
      const img = new Image();
      img.src = GHEE_IMAGE_PATH(frameIndex);
      img.onload = () => {
        imagesCache.current.set(frameIndex, img);
        const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
        const dw = img.naturalWidth * scale;
        const dh = img.naturalHeight * scale;
        const dx = (w - dw) / 2;
        const dy = (h - dh) / 2;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh);
      };
    }

    return () => window.removeEventListener("resize", onResize);
  }, [frameIndex, resizeKey]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--luxury-cream)]"
      style={{ height: `${runwayVh}vh` }}
      aria-label="Desi Ghee Soan Papdi — scroll to explore"
    >
      <div className="sticky top-0 left-0 right-0 z-0 h-[100vh] min-h-[100dvh] w-full max-w-full overflow-hidden sm:h-[100vh] sm:min-h-[100dvh]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Loading overlay — hides when first frame is ready */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--luxury-cream)] transition-opacity duration-500 ease-out ${
            isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-hidden={isLoaded}
          aria-live="polite"
        >
          <div
            className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--luxury-gold)] border-t-transparent"
            aria-hidden
          />
          <p className="mt-4 font-[family-name:var(--font-playfair)] text-sm font-medium tracking-wide text-[var(--luxury-charcoal)]">
            Loading experience...
          </p>
          <p className="mt-1 text-xs text-[var(--luxury-muted)]">
            Desi Ghee Soan Papdi
          </p>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--luxury-cream)]/30"
          aria-hidden
        />
        {/* Marketing text — 3 lines, 2 sec each, cursive + gold */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[38%] flex -translate-y-1/2 justify-center px-6 sm:px-8"
          aria-live="polite"
          aria-atomic="true"
        >
          <p
            key={messageIndex}
            className="font-[family-name:var(--font-dancing-script)] max-w-xl text-center text-2xl font-semibold transition-opacity duration-300 sm:text-3xl md:text-4xl"
            style={{
              color: "#fddb22",
              textShadow:
                "0 0 24px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            {currentMessage}
          </p>
        </div>
        {/* Bottom caption */}
        <div
          className="absolute left-0 right-0 text-center px-4"
          style={{
            bottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
        >
          <p
            className="font-[family-name:var(--font-playfair)] text-sm font-medium tracking-wide text-white sm:text-base"
            style={{
              textShadow: "0 1px 3px rgba(0,0,0,0.35)",
            }}
          >
            Desi Ghee Soan Papdi
          </p>
          <p
            className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/85 sm:text-xs"
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
