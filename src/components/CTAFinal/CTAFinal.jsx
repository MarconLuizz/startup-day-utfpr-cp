import React from "react";
import "./CTAFinal.css";

export default function CTAFinal() {
  return (
    <section id="cta" className="section">
      <div className="container cta">
        <div className="cta__left">
          <img
            src="/src/assets/logo.svg"
            alt="Startup Day logo"
            className="cta__logo"
          />
          <h3 className="cta__title">Pronto para decolar?</h3>
          <p className="cta__subtitle">
            O futuro é construído por quem age. Não perca a chance de fazer
            parte deste dia transformador.
          </p>
          <div className="cta__badges">
            <div className="cta__badge">100% gratuito</div>
            <div className="cta__badge">~6 horas de conteúdo</div>
            <div className="cta__badge">Aberto a todos</div>
          </div>

          <div className="cta__links">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Instagram
            </a>
            <a
              href="mailto:contato@startupday.example"
              className="btn btn--ghost"
            >
              E-mail
            </a>
          </div>
        </div>

        <div className="cta__right" aria-hidden="true">
          {/* Ilustração ou imagem */}
          <img src="/src/assets/illustration-cta.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
