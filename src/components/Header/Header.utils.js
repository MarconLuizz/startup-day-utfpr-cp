// src/components/Header/Header.utils.js

// Função de scroll suave (export default para compatibilidade)
export default function scrollToId(id) {
  if (!id) return;
  // aceita tanto '#id' quanto 'id'
  const cleanId = id.replace?.("#", "") ?? id;
  const el = document.getElementById(cleanId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
