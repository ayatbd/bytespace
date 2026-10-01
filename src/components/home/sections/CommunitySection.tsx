const community = [
  {
    name: "Sarah M.",
    role: "Frontend Learner",
    quote:
      "ByteSpace helped me move from curiosity to confidence. The lessons were practical and easy to apply to my projects.",
  },
  {
    name: "James L.",
    role: "UI/UX Designer",
    quote:
      "I found a learning path that fit my schedule and a community that genuinely supported my progress and creativity.",
  },
  {
    name: "Alex B.",
    role: "Aspiring Creator",
    quote:
      "The curriculum is useful, the feedback is honest, and the structure makes it easy to stay motivated week after week.",
  },
];

export function CommunitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Community
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Discover what our community is saying.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {community.map((member) => (
          <article
            key={member.name}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d8ff38] to-[#b7edff] text-lg font-black text-slate-900">
              {member.name.charAt(0)}
            </div>
            <div className="mb-3">
              <h3 className="text-xl font-black text-slate-900">
                {member.name}
              </h3>
              <p className="text-sm text-slate-500">{member.role}</p>
            </div>
            <p className="text-sm leading-7 text-slate-600">“{member.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
