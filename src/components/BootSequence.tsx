"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

interface BootSequenceProps {
  onComplete: () => void;
}

const DELAYS = [0, 300, 600, 900, 1100, 1400, 1700, 1900, 2200, 2500, 2900];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const { t } = useLanguage();
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [complete, setComplete] = useState(false);

  const bootLines = t.boot.lines;

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    DELAYS.forEach((delay, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
        }, delay)
      );
    });

    timers.push(
      setTimeout(() => {
        setComplete(true);
      }, 3400)
    );

    timers.push(
      setTimeout(() => {
        onComplete();
      }, 4000)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-bat-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="crt-overlay" />
      <div className="w-full max-w-2xl px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-1"
        >
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={`font-mono text-xs md:text-sm ${
                i === bootLines.length - 1
                  ? "text-bat-orange font-bold mt-4"
                  : i === 0
                    ? "text-bat-orange text-base md:text-lg font-bold mb-2"
                    : "text-bat-cyan/70"
              }`}
            >
              <span className="text-bat-orange/50 mr-2">&gt;</span>
              {line}
              {i === visibleLines - 1 && !complete && (
                <span className="cursor-blink ml-1 text-bat-orange">_</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 h-1 bg-bat-card w-full overflow-hidden">
          <motion.div
            className="h-full bg-bat-orange shadow-[0_0_10px_#F78166]"
            initial={{ width: "0%" }}
            animate={{
              width: complete
                ? "100%"
                : `${(visibleLines / bootLines.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[8px] font-mono text-white/30 tracking-widest">
          <span>WAYNE_TECH_INDUSTRIES</span>
          <span>{complete ? t.boot.ready : t.boot.loading}</span>
        </div>
      </div>
    </motion.div>
  );
}
