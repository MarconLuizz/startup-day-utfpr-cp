import React from "react";
import "./ForWho.css";

export default function ForWho() {
  return (
    <section className="forwho" id="forwho">
      <div className="forwho__inner container">
        <h2 className="forwho__title">Para quem é o evento?</h2>
        <p className="forwho__subtitle">
          O Startup Day foi pensado para todos que querem conhecer e fazer parte
          do ecossistema de inovação.
        </p>

        <div
          className="forwho__cards"
          role="list"
          aria-label="Público do evento"
        >
          <article
            className="forwho__card"
            role="listitem"
            aria-labelledby="fw-students"
          >
            <div className="forwho__icon" aria-hidden="true">
              {/* graduation cap */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L1 7l11 5 9-4.09V17"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 id="fw-students" className="forwho__card-title">
              Estudantes
            </h3>
            <p className="forwho__card-desc">
              Que desejam aprender sobre startups, inovação e empreendedorismo
              de forma prática.
            </p>
          </article>

          <article
            className="forwho__card"
            role="listitem"
            aria-labelledby="fw-mentors"
          >
            <div className="forwho__icon" aria-hidden="true">
              {/* mentor / teacher */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 20s1.5-4 8-4 8 4 8 4"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 id="fw-mentors" className="forwho__card-title">
              Professores & Mentores
            </h3>
            <p className="forwho__card-desc">
              Que buscam trocar conhecimento, inspirar e orientar novos
              talentos.
            </p>
          </article>

          <article
            className="forwho__card"
            role="listitem"
            aria-labelledby="fw-startups"
          >
            <div className="forwho__icon" aria-hidden="true">
              {/* rocket / startup */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5s1 2 0 4-3 2-4 3-1 3-1 3l-3 3s1-2 1-4 2-3 3-4 2-4 4-5z"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 14l-2 2"
                  stroke="#004aad"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 id="fw-startups" className="forwho__card-title">
              Empreendedores & Startups
            </h3>
            <p className="forwho__card-desc">
              Que querem se conectar, compartilhar experiências e encontrar
              novas oportunidades.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
