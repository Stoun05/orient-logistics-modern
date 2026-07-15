(() => {
  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  const loadStyle = href => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  };

  loadStyle("phase4.css");
  loadStyle("route-map.css");
  loadStyle("route-search.css");
  loadStyle("service-details.css");

  loadScript("config.js")
    .then(() => loadScript("core.js"))
    .then(() => loadScript("phase3.js"))
    .then(() => loadScript("seo.js"))
    .then(() => loadScript("route-map.js"))
    .then(() => loadScript("service-details.js"))
    .catch(error => console.error("ORIENT UI load error:", error));
})();
