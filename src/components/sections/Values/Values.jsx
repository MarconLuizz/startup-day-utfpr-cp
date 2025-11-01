import React from "react";
import "./Values.css";
import { FaRegLightbulb, FaRegStar } from "react-icons/fa";
import { IoIosSettings, IoIosGitNetwork } from "react-icons/io";
import { GiTechnoHeart } from "react-icons/gi";

export default function Values() {
  const top = [
    {
      id: "v1",
      title: "Inovação",
      desc: "Busca constante por novas ideias e soluções.",
      icon: <FaRegLightbulb size={36} color="#ffffffff" />,
    },
    {
      id: "v2",
      title: "Empreendedorismo",
      desc: "Transformar ideias em ação e criar novos negócios.",
      icon: <IoIosSettings size={36} color="#ffffffff" />,
    },
    {
      id: "v3",
      title: "Networking",
      desc: "Conexões de alto valor entre pessoas e projetos.",
      icon: <IoIosGitNetwork size={36} color="#ffffffff" />,
    },
  ];

  const bottom = [
    {
      id: "v4",
      title: "Tecnologia",
      desc: "Tecnologia para resolver problemas e gerar valor",
      icon: <GiTechnoHeart size={36} color="#ffffffff" />,
    },
    {
      id: "v5",
      title: "Inspiração",
      desc: "Motivar a próxima geração de empreendedores.",
      icon: <FaRegStar size={36} color="#ffffffff" />,
    },
  ];

  const renderItem = (item) => (
    <div
      key={item.id}
      className="values__unit"
      role="listitem"
      aria-label={`${item.title}: ${item.desc}`}
    >
      <div className="values__icon" aria-hidden="true">
        {item.icon}
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
          {top.map(renderItem)}
        </div>

        <div
          className="values__grid values__grid--bottom"
          role="list"
          aria-label="Valores secundários"
        >
          {bottom.map(renderItem)}
        </div>
      </div>
    </section>
  );
}
