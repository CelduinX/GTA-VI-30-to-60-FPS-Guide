(() => {
  const supportedLanguages = new Set(["en", "de"]);
  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll("[data-set-language]")];
  const navLinks = [...document.querySelectorAll(".section-nav a")];
  const descriptions = {
    en: "A step-by-step guide to displaying 30 FPS console games more smoothly with a capture card, vicash and Lossless Scaling.",
    de: "Eine Schritt-für-Schritt-Anleitung für eine flüssigere Darstellung von 30-FPS-Konsolenspielen mit Capture Card, vicash und Lossless Scaling."
  };

  function applyLanguage(language, persist = true) {
    const nextLanguage = supportedLanguages.has(language) ? language : "en";
    root.lang = nextLanguage;
    root.dataset.language = nextLanguage;
    document.title = nextLanguage === "de"
      ? "GTA VI 30 auf 60 FPS Anleitung"
      : "GTA VI 30 to 60 FPS Guide";

    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = descriptions[nextLanguage];

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLanguage === nextLanguage));
    });

    if (persist) {
      try { localStorage.setItem("guide-language", nextLanguage); } catch (_) {}
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.setLanguage));
  });

  let initialLanguage = root.dataset.language || "en";
  try {
    const savedLanguage = localStorage.getItem("guide-language");
    if (supportedLanguages.has(savedLanguage)) initialLanguage = savedLanguage;
  } catch (_) {}
  applyLanguage(initialLanguage, false);

  if ("IntersectionObserver" in window) {
    const sections = [...document.querySelectorAll("#requirements, #capture-card, #vicash, #lossless-scaling")];
    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visibleEntry) return;

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${visibleEntry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] });

    sections.forEach((section) => observer.observe(section));
  }
})();
