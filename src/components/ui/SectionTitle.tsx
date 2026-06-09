"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          // section
        </span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
      </div>
      <h2 className="neon-text text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-white/60 md:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
