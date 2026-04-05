"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CHANNEL_META = [
  {
    icon: Mail,
    key: "mail" as const,
    value: "jeffrey.menendez.castillo@gmail.com",
    href: "mailto:jeffrey.menendez.castillo@gmail.com",
    color: "text-bat-orange",
    hoverBorder: "hover:border-bat-orange/50",
  },
  {
    icon: Linkedin,
    key: "linkedin" as const,
    value: "linkedin.com/in/jeffmenca",
    href: "https://linkedin.com/in/jeffmenca/",
    color: "text-bat-cyan",
    hoverBorder: "hover:border-bat-cyan/50",
  },
  {
    icon: Github,
    key: "github" as const,
    value: "github.com/JeffMenca",
    href: "https://github.com/JeffMenca",
    color: "text-white",
    hoverBorder: "hover:border-white/30",
  },
  {
    icon: Phone,
    key: "phone" as const,
    value: "(502) 4980-1521",
    href: "tel:+50249801521",
    color: "text-bat-orange",
    hoverBorder: "hover:border-bat-orange/50",
  },
];

export default function CommsLink() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="tactical-cell mt-12"
    >
      <div className="cell-header">
        <span className="cell-header-label">{t.comms.cellLabel}</span>
        <div className="cell-header-dots">
          <span className="cell-header-dot-orange" />
          <span className="cell-header-dot-cyan" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="font-mono text-xs text-bat-cyan/60 mb-4">
          <span className="text-bat-cyan mr-2">&gt;</span>
          {t.comms.initLine}
        </div>

        <div className="space-y-3">
          {CHANNEL_META.map((ch, i) => (
            <motion.a
              key={ch.key}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 p-3 border border-bat-border/20 ${ch.hoverBorder} hover:bg-bat-card/50 transition-all group`}
            >
              <div className="w-8 h-8 border border-bat-border/30 flex items-center justify-center group-hover:border-bat-orange/40 transition-colors">
                <ch.icon size={14} className={ch.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                  {t.comms.channels[ch.key]}
                </div>
                <div className="font-mono text-xs text-white/70 truncate">
                  {ch.value}
                </div>
              </div>
              <ExternalLink
                size={12}
                className="text-white/20 group-hover:text-bat-orange transition-colors flex-shrink-0"
              />
            </motion.a>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-bat-border/10 flex items-center gap-3">
          <span className="w-2 h-2 bg-green-500 animate-pulse" />
          <span className="font-mono text-[10px] text-green-500/60 tracking-widest">
            {t.comms.statusLine}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
