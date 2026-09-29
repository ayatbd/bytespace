"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Code2,
  Compass,
  GraduationCap,
  Palette,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import { HeroSection } from "@/components/home/hero/HeroSection";
import {
  LimeSpring,
  LimeTorus,
  WhitePrism,
  WhiteTorus,
} from "@/components/shapes/FloatingShapes";

const partnerLogos = ["Logosum", "Logosum", "Logosum", "Logosum", "Logosum"];

const filterTags = [
  "Art & Design",
  "Business",
  "Marketing",
  "Development",
  "Photography",
  "Finance",
  "Music",
  "Wellness",
  "Productivity",
  "Coding",
  "UI/UX",
  "Web Design",
];

const courseCards = [
  {
    title: "Learn From Basic",
    type: "UI/UX Design",
    price: "$25",
    rating: "4.5",
    accent: "from-[#f6d9c9] to-[#f8bca5]",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Digital Asset Design",
    type: "Design",
    price: "$25",
    rating: "4.5",
    accent: "from-[#d7f4d4] to-[#a8e6a3]",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Power of Yoga",
    type: "Fitness",
    price: "$25",
    rating: "4.5",
    accent: "from-[#d9e6ff] to-[#a5c3ff]",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Batoning Productivity",
    type: "Productivity",
    price: "$25",
    rating: "4.5",
    accent: "from-[#fce4d7] to-[#f7d1ab]",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mastering Money",
    type: "Finance",
    price: "$25",
    rating: "4.5",
    accent: "from-[#e5ddff] to-[#c7b6ff]",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "From Idea to Startup",
    type: "Business",
    price: "$25",
    rating: "4.5",
    accent: "from-[#dbeafe] to-[#a5d8ff]",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

const learningPaths = [
  { label: "Design", icon: Palette },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: BriefcaseBusiness },
  { label: "Business", icon: TrendingUp },
  { label: "Marketing", icon: Compass },
  { label: "Photography", icon: Camera },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "UI/UX Learner",
    quote:
      "ByteSpace has completely transformed how I learn. The courses are practical, engaging, and easy to follow.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I discovered a new passion for design and marketing. The platform truly helps creators grow faster.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "The experience is smooth, polished, and motivating. I feel supported every step of the way.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="bg-[#f6f7f9] text-slate-900">
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={(e) => {
          e.preventDefault();
        }}
      />

      <section className="bg-[#f6f7f9] py-8 sm:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 text-center text-slate-300 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8 lg:px-6">
          {partnerLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white/60 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            At ByteSpace, we believe in empowering learners with practical
            knowledge, flexible pathways, and real-world skill-building.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filterTags.map((tag, index) => (
            <button
              key={tag}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                index === 0
                  ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courseCards.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div
                className={`relative h-52 bg-gradient-to-br ${course.accent}`}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover mix-blend-multiply opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                    {course.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow-sm">
                  <Star className="h-3 w-3 fill-[#f5c74a] text-[#f5c74a]" />
                  {course.rating}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                      {course.type}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-slate-900">
                      {course.title}
                    </h3>
                  </div>
                  <button className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((avatar) => (
                      <div
                        key={avatar}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#c4b5fd] to-[#f0abfc] text-[9px] font-bold text-slate-900"
                      >
                        {avatar + 1}
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
                      Price
                    </p>
                    <p className="text-xl font-black text-slate-900">
                      {course.price}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f7f9] px-4 pb-12 pt-6 sm:px-6 lg:pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Explore Diverse Learning Paths at ByteSpace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Discover flexible, inspiring learning tracks designed to help you
            grow your skills and confidence in every area that matters.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {learningPaths.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-slate-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f7f9] px-4 pb-14 pt-8 sm:px-6 lg:pb-20">
        <div className="pointer-events-none absolute left-10 top-10 hidden text-[#dbeafe] lg:block">
          <WhitePrism className="h-24 w-24 rotate-12" />
        </div>
        <div className="pointer-events-none absolute right-12 bottom-10 hidden text-[#d9f99d] lg:block">
          <LimeSpring className="h-24 w-24 -rotate-12" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Explore our curated and practical courses designed to help you
              gain confidence, build skill stacks, and grow into the next
              version of yourself.
            </p>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-black text-slate-900">12K+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                  Students
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">70+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                  Courses
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">16</div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                  Partners
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute left-4 top-7 h-52 w-52 rounded-full bg-[#d9f99d] blur-3xl" />
            <div className="absolute right-10 top-12 h-44 w-44 rounded-full bg-[#c7d2fe] blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] bg-white p-5 shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
              <div className="rounded-[28px] bg-gradient-to-br from-[#dfe7f9] via-[#f0f7ff] to-[#edf3ff] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe8ff] text-[#1d4ed8]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">
                        Learn from top experts
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Career ready
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-black text-slate-900">
                    55%
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[26px] bg-white p-3 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
                      alt="Student learning"
                      className="h-56 w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[22px] bg-[#f3f6fb] p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                        E-Learning progress
                      </p>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
                      </div>
                    </div>
                    <div className="rounded-[22px] bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                        Explore rewards
                      </p>
                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <div className="text-3xl font-black text-slate-900">
                            $120
                          </div>
                          <div className="text-xs text-slate-500">
                            Career boost
                          </div>
                        </div>
                        <div className="rounded-full bg-[#c8ff00] p-2 text-slate-900">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#e8f0ff_0%,#f7f8fa_100%)] px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -left-8 top-8 -rotate-12 text-[#d9f99d]">
              <LimeSpring className="h-24 w-24" />
            </div>
            <div className="absolute -right-10 bottom-8 rotate-12 text-[#dbeafe]">
              <WhiteTorus className="h-24 w-24" />
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-[#1e46d7] p-5 shadow-[0_28px_80px_rgba(29,78,216,0.35)]">
              <div className="rounded-[24px] bg-[#e8f2ff] p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-900">
                    Total earned
                  </span>
                  <div className="text-xl font-black text-slate-900">$120</div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[24px] bg-white p-3 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                    alt="Creator teaching online"
                    className="h-56 w-full rounded-[18px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              ByteSpace makes it simple to build and organize engaging
              educational content, manage learners, and grow a rich course
              catalog.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Share your expertise with the world",
                "Monetize your passion",
                "Create and publish learning paths",
                "Build a community around your expertise",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#c8ff00] text-slate-900">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1d46e2] px-4 py-16 text-center text-white sm:px-6 lg:py-24">
        <div className="pointer-events-none absolute left-3 top-14 hidden h-28 w-28 sm:block">
          <LimeTorus className="h-full w-full rotate-45" />
        </div>
        <div className="pointer-events-none absolute right-3 bottom-8 hidden h-28 w-28 sm:block">
          <WhitePrism className="h-full w-full -rotate-12" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-blue-100 sm:text-base">
            Start building your own courses, share your knowledge, and expand
            your reach with an online community that values creativity, growth,
            and learning.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-7 py-3 text-sm font-black text-slate-900 shadow-[0_20px_40px_rgba(200,255,0,0.35)] transition hover:bg-[#d8ff3d]">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Our community is built around curiosity, support, and practical
            growth. Here is what learners love about their ByteSpace experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-[#f5c74a]">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={`${testimonial.name}-${index}`}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
