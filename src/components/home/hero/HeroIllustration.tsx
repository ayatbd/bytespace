import { Progress } from "@/components/ui/progress";
import { Palette, Star } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto mt-6 flex h-[380px] w-full max-w-[500px] items-center justify-center sm:h-[460px] sm:max-w-[560px]">
      {/* Vibrant Lime/Green Circular Disc Backdrop */}
      <div className="absolute h-64 w-64 rounded-full bg-[#c8ff00] shadow-[0_0_80px_rgba(200,255,0,0.4)] sm:h-80 sm:w-80 md:h-96 md:w-96" />

      {/* Ambient Blue Radial Glow behind */}
      <div className="absolute h-80 w-80 rounded-full bg-blue-400/20 blur-3xl sm:h-[420px] sm:w-[420px]" />

      {/* Main Student Character Graphic */}
      <div className="relative z-10 flex h-full w-full items-end justify-center pb-2">
        <svg
          viewBox="0 0 440 440"
          className="h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fcd3b0" />
              <stop offset="100%" stopColor="#f59e6b" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3d2314" />
              <stop offset="100%" stopColor="#1a0c02" />
            </linearGradient>
            <linearGradient id="jacketGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Shoulders & Jacket */}
          <path
            d="M120 380 C 130 320, 180 300, 220 300 C 260 300, 310 320, 320 380 L 340 440 L 100 440 Z"
            fill="url(#jacketGrad)"
          />
          {/* Inner Shirt */}
          <polygon points="190,300 250,300 220,350" fill="#ffffff" />
          <polygon points="205,300 235,300 220,340" fill="#e2e8f0" />

          {/* Neck */}
          <path
            d="M195 240 L 245 240 L 240 310 L 200 310 Z"
            fill="url(#skinGrad)"
          />

          {/* Head & Face */}
          <ellipse cx="220" cy="190" rx="55" ry="65" fill="url(#skinGrad)" />

          {/* Friendly Smile & Features */}
          {/* Eyes */}
          <ellipse cx="198" cy="175" rx="5" ry="6" fill="#1e293b" />
          <ellipse cx="242" cy="175" rx="5" ry="6" fill="#1e293b" />
          <circle cx="199" cy="173" r="2" fill="#ffffff" />
          <circle cx="243" cy="173" r="2" fill="#ffffff" />

          {/* Eyebrows */}
          <path
            d="M190 162 Q 200 157 210 162"
            stroke="#26150b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M230 162 Q 240 157 250 162"
            stroke="#26150b"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Nose */}
          <path
            d="M220 180 L 217 195 L 224 195"
            stroke="#d97706"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Broad Smiling Mouth with Teeth */}
          <path d="M200 210 Q 220 235 240 210 Z" fill="#b91c1c" />
          <path
            d="M204 210 Q 220 218 236 210"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="4"
          />

          {/* Hair & Curls */}
          <path
            d="M165 180 C 160 120, 200 105, 220 105 C 255 105, 280 120, 275 180 C 265 150, 255 140, 220 140 C 185 140, 175 155, 165 180 Z"
            fill="url(#hairGrad)"
          />
          <circle cx="180" cy="125" r="16" fill="url(#hairGrad)" />
          <circle cx="210" cy="115" r="18" fill="url(#hairGrad)" />
          <circle cx="240" cy="118" r="17" fill="url(#hairGrad)" />
          <circle cx="260" cy="130" r="15" fill="url(#hairGrad)" />

          {/* Modern Over-Ear DJ Headphones */}
          {/* Headband */}
          <path
            d="M152 180 C 150 110, 290 110, 288 180"
            fill="none"
            stroke="#1e293b"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Ear cup left */}
          <rect
            x="142"
            y="165"
            width="18"
            height="40"
            rx="9"
            fill="#0f172a"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          {/* Ear cup right */}
          <rect
            x="280"
            y="165"
            width="18"
            height="40"
            rx="9"
            fill="#0f172a"
            stroke="#cbd5e1"
            strokeWidth="2"
          />

          {/* Modern Slim Laptop in hands */}
          <g transform="translate(145, 335) rotate(-6)">
            {/* Screen lid tilted */}
            <polygon
              points="10,0 150,-10 145,65 5,75"
              fill="url(#laptopGrad)"
              stroke="#64748b"
              strokeWidth="2"
            />
            {/* Screen display glowing */}
            <polygon points="15,6 142,-3 138,58 11,67" fill="#1e3a8a" />
            <line
              x1="25"
              y1="20"
              x2="80"
              y2="16"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="25"
              y1="32"
              x2="65"
              y2="28"
              stroke="#ccff00"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Keyboard base */}
            <polygon points="0,70 145,60 160,85 15,95" fill="#475569" />
          </g>

          {/* Student hands holding laptop */}
          <ellipse cx="145" cy="385" rx="14" ry="10" fill="url(#skinGrad)" />
          <ellipse cx="295" cy="380" rx="14" ry="10" fill="url(#skinGrad)" />
        </svg>
      </div>

      {/* Floating Card 1: Top-Left (UI/UX Design) */}
      <div className="absolute -left-2 top-8 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-100 sm:left-4 sm:top-12 sm:p-3.5 animate-float">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-slate-900">
          <Palette className="h-5 w-5 text-lime-700" />
        </div>
        <div>
          <h4 className="text-xs font-black text-slate-900 sm:text-sm">
            UI/UX Design
          </h4>
          <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
            200 Courses • 1000+ Students
          </p>
        </div>
      </div>

      {/* Floating Card 2: Top-Right (Learning Progress 55%) */}
      <div className="absolute -right-2 top-14 z-20 w-36 rounded-2xl bg-white p-3.5 shadow-xl ring-1 ring-slate-100 sm:right-4 sm:top-16 sm:w-44 animate-float-reverse">
        <p className="text-[10px] font-semibold text-slate-500 sm:text-xs">
          Learning Progress
        </p>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-xl font-black text-slate-900 sm:text-2xl">
            55%
          </span>
        </div>
        <div className="mt-2">
          <Progress value={55} className="h-2 bg-slate-100" />
        </div>
      </div>

      {/* Floating Card 3: Bottom-Left (Happy Students 4.5) */}
      <div className="absolute -bottom-4 left-0 z-20 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-100 sm:bottom-4 sm:left-6 sm:p-3.5 animate-float">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h5 className="text-[11px] font-bold text-slate-900 sm:text-xs">
              Happy Students
            </h5>
            <div className="mt-0.5 flex items-center gap-1">
              <span className="text-xs font-black text-slate-800">4.5</span>
              <span className="text-[10px] text-slate-400">(240)</span>
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Student Avatar Row */}
        <div className="mt-2 flex items-center -space-x-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[10px] font-bold text-white shadow-sm">
            E
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-pink-500 text-[10px] font-bold text-white shadow-sm">
            L
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-[10px] font-bold text-white shadow-sm">
            R
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-teal-500 text-[10px] font-bold text-white shadow-sm">
            D
          </div>
          <div className="flex h-6 items-center justify-center rounded-full border-2 border-white bg-lime-400 px-1.5 text-[9px] font-black text-slate-950 shadow-sm">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
