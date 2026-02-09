"use client";

type PageOpening = {
  isActive: boolean;
};

export default function PageOpening({
  isActive,
}: PageOpening) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
  <span className="panel left" />
  <span className="panel right" />

  <style jsx>{`
    .panel {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 50%;
      background: rgba(228, 228, 231, 0.95);
      animation: rise 700ms cubic-bezier(0.55, 0.1, 0.25, 1) forwards,
        split 700ms cubic-bezier(0.55, 0.1, 0.25, 1) forwards;
      animation-delay: 0ms, 700ms;
    }

    .left {
      left: 0;
      --dir: -120%;
    }

    .right {
      right: 0;
      --dir: 120%;
    }

    @keyframes rise {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes split {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(var(--dir));
      }
    }
  `}</style>
</div>

  );
}
