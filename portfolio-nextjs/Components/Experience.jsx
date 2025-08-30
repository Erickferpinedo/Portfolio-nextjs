"use client";

import React from "react";

export default function Experience() {
  const languages = [
    "HTML/CSS",
    "Tailwind CSS",
    "JavaScript",
    "Java",
    "PHP",
    "SQL",
    "TypeScript",
    "CSS (Modules)",
  ];

  const tech = [
    "Express.js",
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "MySQL",
    "Figma",
    "GCP",
    "Git",
    "Bootstrap",
  ];

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-wider text-neutral-500">
          Explore My
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-neutral-600  sm:text-4xl">
          Experience
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-neutral-700 dark:text-neutral-600">
          A quick view of the languages and technologies I have used to build
          fast, accessible, and maintainable products.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Languages */}
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <header className="mb-4 flex items-center gap-3">
           
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Languages
            </h3>
          </header>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {languages.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* Technologies */}
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <header className="mb-4 flex items-center gap-3">
            
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Technologies
            </h3>
          </header>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {tech.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
