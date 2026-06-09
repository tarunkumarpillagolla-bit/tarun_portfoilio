"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check, Loader2 } from "lucide-react";
import { downloadResume } from "@/lib/downloadResume";
import { getAssetPath } from "@/lib/basePath";
import { resume } from "@/data/portfolio";
import { useMounted } from "@/hooks/useMounted";

type Variant = "primary" | "secondary" | "outline" | "nav";

interface ResumeDownloadButtonProps {
  variant?: Variant;
  className?: string;
  label?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary/10 text-primary ring-1 ring-primary/30 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,255,179,0.3)]",
  secondary:
    "bg-secondary/10 text-secondary ring-1 ring-secondary/30 hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]",
  outline:
    "text-white/80 ring-1 ring-white/20 hover:bg-white/5 hover:text-white",
  nav: "bg-primary/15 text-primary ring-1 ring-primary/40 hover:bg-primary/25 text-xs px-4 py-2",
};

export default function ResumeDownloadButton({
  variant = "primary",
  className = "",
  label = "Download Resume",
}: ResumeDownloadButtonProps) {
  const mounted = useMounted();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const baseClass = `flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-mono text-sm transition-all ${variants[variant]} ${className}`;

  if (!mounted) {
    return (
      <div className={baseClass} aria-hidden="true">
        <Download className="h-4 w-4" />
        {label}
      </div>
    );
  }

  const handleClick = async () => {
    if (status === "loading") return;

    setStatus("loading");
    try {
      await downloadResume();
      setStatus("done");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      window.open(
        `${getAssetPath(resume.file)}?v=${resume.version}`,
        "_blank",
        "noopener,noreferrer"
      );
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const icon =
    status === "loading" ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ) : status === "done" ? (
      <Check className="h-4 w-4" />
    ) : (
      <Download className="h-4 w-4" />
    );

  const text =
    status === "loading"
      ? "Downloading..."
      : status === "done"
        ? "Downloaded!"
        : status === "error"
          ? "Opening resume..."
          : label;

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      suppressHydrationWarning
      className={baseClass}
    >
      {icon}
      {text}
    </motion.button>
  );
}
