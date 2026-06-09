"use client";

import { Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Certifications" subtitle="Verified training & credentials" />

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <GlassCard key={cert} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-white/90">{cert}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
