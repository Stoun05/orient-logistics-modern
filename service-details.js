/* ORIENT Logistics — Phase 8 service detail dialogs */
(() => {
  "use strict";

  const serviceOrder = ["ftl", "aog", "temperature", "adr", "rfs"];
  const ui = {"tk":{"modalLabel":"Hyzmat barada giňişleýin maglumat","bestFor":"Kimler üçin amatly","benefits":"Hyzmatyň artykmaçlyklary","documents":"Gerek maglumatlar","timing":"Adaty möhlet","calculate":"Şu hyzmat üçin baha hasapla","contact":"Logist bilen habarlaş","close":"Penjiräni ýap","selected":"Saýlanan hyzmat","rfsOption":"RFS / awiakargo feeder","learnMore":"Giňişleýin →"},"ru":{"modalLabel":"Подробная информация об услуге","bestFor":"Кому подходит","benefits":"Преимущества услуги","documents":"Необходимые данные","timing":"Обычный срок","calculate":"Рассчитать эту услугу","contact":"Связаться с логистом","close":"Закрыть окно","selected":"Выбранная услуга","rfsOption":"RFS / авиационный фидер","learnMore":"Подробнее →"},"en":{"modalLabel":"Detailed service information","bestFor":"Best suited for","benefits":"Service advantages","documents":"Required details","timing":"Typical timing","calculate":"Calculate this service","contact":"Talk to a logistician","close":"Close dialog","selected":"Selected service","rfsOption":"RFS / air cargo feeder","learnMore":"Learn more →"},"pl":{"modalLabel":"Szczegółowe informacje o usłudze","bestFor":"Dla kogo","benefits":"Zalety usługi","documents":"Wymagane dane","timing":"Typowy czas","calculate":"Oblicz tę usługę","contact":"Skontaktuj się z logistykiem","close":"Zamknij okno","selected":"Wybrana usługa","rfsOption":"RFS / dowóz lotniczy","learnMore":"Więcej →"},"de":{"modalLabel":"Detaillierte Serviceinformationen","bestFor":"Geeignet für","benefits":"Servicevorteile","documents":"Benötigte Angaben","timing":"Übliche Laufzeit","calculate":"Diesen Service berechnen","contact":"Logistiker kontaktieren","close":"Dialog schließen","selected":"Ausgewählter Service","rfsOption":"RFS / Luftfracht-Zubringer","learnMore":"Mehr erfahren →"},"ka":{"modalLabel":"მომსახურების დეტალური ინფორმაცია","bestFor":"ვისთვის არის შესაფერისი","benefits":"მომსახურების უპირატესობები","documents":"საჭირო მონაცემები","timing":"ჩვეულებრივი ვადა","calculate":"ამ მომსახურების გამოთვლა","contact":"ლოგისტთან დაკავშირება","close":"ფანჯრის დახურვა","selected":"არჩეული მომსახურება","rfsOption":"RFS / ავიატვირთის ფიდერი","learnMore":"დეტალურად →"},"es":{"modalLabel":"Información detallada del servicio","bestFor":"Ideal para","benefits":"Ventajas del servicio","documents":"Datos necesarios","timing":"Plazo habitual","calculate":"Calcular este servicio","contact":"Hablar con logística","close":"Cerrar ventana","selected":"Servicio seleccionado","rfsOption":"RFS / alimentador aéreo","learnMore":"Más información →"},"fr":{"modalLabel":"Informations détaillées sur le service","bestFor":"Idéal pour","benefits":"Avantages du service","documents":"Données requises","timing":"Délai habituel","calculate":"Calculer ce service","contact":"Contacter un logisticien","close":"Fermer la fenêtre","selected":"Service sélectionné","rfsOption":"RFS / pré-acheminement aérien","learnMore":"En savoir plus →"}};
  const terms = {"tk":{"palletToTruck":"1 paletden doly maşyna çenli","doorToDoor":"Gapydan-gapa halkara daşama","criticalParts":"Kritiki şaýlar we önümçilik duruşy","urgentDocuments":"Möhletli resminamalar we gymmatly kiçi ýükler","pharmaFood":"Derman, azyk we duýgur önümler","tempRange":"+2…+8°C, +15…+25°C ýa-da aýratyn režim","dangerousClasses":"ADR klassly howply ýükler","internationalAdr":"Halkara ADR marşrutlary","airportConsolidation":"Aeroportdan-aeroporta konsolidasiýa","airLinehaul":"Awiakargo bilen bagly linehaul","singleLogistician":"Bir jogapkär logist","status247":"24/7 status habarlary","insurance":"CMR we ätiýaçlandyryş goldawy","coordination247":"24/7 gyssagly koordinasiýa","obcDedicated":"OBC, ekspress awto ýa-da howa çözgüdi","milestoneStatus":"Her möhüm etapda status","temperatureLogging":"Temperatura ýazgysy we monitoring","refrigeratedVehicle":"Saýlanan sowadyjy ulag","deviationAlerts":"Gyşarmalar boýunça tiz habar","adrPrecheck":"ADR laýyklygynyň deslapky barlagy","specialVehicle":"Ýörite ulag we enjam saýlawy","routePermits":"Marşrut we rugsat çäklendirmeleri","terminalSchedule":"Terminal wagtlaryna laýyk meýilnama","airDocs":"Awiakargo resminamalarynyň koordinasiýasy","sealedVehicle":"Möhürlenen we yzarlanýan ulag","weightDimensions":"Agram, ölçeg we ýerleriň sany","addressesDates":"Ýükleme/gowşuryş salgysy we senesi","cargoDescription":"Ýüküň ady we gaplama görnüşi","readyTime":"Ýüküň taýýarlyk wagty","deadlineContact":"Soňky möhlet we kabul ediji kontakt","tempRequirement":"Talap edilýän temperatura režimi","packaging":"Gaplama we termiki gorag","productData":"Önüm maglumatlary","unAdr":"UN belgisi, ADR klasy we Packing Group","sds":"SDS / MSDS resminamasy","packagingQuantity":"Gaplama, agram we sany","awbTerminal":"AWB / MAWB we terminal kodlary","uldPallet":"ULD ýa-da palet maglumatlary","timingRoad":"Marşruta görä takmynan 3–14 gün.","timingUrgent":"Birnäçe sagatdan 1–3 güne çenli.","timingTemp":"Marşruta we režime görä 2–12 gün.","timingAdr":"Resminama barlagyndan soň 3–14 gün.","timingRfs":"Terminal jübütine görä 1–5 gün."},"ru":{"palletToTruck":"От одной палеты до полной машины","doorToDoor":"Международная доставка от двери до двери","criticalParts":"Критические детали и простой производства","urgentDocuments":"Срочные документы и ценные малые грузы","pharmaFood":"Фармацевтика, продукты и чувствительный груз","tempRange":"+2…+8°C, +15…+25°C или специальный режим","dangerousClasses":"Опасные грузы с классом ADR","internationalAdr":"Международные ADR-маршруты","airportConsolidation":"Консолидация аэропорт–аэропорт","airLinehaul":"Linehaul, связанный с авиагрузом","singleLogistician":"Один ответственный логист","status247":"Статусы 24/7","insurance":"Поддержка CMR и страхования","coordination247":"Экстренная координация 24/7","obcDedicated":"OBC, экспресс-авто или авиа","milestoneStatus":"Статус на каждом важном этапе","temperatureLogging":"Запись и мониторинг температуры","refrigeratedVehicle":"Подходящий рефрижератор","deviationAlerts":"Быстрое уведомление об отклонениях","adrPrecheck":"Предварительная проверка ADR","specialVehicle":"Подбор спецтранспорта и оборудования","routePermits":"Проверка маршрута и разрешений","terminalSchedule":"План под терминальные слоты","airDocs":"Координация авиагрузовых документов","sealedVehicle":"Опломбированный и отслеживаемый транспорт","weightDimensions":"Вес, размеры и количество мест","addressesDates":"Адреса и даты загрузки/доставки","cargoDescription":"Наименование груза и упаковка","readyTime":"Время готовности груза","deadlineContact":"Крайний срок и контакт получателя","tempRequirement":"Требуемый температурный режим","packaging":"Упаковка и термозащита","productData":"Данные о продукте","unAdr":"Номер UN, класс ADR и Packing Group","sds":"Документ SDS / MSDS","packagingQuantity":"Упаковка, вес и количество","awbTerminal":"AWB / MAWB и коды терминалов","uldPallet":"Данные ULD или палеты","timingRoad":"Ориентировочно 3–14 дней по маршруту.","timingUrgent":"От нескольких часов до 1–3 дней.","timingTemp":"Обычно 2–12 дней по маршруту и режиму.","timingAdr":"3–14 дней после проверки документов.","timingRfs":"Обычно 1–5 дней для пары терминалов."},"en":{"palletToTruck":"From one pallet to a full truck","doorToDoor":"International door-to-door transport","criticalParts":"Critical spares and production downtime","urgentDocuments":"Urgent documents and small valuable cargo","pharmaFood":"Pharma, food and sensitive products","tempRange":"+2…+8°C, +15…+25°C or custom regime","dangerousClasses":"Dangerous goods with an ADR class","internationalAdr":"International ADR lanes","airportConsolidation":"Airport-to-airport consolidation","airLinehaul":"Linehaul connected to air cargo","singleLogistician":"One responsible logistician","status247":"24/7 status updates","insurance":"CMR and cargo insurance support","coordination247":"24/7 emergency coordination","obcDedicated":"OBC, dedicated van or air solution","milestoneStatus":"Status at every critical milestone","temperatureLogging":"Temperature logging and monitoring","refrigeratedVehicle":"Qualified refrigerated vehicle","deviationAlerts":"Rapid deviation notifications","adrPrecheck":"ADR compliance pre-check","specialVehicle":"Special vehicle and equipment selection","routePermits":"Route and permit restriction review","terminalSchedule":"Planning around terminal cut-offs","airDocs":"Air cargo document coordination","sealedVehicle":"Sealed and trackable vehicle","weightDimensions":"Weight, dimensions and package count","addressesDates":"Pickup/delivery addresses and dates","cargoDescription":"Cargo description and packaging","readyTime":"Cargo ready time","deadlineContact":"Hard deadline and consignee contact","tempRequirement":"Required temperature regime","packaging":"Packaging and thermal protection","productData":"Product details","unAdr":"UN number, ADR class and Packing Group","sds":"SDS / MSDS document","packagingQuantity":"Packaging, weight and quantity","awbTerminal":"AWB / MAWB and terminal codes","uldPallet":"ULD or pallet details","timingRoad":"Typically 3–14 days depending on the lane.","timingUrgent":"From a few hours to 1–3 days.","timingTemp":"Usually 2–12 days depending on route and regime.","timingAdr":"Typically 3–14 days after document review.","timingRfs":"Typically 1–5 days depending on the terminal pair."},"pl":{"palletToTruck":"Od jednej palety do pełnego samochodu","doorToDoor":"Międzynarodowy transport door-to-door","criticalParts":"Krytyczne części i przestój produkcji","urgentDocuments":"Pilne dokumenty i małe cenne ładunki","pharmaFood":"Farmacja, żywność i produkty wrażliwe","tempRange":"+2…+8°C, +15…+25°C lub tryb specjalny","dangerousClasses":"Towary niebezpieczne z klasą ADR","internationalAdr":"Międzynarodowe trasy ADR","airportConsolidation":"Konsolidacja lotnisko–lotnisko","airLinehaul":"Linehaul związany z cargo lotniczym","singleLogistician":"Jeden odpowiedzialny logistyk","status247":"Statusy 24/7","insurance":"Wsparcie CMR i ubezpieczenia","coordination247":"Koordynacja awaryjna 24/7","obcDedicated":"OBC, dedykowany bus lub lotniczo","milestoneStatus":"Status na każdym ważnym etapie","temperatureLogging":"Rejestracja i monitoring temperatury","refrigeratedVehicle":"Dobrany pojazd chłodniczy","deviationAlerts":"Szybkie alerty o odchyleniach","adrPrecheck":"Wstępna kontrola ADR","specialVehicle":"Dobór pojazdu i wyposażenia","routePermits":"Kontrola trasy i zezwoleń","terminalSchedule":"Plan pod godziny terminalowe","airDocs":"Koordynacja dokumentów lotniczych","sealedVehicle":"Plombowany i śledzony pojazd","weightDimensions":"Waga, wymiary i liczba sztuk","addressesDates":"Adresy i daty załadunku/dostawy","cargoDescription":"Opis ładunku i opakowania","readyTime":"Czas gotowości ładunku","deadlineContact":"Termin końcowy i kontakt odbiorcy","tempRequirement":"Wymagany zakres temperatury","packaging":"Opakowanie i ochrona termiczna","productData":"Dane produktu","unAdr":"Numer UN, klasa ADR i Packing Group","sds":"Dokument SDS / MSDS","packagingQuantity":"Opakowanie, waga i ilość","awbTerminal":"AWB / MAWB i kody terminali","uldPallet":"Dane ULD lub palety","timingRoad":"Zwykle 3–14 dni zależnie od trasy.","timingUrgent":"Od kilku godzin do 1–3 dni.","timingTemp":"Zwykle 2–12 dni zależnie od trasy i trybu.","timingAdr":"Zwykle 3–14 dni po kontroli dokumentów.","timingRfs":"Zwykle 1–5 dni zależnie od terminali."},"de":{"palletToTruck":"Von einer Palette bis zum kompletten Lkw","doorToDoor":"Internationaler Door-to-Door-Transport","criticalParts":"Kritische Teile und Produktionsstillstand","urgentDocuments":"Dringende Dokumente und kleine Wertsendungen","pharmaFood":"Pharma, Lebensmittel und sensible Produkte","tempRange":"+2…+8°C, +15…+25°C oder Sonderbereich","dangerousClasses":"Gefahrgut mit ADR-Klasse","internationalAdr":"Internationale ADR-Routen","airportConsolidation":"Airport-to-Airport-Konsolidierung","airLinehaul":"Linehaul in Verbindung mit Luftfracht","singleLogistician":"Ein verantwortlicher Logistiker","status247":"Statusmeldungen 24/7","insurance":"CMR- und Versicherungsunterstützung","coordination247":"Notfallkoordination rund um die Uhr","obcDedicated":"OBC, Direktfahrt oder Luftlösung","milestoneStatus":"Status an jedem wichtigen Meilenstein","temperatureLogging":"Temperaturaufzeichnung und Überwachung","refrigeratedVehicle":"Geeignetes Kühlfahrzeug","deviationAlerts":"Schnelle Meldung bei Abweichungen","adrPrecheck":"Vorabprüfung der ADR-Konformität","specialVehicle":"Auswahl von Fahrzeug und Ausrüstung","routePermits":"Prüfung von Route und Genehmigungen","terminalSchedule":"Planung nach Terminal-Cut-offs","airDocs":"Koordination der Luftfrachtdokumente","sealedVehicle":"Verplombtes und verfolgbares Fahrzeug","weightDimensions":"Gewicht, Maße und Packstückzahl","addressesDates":"Abhol-/Lieferadressen und Termine","cargoDescription":"Warenbeschreibung und Verpackung","readyTime":"Bereitstellungszeit der Sendung","deadlineContact":"Feste Deadline und Empfängerkontakt","tempRequirement":"Erforderlicher Temperaturbereich","packaging":"Verpackung und Wärmeschutz","productData":"Produktdaten","unAdr":"UN-Nummer, ADR-Klasse und Packing Group","sds":"SDS- / MSDS-Dokument","packagingQuantity":"Verpackung, Gewicht und Menge","awbTerminal":"AWB / MAWB und Terminalcodes","uldPallet":"ULD- oder Palettendaten","timingRoad":"Je nach Route üblicherweise 3–14 Tage.","timingUrgent":"Von wenigen Stunden bis 1–3 Tage.","timingTemp":"Je nach Route und Bereich meist 2–12 Tage.","timingAdr":"Nach Dokumentenprüfung üblicherweise 3–14 Tage.","timingRfs":"Je nach Terminalpaar meist 1–5 Tage."},"ka":{"palletToTruck":"ერთი პალეტიდან სრულ მანქანამდე","doorToDoor":"საერთაშორისო კარიდან კარამდე გადაზიდვა","criticalParts":"კრიტიკული ნაწილები და წარმოების გაჩერება","urgentDocuments":"სასწრაფო დოკუმენტები და მცირე ძვირადღირებული ტვირთი","pharmaFood":"ფარმა, საკვები და მგრძნობიარე პროდუქტი","tempRange":"+2…+8°C, +15…+25°C ან სპეციალური რეჟიმი","dangerousClasses":"ADR კლასის სახიფათო ტვირთი","internationalAdr":"საერთაშორისო ADR მარშრუტები","airportConsolidation":"აეროპორტიდან აეროპორტამდე კონსოლიდაცია","airLinehaul":"ავიატვირთთან დაკავშირებული linehaul","singleLogistician":"ერთი პასუხისმგებელი ლოგისტი","status247":"სტატუსები 24/7","insurance":"CMR და დაზღვევის მხარდაჭერა","coordination247":"24/7 გადაუდებელი კოორდინაცია","obcDedicated":"OBC, პირდაპირი მანქანა ან ავია","milestoneStatus":"სტატუსი ყველა მნიშვნელოვან ეტაპზე","temperatureLogging":"ტემპერატურის ჩაწერა და კონტროლი","refrigeratedVehicle":"შესაბამისი მაცივარი მანქანა","deviationAlerts":"გადახრის სწრაფი შეტყობინება","adrPrecheck":"ADR შესაბამისობის წინასწარი შემოწმება","specialVehicle":"მანქანისა და აღჭურვილობის შერჩევა","routePermits":"მარშრუტისა და ნებართვების შემოწმება","terminalSchedule":"გეგმა ტერმინალის დროების მიხედვით","airDocs":"ავიატვირთის დოკუმენტების კოორდინაცია","sealedVehicle":"დალუქული და კონტროლირებადი მანქანა","weightDimensions":"წონა, ზომები და ადგილების რაოდენობა","addressesDates":"ჩატვირთვა/მიწოდების მისამართები და თარიღები","cargoDescription":"ტვირთის აღწერა და შეფუთვა","readyTime":"ტვირთის მზადყოფნის დრო","deadlineContact":"საბოლოო ვადა და მიმღების კონტაქტი","tempRequirement":"საჭირო ტემპერატურის რეჟიმი","packaging":"შეფუთვა და თერმული დაცვა","productData":"პროდუქტის მონაცემები","unAdr":"UN ნომერი, ADR კლასი და Packing Group","sds":"SDS / MSDS დოკუმენტი","packagingQuantity":"შეფუთვა, წონა და რაოდენობა","awbTerminal":"AWB / MAWB და ტერმინალის კოდები","uldPallet":"ULD ან პალეტის მონაცემები","timingRoad":"მარშრუტის მიხედვით ჩვეულებრივ 3–14 დღე.","timingUrgent":"რამდენიმე საათიდან 1–3 დღემდე.","timingTemp":"ჩვეულებრივ 2–12 დღე მარშრუტისა და რეჟიმის მიხედვით.","timingAdr":"დოკუმენტების შემოწმების შემდეგ 3–14 დღე.","timingRfs":"ტერმინალების მიხედვით ჩვეულებრივ 1–5 დღე."},"es":{"palletToTruck":"Desde un palé hasta un camión completo","doorToDoor":"Transporte internacional puerta a puerta","criticalParts":"Repuestos críticos y parada de producción","urgentDocuments":"Documentos urgentes y carga pequeña de valor","pharmaFood":"Farmacia, alimentos y productos sensibles","tempRange":"+2…+8°C, +15…+25°C o régimen especial","dangerousClasses":"Mercancías peligrosas con clase ADR","internationalAdr":"Rutas ADR internacionales","airportConsolidation":"Consolidación aeropuerto-aeropuerto","airLinehaul":"Linehaul conectado con carga aérea","singleLogistician":"Un responsable logístico","status247":"Estados 24/7","insurance":"Apoyo con CMR y seguro","coordination247":"Coordinación urgente 24/7","obcDedicated":"OBC, vehículo dedicado o solución aérea","milestoneStatus":"Estado en cada hito importante","temperatureLogging":"Registro y control de temperatura","refrigeratedVehicle":"Vehículo refrigerado adecuado","deviationAlerts":"Avisos rápidos de desviaciones","adrPrecheck":"Revisión previa de conformidad ADR","specialVehicle":"Selección de vehículo y equipo","routePermits":"Revisión de ruta y permisos","terminalSchedule":"Plan según horarios del terminal","airDocs":"Coordinación de documentos aéreos","sealedVehicle":"Vehículo precintado y rastreable","weightDimensions":"Peso, dimensiones y número de bultos","addressesDates":"Direcciones y fechas de carga/entrega","cargoDescription":"Descripción y embalaje de la carga","readyTime":"Hora de disponibilidad","deadlineContact":"Fecha límite y contacto del destinatario","tempRequirement":"Régimen de temperatura requerido","packaging":"Embalaje y protección térmica","productData":"Datos del producto","unAdr":"Número UN, clase ADR y Packing Group","sds":"Documento SDS / MSDS","packagingQuantity":"Embalaje, peso y cantidad","awbTerminal":"AWB / MAWB y códigos de terminal","uldPallet":"Datos ULD o palé","timingRoad":"Normalmente 3–14 días según la ruta.","timingUrgent":"Desde unas horas hasta 1–3 días.","timingTemp":"Normalmente 2–12 días según ruta y régimen.","timingAdr":"Normalmente 3–14 días tras revisar documentos.","timingRfs":"Normalmente 1–5 días según los terminales."},"fr":{"palletToTruck":"D’une palette à un camion complet","doorToDoor":"Transport international porte-à-porte","criticalParts":"Pièces critiques et arrêt de production","urgentDocuments":"Documents urgents et petits envois de valeur","pharmaFood":"Pharma, alimentation et produits sensibles","tempRange":"+2…+8°C, +15…+25°C ou régime spécial","dangerousClasses":"Marchandises dangereuses classées ADR","internationalAdr":"Itinéraires ADR internationaux","airportConsolidation":"Consolidation aéroport-à-aéroport","airLinehaul":"Linehaul lié au fret aérien","singleLogistician":"Un logisticien responsable","status247":"Statuts 24/7","insurance":"Assistance CMR et assurance","coordination247":"Coordination d’urgence 24/7","obcDedicated":"OBC, véhicule dédié ou solution aérienne","milestoneStatus":"Statut à chaque étape clé","temperatureLogging":"Enregistrement et suivi de température","refrigeratedVehicle":"Véhicule frigorifique adapté","deviationAlerts":"Alerte rapide en cas d’écart","adrPrecheck":"Pré-contrôle de conformité ADR","specialVehicle":"Choix du véhicule et des équipements","routePermits":"Vérification de l’itinéraire et des permis","terminalSchedule":"Planification selon les cut-offs terminal","airDocs":"Coordination des documents aériens","sealedVehicle":"Véhicule scellé et traçable","weightDimensions":"Poids, dimensions et nombre de colis","addressesDates":"Adresses et dates d’enlèvement/livraison","cargoDescription":"Description du fret et emballage","readyTime":"Heure de disponibilité du fret","deadlineContact":"Échéance ferme et contact destinataire","tempRequirement":"Régime de température requis","packaging":"Emballage et protection thermique","productData":"Données produit","unAdr":"Numéro UN, classe ADR et Packing Group","sds":"Document SDS / MSDS","packagingQuantity":"Emballage, poids et quantité","awbTerminal":"AWB / MAWB et codes terminal","uldPallet":"Données ULD ou palette","timingRoad":"Généralement 3 à 14 jours selon l’itinéraire.","timingUrgent":"De quelques heures à 1–3 jours.","timingTemp":"Généralement 2 à 12 jours selon route et régime.","timingAdr":"Généralement 3 à 14 jours après contrôle documentaire.","timingRfs":"Généralement 1 à 5 jours selon les terminaux."}};
  const serviceDefinitions = {"ftl":{"code":"FTL / LTL","best":["palletToTruck","doorToDoor"],"benefits":["singleLogistician","status247","insurance"],"docs":["weightDimensions","addressesDates","cargoDescription"],"timing":"timingRoad"},"aog":{"code":"AOG / OBC","best":["criticalParts","urgentDocuments"],"benefits":["coordination247","obcDedicated","milestoneStatus"],"docs":["weightDimensions","readyTime","deadlineContact"],"timing":"timingUrgent"},"temperature":{"code":"GDP / TEMP","best":["pharmaFood","tempRange"],"benefits":["temperatureLogging","refrigeratedVehicle","deviationAlerts"],"docs":["tempRequirement","packaging","productData"],"timing":"timingTemp"},"adr":{"code":"ADR","best":["dangerousClasses","internationalAdr"],"benefits":["adrPrecheck","specialVehicle","routePermits"],"docs":["unAdr","sds","packagingQuantity"],"timing":"timingAdr"},"rfs":{"code":"RFS","best":["airportConsolidation","airLinehaul"],"benefits":["terminalSchedule","airDocs","sealedVehicle"],"docs":["awbTerminal","weightDimensions","uldPallet"],"timing":"timingRfs"}};
  const quoteForm = document.getElementById("quoteForm");
  const cargoSelect = document.getElementById("cargoType");
  const urgencySelect = document.getElementById("urgency");
  const serviceCards = Array.from(document.querySelectorAll("#services .service-card:not(.dark-card)")).slice(0, serviceOrder.length);

  if (!quoteForm || !cargoSelect || !urgencySelect || !serviceCards.length) return;

  const getLanguage = () => ui[document.documentElement.lang] ? document.documentElement.lang : "tk";
  const getUi = () => ui[getLanguage()] || ui.tk;
  const getTerms = () => terms[getLanguage()] || terms.tk;
  const translateTerm = key => getTerms()[key] || terms.en[key] || key;

  const dialog = document.createElement("dialog");
  dialog.className = "service-dialog";
  dialog.id = "serviceDetailsDialog";
  dialog.innerHTML = `
    <div class="service-dialog-shell">
      <button class="service-dialog-close" type="button">×</button>
      <div class="service-dialog-top">
        <span class="service-dialog-code"></span>
        <div>
          <span class="service-dialog-eyebrow">ORIENT SERVICE</span>
          <h3 class="service-dialog-title"></h3>
          <p class="service-dialog-lead"></p>
        </div>
      </div>
      <div class="service-dialog-grid">
        <section>
          <h4 data-service-label="bestFor"></h4>
          <ul data-service-list="best"></ul>
        </section>
        <section>
          <h4 data-service-label="benefits"></h4>
          <ul data-service-list="benefits"></ul>
        </section>
        <section>
          <h4 data-service-label="documents"></h4>
          <ul data-service-list="docs"></ul>
        </section>
        <section class="service-dialog-timing">
          <h4 data-service-label="timing"></h4>
          <p data-service-timing></p>
        </section>
      </div>
      <div class="service-dialog-actions">
        <button class="btn btn-primary" type="button" data-service-calculate></button>
        <a class="btn btn-ghost" href="#contact" data-service-contact></a>
      </div>
    </div>`;
  document.body.appendChild(dialog);

  const closeButton = dialog.querySelector(".service-dialog-close");
  const calculateButton = dialog.querySelector("[data-service-calculate]");
  const contactButton = dialog.querySelector("[data-service-contact]");
  let activeServiceId = serviceOrder[0];
  let lastTrigger = null;

  function ensureRfsOption() {
    let option = cargoSelect.querySelector('option[data-service-option="rfs"]');
    if (!option) {
      option = document.createElement("option");
      option.value = "1.12";
      option.dataset.serviceOption = "rfs";
      cargoSelect.appendChild(option);
    }
    option.textContent = getUi().rfsOption;
  }

  function ensureSelectedChip() {
    let chip = quoteForm.querySelector(".selected-service-chip");
    if (!chip) {
      chip = document.createElement("div");
      chip.className = "selected-service-chip";
      chip.setAttribute("aria-live", "polite");
      quoteForm.insertBefore(chip, quoteForm.querySelector(".form-grid"));
    }
    return chip;
  }

  function getCardText(id) {
    const card = serviceCards[serviceOrder.indexOf(id)];
    return {
      title: card?.querySelector("h3")?.textContent?.trim() || serviceDefinitions[id].code,
      lead: card?.querySelector("p")?.textContent?.trim() || ""
    };
  }

  function updateSelectedChip(id) {
    const definition = serviceDefinitions[id];
    const cardText = getCardText(id);
    const chip = ensureSelectedChip();
    chip.innerHTML = `<span>${escapeHtml(getUi().selected)}</span><strong>${escapeHtml(definition.code)} · ${escapeHtml(cardText.title)}</strong>`;
    chip.dataset.service = id;
  }

  function renderList(key, definition) {
    const list = dialog.querySelector(`[data-service-list="${key}"]`);
    list.replaceChildren(...definition[key].map(termKey => {
      const item = document.createElement("li");
      item.textContent = translateTerm(termKey);
      return item;
    }));
  }

  function renderDialog(id) {
    activeServiceId = id;
    const labels = getUi();
    const definition = serviceDefinitions[id];
    const cardText = getCardText(id);
    dialog.setAttribute("aria-label", labels.modalLabel);
    closeButton.setAttribute("aria-label", labels.close);
    dialog.querySelector(".service-dialog-code").textContent = definition.code;
    dialog.querySelector(".service-dialog-title").textContent = cardText.title;
    dialog.querySelector(".service-dialog-lead").textContent = cardText.lead;
    dialog.querySelectorAll("[data-service-label]").forEach(element => {
      element.textContent = labels[element.dataset.serviceLabel];
    });
    ["best", "benefits", "docs"].forEach(key => renderList(key, definition));
    dialog.querySelector("[data-service-timing]").textContent = translateTerm(definition.timing);
    calculateButton.textContent = labels.calculate;
    contactButton.textContent = labels.contact;
  }

  function openDialog(id, trigger) {
    lastTrigger = trigger || document.activeElement;
    renderDialog(id);
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    requestAnimationFrame(() => closeButton.focus());
  }

  function closeDialog() {
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  function applyServiceToCalculator(id) {
    ensureRfsOption();
    const settings = {
      ftl: { cargo: "1", urgency: "1" },
      aog: { cargo: "1", urgency: "1.35" },
      temperature: { cargo: "1.25", urgency: "1" },
      adr: { cargo: "1.4", urgency: "1" },
      rfs: { cargo: "1.12", urgency: "1" }
    }[id];

    cargoSelect.value = settings.cargo;
    urgencySelect.value = settings.urgency;
    cargoSelect.dispatchEvent(new Event("change", { bubbles: true }));
    urgencySelect.dispatchEvent(new Event("change", { bubbles: true }));
    updateSelectedChip(id);
    quoteForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    closeDialog();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("quote")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    quoteForm.classList.remove("service-quote-highlight");
    requestAnimationFrame(() => quoteForm.classList.add("service-quote-highlight"));
    window.setTimeout(() => quoteForm.classList.remove("service-quote-highlight"), 1400);
    window.setTimeout(() => cargoSelect.focus({ preventScroll: true }), reduceMotion ? 0 : 650);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
  }

  serviceCards.forEach((card, index) => {
    const id = serviceOrder[index];
    const link = card.querySelector("a");
    card.dataset.service = id;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-controls", dialog.id);

    if (link) {
      link.href = `#service-${id}`;
      link.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        openDialog(id, link);
      });
    }

    card.addEventListener("click", event => {
      if (event.target.closest("a, button, input, select, textarea")) return;
      openDialog(id, card);
    });
    card.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openDialog(id, card);
    });
  });

  closeButton.addEventListener("click", closeDialog);
  calculateButton.addEventListener("click", () => applyServiceToCalculator(activeServiceId));
  contactButton.addEventListener("click", closeDialog);
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => {
    lastTrigger?.focus?.({ preventScroll: true });
  });

  ensureRfsOption();
  new MutationObserver(() => {
    ensureRfsOption();
    serviceCards.forEach(card => {
      const link = card.querySelector("a");
      if (link) link.textContent = getUi().learnMore;
    });
    if (dialog.open) renderDialog(activeServiceId);
    const chip = quoteForm.querySelector(".selected-service-chip");
    if (chip?.dataset.service) updateSelectedChip(chip.dataset.service);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
})();
