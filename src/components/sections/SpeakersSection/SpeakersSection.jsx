import React from "react";
import "./SpeakersSection.css";
import { FaLinkedin } from "react-icons/fa";

import igorPhoto from "../../../assets/speakers/igor.jpg";
import laisPhoto from "../../../assets/speakers/lais.jpg";
import laertePhoto from "../../../assets/speakers/laerte.jpg";

const speakersData = [
  {
    name: "Igor Vicentini",
    photo: igorPhoto,
    lecture: "O Futuro é Agora: Tendências de Tecnologia",
    position: "Time de Inovação - Forlogic",
    description:
      "Trabalha na criação de novos módulos e produtos, utilizando Inteligência Artificial para acelerar o desenvolvimento e aumentar o impacto das soluções.",
    linkedin: "https://www.linkedin.com/in/igorvicentini/",
  },
  {
    name: "Laís de Sá",
    photo: laisPhoto,
    lecture: "O Futuro é Agora: Tendências de Tecnologia",
    position: "Time de Inovação - Forlogic",
    description:
      "Atua na descoberta e gestão de novos produtos, provas de conceito (PoCs) e MVPs voltados à geração de alor para gestão e qualidade dos clientes",
    linkedin: "https://www.linkedin.com/in/laisdsa/",
  },
  {
    name: "Laerte Holak Zaccarelli",
    photo: laertePhoto,
    lecture: "Chega de Achismo: Como Validar sua Ideia",
    position: "Cofundador & CPO - QualityStorm",
    description:
      "Co-fundador e chefe de Produto da QualityStorm, é formado em Ciências da Computação (UEL) e pós-graduado em Administração (FGV). ",
    linkedin: "https://www.linkedin.com/in/laerteholak/",
  },
];

export default function SpeakersSection() {
  return (
    <section
      className="speakers-section"
      id="speakers"
      aria-label="Palestrantes"
    >
      <div className="speakers-container">
        <h2 className="speakers-title">Palestrantes</h2>
        <p className="speakers-subtitle">
          Conheça os especialistas que vão inspirar você no evento
        </p>

        <div className="speakers-grid">
          {speakersData.map((speaker, idx) => (
            <div key={idx} className="speaker-card">
              <div className="speaker-image-wrapper">
                <img
                  src={speaker.photo}
                  alt={`Foto de ${speaker.name}`}
                  className="speaker-photo"
                />
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-lecture">{speaker.lecture}</p>
                <p className="speaker-position">{speaker.position}</p>
                <p className="speaker-desc">{speaker.description}</p>
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="speaker-link"
                  aria-label={`LinkedIn de ${speaker.name}`}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
