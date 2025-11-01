import React, { useState } from "react";
import "./FAQ.css";
import { faq } from "./faqData";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section id="faq" className="section">
      <div className="container">
        <h3 className="section__title">FAQ</h3>
        <div className="faq__list">
          {faq.map((item) => (
            <div key={item.id} className="faq__card">
              <button
                className="faq__question"
                aria-expanded={open === item.id}
                aria-controls={`faq-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span>{item.q}</span>
                <span className="faq__toggle">
                  {open === item.id ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-${item.id}`}
                className={`faq__answer ${open === item.id ? "is-open" : ""}`}
                role="region"
                aria-hidden={open !== item.id}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
