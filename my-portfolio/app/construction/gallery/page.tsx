import ExpandButton from "@/app/custom_components/ExpandButton";

export default function ConstructionGalleryPage() {
  const tiles = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="min-h-screen bg-white text-black flex-col items-center justify-center">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 self-start ml-2">
      <ExpandButton href="/construction" variant="dark">
          Back
      </ExpandButton>
      </div>
        <div className="w-full rounded-3xl border border-zinc-200 bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <h1 className="text-3xl font-semibold sm:text-5xl">Photos</h1>
          <p className="mt-3 text-base text-zinc-600 sm:text-lg">
            [Your text goes here]
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((tile) => (
              <label
                key={tile}
                className="group flex h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium text-zinc-600 transition hover:border-zinc-400 hover:bg-white"
              >
                <input type="file" accept="image/*" className="hidden" />
                <span className="text-base text-zinc-700">[Photo {tile}]</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
