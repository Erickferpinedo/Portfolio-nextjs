"use client";

const Footer = () => {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/",
      icon: "/linkedin.png",
    },
    {
      name: "GitHub",
      href: "https://github.com/Erickferpinedo",
      icon: "/github.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/erickferpinedo/",
      icon: "/instagram.png",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/17862006991",
      icon: "/whatsapp.png",
    },
  ];

  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        {/* Left: Copyright */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} <span className="font-medium">Erick Pinedo</span>. All rights reserved.
        </p>

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              aria-label={s.name}
            >
              <img
                src={s.icon}
                alt={s.name}
                width={18}
                height={18}
                className="h-5 w-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
