import React, { useEffect, useRef } from "react";
import "./Timeline.css";
import { timeline } from "./TimelineData";

export default function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".timeline__item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h3 className="timeline-title">Uma tarde imersiva para alçar voos</h3>
        <p className="timeline-subtitle">Programação completa do evento</p>

        <div ref={containerRef} className="timeline">
          {timeline.map((t, idx) => (
            <div
              key={idx}
              className="timeline__item"
              tabIndex="0"
              aria-label={`${t.time} — ${t.title}`}
            >
              <div className="timeline__time">{t.time}</div>
              <div className="timeline__card">
                <h4 className="timeline__card-title">{t.title}</h4>
                <p className="timeline__card-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
