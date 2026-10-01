import Link from "next/link";

type AuthCardProps = {
  mode: "login" | "register";
};

export default function AuthCard({ mode }: AuthCardProps) {
  const isLogin = mode === "login";

  return (
    <main className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#02060d]">
      <div className="auth-page-grid absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-x-10 gap-y-8 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-6 lg:py-14">
        <div className="relative mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center">
          <div className="pointer-events-none absolute -left-3 top-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-medium text-white/90 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            {isLogin ? "Sign in with ease" : "Sign up and code in"}
          </div>

          <div className="pointer-events-none absolute left-[26%] top-[24%] h-28 w-28 rounded-full border-[12px] border-[#d8ff38] bg-transparent shadow-[0_0_30px_rgba(170,255,35,0.4)]" />
          <div className="pointer-events-none absolute left-[18%] bottom-[12%] h-20 w-20 -rotate-12 rounded-[28%] bg-[#d8ff38] shadow-[0_20px_50px_rgba(170,255,35,0.25)]" />
          <div className="pointer-events-none absolute right-[10%] bottom-[18%] h-16 w-16 rotate-12 rounded-[28%] bg-[#d8ff38] shadow-[0_20px_50px_rgba(170,255,35,0.25)]" />

          <div className="relative w-[360px] rounded-[32px] border border-slate-200/20 bg-[#dfe3e7] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="rounded-[26px] bg-[#0b1320] p-3 text-white">
              <div className="mb-3 flex items-center justify-between text-[9px] text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff7a61]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
                </div>
                <span>Live</span>
              </div>

              <div className="rounded-[18px] bg-[#0d1a2b] p-3">
                <div className="flex gap-1">
                  {[42, 48, 60, 40, 72, 52].map((height, index) => (
                    <span
                      key={index}
                      className="mt-auto w-full rounded-t-md bg-gradient-to-t from-[#182d4b] via-[#2de0ff] to-[#c8ff52]"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-slate-300">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    17 lessons
                  </p>
                  <p className="mt-1 text-[13px] font-medium">
                    Course progress
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300">
                  <span>4.5 ★</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[18px] bg-[#f5f7f9] p-3 shadow-inner shadow-white/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-slate-400">
                    Data science
                  </p>
                  <h3 className="mt-1 text-xl font-black text-slate-900">
                    The Power of Big Data
                  </h3>
                </div>
                <div className="rounded-full bg-[#d8ff38] px-2 py-1 text-[10px] font-bold text-slate-900">
                  4.5 ★
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[9px] text-slate-500">
                <span>17 Lessons</span>
                <span>by senior data team</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#fcd34d] via-[#f59e0b] to-[#f97316] text-[9px] font-bold text-white"
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div className="text-right text-[10px] text-slate-500">
                  <div>25k</div>
                  <div>students</div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[20px] bg-[#d5ff39] p-3 text-slate-900 shadow-[0_18px_30px_rgba(167,255,54,0.3)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-slate-800/70">
                    Happy students
                  </p>
                  <p className="mt-1 text-[18px] font-black">4.5 ★</p>
                </div>
                <div className="flex -space-x-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#d5ff39] bg-[#f4d0a0] text-[9px] font-bold text-slate-900"
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[420px] rounded-[28px] bg-[#f3f4f6] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.15)] sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {isLogin ? "Sign In" : "Create an Account"}
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-[3rem]">
            {isLogin ? (
              "Welcome Back"
            ) : (
              <>
                Welcome to
                <br />
                ByteSpace
              </>
            )}
          </h2>

          {isLogin ? (
            <div className="mt-7 space-y-5">
              <label className="block text-sm font-medium text-slate-600">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  defaultValue="designer@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
              </label>

              <label className="block text-sm font-medium text-slate-600">
                <span className="mb-2 block">Password</span>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
              </label>

              <button
                type="button"
                className="w-full rounded-full bg-[#d8ff38] px-4 py-3 text-base font-black text-slate-900 transition hover:bg-[#c9f12f]"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="mt-7 space-y-5">
              <label className="block text-sm font-medium text-slate-600">
                <span className="mb-2 block">Full Name</span>
                <input
                  type="text"
                  defaultValue="Jamie Davis"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
              </label>

              <label className="block text-sm font-medium text-slate-600">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  defaultValue="designer@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
              </label>

              <label className="block text-sm font-medium text-slate-600">
                <span className="mb-2 block">Password</span>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
                />
              </label>

              <button
                type="button"
                className="w-full rounded-full bg-[#d8ff38] px-4 py-3 text-base font-black text-slate-900 transition hover:bg-[#c9f12f]"
              >
                Continue
              </button>
            </div>
          )}

          {isLogin && (
            <>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <span className="h-px flex-1 bg-slate-300" />
                <span>or</span>
                <span className="h-px flex-1 bg-slate-300" />
              </div>

              <div className="mt-6 flex justify-center gap-5">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:border-slate-300"
                  aria-label="Continue with Facebook"
                >
                  f
                </button>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:border-slate-300"
                  aria-label="Continue with Google"
                >
                  G
                </button>
              </div>
            </>
          )}

          <div className="mt-6 text-center text-sm text-slate-600">
            {isLogin ? (
              <>
                New user?{" "}
                <Link href="/register" className="font-bold text-slate-900">
                  Create an account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-slate-900">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
