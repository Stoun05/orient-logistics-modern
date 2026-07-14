(() => {
  const load = src => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  load("core.js")
    .then(() => load("config.js"))
    .then(() => load("phase2.js"))
    .then(() => load("phase3.js"))
    .catch(error => console.error("ORIENT UI load error:", error));
})();
