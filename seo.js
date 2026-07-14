/* ORIENT Logistics — Phase 5 brand and SEO metadata */
(() => {
  "use strict";

  const siteUrl = "https://stoun05.github.io/orient-logistics-modern/";
  const imageUrl = `${siteUrl}social-preview.png`;
  const seoByLanguage = {
    tk: {
      title: "ORIENT Logistics — Halkara ýük daşamalary",
      description: "FTL/LTL, AOG/OBC, ADR, temperatura gözegçilikli we RFS ýük daşamalary üçin döwrebap logistika çözgütleri.",
      locale: "tk_TM"
    },
    ru: {
      title: "ORIENT Logistics — Международные грузоперевозки",
      description: "Современные решения для FTL/LTL, AOG/OBC, ADR, температурных грузов и Road Feeder Service.",
      locale: "ru_RU"
    },
    en: {
      title: "ORIENT Logistics — International Freight Solutions",
      description: "Modern logistics solutions for FTL/LTL, AOG/OBC, ADR, temperature-controlled cargo and Road Feeder Service.",
      locale: "en_US"
    },
    pl: {
      title: "ORIENT Logistics — Międzynarodowy transport drogowy",
      description: "Nowoczesne rozwiązania logistyczne dla FTL/LTL, AOG/OBC, ADR, transportu temperaturowego i RFS.",
      locale: "pl_PL"
    },
    de: {
      title: "ORIENT Logistics — Internationale Frachtlösungen",
      description: "Moderne Logistiklösungen für FTL/LTL, AOG/OBC, ADR, temperaturgeführte Fracht und RFS.",
      locale: "de_DE"
    },
    ka: {
      title: "ORIENT Logistics — საერთაშორისო სატვირთო გადაზიდვები",
      description: "თანამედროვე ლოგისტიკური გადაწყვეტილებები FTL/LTL, AOG/OBC, ADR, ტემპერატურული ტვირთისა და RFS-ისთვის.",
      locale: "ka_GE"
    },
    es: {
      title: "ORIENT Logistics — Transporte internacional de mercancías",
      description: "Soluciones logísticas para FTL/LTL, AOG/OBC, ADR, carga con temperatura controlada y RFS.",
      locale: "es_ES"
    },
    fr: {
      title: "ORIENT Logistics — Transport international de marchandises",
      description: "Solutions logistiques pour FTL/LTL, AOG/OBC, ADR, fret sous température contrôlée et RFS.",
      locale: "fr_FR"
    }
  };

  function upsertMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function upsertLink(rel, href, extra = {}) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
    Object.entries(extra).forEach(([key, value]) => link.setAttribute(key, value));
    return link;
  }

  function applySeo(language) {
    const code = seoByLanguage[language] ? language : "tk";
    const seo = seoByLanguage[code];
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#153f37" });
    upsertMeta('meta[name="application-name"]', { name: "application-name", content: "ORIENT Logistics" });
    upsertMeta('meta[name="apple-mobile-web-app-title"]', { name: "apple-mobile-web-app-title", content: "ORIENT Logistics" });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "ORIENT Logistics" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: siteUrl });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: "ORIENT Logistics international freight services" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: seo.locale });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    upsertLink("canonical", siteUrl);
    upsertLink("icon", "favicon.svg", { type: "image/svg+xml" });
    upsertLink("alternate icon", "favicon-32.png", { type: "image/png", sizes: "32x32" });
    upsertLink("apple-touch-icon", "apple-touch-icon.png", { sizes: "180x180" });
    upsertLink("manifest", "site.webmanifest");
  }

  if (!document.getElementById("orientStructuredData")) {
    const data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ORIENT Logistics",
      url: siteUrl,
      inLanguage: ["tk", "ru", "en", "pl", "de", "ka", "es", "fr"],
      description: seoByLanguage.tk.description
    };
    const script = document.createElement("script");
    script.id = "orientStructuredData";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  applySeo(document.documentElement.lang || "tk");
  new MutationObserver(() => applySeo(document.documentElement.lang || "tk"))
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
})();
