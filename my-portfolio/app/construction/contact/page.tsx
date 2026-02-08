export default function ConstructionContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="door-reveal w-full rounded-3xl border border-zinc-200 bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
            <div className="flex-1 text-left">
              <h1 className="text-3xl font-semibold sm:text-5xl">Contact</h1>
              <div className="mt-8 space-y-5 text-base text-zinc-600">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.13a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-zinc-400">
                      Number
                    </p>
                    <p className="text-lg text-zinc-800">123-456-789</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-zinc-400">
                      Address
                    </p>
                    <p className="text-lg text-zinc-800">street 1 / 12</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-zinc-400">
                      Email
                    </p>
                    <p className="text-lg text-zinc-800">example@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="h-full min-h-65 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
                <iframe
                  title="Location map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=21.0000%2C52.0000%2C21.0200%2C52.0100&layer=mapnik&marker=52.005%2C21.010"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
