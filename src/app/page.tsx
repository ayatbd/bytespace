export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
          ByteSpace
        </p>
        <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          Learn, create, and grow in your digital space.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300">
          Discover focused courses, meet creators, and build your next skill
          without the noise.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-300">
            Explore Courses
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
            Become a Creator
          </button>
        </div>
      </div>
    </main>
  );
}
