import React from "react";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import confetti from "canvas-confetti";

interface NotFoundPageProps {
  onNavigate: (view: "home" | "login" | "register" | "search" | "course-details" | "creator-profile" | "404") => void;
  currentUser?: { name: string; email: string } | null;
  onSignOut?: () => void;
  cartCount?: number;
  onNewsletterSubmit?: (email: string) => void;
}

export function NotFoundPage({
  onNavigate,
  currentUser = null,
  onSignOut = () => {},
  cartCount = 0,
  onNewsletterSubmit = () => {},
}: NotFoundPageProps) {
  const handleBackToHome = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });
    onNavigate("home");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-white text-slate-900 selection:bg-lime-300 selection:text-slate-900">
      {/* ================= HERO SECTION (Cobalt Blue Grid Background) ================= */}
      <section
        className="relative w-full overflow-hidden bg-[#0052FF]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      >
        {/* Transparent Seamless Navbar matching image.png */}
        <Navbar
          currentView="404"
          onNavigate={onNavigate}
          currentUser={currentUser}
          onSignOut={onSignOut}
          cartCount={cartCount}
          variant="minimal"
        />

        {/* Center 404 Hero Content */}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pt-12 pb-24 text-center sm:pt-16 sm:pb-32 md:pt-20 md:pb-36 lg:pt-24 lg:pb-40">
          {/* Giant Typographic 404 with Neon Lime Gradient matching image.png */}
          <div
            className="select-none font-black tracking-tight leading-none text-[150px] sm:text-[230px] md:text-[300px] lg:text-[360px] xl:text-[400px]"
            style={{
              background:
                "linear-gradient(180deg, #D4F72C 0%, #bef224 40%, rgba(132, 204, 22, 0.45) 75%, rgba(77, 124, 15, 0.2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </div>

          {/* Headline overlapping the bottom portion of 404 matching image.png */}
          <div className="relative z-10 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-44 max-w-4xl px-2">
            <h1 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.12]">
              The page you are looking <br />
              for doesn’t exist
            </h1>

            {/* Subtitle matching image.png */}
            <p className="mx-auto mt-4 max-w-xl text-balance text-xs font-normal text-white/80 sm:mt-5 sm:text-sm md:text-base">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Pill CTA Button matching image.png */}
            <div className="mt-8 flex justify-center sm:mt-10">
              <button
                onClick={handleBackToHome}
                className="rounded-full bg-[#D4F72C] px-8 py-3.5 text-xs font-bold text-slate-950 shadow-xl transition-all duration-200 hover:bg-[#c0eb26] hover:scale-105 active:scale-95 sm:text-sm cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE FOOTER matching image.png ================= */}
      <Footer onNewsletterSubmit={onNewsletterSubmit} />
    </div>
  );
}
