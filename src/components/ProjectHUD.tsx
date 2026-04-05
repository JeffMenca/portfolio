"use client";

import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/i18n/LanguageContext";

const PROJECT_META = [
  {
    url: "https://www.maxicompra.com/",
    tags: ["REACT", "TYPESCRIPT", "REDUX", "MAGENTO", "PHP"],
    code: "MXC_01",
    gradient: "bg-gradient-to-br from-orange-600/40 to-red-900/40",
  },
  {
    url: "https://www.skechers.com/shoe-finder/",
    tags: ["REACT", "INTERACTIVE", "UX", "E-COMMERCE"],
    code: "SKC_02",
    gradient: "bg-gradient-to-br from-blue-600/40 to-indigo-900/40",
  },
  {
    url: "https://www.ugg.com/ugg-style-quiz/",
    tags: ["JAVASCRIPT", "UX_LOGIC", "QUIZ_ENGINE"],
    code: "UGG_03",
    gradient: "bg-gradient-to-br from-amber-600/40 to-yellow-900/40",
  },
  {
    url: "https://hotelmansiondelviajero.com/",
    tags: ["NEXT.JS", "TAILWIND", "HOSPITALITY"],
    code: "HMV_04",
    gradient: "bg-gradient-to-br from-emerald-600/40 to-teal-900/40",
  },
  {
    url: "https://www.hauslabs.com/pages/the-foundation-lab",
    tags: ["REACT", "SHOPIFY", "BEAUTY_TECH", "UI/UX"],
    code: "HLF_05",
    gradient: "bg-gradient-to-br from-purple-600/40 to-pink-900/40",
  },
  {
    url: "#",
    tags: ["REACT", "NESTJS", "AI_AGENTS", "TYPESCRIPT"],
    code: "JRV_06",
    gradient: "bg-gradient-to-br from-cyan-600/40 to-blue-900/40",
    comingSoon: true,
  },
];

export default function ProjectHUD() {
  const { t } = useLanguage();

  return (
    <div className="my-12">
      <div className="section-divider">
        <h2 className="font-mono text-sm font-black text-bat-orange tracking-[0.2em] uppercase whitespace-nowrap">
          {t.projects.sectionTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECT_META.map((meta, i) => {
          const item = t.projects.items[i];
          return (
            <ProjectCard
              key={meta.code}
              name={item.name}
              role={item.role}
              description={item.description}
              url={meta.url}
              tags={meta.tags}
              code={meta.code}
              gradient={meta.gradient}
              index={i}
              comingSoon={"comingSoon" in meta && meta.comingSoon === true}
              comingSoonLabel={t.projects.comingSoon}
            />
          );
        })}
      </div>
    </div>
  );
}
