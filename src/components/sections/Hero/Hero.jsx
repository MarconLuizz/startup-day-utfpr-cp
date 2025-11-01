import React from "react";
import "./Hero.css";
import logo from "../../../assets/logo.png";
import scrollToId from "../Header/Header.utils";
import { SiGooglemaps } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content container">
        <img src={logo} alt="Logo Startup Day" className="hero__logo" />

        <h1 className="hero__title">Inovar, Conectar e Inspirar</h1>
        <p className="hero__subtitle">
          Conecte-se, inspire-se e empreenda no maior evento de inovação da
          UTFPR-CP, onde sonhos se transformam em realidade.
        </p>

        {/* Data e Local */}
        <div className="hero__event-info">
          <div className="hero__event-item">
            <FaRegCalendarAlt className="hero__event-icon" />
            <span>11 de novembro de 2025</span>
          </div>
          <div className="hero__event-item">
            <SiGooglemaps className="hero__event-icon" />
            <span>Hall da UTFPR, Cornélio Procópio - PR</span>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={() => scrollToId("timeline")}
          >
            Veja o Cronograma
          </button>

          {/* Link do Google Maps */}
          <a
            href="https://www.google.com/maps?q=Hall+UTFPR+Av.+Alberto+Carazzai+1640"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Abrir mapa
          </a>
        </div>
      </div>
    </section>
  );
}
