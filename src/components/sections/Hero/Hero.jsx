import React from "react";
import "./Hero.css";
import logo from "../../../assets/logo.png";
import scrollToId from "../Header/Header.utils";

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

        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={() => scrollToId("timeline")}
          >
            Veja o Cronograma
          </button>
          <button className="btn btn--ghost" onClick={() => scrollToId("info")}>
            Informações do evento
          </button>
        </div>
      </div>
    </section>
  );
}
