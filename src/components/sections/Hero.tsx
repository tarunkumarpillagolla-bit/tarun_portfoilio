"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Terminal, Activity, ShieldCheck } from "lucide-react";
import TerminalTyping from "@/components/ui/TerminalTyping";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";
import { hero, contact } from "@/data/portfolio";

const terminalLines = [
  "> initializing SOC environment...",
  "> loading SIEM modules: Splunk, QRadar [OK]",
  "> threat detection engine: ACTIVE",
  "> analyst: Tarun Kumar Pillagolla — ONLINE",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding relative flex min-h-screen items-center pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              System Online
            </span>
          </div>

          <h1 className="neon-text mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {hero.name}
          </h1>

          <p className="mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-medium text-transparent md:text-xl">
            {hero.title}
          </p>

          <p className="mb-8 max-w-lg text-base text-white/70">{hero.tagline}</p>

          <div className="flex flex-wrap gap-4">
            <ResumeDownloadButton variant="primary" />
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg bg-secondary/10 px-6 py-3 font-mono text-sm text-secondary ring-1 ring-secondary/30 transition-all hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-6 py-3 font-mono text-sm text-white/80 ring-1 ring-white/20 transition-all hover:bg-white/5 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              View LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-strong neon-glow relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(transparent 50%, rgba(0,255,179,0.03) 50%)",
                backgroundSize: "100% 4px",
              }}
            />

            <div className="relative">
              <div className="mb-4 flex items-center gap-2 border-b border-primary/20 pb-3">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-white/60">
                  soc-terminal — bash
                </span>
                <div className="ml-auto flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              <TerminalTyping lines={terminalLines} />

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: ShieldCheck, label: "Threats Blocked", value: "2.4K" },
                  { icon: Activity, label: "Alerts Triaged", value: "847" },
                  { icon: Terminal, label: "Cases Resolved", value: "156" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-background/50 p-3 text-center"
                  >
                    <stat.icon className="mx-auto mb-1 h-4 w-4 text-primary" />
                    <p className="font-mono text-lg font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass absolute -right-4 -bottom-4 hidden rounded-lg p-3 md:block">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-surface font-mono text-xs font-bold text-primary">
                  TKP
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-white">Analyst Profile</p>
                <p className="font-mono text-[10px] text-primary">L1 SOC · Active</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
