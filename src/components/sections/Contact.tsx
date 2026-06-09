"use client";

import dynamic from "next/dynamic";
import SectionTitle from "@/components/ui/SectionTitle";

const ContactContent = dynamic(() => import("./ContactContent"), {
  ssr: false,
  loading: () => (
    <div className="grid min-h-[520px] gap-8 lg:grid-cols-2">
      <div className="glass neon-glow h-full min-h-[400px] animate-pulse rounded-xl" />
      <div className="glass neon-glow h-full min-h-[400px] animate-pulse rounded-xl" />
    </div>
  ),
});

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Contact" subtitle="Get in touch for opportunities" />
        <ContactContent />
      </div>
    </section>
  );
}
