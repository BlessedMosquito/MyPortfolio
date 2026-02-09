"use client";

type Button = {
    label: string;
    href: string;
}

type ToolbarProps = {
  companyName: string;
  buttons: Button[];
  onNavigate?: (href: string) => void;
};

const maxNumberOfButtons = 5;
export default function Toolbar({
  companyName = "",
  buttons = [],
  onNavigate,
}: ToolbarProps) {
  return (
    <div className="mb-8 rounded-3xl border border-zinc-200 bg-white/90 px-6 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* LOGO + NAME */}
        <div className="flex items-center gap-3 text-zinc-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-zinc-800"
              fill="currentColor"
            >
              <path d="M3 20h18v2H3v-2Zm2-2h3v-9H5v9Zm5 0h4V4h-4v14Zm6 0h3V9h-3v9Z" />
            </svg>
          </div>

          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            {companyName}
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-3">
          {buttons.slice(0, maxNumberOfButtons).map((button) => (
            <button
              key={button.label}
              onClick={() => onNavigate?.(button.href)}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900"
            >
              {button.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
