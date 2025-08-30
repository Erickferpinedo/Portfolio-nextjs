"use client";
import React, { useEffect, useMemo } from "react";

export default function Confetti({ show, onClose }) {
  // ❗ Early return BEFORE any hooks
  if (!show) return null;

  const pieces = useMemo(() => Array.from({ length: 120 }, (_, i) => i), []);

  const goto = (hash) => {
    onClose?.(); // close first
    // then navigate next frame so the overlay is gone
    requestAnimationFrame(() => {
      const sel = hash?.startsWith("#") ? hash : `#${hash}`;
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = sel;
    });
  };

  // Close on Esc (hook now runs on every render path)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* confetti layer (ignores clicks) */}
      <div className="pointer-events-none absolute inset-0">
        {pieces.map((i) => (
          <span
            key={i}
            className="absolute top-[-10%] left-1/2 h-2 w-2 origin-center rounded-sm"
            style={{
              background:
                "conic-gradient(from 0deg,#06b6d4,#a78bfa,#22c55e,#fbbf24,#ef4444,#06b6d4)",
              transform: `translateX(${(Math.random() * 100 - 50).toFixed(0)}vw) rotate(${Math.random() * 360}deg)`,
              animation: `confetti ${4 + Math.random() * 3}s linear infinite`,
              animationDelay: `${(Math.random() * 1.5).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      {/* backdrop (click to close) */}
      <button
        aria-label="Close"
        className="pointer-events-auto absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      {/* modal */}
      <div className="pointer-events-auto absolute inset-x-0 top-1/4 mx-auto w-full max-w-xl rounded-2xl bg-white/95 p-6 text-center shadow-2xl backdrop-blur">
        {/* X button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl text-neutral-600 hover:text-neutral-900"
        >
          ×
        </button>

        <h3 className="text-2xl font-bold">🎉 Secret Unlocked!</h3>
        <p className="mt-2 text-neutral-700">
          You found all hidden orbs. Use this momentum to get in touch or view the projects.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => goto("#contact")}
            className="rounded-full bg-neutral-900 px-5 py-2 text-white hover:opacity-90"
          >
            Contact
          </button>
          <button
            onClick={() => goto("#projects")}
            className="rounded-full border border-neutral-300 px-5 py-2 hover:bg-neutral-50"
          >
            Projects
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(-10%) translateX(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) translateX(10vw) rotate(720deg); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
