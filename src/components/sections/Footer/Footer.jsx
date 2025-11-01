import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>© 2025 Startup Day — UTFPR Cornélio Procópio</div>
        <div className="footer__links">
          <a href="#privacy">Política de privacidade</a>
          <a href="#terms">Termos</a>
        </div>
      </div>
    </footer>
  );
}
