# ORIENT Logistics Modern

Döwrebap, responsive we sekiz dilli logistika kompaniýasynyň landing sahypasy.

## Canly saýt

https://stoun05.github.io/orient-logistics-modern/

## Tehnologiýalar

- HTML5
- CSS3
- Vanilla JavaScript
- Leaflet + OpenStreetMap interaktiw kartasy
- Nominatim şäher gözlegi
- OSRM hakyky awtoulag marşruty
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
- şäher ýa-da salgy boýunça ýükleniş/gowşuryş nokadyny gözlemek
- kartadan A we B nokatlaryny saýlamak
- hakyky awtoulag ýoluny, ýol aralygyny we wagty görkezmek
- kartadaky aralygy kalkulýatora awtomatik geçirmek
- routing elýeterli bolmasa takmynan aralyk bilen fallback
- 7 günlük geokod gözleg keşi we 1 sorag/sekunt çägi
- taýýar demo marşrutlar we nokatlary çalyşmak
- FAQ akkordeony
- scroll animasiýalary
- ýokara dolanmak we jaň düwmesi
- klawiatura we reduced-motion elýeterlilik sazlamalary
- telefon, e-mail, ugur, statistika we karta endpointleri üçin merkezi `config.js`
- sekiz dil üçin dinamiki SEO title we description
- Open Graph we Twitter paýlaşyş metadata-lary
- favicon, web manifest, `robots.txt` we `sitemap.xml`
- Schema.org `WebSite` gurluşly maglumatlary

## Kompaniýa we karta maglumatlaryny çalyşmak

Hakyky telefon, e-mail, ýerleşýän ýer, tracking kody, statistika we karta hyzmatlarynyň endpointlerini diňe `config.js` faýlynda üýtgetmek ýeterlik.

## Faýllar

- `index.html` — sahypanyň gurluşy
- `styles.css` — esasy dizaýn we responsive görnüş
- `core.js` — esasy funksional kod we ilkinji 3 dil
- `config.js` — kompaniýanyň we karta hyzmatlarynyň merkezi maglumatlary
- `phase2.css` — Phase 2 dizaýn kamilleşdirmeleri
- `phase2.js` — Phase 2 interaktiwlik arhiwi
- `phase3.css` — mobil, dil menýusy we elýeterlilik kamilleşdirmeleri
- `phase3.js` — 5 täze dil, SVG ikonlar we wizual QA düzedişleri
- `phase4.css` — hakyky brauzer barlagyndan soňky düzedişler
- `route-map.css` — esasy karta, marker, marşrut we responsive stiller
- `route-search.css` — şäher gözlegi, netije sanawy we hakyky routing ýagdaýlary
- `route-map.js` — şäher gözlegi, kartadan nokat saýlamak, OSRM marşruty we kalkulýator integrasiýasy
- `seo.js` — favicon, canonical, sosial metadata we gurluşly maglumatlar
- `favicon.svg` — brauzer ikonasy
- `social-preview.svg` — paýlaşyş üçin 1200×630 brend suraty
- `site.webmanifest` — web app maglumatlary
- `robots.txt` — gözleg robotlarynyň düzgünleri
- `sitemap.xml` — Google we beýleki gözleg ulgamlary üçin karta
- `script.js` — modullary yzygiderli ýükleýän loader

## Karta hyzmatlary barada bellik

Şäher gözlegi diňe ulanyjy `Gözle` düwmesine basanda ýerine ýetirilýär; autocomplete ýok. Gözlegler ýerli keşde saklanýar we soraglaryň arasynda azyndan 1,1 sekunt goýulýar. Bu demo az ulanyjyly GitHub Pages sahypasy üçin niýetlenendir. Köp ulanyjyly ýa-da kommersiýa önümçilikde geocoding we routing üçin aýratyn tölegli üpjün ediji ýa-da öz backend/proxy hyzmatyňyz gerek.

Tracking, baha we aragatnaşyk formasy häzirki wagtda frontend demo görnüşindedir. Hakyky kommersiýa bahasy logist tarapyndan tassyklanmalydyr.
