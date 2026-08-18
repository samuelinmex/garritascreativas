(() => {
  const WHATSAPP_NUMBER = ""; // Formato internacional, ejemplo México: 5219981234567

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    const message = link.dataset.message || "Hola, quiero conocer más sobre Garritas Creativas.";
    const base = WHATSAPP_NUMBER
      ? `https://wa.me/${WHATSAPP_NUMBER}`
      : "https://wa.me/";

    link.href = `${base}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  }
})();
