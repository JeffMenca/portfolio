"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AcademicPanel() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="tactical-cell mt-12"
    >
      <div className="cell-header">
        <span className="cell-header-label">{t.academic.cellLabel}</span>
        <div className="cell-header-dots">
          <span className="cell-header-dot-orange" />
          <span className="cell-header-dot-cyan" />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Degree */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-bat-card border border-bat-orange/30 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={18} className="text-bat-orange" />
          </div>
          <div className="space-y-1">
            <h4 className="font-mono text-sm font-bold text-white uppercase">
              {t.academic.degree}
            </h4>
            <div className="font-mono text-[10px] text-bat-cyan/60 tracking-wider">
              {t.academic.semester}
            </div>
            <div className="font-mono text-xs text-white/50">
              {t.academic.university}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="border-t border-bat-border/10 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Award size={14} className="text-bat-cyan" />
            <span className="font-mono text-xs font-bold text-bat-cyan tracking-widest">
              {t.academic.certificatesTitle}
            </span>
          </div>
          <div className="space-y-2 pl-6">
            <div className="font-mono text-xs text-white/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-bat-orange/50" />
              {t.academic.cert1}
            </div>
            <div className="font-mono text-xs text-white/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-bat-orange/50" />
              {t.academic.cert2}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="border-t border-bat-border/10 pt-4">
          <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2">
            {t.academic.languagesLabel}
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-bat-orange" />
              <span className="font-mono text-xs text-white/60">
                {t.academic.spanish}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-bat-cyan" />
              <span className="font-mono text-xs text-white/60">
                {t.academic.english}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
