import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import scrollToId from "./Header.utils";
import logo from "../../../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { label: "Início", href: "home" },
    { label: "Sobre", href: "about" },
    { label: "Local", href: "info" },
    { label: "Cronograma", href: "timeline" },
    { label: "Palestrantes", href: "speakers" },
  ];

  const handleScroll = (href) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(href), 100);
    } else {
      scrollToId(href);
    }
    setMenuOpen(false);
  };

  return (
    <header className="header-floating">
      <div className="header-floating__inner container">
        <a
          href="/"
          className="header-floating__brand"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            scrollToId("home");
          }}
        >
          <img
            src={logo}
            alt="Logo Startup Day"
            className="header-floating__logo"
          />
        </a>

        <nav
          className={`header-floating__nav ${
            menuOpen ? "header-floating__nav--open" : ""
          }`}
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
            className="header-floating__link"
            onClick={() => {
              navigate("/startups");
              setMenuOpen(false);
            }}
          >
            Startups
          </button>

          <button
            className="header-floating__link header-floating__link--cta"
            onClick={() => handleScroll("cta")}
          >
            Contatos
          </button>
        </nav>

        <button
          className="header-floating__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
