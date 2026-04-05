"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  User,
  FolderGit2,
  Briefcase,
  Cpu,
  GraduationCap,
  Mail,
  Lock,
  Power,
  X,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({
  open,
  onClose,
  collapsed,
  onToggleCollapse,
}: SidebarProps) {
  const { t } = useLanguage();

  const NAV_LINKS = [
    { icon: LayoutGrid, label: t.nav.dashboard, href: "#bio", active: true },
    { icon: User, label: t.nav.about, href: "#bio", active: false },
    { icon: FolderGit2, label: t.nav.projects, href: "#projects", active: false },
    { icon: Briefcase, label: t.nav.experience, href: "#missions", active: false },
    { icon: Cpu, label: t.nav.technologies, href: "#tech", active: false },
    { icon: GraduationCap, label: t.nav.education, href: "#academic", active: false },
    { icon: Mail, label: t.nav.contact, href: "#comms", active: false },
  ];

  const sidebarContent = (isMobile: boolean) => (
    <>
      {/* Identity Card */}
      {!collapsed && (
        <div className="p-6 border-b border-bat-border/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-bat-card relative border border-bat-orange/30 overflow-hidden flex items-center justify-center flex-shrink-0">
              <span className="text-bat-orange font-bold text-lg">JM</span>
              <div className="absolute inset-0 bg-bat-orange/10 mix-blend-overlay" />
            </div>
            <div>
              <div className="text-bat-orange font-bold font-mono text-xs">
                J. MENÉNDEZ
              </div>
              <div className="font-mono uppercase text-[10px] tracking-widest text-bat-cyan/60">
                {t.sidebar.authLevel}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed identity */}
      {collapsed && !isMobile && (
        <div className="p-3 border-b border-bat-border/20 flex justify-center">
          <div className="w-10 h-10 bg-bat-card relative border border-bat-orange/30 overflow-hidden flex items-center justify-center">
            <span className="text-bat-orange font-bold text-lg">JM</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label + link.href}
            href={link.href}
            onClick={onClose}
            className={`py-3 flex items-center gap-3 font-mono uppercase text-sm tracking-[0.1em] transition-colors ${
              collapsed && !isMobile ? "px-0 justify-center" : "px-6"
            } ${
              link.active
                ? "bg-bat-orange/20 text-bat-orange border-l-4 border-bat-orange"
                : "text-white/40 hover:bg-bat-cyan/5 hover:text-bat-cyan border-l-4 border-transparent"
            }`}
            title={collapsed ? link.label : undefined}
          >
            <link.icon size={20} className="flex-shrink-0" />
            {(!collapsed || isMobile) && <span>{link.label}</span>}
          </a>
        ))}
      </nav>

      {/* System Load */}
      {(!collapsed || isMobile) && (
        <div className="p-6 border-t border-bat-border/20 space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-[8px] text-bat-cyan/40 uppercase tracking-widest">
              <span>{t.sidebar.sysLoad}</span>
              <span>87.4%</span>
            </div>
            <div className="h-1 bg-bat-card w-full">
              <div className="h-full bg-bat-orange w-[87.4%] shadow-[0_0_5px_#F78166]" />
            </div>
          </div>
          <a
            href="#comms"
            onClick={onClose}
            className="block w-full bg-bat-orange text-bat-dark py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all text-center"
          >
            {t.sidebar.contactBtn}
          </a>
        </div>
      )}

      {/* Bottom icons */}
      <div className={`py-4 flex gap-4 text-white/20 ${collapsed && !isMobile ? "justify-center px-2" : "px-6"}`}>
        <Lock
          size={14}
          className="hover:text-bat-orange cursor-pointer transition-colors"
        />
        <Power
          size={14}
          className="hover:text-red-500 cursor-pointer transition-colors"
        />
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] hidden lg:flex flex-col z-40 bg-bat-dark/95 backdrop-blur-xl border-r border-bat-border/20 transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {sidebarContent(false)}

        {/* Collapse/Expand floating button */}
        <button
          onClick={onToggleCollapse}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-bat-surface border border-bat-border/30 flex items-center justify-center hover:border-bat-orange/50 hover:text-bat-orange text-white/40 transition-colors z-50"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronsRight size={14} />
          ) : (
            <ChevronsLeft size={14} />
          )}
        </button>
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-64 flex flex-col z-50 bg-bat-dark border-r border-bat-border/20 lg:hidden"
            >
              <div className="h-14 flex items-center justify-between px-6 border-b border-bat-border/20">
                <span className="text-bat-orange font-bold text-sm">MENU</span>
                <button
                  onClick={onClose}
                  className="text-white/40 hover:text-bat-orange transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              {sidebarContent(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
