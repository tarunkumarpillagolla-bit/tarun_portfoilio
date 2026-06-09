"use client";

import { GraduationCap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Education" subtitle="Academic credentials & qualifications" />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <GlassCard key={item.degree} delay={index * 0.1}>
              <div className="mb-4 flex items-center justify-between">
                <GraduationCap className="h-6 w-6 text-secondary" />
                {item.score && (
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                    {item.score}
                  </span>
                )}
                {!item.score && (
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">
                {item.degree}
              </h3>
              <p className="mb-2 text-sm text-secondary">{item.institution}</p>
              <p className="font-mono text-xs text-white/50">{item.duration}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
