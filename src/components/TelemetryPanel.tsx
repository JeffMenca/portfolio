"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const SKILLS = [
  { name: "REACT / NEXT.JS", level: 95 },
  { name: "TYPESCRIPT", level: 92 },
  { name: "TAILWIND_CSS", level: 93 },
  { name: "JAVASCRIPT_ES6+", level: 95 },
  { name: "NODE.JS / NESTJS", level: 78 },
  { name: "VUE.JS", level: 70 },
];

const GRID_CELLS = [
  80, 20, 0, 40, 60, 100, 20,
  0, 40, 80, 40, 100, 20, 40,
  0, 20, 60, 40, 100, 80, 0,
];

function getOpacity(value: number) {
  if (value === 0) return "bg-bat-card";
  if (value <= 20) return "bg-bat-orange/20";
  if (value <= 40) return "bg-bat-orange/40";
  if (value <= 60) return "bg-bat-orange/60";
  if (value <= 80) return "bg-bat-orange/80";
  return "bg-bat-orange";
}

export default function TelemetryPanel() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* GitHub Telemetry Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tactical-cell p-6 space-y-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-mono text-xs font-bold tracking-widest text-bat-orange">
            {t.telemetry.githubTitle}
          </h3>
          <span className="text-[9px] font-mono text-white/20">
            {t.telemetry.yearCycle}
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {GRID_CELLS.map((value, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.03 }}
              className={`w-full aspect-square ${getOpacity(value)}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] font-mono text-white/40">
          <span>{t.telemetry.less}</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-bat-card" />
            <div className="w-2 h-2 bg-bat-orange/20" />
            <div className="w-2 h-2 bg-bat-orange/40" />
            <div className="w-2 h-2 bg-bat-orange/80" />
            <div className="w-2 h-2 bg-bat-orange" />
          </div>
          <span>{t.telemetry.more}</span>
        </div>
      </motion.div>

      {/* Core Skill Bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="tactical-cell p-6 space-y-4 flex-1"
      >
        <h3 className="font-mono text-xs font-bold tracking-widest text-bat-cyan">
          {t.telemetry.coreTitle}
        </h3>
        <div className="space-y-4">
          {SKILLS.map((skill, i) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-white/60 uppercase">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-bat-card w-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-bat-cyan shadow-[0_0_8px_rgba(0,255,255,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
