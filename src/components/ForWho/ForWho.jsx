import React from "react";
import "./ForWho.css";
import { FaUsers } from "react-icons/fa"; // substituindo FaPeopleGroup
import { PiStudentFill } from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";

export default function ForWho() {
  const cards = [
    {
      id: "fw-students",
      title: "Comunidade",
      desc: "Aprenda e descubra o ecossistema de empreendedorismo de Cornélio e região.",
      icon: <FaUsers size={36} color="#004aad" />,
    },
    {
      id: "fw-mentors",
      title: "Estudantes & Entusiastas",
      desc: "Troque conhecimento, inspire e conecte-se com outros inovadores.",
      icon: <PiStudentFill size={36} color="#004aad" />,
    },
    {
      id: "fw-startups",
      title: "Empreendedores & Startups",
      desc: "Conecte-se, compartilhe experiências e encontre novas oportunidades.",
      icon: <IoIosRocket size={36} color="#004aad" />,
    },
  ];

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
          {cards.map((card) => (
            <article
              key={card.id}
              className="forwho__card"
              role="listitem"
              aria-labelledby={card.id}
            >
              <div className="forwho__icon" aria-hidden="true">
                {card.icon}
              </div>

              <h3 id={card.id} className="forwho__card-title">
                {card.title}
              </h3>
              <p className="forwho__card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
