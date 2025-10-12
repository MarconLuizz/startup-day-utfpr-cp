// src/components/CTAFinal/CTAFinal.jsx
import React from "react";
import "./CTAFinal.css";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png"; // import da imagem

export default function CTAFinal() {
  return (
    <section id="cta" className="cta">
      <div className="cta__card">
        <img
          src={logo}
          alt="Startup Day logo"
          className="cta__logo"
          width={220}
          height={60}
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

        <div className="cta__socials" aria-label="Redes sociais Startup Day">
          <a
            href="https://www.linkedin.com/company/startup-day-utfpr-cp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta__icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/startupday.utfpr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="cta__icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://chat.whatsapp.com/Cm7lIlvB6Ex2CfTdo8NbEl?mode=wwc"
            target="_blank"
            rel="noopener noreferrer"
            className="cta__icon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
