"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`glass-strong fixed top-0 right-0 left-0 z-50 border-b transition-shadow duration-300 ${
        scrolled
          ? "border-primary/20 shadow-[0_4px_30px_rgba(0,255,179,0.08)]"
          : "border-primary/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-mono text-sm font-bold text-white">
            TKP<span className="text-primary">.SOC</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive ? "text-primary" : "text-white/70 hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ResumeDownloadButton variant="nav" label="Resume" />
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-primary/10 lg:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wider ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-white/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <ResumeDownloadButton
                variant="primary"
                label="Download Resume"
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
