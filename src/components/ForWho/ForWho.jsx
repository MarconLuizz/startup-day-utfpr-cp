import React from "react";
import "./ForWho.css";
import { forWho } from "./forWhoData";

export default function ForWho() {
  return (
    <section id="forwho" className="section">
      <div className="container">
        <h3 className="section__title">Para quem é o evento?</h3>
        <p className="section__subtitle">
          O Startup Day foi pensado para todos que querem conhecer e fazer parte
          do ecossistema de inovação.
        </p>

        <div className="forwho__grid">
          {forWho.map((card) => (
            <article key={card.id} className="forwho__card">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="forwho__icon"
              />
              <h4 className="forwho__title">{card.title}</h4>
              <p className="forwho__desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
