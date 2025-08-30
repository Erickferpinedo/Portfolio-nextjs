"use client";

import React from "react";

export default function Intro() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-10 sm:pt-16">
      {/* soft radial background blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#cffafe_0%,transparent_40%),radial-gradient(circle_at_80%_0%,#ddd6fe_0%,transparent_40%),radial-gradient(circle_at_50%_90%,#dcfce7_0%,transparent_40%)]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-12 sm:grid-cols-2 sm:pb-20">
        {/* Left copy */}
        <div>
          <p className="text-sm uppercase tracking-wider text-neutral-500">
            Portfolio
          </p>

          {/* ✅ Your name is the only <h1> */}
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl">
            Erick Pinedo
          </h1>

          {/* tagline */}
          <h2 className="mt-3 text-2xl font-semibold leading-snug text-neutral-800 sm:text-3xl">
            Build experiences that people remember.
          </h2>

          <p className="mt-4 max-w-prose text-lg font-medium text-neutral-800">
  I’m a Full-Stack Developer, IT Support, and Data Analyst.
  I combine clean design with fast performance and thoughtful details.
</p>

          {/* ✅ Unified buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            {/* Dark primary */}
            <a
              href="#projects"
              className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white 
                         hover:opacity-90 transition-colors"
            >
              View Projects
            </a>

            {/* Light secondary */}
            <a
              href="#contact"
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium 
                         text-neutral-700 bg-white 
                         hover:bg-neutral-100 hover:text-neutral-900 
                         transition-colors"
            >
              Contact
            </a>

            {/* Outline tertiary */}
            <a
              href="https://docs.google.com/document/d/1j75sF_Dj2t0GcoLjEos2zH0_NtBgGdHhTiewg4rmKI4/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium 
                         text-neutral-700 
                         hover:bg-neutral-50 hover:text-neutral-900 
                         transition-colors"
            >
              Resume
            </a>
          </div>
{/* mini-game status */}
<div className="mt-8 flex items-center gap-3 text-base font-medium text-neutral-800">
  <span className="flex items-center gap-2">
    <span role="img" aria-label="game" className="text-xl">🎮</span>
    Mini-game active
  </span>
  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
  <span className="text-sm sm:text-base text-neutral-700">
    Collect the floating orbs
  </span>
</div>
          {/* socials */}
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
            {[
              { href: "https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/", src: "/linkedin.png", alt: "LinkedIn" },
              { href: "https://github.com/Erickferpinedo", src: "/github.png", alt: "GitHub" },
              { href: "https://www.instagram.com/erickferpinedo/", src: "/instagram.png", alt: "Instagram" },
              { href: "https://wa.me/17862006991", src: "/whatsapp.png", alt: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-neutral-50"
                aria-label={s.alt}
              >
                <img src={s.src} alt={s.alt} width={24} height={24} className="h-6 w-6" />
                <span className="text-sm text-neutral-700">{s.alt}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 p-1 shadow-2xl">
            <div className="relative grid h-full place-items-center overflow-hidden rounded-2xl bg-[conic-gradient(at_30%_30%,#14b8a6,30%,#8b5cf6,60%,#22c55e,85%,#14b8a6)]">
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
                Erick Pinedo — Full-Stack • IT Support • Data Analyst
              </div>
              <div className="pointer-events-none absolute inset-0 animate-spin-slow bg-[radial-gradient(circle_at_50%_50%,transparent_55%,rgba(255,255,255,0.06)_56%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
