"use client";

import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-600">
          Get to know me
        </p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-600  sm:text-4xl">
          About
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[17px] leading-8 text-neutral-600 dark:text-neutral-600">
          I’m Erick Pinedo, focused on building calm, fast, and friendly web
          experiences. I care about clean UI, performance, and those small
          details that make products feel effortless.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Experience */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
            Experience
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-900 dark:text-neutral-300">
            1+ years building full-stack projects with attention to performance,
            accessibility, and maintainability.
          </p>
          <ul className="mt-4 space-y-2 text-[15px] text-neutral-900 dark:text-neutral-200">
            <li>• Full-Stack Development</li>
            <li>• Performance & Accessibility</li>
            <li>• Micro-interactions & polish</li>
          </ul>
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
            Education
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-900 dark:text-neutral-300">
            B.Sc. in Information Technology. I enjoy modern web stacks and calm,
            scalable design.
          </p>
          <ul className="mt-4 space-y-2 text-[15px] text-neutral-900 dark:text-neutral-200">
            <li>• Frontend: React, Next.js, Tailwind</li>
            <li>• Backend: Node.js, Express, MongoDB</li>
            <li>• Tooling: Git, CI/CD, Cloud basics</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {[
          "HTML/CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Tailwind",
          "Git",
        ].map((s) => (
          <span
            key={s}
            className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
