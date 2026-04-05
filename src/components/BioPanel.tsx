"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Download, ExternalLink } from "lucide-react";
import TypingEffect from "./TypingEffect";
import { useLanguage } from "@/i18n/LanguageContext";

export default function BioPanel() {
  const { t } = useLanguage();

  const STATS = [
    { label: t.bio.stats.status, value: t.bio.stats.statusValue, color: "text-bat-orange" },
    { label: t.bio.stats.experience, value: t.bio.stats.experienceValue, color: "text-white" },
    { label: t.bio.stats.location, value: t.bio.stats.locationValue, color: "text-white" },
    { label: t.bio.stats.clearance, value: t.bio.stats.clearanceValue, color: "text-bat-cyan" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="tactical-cell"
    >
      <div className="scanline-effect top-0 opacity-20" />

      <div className="cell-header">
        <span className="cell-header-label">{t.bio.processId}</span>
        <div className="cell-header-dots">
          <span className="cell-header-dot-orange" />
          <span className="cell-header-dot-cyan" />
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
          {/* Avatar */}
          <div className="w-full md:w-48 h-48 bg-bat-black border border-bat-border/40 flex-shrink-0 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-bat-orange/5 to-bat-cyan/5" />
            <ShieldCheck size={64} className="text-bat-orange/40" />
            <div className="absolute inset-0 bg-bat-orange/5 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-bat-orange/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-bat-orange/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-bat-orange/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-bat-orange/40" />
          </div>

          {/* Bio content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-mono font-bold text-white tracking-tighter uppercase leading-none">
              {t.bio.roleTitle}
              <br />
              <span className="text-bat-orange">JEFFREY MENÉNDEZ</span>
            </h1>

            <div className="font-mono text-sm text-white/70 leading-relaxed max-w-xl">
              <span className="text-bat-cyan mr-2">&gt;</span>
              {t.bio.initLine1}
              <br />
              <span className="text-bat-cyan mr-2">&gt;</span>
              {t.bio.initLine2}
              <br />
              <span className="text-bat-cyan mr-2">&gt;</span>
              <TypingEffect text={t.bio.bioText} speed={15} delay={500} />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="btn-tactical inline-flex items-center gap-2"
              >
                <ExternalLink size={12} />
                {t.bio.viewProjects}
              </a>
              <a
                href="#comms"
                className="btn-tactical-outline inline-flex items-center gap-2"
              >
                <Download size={12} />
                {t.bio.contactMe}
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-bat-border/10 pt-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-[9px] text-white/30 uppercase tracking-widest">
                {stat.label}
              </div>
              <div className={`${stat.color} font-mono text-xs font-bold`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
