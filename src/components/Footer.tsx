"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ y: 32 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-2 h-8 bg-bat-dark border-t border-bat-border/10"
    >
      <div className="font-mono text-[10px] tracking-widest opacity-50 text-bat-cyan">
        &copy; 2026 WAYNE_TECH // PORTFOLIO_OS
      </div>
      <div className="hidden md:flex gap-6">
        <a
          href="https://github.com/JeffMenca"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-opacity uppercase"
        >
          {t.footer.github}
        </a>
        <a
          href="https://linkedin.com/in/jeffmenca/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-opacity uppercase"
        >
          {t.footer.linkedin}
        </a>
        <a
          href="mailto:jeffrey.menendez.castillo@gmail.com"
          className="font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-opacity uppercase"
        >
          {t.footer.mail}
        </a>
      </div>
    </motion.footer>
  );
}
