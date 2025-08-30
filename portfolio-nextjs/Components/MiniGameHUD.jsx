"use client";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function MiniGameHUD({
  total,
  collected,
  onReset,
  gameActive,
  onStart,
  onPause,
  completedOnce,
}) {
  const progress = Math.round((collected / total) * 100);

  // --- position state (in pixels from top/left) ---
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false); // wait for window size
  const hudRef = useRef(null);
  const dragRef = useRef({ dragging: false, offsetX: 0, offsetY: 0 });

  // clamp helper so HUD stays inside viewport
  const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

  // Load saved position or start near bottom-right
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("orbHudPos");
    const hud = hudRef.current;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const hudW = hud?.offsetWidth ?? 260;
    const hudH = hud?.offsetHeight ?? 44;

    if (saved) {
      try {
        const p = JSON.parse(saved);
        setPos({
          x: clamp(p.x, 8, w - hudW - 8),
          y: clamp(p.y, 8, h - hudH - 8),
        });
      } catch {
        setPos({ x: w - hudW - 24, y: h - hudH - 24 });
      }
    } else {
      setPos({ x: w - hudW - 24, y: h - hudH - 24 });
    }
    setReady(true);
  }, []);

  // Save position on change
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("orbHudPos", JSON.stringify(pos));
  }, [pos, ready]);

  // Update clamps on resize
  useEffect(() => {
    const onResize = () => {
      const hud = hudRef.current;
      if (!hud) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const hudW = hud.offsetWidth;
      const hudH = hud.offsetHeight;
      setPos((p) => ({
        x: clamp(p.x, 8, w - hudW - 8),
        y: clamp(p.y, 8, h - hudH - 8),
      }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Start dragging (pointer works for mouse + touch)
  const onPointerDown = (e) => {
    // don’t start dragging if the button itself was pressed
    if (e.target.closest("button")) return;

    const hud = hudRef.current;
    if (!hud) return;
    hud.setPointerCapture?.(e.pointerId);
    dragRef.current.dragging = true;
    dragRef.current.offsetX = e.clientX - pos.x;
    dragRef.current.offsetY = e.clientY - pos.y;
    document.body.style.userSelect = "none";
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.dragging) return;
    const hud = hudRef.current;
    if (!hud) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const hudW = hud.offsetWidth;
    const hudH = hud.offsetHeight;

    const nextX = clamp(e.clientX - dragRef.current.offsetX, 8, w - hudW - 8);
    const nextY = clamp(e.clientY - dragRef.current.offsetY, 8, h - hudH - 8);
    setPos({ x: nextX, y: nextY });
  };

  const onPointerUp = (e) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    const hud = hudRef.current;
    hud?.releasePointerCapture?.(e.pointerId);
    document.body.style.userSelect = "";
  };

  const showPlayAgain = !gameActive && (completedOnce || collected >= total);
  const ctaLabel = gameActive ? "Pause" : showPlayAgain ? "Play again" : "Start";

  return (
    <div
      ref={hudRef}
      style={{ left: pos.x, top: pos.y }}
      className="fixed z-[55] flex items-center gap-3 rounded-full bg-white/90 p-2 pl-3 shadow-xl backdrop-blur cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <span className="text-sm font-medium">Orb Quest</span>

      <div className="h-2 w-24 overflow-hidden rounded bg-neutral-200 sm:w-28" aria-hidden>
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="w-10 text-center text-xs font-semibold">
        {collected}/{total}
      </span>

      {/* Start/Pause */}
      {gameActive ? (
        <button
          onClick={(e) => { e.stopPropagation(); onPause(); }}
          className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white hover:opacity-90"
        >
          {ctaLabel}
        </button>
      ) : (
        <button
          onClick={(e) => { e.stopPropagation(); onStart(); }}
          className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white hover:opacity-90"
        >
          {ctaLabel}
        </button>
      )}

      {/* Explicit Reset */}
      <button
        onClick={(e) => { e.stopPropagation(); onReset(); }}
        className="rounded-full bg-neutral-200 px-3 py-1 text-xs text-neutral-900 hover:bg-neutral-300"
      >
        Reset
      </button>
    </div>
  );
}

MiniGameHUD.propTypes = {
  total: PropTypes.number.isRequired,
  collected: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
  gameActive: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  completedOnce: PropTypes.bool,
};
