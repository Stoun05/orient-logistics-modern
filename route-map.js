/* ORIENT Logistics — Phase 7 city search and real road routing */
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
      title: "Marşruty kartadan ýa-da şäher boýunça saýlaň",
      intro: "Şäheri gözläň ýa-da kartada A we B nokatlaryny belläň. Hakyky awtoulag ýoly, aralyk we takmynan baha awtomatik täzelener.",
      start: "1. Başlangyç nokat",
      end: "2. Gowşuryş nokady",
      swap: "Ýerlerini çalyş",
      reset: "Täzeden başla",
      presets: "Taýýar marşrutlar",
      from: "Başlangyç",
      to: "Gowşuryş",
      distance: "Ýol aralygy",
      duration: "Takmynan ýol wagty",
      searchStart: "Ýüklenilýän şäheri gözle",
      searchEnd: "Gowşuryş şäherini gözle",
      searchPlaceholder: "Şäher, ýurt ýa-da salgy",
      searchButton: "Gözle",
      searchHint: "Gözleg diňe düwmä basylanda ýerine ýetirilýär.",
      searching: "Şäher gözlenýär…",
      noResults: "Netije tapylmady. Şäheriň we ýurduň adyny bile ýazyp görüň.",
      searchError: "Şäher gözlegi wagtlaýyn elýeterli däl.",
      chooseResult: "Saýla",
      clickStart: "Kartada ýüklenilýän ýeri saýlaň",
      clickEnd: "Indi gowşuryş ýerini saýlaň",
      routing: "Hakyky awtoulag ýoly hasaplanýar…",
      ready: "Hakyky marşrut taýýar — baha awtomatik hasaplandy",
      fallbackReady: "Hakyky ýol tapylmady — takmynan aralyk ulanyldy",
      loading: "Karta ýüklenýär…",
      unavailable: "Karta ýüklenmedi. Aralygy el bilen girizip bilersiňiz.",
      realNote: "Marşrut OpenStreetMap ýol maglumatlary boýunça hasaplandy. Takyk kommersiýa bahasy logist tarapyndan tassyklanýar.",
      fallbackNote: "Routing hyzmaty elýeterli bolmasa geografik aralykdan takmynan ýol aralygy ulanylýar.",
      hours: "sag",
      minutes: "min"
    },
    ru: {
      title: "Выберите маршрут на карте или найдите город",
      intro: "Найдите город или отметьте точки A и B. Реальный автомобильный маршрут, расстояние и ориентировочная цена обновятся автоматически.",
      start: "1. Точка загрузки",
      end: "2. Точка доставки",
      swap: "Поменять местами",
      reset: "Сбросить",
      presets: "Готовые маршруты",
      from: "Откуда",
      to: "Куда",
      distance: "Расстояние по дороге",
      duration: "Примерное время в пути",
      searchStart: "Найти город загрузки",
      searchEnd: "Найти город доставки",
      searchPlaceholder: "Город, страна или адрес",
      searchButton: "Найти",
      searchHint: "Поиск выполняется только после нажатия кнопки.",
      searching: "Поиск города…",
      noResults: "Ничего не найдено. Попробуйте указать город и страну.",
      searchError: "Поиск города временно недоступен.",
      chooseResult: "Выбрать",
      clickStart: "Выберите место загрузки на карте",
      clickEnd: "Теперь выберите место доставки",
      routing: "Строим реальный автомобильный маршрут…",
      ready: "Маршрут готов — стоимость пересчитана",
      fallbackReady: "Маршрут не найден — использована примерная дистанция",
      loading: "Загрузка карты…",
      unavailable: "Карта не загрузилась. Расстояние можно ввести вручную.",
      realNote: "Маршрут рассчитан по дорожным данным OpenStreetMap. Коммерческую цену подтверждает логист.",
      fallbackNote: "Если сервис маршрутизации недоступен, используется приблизительное расстояние.",
      hours: "ч",
      minutes: "мин"
    },
    en: {
      title: "Choose a route on the map or search for a city",
      intro: "Search for a city or mark points A and B. The real driving route, distance and estimated price update automatically.",
      start: "1. Pickup point",
      end: "2. Delivery point",
      swap: "Swap points",
      reset: "Reset route",
      presets: "Ready routes",
      from: "From",
      to: "To",
      distance: "Road distance",
      duration: "Estimated driving time",
      searchStart: "Search pickup city",
      searchEnd: "Search delivery city",
      searchPlaceholder: "City, country or address",
      searchButton: "Search",
      searchHint: "Search runs only after pressing the button.",
      searching: "Searching for the city…",
      noResults: "No result found. Try including the city and country.",
      searchError: "City search is temporarily unavailable.",
      chooseResult: "Choose",
      clickStart: "Choose the pickup point on the map",
      clickEnd: "Now choose the delivery point",
      routing: "Calculating the real driving route…",
      ready: "Route ready — the price was recalculated",
      fallbackReady: "No road route was found — estimated distance is being used",
      loading: "Loading map…",
      unavailable: "The map could not load. You can enter distance manually.",
      realNote: "The route uses OpenStreetMap road data. A logistician confirms the commercial quote.",
      fallbackNote: "If the routing service is unavailable, an estimated road distance is used.",
      hours: "h",
      minutes: "min"
    },
    pl: {
      title: "Wybierz trasę na mapie lub wyszukaj miasto",
      intro: "Wyszukaj miasto albo zaznacz punkty A i B. Rzeczywista trasa drogowa, odległość i cena zaktualizują się automatycznie.",
      start: "1. Punkt załadunku",
      end: "2. Punkt dostawy",
      swap: "Zamień punkty",
      reset: "Zresetuj trasę",
      presets: "Gotowe trasy",
      from: "Skąd",
      to: "Dokąd",
      distance: "Odległość drogowa",
      duration: "Szacowany czas jazdy",
      searchStart: "Szukaj miasta załadunku",
      searchEnd: "Szukaj miasta dostawy",
      searchPlaceholder: "Miasto, kraj lub adres",
      searchButton: "Szukaj",
      searchHint: "Wyszukiwanie uruchamia się dopiero po naciśnięciu przycisku.",
      searching: "Wyszukiwanie miasta…",
      noResults: "Brak wyników. Dodaj nazwę miasta i kraju.",
      searchError: "Wyszukiwanie miasta jest chwilowo niedostępne.",
      chooseResult: "Wybierz",
      clickStart: "Wybierz miejsce załadunku na mapie",
      clickEnd: "Teraz wybierz miejsce dostawy",
      routing: "Obliczanie rzeczywistej trasy drogowej…",
      ready: "Trasa gotowa — cena została przeliczona",
      fallbackReady: "Nie znaleziono trasy — użyto odległości szacunkowej",
      loading: "Ładowanie mapy…",
      unavailable: "Mapa nie została załadowana. Odległość można wpisać ręcznie.",
      realNote: "Trasa została obliczona na podstawie danych drogowych OpenStreetMap. Ofertę potwierdza logistyk.",
      fallbackNote: "Gdy usługa routingu jest niedostępna, używana jest odległość szacunkowa.",
      hours: "godz.",
      minutes: "min"
    },
    de: {
      title: "Route auf der Karte wählen oder Stadt suchen",
      intro: "Suchen Sie eine Stadt oder markieren Sie A und B. Reale Fahrstrecke, Entfernung und Richtpreis werden automatisch aktualisiert.",
      start: "1. Abholpunkt",
      end: "2. Lieferpunkt",
      swap: "Punkte tauschen",
      reset: "Route zurücksetzen",
      presets: "Vordefinierte Routen",
      from: "Von",
      to: "Nach",
      distance: "Straßenentfernung",
      duration: "Geschätzte Fahrzeit",
      searchStart: "Abholstadt suchen",
      searchEnd: "Lieferstadt suchen",
      searchPlaceholder: "Stadt, Land oder Adresse",
      searchButton: "Suchen",
      searchHint: "Die Suche startet erst nach dem Klick auf die Schaltfläche.",
      searching: "Stadt wird gesucht…",
      noResults: "Kein Ergebnis. Versuchen Sie Stadt und Land gemeinsam.",
      searchError: "Die Städtesuche ist vorübergehend nicht verfügbar.",
      chooseResult: "Auswählen",
      clickStart: "Wählen Sie den Abholpunkt auf der Karte",
      clickEnd: "Wählen Sie jetzt den Lieferpunkt",
      routing: "Reale Fahrroute wird berechnet…",
      ready: "Route fertig — der Preis wurde neu berechnet",
      fallbackReady: "Keine Straßenroute gefunden — Schätzwert wird verwendet",
      loading: "Karte wird geladen…",
      unavailable: "Die Karte konnte nicht geladen werden. Die Entfernung kann manuell eingegeben werden.",
      realNote: "Die Route basiert auf OpenStreetMap-Straßendaten. Das Angebot wird von einem Logistiker bestätigt.",
      fallbackNote: "Wenn der Routing-Dienst nicht verfügbar ist, wird eine geschätzte Entfernung verwendet.",
      hours: "Std.",
      minutes: "Min."
    },
    ka: {
      title: "აირჩიეთ მარშრუტი რუკაზე ან მოძებნეთ ქალაქი",
      intro: "მოძებნეთ ქალაქი ან მონიშნეთ A და B. რეალური საავტომობილო მარშრუტი, მანძილი და სავარაუდო ფასი ავტომატურად განახლდება.",
      start: "1. დატვირთვის წერტილი",
      end: "2. მიწოდების წერტილი",
      swap: "წერტილების შეცვლა",
      reset: "მარშრუტის განულება",
      presets: "მზა მარშრუტები",
      from: "საიდან",
      to: "სად",
      distance: "საგზაო მანძილი",
      duration: "სავარაუდო მგზავრობის დრო",
      searchStart: "დატვირთვის ქალაქის ძებნა",
      searchEnd: "მიწოდების ქალაქის ძებნა",
      searchPlaceholder: "ქალაქი, ქვეყანა ან მისამართი",
      searchButton: "ძებნა",
      searchHint: "ძებნა იწყება მხოლოდ ღილაკზე დაჭერის შემდეგ.",
      searching: "ქალაქის ძებნა…",
      noResults: "შედეგი ვერ მოიძებნა. მიუთითეთ ქალაქი და ქვეყანა.",
      searchError: "ქალაქის ძებნა დროებით მიუწვდომელია.",
      chooseResult: "არჩევა",
      clickStart: "აირჩიეთ დატვირთვის ადგილი რუკაზე",
      clickEnd: "ახლა აირჩიეთ მიწოდების ადგილი",
      routing: "რეალური საავტომობილო მარშრუტი ითვლება…",
      ready: "მარშრუტი მზადაა — ფასი განახლდა",
      fallbackReady: "გზა ვერ მოიძებნა — გამოყენებულია სავარაუდო მანძილი",
      loading: "რუკა იტვირთება…",
      unavailable: "რუკა ვერ ჩაიტვირთა. მანძილი ხელით შეიყვანეთ.",
      realNote: "მარშრუტი დათვლილია OpenStreetMap-ის საგზაო მონაცემებით. ფასს ლოგისტი ადასტურებს.",
      fallbackNote: "როუტინგის სერვისის მიუწვდომლობისას გამოიყენება სავარაუდო მანძილი.",
      hours: "სთ",
      minutes: "წთ"
    },
    es: {
      title: "Seleccione la ruta o busque una ciudad",
      intro: "Busque una ciudad o marque los puntos A y B. La ruta real por carretera, la distancia y el precio estimado se actualizarán automáticamente.",
      start: "1. Punto de recogida",
      end: "2. Punto de entrega",
      swap: "Intercambiar puntos",
      reset: "Restablecer ruta",
      presets: "Rutas preparadas",
      from: "Origen",
      to: "Destino",
      distance: "Distancia por carretera",
      duration: "Tiempo estimado de conducción",
      searchStart: "Buscar ciudad de recogida",
      searchEnd: "Buscar ciudad de entrega",
      searchPlaceholder: "Ciudad, país o dirección",
      searchButton: "Buscar",
      searchHint: "La búsqueda solo se ejecuta al pulsar el botón.",
      searching: "Buscando la ciudad…",
      noResults: "No se encontraron resultados. Incluya la ciudad y el país.",
      searchError: "La búsqueda de ciudades no está disponible temporalmente.",
      chooseResult: "Elegir",
      clickStart: "Seleccione el punto de recogida en el mapa",
      clickEnd: "Ahora seleccione el punto de entrega",
      routing: "Calculando la ruta real por carretera…",
      ready: "Ruta lista — el precio se recalculó",
      fallbackReady: "No se encontró ruta — se usa una distancia estimada",
      loading: "Cargando mapa…",
      unavailable: "No se pudo cargar el mapa. Puede introducir la distancia manualmente.",
      realNote: "La ruta usa datos viales de OpenStreetMap. Un responsable logístico confirma la oferta.",
      fallbackNote: "Si el servicio de rutas no está disponible, se usa una distancia estimada.",
      hours: "h",
      minutes: "min"
    },
    fr: {
      title: "Choisissez l’itinéraire ou recherchez une ville",
      intro: "Recherchez une ville ou placez les points A et B. L’itinéraire routier réel, la distance et le prix estimé seront mis à jour automatiquement.",
      start: "1. Point d’enlèvement",
      end: "2. Point de livraison",
      swap: "Inverser les points",
      reset: "Réinitialiser",
      presets: "Itinéraires prêts",
      from: "Départ",
      to: "Arrivée",
      distance: "Distance routière",
      duration: "Temps de conduite estimé",
      searchStart: "Rechercher la ville d’enlèvement",
      searchEnd: "Rechercher la ville de livraison",
      searchPlaceholder: "Ville, pays ou adresse",
      searchButton: "Rechercher",
      searchHint: "La recherche démarre uniquement après l’appui sur le bouton.",
      searching: "Recherche de la ville…",
      noResults: "Aucun résultat. Essayez avec la ville et le pays.",
      searchError: "La recherche de villes est temporairement indisponible.",
      chooseResult: "Choisir",
      clickStart: "Choisissez le point d’enlèvement sur la carte",
      clickEnd: "Choisissez maintenant le point de livraison",
      routing: "Calcul de l’itinéraire routier réel…",
      ready: "Itinéraire prêt — le prix a été recalculé",
      fallbackReady: "Aucun itinéraire trouvé — une distance estimée est utilisée",
      loading: "Chargement de la carte…",
      unavailable: "La carte n’a pas pu être chargée. Vous pouvez saisir la distance manuellement.",
      realNote: "L’itinéraire utilise les données routières OpenStreetMap. Le devis est confirmé par un logisticien.",
      fallbackNote: "Si le service de routage est indisponible, une distance estimée est utilisée.",
      hours: "h",
      minutes: "min"
    }
  };

  const cities = {
    warszawa: { name: "Warszawa", fullName: "Warszawa, Poland", coords: [52.2297, 21.0122] },
    berlin: { name: "Berlin", fullName: "Berlin, Germany", coords: [52.52, 13.405] },
    paris: { name: "Paris", fullName: "Paris, France", coords: [48.8566, 2.3522] },
    madrid: { name: "Madrid", fullName: "Madrid, Spain", coords: [40.4168, -3.7038] },
    istanbul: { name: "Istanbul", fullName: "Istanbul, Türkiye", coords: [41.0082, 28.9784] },
    tbilisi: { name: "Tbilisi", fullName: "Tbilisi, Georgia", coords: [41.7151, 44.8271] },
    baku: { name: "Baku", fullName: "Baku, Azerbaijan", coords: [40.4093, 49.8671] },
    ashgabat: { name: "Aşgabat", fullName: "Aşgabat, Türkmenistan", coords: [37.9601, 58.3261] },
    tashkent: { name: "Tashkent", fullName: "Tashkent, Uzbekistan", coords: [41.2995, 69.2401] },
    almaty: { name: "Almaty", fullName: "Almaty, Kazakhstan", coords: [43.2389, 76.8897] }
  };

  const presets = [
    ["warszawa", "ashgabat"],
    ["berlin", "tbilisi"],
    ["paris", "madrid"],
    ["istanbul", "almaty"]
  ];

  const serviceConfig = window.ORIENT_CONFIG?.mapServices || {};
  const services = {
    geocoderUrl: serviceConfig.geocoderUrl || "https://nominatim.openstreetmap.org/search",
    routerUrl: serviceConfig.routerUrl || "https://router.project-osrm.org/route/v1/driving",
    tileUrl: serviceConfig.tileUrl || "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: serviceConfig.attribution || '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    geocodeIntervalMs: Math.max(1000, Number(serviceConfig.geocodeIntervalMs) || 1100),
    cacheDays: Math.max(1, Number(serviceConfig.cacheDays) || 7)
  };

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
    <div class="route-search-grid">
      ${["start", "end"].map(mode => `
        <form class="route-search-box" data-search-mode="${mode}" novalidate>
          <label for="routeSearch-${mode}" data-route-i18n="${mode === "start" ? "searchStart" : "searchEnd"}"></label>
          <div class="route-search-row">
            <input id="routeSearch-${mode}" type="search" maxlength="120" autocomplete="off" spellcheck="false" data-route-i18n-placeholder="searchPlaceholder" />
            <button type="submit" data-route-i18n="searchButton"></button>
          </div>
          <small data-route-i18n="searchHint"></small>
          <div class="route-search-results" data-search-results="${mode}" aria-live="polite"></div>
        </form>`).join("")}
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
      <div class="route-summary-duration"><span data-route-i18n="duration"></span><strong id="routeDurationValue">—</strong></div>
    </div>
    <p class="route-map-note" id="routeMapNote" data-route-i18n="fallbackNote"></p>`;

  quoteLayout.insertBefore(panel, quoteForm);

  let map;
  let routeLine;
  let startMarker;
  let endMarker;
  let selectionMode = "start";
  let startPoint = clonePoint(cities.warszawa);
  let endPoint = clonePoint(cities.ashgabat);
  let routeController;
  let routeSequence = 0;
  let geocodeQueue = Promise.resolve();
  let lastGeocodeAt = 0;

  const status = panel.querySelector("#routeMapStatus");
  const note = panel.querySelector("#routeMapNote");
  const startButton = panel.querySelector("[data-mode='start']");
  const endButton = panel.querySelector("[data-mode='end']");
  const fromValue = panel.querySelector("#routeFromValue");
  const toValue = panel.querySelector("#routeToValue");
  const distanceValue = panel.querySelector("#routeDistanceValue");
  const durationValue = panel.querySelector("#routeDurationValue");
  const searchForms = Array.from(panel.querySelectorAll("[data-search-mode]"));

  const currentLanguage = () => dictionary[document.documentElement.lang] ? document.documentElement.lang : "tk";
  const t = key => dictionary[currentLanguage()][key] || dictionary.tk[key] || key;

  function clonePoint(point) {
    return { name: point.name, fullName: point.fullName || point.name, coords: [...point.coords] };
  }

  function applyTranslations() {
    panel.querySelectorAll("[data-route-i18n]").forEach(element => {
      const key = element.dataset.routeI18n;
      if (t(key)) element.textContent = t(key);
    });
    panel.querySelectorAll("[data-route-i18n-placeholder]").forEach(element => {
      element.placeholder = t(element.dataset.routeI18nPlaceholder);
    });
  }

  function updateStatus(key) {
    status.textContent = t(key);
    status.dataset.state = key;
  }

  function setNote(key) {
    note.textContent = t(key);
    note.dataset.state = key;
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
    if (best && bestDistance < 80) return { name: best.name, fullName: best.fullName, coords: [...coords] };
    const coordinates = `${coords[0].toFixed(3)}, ${coords[1].toFixed(3)}`;
    return { name: coordinates, fullName: coordinates, coords: [...coords] };
  }

  function markerIcon(letter, tone) {
    return window.L.divIcon({
      className: "route-marker-wrap",
      html: `<span class="route-marker ${tone}" aria-hidden="true">${letter}</span>`,
      iconSize: [38, 46],
      iconAnchor: [19, 43]
    });
  }

  function setSummary(distanceKm, durationSeconds, isRealRoute) {
    fromValue.textContent = startPoint.name;
    fromValue.title = startPoint.fullName;
    toValue.textContent = endPoint.name;
    toValue.title = endPoint.fullName;
    distanceValue.textContent = `${Math.round(distanceKm).toLocaleString("en-US")} km`;
    durationValue.textContent = durationSeconds ? formatDuration(durationSeconds) : "—";
    fromInput.value = startPoint.name;
    toInput.value = endPoint.name;
    distanceInput.value = String(Math.max(1, Math.round(distanceKm)));
    distanceInput.dispatchEvent(new Event("input", { bubbles: true }));
    panel.classList.toggle("route-is-real", isRealRoute);
    panel.classList.toggle("route-is-estimated", !isRealRoute);
    quoteForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  }

  function formatDuration(seconds) {
    const totalMinutes = Math.max(1, Math.round(seconds / 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (!hours) return `${minutes} ${t("minutes")}`;
    return minutes ? `${hours} ${t("hours")} ${minutes} ${t("minutes")}` : `${hours} ${t("hours")}`;
  }

  function drawBaseRoute({ fit = true } = {}) {
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

    const fallbackDistance = estimatedRoadKm(startPoint.coords, endPoint.coords);
    setSummary(fallbackDistance, null, false);
    setNote("fallbackNote");
    if (fit) map.fitBounds(window.L.latLngBounds([startPoint.coords, endPoint.coords]), { padding: [46, 46] });
  }

  async function renderRoute({ fit = true } = {}) {
    if (!map || !window.L || !startPoint || !endPoint) return;

    drawBaseRoute({ fit });
    updateStatus("routing");
    const sequence = ++routeSequence;

    if (routeController) routeController.abort();
    routeController = new AbortController();

    try {
      const coordinates = `${startPoint.coords[1]},${startPoint.coords[0]};${endPoint.coords[1]},${endPoint.coords[0]}`;
      const url = `${services.routerUrl}/${coordinates}?overview=full&geometries=geojson&steps=false&alternatives=false`;
      const response = await fetch(url, { signal: routeController.signal, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Routing HTTP ${response.status}`);
      const data = await response.json();
      const route = data?.code === "Ok" ? data.routes?.[0] : null;
      if (!route?.geometry?.coordinates?.length || !Number.isFinite(route.distance)) throw new Error(data?.code || "NoRoute");
      if (sequence !== routeSequence) return;

      if (routeLine) routeLine.remove();
      const latLngs = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
      routeLine = window.L.polyline(latLngs, {
        color: "#f08d45",
        weight: 5,
        opacity: 0.96,
        lineCap: "round",
        lineJoin: "round"
      }).addTo(map);

      if (fit) map.fitBounds(routeLine.getBounds(), { padding: [38, 38] });
      setSummary(route.distance / 1000, route.duration, true);
      setNote("realNote");
      updateStatus("ready");
    } catch (error) {
      if (error.name === "AbortError" || sequence !== routeSequence) return;
      updateStatus("fallbackReady");
      setNote("fallbackNote");
    }
  }

  function setPoint(mode, point, { fit = true } = {}) {
    if (mode === "start") startPoint = clonePoint(point);
    else endPoint = clonePoint(point);
    syncSearchInputs();
    renderRoute({ fit });
  }

  function setPreset(startKey, endKey) {
    startPoint = clonePoint(cities[startKey]);
    endPoint = clonePoint(cities[endKey]);
    syncSearchInputs();
    renderRoute({ fit: true });
  }

  function syncSearchInputs() {
    const startSearch = panel.querySelector("#routeSearch-start");
    const endSearch = panel.querySelector("#routeSearch-end");
    if (startSearch) startSearch.value = startPoint.name;
    if (endSearch) endSearch.value = endPoint.name;
  }

  function getCache() {
    try {
      return JSON.parse(localStorage.getItem("orient-geocode-cache") || "{}") || {};
    } catch {
      return {};
    }
  }

  function saveCache(cache) {
    try {
      localStorage.setItem("orient-geocode-cache", JSON.stringify(cache));
    } catch {
      // Storage may be unavailable in private browsing; search still works.
    }
  }

  function cacheKey(query) {
    return `${currentLanguage()}:${query.trim().toLocaleLowerCase()}`;
  }

  function normalizeGeocodeResults(data) {
    if (!Array.isArray(data)) return [];
    return data.slice(0, 5).map(item => {
      const lat = Number(item.lat);
      const lon = Number(item.lon);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
      const fullName = String(item.display_name || item.name || `${lat}, ${lon}`);
      const name = String(item.name || fullName.split(",")[0] || fullName);
      return { name, fullName, coords: [lat, lon], type: item.type || item.category || "place" };
    }).filter(Boolean);
  }

  function geocode(query) {
    geocodeQueue = geocodeQueue.catch(() => undefined).then(async () => {
      const key = cacheKey(query);
      const cache = getCache();
      const cached = cache[key];
      const ttl = services.cacheDays * 24 * 60 * 60 * 1000;
      if (cached?.savedAt && Date.now() - cached.savedAt < ttl && Array.isArray(cached.results)) return cached.results;

      const waitMs = Math.max(0, services.geocodeIntervalMs - (Date.now() - lastGeocodeAt));
      if (waitMs) await new Promise(resolve => setTimeout(resolve, waitMs));
      lastGeocodeAt = Date.now();

      const params = new URLSearchParams({
        q: query.trim(),
        format: "jsonv2",
        limit: "5",
        addressdetails: "1",
        "accept-language": currentLanguage()
      });
      const response = await fetch(`${services.geocoderUrl}?${params}`, {
        headers: { Accept: "application/json" },
        referrerPolicy: "strict-origin-when-cross-origin"
      });
      if (!response.ok) throw new Error(`Geocoding HTTP ${response.status}`);
      const results = normalizeGeocodeResults(await response.json());
      cache[key] = { savedAt: Date.now(), results };
      saveCache(cache);
      return results;
    });
    return geocodeQueue;
  }

  function renderSearchResults(mode, resultsElement, results) {
    resultsElement.replaceChildren();
    if (!results.length) {
      const message = document.createElement("p");
      message.className = "route-search-message";
      message.textContent = t("noResults");
      resultsElement.appendChild(message);
      return;
    }

    const list = document.createElement("div");
    list.className = "route-search-list";
    results.forEach((point, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "route-search-result";
      button.innerHTML = `<span><strong>${escapeHtml(point.name)}</strong><small>${escapeHtml(point.fullName)}</small></span><b>${escapeHtml(t("chooseResult"))}</b>`;
      button.addEventListener("click", () => {
        setPoint(mode, point, { fit: true });
        setMode(mode === "start" ? "end" : "start");
        resultsElement.replaceChildren();
        const input = panel.querySelector(`#routeSearch-${mode}`);
        if (input) input.value = point.name;
      });
      button.style.setProperty("--result-index", index);
      list.appendChild(button);
    });
    resultsElement.appendChild(list);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
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
        if (window.L) resolve();
        else {
          existing.addEventListener("load", resolve, { once: true });
          existing.addEventListener("error", reject, { once: true });
        }
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

    window.L.tileLayer(services.tileUrl, {
      maxZoom: 19,
      attribution: services.attribution
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
      syncSearchInputs();
      renderRoute({ fit: true });
    });

    syncSearchInputs();
    renderRoute({ fit: true });
    setTimeout(() => map.invalidateSize(), 120);
  }

  searchForms.forEach(form => {
    const mode = form.dataset.searchMode;
    const input = form.querySelector("input");
    const button = form.querySelector("button[type='submit']");
    const resultsElement = form.querySelector("[data-search-results]");

    input.addEventListener("input", () => resultsElement.replaceChildren());
    form.addEventListener("submit", async event => {
      event.preventDefault();
      const query = input.value.trim();
      if (query.length < 2) {
        resultsElement.innerHTML = `<p class="route-search-message">${escapeHtml(t("noResults"))}</p>`;
        return;
      }

      button.disabled = true;
      resultsElement.innerHTML = `<p class="route-search-message is-loading">${escapeHtml(t("searching"))}</p>`;
      try {
        const results = await geocode(query);
        renderSearchResults(mode, resultsElement, results);
      } catch {
        resultsElement.innerHTML = `<p class="route-search-message is-error">${escapeHtml(t("searchError"))}</p>`;
      } finally {
        button.disabled = false;
      }
    });
  });

  panel.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  panel.querySelector("#routeSwap").addEventListener("click", () => {
    [startPoint, endPoint] = [endPoint, startPoint];
    syncSearchInputs();
    renderRoute({ fit: true });
  });

  panel.querySelector("#routeReset").addEventListener("click", () => {
    setPreset("warszawa", "ashgabat");
    setMode("start");
    searchForms.forEach(form => form.querySelector("[data-search-results]").replaceChildren());
  });

  panel.querySelectorAll("[data-route-preset]").forEach(button => {
    button.addEventListener("click", () => {
      const [startKey, endKey] = button.dataset.routePreset.split(":");
      setPreset(startKey, endKey);
    });
  });

  applyTranslations();
  new MutationObserver(() => {
    applyTranslations();
    if (durationValue.textContent !== "—") renderRoute({ fit: false });
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  loadLeaflet()
    .then(initializeMap)
    .catch(() => {
      panel.classList.add("map-unavailable");
      panel.querySelector(".route-map-loading").textContent = t("unavailable");
      updateStatus("unavailable");
      setNote("fallbackNote");
    });
})();
