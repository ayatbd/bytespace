import {
  LimeSpring,
  LimeTorus,
  WhitePrism,
  WhiteSquiggle,
} from "@/components/shapes/FloatingShapes";

interface CreatorCtaSectionProps {
  onJoinAsCreator: () => void;
}

export function CreatorCtaSection({ onJoinAsCreator }: CreatorCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1746e0] bg-grid-pattern py-20 sm:py-28 text-center text-white">
      {/* 3D Floating Shapes */}
      <div className="pointer-events-none absolute -left-6 top-6 h-32 w-32 sm:left-6 sm:top-10 sm:h-44 sm:w-44 animate-float">
        <LimeTorus className="h-full w-full rotate-45" />
      </div>
      <div className="pointer-events-none absolute left-12 bottom-6 h-24 w-24 sm:left-24 sm:bottom-12 sm:h-32 sm:w-32 animate-float-reverse">
        <WhiteSquiggle className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute -right-6 top-8 h-28 w-28 sm:right-12 sm:top-12 sm:h-36 sm:w-36 animate-float">
        <WhitePrism className="h-full w-full -rotate-12" />
      </div>
      <div className="pointer-events-none absolute right-4 bottom-4 h-32 w-32 sm:right-16 sm:bottom-10 sm:h-44 sm:w-44 animate-float-reverse">
        <LimeSpring className="h-full w-full rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-balance text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onJoinAsCreator}
            className="rounded-full bg-lime-400 px-8 py-3.5 text-xs font-black text-slate-950 shadow-2xl transition-all duration-200 hover:bg-lime-300 hover:scale-105 active:scale-95 sm:text-sm cursor-pointer"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
