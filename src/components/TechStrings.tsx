"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Palette,
  Bot,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TECH_ITEMS = [
  ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "Java", "C++"],
  ["React", "Next.js", "Vue.js", "Redux", "Tailwind CSS", "SASS/SCSS", "HTML5", "CSS3"],
  ["Node.js", "NestJS", "Laravel"],
  ["MySQL", "PostgreSQL", "MongoDB"],
  ["Git", "GitHub", "GitLab", "GitHub Actions", "AWS Fundamentals"],
  ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  ["Genetic Algorithms", "Prompt Engineering", "Claude Code", "GitHub Copilot"],
];

const ICONS = [Code2, Layout, Server, Database, GitBranch, Palette, Bot];
const COLORS = [
  { text: "text-bat-orange", border: "border-bat-orange/30" },
  { text: "text-bat-cyan", border: "border-bat-cyan/30" },
  { text: "text-bat-orange", border: "border-bat-orange/30" },
  { text: "text-bat-cyan", border: "border-bat-cyan/30" },
  { text: "text-bat-orange", border: "border-bat-orange/30" },
  { text: "text-bat-cyan", border: "border-bat-cyan/30" },
  { text: "text-bat-orange", border: "border-bat-orange/30" },
];

export default function TechStrings() {
  const { t } = useLanguage();

  return (
    <div className="my-12">
      <div className="section-divider">
        <h2 className="font-mono text-sm font-black text-bat-orange tracking-[0.2em] uppercase whitespace-nowrap">
          {t.tech.sectionTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {t.tech.categories.map((cat, i) => {
          const Icon = ICONS[i];
          const color = COLORS[i];
          const items = TECH_ITEMS[i];

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`tactical-cell p-6 space-y-4 border-t-2 ${color.border}`}
            >
              <div className="flex items-center gap-3">
                <Icon size={16} className={color.text} />
                <div>
                  <h4 className={`font-mono text-xs font-bold tracking-widest ${color.text}`}>
                    {cat.title}
                  </h4>
                  <span className="font-mono text-[9px] text-white/30 tracking-wider">
                    {cat.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono border border-bat-border/30 px-2 py-1 text-white/50 hover:border-bat-orange/40 hover:text-bat-orange/80 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
