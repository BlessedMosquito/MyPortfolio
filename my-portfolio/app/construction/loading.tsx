"use client";

import { useEffect, useMemo, useState } from "react";

export default function Loading() {
  const durationMs = 1000;
  const [value, setValue] = useState(0);
  const steps = useMemo(() => Math.max(10, Math.floor(durationMs / 10)), []);

  useEffect(() => {
    setValue(0);
    const intervalMs = Math.max(8, Math.floor(durationMs / steps));
    let current = 0;
    const id = window.setInterval(() => {
      current += 1;
      const next = Math.min(100, Math.round((current / steps) * 100));
      setValue(next);
      if (next >= 100) {
        window.clearInterval(id);
      }
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [durationMs, steps]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <div className="flex flex-col items-center gap-3">
        <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Construction
        </div>
        <div className="text-4xl font-semibold tabular-nums">{value}%</div>
      </div>
    </div>
  );
}
