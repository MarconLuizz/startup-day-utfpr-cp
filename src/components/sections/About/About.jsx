import React from "react";
import "./About.css";
import { FaRocket, FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <div className="about__intro" aria-labelledby="about-heading">
          <h2 id="about-heading" className="about__title">
            Nascemos para conectar.
          </h2>
          <p className="about__desc">
            O <strong>Startup Day</strong> nasceu para ser a ponte que faltava
            no ecossistema local. Um evento criado para unir estudantes,
            startups, professores e o mercado em um único lugar, fomentando
            troca de conhecimento e criação de oportunidades. Nossa missão é
            acelerar a inovação em Cornélio Procópio e incentivar uma nova
            geração de empreendedores.
          </p>
        </div>

        <div className="about__cards" role="list">
          <article
            className="about__card"
            role="listitem"
            aria-labelledby="mission-title"
          >
            <div className="about__icon" aria-hidden="true">
              <FaRocket size={36} color="#004aad" />
            </div>
            <h3 id="mission-title" className="about__card-title">
              Missão
            </h3>
            <p className="about__card-text">
              Acelerar o ecossistema de inovação
            </p>
          </article>

          <article
            className="about__card"
            role="listitem"
            aria-labelledby="objective-title"
          >
            <div className="about__icon" aria-hidden="true">
              <GoGoal size={36} color="#004aad" />
            </div>
            <h3 id="objective-title" className="about__card-title">
              Objetivo
            </h3>
            <p className="about__card-text">Conectar · Inovar · Inspirar</p>
          </article>

          <article
            className="about__card"
            role="listitem"
            aria-labelledby="vision-title"
          >
            <div className="about__icon" aria-hidden="true">
              <FaEye size={36} color="#004aad" />
            </div>
            <h3 id="vision-title" className="about__card-title">
              Visão
            </h3>
            <p className="about__card-text">
              Construir um ecossistema conectado, colaborativo e sustentável de
              inovação.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
