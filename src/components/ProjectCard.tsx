"use client";

import { motion } from "framer-motion";
import { ExternalLink, Crosshair, Clock } from "lucide-react";

interface ProjectCardProps {
  name: string;
  role: string;
  url: string;
  description: string;
  tags: string[];
  index: number;
  code: string;
  gradient: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
}

export default function ProjectCard({
  name,
  role,
  url,
  description,
  tags,
  index,
  code,
  gradient,
  comingSoon,
  comingSoonLabel,
}: ProjectCardProps) {
  const Wrapper = comingSoon ? "div" : "a";
  const linkProps = comingSoon
    ? {}
    : { href: url, target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Wrapper
        {...linkProps}
        className={`tactical-cell group block relative ${
          comingSoon
            ? "cursor-default"
            : "cursor-pointer hover:border-bat-orange/60 hover:shadow-[0_0_25px_rgba(247,129,102,0.15)]"
        }`}
      >
        {/* Preview area */}
        <div className="h-40 relative bg-bat-black overflow-hidden">
          <div
            className={`absolute inset-0 ${gradient} opacity-30 ${
              comingSoon
                ? "grayscale"
                : "grayscale group-hover:grayscale-0 group-hover:opacity-50"
            } transition-all duration-500`}
          />

          <div className="absolute inset-0 tactical-grid opacity-30" />
          <div className="scanline-effect opacity-30" />
          <div
            className={`absolute inset-0 transition-colors duration-300 ${
              comingSoon
                ? "bg-bat-dark/70"
                : "bg-bat-dark/60 group-hover:bg-bat-dark/40"
            }`}
          />

          {/* Target lock on hover (only for live projects) */}
          {!comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Crosshair size={40} className="text-bat-orange/60 animate-pulse" />
            </div>
          )}

          {/* Coming soon center icon */}
          {comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Clock size={36} className="text-bat-cyan/40" />
            </div>
          )}

          {/* Role badge */}
          <div className="absolute top-2 left-2 px-2 py-1 bg-bat-orange text-bat-dark font-mono text-[9px] font-bold">
            {role}
          </div>

          {/* Coming soon badge */}
          {comingSoon && (
            <div className="absolute top-2 right-2 px-2 py-1 bg-bat-cyan/20 border border-bat-cyan/40 font-mono text-[9px] font-bold text-bat-cyan">
              {comingSoonLabel}
            </div>
          )}

          {/* Corner brackets (only for live) */}
          {!comingSoon && (
            <>
              <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-bat-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-bat-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex justify-between items-start">
            <h4
              className={`font-mono font-bold uppercase text-base transition-colors ${
                comingSoon
                  ? "text-white/60"
                  : "text-white group-hover:text-bat-orange"
              }`}
            >
              {name}
            </h4>
            <span className="font-mono text-[9px] text-bat-cyan flex items-center gap-1">
              [ {code} ]
              {!comingSoon && (
                <ExternalLink
                  size={10}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </span>
          </div>
          <p className="font-mono text-xs text-white/50 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-[8px] font-mono border px-1.5 py-0.5 transition-colors ${
                  comingSoon
                    ? "border-bat-cyan/20 text-bat-cyan/30"
                    : "border-bat-border/40 text-white/30 group-hover:border-bat-orange/30 group-hover:text-bat-orange/60"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
