import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

/**
 * OrbQuest
 * @param {Object} props
 * @param {boolean} props.active - whether the game is visible
 * @param {() => void} [props.onComplete] - called when all orbs are collected
 * @param {(n:number) => void} [props.onCountChange] - called with current collected count
 */
export default function OrbQuest({ active, onComplete, onCountChange }) {
  // Positions are percentages -> fully responsive on all screens
  const orbPositions = useMemo(
    () => [
      { top: "15%", left: "8%" },
      { top: "28%", left: "78%" },
      { top: "46%", left: "18%" },
      { top: "62%", left: "85%" },
      { top: "74%", left: "35%" },
      { top: "88%", left: "65%" },
      { top: "40%", left: "52%" },
      { top: "10%", left: "55%" },
    ],
    []
  );

  const [hidden, setHidden] = useState(() => new Set());

  useEffect(() => {
    // notify counters + completion
    onCountChange?.(hidden.size);
    if (hidden.size === orbPositions.length) onComplete?.();
  }, [hidden, orbPositions.length, onComplete, onCountChange]);

  useEffect(() => {
    // Reset each time it's (re)activated
    if (active === true) setHidden(new Set());
  }, [active]);

  if (!active) return null;

  const handleClick = (idx) => {
    if (hidden.has(idx)) return;
    const next = new Set(hidden);
    next.add(idx);
    setHidden(next);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[50]">
      {orbPositions.map((pos, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(idx)}
          aria-label="Collect orb"
          className={cx(
            "pointer-events-auto absolute h-7 w-7 rounded-full shadow-lg ring-1 ring-white/40 transition",
            "[animation:float_6s_ease-in-out_infinite]",
            hidden.has(idx) && "scale-0 opacity-0"
          )}
          style={{
            top: pos.top,
            left: pos.left,
            background:
              "radial-gradient(circle at 30% 30%, #a78bfa, #06b6d4)",
          }}
        />
      ))}
    </div>
  );
}

OrbQuest.propTypes = {
  active: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
  onCountChange: PropTypes.func,
};
