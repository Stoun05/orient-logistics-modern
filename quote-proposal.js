/* ORIENT Logistics — Phase 10 printable quote proposal */
(() => {
  "use strict";

  const form = document.getElementById("quoteForm");
  const originalGrid = form?.querySelector(".form-grid");
  const professionalDetails = form?.querySelector(".quote-pro-details");
  const professionalResult = form?.querySelector(".quote-pro-result");
  const priceResult = document.getElementById("priceResult");

  if (!form || !originalGrid || !professionalDetails || !professionalResult || !priceResult) return;

  const dictionary = {
    tk: {
      clientTitle: "Müşderi maglumatlary", clientIntro: "Baha teklibinde görkeziljek maglumatlar — hökmany däl.", company: "Kompaniýa", contactPerson: "Habarlaşyljak şahs", phone: "Telefon", email: "E-mail",
      proposalReady: "Baha teklibi taýýar", proposalHint: "Hasaby görüp, çap edip PDF görnüşinde saklap ýa-da paýlaşyp bilersiňiz.", proposalNumber: "Teklip belgisi", calculateFirst: "Ilki maglumatlary dogry dolduryp, bahany hasaplaň.", stale: "Maglumat üýtgedildi — teklibi täzelemek üçin gaýtadan hasaplaň.",
      view: "Teklibi gör", printPdf: "PDF / Çap", share: "Paýlaş", emailDraft: "E-mail taýýarla", close: "Ýap", copied: "Teklip maglumatlary göçürildi.", shareError: "Paýlaşmak başartmady. Maglumatlary el bilen göçürip görüň.", emailSubject: "ORIENT Logistics baha teklibi",
      proposal: "TRANSPORT BAHA TEKLIBI", issued: "Döredilen senesi", validUntil: "Möhleti", validity: "Teklip 7 gün güýjünde", customer: "Müşderi", route: "Marşrut", loadingDate: "Ýükleme senesi", cargoDetails: "Ýük maglumatlary", distance: "Aralyk", weight: "Agram", pallets: "Palet / ýer", volume: "Göwrüm", dimensions: "Bir ýeriň ölçegi", cargoType: "Ýük görnüşi", urgency: "Tizlik", vehicle: "Ulag", selectedService: "Saýlanan hyzmat", optionalServices: "Goşmaça hyzmatlar", customs: "Gümrük goldawy", insurance: "Ätiýaçlandyryş", temperature: "Temperatura", adr: "ADR", none: "Ýok", priceBreakdown: "Bahanyň bölünişi", estimatedTotal: "TAKMYNAN JEMI BAHA", disclaimer: "Bu awtomatik frontend hasabydyr. Takyk täjirçilik teklibi marşrut, resminamalar, serhet, ýol tölegleri we bazar nyrhy logist tarapyndan barlanandan soň tassyklanýar.", contactLine: "Takyk teklip üçin ORIENT Logistics bilen habarlaşyň.", saveInstruction: "Brauzeriň çap penjiresinde “Save as PDF / PDF görnüşinde sakla” saýlaň.", anonymous: "Görkezilmedi", summaryPrice: "Takmynan baha"
    },
    ru: {
      clientTitle: "Данные клиента", clientIntro: "Необязательные данные, которые появятся в предложении.", company: "Компания", contactPerson: "Контактное лицо", phone: "Телефон", email: "E-mail",
      proposalReady: "Коммерческое предложение готово", proposalHint: "Его можно открыть, распечатать в PDF или поделиться.", proposalNumber: "Номер предложения", calculateFirst: "Сначала заполните данные и выполните корректный расчёт.", stale: "Данные изменены — пересчитайте стоимость, чтобы обновить предложение.",
      view: "Открыть предложение", printPdf: "PDF / Печать", share: "Поделиться", emailDraft: "Подготовить e-mail", close: "Закрыть", copied: "Данные предложения скопированы.", shareError: "Не удалось поделиться. Скопируйте данные вручную.", emailSubject: "Расчёт ORIENT Logistics",
      proposal: "ПРЕДЛОЖЕНИЕ НА ПЕРЕВОЗКУ", issued: "Дата создания", validUntil: "Действительно до", validity: "Предложение действительно 7 дней", customer: "Клиент", route: "Маршрут", loadingDate: "Дата загрузки", cargoDetails: "Параметры груза", distance: "Расстояние", weight: "Вес", pallets: "Палеты / места", volume: "Объём", dimensions: "Размер одного места", cargoType: "Тип груза", urgency: "Срочность", vehicle: "Транспорт", selectedService: "Выбранная услуга", optionalServices: "Дополнительные услуги", customs: "Таможенное сопровождение", insurance: "Страхование", temperature: "Температура", adr: "ADR", none: "Нет", priceBreakdown: "Структура стоимости", estimatedTotal: "ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ", disclaimer: "Это автоматический frontend-расчёт. Финальная цена подтверждается логистом после проверки маршрута, документов, границ, дорожных сборов и рыночной ставки.", contactLine: "Для точного предложения свяжитесь с ORIENT Logistics.", saveInstruction: "В окне печати браузера выберите «Сохранить как PDF».", anonymous: "Не указано", summaryPrice: "Ориентировочная стоимость"
    },
    en: {
      clientTitle: "Customer details", clientIntro: "Optional details to display on the quotation.", company: "Company", contactPerson: "Contact person", phone: "Phone", email: "E-mail",
      proposalReady: "Quotation ready", proposalHint: "Open it, print or save it as PDF, and share the summary.", proposalNumber: "Quotation number", calculateFirst: "Complete the cargo details and calculate a valid quote first.", stale: "Cargo details changed — recalculate to update the quotation.",
      view: "View quotation", printPdf: "PDF / Print", share: "Share", emailDraft: "Prepare e-mail", close: "Close", copied: "Quotation summary copied.", shareError: "Sharing failed. Copy the details manually.", emailSubject: "ORIENT Logistics quotation",
      proposal: "TRANSPORT QUOTATION", issued: "Issue date", validUntil: "Valid until", validity: "Quotation valid for 7 days", customer: "Customer", route: "Route", loadingDate: "Loading date", cargoDetails: "Cargo details", distance: "Distance", weight: "Weight", pallets: "Pallets / packages", volume: "Volume", dimensions: "Dimensions per package", cargoType: "Cargo type", urgency: "Urgency", vehicle: "Vehicle", selectedService: "Selected service", optionalServices: "Optional services", customs: "Customs support", insurance: "Insurance", temperature: "Temperature", adr: "ADR", none: "None", priceBreakdown: "Price breakdown", estimatedTotal: "ESTIMATED TOTAL", disclaimer: "This is an automated frontend estimate. A logistician confirms the final commercial quote after checking the route, documents, border requirements, road charges and current market rate.", contactLine: "Contact ORIENT Logistics for a confirmed quotation.", saveInstruction: "Choose “Save as PDF” in your browser print dialog.", anonymous: "Not provided", summaryPrice: "Estimated price"
    },
    pl: {
      clientTitle: "Dane klienta", clientIntro: "Opcjonalne dane widoczne na ofercie.", company: "Firma", contactPerson: "Osoba kontaktowa", phone: "Telefon", email: "E-mail",
      proposalReady: "Oferta jest gotowa", proposalHint: "Możesz ją otworzyć, wydrukować do PDF lub udostępnić.", proposalNumber: "Numer oferty", calculateFirst: "Najpierw uzupełnij dane i wykonaj poprawną kalkulację.", stale: "Dane zmieniono — przelicz cenę, aby zaktualizować ofertę.",
      view: "Otwórz ofertę", printPdf: "PDF / Drukuj", share: "Udostępnij", emailDraft: "Przygotuj e-mail", close: "Zamknij", copied: "Podsumowanie oferty skopiowano.", shareError: "Nie udało się udostępnić. Skopiuj dane ręcznie.", emailSubject: "Oferta ORIENT Logistics",
      proposal: "OFERTA TRANSPORTOWA", issued: "Data wystawienia", validUntil: "Ważna do", validity: "Oferta ważna 7 dni", customer: "Klient", route: "Trasa", loadingDate: "Data załadunku", cargoDetails: "Dane ładunku", distance: "Odległość", weight: "Waga", pallets: "Palety / sztuki", volume: "Objętość", dimensions: "Wymiary jednej sztuki", cargoType: "Rodzaj ładunku", urgency: "Pilność", vehicle: "Pojazd", selectedService: "Wybrana usługa", optionalServices: "Usługi dodatkowe", customs: "Obsługa celna", insurance: "Ubezpieczenie", temperature: "Temperatura", adr: "ADR", none: "Brak", priceBreakdown: "Struktura ceny", estimatedTotal: "SZACOWANA CENA", disclaimer: "To automatyczna kalkulacja frontend. Ostateczna oferta wymaga potwierdzenia trasy, dokumentów, granic, opłat drogowych i aktualnej stawki przez logistyka.", contactLine: "Skontaktuj się z ORIENT Logistics po ofertę potwierdzoną.", saveInstruction: "W oknie drukowania wybierz „Zapisz jako PDF”.", anonymous: "Nie podano", summaryPrice: "Szacowana cena"
    },
    de: {
      clientTitle: "Kundendaten", clientIntro: "Optionale Angaben für das Angebot.", company: "Unternehmen", contactPerson: "Kontaktperson", phone: "Telefon", email: "E-Mail",
      proposalReady: "Angebot ist bereit", proposalHint: "Öffnen, als PDF drucken oder die Zusammenfassung teilen.", proposalNumber: "Angebotsnummer", calculateFirst: "Füllen Sie zuerst die Frachtdaten aus und berechnen Sie ein gültiges Angebot.", stale: "Daten geändert — bitte neu berechnen.",
      view: "Angebot öffnen", printPdf: "PDF / Drucken", share: "Teilen", emailDraft: "E-Mail vorbereiten", close: "Schließen", copied: "Angebotsübersicht kopiert.", shareError: "Teilen fehlgeschlagen. Bitte manuell kopieren.", emailSubject: "ORIENT Logistics Angebot",
      proposal: "TRANSPORTANGEBOT", issued: "Ausstellungsdatum", validUntil: "Gültig bis", validity: "Angebot 7 Tage gültig", customer: "Kunde", route: "Route", loadingDate: "Ladedatum", cargoDetails: "Frachtdaten", distance: "Entfernung", weight: "Gewicht", pallets: "Paletten / Packstücke", volume: "Volumen", dimensions: "Maße je Packstück", cargoType: "Frachtart", urgency: "Dringlichkeit", vehicle: "Fahrzeug", selectedService: "Gewählter Service", optionalServices: "Zusatzleistungen", customs: "Zollservice", insurance: "Versicherung", temperature: "Temperatur", adr: "ADR", none: "Keine", priceBreakdown: "Preisaufteilung", estimatedTotal: "GESCHÄTZTER GESAMTPREIS", disclaimer: "Dies ist eine automatische Frontend-Schätzung. Das endgültige Angebot wird nach Prüfung von Route, Dokumenten, Grenzen, Maut und Marktpreis bestätigt.", contactLine: "Kontaktieren Sie ORIENT Logistics für ein bestätigtes Angebot.", saveInstruction: "Wählen Sie im Druckdialog „Als PDF speichern“.", anonymous: "Nicht angegeben", summaryPrice: "Geschätzter Preis"
    },
    ka: {
      clientTitle: "კლიენტის მონაცემები", clientIntro: "არასავალდებულო მონაცემები შეთავაზებისთვის.", company: "კომპანია", contactPerson: "საკონტაქტო პირი", phone: "ტელეფონი", email: "E-mail",
      proposalReady: "შეთავაზება მზადაა", proposalHint: "გახსენით, შეინახეთ PDF-ად ან გააზიარეთ.", proposalNumber: "შეთავაზების ნომერი", calculateFirst: "ჯერ შეავსეთ მონაცემები და გამოთვალეთ სწორი ფასი.", stale: "მონაცემები შეიცვალა — ხელახლა გამოთვალეთ.",
      view: "შეთავაზების ნახვა", printPdf: "PDF / ბეჭდვა", share: "გაზიარება", emailDraft: "E-mail-ის მომზადება", close: "დახურვა", copied: "შეთავაზების შეჯამება დაკოპირდა.", shareError: "გაზიარება ვერ მოხერხდა.", emailSubject: "ORIENT Logistics შეთავაზება",
      proposal: "სატრანსპორტო შეთავაზება", issued: "შექმნის თარიღი", validUntil: "ძალაშია", validity: "შეთავაზება ძალაშია 7 დღე", customer: "კლიენტი", route: "მარშრუტი", loadingDate: "დატვირთვის თარიღი", cargoDetails: "ტვირთის მონაცემები", distance: "მანძილი", weight: "წონა", pallets: "პალეტები / ადგილები", volume: "მოცულობა", dimensions: "ერთი ადგილის ზომები", cargoType: "ტვირთის ტიპი", urgency: "სისწრაფე", vehicle: "ტრანსპორტი", selectedService: "არჩეული მომსახურება", optionalServices: "დამატებითი მომსახურება", customs: "საბაჟო მხარდაჭერა", insurance: "დაზღვევა", temperature: "ტემპერატურა", adr: "ADR", none: "არა", priceBreakdown: "ფასის დეტალები", estimatedTotal: "სავარაუდო ჯამური ფასი", disclaimer: "ეს არის ავტომატური frontend-შეფასება. საბოლოო ფასი დასტურდება მარშრუტის, დოკუმენტების, საზღვრების, გზის გადასახადებისა და ბაზრის ტარიფის შემოწმების შემდეგ.", contactLine: "დადასტურებული შეთავაზებისთვის დაუკავშირდით ORIENT Logistics-ს.", saveInstruction: "ბეჭდვის ფანჯარაში აირჩიეთ „Save as PDF“.", anonymous: "არ არის მითითებული", summaryPrice: "სავარაუდო ფასი"
    },
    es: {
      clientTitle: "Datos del cliente", clientIntro: "Datos opcionales que aparecerán en la oferta.", company: "Empresa", contactPerson: "Persona de contacto", phone: "Teléfono", email: "E-mail",
      proposalReady: "La oferta está lista", proposalHint: "Ábrela, guárdala como PDF o comparte el resumen.", proposalNumber: "Número de oferta", calculateFirst: "Completa los datos y realiza primero un cálculo válido.", stale: "Los datos cambiaron; vuelve a calcular.",
      view: "Ver oferta", printPdf: "PDF / Imprimir", share: "Compartir", emailDraft: "Preparar e-mail", close: "Cerrar", copied: "Resumen de la oferta copiado.", shareError: "No se pudo compartir. Copia los datos manualmente.", emailSubject: "Oferta de ORIENT Logistics",
      proposal: "OFERTA DE TRANSPORTE", issued: "Fecha de emisión", validUntil: "Válida hasta", validity: "Oferta válida durante 7 días", customer: "Cliente", route: "Ruta", loadingDate: "Fecha de carga", cargoDetails: "Datos de la carga", distance: "Distancia", weight: "Peso", pallets: "Palés / bultos", volume: "Volumen", dimensions: "Dimensiones por bulto", cargoType: "Tipo de carga", urgency: "Urgencia", vehicle: "Vehículo", selectedService: "Servicio seleccionado", optionalServices: "Servicios opcionales", customs: "Apoyo aduanero", insurance: "Seguro", temperature: "Temperatura", adr: "ADR", none: "Ninguno", priceBreakdown: "Desglose del precio", estimatedTotal: "PRECIO TOTAL ESTIMADO", disclaimer: "Es una estimación automática frontend. La oferta final se confirma tras revisar ruta, documentos, fronteras, peajes y tarifa de mercado.", contactLine: "Contacta con ORIENT Logistics para una oferta confirmada.", saveInstruction: "Elige “Guardar como PDF” en el diálogo de impresión.", anonymous: "No indicado", summaryPrice: "Precio estimado"
    },
    fr: {
      clientTitle: "Coordonnées du client", clientIntro: "Informations facultatives affichées sur l’offre.", company: "Entreprise", contactPerson: "Contact", phone: "Téléphone", email: "E-mail",
      proposalReady: "L’offre est prête", proposalHint: "Ouvrez-la, enregistrez-la en PDF ou partagez le résumé.", proposalNumber: "Numéro de l’offre", calculateFirst: "Complétez les données et calculez d’abord une estimation valide.", stale: "Les données ont changé — recalculez l’offre.",
      view: "Voir l’offre", printPdf: "PDF / Imprimer", share: "Partager", emailDraft: "Préparer l’e-mail", close: "Fermer", copied: "Résumé de l’offre copié.", shareError: "Le partage a échoué. Copiez les données manuellement.", emailSubject: "Offre ORIENT Logistics",
      proposal: "OFFRE DE TRANSPORT", issued: "Date d’émission", validUntil: "Valable jusqu’au", validity: "Offre valable 7 jours", customer: "Client", route: "Itinéraire", loadingDate: "Date de chargement", cargoDetails: "Détails du fret", distance: "Distance", weight: "Poids", pallets: "Palettes / colis", volume: "Volume", dimensions: "Dimensions par colis", cargoType: "Type de fret", urgency: "Urgence", vehicle: "Véhicule", selectedService: "Service sélectionné", optionalServices: "Services optionnels", customs: "Assistance douanière", insurance: "Assurance", temperature: "Température", adr: "ADR", none: "Aucun", priceBreakdown: "Détail du prix", estimatedTotal: "PRIX TOTAL ESTIMÉ", disclaimer: "Il s’agit d’une estimation automatique frontend. L’offre finale est confirmée après contrôle de la route, des documents, des frontières, des péages et du tarif du marché.", contactLine: "Contactez ORIENT Logistics pour une offre confirmée.", saveInstruction: "Choisissez « Enregistrer au format PDF » dans la fenêtre d’impression.", anonymous: "Non renseigné", summaryPrice: "Prix estimé"
    }
  };

  const localeByLanguage = { tk: "tk-TM", ru: "ru-RU", en: "en-GB", pl: "pl-PL", de: "de-DE", ka: "ka-GE", es: "es-ES", fr: "fr-FR" };
  const language = () => dictionary[document.documentElement.lang] ? document.documentElement.lang : "tk";
  const t = key => dictionary[language()][key] || dictionary.en[key] || key;
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

  const clientDetails = document.createElement("details");
  clientDetails.className = "quote-client-details";
  clientDetails.innerHTML = `
    <summary><span><strong data-proposal-i18n="clientTitle"></strong><small data-proposal-i18n="clientIntro"></small></span><i aria-hidden="true"></i></summary>
    <div class="quote-client-grid">
      <label><span data-proposal-i18n="company"></span><input id="quoteClientCompany" type="text" maxlength="100" autocomplete="organization" /></label>
      <label><span data-proposal-i18n="contactPerson"></span><input id="quoteClientName" type="text" maxlength="100" autocomplete="name" /></label>
      <label><span data-proposal-i18n="phone"></span><input id="quoteClientPhone" type="tel" maxlength="40" autocomplete="tel" /></label>
      <label><span data-proposal-i18n="email"></span><input id="quoteClientEmail" type="email" maxlength="120" autocomplete="email" /></label>
    </div>`;
  professionalDetails.insertAdjacentElement("afterend", clientDetails);

  const actions = document.createElement("section");
  actions.className = "quote-proposal-actions";
  actions.innerHTML = `
    <div class="quote-proposal-copy">
      <span data-proposal-i18n="proposalReady"></span>
      <strong><small data-proposal-i18n="proposalNumber"></small> <b id="quoteProposalReference">—</b></strong>
      <p data-proposal-i18n="proposalHint"></p>
    </div>
    <div class="quote-proposal-buttons">
      <button class="btn btn-ghost" type="button" id="quoteProposalView" data-proposal-i18n="view"></button>
      <button class="btn btn-primary" type="button" id="quoteProposalPrint" data-proposal-i18n="printPdf"></button>
      <button class="btn btn-ghost" type="button" id="quoteProposalShare" data-proposal-i18n="share"></button>
      <button class="btn btn-ghost" type="button" id="quoteProposalEmail" data-proposal-i18n="emailDraft"></button>
    </div>
    <p class="quote-proposal-status" id="quoteProposalStatus" aria-live="polite"></p>`;
  professionalResult.insertAdjacentElement("afterend", actions);

  const dialog = document.createElement("dialog");
  dialog.className = "quote-proposal-dialog";
  dialog.id = "quoteProposalDialog";
  dialog.setAttribute("aria-label", "Transport quotation");
  dialog.innerHTML = `
    <div class="quote-proposal-dialog-shell">
      <button class="quote-proposal-close" type="button" id="quoteProposalClose" aria-label="Close">×</button>
      <div id="quoteProposalPreview"></div>
      <div class="quote-proposal-dialog-actions">
        <button class="btn btn-primary" type="button" id="quoteProposalDialogPrint" data-proposal-i18n="printPdf"></button>
        <button class="btn btn-ghost" type="button" id="quoteProposalDialogShare" data-proposal-i18n="share"></button>
        <button class="btn btn-ghost" type="button" id="quoteProposalDialogEmail" data-proposal-i18n="emailDraft"></button>
        <button class="btn btn-ghost" type="button" id="quoteProposalDialogClose" data-proposal-i18n="close"></button>
      </div>
      <p class="quote-proposal-save-hint" data-proposal-i18n="saveInstruction"></p>
    </div>`;
  document.body.appendChild(dialog);

  const printSheet = document.createElement("div");
  printSheet.id = "quoteProposalPrintSheet";
  printSheet.className = "quote-proposal-print-sheet";
  printSheet.setAttribute("aria-hidden", "true");
  document.body.appendChild(printSheet);

  const fields = {
    company: document.getElementById("quoteClientCompany"), name: document.getElementById("quoteClientName"), phone: document.getElementById("quoteClientPhone"), email: document.getElementById("quoteClientEmail"),
    reference: document.getElementById("quoteProposalReference"), status: document.getElementById("quoteProposalStatus"), preview: document.getElementById("quoteProposalPreview"), error: document.getElementById("quoteProError")
  };

  let latest = null;
  let lastFingerprint = "";
  let lastTrigger = null;
  let quoteIsStale = false;

  function formatDate(value) {
    const date = value instanceof Date ? value : new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value || "—";
    return new Intl.DateTimeFormat(localeByLanguage[language()] || "en-GB", { year: "numeric", month: "long", day: "numeric" }).format(date);
  }

  function makeReference() {
    const now = new Date();
    const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `OR-${date}-${suffix}`;
  }

  function selectedText(selector) {
    const element = document.querySelector(selector);
    return element?.selectedOptions?.[0]?.textContent?.trim() || element?.value || "—";
  }

  function cleanText(value) {
    const text = String(value || "").trim();
    return text || t("anonymous");
  }

  function currentSnapshot() {
    const price = priceResult.querySelector("strong")?.textContent?.trim();
    if (!price || price === "—" || !fields.error?.hidden) return null;

    const routeInputs = originalGrid.querySelectorAll('input[type="text"]');
    const from = routeInputs[0]?.value?.trim() || document.getElementById("routeFromValue")?.textContent?.trim() || "—";
    const to = routeInputs[1]?.value?.trim() || document.getElementById("routeToValue")?.textContent?.trim() || "—";
    const issueDate = new Date();
    const validDate = new Date(issueDate.getFullYear(), issueDate.getMonth(), issueDate.getDate() + 7);
    const breakdown = Array.from(document.querySelectorAll("#quoteBreakdownLines .quote-pro-line")).map(line => ({ label: line.querySelector("span")?.textContent?.trim() || "", value: line.querySelector("strong")?.textContent?.trim() || "" })).filter(line => line.label && line.value);

    const snapshot = {
      issueDate, validDate,
      client: { company: cleanText(fields.company.value), name: cleanText(fields.name.value), phone: cleanText(fields.phone.value), email: cleanText(fields.email.value) },
      from, to,
      distance: `${document.getElementById("distance")?.value || "—"} km`, weight: `${document.getElementById("weight")?.value || "—"} t`,
      pallets: document.getElementById("palletCount")?.value || "—", volume: document.getElementById("calculatedVolume")?.textContent?.trim() || document.getElementById("cargoVolume")?.textContent?.trim() || "—",
      dimensions: `${document.getElementById("cargoLength")?.value || "—"} × ${document.getElementById("cargoWidth")?.value || "—"} × ${document.getElementById("cargoHeight")?.value || "—"} cm`,
      loadingDate: document.getElementById("loadingDate")?.value || "—", cargoType: selectedText("#cargoType"), urgency: selectedText("#urgency"), vehicle: document.getElementById("calculatedVehicle")?.textContent?.trim() || selectedText("#vehicleType"),
      selectedService: form.querySelector(".selected-service-chip strong")?.textContent?.trim() || t("none"), customs: document.getElementById("customsSupport")?.checked || false, insurance: document.getElementById("cargoInsurance")?.checked || false,
      declaredValue: document.getElementById("declaredValue")?.value || "", tempMin: document.getElementById("tempMin")?.value || "", tempMax: document.getElementById("tempMax")?.value || "", unNumber: document.getElementById("unNumber")?.value?.trim() || "", adrClass: document.getElementById("adrClass")?.value?.trim() || "", packingGroup: document.getElementById("packingGroup")?.value || "",
      breakdown, price
    };

    const fingerprint = JSON.stringify({ from: snapshot.from, to: snapshot.to, distance: snapshot.distance, weight: snapshot.weight, pallets: snapshot.pallets, volume: snapshot.volume, dimensions: snapshot.dimensions, loadingDate: snapshot.loadingDate, cargoType: snapshot.cargoType, urgency: snapshot.urgency, vehicle: snapshot.vehicle, selectedService: snapshot.selectedService, customs: snapshot.customs, insurance: snapshot.insurance, declaredValue: snapshot.declaredValue, tempMin: snapshot.tempMin, tempMax: snapshot.tempMax, unNumber: snapshot.unNumber, adrClass: snapshot.adrClass, packingGroup: snapshot.packingGroup, price: snapshot.price, breakdown: snapshot.breakdown });
    if (fingerprint !== lastFingerprint || !latest?.reference) { snapshot.reference = makeReference(); lastFingerprint = fingerprint; }
    else snapshot.reference = latest.reference;
    return snapshot;
  }

  function optionalRows(snapshot) {
    const rows = [];
    if (snapshot.customs) rows.push([t("customs"), "✓"]);
    if (snapshot.insurance) rows.push([t("insurance"), snapshot.declaredValue ? `€${snapshot.declaredValue}` : "✓"]);
    if (snapshot.tempMin || snapshot.tempMax) rows.push([t("temperature"), `${snapshot.tempMin || "—"}…${snapshot.tempMax || "—"} °C`]);
    if (snapshot.unNumber || snapshot.adrClass || snapshot.packingGroup) rows.push([t("adr"), `${snapshot.unNumber || "—"} · ${snapshot.adrClass || "—"} · PG ${snapshot.packingGroup || "—"}`]);
    return rows;
  }

  function dataRow(label, value) { return `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`; }

  function proposalHtml(snapshot) {
    const company = window.ORIENT_CONFIG?.companyName || "ORIENT Logistics";
    const companyPhone = window.ORIENT_CONFIG?.phone || "+993 00 00 00 00";
    const companyEmail = window.ORIENT_CONFIG?.email || "dispatch@orientlogistics.example";
    const optional = optionalRows(snapshot);
    const breakdown = snapshot.breakdown.length ? snapshot.breakdown.map(line => dataRow(line.label, line.value)).join("") : dataRow(t("priceBreakdown"), snapshot.price);

    return `<article class="quote-document">
      <header class="quote-document-header"><div class="quote-document-brand"><span class="quote-document-mark">O</span><div><strong>${escapeHtml(company)}</strong><small>EUROPE · CIS · CENTRAL ASIA</small></div></div><div class="quote-document-ref"><span>${escapeHtml(t("proposal"))}</span><strong>${escapeHtml(snapshot.reference)}</strong><small>${escapeHtml(t("validity"))}</small></div></header>
      <section class="quote-document-meta">${dataRow(t("issued"), formatDate(snapshot.issueDate))}${dataRow(t("validUntil"), formatDate(snapshot.validDate))}${dataRow(t("loadingDate"), formatDate(snapshot.loadingDate))}</section>
      <section class="quote-document-section"><h2>${escapeHtml(t("customer"))}</h2><div class="quote-document-client">${dataRow(t("company"), snapshot.client.company)}${dataRow(t("contactPerson"), snapshot.client.name)}${dataRow(t("phone"), snapshot.client.phone)}${dataRow(t("email"), snapshot.client.email)}</div></section>
      <section class="quote-document-route"><div><span>A</span><small>${escapeHtml(t("route"))}</small><strong>${escapeHtml(snapshot.from)}</strong></div><i aria-hidden="true">→</i><div><span>B</span><small>${escapeHtml(t("route"))}</small><strong>${escapeHtml(snapshot.to)}</strong></div><b>${escapeHtml(snapshot.distance)}</b></section>
      <section class="quote-document-section"><h2>${escapeHtml(t("cargoDetails"))}</h2><div class="quote-document-grid">${dataRow(t("weight"), snapshot.weight)}${dataRow(t("pallets"), snapshot.pallets)}${dataRow(t("volume"), snapshot.volume)}${dataRow(t("dimensions"), snapshot.dimensions)}${dataRow(t("cargoType"), snapshot.cargoType)}${dataRow(t("urgency"), snapshot.urgency)}${dataRow(t("vehicle"), snapshot.vehicle)}${dataRow(t("selectedService"), snapshot.selectedService)}</div></section>
      <section class="quote-document-section"><h2>${escapeHtml(t("optionalServices"))}</h2><div class="quote-document-grid quote-document-options">${optional.length ? optional.map(([label, value]) => dataRow(label, value)).join("") : dataRow(t("optionalServices"), t("none"))}</div></section>
      <section class="quote-document-pricing"><div class="quote-document-breakdown"><h2>${escapeHtml(t("priceBreakdown"))}</h2>${breakdown}</div><div class="quote-document-total"><span>${escapeHtml(t("estimatedTotal"))}</span><strong>${escapeHtml(snapshot.price)}</strong></div></section>
      <footer class="quote-document-footer"><p>${escapeHtml(t("disclaimer"))}</p><div><strong>${escapeHtml(t("contactLine"))}</strong><span>${escapeHtml(companyPhone)} · ${escapeHtml(companyEmail)}</span></div></footer>
    </article>`;
  }

  function refreshSnapshot({ allowStale = false } = {}) {
    if (quoteIsStale && !allowStale) { latest = null; actions.classList.add("is-stale"); fields.reference.textContent = "—"; fields.status.textContent = t("stale"); return null; }
    const snapshot = currentSnapshot();
    latest = snapshot;
    actions.classList.toggle("is-disabled", !snapshot);
    quoteIsStale = false;
    actions.classList.remove("is-stale");
    fields.reference.textContent = snapshot?.reference || "—";
    fields.status.textContent = snapshot ? "" : t("calculateFirst");
    if (snapshot) { const html = proposalHtml(snapshot); fields.preview.innerHTML = html; printSheet.innerHTML = html; }
    return snapshot;
  }

  function requireSnapshot() { const snapshot = refreshSnapshot(); if (snapshot) return snapshot; form.requestSubmit(); return null; }
  function openProposal(trigger) { const snapshot = requireSnapshot(); if (!snapshot) return; lastTrigger = trigger || document.activeElement; fields.preview.innerHTML = proposalHtml(snapshot); if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", ""); requestAnimationFrame(() => document.getElementById("quoteProposalClose")?.focus()); }
  function closeProposal() { if (typeof dialog.close === "function" && dialog.open) dialog.close(); else dialog.removeAttribute("open"); }
  function printProposal() { const snapshot = requireSnapshot(); if (!snapshot) return; printSheet.innerHTML = proposalHtml(snapshot); document.body.classList.add("quote-proposal-printing"); window.setTimeout(() => window.print(), 60); }
  function summaryText(snapshot) { return [`${t("proposalNumber")}: ${snapshot.reference}`, `${t("route")}: ${snapshot.from} → ${snapshot.to}`, `${t("distance")}: ${snapshot.distance}`, `${t("loadingDate")}: ${formatDate(snapshot.loadingDate)}`, `${t("vehicle")}: ${snapshot.vehicle}`, `${t("summaryPrice")}: ${snapshot.price}`, t("disclaimer")].join("\n"); }

  async function shareProposal() {
    const snapshot = requireSnapshot(); if (!snapshot) return; const text = summaryText(snapshot);
    try {
      if (navigator.share) { await navigator.share({ title: `${t("proposal")} ${snapshot.reference}`, text }); return; }
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else { const area = document.createElement("textarea"); area.value = text; area.style.position = "fixed"; area.style.opacity = "0"; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
      fields.status.textContent = t("copied");
    } catch { fields.status.textContent = t("shareError"); }
  }

  function emailProposal() {
    const snapshot = requireSnapshot(); if (!snapshot) return;
    const recipient = window.ORIENT_CONFIG?.email || "dispatch@orientlogistics.example";
    const subject = `${t("emailSubject")} · ${snapshot.reference}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summaryText(snapshot))}`;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-proposal-i18n]").forEach(element => { const value = t(element.dataset.proposalI18n); if (value) element.textContent = value; });
    document.getElementById("quoteProposalClose")?.setAttribute("aria-label", t("close"));
    if (latest) { fields.preview.innerHTML = proposalHtml(latest); printSheet.innerHTML = proposalHtml(latest); }
  }

  const viewButton = document.getElementById("quoteProposalView");
  const printButton = document.getElementById("quoteProposalPrint");
  const shareButton = document.getElementById("quoteProposalShare");
  const emailButton = document.getElementById("quoteProposalEmail");

  viewButton.addEventListener("click", () => openProposal(viewButton));
  printButton.addEventListener("click", printProposal);
  shareButton.addEventListener("click", shareProposal);
  emailButton.addEventListener("click", emailProposal);
  document.getElementById("quoteProposalClose").addEventListener("click", closeProposal);
  document.getElementById("quoteProposalDialogClose").addEventListener("click", closeProposal);
  document.getElementById("quoteProposalDialogPrint").addEventListener("click", printProposal);
  document.getElementById("quoteProposalDialogShare").addEventListener("click", shareProposal);
  document.getElementById("quoteProposalDialogEmail").addEventListener("click", emailProposal);
  dialog.addEventListener("click", event => { if (event.target === dialog) closeProposal(); });
  dialog.addEventListener("close", () => lastTrigger?.focus?.({ preventScroll: true }));

  form.addEventListener("submit", () => window.setTimeout(() => { quoteIsStale = false; refreshSnapshot(); }, 0));
  form.addEventListener("input", event => {
    if (clientDetails.contains(event.target)) { if (latest) latest.client = { company: cleanText(fields.company.value), name: cleanText(fields.name.value), phone: cleanText(fields.phone.value), email: cleanText(fields.email.value) }; return; }
    latest = null; quoteIsStale = true; actions.classList.add("is-stale"); fields.status.textContent = t("stale");
  });
  form.addEventListener("change", event => {
    if (clientDetails.contains(event.target)) return;
    latest = null; quoteIsStale = true; actions.classList.add("is-stale"); fields.status.textContent = t("stale");
  });

  window.addEventListener("afterprint", () => document.body.classList.remove("quote-proposal-printing"));
  new MutationObserver(applyTranslations).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  applyTranslations();
  refreshSnapshot();
})();
