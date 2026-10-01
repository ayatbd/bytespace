import React from "react";

export function SponsorLogos() {
  const logos = [
    {
      name: "Logoipsum 1",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-400">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 2",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-400">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" opacity="0.8" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 3",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-400">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 4",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-slate-400 stroke-[2.5]">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 5",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-400">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 0 0 20v-20z" fill="#94a3b8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="border-b border-slate-100 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-75 grayscale transition-all hover:grayscale-0">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 transition-transform hover:scale-105"
            >
              {logo.icon}
              <span className="text-base font-bold tracking-tight text-slate-700">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
