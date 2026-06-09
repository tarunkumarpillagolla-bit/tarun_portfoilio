"use client";

import { useEffect, useState } from "react";

interface TerminalTypingProps {
  lines: string[];
  speed?: number;
}

export default function TerminalTyping({
  lines,
  speed = 40,
}: TerminalTypingProps) {
  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (lineIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + "\n");
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex, lines, speed]);

  return (
    <pre className="font-mono text-xs leading-relaxed text-primary/90 md:text-sm">
      {displayed}
      <span
        className={`inline-block w-2 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
      >
        ▌
      </span>
    </pre>
  );
}
