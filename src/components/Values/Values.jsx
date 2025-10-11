import React from "react";
import "./Values.css";

export default function Values() {
  const top = [
    {
      id: "v1",
      title: "Inovação",
      desc: "Busca constante por novas ideias e soluções.",
    },
    {
      id: "v2",
      title: "Empreendedorismo",
      desc: "Transformar ideias em ação e criar novos negócios.",
    },
    {
      id: "v3",
      title: "Networking",
      desc: "Conexões de alto valor entre pessoas e projetos.",
    },
  ];

  const bottom = [
    { id: "v4", title: "Tecnologia", desc: "Ferramenta para escalar impacto." },
    {
      id: "v5",
      title: "Inspiração",
      desc: "Motivar a próxima geração de empreendedores.",
    },
  ];

  const Icon = ({ index }) => {
    // simple varied SVGs by index, inheriting currentColor
    switch (index) {
      case 1:
        return (
          <svg
            viewBox="0 0 24 24"
            className="values__icon-svg"
            aria-hidden="true"
          >
            <path d="M12 2l2.5 5 5 .7-3.8 3.2L17 18l-5-2.6L7 18l1.3-6.1L4.5 9.1 9.5 8 12 2z" />
          </svg>
        );
      case 2:
        return (
          <svg
            viewBox="0 0 24 24"
            className="values__icon-svg"
            aria-hidden="true"
          >
            <path d="M12 2a7 7 0 017 7c0 4-7 11-7 11s-7-7-7-11a7 7 0 017-7z" />
          </svg>
        );
      case 3:
        return (
          <svg
            viewBox="0 0 24 24"
            className="values__icon-svg"
            aria-hidden="true"
          >
            <path d="M3 12h6l2-3 4 6 6-8" strokeWidth="0" />
          </svg>
        );
      case 4:
        return (
          <svg
            viewBox="0 0 24 24"
            className="values__icon-svg"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="16" height="12" rx="2" />
            <path d="M8 20h8" strokeWidth="0" />
          </svg>
        );
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            className="values__icon-svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
    }
  };

  const renderItem = (item, idx) => (
    <div
      key={item.id}
      className="values__unit"
      role="listitem"
      aria-label={`${item.title}: ${item.desc}`}
    >
      <div className="values__icon" aria-hidden="true">
        <Icon index={idx + 1} />
      </div>

      <h4 className="values__unit-title">{item.title}</h4>
      <p className="values__unit-desc">{item.desc}</p>
    </div>
  );

  return (
    <section id="values" className="values">
      <div className="container values__inner">
        <h2 className="values__heading">Nossos Valores</h2>

        <div
          className="values__grid values__grid--top"
          role="list"
          aria-label="Valores principais"
        >
          {top.map((v, i) => renderItem(v, i))}
        </div>

        <div
          className="values__grid values__grid--bottom"
          role="list"
          aria-label="Valores secundários"
        >
          {bottom.map((v, i) => renderItem(v, i + top.length))}
        </div>
      </div>
    </section>
  );
}
