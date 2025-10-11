import React from "react";
import "./CTAFinal.css";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function CTAFinal() {
  return (
    <section id="cta" className="cta">
      <div className="cta__card">
        <img
          src="/src/assets/logo.png"
          alt="Startup Day logo"
          className="cta__logo"
        />
        <h3 className="cta__title">Pronto para decolar?</h3>
        <p className="cta__subtitle">
          O futuro é construído por quem age. Não perca a chance de fazer parte
          deste dia transformador.
        </p>

        <div className="cta__badges">
          <div className="cta__badge">100% gratuito</div>
          <div className="cta__badge">~6 horas de conteúdo</div>
          <div className="cta__badge">Aberto a todos</div>
        </div>

        <div className="cta__socials">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="cta__icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="cta__icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="cta__icon"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
