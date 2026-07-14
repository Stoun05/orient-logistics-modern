# ORIENT Logistics Modern

Döwrebap, responsive we sekiz dilli logistika kompaniýasynyň landing sahypasy.

## Canly saýt

https://stoun05.github.io/orient-logistics-modern/

## Tehnologiýalar

- HTML5
- CSS3
- Vanilla JavaScript
- Leaflet + OpenStreetMap interaktiw kartasy
- TK / RU / EN / PL / DE / KA / ES / FR dil çalşygy
- GitHub Pages

## Esasy mümkinçilikler

- halkara logistika hyzmatlary üçin professional baş sahypa
- kompýuter, planşet we mobil görnüşleri
- sticky header we aktiw menýu görkezmesi
- professional açylýan dil menýusy
- FTL/LTL, AOG/OBC, ADR, temperatura we RFS hyzmat kartlary
- emoji ýerine SVG ikonlar
- demo tracking: `OL-2026-0715`
- dinamiki baha kalkulýatory we jikme-jik hasap
- kartadan ýükleniş we gowşuryş nokatlaryny saýlamak
- takmynan ýol aralygyny we bahany awtomatik täzelemek
- taýýar demo marşrutlar we nokatlary çalyşmak
- FAQ akkordeony
- scroll animasiýalary
- ýokara dolanmak we jaň düwmesi
- klawiatura we reduced-motion elýeterlilik sazlamalary
- telefon, e-mail, ugur we statistika üçin merkezi `config.js`
- sekiz dil üçin dinamiki SEO title we description
- Open Graph we Twitter paýlaşyş metadata-lary
- favicon, web manifest, `robots.txt` we `sitemap.xml`
- Schema.org `WebSite` gurluşly maglumatlary

## Kompaniýa maglumatlaryny çalyşmak

Hakyky telefon, e-mail, ýerleşýän ýer, tracking kody we statistika maglumatlaryny diňe `config.js` faýlynda üýtgetmek ýeterlik.

## Faýllar

- `index.html` — sahypanyň gurluşy
- `styles.css` — esasy dizaýn we responsive görnüş
- `core.js` — esasy funksional kod we ilkinji 3 dil
- `config.js` — kompaniýanyň merkezi maglumatlary
- `phase2.css` — Phase 2 dizaýn kamilleşdirmeleri
- `phase2.js` — Phase 2 interaktiwlik arhiwi
- `phase3.css` — mobil, dil menýusy we elýeterlilik kamilleşdirmeleri
- `phase3.js` — 5 täze dil, SVG ikonlar we wizual QA düzedişleri
- `phase4.css` — hakyky brauzer barlagyndan soňky düzedişler
- `route-map.css` — karta, marker, marşrut we responsive stiller
- `route-map.js` — kartadan nokat saýlamak, aralyk we kalkulýator integrasiýasy
- `seo.js` — favicon, canonical, sosial metadata we gurluşly maglumatlar
- `favicon.svg` — brauzer ikonasy
- `social-preview.svg` — paýlaşyş üçin 1200×630 brend suraty
- `site.webmanifest` — web app maglumatlary
- `robots.txt` — gözleg robotlarynyň düzgünleri
- `sitemap.xml` — Google we beýleki gözleg ulgamlary üçin karta
- `script.js` — modullary yzygiderli ýükleýän loader

## Bellik

Karta ýol aralygyny geografik aralykdan takmynan hasaplaýar. Hakyky önümçilikde takyk ýol marşruty, tölegli ýollar we serhet geçelgeleri üçin routing API ýa-da backend birikdirmesi gerek. Tracking, baha we aragatnaşyk formasy hem häzirki wagtda frontend demo görnüşindedir.