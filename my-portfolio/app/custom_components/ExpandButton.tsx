"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExpandButton({
  href,
  variant = "dark",
  children,
}: {
  href: string;
  variant?: "dark" | "light";
  children: React.ReactNode;
}) {
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);

  const [rect, setRect] = useState<DOMRect | null>(null);
  const [expand, setExpand] = useState(false);

  return (
    <>
      <button
        ref={ref}
        onClick={() => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;

          setRect(r);

          requestAnimationFrame(() => setExpand(true));

          setTimeout(() => router.push(href), 500);
        }}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5
          ${
            variant === "dark"
              ? "bg-black text-white"
              : "bg-white border text-black"
          }`}
      >
        {children}
      </button>

      {rect && (
        <div
          className="fixed z-50"
          style={{
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            borderRadius: "9999px",
            background: variant === "dark" ? "#000" : "#fff",
            transition: "all 500ms ease",
            transform: expand ? "scale(40)" : "scale(1)",
          }}
        />
      )}
    </>
  );
}
