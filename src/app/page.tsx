'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "VirtuPath AI",
    description:
      "AI-based career pathfinding platform. Real-time encrypted chat via SignalR, AES-GCM encryption, leaderboard, Cloudinary media pipeline, rate-limited endpoints, and identity-based access control.",
    link: "https://github.com/diarqelaj/VirtuPathAI",
    live: "https://www.virtupathai.com",
    tech: ["Next.js", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "SignalR", "EF Core", "JWT Auth", "OpenAI API", "Azure DevOps"],
  },
  {
    title: "CryptoCap Wallet Tracker",
    description:
      "Real-time crypto wallet tracker with live price feeds and a clean, responsive UI.",
    link: "https://github.com/diarqelaj/CryptoWallet",
    live: "https://crypto-wallet-delta-two.vercel.app/",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Built with Next.js, Tailwind CSS, and shadcn/ui.",
    link: "#",
    live: "https://portfolio-dijar-qelaj.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Bookshop CMS",
    description:
      "College project — a full bookshop website with a custom content management system.",
    link: "https://github.com/diarqelaj/Inxhinieri-dhe-Web",
    live: null,
    tech: ["PHP", "MySQL", "CSS", "JavaScript"],
  },
];

const experience = [
  {
    role: "Intern — Shopware Developer",
    company: "Solution 25",
    period: "Feb 2025 – Jun 2025",
    location: "Prishtinë, KS",
    bullets: [
      "Plugin architecture and theme customization in Symfony, Twig, and PHP.",
      "Agile sprints, code reviews, and system integration pipelines.",
      "Shipped production-ready features for client e-commerce platforms.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Remote",
    period: "Jun 2022 – Present",
    location: "Remote",
    bullets: [
      "Architected scalable web services with C#, .NET 8, and ASP.NET Web API.",
      "Optimized MS SQL Server performance via query tuning and indexing.",
      "Built responsive frontends with React, TypeScript, and Next.js.",
      "CI/CD pipelines on Azure DevOps; unit, integration, and E2E test coverage.",
    ],
  },
];



const skills = {
  "Backend": ["C#", ".NET 8", ".NET Framework 4.8", "ASP.NET Web API", "EF Core", "MS SQL Server", "REST APIs", "SignalR", "Kafka (basic)", "gRPC (basic)"],
  "Frontend": ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS", "HTML5 / CSS3"],
  "Tools & Infra": ["Azure DevOps", "Git", "Microsoft Azure", "Cloudinary", "Firebase", "MongoDB", "Vercel", "Docker (basic)"],
  "Testing & Methods": ["Unit Testing", "Integration Testing", "E2E Testing", "Agile / Scrum", "CI/CD", "Code Review"],
  "Other Languages": ["PHP", "Symfony", "Twig"],
};

// ─── MOUSE GLOW ──────────────────────────────────────────────────────────────

function MouseGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: 520,
          height: 520,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,229,200,0.07) 0%, rgba(0,229,200,0.025) 35%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
      setDisplay(current.slice(0, charIndex));
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      setDisplay(current.slice(0, charIndex));
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Navbar({ active }: { active: string }) {
  const links = ["about", "experience", "projects", "skills", "contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-[#1a2a2a] bg-[#080b0e]/90 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-5 py-3 flex justify-between items-center">
        <span className="font-mono text-[#00e5c8] font-bold tracking-widest text-sm">
          diarqelaj<span className="animate-blink">_</span>
        </span>
        <div className="hidden sm:flex gap-5 font-mono text-xs text-[#6a8a8a]">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`hover:text-[#00e5c8] transition-colors duration-200 ${active === l ? "text-[#00e5c8]" : ""}`}
            >
              ./{l}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SectionLabel({ cmd, file }: { cmd: string; file: string }) {
  return (
    <div className="flex items-center gap-2 mb-10 font-mono text-sm">
      <span className="text-[#00e5c8]">❯</span>
      <span className="text-[#4a7a7a]">{cmd}</span>
      <span className="text-[#c8d3d5] font-semibold">{file}</span>
      <div className="flex-1 h-px bg-[#1a2a2a] ml-3" />
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const title = useTypewriter(["Full-Stack Developer", "Backend Engineer", ".NET & React Dev", "CS Final Year"]);

  useEffect(() => {
    const sections = ["about", "experience", "projects", "skills", "blog", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.35 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&display=swap');
        * { font-family: 'JetBrains Mono', monospace; }
        h1, h2, h3 { font-family: 'Syne', sans-serif; }
        body { background: #080b0e; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-blink { animation: blink 1.1s step-start infinite; }
        @keyframes scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        .scanline { pointer-events:none; position:fixed; top:0; left:0; right:0; height:2px; background:rgba(0,229,200,0.03); animation:scan 8s linear infinite; z-index:9999; }
        .dot-grid { background-image: radial-gradient(circle, #1a2e2e 1px, transparent 1px); background-size: 28px 28px; }
        .glow { box-shadow: 0 0 0 1px #00e5c820, 0 0 24px #00e5c808; }
        .tag { display:inline-block; padding:2px 8px; background:#0d1f1f; border:1px solid #1a3030; border-radius:4px; font-size:11px; color:#6aacac; font-family:'JetBrains Mono',monospace; }
        .neon-border { border:1px solid #00e5c822; }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:#080b0e; } ::-webkit-scrollbar-thumb { background:#1a3030; border-radius:3px; }
      `}</style>

      <div className="scanline" />
      <MouseGlow />
      <Navbar active={activeSection} />

      <main className="dot-grid min-h-screen text-[#c8d3d5] pb-24">
        <div className="max-w-4xl mx-auto px-5">

          {/* ── HERO ───────────────────────────────────────────────────────── */}
          <motion.section
            className="pt-24 pb-20 flex flex-col items-start"
            initial="hidden" animate="visible" variants={fadeUp}
          >
            <motion.div className="mb-6 text-xs font-mono text-[#4a7a7a] flex items-center gap-2" variants={fadeUp} custom={0}>
              <span className="w-2 h-2 rounded-full bg-[#00e5c8] inline-block animate-pulse" />
              available for work · Prishtinë, KS
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="mb-5">
              <Image
                src="/image/dijar-qelaj.jpg"
                width={72} height={72}
                alt="Dijar Qelaj"
                className="rounded-full border border-[#1a3030] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.h1 variants={fadeUp} custom={2} className="text-5xl sm:text-6xl font-extrabold text-[#e8f0f0] leading-tight mb-3 tracking-tight">
              Dijar Qelaj
            </motion.h1>

            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-2 mb-6 font-mono text-[#00e5c8] text-lg">
              <span className="text-[#4a7a7a]">~/</span>
              <span>{title}</span>
              <span className="animate-blink text-[#00e5c8]">|</span>
            </motion.div>

            <motion.p variants={fadeUp} custom={4} className="max-w-xl text-[#7a9898] text-sm leading-relaxed mb-8 font-mono">
              I build scalable backend systems and fast frontends. C#/.NET on the server, React/TypeScript in the browser. Currently finishing my CS degree and open to full-time roles or interesting contracts.
            </motion.p>

            <motion.div variants={fadeUp} custom={5} className="flex flex-wrap gap-3">
              {[
                { label: "github.com/diarqelaj", href: "https://github.com/diarqelaj", icon: "⬡" },
                { label: "linkedin", href: "https://www.linkedin.com/in/dijar-qelaj/", icon: "⬡" },
                { label: "diarqelaj15@gmail.com", href: "mailto:diarqelaj15@gmail.com", icon: "⬡" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="font-mono text-xs border border-[#1a3030] text-[#6aacac] px-4 py-2 rounded hover:border-[#00e5c8] hover:text-[#00e5c8] transition-all duration-200 hover:bg-[#00e5c808]">
                  {s.label}
                </a>
              ))}
              <Link href="/cv/Dijar-Qelaj's-CV-Full-Stack-Developer.pdf" download
                className="font-mono text-xs bg-[#00e5c8] text-[#080b0e] font-bold px-4 py-2 rounded hover:bg-[#00c8b0] transition-colors duration-200">
                download_cv.pdf
              </Link>
            </motion.div>
          </motion.section>

          {/* ── ABOUT ──────────────────────────────────────────────────────── */}
          <motion.section id="about" className="mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <SectionLabel cmd="cat" file="about_me.md" />
            <div className="neon-border rounded-xl p-7 bg-[#0a0f0f] glow">
              <div className="flex items-start gap-6">
                <div className="hidden sm:block shrink-0 w-1 self-stretch bg-gradient-to-b from-[#00e5c8] to-transparent rounded-full opacity-40" />
                <div className="space-y-4 text-[#9ab8b8] text-sm leading-7 font-mono">
                  <p>
                    I'm a full-stack developer wrapping up my CS degree at UBT in Prishtinë. Most of what I know I learned by shipping real things — freelancing since 2022 has meant owning decisions from database schema to deployment pipeline.
                  </p>
                  <p>
                    My main stack is <span className="text-[#00e5c8]">C#/.NET 8</span> for the backend and <span className="text-[#00e5c8]">React + TypeScript + Next.js</span> on the front. I care a lot about security, performance, and code that's readable six months later.
                  </p>
                  <p>
                    Outside of work I'm into how distributed systems fail, contributing to open source when I have something useful to add, and occasionally writing about things I've had to figure out the hard way.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
          <motion.section id="experience" className="mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <SectionLabel cmd="git" file="log --oneline" />
            <div className="space-y-6">
                {experience.map((job, i) => (
                  <motion.div key={job.role} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-5">
                    {/* Timeline column */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full border border-[#00e5c8] bg-[#080b0e] flex items-center justify-center mt-1 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#00e5c8]" />
                      </div>
                      {i < experience.length - 1 && (
                        <div className="w-px flex-1 bg-[#1a3030] mt-2" />
                      )}
                    </div>
                    {/* Card */}
                    <div className="neon-border rounded-xl p-6 bg-[#0a0f0f] flex-1 mb-4">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-[#e8f0f0] font-semibold text-base">{job.role}</h3>
                          <span className="text-[#00e5c8] font-mono text-xs">{job.company} · {job.location}</span>
                        </div>
                        <span className="font-mono text-xs text-[#4a7a7a] border border-[#1a3030] px-3 py-1 rounded">{job.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {job.bullets.map((b) => (
                          <li key={b} className="font-mono text-xs text-[#7a9898] flex gap-2">
                            <span className="text-[#00e5c8] shrink-0 mt-0.5">›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.section>

          {/* ── PROJECTS ───────────────────────────────────────────────────── */}
          <motion.section id="projects" className="mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <SectionLabel cmd="ls" file="-la ./projects" />
            <div className="grid sm:grid-cols-2 gap-5">
              {projects.map((p, i) => (
                <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="neon-border rounded-xl bg-[#0a0f0f] flex flex-col hover:border-[#00e5c840] transition-all duration-300 hover:-translate-y-0.5 hover:glow group overflow-hidden">
                  {/* tab bar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0d1515] border-b border-[#1a2a2a]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono text-xs text-[#4a7a7a]">
                      {p.title.toLowerCase().replace(/\s+/g, "_")}.ts
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[#e8f0f0] font-semibold text-sm mb-2 group-hover:text-[#00e5c8] transition-colors">{p.title}</h3>
                    <p className="text-[#6a8a8a] text-xs leading-relaxed mb-4 flex-1">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.slice(0, 6).map((t) => <span key={t} className="tag">{t}</span>)}
                      {p.tech.length > 6 && <span className="tag text-[#4a7a7a]">+{p.tech.length - 6}</span>}
                    </div>
                    <div className="flex gap-3">
                      {p.link && p.link !== "#" && (
                        <a href={p.link} target="_blank" rel="noreferrer"
                          className="font-mono text-xs text-[#4a7a7a] hover:text-[#00e5c8] transition-colors">
                          source ↗
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer"
                          className="font-mono text-xs text-[#00e5c8] border border-[#00e5c830] px-3 py-1 rounded hover:bg-[#00e5c810] transition-colors ml-auto">
                          live preview ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── SKILLS ─────────────────────────────────────────────────────── */}
          <motion.section id="skills" className="mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <SectionLabel cmd="grep" file="-r skills ./me" />
            <div className="neon-border rounded-xl bg-[#0a0f0f] p-6 space-y-5">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div key={category} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="font-mono text-xs text-[#4a7a7a] mb-2.5">
                    <span className="text-[#00e5c8]">// </span>{category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="tag hover:border-[#00e5c840] hover:text-[#00e5c8] transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── GITHUB CONTRIBUTIONS ───────────────────────────────────────── */}
          <motion.section className="mb-24"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <SectionLabel cmd="gh" file="contributions --year=2024" />
            <div className="neon-border rounded-xl bg-[#0a0f0f] p-6">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#4a7a7a]">
                <span className="text-[#00e5c8]">1,300+</span> contributions in the last year
              </div>
              <div className="overflow-x-auto rounded-lg">
                <img
                  src="https://ghchart.rshah.org/00e5c8/diarqelaj"
                  alt="Dijar Qelaj GitHub contributions"
                  className="rounded w-full"
                />
              </div>
            </div>
          </motion.section>

          {/* ── CONTACT ────────────────────────────────────────────────────── */}
          <motion.section id="contact" className="mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <SectionLabel cmd="echo" file="'let\u2019s work together'" />
            <div className="neon-border rounded-xl bg-[#0a0f0f] p-8 text-center">
              <h2 className="text-3xl font-extrabold text-[#e8f0f0] mb-3">Open to work</h2>
              <p className="font-mono text-sm text-[#6a8a8a] mb-7 max-w-md mx-auto">
                Whether it's a full-time role, a contract, or just an interesting problem — reach out.
              </p>
              <a href="mailto:diarqelaj15@gmail.com"
                className="inline-block font-mono text-sm bg-[#00e5c8] text-[#080b0e] font-bold px-6 py-3 rounded hover:bg-[#00c8b0] transition-colors duration-200">
                diarqelaj15@gmail.com
              </a>
              <div className="flex justify-center gap-6 mt-6">
                {[
                  { label: "GitHub", href: "https://github.com/diarqelaj" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/dijar-qelaj/" },
                  { label: "Writing", href: "https://www.virtupathai.com/blog" },
                ].map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                    className="font-mono text-xs text-[#4a7a7a] hover:text-[#00e5c8] transition-colors">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── FOOTER ─────────────────────────────────────────────────────── */}
          <footer className="text-center font-mono text-xs text-[#2a4a4a] pb-8">
            <span className="text-[#00e5c8]">❯</span> built by dijar qelaj · {new Date().getFullYear()}
          </footer>

        </div>
      </main>
    </>
  );
}