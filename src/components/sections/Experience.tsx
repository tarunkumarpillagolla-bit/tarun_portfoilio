"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Professional Experience"
          subtitle="Cyber timeline — operational history"
        />

        <div className="relative">
          <div className="timeline-line absolute top-0 left-4 h-full w-px md:left-1/2 md:-translate-x-px" />

          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="w-full pl-12 md:w-1/2 md:pl-0 md:pr-8">
                <GlassCard delay={index * 0.15}>
                  <div className="mb-1 font-mono text-xs text-primary">
                    {job.duration}
                  </div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="mb-4 text-secondary">{job.company}</p>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
