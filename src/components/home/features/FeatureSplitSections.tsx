import { LimeSpring } from "@/components/shapes/FloatingShapes";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, DollarSign, Star, TrendingUp } from "lucide-react";

export function FeatureSplitSections() {
  return (
    <div className="space-y-20 py-16 sm:space-y-32 sm:py-24">
      {/* ================= FEATURE 1: Professional Growth ================= */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Copy & Stats */}
          <div>
            <h2 className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>
            <p className="mt-5 text-balance text-xs leading-relaxed text-slate-500 sm:text-sm md:text-base">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Counter Trio */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="text-3xl font-black text-blue-600 sm:text-4xl">
                  12K
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                  Students
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 sm:text-4xl">
                  70+
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                  Courses
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 sm:text-4xl">
                  16
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with floating cards & spring */}
          <div className="relative mx-auto flex h-[380px] w-full max-w-[480px] items-center justify-center sm:h-[440px]">
            {/* Ambient Background Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-lime-300/30 blur-3xl" />

            {/* 3D Lime Coiled Spring */}
            <div className="pointer-events-none absolute -right-4 top-8 h-36 w-36 sm:right-2 sm:top-12 sm:h-44 sm:w-44 animate-float">
              <LimeSpring className="h-full w-full rotate-12" />
            </div>

            {/* Student Graphic */}
            <div className="relative z-10 flex h-full w-full items-end justify-center pb-4">
              <svg
                viewBox="0 0 360 360"
                className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px]"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="studentJacket"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
                {/* Body */}
                <path
                  d="M90 320 C 100 260, 150 240, 180 240 C 210 240, 260 260, 270 320 L 290 360 L 70 360 Z"
                  fill="url(#studentJacket)"
                />
                <polygon points="150,240 210,240 180,285" fill="#f8fafc" />
                {/* Head */}
                <ellipse cx="180" cy="150" rx="45" ry="55" fill="#fcd3b0" />
                <path
                  d="M140 140 C 135 90, 170 80, 180 80 C 215 80, 225 90, 220 140 C 210 120, 205 110, 180 110 C 155 110, 145 120, 140 140 Z"
                  fill="#2d1b0f"
                />
                {/* Smile & Eyes */}
                <circle cx="165" cy="140" r="4" fill="#1e293b" />
                <circle cx="195" cy="140" r="4" fill="#1e293b" />
                <path
                  d="M165 170 Q 180 185 195 170"
                  stroke="#b91c1c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Headphones */}
                <path
                  d="M130 140 C 128 85, 232 85, 230 140"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
                <rect
                  x="122"
                  y="130"
                  width="14"
                  height="30"
                  rx="7"
                  fill="#0f172a"
                />
                <rect
                  x="224"
                  y="130"
                  width="14"
                  height="30"
                  rx="7"
                  fill="#0f172a"
                />
                {/* Laptop held in hands */}
                <polygon
                  points="120,290 240,280 255,340 105,350"
                  fill="#475569"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                <polygon
                  points="125,295 235,286 240,320 130,326"
                  fill="#1e3a8a"
                />
              </svg>
            </div>

            {/* Floating Card: "Learn Figma from Basic" mini card */}
            <div className="absolute -left-4 top-10 z-20 w-48 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:left-0 sm:top-14 sm:w-56 animate-float">
              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-500">
                <span className="rounded bg-slate-100 px-1.5 py-0.5">
                  17 Lessons
                </span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5">
                  2h 16m
                </span>
              </div>
              <h5 className="mt-2 text-xs font-bold text-slate-900">
                Learn Figma from Basic
              </h5>
              <p className="text-[10px] text-blue-600">by purepearl studio</p>
              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-1.5">
                <span className="text-xs font-black text-blue-600">$25</span>
                <span className="text-[10px] text-slate-400">/lifetime</span>
              </div>
            </div>

            {/* Floating Card: "Learning Progress 55%" */}
            <div className="absolute -right-2 bottom-8 z-20 w-40 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl sm:right-2 sm:bottom-12 sm:w-44 animate-float-reverse">
              <p className="text-[10px] font-semibold text-slate-500">
                Learning Progress
              </p>
              <div className="text-xl font-black text-slate-900">55%</div>
              <div className="mt-2">
                <Progress
                  value={55}
                  className="h-1.5 bg-slate-100"
                  indicatorClassName="bg-lime-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE 2: Create & Manage Courses ================= */}
      <section id="creators" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Visual Composition with Instructor & Floating Revenue Badges */}
          <div className="order-2 lg:order-1 relative mx-auto flex h-[380px] w-full max-w-[480px] items-center justify-center sm:h-[440px]">
            {/* Ambient Lime/Blue Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

            {/* 3D Lime Coiled Spring */}
            <div className="pointer-events-none absolute -right-2 top-10 h-32 w-32 sm:right-4 sm:top-14 sm:h-40 sm:w-40 animate-float-reverse">
              <LimeSpring className="h-full w-full rotate-45" />
            </div>

            {/* Instructor Portrait Graphic */}
            <div className="relative z-10 flex h-full w-full items-end justify-center pb-2">
              <svg
                viewBox="0 0 360 360"
                className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px]"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="instructorShirt"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                </defs>
                {/* Female Body */}
                <path
                  d="M100 320 C 110 260, 150 240, 180 240 C 210 240, 250 260, 260 320 L 280 360 L 80 360 Z"
                  fill="url(#instructorShirt)"
                />
                {/* Head */}
                <ellipse cx="180" cy="145" rx="42" ry="52" fill="#fcd3b0" />
                {/* Long Hair */}
                <path
                  d="M135 150 C 130 90, 165 75, 180 75 C 210 75, 230 90, 225 150 C 220 180, 215 220, 210 250 C 200 230, 205 180, 200 135 C 190 110, 160 110, 150 145 C 145 180, 140 230, 135 250 Z"
                  fill="#451a03"
                />
                {/* Smile, Eyes */}
                <circle cx="168" cy="138" r="4" fill="#1e293b" />
                <circle cx="192" cy="138" r="4" fill="#1e293b" />
                <path
                  d="M168 162 Q 180 174 192 162"
                  stroke="#b91c1c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Headset microphone */}
                <path
                  d="M140 130 C 138 90, 222 90, 220 130"
                  stroke="#0f172a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M140 140 L 160 165"
                  stroke="#0f172a"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="162" cy="167" r="4" fill="#0f172a" />
                {/* Tablet in hand */}
                <rect
                  x="120"
                  y="270"
                  width="120"
                  height="75"
                  rx="6"
                  fill="#0f172a"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                <rect
                  x="126"
                  y="276"
                  width="108"
                  height="63"
                  rx="3"
                  fill="#1e40af"
                />
              </svg>
            </div>

            {/* Floating Card: "Total Revenue July 1-28: $120.29" */}
            <div className="absolute -left-4 top-6 z-20 rounded-2xl bg-blue-600 p-3 text-white shadow-xl sm:-left-2 sm:top-10 sm:p-3.5 animate-float">
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-blue-100">
                <DollarSign className="h-3 w-3 text-lime-400" />
                <span>Total Revenue</span>
              </div>
              <p className="text-[9px] text-blue-200">July 1-28</p>
              <div className="mt-1 text-base font-extrabold text-white sm:text-lg">
                $120.29
              </div>
            </div>

            {/* Floating Card: "Year to Date 2023: $1,200.38 (+128)" */}
            <div className="absolute -left-6 bottom-16 z-20 rounded-2xl bg-blue-600 p-3 text-white shadow-xl sm:-left-4 sm:bottom-20 sm:p-3.5 animate-float-reverse">
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-blue-100">
                <TrendingUp className="h-3 w-3 text-lime-400" />
                <span>Year to Date</span>
              </div>
              <p className="text-[9px] text-blue-200">2023</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-base font-extrabold text-white sm:text-lg">
                  $1,200.38
                </span>
                <span className="rounded bg-lime-400 px-1 py-0.5 text-[9px] font-bold text-slate-950">
                  +128
                </span>
              </div>
            </div>

            {/* Floating Card: "Happy Students 4.5" */}
            <div className="absolute -right-4 bottom-4 z-20 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:right-0 sm:bottom-8 animate-float">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold text-slate-900">
                  Happy Students
                </span>
                <div className="flex items-center gap-0.5 text-[10px] font-bold text-slate-800">
                  4.5{" "}
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <div className="mt-2 flex items-center -space-x-1.5">
                <div className="h-5 w-5 rounded-full bg-blue-500 text-[8px] font-bold text-white flex items-center justify-center">
                  R
                </div>
                <div className="h-5 w-5 rounded-full bg-pink-500 text-[8px] font-bold text-white flex items-center justify-center">
                  S
                </div>
                <div className="h-5 w-5 rounded-full bg-emerald-500 text-[8px] font-bold text-white flex items-center justify-center">
                  T
                </div>
                <div className="rounded-full bg-lime-400 px-1.5 text-[8px] font-black text-slate-950">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="order-1 lg:order-2">
            <h2 className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Create & Manage <br />
              Courses Easily.
            </h2>
            <p className="mt-5 text-balance text-xs leading-relaxed text-slate-500 sm:text-sm md:text-base">
              <strong className="font-bold text-slate-800">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist with clean checkmarks */}
            <div className="mt-8 space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-bold text-slate-800 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
