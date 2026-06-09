"use client";

import { motion } from "framer-motion";
import { User, Crosshair, Fingerprint, Eye } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";
import { about } from "@/data/portfolio";

const highlights = [
  { icon: Crosshair, label: "Threat Detection", desc: "Proactive monitoring & triage" },
  { icon: Fingerprint, label: "Digital Forensics", desc: "Evidence analysis & recovery" },
  { icon: Eye, label: "SIEM Operations", desc: "Splunk & QRadar expertise" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={about.title} subtitle="Security analyst profile overview" />

        <div className="grid gap-8 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2" delay={0.1}>
            <div className="mb-4 flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                Profile Summary
              </h3>
            </div>
            <p className="mb-6 text-base leading-relaxed text-white/80">{about.content}</p>
            <div className="flex flex-wrap gap-3">
              <ResumeDownloadButton variant="primary" label="Get Resume" />
              <a
                href="#contact"
                className="flex items-center justify-center rounded-lg px-6 py-3 font-mono text-sm text-secondary ring-1 ring-secondary/30 transition-all hover:bg-secondary/10"
              >
                Hire Me
              </a>
            </div>
          </GlassCard>

          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <GlassCard key={item.label} delay={0.2 + i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.label}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {["SOC", "SIEM", "DFIR", "MITRE ATT&CK", "Incident Response"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 px-4 py-1.5 font-mono text-xs text-primary/80"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
