/* ORIENT Logistics — Phase 6 interactive route map calculator */
(() => {
  "use strict";

  const quoteLayout = document.querySelector("#quote .quote-layout");
  const quoteForm = document.getElementById("quoteForm");
  const distanceInput = document.getElementById("distance");
  const textInputs = quoteForm ? quoteForm.querySelectorAll("input[type='text']") : [];
  const fromInput = textInputs[0];
  const toInput = textInputs[1];

  if (!quoteLayout || !quoteForm || !distanceInput || !fromInput || !toInput) return;

  const dictionary = {
    tk: {
      title: "Marşruty kartadan saýlaň",
      intro: "Başlangyç we gowşuryş nokatlaryny kartada belläň. Aralyk hem-de takmynan baha awtomatik täzelener.",
      start: "1. Başlangyç nokat",
      end: "2. Gowşuryş nokady",
      swap: "Ýerlerini çalyş",
      reset: "Täzeden başla",
      presets: "Taýýar marşrutlar",
      from: "Başlangyç",
      to: "Gowşuryş",
      distance: "Takmynan ýol aralygy",
      clickStart: "Kartada ýüklenilýän ýeri saýlaň",
      clickEnd: "Indi gowşuryş ýerini saýlaň",
      ready: "Marşrut taýýar — baha awtomatik hasaplandy",
      loading: "Karta ýüklenýär…",
      unavailable: "Karta ýüklenmedi. Aralygy el bilen girizip bilersiňiz.",
      approx: "Bu demo ýol aralygyny geografik aralykdan takmynan hasaplaýar. Takyk baha logist tarapyndan tassyklanýar."
    },
    ru: {
      title: "Выберите маршрут на карте",
      intro: "Отметьте точки загрузки и доставки. Расстояние и ориентировочная цена обновятся автоматически.",
      start: "1. Точка загрузки",
      end: "2. Точка доставки",
      swap: "Поменять местами",
      reset: "Сбросить",
      presets: "Готовые маршруты",
      from: "Откуда",
      to: "Куда",
      distance: "Ориентировочное расстояние",
      clickStart: "Выберите на карте место загрузки",
      clickEnd: "Теперь выберите место доставки",
      ready: "Маршрут готов — стоимость пересчитана",
      loading: "Загрузка карты…",
      unavailable: "Карта не загрузилась. Расстояние можно ввести вручную.",
      approx: "Демо рассчитывает дорожное расстояние приблизительно по географической дистанции. Итог подтверждает логист."
    },
    en: {
      title: "Choose the route on the map",
      intro: "Mark the pickup and delivery points. Distance and the estimated price update automatically.",
      start: "1. Pickup point",
      end: "2. Delivery point",
      swap: "Swap points",
      reset: "Reset route",
      presets: "Ready routes",
      from: "From",
      to: "To",
      distance: "Estimated road distance",
      clickStart: "Choose the pickup point on the map",
      clickEnd: "Now choose the delivery point",
      ready: "Route ready — the price was recalculated",
      loading: "Loading map…",
      unavailable: "The map could not load. You can enter distance manually.",
      approx: "This demo estimates road distance from geographic distance. A logistician confirms the final quote."
    },
    pl: {
      title: "Wybierz trasę na mapie",
      intro: "Zaznacz punkt załadunku i dostawy. Odległość oraz szacunkowa cena zaktualizują się automatycznie.",
      start: "1. Punkt załadunku",
      end: "2. Punkt dostawy",
      swap: "Zamień punkty",
      reset: "Zresetuj trasę",
      presets: "Gotowe trasy",
      from: "Skąd",
      to: "Dokąd",
      distance: "Szacowana odległość drogowa",
      clickStart: "Wybierz miejsce załadunku na mapie",
      clickEnd: "Teraz wybierz miejsce dostawy",
      ready: "Trasa gotowa — cena została przeliczona",
      loading: "Ładowanie mapy…",
      unavailable: "Mapa nie została załadowana. Odległość można wpisać ręcznie.",
      approx: "Wersja demo szacuje odległość drogową na podstawie odległości geograficznej. Ostateczną cenę potwierdza logistyk."
    },
    de: {
      title: "Route auf der Karte auswählen",
      intro: "Markieren Sie Abhol- und Lieferpunkt. Entfernung und Richtpreis werden automatisch aktualisiert.",
      start: "1. Abholpunkt",
      end: "2. Lieferpunkt",
      swap: "Punkte tauschen",
      reset: "Route zurücksetzen",
      presets: "Vordefinierte Routen",
      from: "Von",
      to: "Nach",
      distance: "Geschätzte Straßenentfernung",
      clickStart: "Wählen Sie den Abholpunkt auf der Karte",
      clickEnd: "Wählen Sie jetzt den Lieferpunkt",
      ready: "Route fertig — der Preis wurde neu berechnet",
      loading: "Karte wird geladen…",
      unavailable: "Die Karte konnte nicht geladen werden. Die Entfernung kann manuell eingegeben werden.",
      approx: "Die Demo schätzt die Straßenentfernung anhand der Luftlinie. Das endgültige Angebot bestätigt ein Logistiker."
    },
    ka: {
      title: "აირჩიეთ მარშრუტი რუკაზე",
      intro: "მონიშნეთ დატვირთვისა და მიწოდების წერტილები. მანძილი და სავარაუდო ფასი ავტომატურად განახლდება.",
      start: "1. დატვირთვის წერტილი",
      end: "2. მიწოდების წერტილი",
      swap: "წერტილების შეცვლა",
      reset: "მარშრუტის განულება",
      presets: "მზა მარშრუტები",
      from: "საიდან",
      to: "სად",
      distance: "სავარაუდო საგზაო მანძილი",
      clickStart: "აირჩიეთ დატვირთვის ადგილი რუკაზე",
      clickEnd: "ახლა აირჩიეთ მიწოდების ადგილი",
      ready: "მარშრუტი მზადაა — ფასი განახლდა",
      loading: "რუკა იტვირთება…",
      unavailable: "რუკა ვერ ჩაიტვირთა. მანძილი ხელით შეიყვანეთ.",
      approx: "დემო საგზაო მანძილს გეოგრაფიული მანძილის მიხედვით დაახლოებით ითვლის. საბოლოო ფასს ლოგისტი ადასტურებს."
    },
    es: {
      title: "Seleccione la ruta en el mapa",
      intro: "Marque los puntos de recogida y entrega. La distancia y el precio estimado se actualizarán automáticamente.",
      start: "1. Punto de recogida",
      end: "2. Punto de entrega",
      swap: "Intercambiar puntos",
      reset: "Restablecer ruta",
      presets: "Rutas preparadas",
      from: "Origen",
      to: "Destino",
      distance: "Distancia estimada por carretera",
      clickStart: "Seleccione el punto de recogida en el mapa",
      clickEnd: "Ahora seleccione el punto de entrega",
      ready: "Ruta lista — el precio se recalculó",
      loading: "Cargando mapa…",
      unavailable: "No se pudo cargar el mapa. Puede introducir la distancia manualmente.",
      approx: "La demo estima la distancia por carretera a partir de la distancia geográfica. Un responsable logístico confirma el precio final."
    },
    fr: {
      title: "Choisissez l’itinéraire sur la carte",
      intro: "Indiquez les points d’enlèvement et de livraison. La distance et le prix estimé seront mis à jour automatiquement.",
      start: "1. Point d’enlèvement",
      end: "2. Point de livraison",
      swap: "Inverser les points",
      reset: "Réinitialiser",
      presets: "Itinéraires prêts",
      from: "Départ",
      to: "Arrivée",
      distance: "Distance routière estimée",
      clickStart: "Choisissez le point d’enlèvement sur la carte",
      clickEnd: "Choisissez maintenant le point de livraison",
      ready: "Itinéraire prêt — le prix a été recalculé",
      loading: "Chargement de la carte…",
      unavailable: "La carte n’a pas pu être chargée. Vous pouvez saisir la distance manuellement.",
      approx: "La démo estime la distance routière à partir de la distance géographique. Le devis final est confirmé par un logisticien."
    }
  };

  const cities = {
    warszawa: { name: "Warszawa", coords: [52.2297, 21.0122] },
    berlin: { name: "Berlin", coords: [52.52, 13.405] },
    paris: { name: "Paris", coords: [48.8566, 2.3522] },
    madrid: { name: "Madrid", coords: [40.4168, -3.7038] },
    istanbul: { name: "Istanbul", coords: [41.0082, 28.9784] },
    tbilisi: { name: "Tbilisi", coords: [41.7151, 44.8271] },
    baku: { name: "Baku", coords: [40.4093, 49.8671] },
    ashgabat: { name: "Aşgabat", coords: [37.9601, 58.3261] },
    tashkent: { name: "Tashkent", coords: [41.2995, 69.2401] },
    almaty: { name: "Almaty", coords: [43.2389, 76.8897] }
  };

  const presets = [
    ["warszawa", "ashgabat"],
    ["berlin", "tbilisi"],
    ["paris", "madrid"],
    ["istanbul", "almaty"]
  ];

  const panel = document.createElement("section");
  panel.className = "route-map-card";
  panel.setAttribute("aria-labelledby", "routeMapTitle");
  panel.innerHTML = `
    <div class="route-map-head">
      <div>
        <span class="route-map-kicker">ROUTE MAP</span>
        <h3 id="routeMapTitle" data-route-i18n="title"></h3>
        <p data-route-i18n="intro"></p>
      </div>
      <div class="route-map-actions">
        <button class="route-tool active" type="button" data-mode="start" data-route-i18n="start"></button>
        <button class="route-tool" type="button" data-mode="end" data-route-i18n="end"></button>
        <button class="route-tool secondary" type="button" id="routeSwap" data-route-i18n="swap"></button>
        <button class="route-tool secondary" type="button" id="routeReset" data-route-i18n="reset"></button>
      </div>
    </div>
    <div class="route-map-shell">
      <div id="routeMap" class="route-map" aria-label="Interactive logistics route map">
        <div class="route-map-loading" data-route-i18n="loading"></div>
      </div>
      <div class="route-map-status" id="routeMapStatus" aria-live="polite"></div>
    </div>
    <div class="route-presets">
      <strong data-route-i18n="presets"></strong>
      <div class="route-preset-list">
        ${presets.map(([a, b]) => `<button type="button" data-route-preset="${a}:${b}">${cities[a].name} → ${cities[b].name}</button>`).join("")}
      </div>
    </div>
    <div class="route-summary">
      <div><span data-route-i18n="from"></span><strong id="routeFromValue">Warszawa</strong></div>
      <div class="route-summary-arrow" aria-hidden="true">→</div>
      <div><span data-route-i18n="to"></span><strong id="routeToValue">Aşgabat</strong></div>
      <div class="route-summary-distance"><span data-route-i18n="distance"></span><strong id="routeDistanceValue">—</strong></div>
    </div>
    <p class="route-map-note" data-route-i18n="approx"></p>`;

  quoteLayout.insertBefore(panel, quoteForm);

  let map;
  let routeLine;
  let startMarker;
  let endMarker;
  let selectionMode = "start";
  let startPoint = { ...cities.warszawa, coords: [...cities.warszawa.coords] };
  let endPoint = { ...cities.ashgabat, coords: [...cities.ashgabat.coords] };

  const status = panel.querySelector("#routeMapStatus");
  const startButton = panel.querySelector("[data-mode='start']");
  const endButton = panel.querySelector("[data-mode='end']");
  const fromValue = panel.querySelector("#routeFromValue");
  const toValue = panel.querySelector("#routeToValue");
  const distanceValue = panel.querySelector("#routeDistanceValue");

  const currentLanguage = () => dictionary[document.documentElement.lang] ? document.documentElement.lang : "tk";
  const t = key => dictionary[currentLanguage()][key] || dictionary.tk[key] || key;

  function applyTranslations() {
    panel.querySelectorAll("[data-route-i18n]").forEach(element => {
      const key = element.dataset.routeI18n;
      if (t(key)) element.textContent = t(key);
    });
    updateStatus(startPoint && endPoint ? "ready" : selectionMode === "start" ? "clickStart" : "clickEnd");
  }

  function updateStatus(key) {
    status.textContent = t(key);
  }

  function setMode(mode) {
    selectionMode = mode;
    startButton.classList.toggle("active", mode === "start");
    endButton.classList.toggle("active", mode === "end");
    updateStatus(mode === "start" ? "clickStart" : "clickEnd");
  }

  function haversineKm(a, b) {
    const toRad = degree => degree * Math.PI / 180;
    const earthRadius = 6371;
    const dLat = toRad(b[0] - a[0]);
    const dLng = toRad(b[1] - a[1]);
    const lat1 = toRad(a[0]);
    const lat2 = toRad(b[0]);
    const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return earthRadius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
  }

  function estimatedRoadKm(a, b) {
    const direct = haversineKm(a, b);
    const factor = direct < 500 ? 1.18 : direct < 1500 ? 1.22 : 1.28;
    return Math.max(1, Math.round(direct * factor));
  }

  function nearestCity(coords) {
    let best;
    let bestDistance = Infinity;
    Object.values(cities).forEach(city => {
      const distance = haversineKm(coords, city.coords);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = city;
      }
    });
    if (best && bestDistance < 80) return { name: best.name, coords: [...coords] };
    return { name: `${coords[0].toFixed(3)}, ${coords[1].toFixed(3)}`, coords: [...coords] };
  }

  function markerIcon(letter, tone) {
    return window.L.divIcon({
      className: "route-marker-wrap",
      html: `<span class="route-marker ${tone}">${letter}</span>`,
      iconSize: [38, 46],
      iconAnchor: [19, 43]
    });
  }

  function renderRoute({ fit = true, recalculate = true } = {}) {
    if (!map || !window.L || !startPoint || !endPoint) return;

    if (startMarker) startMarker.remove();
    if (endMarker) endMarker.remove();
    if (routeLine) routeLine.remove();

    startMarker = window.L.marker(startPoint.coords, { icon: markerIcon("A", "start") }).addTo(map);
    endMarker = window.L.marker(endPoint.coords, { icon: markerIcon("B", "end") }).addTo(map);
    routeLine = window.L.polyline([startPoint.coords, endPoint.coords], {
      color: "#ff9d54",
      weight: 5,
      opacity: 0.92,
      dashArray: "12 10",
      lineCap: "round"
    }).addTo(map);

    const distance = estimatedRoadKm(startPoint.coords, endPoint.coords);
    fromValue.textContent = startPoint.name;
    toValue.textContent = endPoint.name;
    distanceValue.textContent = `${distance.toLocaleString("en-US")} km`;
    fromInput.value = startPoint.name;
    toInput.value = endPoint.name;
    distanceInput.value = String(distance);
    distanceInput.dispatchEvent(new Event("input", { bubbles: true }));

    if (fit) map.fitBounds(window.L.latLngBounds([startPoint.coords, endPoint.coords]), { padding: [46, 46] });
    if (recalculate) quoteForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    updateStatus("ready");
  }

  function setPreset(startKey, endKey) {
    startPoint = { name: cities[startKey].name, coords: [...cities[startKey].coords] };
    endPoint = { name: cities[endKey].name, coords: [...cities[endKey].coords] };
    renderRoute();
  }

  function loadLeaflet() {
    if (window.L) return Promise.resolve();

    if (!document.querySelector("link[data-orient-leaflet]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      link.dataset.orientLeaflet = "true";
      document.head.appendChild(link);
    }

    return new Promise((resolve, reject) => {
      const existing = document.querySelector("script[data-orient-leaflet]");
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.dataset.orientLeaflet = "true";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function initializeMap() {
    map = window.L.map("routeMap", {
      zoomControl: true,
      scrollWheelZoom: false,
      minZoom: 2,
      worldCopyJump: true
    }).setView([45.5, 39], 4);

    window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on("click", event => {
      const point = nearestCity([event.latlng.lat, event.latlng.lng]);
      if (selectionMode === "start") {
        startPoint = point;
        setMode("end");
      } else {
        endPoint = point;
        setMode("start");
      }
      renderRoute();
    });

    renderRoute({ fit: true, recalculate: true });
    setTimeout(() => map.invalidateSize(), 120);
  }

  panel.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  panel.querySelector("#routeSwap").addEventListener("click", () => {
    [startPoint, endPoint] = [endPoint, startPoint];
    renderRoute();
  });

  panel.querySelector("#routeReset").addEventListener("click", () => {
    setPreset("warszawa", "ashgabat");
    setMode("start");
  });

  panel.querySelectorAll("[data-route-preset]").forEach(button => {
    button.addEventListener("click", () => {
      const [startKey, endKey] = button.dataset.routePreset.split(":");
      setPreset(startKey, endKey);
    });
  });

  applyTranslations();
  new MutationObserver(applyTranslations)
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  loadLeaflet()
    .then(initializeMap)
    .catch(() => {
      panel.classList.add("map-unavailable");
      panel.querySelector(".route-map-loading").textContent = t("unavailable");
      updateStatus("unavailable");
    });
})();
