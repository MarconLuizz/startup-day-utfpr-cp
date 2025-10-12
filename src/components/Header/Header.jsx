import React, { useState } from "react";
import "./Header.css";
import scrollToId from "./Header.utils";
import logo from "../../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { label: "Início", href: "home" },
    { label: "Sobre", href: "about" },
    { label: "Local", href: "info" },
    { label: "Cronograma", href: "timeline" },
  ];

  const handleScroll = (href) => {
    scrollToId(href);
    setMenuOpen(false); // fecha menu mobile ao clicar
  };

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

        {/* Nav desktop / mobile */}
        <nav
          className={`header-floating__nav ${
            menuOpen ? "header-floating__nav--open" : ""
          }`}
          aria-label="Navegação principal"
        >
          {menu.map((item) => (
            <button
              key={item.href}
              className="header-floating__link"
              onClick={() => handleScroll(item.href)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="header-floating__link header-floating__link--cta"
            onClick={() => handleScroll("cta")}
          >
            Contatos
          </button>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="header-floating__hamburger"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
