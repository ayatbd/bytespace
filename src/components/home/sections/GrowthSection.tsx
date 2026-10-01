const stats = [
  { value: "12K+", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Mentors" },
];

export function GrowthSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Your path to growth
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Your path to professional growth starts here.
          </h2>

          <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
            Explore curated learning paths designed to help you build
            confidence, sharpen your technical edge, and launch the next chapter
            of your career.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-100 p-5 text-center ring-1 ring-slate-200"
              >
                <div className="text-3xl font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] bg-[#d7ff55] p-6 shadow-[0_20px_60px_rgba(23,70,224,0.18)]">
            <div className="rounded-[28px] bg-[#1c4ae5] p-4 text-white">
              <div className="flex items-center justify-between text-sm">
                <span>Team member</span>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs">
                  55%
                </span>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <div className="flex h-52 w-52 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#f5d7c7] via-[#d4e7ff] to-[#d8ff38] text-4xl font-black text-slate-900 shadow-inner">
                  <span>🙂</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
