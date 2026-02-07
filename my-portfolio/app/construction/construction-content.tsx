"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConstructionContent() {
  const router = useRouter();
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [navTarget, setNavTarget] = useState<null | "gallery" | "contact">(null);
  const [expandRect, setExpandRect] = useState<DOMRect | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const galleryRef = useRef<HTMLButtonElement | null>(null);
  const contactRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const titleTimer = window.setTimeout(() => setShowTitle(true), 150);
    const textTimer = window.setTimeout(() => setShowText(true), 350);
    return () => {
      window.clearTimeout(titleTimer);
      window.clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (!expandRect) return;
    const id = window.requestAnimationFrame(() => setIsExpanding(true));
    return () => window.cancelAnimationFrame(id);
  }, [expandRect]);

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-20 pt-10">
        <div className="flex items-center justify-center">
          <span
            className={`text-2xl font-semibold uppercase tracking-[0.4em] text-zinc-800 transition-all duration-700 sm:text-3xl ${
              showTitle ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
          >
            [Company name].
          </span>
        </div>

        <div className="mt-4 flex items-center justify-center text-center">
          <h1
            className={`text-2xl font-semibold transition-all duration-700 sm:text-4xl ${
              showTitle ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Under construction
          </h1>
        </div>

        <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-7">
          <div
            className={`relative w-full max-w-2xl rounded-3xl border border-zinc-200 bg-[#fff8c6] p-10 text-left shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-700 ${
              showText ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="absolute -top-3 left-10 h-4 w-24 rounded-full bg-white/70 shadow-sm" />
            <h2 className="text-lg font-semibold">About us:</h2>
            <p className="mt-4 text-sm text-zinc-700 sm:text-base">
              Add your company description here. You can talk about your mission,
              services, and what makes you unique.
            </p>
          </div>
          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ${
              showText ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <button
              type="button"
              ref={galleryRef}
              onClick={() => {
                const rect = galleryRef.current?.getBoundingClientRect();
                if (!rect) return;
                setNavTarget("gallery");
                setExpandRect(rect);
                setIsExpanding(false);
                window.setTimeout(() => {
                  router.push("/construction/gallery");
                }, 500);
              }}
              className={`rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition-all ${
                navTarget === "gallery"
                  ? "scale-110 shadow-[0_16px_30px_rgba(0,0,0,0.25)]"
                  : "hover:-translate-y-0.5 hover:bg-black"
              }`}
            >
              Gallery
            </button>
            <button
              type="button"
              ref={contactRef}
              onClick={() => {
                const rect = contactRef.current?.getBoundingClientRect();
                if (!rect) return;
                setNavTarget("contact");
                setExpandRect(rect);
                setIsExpanding(false);
                window.setTimeout(() => {
                  router.push("/construction/contact");
                }, 500);
              }}
              className={`rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 transition-all ${
                navTarget === "contact"
                  ? "scale-110 shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                  : "hover:-translate-y-0.5 hover:border-zinc-400"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      {expandRect && (
        <div
          aria-hidden="true"
          className="fixed z-50"
          style={{
            top: expandRect.top,
            left: expandRect.left,
            width: expandRect.width,
            height: expandRect.height,
            borderRadius: "9999px",
            backgroundColor: navTarget === "gallery" ? "#111827" : "#ffffff",
            border:
              navTarget === "gallery"
                ? "1px solid #111827"
                : "1px solid #e4e4e7",
            transition: "all 500ms ease",
            transform: isExpanding ? "scale(40)" : "scale(1)",
            transformOrigin: "center",
            boxShadow:
              navTarget === "gallery"
                ? "0 24px 60px rgba(0,0,0,0.35)"
                : "0 24px 60px rgba(0,0,0,0.18)",
          }}
        />
      )}
    </div>
  );
}
