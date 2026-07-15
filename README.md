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
- Native HTML dialog hyzmat penjireleri
- Professional ýük we transport baha kalkulýatory
- A4 çap / PDF baha teklibi
- Google Apps Script + Google Sheets sargyt backend şablony
- TK / RU / EN / PL / DE / KA / ES / FR dil çalşygy
- GitHub Pages

## Esasy mümkinçilikler

- halkara logistika hyzmatlary üçin professional baş sahypa
- kompýuter, planşet we mobil görnüşleri
- sticky header we aktiw menýu görkezmesi
- professional açylýan dil menýusy
- FTL/LTL, AOG/OBC, ADR, temperatura we RFS hyzmat kartlary
- her hyzmat üçin açylýan giňişleýin professional penjire
- hyzmatyň amatly ulanylyşy, artykmaçlygy, gerek maglumatlary we möhleti
- hyzmatdan kalkulýatora bir basyşda geçmek
- saýlanan hyzmat boýunça ýük görnüşini we tizligini awtomatik sazlamak
- kalkulýatorda saýlanan hyzmaty görkezýän aýratyn status paneli
- klawiatura, Escape we mobil bottom-sheet goldawy
- emoji ýerine SVG ikonlar
- demo tracking: `OL-2026-0715`
- şäher ýa-da salgy boýunça ýükleniş/gowşuryş nokadyny gözlemek
- kartadan A we B nokatlaryny saýlamak
- hakyky awtoulag ýoluny, ýol aralygyny we wagty görkezmek
- kartadaky aralygy kalkulýatora awtomatik geçirmek
- routing elýeterli bolmasa takmynan aralyk bilen fallback
- 7 günlük geokod gözleg keşi we 1 sorag/sekunt çägi
- taýýar demo marşrutlar we nokatlary çalyşmak
- palet/ýer sany we her ýeriň ölçegleri boýunça `m³` göwrümi awtomatik hasaplamak
- ýükleme senesi we ulag görnüşi: van, tent, MEGA, reefer ýa-da awtomatik saýlaw
- agram, göwrüm we palet çäklerine görä ulag laýyklygyny barlamak
- gümrük goldawy we deklarirlenen gymmat boýunça ätiýaçlandyryş goşmaçasy
- temperatura ýüki üçin min/max režim we sowadyjy ulag barlagy
- ADR üçin UN belgisi, klass we Packing Group maglumatlary
- esasy transport, ekspress, ADR, temperatura, gümrük we ätiýaçlandyryş boýunça bahanyň bölünişi
- sekiz dilde professional forma validasiýasy we düşnükli duýduryşlar
- müşderi, kompaniýa, telefon we e-mail maglumatlaryny teklibe goşmak
- her täze hasap üçin aýratyn `OR-YYYYMMDD-XXXX` teklip belgisi
- teklibiň döredilen senesi we 7 günlük güýjünde bolýan möhleti
- marşrut, ýük, ulag, hyzmatlar we bahanyň bölünişi bilen professional teklip preview-y
- brauzeriň çap penjiresi arkaly A4 görnüşde PDF saklamak
- teklibi Web Share ýa-da clipboard arkaly paýlaşmak
- kompaniýanyň e-mail salgysyna taýýar `mailto:` hatyny açmak
- müşderiniň razylygyny, adyny, telefonyny we e-mailini barlap sargyt ibermek
- her sargyt üçin `OR-REQ-YYYYMMDD-XXXXXX` belgisi
- şol bir sargydyň gysga wagtda gaýtadan iberilmeginiň öňüni almak
- sargyt üstünlikli iberilende aýratyn tassyklama penjiresi
- Google Sheets-de sargyt setirini döretmek üçin Apps Script backend şablony
- täze sargyt barada e-mail we optional Telegram habary
- honeypot, backend validasiýasy, CacheService duplicate barlagy we LockService arkaly ýazgy goragy
- tokenleri we Sheet ID-ni GitHub-a ýazmazdan Apps Script Properties-de saklamak
- FAQ akkordeony
- scroll animasiýalary
- ýokara dolanmak we jaň düwmesi
- klawiatura we reduced-motion elýeterlilik sazlamalary
- telefon, e-mail, ugur, statistika, karta we sargyt endpointi üçin merkezi `config.js`
- sekiz dil üçin dinamiki SEO title we description
- Open Graph we Twitter paýlaşyş metadata-lary
- favicon, web manifest, `robots.txt` we `sitemap.xml`
- Schema.org `WebSite` gurluşly maglumatlary

## Kompaniýa, karta we sargyt maglumatlaryny çalyşmak

Hakyky telefon, e-mail, ýerleşýän ýer, tracking kody, statistika, karta hyzmatlary we Google Apps Script `/exec` endpointi `config.js` faýlynda sazlanýar. Telegram tokeni, Google Sheet ID-si we beýleki gizlin maglumatlar frontend konfigurasiýasyna ýazylmaly däl.

## Faýllar

- `index.html` — sahypanyň gurluşy
- `styles.css` — esasy dizaýn we responsive görnüş
- `core.js` — esasy funksional kod we ilkinji 3 dil
- `config.js` — kompaniýa, karta we sargyt endpointiniň merkezi maglumatlary
- `phase2.css` — Phase 2 dizaýn kamilleşdirmeleri
- `phase2.js` — Phase 2 interaktiwlik arhiwi
- `phase3.css` — mobil, dil menýusy we elýeterlilik kamilleşdirmeleri
- `phase3.js` — 5 täze dil, SVG ikonlar we wizual QA düzedişleri
- `phase4.css` — hakyky brauzer barlagyndan soňky düzedişler
- `route-map.css` — esasy karta, marker, marşrut we responsive stiller
- `route-search.css` — şäher gözlegi, netije sanawy we hakyky routing ýagdaýlary
- `route-map.js` — şäher gözlegi, kartadan nokat saýlamak, OSRM marşruty we kalkulýator integrasiýasy
- `service-details.css` — hyzmat dialoglary, mobil bottom-sheet we kalkulýator statusynyň stilleri
- `service-details.js` — 8 dilli hyzmat maglumatlary, dialog we kalkulýator integrasiýasy
- `quote-pro.css` — professional ýük formasy, bahanyň bölünişi we responsive stiller
- `quote-pro.js` — göwrüm, ulag saýlawy, validasiýa we jikme-jik baha hasaby
- `quote-proposal.css` — teklip preview-y, mobil dialog we A4 çap stilleri
- `quote-proposal.js` — müşderi maglumatlary, teklip belgisi, PDF/çap, paýlaşmak we e-mail integrasiýasy
- `order-intake.css` — sargyt paneli, ýagdaýlar we üstünlik dialogynyň responsive stilleri
- `order-intake.js` — 8 dilli sargyt validasiýasy, duplicate goragy we backend iberişi
- `order-backend/Code.gs` — Google Sheet, e-mail we Telegram üçin Apps Script backend
- `order-backend/appsscript.json` — Apps Script V8 manifesti
- `order-backend/SETUP.md` — backend-i deploy etmek boýunça ädimme-ädim görkezme
- `seo.js` — favicon, canonical, sosial metadata we gurluşly maglumatlar
- `favicon.svg` — brauzer ikonasy
- `social-preview.svg` — paýlaşyş üçin 1200×630 brend suraty
- `site.webmanifest` — web app maglumatlary
- `robots.txt` — gözleg robotlarynyň düzgünleri
- `sitemap.xml` — Google we beýleki gözleg ulgamlary üçin karta
- `script.js` — modullary yzygiderli ýükleýän loader

## Sargyt backend-i sazlamak

1. Google Sheet döret.
2. `order-backend/Code.gs` koduny Google Apps Script proýektine goý.
3. Apps Script Properties içine `SHEET_ID` goş.
4. E-mail habary üçin `NOTIFY_EMAIL` goş.
5. Telegram gerek bolsa `TELEGRAM_BOT_TOKEN` we `TELEGRAM_CHAT_ID` goş.
6. `setupOrderSheet()` funksiýasyny bir gezek işlet.
7. Web app hökmünde deploy edip, `/exec` URL-ni al.
8. Şol URL-ni `config.js → orderIntake.endpoint` içine goý.

Doly görkezme: `order-backend/SETUP.md`.

## Karta hyzmatlary barada bellik

Şäher gözlegi diňe ulanyjy `Gözle` düwmesine basanda ýerine ýetirilýär; autocomplete ýok. Gözlegler ýerli keşde saklanýar we soraglaryň arasynda azyndan 1,1 sekunt goýulýar. Bu demo az ulanyjyly GitHub Pages sahypasy üçin niýetlenendir. Köp ulanyjyly ýa-da kommersiýa önümçilikde geocoding we routing üçin aýratyn tölegli üpjün ediji ýa-da öz backend/proxy hyzmatyňyz gerek.

## Baha kalkulýatory, PDF teklibi we sargyt barada bellik

Kalkulýator ýol, ulag, agram, göwrüm, palet sany, hyzmat görnüşi we goşmaça hyzmatlar boýunça frontend formulasy bilen takmynan aralyk berýär. Bu täjirçilik tarifi däl. Hakyky ýol tölegleri, serhet, gümrük, rugsatlar we bazar nyrhy logist tarapyndan barlanandan soň takyk teklip tassyklanmalydyr.

`PDF / Çap` düwmesi brauzeriň çap penjiresini açýar. Ulanyjy şol ýerden `Save as PDF` saýlap, teklibi A4 PDF görnüşinde saklap biler.

Sargyt paneli diňe `config.js` içindäki Apps Script endpointi doldurylandan we backend deploy edilenden soň Google Sheets/e-mail/Telegram bilen hakyky işleýär. Endpoint boş bolsa ulgam üstünlik görkezmeýär, sazlama gerekdigini açyk aýdýar. Tracking we esasy aragatnaşyk formasy häzirki wagtda frontend demo görnüşindedir.
