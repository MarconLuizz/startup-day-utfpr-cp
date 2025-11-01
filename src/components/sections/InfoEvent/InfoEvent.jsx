import React from "react";
import "./InfoEvent.css";
import {
  FaCalendarAlt,
  FaUserFriends,
  FaMapMarkerAlt,
  FaMap,
} from "react-icons/fa";

export default function InfoEvent() {
  return (
    <section id="info" className="info-event">
      <h2 className="info-event__title">Informações do evento</h2>

      <div className="info-event__details">
        <div className="info-event__item">
          <FaCalendarAlt className="info-event__icon" />
          <div className="info-event__text">
            <h4>Data & Horário</h4>
            <p>11 de Novembro de 2025, a partir das 13h</p>
          </div>
        </div>

        <div className="info-event__item">
          <FaUserFriends className="info-event__icon" />
          <div className="info-event__text">
            <h4>Inscrição</h4>
            <p>Gratuita • Aberto a todos • Não precisa se inscrever antes</p>
          </div>
        </div>

        <div className="info-event__item">
          <FaMapMarkerAlt className="info-event__icon" />
          <div className="info-event__text">
            <h4>Localização</h4>
            <p>Hall UTFPR - Av. Alberto Carazzai 1640, Cornélio Procópio, PR</p>
          </div>
        </div>
      </div>

      <a
        href="https://www.google.com/maps?q=Hall+UTFPR+Av.+Alberto+Carazzai+1640"
        target="_blank"
        rel="noopener noreferrer"
        className="info-event__button"
      >
        <FaMap className="info-event__button-icon" />
        Mapa
      </a>
    </section>
  );
}
