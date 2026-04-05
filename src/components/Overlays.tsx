"use client";

export default function Overlays() {
  return (
    <>
      <div className="crt-overlay" />
      <div className="noise-overlay" />
      <div className="fixed inset-0 tactical-grid pointer-events-none" />
    </>
  );
}
