(() => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const languageToggle = document.getElementById("languageToggle");
  const year = document.getElementById("year");
  let language = "en";

  year.textContent = new Date().getFullYear();

  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.textContent = open ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });

  languageToggle.addEventListener("click", () => {
    language = language === "en" ? "hi" : "en";
    document.documentElement.lang = language;
    document.body.classList.toggle("lang-hi", language === "hi");
    document.querySelectorAll("[data-en][data-hi]").forEach(element => {
      element.textContent = element.dataset[language];
    });
    languageToggle.textContent = language === "en" ? "हिंदी" : "English";
  });
})();