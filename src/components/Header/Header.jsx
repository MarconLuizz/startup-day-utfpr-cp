import React from "react";
import "./Header.css";
import scrollToId from "./Header.utils";
import logo from "../../assets/logo.png"; // ajuste conforme necessário

export default function Header() {
  const menu = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Local", href: "#info" },
    { label: "Cronograma", href: "#cronograma" },
  ];

  return (
    <header className="header-floating" role="banner">
      <div className="header-floating__inner container">
        <a
          href="#home"
          className="header-floating__brand"
          aria-label="Ir para o início"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
          }}
        >
          <img
            src={logo}
            alt="Logo Startup Day"
            className="header-floating__logo"
          />
        </a>

        <nav className="header-floating__nav" aria-label="Navegação principal">
          {menu.map((item) => (
            <button
              key={item.href}
              className="header-floating__link"
              onClick={() => scrollToId(item.href)}
            >
              {item.label}
            </button>
          ))}

          {/* Novo botão Contatos */}
          <button
            className="header-floating__link header-floating__link--cta"
            onClick={() => scrollToId("cta")}
          >
            Contatos
          </button>
        </nav>
      </div>
    </header>
  );
}
