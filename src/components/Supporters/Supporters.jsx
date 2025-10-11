import React, { useRef, useEffect } from "react";
import "./Supporters.css";
import { supporters } from "./supportersData";

export default function Supporters() {
  const rowRef = useRef(null);

  // simple autoplay scroll
  useEffect(() => {
    const el = rowRef.current;
    let raf;
    let pos = 0;
    const speed = 0.35; // pixels per frame approx

    const loop = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="supporters" className="section">
      <div className="container">
        <h3 className="section__title">Apoiadores</h3>
        <div className="supporters__wrap" aria-hidden="false">
          <div className="supporters__row" ref={rowRef}>
            {/* duplicar elementos para loop contínuo */}
            {[...supporters, ...supporters].map((s) => (
              <div key={s.id + Math.random()} className="supporters__item">
                <img src={s.logo} alt={s.name} className="supporters__logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
