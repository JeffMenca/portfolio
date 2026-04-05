import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "WAYNE_TECH // PORTFOLIO_OS — Jeffrey Menéndez",
  description:
    "Mid Frontend Developer | React, Next.js, TypeScript | +4 years building modern web applications",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Jeffrey Menéndez",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${firaCode.variable} font-mono`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
