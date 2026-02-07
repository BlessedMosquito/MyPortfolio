export default function ConstructionContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <div className="door-reveal w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <h1 className="text-3xl font-semibold sm:text-5xl">Contact</h1>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg">
            Add your contact information or form here.
          </p>
        </div>
      </section>
    </div>
  );
}
