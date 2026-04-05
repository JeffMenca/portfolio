"use client";

import { motion } from "framer-motion";
import { Settings, Terminal, Radio, Menu, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { t, locale, toggleLocale } = useLanguage();
  const [time, setTime] = useState("");

  const NAV_ITEMS = [
    { label: t.nav.about, href: "#bio" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#missions" },
    { label: t.nav.technologies, href: "#tech" },
    { label: t.nav.contact, href: "#comms" },
  ];

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -56 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 h-14 bg-bat-surface/90 backdrop-blur-md border-b border-bat-border/20"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden text-bat-orange hover:text-bat-cyan transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
        <span className="text-sm md:text-lg font-black tracking-tighter text-bat-orange">
          WAYNE_TECH // PORTFOLIO_OS
        </span>
        <div className="hidden lg:flex gap-4 items-center">
          <span className="w-2 h-2 bg-bat-cyan animate-pulse" />
          <span className="font-mono uppercase tracking-tighter text-[0.6875rem] text-bat-cyan/60">
            {t.header.systemStable}
          </span>
        </div>
      </div>

      <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono uppercase tracking-tighter text-[0.6875rem] text-white/60 hover:text-bat-orange transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 text-bat-orange">
        {/* Language toggle */}
        <button
          onClick={toggleLocale}
          className="flex items-center gap-1.5 px-2 py-1 border border-bat-border/30 hover:border-bat-orange/50 transition-colors group"
          aria-label="Toggle language"
        >
          <Globe size={12} className="group-hover:text-bat-cyan transition-colors" />
          <span className="font-mono text-[10px] font-bold tracking-wider">
            {locale === "es" ? "EN" : "ES"}
          </span>
        </button>

        <Settings size={14} className="hidden sm:block" />
        <Terminal size={14} className="hidden sm:block" />
        <Radio size={14} className="hidden sm:block" />
        <div className="ml-2 pl-3 border-l border-bat-border/40 font-mono text-[10px] text-white/40">
          {time}
        </div>
      </div>
    </motion.header>
  );
}
