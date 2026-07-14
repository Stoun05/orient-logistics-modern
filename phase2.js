/* ORIENT Logistics — Phase 2 UI and interaction improvements */
(() => {
  "use strict";

function buildPhase2Markup() {
    if (!document.querySelector('meta[name="theme-color"]')) {
      document.head.insertAdjacentHTML("beforeend", '<meta name="theme-color" content="#153f37">');
    }
    if (!document.querySelector('link[href="phase2.css"]')) {
      document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="phase2.css">');
    }
  
    if (!document.querySelector(".skip-link")) {
      document.body.insertAdjacentHTML("afterbegin", '<a class="skip-link" href="#mainContent" data-i18n="skip_content">Esasy mazmuna geç</a>');
    }
  
    const header = document.querySelector(".header");
    const nav = document.getElementById("mainNav");
    const menuButton = document.getElementById("menuBtn");
    const main = document.querySelector("main");
    if (main) main.id = "mainContent";
    if (nav) {
      nav.setAttribute("aria-label", "Esasy menýu");
      if (!nav.querySelector(".mobile-nav-footer")) {
        nav.insertAdjacentHTML("beforeend", `
          <div class="mobile-nav-footer">
            <div class="language-switch" aria-label="Dil saýlamak">
              <button class="lang active" type="button" data-lang="tk">TK</button>
              <button class="lang" type="button" data-lang="ru">RU</button>
              <button class="lang" type="button" data-lang="en">EN</button>
            </div>
            <a class="btn btn-primary" href="#quote" data-i18n="nav_quote">Bahany hasapla</a>
          </div>`);
      }
    }
    if (menuButton) menuButton.setAttribute("aria-controls", "mainNav");
    if (header && !document.getElementById("navBackdrop")) {
      header.insertAdjacentHTML("afterend", '<button class="nav-backdrop" id="navBackdrop" type="button" aria-label="Menýuny ýap"></button>');
    }
  
    const heroCopy = document.querySelector(".hero-copy");
    if (heroCopy && !heroCopy.querySelector(".hero-status")) {
      heroCopy.insertAdjacentHTML("afterbegin", '<div class="hero-status"><span class="status-dot"></span><span data-i18n="hero_status">Täze sargytlar 24/7 kabul edilýär</span></div>');
    }
    const trustStats = document.querySelectorAll(".trust-row strong");
    ["supportStat", "countriesStat", "onTimeStat"].forEach((key, index) => trustStats[index]?.setAttribute("data-config-text", key));
  
    const heroVisual = document.querySelector(".hero-visual");
    if (heroVisual) {
      heroVisual.id = "heroVisual";
      if (!heroVisual.querySelector(".hero-orbit")) {
        heroVisual.insertAdjacentHTML("afterbegin", '<div class="hero-orbit orbit-one" aria-hidden="true"></div><div class="hero-orbit orbit-two" aria-hidden="true"></div>');
      }
    }
    const routeCard = document.querySelector(".route-card");
    routeCard?.querySelector("strong")?.setAttribute("data-config-text", "routeLabel");
    routeCard?.querySelector("b")?.setAttribute("data-config-text", "routeEta");
    const visualPanel = document.querySelector(".visual-panel");
    if (visualPanel && !visualPanel.querySelector(".route-progress")) {
      visualPanel.querySelector(".truck-illustration")?.insertAdjacentHTML("beforebegin", '<div class="route-progress" aria-hidden="true"><span></span></div>');
    }
  
    const topbarLinks = document.querySelectorAll(".topbar-links a");
    if (topbarLinks[0]) { topbarLinks[0].dataset.configHref = "phone"; topbarLinks[0].dataset.configText = "phone"; }
    if (topbarLinks[1]) { topbarLinks[1].dataset.configHref = "email"; topbarLinks[1].dataset.configText = "email"; }
  
    const trackingInput = document.getElementById("trackingCode");
    trackingInput?.setAttribute("aria-label", "Tracking kody");
    document.querySelector(".shipment-head strong")?.setAttribute("data-config-text", "trackingDisplay");
    const routeParts = document.querySelectorAll(".shipment-route > *");
    if (routeParts[0]) routeParts[0].setAttribute("data-config-text", "routeFrom");
    if (routeParts[1]) routeParts[1].setAttribute("data-config-text", "routeDistance");
    if (routeParts[2]) routeParts[2].setAttribute("data-config-text", "routeTo");
    document.querySelector(".experience-badge strong")?.setAttribute("data-config-text", "experienceStat");
  
    const quoteCard = document.getElementById("quoteForm");
    if (quoteCard && !document.getElementById("quoteBreakdown")) {
      quoteCard.insertAdjacentHTML("beforeend", `
        <div class="quote-breakdown" id="quoteBreakdown">
          <div><span data-i18n="breakdown_base">Esasy nyrh</span><strong id="baseCost">€0</strong></div>
          <div><span data-i18n="breakdown_cargo">Ýük görnüşi goşmaçasy</span><strong id="cargoCost">€0</strong></div>
          <div><span data-i18n="breakdown_urgency">Ekspress goşmaçasy</span><strong id="urgencyCost">€0</strong></div>
          <div class="total"><span data-i18n="breakdown_total">Jemi hasap</span><strong id="totalCost">€0</strong></div>
        </div>`);
    }
  
    const contact = document.getElementById("contact");
    if (contact && !document.getElementById("faq")) {
      contact.insertAdjacentHTML("beforebegin", `
        <section class="section faq-section" id="faq">
          <div class="container">
            <div class="section-heading split-heading">
              <div><span class="kicker" data-i18n="faq_kicker">Sorag-jogap</span><h2 data-i18n="faq_title">Iň köp soralýan soraglar</h2></div>
              <p data-i18n="faq_intro">Müşderiler tarapyndan ýygy-ýygydan soralýan esasy maglumatlary bir ýerde jemledik.</p>
            </div>
            <div class="faq-list">
              <article class="faq-item active"><button class="faq-question" type="button"><span data-i18n="faq_q1">Bahany näçe wagtda alaryn?</span><b>+</b></button><div class="faq-answer"><p data-i18n="faq_a1"></p></div></article>
              <article class="faq-item"><button class="faq-question" type="button"><span data-i18n="faq_q2">Ýüki nireden yzarlap bilerin?</span><b>+</b></button><div class="faq-answer"><p data-i18n="faq_a2"></p></div></article>
              <article class="faq-item"><button class="faq-question" type="button"><span data-i18n="faq_q3">ADR we temperatura ýükleri kabul edýärsiňizmi?</span><b>+</b></button><div class="faq-answer"><p data-i18n="faq_a3"></p></div></article>
              <article class="faq-item"><button class="faq-question" type="button"><span data-i18n="faq_q4">Bu saýty soňra backend bilen birikdirip bolarmy?</span><b>+</b></button><div class="faq-answer"><p data-i18n="faq_a4"></p></div></article>
            </div>
          </div>
        </section>`);
    }
  
    const footerColumns = document.querySelectorAll(".footer-grid > div");
    const footerContact = footerColumns[3];
    if (footerContact) {
      const phone = footerContact.querySelector('a[href^="tel:"]');
      const email = footerContact.querySelector('a[href^="mailto:"]');
      const location = footerContact.querySelector("span");
      if (phone) { phone.dataset.configHref = "phone"; phone.dataset.configText = "phone"; }
      if (email) { email.dataset.configHref = "email"; email.dataset.configText = "email"; }
      if (location) location.dataset.configText = "location";
    }
  
    if (!document.querySelector(".floating-call")) {
      document.body.insertAdjacentHTML("beforeend", '<a class="floating-call" data-config-href="phone" href="tel:+99300000000" aria-label="Jaň etmek"><span>☎</span></a><button class="back-to-top" id="backToTop" aria-label="Ýokary çyk">↑</button>');
    }
  }
  
  buildPhase2Markup();
  
  document.querySelectorAll(".mobile-nav-footer .lang").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));

  const extraTranslations = {
    tk: {
      skip_content: "Esasy mazmuna geç",
      hero_status: "Täze sargytlar 24/7 kabul edilýär",
      breakdown_base: "Esasy nyrh",
      breakdown_cargo: "Ýük görnüşi goşmaçasy",
      breakdown_urgency: "Ekspress goşmaçasy",
      breakdown_total: "Jemi hasap",
      faq_kicker: "Sorag-jogap",
      faq_title: "Iň köp soralýan soraglar",
      faq_intro: "Müşderiler tarapyndan ýygy-ýygydan soralýan esasy maglumatlary bir ýerde jemledik.",
      faq_q1: "Bahany näçe wagtda alaryn?",
      faq_a1: "Adaty ugurlar boýunça täjirçilik teklibini köplenç 15–30 minutyň içinde taýýarlap bilýäris. Çylşyrymly marşrutlar üçin wagt biraz uzalyp biler.",
      faq_q2: "Ýüki nireden yzarlap bilerin?",
      faq_a2: "Häzirki demo görnüşde tracking bölümi baş sahypada ýerleşýär. Soň aýratyn müşderi kabineti ýa-da tracking API birikdirilip bilner.",
      faq_q3: "ADR we temperatura ýükleri kabul edýärsiňizmi?",
      faq_a3: "Hawa. ADR, temperatura gözegçilikli daşamalar we gyssagly AOG / OBC hyzmatlary üçin aýratyn çözgütler görkezilýär.",
      faq_q4: "Bu saýty soňra backend bilen birikdirip bolarmy?",
      faq_a4: "Elbetde. Aragatnaşyk formasy, baha soragy we tracking bölümleri soň API, e-mail hyzmaty ýa-da CRM bilen birikdirilip bilner."
    },
    ru: {
      skip_content: "Перейти к основному содержанию",
      hero_status: "Новые заявки принимаются 24/7",
      breakdown_base: "Базовая ставка",
      breakdown_cargo: "Надбавка за тип груза",
      breakdown_urgency: "Надбавка за срочность",
      breakdown_total: "Итого",
      faq_kicker: "Вопросы и ответы",
      faq_title: "Часто задаваемые вопросы",
      faq_intro: "Собрали основную информацию, которую чаще всего уточняют клиенты.",
      faq_q1: "Как быстро я получу расчёт?",
      faq_a1: "По стандартным направлениям предложение обычно готово за 15–30 минут. Для сложных маршрутов может потребоваться больше времени.",
      faq_q2: "Где можно отслеживать груз?",
      faq_a2: "В демо-версии блок отслеживания находится на главной странице. Позже можно подключить личный кабинет или tracking API.",
      faq_q3: "Вы перевозите ADR и температурные грузы?",
      faq_a3: "Да. Предусмотрены отдельные решения для ADR, температурных перевозок и срочных AOG / OBC задач.",
      faq_q4: "Можно ли подключить backend позже?",
      faq_a4: "Да. Форму, калькулятор и отслеживание можно подключить к API, почте или CRM."
    },
    en: {
      skip_content: "Skip to main content",
      hero_status: "New requests accepted 24/7",
      breakdown_base: "Base rate",
      breakdown_cargo: "Cargo surcharge",
      breakdown_urgency: "Urgency surcharge",
      breakdown_total: "Total",
      faq_kicker: "FAQ",
      faq_title: "Frequently asked questions",
      faq_intro: "Key information clients most often ask about, collected in one place.",
      faq_q1: "How quickly will I receive a quote?",
      faq_a1: "Standard lanes are usually quoted within 15–30 minutes. Complex routes may take a little longer.",
      faq_q2: "Where can I track my shipment?",
      faq_a2: "The demo tracking block is on the homepage. A client portal or tracking API can be connected later.",
      faq_q3: "Do you handle ADR and temperature-controlled cargo?",
      faq_a3: "Yes. Dedicated solutions are shown for ADR, temperature-controlled transport and urgent AOG / OBC shipments.",
      faq_q4: "Can a backend be connected later?",
      faq_a4: "Yes. The form, calculator and tracking blocks can later connect to an API, email service or CRM."
    }
  };

  Object.keys(extraTranslations).forEach(lang => Object.assign(translations[lang], extraTranslations[lang]));
  applyLanguage(currentLang);

  const config = window.ORIENT_CONFIG || {};
  const route = config.route || {};
  const stats = config.stats || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const configValues = {
    phone: config.phone,
    email: config.email,
    location: config.location,
    routeLabel: route.from && route.to ? `${route.from} → ${route.to}` : undefined,
    routeEta: route.eta,
    routeFrom: route.from,
    routeTo: route.to,
    routeDistance: route.distanceKm ? `${Number(route.distanceKm).toLocaleString("en-US").replace(",", " ")} km` : undefined,
    trackingDisplay: config.trackingCode ? `#${config.trackingCode}` : undefined,
    supportStat: stats.support,
    countriesStat: stats.countries,
    onTimeStat: stats.onTime,
    experienceStat: stats.experience
  };

  document.querySelectorAll("[data-config-text]").forEach(element => {
    const value = configValues[element.dataset.configText];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-config-href='phone']").forEach(element => {
    if (config.phone) element.href = `tel:${config.phone.replace(/\s+/g, "")}`;
  });
  document.querySelectorAll("[data-config-href='email']").forEach(element => {
    if (config.email) element.href = `mailto:${config.email}`;
  });
  const trackingInput = document.getElementById("trackingCode");
  if (trackingInput && config.trackingCode) trackingInput.placeholder = config.trackingCode;

  const header = document.querySelector(".header");
  const menuButton = document.getElementById("menuBtn");
  const navigation = document.getElementById("mainNav");
  const backdrop = document.getElementById("navBackdrop");
  const backToTop = document.getElementById("backToTop");

  function syncMenu() {
    const open = navigation.classList.contains("open");
    menuButton.classList.toggle("active", open);
    backdrop.classList.toggle("visible", open);
    document.body.classList.toggle("nav-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  }
  menuButton.addEventListener("click", () => requestAnimationFrame(syncMenu));
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => requestAnimationFrame(syncMenu)));
  backdrop.addEventListener("click", () => {
    navigation.classList.remove("open");
    syncMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    navigation.classList.remove("open");
    syncMenu();
  });

  function handleScroll() {
    header.classList.toggle("scrolled", window.scrollY > 18);
    backToTop.classList.toggle("visible", window.scrollY > 650);
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  const sectionIds = ["services", "coverage", "tracking", "about", "contact"];
  const navLinks = [...navigation.querySelectorAll("a[href^='#']")];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });

  const euro = value => `€${Math.max(0, Math.round(value)).toLocaleString("en-US")}`;
  function calculateDetailedQuote() {
    const distance = Math.max(1, Number(document.getElementById("distance").value) || 1);
    const weight = Math.max(0.1, Number(document.getElementById("weight").value) || 0.1);
    const cargoMultiplier = Number(document.getElementById("cargoType").value) || 1;
    const urgencyMultiplier = Number(document.getElementById("urgency").value) || 1;
    const base = distance * 0.92 + weight * 35 + 320;
    const cargoExtra = base * (cargoMultiplier - 1);
    const subtotal = base + cargoExtra;
    const urgencyExtra = subtotal * (urgencyMultiplier - 1);
    const total = subtotal + urgencyExtra;
    const low = Math.round(total / 10) * 10;
    const high = Math.round(total * 1.11 / 10) * 10;

    document.querySelector("#priceResult strong").textContent = `${euro(low)} – ${euro(high)}`;
    document.getElementById("baseCost").textContent = euro(base);
    document.getElementById("cargoCost").textContent = euro(cargoExtra);
    document.getElementById("urgencyCost").textContent = euro(urgencyExtra);
    document.getElementById("totalCost").textContent = euro(total);
  }
  document.getElementById("quoteForm").addEventListener("submit", () => {
    calculateDetailedQuote();
    const result = document.getElementById("priceResult");
    result.classList.add("updated");
    setTimeout(() => result.classList.remove("updated"), 500);
  });
  ["distance", "weight", "cargoType", "urgency"].forEach(id => document.getElementById(id).addEventListener("input", calculateDetailedQuote));
  calculateDetailedQuote();

  document.getElementById("trackingForm").addEventListener("submit", () => {
    const code = document.getElementById("trackingCode").value.trim().toUpperCase();
    const validCode = String(config.trackingCode || "OL-2026-0715").toUpperCase();
    const timeline = document.getElementById("timelineCard");
    const message = document.getElementById("trackingMessage");
    const ok = code === validCode;
    message.classList.toggle("error", !ok);
    timeline.classList.toggle("tracking-success", ok);
    if (ok) setTimeout(() => timeline.classList.remove("tracking-success"), 1800);
  });

  document.querySelectorAll(".faq-item").forEach((item, index) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const answerId = `faq-answer-${index + 1}`;
    answer.id = answerId;
    button.setAttribute("aria-controls", answerId);
    button.setAttribute("aria-expanded", String(item.classList.contains("active")));
    button.addEventListener("click", () => {
      const open = !item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("active", open);
      button.setAttribute("aria-expanded", String(open));
    });
  });

  const revealTargets = document.querySelectorAll(".section-heading, .coverage-copy, .coverage-map, .tracking-copy, .quote-info, .faq-item, .cta-layout > *");
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(element => revealObserver.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add("is-visible"));
  }

  const heroVisual = document.getElementById("heroVisual");
  if (heroVisual && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    heroVisual.addEventListener("pointermove", event => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.setProperty("--parallax-x", `${x * 10}px`);
      heroVisual.style.setProperty("--parallax-y", `${y * 8}px`);
    });
    heroVisual.addEventListener("pointerleave", () => {
      heroVisual.style.setProperty("--parallax-x", "0px");
      heroVisual.style.setProperty("--parallax-y", "0px");
    });
  }
})();
