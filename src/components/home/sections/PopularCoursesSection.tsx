const courses = [
  {
    title: "UI/UX Design Fundamentals",
    level: "Beginner",
    accent: "from-[#f6d9c9] to-[#f8bca5]",
  },
  {
    title: "Data Science Essentials",
    level: "Intermediate",
    accent: "from-[#d7f4d4] to-[#a8e6a3]",
  },
  {
    title: "Growth Marketing",
    level: "All Levels",
    accent: "from-[#d9e6ff] to-[#a5c3ff]",
  },
  {
    title: "Productivity & Focus",
    level: "Beginner",
    accent: "from-[#ffecc8] to-[#ffd38a]",
  },
  {
    title: "Building a Portfolio",
    level: "Intermediate",
    accent: "from-[#d7d7ff] to-[#b2b3ff]",
  },
  {
    title: "Remote Career Skills",
    level: "All Levels",
    accent: "from-[#d5f5ef] to-[#8fe2d3]",
  },
];

export function PopularCoursesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Popular courses
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Explore what learners are building next.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
          >
            <div className={`h-52 bg-gradient-to-br ${course.accent}`} />
            <div className="p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                {course.level}
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">
                {course.title}
              </h3>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600">
                  4.9 rating
                </span>
                <span className="rounded-full bg-[#d8ff38] px-3 py-1 text-xs font-black text-slate-900">
                  $25
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
