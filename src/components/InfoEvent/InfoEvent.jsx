import React from "react";
import "./InfoEvent.css";

export default function InfoEvent() {
  return (
    <section className="info-event">
      <h2 className="info-event__title">Informações do evento</h2>

      <div className="info-event__row info-event__row--center">
        <div className="info-event__block info-event__block--wide">
          <span className="info-event__label">Data & Horário</span>
          <span className="info-event__value">
            11 de Novembro de 2025, a partir das 13h
          </span>
        </div>
      </div>

      <div className="info-event__row info-event__row--center">
        <div className="info-event__block info-event__block--wide">
          <span className="info-event__label">Localização</span>
          <span className="info-event__value">
            Hall UTFPR - Av. Alberto Carazzai, 1640
          </span>
        </div>
        <div className="info-event__block info-event__block--wide">
          <span className="info-event__label">Inscrição</span>
          <span className="info-event__value">
            Gratuita • Aberto a todos • Não precisa se inscrever antes
          </span>
        </div>
      </div>
    </section>
  );
}
