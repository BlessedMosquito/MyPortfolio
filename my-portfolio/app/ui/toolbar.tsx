"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Toolbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const openTimeoutRef = useRef<number | null>(null);
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

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) {
        window.clearTimeout(openTimeoutRef.current);
      }
    };
  }, []);

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
              onClick={() => {
                if (openTimeoutRef.current) {
                  window.clearTimeout(openTimeoutRef.current);
                }
                if (open) {
                  setOpen(false);
                  return;
                }
                openTimeoutRef.current = window.setTimeout(() => {
                  setOpen(true);
                }, 100);
              }}
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
                  viewBox="0 0 250 30"
                  fill="none"
                >
                  <path
                    d="
                      M 0,30
                      C 20,0
                        120,40
                        125,0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M125 30 C125 6 125 6 125 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="
                      M 240, 30
                      C 230, 0
                        130,40
                        125, 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/templates/construction");
                    setOpen(false);
                  }}
                  className="h-10 w-20 rounded-full border border-zinc-300 bg-zinc-200 text-[11px] font-semibold text-white shadow-sm transition-all hover:blur-[1px] dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Construction
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/templates/beauty");
                    setOpen(false);
                  }}
                  className="h-10 w-20 rounded-full border border-zinc-300 bg-zinc-200 text-[11px] font-semibold text-white shadow-sm transition-all hover:blur-[1px] dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Beauty
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/templates/fitness");
                    setOpen(false);
                  }}
                  className="h-10 w-20 rounded-full border border-zinc-300 bg-zinc-200 text-[11px] font-semibold text-white shadow-sm transition-all hover:blur-[1px] dark:border-zinc-700 dark:bg-zinc-800"
                >
                  Fitness
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
