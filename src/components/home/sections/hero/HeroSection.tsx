import {
  LimeCylinder,
  LimeSpring,
  WhitePrism,
  WhiteSquiggle,
  WhiteTorus,
} from "@/components/shapes/FloatingShapes";
import { Search } from "lucide-react";
import React from "react";
import { HeroIllustration } from "./HeroIllustration";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export function HeroSection({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1746e0] bg-grid-pattern pt-8 pb-12 sm:pt-14 sm:pb-20">
      {/* 3D Floating Vector Shapes positioned across the grid */}

      {/* Top Left Cluster */}
      <div className="pointer-events-none absolute -left-6 top-8 h-28 w-28 sm:left-4 sm:top-12 sm:h-36 sm:w-36 animate-float">
        <LimeCylinder className="h-full w-full rotate-12" />
      </div>
      <div className="pointer-events-none absolute left-8 top-32 h-20 w-20 sm:left-24 sm:top-40 sm:h-24 sm:w-24 animate-float-reverse">
        <WhiteSquiggle className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -left-8 bottom-12 h-36 w-36 sm:left-6 sm:bottom-20 sm:h-44 sm:w-44 animate-float">
        <WhiteTorus className="h-full w-full -rotate-12" />
      </div>

      {/* Top Right Cluster */}
      <div className="pointer-events-none absolute -right-6 top-6 h-28 w-28 sm:right-6 sm:top-10 sm:h-40 sm:w-40 animate-float">
        <LimeCylinder className="h-full w-full -rotate-45" />
      </div>
      <div className="pointer-events-none absolute right-12 top-28 h-24 w-24 sm:right-32 sm:top-36 sm:h-28 sm:w-28 animate-float-reverse">
        <WhitePrism className="h-full w-full rotate-6" />
      </div>
      <div className="pointer-events-none absolute -right-4 bottom-24 h-28 w-28 sm:right-10 sm:bottom-28 sm:h-36 sm:w-36 animate-float">
        <LimeSpring className="h-full w-full rotate-12" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.15]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-xl text-balance text-xs font-normal text-white/80 sm:text-sm md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar matching image.png */}
        <div className="mx-auto mt-7 max-w-xl">
          <form
            onSubmit={onSearchSubmit}
            className="flex items-center rounded-full bg-white p-1.5 pl-5 shadow-2xl ring-4 ring-black/5"
          >
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-lime-400 px-7 py-2.5 text-xs font-black text-slate-950 transition-all hover:bg-lime-300 hover:shadow-md active:scale-95 sm:text-sm"
            >
              Search
            </button>
          </form>
        </div>

        {/* Centerpiece Student with Headphones & Floating Badges */}
        <HeroIllustration />
      </div>
    </section>
  );
}
