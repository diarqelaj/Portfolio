'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website (this one!)",
    description:
      "A modern, editable portfolio using Next.js, Tailwind CSS, shadcn/ui, and JSON-based project storage.",
    link: "#",
    live: "https://portfolio-dijar-qelaj.vercel.app/",
    tech: ["Next.js", "TailwindCss", "shadcn/ui"],
  },
  {
    title: "CryptoCap Wallet Tracker",
    description:
      "A modern wallet tracker for crypto enthusiasts, featuring real-time price updates and a sleek UI.",
    link: "https://github.com/diarqelaj/CryptoWallet",
    live: "https://crypto-wallet-delta-two.vercel.app/",
    tech: ["React", "JavaScript", "TailwindCss", "RestAPI"],
  },
  {
    title: "VirtuPath AI",
    description:
      "A modern web app for AI-based pathfinding, featuring a sleek UI and engaging content, as well as a custom AI chatbot helping users with their requests",
    link: "https://github.com/diarqelaj/VirtuPathAI",
    live: "https://virtu-path-ai.vercel.app/",
    tech: ["Next.js", "TypeScript", "Sentry", "OpenAi"],
  },
  {
    title: "Bookshop Website",
    description:
      "A modern bookshop website built for my college project with a sleek UI, featuring a custom CMS for easy content management.",
    link: "https://github.com/diarqelaj/Inxhinieri-dhe-Web",
    tech: ["PHP", "CSS", "JavaScript", "MySQL"],
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950 border-b border-zinc-800 shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center text-sm text-zinc-300 font-mono">
          <span className="text-blue-400 font-bold">Dijar</span>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-50 px-4 pb-14">

        {/* Hero Section */}
        <motion.section
          className="max-w-xl w-full py-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/image/dijar-qelaj.jpg"
            width={100}
            height={100}
            alt="Your Profile"
            className="rounded-full shadow-lg mb-6 border-2 border-zinc-700 hover:grayscale transition-all duration-500"
          />
          <h1 className="text-4xl font-bold mb-3 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,10,0.22)]">
            Dijar Qelaj
          </h1>
          <h2 className="text-xl font-mono text-zinc-400 mb-8">
            Fullstack Developer
          </h2>
          <p className="text-zinc-300 mb-8 max-w-md">
            I create visually engaging and performant web applications, focusing on great user experience and robust, scalable code. Let’s build something awesome together!
          </p>

           {/* Socials */}
        <div className="flex space-x-4 mb-8 animate-fade-in-delay3">
        <SocialIcon
            href="https://github.com/diarqelaj"
            label="GitHub"
            iconClass="text-zinc-200"
            svgPath="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.1.823 2.219v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
          />

          <SocialIcon
            href="https://www.linkedin.com/in/dijar-qelaj/"
            label="LinkedIn"
            iconClass="text-blue-400"
            svgPath="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.54 19.6H5.34v-9.6h3.2v9.6zM6.94 8.67c-1.03 0-1.87-.85-1.87-1.89 0-1.04.84-1.89 1.87-1.89s1.87.85 1.87 1.89c0 1.04-.84 1.89-1.87 1.89zM20 19.6h-3.2v-4.8c0-1.14-.02-2.61-1.6-2.61s-1.84 1.25-1.84 2.54v4.87H10.2v-9.6h3.07v1.31h.04c.43-.82 1.47-1.68 3.02-1.68 3.23 0 3.82 2.12 3.82 4.89v5.08z"
          />

          <SocialIcon
            href="mailto:diarqelaj15@gmail.com"
            label="Email"
            iconClass="text-rose-300"
            svgPath="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 4l-7 5-7-5V6l7 5 7-5v2z"
          />

        </div>

          {/* Tech Stack */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind", "PHP", "SCSS", "Node.js", "Symfony"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded text-sm font-mono border border-zinc-700 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                {tech}
              </span>
            ))}
          </div>

          <Link href="/cv/dijar-qelaj-cv.pdf" download className="inline-block mt-1 py-2 px-6 rounded-md bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-800 transition-colors">
            Download CV
          </Link>
        </motion.section>

        {/* About */}
        <motion.section id="about" className="w-full max-w-2xl mb-16 bg-zinc-900/70 rounded-2xl border border-zinc-800 p-8 shadow-xl" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-3 text-zinc-100 flex items-center gap-2">
            <span className="text-blue-500">//</span> About Me
          </h3>
          <p className="text-zinc-300 leading-relaxed">
            Hi! I’m <b>Dijar Qelaj</b>, a passionate fullstack developer with a frontend focus. I love crafting modern, accessible, and beautiful user interfaces using React, Next.js, and Tailwind CSS. My favorite part of coding is turning creative ideas into real products and collaborating with design/dev teams to deliver awesome results.
          </p>
        </motion.section>
        <motion.section
          id="github"
          className="w-full max-w-2xl mb-16 bg-zinc-900/70 rounded-2xl border border-zinc-800 p-8 shadow-xl flex flex-col items-center "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-zinc-100 flex items-left gap-2">
            <span className="text-blue-500">//</span> GitHub Contributions
          </h3>
          <div className="w-full overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/diarqelaj"
              alt="Dijar Qelaj's Github contributions chart"
              className="rounded-lg border border-zinc-800 shadow-md transition-transform duration-300"
            />
          </div>
        </motion.section>

        {/* Skills */}

        {/* Experience */}
        <motion.section id="experience" className="w-full max-w-2xl mb-16 bg-zinc-900/70 rounded-2xl border border-zinc-800 p-8 shadow-xl" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-5 text-zinc-100 flex items-center gap-2">
            <span className="text-blue-500">//</span> Experience
          </h3>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h4 className="text-lg font-semibold text-zinc-100">Internship – Solution25</h4>
              <p className="text-sm text-zinc-400 mb-1 italic">Shopware 6 Development · 3 months</p>
              <p>
                Contributed to e-commerce platforms using Shopware 6 and Twig. Worked on storefront customization, plugin systems, and responsive theme design. Collaborated with project managers and senior developers on real-world projects.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-zinc-100">Freelance Fullstack Developer</h4>
              <p className="text-sm text-zinc-400 mb-1 italic">Remote · Ongoing</p>
              <p>
                Independently developed and deployed fullstack web applications. Collaborated with clients on tailored solutions, focusing on modern tech stacks including React, Next.js, Tailwind CSS, Symfony, and PHP. Built custom features, handled performance optimization, and ensured responsive UX.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="w-full max-w-5xl mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-5 text-zinc-100 flex items-center gap-2">
            <span className="text-blue-500">//</span> Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => {
              const imageName = project.title.toLowerCase().replace(/\s+/g, "-") + ".png";
              return (
                <div
                  key={project.title}
                  onClick={() => window.open(project.link, "_blank")}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && window.open(project.link, "_blank")}
                  className="group cursor-pointer bg-zinc-900/70 border border-zinc-800 rounded-xl flex flex-col p-5 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 focus:ring-2 focus:ring-blue-700 outline-none"
                >
                  <div className="mb-3 overflow-hidden rounded-md border border-zinc-800">
                    <img
                      src={`/project-previews/${imageName}`}
                      alt={`${project.title} preview`}
                      className="w-full h-36 object-cover transition-transform group-hover:scale-[1.03]"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-1 text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-sm mb-3 min-h-[54px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-800 border border-zinc-700 rounded text-xs px-2 py-0.5 text-zinc-300 font-mono tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-auto inline-block text-center text-sm bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md transition-colors"
                    >
                      Live Preview
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>

          {/* Footer */}




        {/* Contact */}
        <motion.section id="contact" className="w-full max-w-2xl bg-zinc-900/70 rounded-2xl border border-zinc-800 p-8 shadow-xl" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-3 text-zinc-100 flex items-center gap-2">
            <span className="text-blue-500">//</span> Contact
          </h3>
          <div className="text-zinc-300">
            Email me:{" "}
            <a href="mailto:diarqelaj15@gmail.com" className="text-blue-400 underline hover:text-blue-300 transition-colors">
              diarqelaj15@gmail.com
            </a>
          </div>
          <div className="text-zinc-400 mt-2 text-sm">
            Or reach out via GitHub or LinkedIn (links above).
          </div>
        </motion.section>
      </main>
    </>
  );
}

function SocialIcon({
  href,
  label,
  iconClass,
  svgPath,
}: {
  href: string;
  label: string;
  iconClass: string;
  svgPath: string;
}) {
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (label === "Email") {
      e.preventDefault();

      try {
        window.location.href = href;

        // If nothing happens after a short delay, fallback to copying
        setTimeout(() => {
          // Some systems won't throw, so we assume fail if window.location.href doesn't redirect
          copyToClipboard("diarqelaj15@gmail.com");
        }, 300);
      } catch {
        copyToClipboard("diarqelaj15@gmail.com");
      }
    }
  };

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  const baseButton = (
    <>
      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-7 h-7 ${iconClass}`}>
        <path d={svgPath} />
      </svg>
      {label === "Email" && showCopied && (
      <span className="absolute top-15 right-5 flex items-center gap-2 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-lg shadow-md">
        <svg className="w-4 h-4 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 11-6 6 6 6 0 016-6zm2.293 7.707a1 1 0 00-1.414-1.414L10 11.586l-1.879-1.879a1 1 0 10-1.414 1.414L9 13l3.293-3.293z" />
        </svg>
        Email copied to clipboard
      </span>
    )}

    </>
  );

  return label === "Email" ? (
    <button
      onClick={handleClick}
      aria-label={label}
      className="relative hover:opacity-80 hover:scale-110 transition-transform"
    >
      {baseButton}
    </button>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="hover:opacity-80 hover:scale-110 transition-transform"
    >
      {baseButton}
    </a>
  );
}



