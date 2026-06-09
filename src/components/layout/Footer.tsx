"use client";

import { Shield, Mail, Phone, ExternalLink } from "lucide-react";
import { contact, navLinks } from "@/data/portfolio";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/10 bg-surface/80 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm font-bold text-white">
                TKP<span className="text-primary">.SOC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Cybersecurity Analyst portfolio — SOC operations, digital forensics,
              and threat detection.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              Resume
            </h4>
            <p className="mb-4 text-sm text-white/50">
              Download my latest resume in PDF format.
            </p>
            <ResumeDownloadButton
              variant="secondary"
              label="Download PDF"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 md:flex-row">
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} Tarun Kumar Pillagolla · Secured by design
          </p>
          <p className="font-mono text-xs text-white/30">
            Open to L1 SOC Analyst opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
