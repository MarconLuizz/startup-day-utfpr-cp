import React, { useMemo, useState } from "react";
import "./Startups.css";
import { startups } from "./startupsData";
import StartupCard from "../../components/sections/Startups/StartupCard";
import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

export default function Startups() {
  const [q, setQ] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");

  const sectors = useMemo(() => {
    const s = new Set(startups.map((x) => x.sector));
    return ["all", ...Array.from(s)];
  }, []);

  const filtered = startups.filter((s) => {
    if (sectorFilter !== "all" && s.sector !== sectorFilter) return false;
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.slogan.toLowerCase().includes(q.toLowerCase())
    );
  });

  return (
    <div className="startups-page">
      <Header />

      <main className="startups-content">
        <section className="startups-hero">
          <h1>Startups Participantes</h1>
          <p>Conheça as startups e empresas juniores presentes no evento.</p>

          <div className="startups-controls">
            <input
              type="search"
              placeholder="Pesquisar por nome ou slogan..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="startups-search"
              aria-label="Pesquisar startups"
            />

            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="startups-select"
              aria-label="Filtrar por setor"
            >
              {sectors.map((s) => (
                <option value={s} key={s}>
                  {s === "all" ? "Todos os setores" : s}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="startups-grid-wrap">
          <div className="startups-grid">
            {filtered.map((s) => (
              <StartupCard key={s.id} s={s} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="startups-empty">Nenhuma startup encontrada.</p>
          )}
        </section>
      </main>

      {Footer && <Footer />}
    </div>
  );
}
