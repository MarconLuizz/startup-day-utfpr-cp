import React, { useEffect, useRef } from "react";
import "./Timeline.css";
import { timeline } from "./timelineData";

export default function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".timeline__item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="cronograma" className="section">
      <div className="container">
        <h3 className="section__title">Uma tarde imersiva para alçar voos</h3>
        <p className="section__subtitle">Programação completa do evento</p>

        <div ref={containerRef} className="timeline">
          {timeline.map((t, idx) => (
            <div
              key={idx}
              className="timeline__item"
              tabIndex="0"
              aria-label={`${t.time} — ${t.title}`}
            >
              <div className="timeline__time">{t.time}</div>
              <div className="timeline__body">
                <h4 className="timeline__title">{t.title}</h4>
                <p className="timeline__desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
