import React from "react";
import { Link } from "react-router-dom";
import "./StartupCard.css";

export default function StartupCard({ s }) {
  return (
    <article className="startup-card" aria-labelledby={`s-${s.id}-title`}>
      <div className="startup-thumb">
        <img
          src={s.logo}
          alt={`${s.name} logo`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/startups/placeholder.png";
          }}
        />
      </div>

      <div className="startup-body">
        <span className="startup-sector">{s.sector}</span>

        <h3 id={`s-${s.id}-title`} className="startup-name">
          {s.name}
        </h3>

        <p className="startup-slogan">{s.slogan}</p>

        <div className="startup-actions">
          <Link
            to={`/startups/${s.id}`}
            className="btn btn--primary"
            aria-label={`Ver mais sobre ${s.name}`}
          >
            Ver mais
          </Link>
        </div>
      </div>
    </article>
  );
}
