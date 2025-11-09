import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { startups } from "./startupsData";
import "./StartupDetail.css";
import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

export default function StartupDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const s = startups.find((x) => x.slug === slug);

  if (!s) {
    return (
      <div>
        <Header />
        <main style={{ padding: "4rem 1rem" }}>
          <p>Startup não encontrada.</p>
          <button onClick={() => navigate("/startups")}>Voltar</button>
        </main>
      </div>
    );
  }

  return (
    <div className="startup-detail-page">
      <Header />
      <main className="startup-detail-main">
        <div className="startup-detail-hero">
          <img
            src={s.logo}
            alt={`${s.name} logo`}
            className="startup-detail-logo"
          />
          <div className="startup-detail-head">
            <h1>{s.name}</h1>
            <p className="startup-detail-sector">{s.sector}</p>
            <p className="startup-detail-slogan">{s.slogan}</p>
            <div className="startup-actions">
              <button
                className="btn btn--primary"
                onClick={() => navigate("/startups")}
              >
                Voltar às startups
              </button>
            </div>
          </div>
        </div>

        <section className="startup-detail-desc">
          <h2>Sobre</h2>
          <p>{s.description}</p>
        </section>
      </main>
    </div>
  );
}
