"use client";

import { Heart, Users, Microscope, Search } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { interests } from "@/data/portfolio";

const icons = [Users, Heart, Microscope, Search];

export default function Interests() {
  return (
    <section id="interests" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Personal Interests" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <GlassCard key={item} delay={index * 0.1}>
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <p className="text-sm font-medium text-white/90">{item}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
