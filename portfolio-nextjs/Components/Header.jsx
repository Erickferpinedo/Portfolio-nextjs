"use client";

import React, { useState } from "react";

export default function Header({ gameActive, setGameActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <a href="#home" className="font-semibold tracking-tight text-neutral-900">
          Erick Pinedo
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 sm:flex text-sm font-medium text-neutral-700">
          <a href="#about" className="hover:text-cyan-600">About</a>
          <a href="#projects" className="hover:text-cyan-600">Projects</a>
          <a href="#experience" className="hover:text-cyan-600">Experience</a>
          <a href="#contact" className="hover:text-cyan-600">Contact</a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setGameActive?.((v) => !v)}
            className="hidden rounded-full border border-neutral-300 px-3 py-1 text-xs sm:inline-block"
          >
            {gameActive ? "Pause game" : "Play game"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-neutral-900 px-3 py-1 text-xs text-white hover:opacity-90 sm:inline-block"
          >
            Let’s talk
          </a>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1">
              <div className="h-0.5 w-6 bg-neutral-900" />
              <div className="h-0.5 w-6 bg-neutral-900" />
              <div className="h-0.5 w-6 bg-neutral-900" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-neutral-200/70 bg-white px-4 py-2 sm:hidden">
          <div className="flex flex-col gap-2 text-sm">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button
              onClick={() => {
                setGameActive?.((v) => !v);
                setMenuOpen(false);
              }}
              className="rounded-full border border-neutral-300 px-3 py-1 text-xs"
            >
              {gameActive ? "Pause game" : "Play game"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
