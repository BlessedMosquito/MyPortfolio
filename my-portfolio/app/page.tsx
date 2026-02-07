"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  const titleReveal = useInView<HTMLHeadingElement>(0.35);
  const textReveal = useInView<HTMLParagraphElement>(0.35);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl hover:underline">
          Let&apos;s bring your buisiness to the next level
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
          Scroll down to see more details and how we can help you grow.
        </p>
        <a
          href="#more"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        >
          Scroll down for more
        </a>
      </main>
      <section id="more" className="bg-white text-black">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pb-20 text-center">
          <h2
            ref={titleReveal.ref}
            className={`text-2xl font-semibold transition-all duration-700 sm:text-3xl ${
              titleReveal.inView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            More information
          </h2>
          <p
            ref={textReveal.ref}
            className={`mt-4 max-w-2xl text-base text-zinc-700 transition-all duration-700 delay-300 sm:text-lg ${
              textReveal.inView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Here you can add your services, process, and key benefits. Replace
            this text with your content.
          </p>
        </div>
      </section>
    </div>
  );
}
