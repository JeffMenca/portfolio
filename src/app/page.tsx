"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import Overlays from "@/components/Overlays";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import BioPanel from "@/components/BioPanel";
import TelemetryPanel from "@/components/TelemetryPanel";
import ProjectHUD from "@/components/ProjectHUD";
import MissionLog from "@/components/MissionLog";
import TechStrings from "@/components/TechStrings";
import AcademicPanel from "@/components/AcademicPanel";
import CommsLink from "@/components/CommsLink";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          <Overlays />
          <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          <main
            className={`mt-14 p-4 md:p-6 mb-10 transition-all duration-300 ${
              sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
            }`}
          >
            <div className="max-w-7xl mx-auto space-y-0">
              {/* Breadcrumbs */}
              <div className="flex justify-between items-end border-b border-bat-border/10 pb-2 mb-6">
                <div className="font-mono text-[10px] text-bat-cyan/60 tracking-widest flex items-center gap-2">
                  <span className="opacity-30">ROOT /</span> DASHBOARD /
                  <span className="text-bat-orange">{t.breadcrumb.mainTerminal}</span>
                </div>
                <div className="font-mono text-[10px] text-white/20 text-right hidden sm:block">
                  LAT: 14.6349° N // LON: 90.5069° W
                </div>
              </div>

              {/* Bio + Telemetry Row */}
              <div className="grid grid-cols-12 gap-6 mb-6">
                <section id="bio" className="col-span-12 xl:col-span-8">
                  <BioPanel />
                </section>
                <section className="col-span-12 xl:col-span-4">
                  <TelemetryPanel />
                </section>
              </div>

              {/* Project HUD */}
              <section id="projects">
                <ProjectHUD />
              </section>

              {/* Mission Log */}
              <section id="missions">
                <MissionLog />
              </section>

              {/* Tech Strings */}
              <section id="tech">
                <TechStrings />
              </section>

              {/* Academic + Comms Row */}
              <div className="grid grid-cols-12 gap-6">
                <section id="academic" className="col-span-12 lg:col-span-6">
                  <AcademicPanel />
                </section>
                <section id="comms" className="col-span-12 lg:col-span-6">
                  <CommsLink />
                </section>
              </div>
            </div>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
