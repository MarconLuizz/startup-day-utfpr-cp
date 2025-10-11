import React from "react";
import "./Values.css";

const values = [
  {
    id: 1,
    title: "Inovação",
    desc: "Busca constante por novas ideias e soluções.",
  },
  { id: 2, title: "Empreendedorismo", desc: "Transformar ideias em ação." },
  {
    id: 3,
    title: "Networking",
    desc: "Conexões de alto valor entre pessoas e projetos.",
  },
  { id: 4, title: "Tecnologia", desc: "Ferramenta para escalar impacto." },
  {
    id: 5,
    title: "Inspiração",
    desc: "Motivar a próxima geração de empreendedores.",
  },
];

export default function Values() {
  return (
    <section id="values" className="section">
      <div className="container">
        <h3 className="section__title">Nossos Valores</h3>
        <div className="values">
          {values.map((v) => (
            <article
              key={v.id}
              className="values__card"
              aria-labelledby={`value-${v.id}`}
            >
              <h4 id={`value-${v.id}`} className="values__card-title">
                {v.title}
              </h4>
              <p className="values__card-desc">{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
