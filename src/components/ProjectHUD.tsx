"use client";

import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/i18n/LanguageContext";

const PROJECT_META = [
  {
    url: "https://www.eppigo.com/",
    tags: ["REACT_NATIVE", "TYPESCRIPT", "REST_API", "MOBILE"],
    code: "EPG_01",
    thumbnail: "/projects/eppigo.jpg",
    gradient: "bg-gradient-to-br from-sky-600/40 to-indigo-900/40",
  },
  {
    url: "https://app.xtratology.com/en/login",
    tags: ["REACT", "NESTJS", "AI_AGENTS", "TYPESCRIPT"],
    code: "XTR_02",
    thumbnail: "/projects/xtratology.jpg",
    gradient: "bg-gradient-to-br from-cyan-600/40 to-blue-900/40",
  },
  {
    url: "https://hotellomarealresort.com/",
    tags: ["NEXT.JS", "TAILWIND", "HOSPITALITY", "UI/UX"],
    code: "HLR_03",
    thumbnail: "/projects/loma.jpg",
    gradient: "bg-gradient-to-br from-teal-600/40 to-cyan-900/40",
  },
  {
    url: "https://hotelmansiondelviajero.com/",
    tags: ["NEXT.JS", "TAILWIND", "HOSPITALITY"],
    code: "HMV_04",
    thumbnail: "/projects/mansion.jpg",
    gradient: "bg-gradient-to-br from-emerald-600/40 to-teal-900/40",
  },
  {
    url: "https://www.skechers.com/shoe-finder/",
    tags: ["REACT", "INTERACTIVE", "UX", "E-COMMERCE"],
    code: "SKC_05",
    thumbnail: "/projects/skechers.jpg",
    gradient: "bg-gradient-to-br from-blue-600/40 to-indigo-900/40",
  },
  {
    url: "https://www.ugg.com/ugg-style-quiz/",
    tags: ["JAVASCRIPT", "UX_LOGIC", "QUIZ_ENGINE"],
    code: "UGG_06",
    gradient: "bg-gradient-to-br from-amber-600/40 to-yellow-900/40",
  },
  {
    url: "https://www.hauslabs.com/pages/the-foundation-lab",
    tags: ["REACT", "SHOPIFY", "BEAUTY_TECH", "UI/UX"],
    code: "HLF_07",
    thumbnail: "/projects/hauslabs.jpg",
    gradient: "bg-gradient-to-br from-purple-600/40 to-pink-900/40",
  },
  {
    url: "#",
    tags: ["UNITY", "C#", "GAMEPLAY", "OOP"],
    code: "UGL_08",
    gradient: "bg-gradient-to-br from-lime-600/40 to-green-900/40",
    badge: "inProgress" as const,
  },
  {
    url: "https://www.maxicompra.com/",
    tags: ["REACT", "TYPESCRIPT", "REDUX", "MAGENTO", "PHP"],
    code: "MXC_09",
    thumbnail: "/projects/maxicompra.jpg",
    gradient: "bg-gradient-to-br from-orange-600/40 to-red-900/40",
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
          const badge = "badge" in meta ? meta.badge : undefined;
          const thumbnail = "thumbnail" in meta ? meta.thumbnail : undefined;
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
              thumbnail={thumbnail}
              index={i}
              comingSoon={badge !== undefined}
              comingSoonLabel={
                badge === "inProgress"
                  ? t.projects.inProgress
                  : t.projects.comingSoon
              }
            />
          );
        })}
      </div>
    </div>
  );
}
