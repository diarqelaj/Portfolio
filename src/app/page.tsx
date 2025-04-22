'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website (this one!)",
    description:
      "A modern, editable portfolio using Next.js, Tailwind CSS, shadcn/ui, and JSON-based project storage.",
    link: "#",
    tech: ["Next.js", "TailwindCss", "shadcn/ui"],
  },
  {
    title: "CryptoCap Wallet Tracker",
    description:
      "A modern wallet tracker for crypto enthusiasts, featuring real-time price updates and a sleek UI.",
    link: "https://github.com/diarqelaj/CryptoWallet",
    tech: ["React", "JavaScript", "TailwindCss", "RestAPI"],
  },
  {
    title: "VirtuPath AI",
    description:
      "A modern web app for AI-based pathfinding, featuring a sleek UI and engaging content, as well as a custom AI chatbot helping users with their requests",
    link: "https://github.com/diarqelaj/VirtuPathAI",
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
          <div className="flex space-x-4 mb-8">
            <SocialIcon href="https://github.com/diarqelaj" label="GitHub" iconClass="text-zinc-200" svgPath="..." />
            <SocialIcon href="https://www.linkedin.com/in/dijar-qelaj/" label="LinkedIn" iconClass="text-blue-400" svgPath="..." />
            <SocialIcon href="mailto:diarqelaj15@gmail.com" label="Email" iconClass="text-rose-300" svgPath="..." />
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
        <motion.section id="projects" className="w-full max-w-5xl mb-20" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-5 text-zinc-100 flex items-center gap-2">
            <span className="text-blue-500">//</span> Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group bg-zinc-900/70 border border-zinc-800 rounded-xl flex flex-col p-5 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 focus:ring-2 focus:ring-blue-700 outline-none"
              >
                <h4 className="font-semibold text-lg mb-1 text-zinc-100 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-zinc-400 text-sm mb-3 min-h-[54px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-zinc-800 border border-zinc-700 rounded text-xs px-2 py-0.5 text-zinc-300 font-mono tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.section>

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
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="hover:opacity-80 hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-7 h-7 ${iconClass}`}>
        <path d={svgPath} />
      </svg>
    </a>
  );
}
