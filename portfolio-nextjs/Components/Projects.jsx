"use client";

import React from "react";

export default function Projects() {
  const items = [
    {
      title: "SEMA — Disaster Preparedness",
      img: "/sema.png",
      desc:
        "Real-time alerts and nearby shelters using NOAA + Google Maps, plus an AI helper for guidance.",
      links: [
        { label: "GitHub", href: "https://github.com/sebilune/plutohacks-2024", kind: "ghost" },
        { label: "Live Demo", href: "https://plutohacks-2024.vercel.app/", kind: "primary" },
      ],
      tags: ["Next.js", "Maps", "AI"],
    },
    {
      title: "MedicalWise AI — Frontend",
      img: "/githubproject.jpg",
      desc:
        "Responsive React/Tailwind UI that surfaces drug-interaction insights. Ongoing—repo shows work to date.",
      links: [
        { label: "GitHub", href: "https://github.com/Erickferpinedo/medical-records", kind: "ghost" },
      ],
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "Choles Team — Club Site",
      img: "/LogoCholes.png",
      desc:
        "Next.js + Firebase site with registration flow; clear sections and mobile-first layout.",
      links: [
        { label: "GitHub", href: "https://github.com/Erickferpinedo/CholesTeamWeb", kind: "ghost" },
        { label: "Live Demo", href: "https://choles-team.web.app/", kind: "primary" },
      ],
      tags: ["Next.js", "Firebase", "Forms"],
    },
    {
      title: "JP Ingeniería — Company Site",
      img: "/LogoJP.png",
      desc:
        "Corporate site for a civil engineering firm with contact flow; optimized for performance.",
      links: [
        { label: "GitHub", href: "https://github.com/Erickferpinedo/JP_ING_SAS", kind: "ghost" },
        { label: "Live Demo", href: "https://jpingobras.com", kind: "primary" },
      ],
      tags: ["Next.js", "Tailwind", "B2B"],
    },
  ];

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-wider text-neutral-500">Browse My</p>
        <h2 className="mt-2 text-3xl font-extrabold text-neutral-600  sm:text-4xl">
          Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
          >
            {/* Image */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Copy */}
            <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
              {p.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-700 shadow-sm dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.links.map((l) =>
                l.kind === "primary" ? (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    {l.label}
                  </a>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-900 dark:border-white/20 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
