"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Monitor,
  Search,
  Network,
  Target,
  Server,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/portfolio";

const icons = [Shield, Monitor, Search, Network, Target, Server];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Core Competencies"
          subtitle="3D interactive skill matrix — hover to explore"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index % icons.length];
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="skill-card-3d"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`skill-card-inner glass neon-glow rounded-xl p-6 transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 shadow-[0_0_30px_rgba(0,255,179,0.2)]"
                      : ""
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`rounded-lg p-2 transition-colors ${
                        isActive ? "bg-primary/20" : "bg-primary/10"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white">{category.name}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span className="h-1 w-1 rounded-full bg-secondary" />
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${70 + index * 5}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
