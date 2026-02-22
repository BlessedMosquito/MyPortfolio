"use client";

import { useEffect, useState } from "react";

import PageOpening from "@/app/custom_components/PageOpening";
import Toolbar from "@/app/custom_components/Toolbar";
import background2 from "@/app/construction/photos/background2.jpg";
import { useRouter } from "next/navigation";

export default function ConstructionGalleryPage() {
  const projects = [
    {
      title: "Renowacja lazienki",
      description: "Modernizacja starej lazienki wraz z wymiana plytek i armatury.",
    },
    {
      title: "Remont kuchni",
      description: "Kompleksowe odswiezenie kuchni i nowy uklad funkcjonalny.",
    },
    {
      title: "Wykonczenie salonu",
      description: "Prace wykonczeniowe: sciany, podloga, oswietlenie i detale.",
    },
    {
      title: "Termomodernizacja elewacji",
      description: "Ocieplenie budynku i odnowienie fasady zewnetrznej.",
    },
    {
      title: "Adaptacja poddasza",
      description: "Przebudowa poddasza na przestrzen uzytkowa.",
    },
    {
      title: "Renowacja tarasu",
      description: "Naprawa konstrukcji tarasu i nowa estetyka wykonczenia.",
    },
  ];

  const [isOpening, setIsOpening] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpening(false);
    }, 1400);
    return () => window.clearTimeout(timer);
  }, []);

  const handleToolbarNavigate = (href: string) => {
    if (!href) return;
    router.push(href);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-white text-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
       <div
          className="absolute inset-0 bg-cover opacity-90 blur-[1px]"
          style={{ backgroundImage: `url(${background2.src})` }}
        />
        <div className="absolute inset-0 from-transparent via-white/70 to-white" />
      </div>

      <PageOpening isActive={isOpening} />

      <section className="relative mx-auto flex max-w-5xl flex-col px-6 pt-10">
        <Toolbar
          companyName="Company Name"
          buttons={[
            { label: "About Us", href: "/construction" },
            { label: "Our Projects", href: "/construction/gallery" },
            { label: "Contact", href: "/construction/contact" },
          ]}
          onNavigate={handleToolbarNavigate}
        />
      </section>

      <section
        className={`relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-2 text-center transition-opacity duration-300 ${
          isOpening ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full rounded-3xl border border-zinc-200 bg-white p-11 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <h1 className="text-3xl font-semibold sm:text-5xl">Projekty</h1>
          <p className="mt-3 text-base text-zinc-600 sm:text-lg">
            Kazdy projekt zawiera opis oraz zdjecia przed i po realizacji.
          </p>

          <div className="mt-8 text-sm font-medium text-zinc-600">
            {activeIndex + 1} / {projects.length}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Poprzedni projekt"
              className="shrink-0 rounded-full border border-zinc-300 bg-white/95 px-3 py-2 text-xl font-semibold text-zinc-700 shadow transition hover:border-zinc-500 hover:text-zinc-900"
            >
              {"<"}
            </button>

            <div className="relative flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <article
                    key={project.title}
                    className="w-full shrink-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-7 text-left"
                  >
                    <h2 className="text-xl font-semibold text-zinc-900">
                      {index + 1}. {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="group flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white text-sm font-medium text-zinc-600 transition hover:border-zinc-400">
                        <input type="file" accept="image/*" className="hidden" />
                        <span className="text-base text-zinc-800">Zdjecie przed</span>
                      </label>
                      <label className="group flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white text-sm font-medium text-zinc-600 transition hover:border-zinc-400">
                        <input type="file" accept="image/*" className="hidden" />
                        <span className="text-base text-zinc-800">Zdjecie po</span>
                      </label>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Nastepny projekt"
              className="shrink-0 rounded-full border border-zinc-300 bg-white/95 px-3 py-2 text-xl font-semibold text-zinc-700 shadow transition hover:border-zinc-500 hover:text-zinc-900"
            >
              {">"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
