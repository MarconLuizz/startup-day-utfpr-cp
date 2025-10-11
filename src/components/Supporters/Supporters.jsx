import React from "react";
import "./Supporters.css";
import { supporters } from "./supportersData";

export default function Supporters() {
  return (
    <section id="supporters" className="section">
      <div className="container">
        <h3 className="section__title">Apoiadores</h3>
        <div className="supporters__wrap">
          {supporters.map((s) => (
            <div key={s.id} className="supporters__item">
              <img src={s.logo} alt={s.name} className="supporters__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
