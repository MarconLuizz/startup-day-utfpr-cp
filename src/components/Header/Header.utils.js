export default function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.warn(`Elemento com id="${id}" não encontrado.`);
  }
}
