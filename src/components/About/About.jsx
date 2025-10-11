import React from "react";
import "./About.css";

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
            acelerar a inovação em Cornélio Procópio e capacitar uma nova
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
              {/* simple rocket icon */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2s3 1 5 3 3 5 3 5-2 1-4 3-4 5-4 5-3-2-5-4S2 12 2 12s2-3 5-5 5-5 5-5z"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              {/* target icon */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#004aad"
                  strokeWidth="1.2"
                ></circle>
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="#004aad"
                  strokeWidth="1.2"
                ></circle>
                <circle cx="12" cy="12" r="2" fill="#004aad" />
              </svg>
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
              {/* network icon */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 12h4"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 12h4"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="6"
                  r="2"
                  stroke="#004aad"
                  strokeWidth="1.2"
                />
                <circle
                  cx="12"
                  cy="18"
                  r="2"
                  stroke="#004aad"
                  strokeWidth="1.2"
                />
                <path
                  d="M12 8v6"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
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
