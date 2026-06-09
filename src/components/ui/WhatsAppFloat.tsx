"use client";

import { MessageCircle } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function WhatsAppFloat() {
  const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi Tarun, I came across your portfolio and would like to connect.")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
