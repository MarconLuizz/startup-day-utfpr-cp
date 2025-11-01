// src/components/sections/Supporters/Supporters.jsx
import React from "react";
import LogoLoop from "../../ui/LogoLoop/LogoLoop";
import { supporters } from "./supportersData";
import "./Supporters.css"; // IMPORTAÇÃO NORMAL (não módulo)

export default function SupportersSection() {
  const imageLogos = supporters.map((s) => ({
    src: s.logo,
    alt: s.name,
    href: s.url,
    className: s.name.toLowerCase().includes("sebrae")
      ? "logoSebrae"
      : s.name.toLowerCase().includes("sprint")
      ? "logoSprint"
      : s.name.toLowerCase().includes("utfpr")
      ? "logoUtfpr"
      : s.name.toLowerCase().includes("forlogic")
      ? "logoForlogic"
      : s.name.toLowerCase().includes("oxion")
      ? "logoOxion"
      : "",
  }));

  return (
    <section className="supportersSection" aria-label="Apoiadores">
      <div className="container">
        <h2 className="title">APOIADORES</h2>

        <div className="loopWrapper">
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={56}
            gap={64}
            pauseOnHover={true}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="#fff"
            ariaLabel="Apoiadores do Startup Day UTFPR CP"
          />
        </div>
      </div>
    </section>
  );
}
