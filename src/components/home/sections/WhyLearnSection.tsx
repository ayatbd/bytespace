const reasons = [
  "Clear roadmaps built for beginners and pros",
  "Project-based lessons with practical feedback",
  "A growing community of creators and experts",
];

export function WhyLearnSection() {
  return (
    <section className="bg-[#eef3ff] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Why students choose us
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Learn at your own pace with real outcomes.
          </h2>
        </div>

        <div className="space-y-5">
          {reasons.map((point) => (
            <div
              key={point}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-lg font-semibold text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
