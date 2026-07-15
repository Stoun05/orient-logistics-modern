/**
 * ORIENT Logistics — merkezi konfigurasiýa.
 * Hakyky kompaniýa maglumatlaryny we karta hyzmatlaryny soň diňe şu faýlda çalşyp bolýar.
 */
window.ORIENT_CONFIG = {
  companyName: "ORIENT Logistics",
  phone: "+993 00 00 00 00",
  email: "dispatch@orientlogistics.example",
  location: "Aşgabat, Türkmenistan",
  trackingCode: "OL-2026-0715",
  route: {
    from: "Warszawa",
    to: "Aşgabat",
    distanceKm: 1842,
    eta: "ETA 18:40"
  },
  mapServices: {
    geocoderUrl: "https://nominatim.openstreetmap.org/search",
    routerUrl: "https://router.project-osrm.org/route/v1/driving",
    tileUrl: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    geocodeIntervalMs: 1100,
    cacheDays: 7
  },
  stats: {
    support: "24/7",
    countries: "35+",
    onTime: "98.6%",
    experience: "12+"
  }
};
