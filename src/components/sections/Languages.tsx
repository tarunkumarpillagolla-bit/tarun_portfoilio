"use client";

import { Languages as LanguagesIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { languages } from "@/data/portfolio";

export default function Languages() {
  return (
    <section id="languages" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Languages" />

        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang, index) => (
            <GlassCard
              key={lang}
              delay={index * 0.08}
              className="!p-4 text-center"
            >
              <LanguagesIcon className="mx-auto mb-2 h-5 w-5 text-secondary" />
              <p className="font-medium text-white">{lang}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
