"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Toolbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!triggerRef.current) return;
      const target = event.target as Node;
      if (!triggerRef.current.parentElement?.contains(target)) {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          My App
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          <Link
            href="/"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Home
          </Link>
          <div className="relative">
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={open}
              aria-haspopup="menu"
              onClick={() => setOpen((value) => !value)}
              className="h-8 rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-100"
            >
              Templates
            </button>
            <div
              aria-label="Templates menu"
              className={`absolute left-1/2 top-full mt-4 -translate-x-1/2 transition-all ${
                open
                  ? "pointer-events-auto opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 -translate-y-1"
              }`}
            >
              <div className="relative flex items-center gap-4 pt-6">
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-0 h-6 w-[220px] -translate-x-1/2 text-zinc-300 dark:text-zinc-700"
                  viewBox="0 0 220 26"
                  fill="none"
                >
                  <path
                    d="
                      M 26,26
                      C 26,0
                        110,26
                        110,0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M110 26 C110 6 110 6 110 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="
                      M 194,26
                      C 194,0
                        110,26
                        110,0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/templates/portfolio");
                    setOpen(false);
                  }}
                  className="h-10 w-16 rounded-full border border-zinc-300 bg-zinc-200 text-[11px] font-semibold text-white shadow-sm transition-all hover:blur-[1px] dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Port
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/templates/landing");
                    setOpen(false);
                  }}
                  className="h-10 w-16 rounded-full border border-zinc-300 bg-zinc-200 text-[11px] font-semibold text-white shadow-sm transition-all hover:blur-[1px] dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Land
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/templates/blog");
                    setOpen(false);
                  }}
                  className="h-10 w-16 rounded-full border border-zinc-300 bg-zinc-200 text-[11px] font-semibold text-white shadow-sm transition-all hover:blur-[1px] dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Blog
                </button>
              </div>
            </div>
          </div>
          <Link
            href="/#contact"
            className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
