import { TESTIMONIALS } from "@/components/data/coursesData";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Soft Ambient Lime / Yellow glow in the background as shown in image */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-1/4 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* 2-Column Header */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div>
            <p className="text-balance text-xs leading-relaxed text-slate-500 sm:text-sm">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-slate-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Fallback avatar icon
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-xs font-bold text-white -z-10">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-5 text-xs leading-relaxed text-slate-600 sm:text-sm font-normal">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
