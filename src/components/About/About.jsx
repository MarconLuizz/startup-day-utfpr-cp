import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__left">
          <h2 className="about__title">Nascemos para conectar.</h2>
          <p className="about__text">
            O <strong>Startup Day</strong> nasceu para ser a ponte que faltava
            no ecossistema local. Um evento criado para unir estudantes,
            startups, professores e o mercado em um único lugar, fomentando
            troca de conhecimento e criação de oportunidades. Nossa missão é
            acelerar a inovação em Cornélio Procópio e capacitar uma nova
            geração de empreendedores.
          </p>
          <div className="about__meta">
            <span>Missão: Acelerar o ecossistema de inovação</span>
            <span>Objetivo: Conectar · Inovar · Inspirar</span>
            <span>Valor: Gratuito · Aberto a todos</span>
          </div>
        </div>

        <div className="about__right" aria-hidden="true">
          {/* espaço para ilustração futurista */}
          <div className="about__visual">
            <img src="/src/assets/illustration-about.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
