/* ORIENT Logistics — Phase 11 order intake */
(() => {
  "use strict";

  const form = document.getElementById("quoteForm");
  const proposalActions = form?.querySelector(".quote-proposal-actions");
  const proposalReference = document.getElementById("quoteProposalReference");
  const priceResult = document.getElementById("priceResult");
  const originalGrid = form?.querySelector(".form-grid");

  if (!form || !proposalActions || !proposalReference || !priceResult || !originalGrid) return;

  const config = window.ORIENT_CONFIG?.orderIntake || {};
  const dictionary = {
    tk: {
      title: "Sargydy kompaniýa iberiň", intro: "Hasaplanan teklibi müşderi maglumatlary bilen birlikde logistika toparyna ugradyň.", consent: "Maglumatlarymyň sargydy işlemek we meniň bilen habarlaşmak üçin ulanylmagyna razy.", send: "Sargydy iber", sending: "Iberilýär…", retry: "Gaýtadan synanyş", missingContact: "Adyňyzy, telefon belgiňizi we dogry e-mail salgyňyzy giriziň.", missingQuote: "Ilki ýük maglumatlaryny dogry dolduryp, bahany hasaplaň.", consentRequired: "Sargydy ibermek üçin maglumatlaryň ulanylmagyna razylyk beriň.", notConfigured: "Sargyt backend-i entek sazlanmady. Google Apps Script URL-ni config.js faýlyna goşmaly.", sentTitle: "Sargydyňyz kabul edildi", sentText: "Sargyt logistika toparyna ugradyldy. Logist gysga wagtda habarlaşar.", queuedTitle: "Sargyt ugradyldy", queuedText: "Sorag serwere ugradyldy, ýöne brauzer tassyklama jogabyny okap bilmedi. Sargyt belgisini saklaň.", orderNumber: "Sargyt belgisi", close: "Ýap", failed: "Sargydy ibermek başartmady. Interneti ýa-da backend sazlamasyny barlap, gaýtadan synanyşyň.", duplicate: "Bu maglumatlar ýakynda iberildi. Öňki sargyt belgisi görkezilýär.", invalidPhone: "Telefon belgisi azyndan 7 sanly bolmaly.", invalidEmail: "Dogry e-mail salgysyny giriziň.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "Tokenler we gizlin sazlamalar diňe Google Apps Script Properties-de saklanýar."
    },
    ru: {
      title: "Отправить заявку компании", intro: "Передайте рассчитанное предложение и данные клиента логистической команде.", consent: "Я согласен на использование данных для обработки заявки и связи со мной.", send: "Отправить заявку", sending: "Отправляется…", retry: "Повторить", missingContact: "Укажите имя, телефон и корректный e-mail.", missingQuote: "Сначала заполните данные груза и выполните корректный расчёт.", consentRequired: "Подтвердите согласие на обработку данных.", notConfigured: "Backend заявок ещё не настроен. Добавьте URL Google Apps Script в config.js.", sentTitle: "Заявка принята", sentText: "Заявка отправлена логистической команде. Логист скоро свяжется с вами.", queuedTitle: "Заявка отправлена", queuedText: "Запрос отправлен, но браузер не смог прочитать подтверждение сервера. Сохраните номер заявки.", orderNumber: "Номер заявки", close: "Закрыть", failed: "Не удалось отправить заявку. Проверьте интернет или настройки backend и повторите.", duplicate: "Такая заявка уже отправлялась недавно. Показан предыдущий номер.", invalidPhone: "В телефоне должно быть не менее 7 цифр.", invalidEmail: "Введите корректный e-mail.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "Токены и секретные настройки хранятся только в Google Apps Script Properties."
    },
    en: {
      title: "Send the order request", intro: "Submit the calculated quotation and customer details to the logistics team.", consent: "I agree that my details may be used to process this request and contact me.", send: "Send order request", sending: "Sending…", retry: "Try again", missingContact: "Enter your name, phone number and a valid e-mail address.", missingQuote: "Complete the cargo details and calculate a valid quotation first.", consentRequired: "Consent is required before submitting the request.", notConfigured: "The order backend is not configured yet. Add the Google Apps Script URL to config.js.", sentTitle: "Order request accepted", sentText: "The request was delivered to the logistics team. A logistician will contact you shortly.", queuedTitle: "Order request sent", queuedText: "The request was sent, but the browser could not read the server confirmation. Keep the order number.", orderNumber: "Order number", close: "Close", failed: "The request could not be sent. Check the connection or backend configuration and try again.", duplicate: "The same details were submitted recently. The previous order number is shown.", invalidPhone: "The phone number must contain at least 7 digits.", invalidEmail: "Enter a valid e-mail address.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "Tokens and secret settings stay only in Google Apps Script Properties."
    },
    pl: {
      title: "Wyślij zlecenie", intro: "Prześlij wycenę i dane klienta do zespołu logistycznego.", consent: "Zgadzam się na użycie danych do obsługi zlecenia i kontaktu.", send: "Wyślij zlecenie", sending: "Wysyłanie…", retry: "Spróbuj ponownie", missingContact: "Podaj imię, telefon i prawidłowy e-mail.", missingQuote: "Najpierw uzupełnij dane ładunku i oblicz poprawną wycenę.", consentRequired: "Zgoda jest wymagana przed wysłaniem.", notConfigured: "Backend nie jest skonfigurowany. Dodaj URL Google Apps Script w config.js.", sentTitle: "Zlecenie przyjęte", sentText: "Zlecenie przekazano zespołowi logistycznemu.", queuedTitle: "Zlecenie wysłane", queuedText: "Żądanie wysłano, ale przeglądarka nie odczytała potwierdzenia. Zachowaj numer.", orderNumber: "Numer zlecenia", close: "Zamknij", failed: "Nie udało się wysłać zlecenia. Sprawdź połączenie lub konfigurację.", duplicate: "Takie dane wysłano niedawno. Pokazano poprzedni numer.", invalidPhone: "Telefon musi zawierać co najmniej 7 cyfr.", invalidEmail: "Podaj prawidłowy e-mail.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "Tokeny i sekrety są przechowywane wyłącznie w Google Apps Script Properties."
    },
    de: {
      title: "Auftrag anfragen", intro: "Senden Sie Angebot und Kundendaten an das Logistikteam.", consent: "Ich stimme der Nutzung meiner Daten zur Bearbeitung und Kontaktaufnahme zu.", send: "Anfrage senden", sending: "Wird gesendet…", retry: "Erneut versuchen", missingContact: "Name, Telefon und gültige E-Mail eingeben.", missingQuote: "Zuerst Frachtdaten ausfüllen und korrekt berechnen.", consentRequired: "Die Zustimmung ist vor dem Senden erforderlich.", notConfigured: "Das Backend ist noch nicht konfiguriert. Google-Apps-Script-URL in config.js eintragen.", sentTitle: "Anfrage angenommen", sentText: "Die Anfrage wurde an das Logistikteam gesendet.", queuedTitle: "Anfrage gesendet", queuedText: "Die Anfrage wurde gesendet, die Bestätigung konnte aber nicht gelesen werden. Nummer aufbewahren.", orderNumber: "Auftragsnummer", close: "Schließen", failed: "Senden fehlgeschlagen. Verbindung oder Backend prüfen.", duplicate: "Diese Daten wurden kürzlich gesendet. Die vorherige Nummer wird angezeigt.", invalidPhone: "Die Telefonnummer muss mindestens 7 Ziffern enthalten.", invalidEmail: "Gültige E-Mail eingeben.", backendStatus: "Google Sheets · E-Mail · Telegram", privacy: "Token und geheime Einstellungen bleiben nur in Google Apps Script Properties."
    },
    ka: {
      title: "შეკვეთის მოთხოვნის გაგზავნა", intro: "გაგზავნეთ გამოთვლილი შეთავაზება და კლიენტის მონაცემები ლოჯისტიკის გუნდთან.", consent: "ვეთანხმები მონაცემების გამოყენებას მოთხოვნის დასამუშავებლად და დასაკავშირებლად.", send: "მოთხოვნის გაგზავნა", sending: "იგზავნება…", retry: "ხელახლა ცდა", missingContact: "შეიყვანეთ სახელი, ტელეფონი და სწორი e-mail.", missingQuote: "ჯერ შეავსეთ ტვირთის მონაცემები და გამოთვალეთ სწორი ფასი.", consentRequired: "გაგზავნამდე საჭიროა თანხმობა.", notConfigured: "Backend ჯერ არ არის გამართული. დაამატეთ Google Apps Script URL config.js-ში.", sentTitle: "მოთხოვნა მიღებულია", sentText: "მოთხოვნა გადაეცა ლოჯისტიკის გუნდს.", queuedTitle: "მოთხოვნა გაგზავნილია", queuedText: "მოთხოვნა გაიგზავნა, თუმცა დადასტურება ვერ წაიკითხა ბრაუზერმა. შეინახეთ ნომერი.", orderNumber: "შეკვეთის ნომერი", close: "დახურვა", failed: "გაგზავნა ვერ მოხერხდა. შეამოწმეთ კავშირი ან backend.", duplicate: "იგივე მონაცემები ცოტა ხნის წინ გაიგზავნა. ნაჩვენებია წინა ნომერი.", invalidPhone: "ტელეფონი უნდა შეიცავდეს მინიმუმ 7 ციფრს.", invalidEmail: "შეიყვანეთ სწორი e-mail.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "ტოკენები და საიდუმლო პარამეტრები ინახება მხოლოდ Google Apps Script Properties-ში."
    },
    es: {
      title: "Enviar solicitud de transporte", intro: "Envíe la cotización y los datos del cliente al equipo logístico.", consent: "Acepto el uso de mis datos para procesar la solicitud y contactarme.", send: "Enviar solicitud", sending: "Enviando…", retry: "Reintentar", missingContact: "Introduzca nombre, teléfono y un e-mail válido.", missingQuote: "Complete la carga y calcule una cotización válida primero.", consentRequired: "Debe aceptar el tratamiento de datos.", notConfigured: "El backend aún no está configurado. Añada la URL de Google Apps Script en config.js.", sentTitle: "Solicitud aceptada", sentText: "La solicitud se envió al equipo logístico.", queuedTitle: "Solicitud enviada", queuedText: "Se envió la solicitud, pero el navegador no pudo leer la confirmación. Guarde el número.", orderNumber: "Número de solicitud", close: "Cerrar", failed: "No se pudo enviar. Revise la conexión o la configuración.", duplicate: "Los mismos datos se enviaron recientemente. Se muestra el número anterior.", invalidPhone: "El teléfono debe contener al menos 7 dígitos.", invalidEmail: "Introduzca un e-mail válido.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "Los tokens y secretos se guardan solo en Google Apps Script Properties."
    },
    fr: {
      title: "Envoyer la demande", intro: "Envoyez le devis calculé et les coordonnées au service logistique.", consent: "J’accepte l’utilisation de mes données pour traiter la demande et me contacter.", send: "Envoyer la demande", sending: "Envoi…", retry: "Réessayer", missingContact: "Saisissez le nom, le téléphone et un e-mail valide.", missingQuote: "Complétez le fret et calculez d’abord un devis valide.", consentRequired: "Le consentement est requis avant l’envoi.", notConfigured: "Le backend n’est pas encore configuré. Ajoutez l’URL Google Apps Script dans config.js.", sentTitle: "Demande acceptée", sentText: "La demande a été transmise à l’équipe logistique.", queuedTitle: "Demande envoyée", queuedText: "La demande a été envoyée, mais la confirmation n’a pas pu être lue. Conservez le numéro.", orderNumber: "Numéro de demande", close: "Fermer", failed: "Échec de l’envoi. Vérifiez la connexion ou la configuration.", duplicate: "Ces données ont été envoyées récemment. Le numéro précédent est affiché.", invalidPhone: "Le téléphone doit contenir au moins 7 chiffres.", invalidEmail: "Saisissez un e-mail valide.", backendStatus: "Google Sheets · E-mail · Telegram", privacy: "Les jetons et paramètres secrets restent uniquement dans Google Apps Script Properties."
    }
  };

  const language = () => dictionary[document.documentElement.lang] ? document.documentElement.lang : "tk";
  const t = key => dictionary[language()][key] || dictionary.en[key] || key;
  const clean = value => String(value ?? "").trim();
  const selectedText = selector => {
    const element = document.querySelector(selector);
    return clean(element?.selectedOptions?.[0]?.textContent || element?.value || "—");
  };

  const panel = document.createElement("section");
  panel.className = "order-intake-panel";
  panel.innerHTML = `
    <div class="order-intake-head">
      <div><span data-order-i18n="backendStatus"></span><h3 data-order-i18n="title"></h3><p data-order-i18n="intro"></p></div>
      <span class="order-intake-shield" aria-hidden="true">✓</span>
    </div>
    <label class="order-intake-consent"><input id="orderConsent" type="checkbox" /><span data-order-i18n="consent"></span></label>
    <label class="order-intake-honeypot" aria-hidden="true">Website<input id="orderWebsite" type="text" tabindex="-1" autocomplete="off" /></label>
    <div class="order-intake-actions">
      <button class="btn btn-primary" type="button" id="orderSubmitButton" data-order-i18n="send"></button>
      <small data-order-i18n="privacy"></small>
    </div>
    <p class="order-intake-status" id="orderIntakeStatus" aria-live="polite"></p>`;
  proposalActions.insertAdjacentElement("afterend", panel);

  const dialog = document.createElement("dialog");
  dialog.className = "order-success-dialog";
  dialog.id = "orderSuccessDialog";
  dialog.innerHTML = `
    <div class="order-success-shell">
      <button class="order-success-close" id="orderSuccessClose" type="button" aria-label="Close">×</button>
      <div class="order-success-icon" aria-hidden="true">✓</div>
      <span id="orderSuccessEyebrow"></span>
      <h3 id="orderSuccessTitle"></h3>
      <p id="orderSuccessText"></p>
      <div class="order-success-reference"><span data-order-i18n="orderNumber"></span><strong id="orderSuccessReference">—</strong></div>
      <button class="btn btn-primary full" id="orderSuccessDone" type="button" data-order-i18n="close"></button>
    </div>`;
  document.body.appendChild(dialog);

  const fields = {
    company: document.getElementById("quoteClientCompany"),
    name: document.getElementById("quoteClientName"),
    phone: document.getElementById("quoteClientPhone"),
    email: document.getElementById("quoteClientEmail"),
    consent: document.getElementById("orderConsent"),
    website: document.getElementById("orderWebsite"),
    button: document.getElementById("orderSubmitButton"),
    status: document.getElementById("orderIntakeStatus"),
    successEyebrow: document.getElementById("orderSuccessEyebrow"),
    successTitle: document.getElementById("orderSuccessTitle"),
    successText: document.getElementById("orderSuccessText"),
    successReference: document.getElementById("orderSuccessReference")
  };

  let isSubmitting = false;
  let lastTrigger = null;
  const storageKey = "orient-order-last-submission";

  function makeOrderId() {
    const now = new Date();
    const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    let randomValue = Math.floor(Math.random() * 1e9);
    if (globalThis.crypto?.getRandomValues) {
      const values = new Uint32Array(1);
      globalThis.crypto.getRandomValues(values);
      randomValue = values[0];
    }
    const suffix = randomValue.toString(36).slice(-6).toUpperCase().padStart(6, "0");
    return `OR-REQ-${date}-${suffix}`;
  }

  function quotePayload() {
    const price = clean(priceResult.querySelector("strong")?.textContent);
    const quoteError = document.getElementById("quoteProError");
    if (!price || price === "—" || (quoteError && !quoteError.hidden)) return null;

    const routeInputs = originalGrid.querySelectorAll('input[type="text"]');
    const breakdown = Array.from(document.querySelectorAll("#quoteBreakdownLines .quote-pro-line")).map(line => ({
      label: clean(line.querySelector("span")?.textContent),
      value: clean(line.querySelector("strong")?.textContent)
    })).filter(line => line.label && line.value);

    return {
      quoteReference: clean(proposalReference.textContent),
      from: clean(routeInputs[0]?.value || document.getElementById("routeFromValue")?.textContent),
      to: clean(routeInputs[1]?.value || document.getElementById("routeToValue")?.textContent),
      distanceKm: Number(document.getElementById("distance")?.value || 0),
      weightT: Number(document.getElementById("weight")?.value || 0),
      pallets: Number(document.getElementById("palletCount")?.value || 0),
      volumeM3: clean(document.getElementById("calculatedVolume")?.textContent || document.getElementById("cargoVolume")?.textContent),
      dimensionsCm: `${document.getElementById("cargoLength")?.value || "—"} × ${document.getElementById("cargoWidth")?.value || "—"} × ${document.getElementById("cargoHeight")?.value || "—"}`,
      loadingDate: clean(document.getElementById("loadingDate")?.value),
      cargoType: selectedText("#cargoType"),
      urgency: selectedText("#urgency"),
      vehicle: clean(document.getElementById("calculatedVehicle")?.textContent || selectedText("#vehicleType")),
      selectedService: clean(form.querySelector(".selected-service-chip strong")?.textContent) || "—",
      customs: Boolean(document.getElementById("customsSupport")?.checked),
      insurance: Boolean(document.getElementById("cargoInsurance")?.checked),
      declaredValue: Number(document.getElementById("declaredValue")?.value || 0),
      temperature: { min: clean(document.getElementById("tempMin")?.value), max: clean(document.getElementById("tempMax")?.value) },
      adr: { unNumber: clean(document.getElementById("unNumber")?.value), class: clean(document.getElementById("adrClass")?.value), packingGroup: clean(document.getElementById("packingGroup")?.value) },
      price,
      breakdown
    };
  }

  function validate() {
    const name = clean(fields.name?.value);
    const phone = clean(fields.phone?.value);
    const email = clean(fields.email?.value);
    if (!name || !phone || !email) return t("missingContact");
    if (phone.replace(/\D/g, "").length < 7) return t("invalidPhone");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return t("invalidEmail");
    if (!fields.consent.checked) return t("consentRequired");
    if (!quotePayload()) return t("missingQuote");
    if (!clean(config.endpoint)) return t("notConfigured");
    return "";
  }

  function payloadFingerprint(payload) {
    let hash = 2166136261;
    const text = JSON.stringify({ client: payload.client, quote: payload.quote, source: payload.source });
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
  }

  function readLastSubmission() {
    try { return JSON.parse(localStorage.getItem(storageKey) || "null"); }
    catch { return null; }
  }

  function saveLastSubmission(data) {
    try { localStorage.setItem(storageKey, JSON.stringify(data)); }
    catch { /* storage can be unavailable */ }
  }

  function setBusy(busy) {
    isSubmitting = busy;
    fields.button.disabled = busy;
    fields.button.textContent = busy ? t("sending") : t("send");
    panel.classList.toggle("is-sending", busy);
  }

  function showSuccess(orderId, confirmed = true, duplicate = false) {
    fields.successEyebrow.textContent = duplicate ? t("duplicate") : t("backendStatus");
    fields.successTitle.textContent = confirmed ? t("sentTitle") : t("queuedTitle");
    fields.successText.textContent = duplicate ? t("duplicate") : confirmed ? t("sentText") : t("queuedText");
    fields.successReference.textContent = orderId;
    lastTrigger = fields.button;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    requestAnimationFrame(() => document.getElementById("orderSuccessDone")?.focus());
  }

  function closeSuccess() {
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  async function submitOrder() {
    if (isSubmitting) return;
    fields.status.textContent = "";
    form.requestSubmit();
    await new Promise(resolve => window.setTimeout(resolve, 30));

    const error = validate();
    if (error) {
      fields.status.textContent = error;
      panel.classList.add("has-error");
      return;
    }

    panel.classList.remove("has-error");
    const quote = quotePayload();
    const orderId = makeOrderId();
    const payload = {
      version: 1,
      orderId,
      submittedAt: new Date().toISOString(),
      language: language(),
      source: "orient-logistics-github-pages",
      pageUrl: location.href,
      website: clean(fields.website.value),
      client: { company: clean(fields.company?.value), name: clean(fields.name.value), phone: clean(fields.phone.value), email: clean(fields.email.value), consent: true },
      quote
    };

    const fingerprint = payloadFingerprint(payload);
    const last = readLastSubmission();
    const duplicateWindow = Number(config.duplicateWindowMs) || 120000;
    if (last?.fingerprint === fingerprint && Date.now() - Number(last.timestamp || 0) < duplicateWindow) {
      fields.status.textContent = t("duplicate");
      showSuccess(last.orderId, true, true);
      return;
    }

    setBusy(true);
    try {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), Number(config.timeoutMs) || 15000);
      let response;
      try {
        response = await fetch(config.endpoint, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
      } finally {
        window.clearTimeout(timer);
      }

      let result = null;
      try { result = await response.json(); }
      catch { result = null; }
      if (!response.ok || (result && result.ok === false)) throw new Error(result?.message || `HTTP ${response.status}`);

      const finalOrderId = clean(result?.orderId) || orderId;
      saveLastSubmission({ fingerprint, orderId: finalOrderId, timestamp: Date.now() });
      fields.status.textContent = "";
      showSuccess(finalOrderId, true, false);
    } catch (errorObject) {
      if (config.allowOpaqueFallback) {
        try {
          await fetch(config.endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
          saveLastSubmission({ fingerprint, orderId, timestamp: Date.now() });
          showSuccess(orderId, false, false);
          return;
        } catch { /* use regular error below */ }
      }
      console.error("ORIENT order submit error:", errorObject);
      fields.status.textContent = t("failed");
      panel.classList.add("has-error");
    } finally {
      setBusy(false);
    }
  }

  function applyTranslations() {
    document.querySelectorAll("[data-order-i18n]").forEach(element => {
      const value = t(element.dataset.orderI18n);
      if (value) element.textContent = value;
    });
    document.getElementById("orderSuccessClose")?.setAttribute("aria-label", t("close"));
    if (!isSubmitting) fields.button.textContent = t("send");
  }

  fields.button.addEventListener("click", submitOrder);
  document.getElementById("orderSuccessClose").addEventListener("click", closeSuccess);
  document.getElementById("orderSuccessDone").addEventListener("click", closeSuccess);
  dialog.addEventListener("click", event => { if (event.target === dialog) closeSuccess(); });
  dialog.addEventListener("close", () => lastTrigger?.focus?.({ preventScroll: true }));
  new MutationObserver(applyTranslations).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  applyTranslations();
})();
