"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import ResumeDownloadButton from "@/components/ui/ResumeDownloadButton";
import { contact } from "@/data/portfolio";

export default function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${formState.name} (${formState.email}).\n\n${formState.message}`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappQuickUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi Tarun, I'd like to discuss an opportunity.")}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <GlassCard delay={0.1}>
        <h3 className="mb-6 text-xl font-bold text-white">{contact.name}</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-white/50">Email</p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="truncate text-sm text-white/80 transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className="shrink-0 rounded p-1 text-white/40 hover:text-primary"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {[
            {
              icon: Phone,
              label: "Phone",
              value: contact.phone,
              href: `tel:${contact.phone}`,
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: contact.phone,
              href: whatsappQuickUrl,
              external: true,
            },
            {
              icon: MapPin,
              label: "Location",
              value: contact.location,
              href: undefined,
            },
            {
              icon: ExternalLink,
              label: "LinkedIn",
              value: "View Profile",
              href: contact.linkedin,
              external: true,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-white/50">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/80 transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-white/80">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-primary/10 pt-6">
          <p className="mb-3 text-xs text-white/50">Prefer a document?</p>
          <ResumeDownloadButton variant="outline" className="w-full" />
        </div>
      </GlassCard>

      <GlassCard delay={0.2}>
        <p className="mb-4 font-mono text-xs text-white/50">
          Messages are sent via WhatsApp to {contact.phone}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block font-mono text-xs text-white/50"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState((s) => ({ ...s, name: e.target.value }))
              }
              className="w-full rounded-lg border border-primary/20 bg-background/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-mono text-xs text-white/50"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
              className="w-full rounded-lg border border-primary/20 bg-background/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block font-mono text-xs text-white/50"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              className="w-full resize-none rounded-lg border border-primary/20 bg-background/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/50"
              placeholder="Your message..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366]/15 px-6 py-3 font-mono text-sm text-[#25D366] ring-1 ring-[#25D366]/40 transition-all hover:bg-[#25D366]/25 hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]"
          >
            <MessageCircle className="h-4 w-4" />
            {submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}
          </motion.button>
        </form>
      </GlassCard>
    </div>
  );
}
