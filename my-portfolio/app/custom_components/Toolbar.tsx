"use client";

type Button = {
  label: string;
  href: string;
};

type Props = {
  companyName: string;
  buttons: Button[];
  onNavigate: (href: string) => void;
};

export default function Toolbar({ companyName, buttons, onNavigate }: Props) {
  return (
    <div className="mb-10 rounded-3xl bg-white/90 px-6 py-4 shadow backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="font-semibold tracking-widest">{companyName}</span>

        <div className="flex gap-3">
          {buttons.map((b, i) => (
            <button
              key={i}
              onClick={() => onNavigate(b.href)}
              className="rounded-full border px-4 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
