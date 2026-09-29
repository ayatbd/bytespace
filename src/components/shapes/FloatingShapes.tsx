import React from "react";

// Lime 3D Donut / Torus
export function LimeTorus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="limeTorusGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f4ff66" />
          <stop offset="35%" stopColor="#ccff00" />
          <stop offset="80%" stopColor="#8cb300" />
          <stop offset="100%" stopColor="#557000" />
        </radialGradient>
        <filter id="torusShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#001875" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#torusShadow)">
        <path
          d="M80 18C45.76 18 18 45.76 18 80C18 114.24 45.76 142 80 142C114.24 142 142 114.24 142 80C142 45.76 114.24 18 80 18ZM80 114C61.22 114 46 98.78 46 80C46 61.22 61.22 46 80 46C98.78 46 114 61.22 114 80C114 98.78 98.78 114 80 114Z"
          fill="url(#limeTorusGrad)"
        />
        {/* Specular rim */}
        <path
          d="M48 60C54 48 66 42 80 42C94 42 106 48 112 60"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </g>
    </svg>
  );
}

// 3D Coiled Spring (Spiral)
export function LimeSpring({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="springGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faff80" />
          <stop offset="40%" stopColor="#ccff00" />
          <stop offset="100%" stopColor="#739900" />
        </linearGradient>
        <filter id="springShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#001875" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#springShadow)">
        {/* Coil 1 */}
        <path
          d="M30 40C20 48 20 62 40 70C65 80 110 75 110 55C110 35 65 30 40 40"
          fill="none"
          stroke="url(#springGrad1)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Coil 2 */}
        <path
          d="M30 75C20 83 20 97 40 105C65 115 110 110 110 90C110 70 65 65 40 75"
          fill="none"
          stroke="url(#springGrad1)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Coil 3 */}
        <path
          d="M30 110C20 118 20 132 40 140C65 150 110 145 110 125C110 105 65 100 40 110"
          fill="none"
          stroke="url(#springGrad1)"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

// White 3D Torus
export function WhiteTorus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="whiteTorusGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
        <filter id="whiteTorusShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="8" stdDeviation="8" floodColor="#001250" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#whiteTorusShadow)">
        <path
          d="M65 15C37.38 15 15 37.38 15 65C15 92.62 37.38 115 65 115C92.62 115 115 92.62 115 65C115 37.38 92.62 15 65 15ZM65 90C51.2 90 40 78.8 40 65C40 51.2 51.2 40 65 40C78.8 40 90 51.2 90 65C90 78.8 78.8 90 65 90Z"
          fill="url(#whiteTorusGrad)"
        />
      </g>
    </svg>
  );
}

// White Squiggle Ribbon
export function WhiteSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="squiggleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <filter id="sqShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#001875" floodOpacity="0.25" />
        </filter>
      </defs>
      <path
        d="M20 30C45 15 75 45 60 70C48 90 90 105 105 90"
        stroke="url(#squiggleGrad)"
        strokeWidth="18"
        strokeLinecap="round"
        filter="url(#sqShadow)"
      />
    </svg>
  );
}

// 3D Yellow Cylinder
export function LimeCylinder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 110 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cylSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ccff00" />
          <stop offset="50%" stopColor="#e5ff66" />
          <stop offset="100%" stopColor="#7a9900" />
        </linearGradient>
        <radialGradient id="cylTop" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#faff80" />
          <stop offset="100%" stopColor="#ccff00" />
        </radialGradient>
        <filter id="cylShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#001875" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#cylShadow)">
        <path d="M15 35H95V105C95 116 77 125 55 125C33 125 15 116 15 105V35Z" fill="url(#cylSide)" />
        <ellipse cx="55" cy="35" rx="40" ry="16" fill="url(#cylTop)" />
      </g>
    </svg>
  );
}

// 3D White Pyramid / Wedge
export function WhitePrism({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="prismLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="prismDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <filter id="prismShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="8" stdDeviation="7" floodColor="#001875" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#prismShadow)">
        {/* Front light face */}
        <polygon points="60,15 15,95 80,105" fill="url(#prismLight)" />
        {/* Side shadow face */}
        <polygon points="60,15 80,105 105,75" fill="url(#prismDark)" />
      </g>
    </svg>
  );
}

// ByteSpace Brand Logo Mark
export function ByteSpaceLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-extrabold tracking-tight ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-lime-400 text-slate-950 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-slate-950 stroke-[2.4]">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M9 7h6" />
          <path d="M9 11h4" />
        </svg>
      </div>
      <span className="text-xl font-black tracking-tight text-white">
        Byte<span className="text-white">Space</span>
      </span>
    </div>
  );
}

// Dark variant for light backgrounds (e.g. footer)
export function ByteSpaceLogoDark({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-extrabold tracking-tight ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-lime-400 text-slate-950 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-slate-950 stroke-[2.4]">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M9 7h6" />
          <path d="M9 11h4" />
        </svg>
      </div>
      <span className="text-xl font-black tracking-tight text-slate-900">
        Byte<span className="text-slate-900">Space</span>
      </span>
    </div>
  );
}
