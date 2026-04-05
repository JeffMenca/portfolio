"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function MissionLog() {
  const { t } = useLanguage();
  const missions = t.missions.items;

  return (
    <div className="my-12">
      <div className="section-divider">
        <h2 className="font-mono text-sm font-black text-bat-orange tracking-[0.2em] uppercase whitespace-nowrap">
          {t.missions.sectionTitle}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="tactical-cell"
      >
        <div className="cell-header">
          <span className="cell-header-label">
            {t.missions.terminalLabel}
          </span>
          <div className="cell-header-dots">
            <span className="cell-header-dot-orange" />
            <span className="cell-header-dot-cyan" />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="font-mono text-xs text-bat-cyan/60 mb-6">
            <span className="text-bat-cyan mr-2">&gt;</span>
            {t.missions.commandLine}
          </div>

          <div className="space-y-0">
            {missions.map((mission, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative pl-8 pb-8 border-l-2 ${
                  mission.active
                    ? "border-bat-orange"
                    : "border-bat-border/30"
                } last:pb-0`}
              >
                {/* Node dot */}
                <div
                  className={`absolute left-[-7px] top-0 w-3 h-3 ${
                    mission.active
                      ? "bg-bat-orange shadow-[0_0_10px_#F78166]"
                      : "bg-bat-card border border-bat-border/50"
                  }`}
                />

                {mission.active && (
                  <div className="absolute left-[-7px] top-0 w-3 h-3 bg-bat-orange animate-ping opacity-40" />
                )}

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-bat-orange/60">
                    {String(i + 1).padStart(2, "0")}:
                  </span>
                  <h4 className="font-mono font-bold text-white uppercase text-sm">
                    {mission.company}
                  </h4>
                  <span className="text-[8px] font-mono border border-bat-border/40 px-1.5 py-0.5 text-white/30">
                    {mission.subtitle}
                  </span>
                  {mission.active && (
                    <span className="text-[8px] font-mono bg-bat-orange/20 text-bat-orange px-2 py-0.5 flex items-center gap-1">
                      <Zap size={8} />
                      {t.missions.activeLabel}
                    </span>
                  )}
                </div>

                <div className="font-mono text-[10px] text-bat-cyan/50 mb-2 tracking-wider">
                  {mission.timeline}
                </div>

                <div className="font-mono text-xs text-white/60 mb-2">
                  <span className="text-bat-orange/50 mr-1">
                    <Briefcase size={10} className="inline mr-1" />
                    {t.missions.objectiveLabel}
                  </span>
                  {mission.objective}
                </div>

                <div className="space-y-1">
                  {mission.actions.map((action, j) => (
                    <div key={j} className="font-mono text-[11px] text-white/40">
                      <span className="text-bat-cyan/40 mr-2">&gt;&gt;</span>
                      {action}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-bat-border/10 font-mono text-[10px] text-white/20">
            <span className="text-bat-cyan/40 mr-2">&gt;</span>
            {t.missions.endOfLog} // {missions.length} {t.missions.missionsArchived} //
            {" "}{t.missions.statusOperational}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
