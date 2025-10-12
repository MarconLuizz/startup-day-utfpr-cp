// src/components/Supporters/Supporters.jsx
import React from "react";
import "./Supporters.css";
import { supporters } from "./supportersData";

export default function Supporters() {
  return (
    <section id="supporters" className="section supporters-section">
      <div className="container">
        <h2 className="section__title">Apoiadores</h2>

        <div
          className="supporters__wrap"
          role="list"
          aria-label="Logos dos apoiadores"
        >
          {supporters.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="supporters__item"
              role="listitem"
              aria-label={`Visite o site de ${s.name}`}
            >
              <img
                src={s.logo}
                alt={s.name}
                className="supporters__logo"
                width={160}
                height={80}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
