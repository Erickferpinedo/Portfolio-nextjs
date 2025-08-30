"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * ConfettiToast
 * - Plays once per win (rising-edge of `show`)
 * - Auto-hides after `duration` ms (default 4000)
 * - Gentle confetti (one fall), subtle toast fades in/out
 */
export default function ConfettiToast({ show, onClose, duration = 4000 }) {
  const [visible, setVisible] = useState(false);
  const armedRef = useRef(false);   // prevents re-trigger while `show` stays true
  const timerRef = useRef(null);

  // Build confetti only while visible so it doesn't loop or re-randomize unnecessarily
  const pieces = useMemo(() => {
    if (!visible) return [];
    const rand = (min, max) => min + Math.random() * (max - min);
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      tx: rand(-50, 50),   // vw offset
      rot: rand(0, 360),   // start rotation
      dur: rand(3, 6),     // seconds
      delay: rand(0, 1.2), // seconds
    }));
  }, [visible]);

  useEffect(() => {
    // Rising edge: only fire when show flips false -> true
    if (show && !armedRef.current) {
      armedRef.current = true;
      setVisible(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setVisible(false);
        onClose?.(); // parent will setWin(false) + setDismissedWin(true)
      }, duration);
    }

    // When parent hides this (show=false), disarm so next win can trigger again
    if (!show) {
      armedRef.current = false;
      setVisible(false);
      clearTimeout(timerRef.current);
    }

    return () => clearTimeout(timerRef.current);
  }, [show, duration, onClose]);

  if (!visible) return null;

  return (
    <>
      {/* One-time falling confetti (no infinite loop) */}
      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        {pieces.map((p) => (
          <span
            key={p.id}
            className="absolute top-[-10%] left-1/2 h-2 w-2 rounded-sm"
            style={{
              background:
                "conic-gradient(from 0deg,#60a5fa,#34d399,#fbbf24,#f87171,#a78bfa,#60a5fa)",
              transform: `translateX(${p.tx}vw) rotate(${p.rot}deg)`,
              animation: `confettiFall ${p.dur}s linear forwards`,
              animationDelay: `${p.delay}s`,
              opacity: 0.85,
            }}
          />
        ))}
      </div>

      {/* Chill toast in bottom-center */}
      <div
        className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 transform animate-fadeInOut rounded-xl bg-white/90 px-6 py-4 shadow-lg backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <h4 className="text-lg font-semibold text-neutral-800 text-center">
          🎉 Well done!
        </h4>
        <p className="text-sm text-neutral-600 text-center">
          You collected all the orbs ✨
        </p>
      </div>

      <style jsx>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-10%) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px) scale(0.96); }
          15% { opacity: 1; transform: translateY(0) scale(1); }
          85% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(20px) scale(0.96); }
        }
        .animate-fadeInOut {
          animation: fadeInOut ${Math.max(duration, 1000)}ms ease forwards;
        }
      `}</style>
    </>
  );
}
