"use client";
import { Course } from "@/components/data/coursesData";

export function CourseThumbnail({ course }: { course: Course }) {
  const renderVisual = () => {
    switch (course.themeType) {
      case "figma":
        return (
          <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
            {/* Desktop and notes visual */}
            <div className="absolute inset-0 opacity-80 mix-blend-screen">
              <svg viewBox="0 0 400 240" className="h-full w-full object-cover">
                {/* Desk wood tint */}
                <rect width="400" height="240" fill="#1e293b" />
                {/* Figma Canvas */}
                <rect
                  x="70"
                  y="30"
                  width="260"
                  height="150"
                  rx="8"
                  fill="#0f172a"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                {/* UI components */}
                <rect
                  x="90"
                  y="50"
                  width="80"
                  height="50"
                  rx="4"
                  fill="#1e3a8a"
                />
                <rect
                  x="180"
                  y="50"
                  width="65"
                  height="18"
                  rx="3"
                  fill="#a855f7"
                />
                <rect
                  x="180"
                  y="75"
                  width="45"
                  height="10"
                  rx="2"
                  fill="#38bdf8"
                />
                <rect
                  x="255"
                  y="50"
                  width="60"
                  height="90"
                  rx="6"
                  fill="#0284c7"
                />
                <circle cx="285" cy="85" r="14" fill="#facc15" />
                {/* Sticky notes */}
                <rect
                  x="35"
                  y="60"
                  width="40"
                  height="40"
                  rx="2"
                  fill="#fef08a"
                  transform="rotate(-6 35 60)"
                />
                <rect
                  x="35"
                  y="115"
                  width="42"
                  height="42"
                  rx="2"
                  fill="#fbcfe8"
                  transform="rotate(4 35 115)"
                />
                <rect
                  x="330"
                  y="70"
                  width="40"
                  height="40"
                  rx="2"
                  fill="#bbf7d0"
                  transform="rotate(10 330 70)"
                />
                {/* Mouse cursor pointer */}
                <polygon
                  points="190,110 190,130 198,124 207,133 211,129 202,120 211,120"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        );

      case "assets":
        return (
          <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950">
            <div className="absolute inset-0 opacity-85">
              <svg viewBox="0 0 400 240" className="h-full w-full object-cover">
                {/* Grid of 3D asset icons */}
                <g opacity="0.9">
                  <rect
                    x="40"
                    y="30"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#4338ca"
                  />
                  <circle cx="72" cy="62" r="18" fill="#818cf8" />

                  <rect
                    x="125"
                    y="30"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#065f46"
                  />
                  <polygon points="157,45 142,75 172,75" fill="#34d399" />

                  <rect
                    x="210"
                    y="30"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#9d174d"
                  />
                  <rect
                    x="228"
                    y="48"
                    width="28"
                    height="28"
                    rx="6"
                    fill="#f472b6"
                  />

                  <rect
                    x="295"
                    y="30"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#854d0e"
                  />
                  <circle cx="327" cy="62" r="16" fill="#facc15" />

                  <rect
                    x="40"
                    y="115"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#1e40af"
                  />
                  <path d="M60 148 L85 148 L72 130 Z" fill="#60a5fa" />

                  <rect
                    x="125"
                    y="115"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#581c87"
                  />
                  <circle cx="157" cy="147" r="14" fill="#c084fc" />

                  <rect
                    x="210"
                    y="115"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#0f766e"
                  />
                  <rect
                    x="225"
                    y="130"
                    width="35"
                    height="35"
                    rx="8"
                    fill="#2dd4bf"
                  />

                  <rect
                    x="295"
                    y="115"
                    width="65"
                    height="65"
                    rx="14"
                    fill="#374151"
                  />
                  <circle cx="327" cy="147" r="15" fill="#e2e8f0" />
                </g>
              </svg>
            </div>
          </div>
        );

      case "bigdata":
        return (
          <div className="relative h-full w-full overflow-hidden bg-slate-950">
            <svg viewBox="0 0 400 240" className="h-full w-full object-cover">
              {/* Analytics dashboard UI */}
              <rect width="400" height="240" fill="#090d16" />
              {/* Grid lines */}
              <line
                x1="40"
                y1="40"
                x2="360"
                y2="40"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="90"
                x2="360"
                y2="90"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="140"
                x2="360"
                y2="140"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="190"
                x2="360"
                y2="190"
                stroke="#1e293b"
                strokeWidth="1"
              />

              {/* Glowing cyan area line */}
              <path
                d="M40 160 Q 90 80, 140 120 T 240 70 T 310 110 T 360 50 L 360 200 L 40 200 Z"
                fill="url(#cyanDataGrad)"
                opacity="0.3"
              />
              <path
                d="M40 160 Q 90 80, 140 120 T 240 70 T 310 110 T 360 50"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
              />

              {/* Glowing green line */}
              <path
                d="M40 175 Q 110 130, 180 145 T 280 90 T 360 85"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />

              {/* Data points */}
              <circle cx="140" cy="120" r="5" fill="#38bdf8" />
              <circle cx="240" cy="70" r="5" fill="#38bdf8" />
              <circle cx="360" cy="50" r="5" fill="#38bdf8" />

              <defs>
                <linearGradient id="cyanDataGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );

      case "productivity":
        return (
          <div className="relative h-full w-full overflow-hidden bg-slate-900">
            <svg viewBox="0 0 400 240" className="h-full w-full object-cover">
              {/* Desk surface */}
              <rect width="400" height="240" fill="#111827" />
              {/* Center Monitor with DO MORE. */}
              <rect
                x="110"
                y="30"
                width="180"
                height="110"
                rx="6"
                fill="#030712"
                stroke="#374151"
                strokeWidth="2"
              />
              <rect x="185" y="140" width="30" height="40" fill="#4b5563" />
              <ellipse cx="200" cy="180" rx="45" ry="8" fill="#374151" />

              {/* Display text: DO MORE. */}
              <text
                x="200"
                y="92"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="20"
                fontWeight="900"
                letterSpacing="2"
              >
                DO MORE.
              </text>
              {/* Subtext */}
              <text
                x="200"
                y="112"
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="9"
                fontWeight="500"
              >
                DEEP WORK FOCUS
              </text>

              {/* Desk plant & coffee */}
              <circle cx="70" cy="165" r="16" fill="#1f2937" stroke="#374151" />
              <circle cx="70" cy="165" r="12" fill="#78350f" />

              <rect
                x="320"
                y="125"
                width="32"
                height="42"
                rx="4"
                fill="#047857"
              />
              <circle cx="336" cy="115" r="14" fill="#10b981" />
            </svg>
          </div>
        );

      case "finance":
        return (
          <div className="relative h-full w-full overflow-hidden bg-slate-900">
            <svg viewBox="0 0 400 240" className="h-full w-full object-cover">
              <rect width="400" height="240" fill="#090f1d" />
              {/* Stock chart candlestick & green curve */}
              <line
                x1="30"
                y1="50"
                x2="370"
                y2="50"
                stroke="#1e293b"
                strokeDasharray="3 3"
              />
              <line
                x1="30"
                y1="100"
                x2="370"
                y2="100"
                stroke="#1e293b"
                strokeDasharray="3 3"
              />
              <line
                x1="30"
                y1="150"
                x2="370"
                y2="150"
                stroke="#1e293b"
                strokeDasharray="3 3"
              />

              {/* Stock price numbers */}
              <text x="45" y="45" fill="#64748b" fontSize="10">
                890
              </text>
              <text x="45" y="95" fill="#64748b" fontSize="10">
                780
              </text>
              <text x="45" y="145" fill="#64748b" fontSize="10">
                675
              </text>

              {/* Green trend curve */}
              <path
                d="M50 170 C 110 150, 140 180, 190 110 C 230 50, 270 95, 310 65 C 340 45, 360 30, 380 35"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Gradient glow under curve */}
              <path
                d="M50 170 C 110 150, 140 180, 190 110 C 230 50, 270 95, 310 65 C 340 45, 360 30, 380 35 L 380 220 L 50 220 Z"
                fill="url(#greenGlow)"
                opacity="0.25"
              />

              <defs>
                <linearGradient id="greenGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#090f1d" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );

      case "startup":
      default:
        return (
          <div className="relative h-full w-full overflow-hidden bg-slate-900">
            <svg viewBox="0 0 400 240" className="h-full w-full object-cover">
              <rect width="400" height="240" fill="#0f172a" />
              {/* Glass strategy whiteboard */}
              <rect
                x="50"
                y="25"
                width="300"
                height="170"
                rx="8"
                fill="#1e293b"
                opacity="0.9"
                stroke="#475569"
              />

              {/* Sticky columns */}
              <rect
                x="75"
                y="45"
                width="60"
                height="15"
                rx="3"
                fill="#f59e0b"
              />
              <rect
                x="75"
                y="70"
                width="55"
                height="30"
                rx="3"
                fill="#fef08a"
              />
              <rect
                x="75"
                y="110"
                width="55"
                height="25"
                rx="3"
                fill="#fde047"
              />

              <rect
                x="170"
                y="45"
                width="60"
                height="15"
                rx="3"
                fill="#3b82f6"
              />
              <rect
                x="170"
                y="70"
                width="55"
                height="35"
                rx="3"
                fill="#93c5fd"
              />
              <rect
                x="170"
                y="115"
                width="55"
                height="30"
                rx="3"
                fill="#bfdbfe"
              />

              <rect
                x="265"
                y="45"
                width="60"
                height="15"
                rx="3"
                fill="#10b981"
              />
              <rect
                x="265"
                y="70"
                width="55"
                height="40"
                rx="3"
                fill="#a7f3d0"
              />

              {/* Connecting arrows */}
              <path
                d="M140 85 L160 85"
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="arrow"
              />
              <path d="M235 85 L255 85" stroke="#94a3b8" strokeWidth="2" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-slate-100">
      {renderVisual()}

      {/* Badges on image overlay from the design: 17 Lessons | 2 hours 16 mins | 59 Comments */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[10px] font-semibold text-white">
        <span className="rounded-md bg-black/60 px-2 py-0.5 backdrop-blur-md">
          {course.lessonsCount} Lessons
        </span>
        <span className="rounded-md bg-black/60 px-2 py-0.5 backdrop-blur-md">
          {course.duration}
        </span>
        <span className="rounded-md bg-black/60 px-2 py-0.5 backdrop-blur-md">
          {course.commentsCount} Comments
        </span>
      </div>
    </div>
  );
}
