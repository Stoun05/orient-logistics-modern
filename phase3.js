/* ORIENT Logistics — Phase 3 language, accessibility and responsive polish */
(() => {
  "use strict";

  if (!document.querySelector('link[href="phase3.css"]')) {
    document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="phase3.css">');
  }

  const extraLanguages = {
    pl: {
      topbar: "Całodobowe wsparcie dla pilnych transportów", nav_services: "Usługi", nav_coverage: "Zasięg", nav_tracking: "Śledzenie przesyłki", nav_about: "O nas", nav_contact: "Kontakt", nav_quote: "Oblicz koszt",
      hero_eyebrow: "Europa · WNP · Azja Centralna", hero_title: "Nie tylko przewozimy ładunek — <em>zarządzamy całą dostawą.</em>", hero_text: "Jedno centrum obsługi dla FTL i LTL, pilnych transportów AOG, ładunków temperaturowych oraz ADR.", hero_cta: "Poproś o wycenę", hero_track: "Śledź przesyłkę",
      trust_support: "Wsparcie dyspozytora", trust_countries: "Obsługiwanych krajów", trust_ontime: "Dostaw na czas", route_live: "Aktualna trasa", proof_title: "Ładunek zabezpieczony", proof_text: "CMR + ubezpieczenie",
      services_kicker: "Usługi", services_title: "Indywidualne rozwiązanie logistyczne dla każdego ładunku", services_intro: "Dobieramy pojazd i model dostawy do rodzaju ładunku, trasy oraz terminu.",
      service1_title: "Międzynarodowy transport FTL / LTL", service1_text: "Dostawy całopojazdowe i drobnicowe door-to-door w Europie, WNP i Azji Centralnej.", service2_title: "Time Critical / AOG / OBC", service2_text: "Całodobowy transport krytycznych części i dokumentów pod stałym nadzorem.", service3_title: "Transport w kontrolowanej temperaturze", service3_text: "Kontrola od +2°C do +25°C dla farmacji, żywności i produktów wrażliwych.", service4_title: "Towary niebezpieczne ADR", service4_text: "Dokumentacja, opakowanie i specjalistyczny transport zgodny z przepisami międzynarodowymi.", service5_title: "Road Feeder Service", service5_text: "Transport drogowy między terminalami cargo zgodny ze standardami lotniczymi.", learn_more: "Dowiedz się więcej →", custom_kicker: "Zlecenie specjalne", custom_title: "Masz nietypowy ładunek?", custom_text: "Porozmawiaj z logistykiem — wspólnie zaprojektujemy trasę i rozwiązanie.", custom_cta: "Uzyskaj poradę",
      coverage_kicker: "Geografia", coverage_title: "Jedna sieć — dziesiątki krajów", coverage_text: "Nasze centrum dyspozytorskie i sprawdzona sieć partnerów zarządzają stabilnymi trasami między Europą a Azją Centralną.", coverage_cta: "Wyceń trasę",
      tracking_kicker: "Widoczność w czasie rzeczywistym", tracking_title: "Zawsze wiesz, gdzie jest Twój ładunek", tracking_text: "Wpisz kod zlecenia. W wersji demo użyj <strong>OL-2026-0715</strong>.", tracking_button: "Sprawdź", shipment_label: "Zlecenie", shipment_status: "W drodze", step1: "Ładunek odebrany", step2: "Terminal graniczny", step3: "W tranzycie", step3_detail: "Pozostało około 690 km", step4: "Dostawa", step4_detail: "ETA: 16.07 · 18:40",
      quote_kicker: "Szybki kalkulator", quote_title: "Oszacuj koszt transportu", quote_text: "Kalkulator ma charakter demonstracyjny. Ostateczną cenę potwierdzi logistyk po sprawdzeniu trasy i dokumentów.", quote_note: "Cena może nie obejmować opłat drogowych, odpraw celnych i specjalnych zezwoleń.", from: "Miejsce załadunku", to: "Miejsce dostawy", distance: "Odległość (km)", weight: "Waga (tony)", cargo: "Rodzaj ładunku", cargo_standard: "Standardowy", cargo_temp: "Temperaturowy", urgency: "Pilność", urgency_standard: "Standardowa", urgency_express: "Ekspresowa", calculate: "Oblicz", estimated: "Szacunkowy koszt", estimated_note: "Zostaw dane kontaktowe, aby otrzymać dokładną ofertę.",
      about_kicker: "O nas", about_title: "Przejrzystość, szybki kontakt i odpowiedzialność", about_text: "Każde zlecenie prowadzi dedykowany logistyk. Klient otrzymuje statusy, dokumenty i ważne aktualizacje przez jeden punkt kontaktu.", about_item1: "Międzynarodowe ubezpieczenie i dokumentacja CMR", about_item2: "Tylko sprawdzone pojazdy i kierowcy", about_item3: "Statusy 24/7 i wsparcie awaryjne", about_item4: "Zarządzanie procesami zgodne z ISO", years: "lat doświadczenia",
      process_kicker: "Jak działamy", process_title: "Ładunek rusza w 4 krokach", process1: "Zapytanie", process1_text: "Wyślij trasę i parametry ładunku.", process2: "Oferta", process2_text: "Potwierdzamy cenę, pojazd i termin.", process3: "Transport", process3_text: "Odbieramy ładunek i przekazujemy aktualne statusy.", process4: "Dostawa", process4_text: "Bezpiecznie dostarczamy wraz z dokumentacją.",
      contact_kicker: "Gotowy do wysyłki?", contact_title: "Skontaktuj się z logistykiem w ciągu 15 minut", contact_text: "Wyślij trasę — w godzinach pracy odpowiemy możliwie szybko.", contact_button: "Skontaktujcie się ze mną", name: "Imię", phone: "Telefon", email: "E-mail",
      footer_text: "Niezawodne rozwiązania logistyczne między Europą i Azją.", footer_services: "Usługi", footer_company: "Firma", footer_contact: "Kontakt", footer_legal: "Prywatność · Warunki użytkowania",
      track_success: "Przesyłka znaleziona. Aktualny status jest widoczny po prawej stronie.", track_error: "Nie znaleziono kodu demo. Spróbuj OL-2026-0715.", contact_success: "Dziękujemy! Formularz demo został przyjęty. Po podłączeniu backendu wiadomość trafi do opiekuna.",
      skip_content: "Przejdź do głównej treści", hero_status: "Nowe zlecenia przyjmujemy 24/7", breakdown_base: "Stawka podstawowa", breakdown_cargo: "Dopłata za rodzaj ładunku", breakdown_urgency: "Dopłata za pilność", breakdown_total: "Razem", faq_kicker: "FAQ", faq_title: "Najczęściej zadawane pytania", faq_intro: "Najważniejsze informacje, o które najczęściej pytają klienci.", faq_q1: "Jak szybko otrzymam wycenę?", faq_a1: "Standardowe trasy wyceniamy zwykle w 15–30 minut. Bardziej złożone zlecenia mogą wymagać dodatkowego czasu.", faq_q2: "Gdzie mogę śledzić przesyłkę?", faq_a2: "W wersji demo moduł śledzenia znajduje się na stronie głównej. Później można podłączyć portal klienta lub API.", faq_q3: "Czy obsługujecie ADR i ładunki temperaturowe?", faq_a3: "Tak. Oferujemy rozwiązania dla ADR, transportu temperaturowego oraz pilnych zleceń AOG / OBC.", faq_q4: "Czy później można podłączyć backend?", faq_a4: "Tak. Formularz, kalkulator i śledzenie można połączyć z API, pocztą lub CRM."
    },
    de: {
      topbar: "24/7-Unterstützung für zeitkritische Transporte", nav_services: "Leistungen", nav_coverage: "Transportnetz", nav_tracking: "Sendung verfolgen", nav_about: "Über uns", nav_contact: "Kontakt", nav_quote: "Preis berechnen",
      hero_eyebrow: "Europa · GUS · Zentralasien", hero_title: "Wir transportieren nicht nur Fracht — <em>wir steuern die gesamte Lieferung.</em>", hero_text: "Eine zentrale Lösung für FTL und LTL, dringende AOG-Transporte, temperaturgeführte Waren und ADR.", hero_cta: "Angebot anfordern", hero_track: "Sendung verfolgen",
      trust_support: "Disponenten-Support", trust_countries: "Bediente Länder", trust_ontime: "Pünktliche Lieferungen", route_live: "Aktuelle Route", proof_title: "Fracht geschützt", proof_text: "CMR + Versicherung",
      services_kicker: "Leistungen", services_title: "Eine passende Logistiklösung für jede Sendung", services_intro: "Wir wählen Fahrzeug und Liefermodell passend zu Frachtart, Route und Termin.",
      service1_title: "Internationaler FTL-/LTL-Transport", service1_text: "Door-to-door-Komplett- und Teilladungen in Europa, der GUS und Zentralasien.", service2_title: "Time Critical / AOG / OBC", service2_text: "Rund um die Uhr überwachte Lieferung wichtiger Teile und Dokumente.", service3_title: "Temperaturgeführte Fracht", service3_text: "Überwachung von +2°C bis +25°C für Pharma, Lebensmittel und empfindliche Produkte.", service4_title: "ADR-Gefahrgut", service4_text: "Dokumentation, Verpackung und Spezialtransport nach internationalen Vorschriften.", service5_title: "Road Feeder Service", service5_text: "Straßentransport zwischen Luftfrachtterminals nach Air-Cargo-Standards.", learn_more: "Mehr erfahren →", custom_kicker: "Sonderauftrag", custom_title: "Haben Sie außergewöhnliche Fracht?", custom_text: "Sprechen Sie mit einem Logistiker — wir planen gemeinsam Route und Lösung.", custom_cta: "Beratung erhalten",
      coverage_kicker: "Geografie", coverage_title: "Ein Netzwerk — Dutzende Länder", coverage_text: "Unsere Disposition und unser geprüftes Partnernetz steuern stabile Routen zwischen Europa und Zentralasien.", coverage_cta: "Route kalkulieren",
      tracking_kicker: "Echtzeit-Transparenz", tracking_title: "Wissen Sie jederzeit, wo sich Ihre Sendung befindet", tracking_text: "Geben Sie den Auftragscode ein. Für die Demo verwenden Sie <strong>OL-2026-0715</strong>.", tracking_button: "Prüfen", shipment_label: "Auftrag", shipment_status: "Unterwegs", step1: "Fracht übernommen", step2: "Grenzterminal", step3: "Im Transit", step3_detail: "Noch etwa 690 km", step4: "Zustellung", step4_detail: "ETA: 16.07 · 18:40",
      quote_kicker: "Schnellkalkulator", quote_title: "Transportkosten unverbindlich berechnen", quote_text: "Der Kalkulator dient zur Demonstration. Den endgültigen Preis bestätigt ein Logistiker nach Prüfung von Route und Dokumenten.", quote_note: "Maut, Zollleistungen und Sondergenehmigungen können nicht enthalten sein.", from: "Ladeort", to: "Zielort", distance: "Entfernung (km)", weight: "Gewicht (Tonnen)", cargo: "Frachtart", cargo_standard: "Standard", cargo_temp: "Temperaturgeführt", urgency: "Dringlichkeit", urgency_standard: "Standard", urgency_express: "Express", calculate: "Berechnen", estimated: "Geschätzter Preis", estimated_note: "Hinterlassen Sie Ihre Kontaktdaten für ein genaues Angebot.",
      about_kicker: "Über uns", about_title: "Transparenz, schnelle Kommunikation und Verantwortung", about_text: "Jeder Auftrag erhält einen festen Logistikansprechpartner. Status, Dokumente und wichtige Änderungen kommen über einen Kontakt.", about_item1: "Internationale Versicherung und CMR-Dokumente", about_item2: "Nur geprüfte Fahrzeuge und Fahrer", about_item3: "24/7-Statusmeldungen und Notfallhilfe", about_item4: "Prozessmanagement nach ISO", years: "Jahre Erfahrung",
      process_kicker: "So arbeiten wir", process_title: "In 4 Schritten geht Ihre Fracht auf die Reise", process1: "Anfrage", process1_text: "Senden Sie Route und Frachtdaten.", process2: "Angebot", process2_text: "Wir bestätigen Preis, Fahrzeug und Termin.", process3: "Transport", process3_text: "Wir übernehmen die Fracht und liefern Live-Statusmeldungen.", process4: "Zustellung", process4_text: "Sichere Lieferung mit vollständigen Dokumenten.",
      contact_kicker: "Versandbereit?", contact_title: "Sprechen Sie innerhalb von 15 Minuten mit einem Logistiker", contact_text: "Senden Sie Ihre Route — während der Geschäftszeiten antworten wir schnellstmöglich.", contact_button: "Bitte kontaktieren", name: "Name", phone: "Telefon", email: "E-Mail",
      footer_text: "Zuverlässige Logistiklösungen zwischen Europa und Asien.", footer_services: "Leistungen", footer_company: "Unternehmen", footer_contact: "Kontakt", footer_legal: "Datenschutz · Nutzungsbedingungen",
      track_success: "Sendung gefunden. Der aktuelle Status wird rechts angezeigt.", track_error: "Demo-Code nicht gefunden. Versuchen Sie OL-2026-0715.", contact_success: "Vielen Dank! Das Demo-Formular wurde angenommen. Nach Backend-Anbindung wird die Nachricht weitergeleitet.",
      skip_content: "Zum Hauptinhalt springen", hero_status: "Neue Anfragen werden 24/7 angenommen", breakdown_base: "Grundpreis", breakdown_cargo: "Frachtzuschlag", breakdown_urgency: "Expresszuschlag", breakdown_total: "Gesamt", faq_kicker: "FAQ", faq_title: "Häufig gestellte Fragen", faq_intro: "Die wichtigsten Fragen unserer Kunden auf einen Blick.", faq_q1: "Wie schnell erhalte ich ein Angebot?", faq_a1: "Standardrouten kalkulieren wir meist innerhalb von 15–30 Minuten. Komplexe Strecken können etwas länger dauern.", faq_q2: "Wo kann ich meine Sendung verfolgen?", faq_a2: "In der Demo befindet sich die Sendungsverfolgung auf der Startseite. Später kann ein Kundenportal oder eine API angebunden werden.", faq_q3: "Transportieren Sie ADR- und temperaturgeführte Waren?", faq_a3: "Ja. Es gibt Lösungen für ADR, temperaturgeführte Transporte sowie dringende AOG-/OBC-Aufträge.", faq_q4: "Kann später ein Backend angebunden werden?", faq_a4: "Ja. Formular, Kalkulator und Tracking können mit API, E-Mail oder CRM verbunden werden."
    },
    ka: {
      topbar: "24/7 მხარდაჭერა გადაუდებელი გადაზიდვებისთვის", nav_services: "სერვისები", nav_coverage: "გეოგრაფია", nav_tracking: "ტვირთის თვალყურის დევნება", nav_about: "ჩვენ შესახებ", nav_contact: "კონტაქტი", nav_quote: "ფასის გამოთვლა",
      hero_eyebrow: "ევროპა · დსთ · ცენტრალური აზია", hero_title: "ჩვენ მხოლოდ ტვირთს არ ვეზიდებით — <em>მთელ მიწოდებას ვმართავთ.</em>", hero_text: "ერთიანი გადაწყვეტა FTL/LTL, გადაუდებელი AOG, ტემპერატურული და ADR გადაზიდვებისთვის.", hero_cta: "შეთავაზების მიღება", hero_track: "ტვირთის თვალყური",
      trust_support: "დისპეტჩერის მხარდაჭერა", trust_countries: "მომსახურებული ქვეყანა", trust_ontime: "დროული მიწოდება", route_live: "მიმდინარე მარშრუტი", proof_title: "ტვირთი დაცულია", proof_text: "CMR + დაზღვევა",
      services_kicker: "სერვისები", services_title: "ინდივიდუალური ლოგისტიკური გადაწყვეტა თითოეული ტვირთისთვის", services_intro: "ტრანსპორტსა და მიწოდების მოდელს ვარჩევთ ტვირთის ტიპის, მარშრუტისა და ვადის მიხედვით.",
      service1_title: "საერთაშორისო FTL / LTL ტრანსპორტი", service1_text: "სრული და ნაწილობრივი ტვირთის door-to-door მიწოდება ევროპაში, დსთ-სა და ცენტრალურ აზიაში.", service2_title: "Time Critical / AOG / OBC", service2_text: "კრიტიკული ნაწილებისა და დოკუმენტების 24/7 კონტროლირებული მიწოდება.", service3_title: "ტემპერატურული ტვირთი", service3_text: "+2°C-დან +25°C-მდე კონტროლი ფარმაცევტული, საკვები და მგრძნობიარე პროდუქციისთვის.", service4_title: "ADR სახიფათო ტვირთი", service4_text: "დოკუმენტაცია, შეფუთვა და სპეციალიზებული ტრანსპორტი საერთაშორისო წესების შესაბამისად.", service5_title: "Road Feeder Service", service5_text: "საავტომობილო გადაზიდვა ავიატვირთის ტერმინალებს შორის.", learn_more: "ვრცლად →", custom_kicker: "სპეციალური შეკვეთა", custom_title: "არასტანდარტული ტვირთი გაქვთ?", custom_text: "ესაუბრეთ ლოგისტს — მარშრუტსა და გადაწყვეტას ერთად მოვამზადებთ.", custom_cta: "კონსულტაციის მიღება",
      coverage_kicker: "გეოგრაფია", coverage_title: "ერთი ქსელი — ათობით ქვეყანა", coverage_text: "ჩვენი დისპეტჩერული ცენტრი და სანდო პარტნიორები მართავენ სტაბილურ მარშრუტებს ევროპასა და ცენტრალურ აზიას შორის.", coverage_cta: "მარშრუტის შეფასება",
      tracking_kicker: "ინფორმაცია რეალურ დროში", tracking_title: "ყოველთვის იცოდეთ, სად არის თქვენი ტვირთი", tracking_text: "შეიყვანეთ შეკვეთის კოდი. დემოსთვის გამოიყენეთ <strong>OL-2026-0715</strong>.", tracking_button: "შემოწმება", shipment_label: "შეკვეთა", shipment_status: "გზაშია", step1: "ტვირთი მიღებულია", step2: "სასაზღვრო ტერმინალი", step3: "ტრანზიტშია", step3_detail: "დარჩენილია დაახლოებით 690 კმ", step4: "მიწოდება", step4_detail: "ETA: 16.07 · 18:40",
      quote_kicker: "სწრაფი კალკულატორი", quote_title: "გამოთვალეთ გადაზიდვის სავარაუდო ფასი", quote_text: "კალკულატორი სადემონსტრაციოა. საბოლოო ფასს ლოგისტი მარშრუტისა და დოკუმენტების შემოწმების შემდეგ დაადასტურებს.", quote_note: "ფასში შესაძლოა არ შედიოდეს გზის გადასახადი, საბაჟო მომსახურება ან სპეციალური ნებართვა.", from: "ჩატვირთვის ადგილი", to: "მიწოდების ადგილი", distance: "მანძილი (კმ)", weight: "წონა (ტონა)", cargo: "ტვირთის ტიპი", cargo_standard: "სტანდარტული", cargo_temp: "ტემპერატურული", urgency: "სისწრაფე", urgency_standard: "ჩვეულებრივი", urgency_express: "ექსპრესი", calculate: "გამოთვლა", estimated: "სავარაუდო ფასი", estimated_note: "ზუსტი შეთავაზებისთვის დატოვეთ საკონტაქტო მონაცემები.",
      about_kicker: "ჩვენ შესახებ", about_title: "გამჭვირვალობა, სწრაფი კავშირი და პასუხისმგებლობა", about_text: "თითოეულ შეკვეთას პირადი ლოგისტი მართავს. სტატუსები, დოკუმენტები და მნიშვნელოვანი ცვლილებები ერთ საკონტაქტო არხში მიიღება.", about_item1: "საერთაშორისო დაზღვევა და CMR დოკუმენტები", about_item2: "მხოლოდ შემოწმებული მანქანები და მძღოლები", about_item3: "24/7 სტატუსები და გადაუდებელი მხარდაჭერა", about_item4: "ISO-ს შესაბამისი პროცესების მართვა", years: "წლიანი გამოცდილება",
      process_kicker: "როგორ ვმუშაობთ", process_title: "ტვირთი გზას 4 ნაბიჯში იწყებს", process1: "განაცხადი", process1_text: "გამოგვიგზავნეთ მარშრუტი და ტვირთის მონაცემები.", process2: "შეთავაზება", process2_text: "ვადასტურებთ ფასს, ტრანსპორტსა და ვადას.", process3: "გადაზიდვა", process3_text: "ვიღებთ ტვირთს და გაწვდით მიმდინარე სტატუსს.", process4: "მიწოდება", process4_text: "უსაფრთხოდ ვაწვდით სრულ დოკუმენტაციასთან ერთად.",
      contact_kicker: "ტვირთი მზად არის?", contact_title: "დაუკავშირდით ლოგისტს 15 წუთში", contact_text: "გამოგვიგზავნეთ მარშრუტი — სამუშაო საათებში სწრაფად გიპასუხებთ.", contact_button: "დამიკავშირდით", name: "სახელი", phone: "ტელეფონი", email: "ელფოსტა",
      footer_text: "სანდო ლოგისტიკური გადაწყვეტილებები ევროპასა და აზიას შორის.", footer_services: "სერვისები", footer_company: "კომპანია", footer_contact: "კონტაქტი", footer_legal: "კონფიდენციალურობა · გამოყენების პირობები",
      track_success: "ტვირთი ნაპოვნია. მიმდინარე სტატუსი მარჯვნივ ჩანს.", track_error: "დემო კოდი ვერ მოიძებნა. სცადეთ OL-2026-0715.", contact_success: "გმადლობთ! დემო ფორმა მიღებულია. backend-ის დაკავშირების შემდეგ შეტყობინება გაიგზავნება.",
      skip_content: "მთავარ შინაარსზე გადასვლა", hero_status: "ახალი შეკვეთები მიიღება 24/7", breakdown_base: "საბაზო ფასი", breakdown_cargo: "ტვირთის ტიპის დანამატი", breakdown_urgency: "სისწრაფის დანამატი", breakdown_total: "ჯამი", faq_kicker: "კითხვა-პასუხი", faq_title: "ხშირად დასმული კითხვები", faq_intro: "ყველაზე ხშირად მოთხოვნილი ინფორმაცია ერთ სივრცეში.", faq_q1: "რამდენად სწრაფად მივიღებ ფასს?", faq_a1: "სტანდარტული მარშრუტების შეთავაზება ჩვეულებრივ 15–30 წუთში მზადდება. რთულ მარშრუტებს მეტი დრო შეიძლება დასჭირდეს.", faq_q2: "სად შემიძლია ტვირთის თვალყურის დევნება?", faq_a2: "დემო ვერსიაში tracking ბლოკი მთავარ გვერდზეა. მოგვიანებით შესაძლებელია კლიენტის კაბინეტის ან API-ის დამატება.", faq_q3: "ADR და ტემპერატურულ ტვირთს იღებთ?", faq_a3: "დიახ. ხელმისაწვდომია ADR, ტემპერატურული და გადაუდებელი AOG / OBC გადაწყვეტილებები.", faq_q4: "შეიძლება backend-ის მოგვიანებით დამატება?", faq_a4: "დიახ. ფორმა, კალკულატორი და tracking შეიძლება API-ს, ელფოსტას ან CRM-ს დაუკავშირდეს."
    },
    es: {
      topbar: "Soporte 24/7 para transportes urgentes", nav_services: "Servicios", nav_coverage: "Cobertura", nav_tracking: "Rastrear envío", nav_about: "Nosotros", nav_contact: "Contacto", nav_quote: "Calcular precio",
      hero_eyebrow: "Europa · CEI · Asia Central", hero_title: "No solo transportamos carga — <em>gestionamos toda la entrega.</em>", hero_text: "Una solución integral para FTL y LTL, envíos urgentes AOG, carga con temperatura controlada y ADR.", hero_cta: "Solicitar presupuesto", hero_track: "Rastrear envío",
      trust_support: "Soporte del operador", trust_countries: "Países atendidos", trust_ontime: "Entregas a tiempo", route_live: "Ruta actual", proof_title: "Carga protegida", proof_text: "CMR + seguro",
      services_kicker: "Servicios", services_title: "Una solución logística adaptada a cada envío", services_intro: "Elegimos el vehículo y el modelo de entrega según la carga, la ruta y el plazo.",
      service1_title: "Transporte internacional FTL / LTL", service1_text: "Entrega puerta a puerta de cargas completas y parciales en Europa, la CEI y Asia Central.", service2_title: "Time Critical / AOG / OBC", service2_text: "Entrega 24/7 de piezas y documentos críticos con seguimiento permanente.", service3_title: "Carga con temperatura controlada", service3_text: "Control de +2°C a +25°C para farmacia, alimentos y productos sensibles.", service4_title: "Mercancías peligrosas ADR", service4_text: "Documentación, embalaje y transporte especializado conforme a normas internacionales.", service5_title: "Road Feeder Service", service5_text: "Transporte por carretera entre terminales de carga aérea.", learn_more: "Más información →", custom_kicker: "Solicitud especial", custom_title: "¿Tiene una carga no estándar?", custom_text: "Hable con un especialista — diseñaremos juntos la ruta y la solución.", custom_cta: "Recibir asesoría",
      coverage_kicker: "Geografía", coverage_title: "Una red — decenas de países", coverage_text: "Nuestro centro de operaciones y la red de socios gestionan rutas estables entre Europa y Asia Central.", coverage_cta: "Calcular la ruta",
      tracking_kicker: "Visibilidad en tiempo real", tracking_title: "Sepa siempre dónde está su carga", tracking_text: "Introduzca el código del pedido. Para la demo utilice <strong>OL-2026-0715</strong>.", tracking_button: "Comprobar", shipment_label: "Pedido", shipment_status: "En tránsito", step1: "Carga recogida", step2: "Terminal fronteriza", step3: "En tránsito", step3_detail: "Quedan unos 690 km", step4: "Entrega", step4_detail: "ETA: 16.07 · 18:40",
      quote_kicker: "Calculadora rápida", quote_title: "Estime el coste del transporte", quote_text: "La calculadora es demostrativa. Un especialista confirmará el precio final tras revisar la ruta y los documentos.", quote_note: "El cálculo puede no incluir peajes, aduanas o permisos especiales.", from: "Lugar de recogida", to: "Lugar de entrega", distance: "Distancia (km)", weight: "Peso (toneladas)", cargo: "Tipo de carga", cargo_standard: "Estándar", cargo_temp: "Temperatura controlada", urgency: "Urgencia", urgency_standard: "Normal", urgency_express: "Exprés", calculate: "Calcular", estimated: "Precio estimado", estimated_note: "Deje sus datos para recibir una oferta precisa.",
      about_kicker: "Nosotros", about_title: "Transparencia, comunicación rápida y responsabilidad", about_text: "Cada pedido tiene un especialista asignado. El cliente recibe estados, documentos y cambios importantes desde un único contacto.", about_item1: "Seguro internacional y documentación CMR", about_item2: "Solo vehículos y conductores verificados", about_item3: "Estados 24/7 y soporte urgente", about_item4: "Gestión de procesos alineada con ISO", years: "años de experiencia",
      process_kicker: "Cómo trabajamos", process_title: "Su carga sale en 4 pasos", process1: "Solicitud", process1_text: "Envíe la ruta y los datos de la carga.", process2: "Oferta", process2_text: "Confirmamos precio, vehículo y plazo.", process3: "Transporte", process3_text: "Recogemos la carga y facilitamos estados en tiempo real.", process4: "Entrega", process4_text: "Entregamos de forma segura con toda la documentación.",
      contact_kicker: "¿Listo para enviar?", contact_title: "Hable con un especialista en 15 minutos", contact_text: "Envíe su ruta — responderemos rápidamente durante el horario laboral.", contact_button: "Contactarme", name: "Nombre", phone: "Teléfono", email: "E-mail",
      footer_text: "Soluciones logísticas fiables entre Europa y Asia.", footer_services: "Servicios", footer_company: "Empresa", footer_contact: "Contacto", footer_legal: "Privacidad · Condiciones de uso",
      track_success: "Envío encontrado. El estado actual aparece a la derecha.", track_error: "Código demo no encontrado. Pruebe OL-2026-0715.", contact_success: "¡Gracias! El formulario demo fue recibido. Al conectar el backend se enviará al gestor.",
      skip_content: "Ir al contenido principal", hero_status: "Aceptamos nuevas solicitudes 24/7", breakdown_base: "Tarifa base", breakdown_cargo: "Recargo por carga", breakdown_urgency: "Recargo por urgencia", breakdown_total: "Total", faq_kicker: "Preguntas frecuentes", faq_title: "Preguntas frecuentes", faq_intro: "La información que nuestros clientes consultan con mayor frecuencia.", faq_q1: "¿Cuándo recibiré el presupuesto?", faq_a1: "Las rutas estándar suelen cotizarse en 15–30 minutos. Las rutas complejas pueden requerir más tiempo.", faq_q2: "¿Dónde puedo rastrear mi envío?", faq_a2: "En la demo, el bloque de seguimiento está en la página principal. Después puede conectarse un portal o una API.", faq_q3: "¿Transportan ADR y carga con temperatura controlada?", faq_a3: "Sí. Hay soluciones para ADR, temperatura controlada y envíos urgentes AOG / OBC.", faq_q4: "¿Se puede conectar un backend más adelante?", faq_a4: "Sí. El formulario, la calculadora y el seguimiento pueden conectarse a API, correo o CRM."
    },
    fr: {
      topbar: "Assistance 24/7 pour les transports urgents", nav_services: "Services", nav_coverage: "Couverture", nav_tracking: "Suivre l’envoi", nav_about: "À propos", nav_contact: "Contact", nav_quote: "Calculer le prix",
      hero_eyebrow: "Europe · CEI · Asie centrale", hero_title: "Nous ne transportons pas seulement vos marchandises — <em>nous pilotons toute la livraison.</em>", hero_text: "Une solution unique pour le FTL/LTL, les urgences AOG, les marchandises sous température contrôlée et l’ADR.", hero_cta: "Demander un devis", hero_track: "Suivre l’envoi",
      trust_support: "Assistance d’un dispatcheur", trust_countries: "Pays desservis", trust_ontime: "Livraisons à l’heure", route_live: "Itinéraire actuel", proof_title: "Marchandise protégée", proof_text: "CMR + assurance",
      services_kicker: "Services", services_title: "Une solution logistique adaptée à chaque expédition", services_intro: "Nous sélectionnons le véhicule et le modèle de livraison selon la marchandise, l’itinéraire et le délai.",
      service1_title: "Transport international FTL / LTL", service1_text: "Livraison porte-à-porte de lots complets et partiels en Europe, dans la CEI et en Asie centrale.", service2_title: "Time Critical / AOG / OBC", service2_text: "Livraison 24/7 de pièces et documents critiques avec suivi permanent.", service3_title: "Transport sous température contrôlée", service3_text: "Contrôle de +2°C à +25°C pour la pharmacie, l’alimentaire et les produits sensibles.", service4_title: "Marchandises dangereuses ADR", service4_text: "Documents, emballage et transport spécialisé conformes aux règles internationales.", service5_title: "Road Feeder Service", service5_text: "Transport routier entre terminaux de fret aérien selon les standards cargo.", learn_more: "En savoir plus →", custom_kicker: "Demande spéciale", custom_title: "Vous avez une marchandise hors standard ?", custom_text: "Échangez avec un logisticien — nous concevrons ensemble l’itinéraire et la solution.", custom_cta: "Obtenir un conseil",
      coverage_kicker: "Géographie", coverage_title: "Un réseau — des dizaines de pays", coverage_text: "Notre centre de dispatch et notre réseau de partenaires gèrent des itinéraires fiables entre l’Europe et l’Asie centrale.", coverage_cta: "Calculer l’itinéraire",
      tracking_kicker: "Visibilité en temps réel", tracking_title: "Sachez toujours où se trouve votre marchandise", tracking_text: "Saisissez le code de commande. Pour la démo, utilisez <strong>OL-2026-0715</strong>.", tracking_button: "Vérifier", shipment_label: "Commande", shipment_status: "En transit", step1: "Marchandise prise en charge", step2: "Terminal frontalier", step3: "En transit", step3_detail: "Environ 690 km restants", step4: "Livraison", step4_detail: "ETA : 16.07 · 18:40",
      quote_kicker: "Calculateur rapide", quote_title: "Estimez le coût de votre transport", quote_text: "Ce calculateur est une démonstration. Le tarif final sera confirmé après vérification de l’itinéraire et des documents.", quote_note: "Les péages, formalités douanières ou autorisations spéciales peuvent ne pas être inclus.", from: "Lieu de chargement", to: "Lieu de livraison", distance: "Distance (km)", weight: "Poids (tonnes)", cargo: "Type de marchandise", cargo_standard: "Standard", cargo_temp: "Température contrôlée", urgency: "Urgence", urgency_standard: "Standard", urgency_express: "Express", calculate: "Calculer", estimated: "Prix estimé", estimated_note: "Laissez vos coordonnées pour recevoir une offre précise.",
      about_kicker: "À propos", about_title: "Transparence, communication rapide et responsabilité", about_text: "Chaque commande est suivie par un logisticien dédié. Le client reçoit statuts, documents et mises à jour via un interlocuteur unique.", about_item1: "Assurance internationale et documents CMR", about_item2: "Véhicules et conducteurs vérifiés uniquement", about_item3: "Statuts 24/7 et assistance d’urgence", about_item4: "Gestion des processus alignée sur l’ISO", years: "ans d’expérience",
      process_kicker: "Notre méthode", process_title: "Votre expédition part en 4 étapes", process1: "Demande", process1_text: "Envoyez l’itinéraire et les données de la marchandise.", process2: "Offre", process2_text: "Nous confirmons le prix, le véhicule et le délai.", process3: "Transport", process3_text: "Nous prenons en charge la marchandise et envoyons les statuts en direct.", process4: "Livraison", process4_text: "Livraison sécurisée avec l’ensemble des documents.",
      contact_kicker: "Prêt à expédier ?", contact_title: "Échangez avec un logisticien sous 15 minutes", contact_text: "Envoyez votre itinéraire — nous répondons rapidement pendant les heures ouvrées.", contact_button: "Me contacter", name: "Nom", phone: "Téléphone", email: "E-mail",
      footer_text: "Des solutions logistiques fiables entre l’Europe et l’Asie.", footer_services: "Services", footer_company: "Entreprise", footer_contact: "Contact", footer_legal: "Confidentialité · Conditions d’utilisation",
      track_success: "Expédition trouvée. Le statut actuel s’affiche à droite.", track_error: "Code de démonstration introuvable. Essayez OL-2026-0715.", contact_success: "Merci ! Le formulaire de démonstration a été reçu. Après connexion du backend, il sera transmis au responsable.",
      skip_content: "Aller au contenu principal", hero_status: "Nouvelles demandes acceptées 24/7", breakdown_base: "Tarif de base", breakdown_cargo: "Supplément marchandise", breakdown_urgency: "Supplément urgence", breakdown_total: "Total", faq_kicker: "FAQ", faq_title: "Questions fréquentes", faq_intro: "Les informations les plus souvent demandées par nos clients.", faq_q1: "Sous quel délai recevrai-je un devis ?", faq_a1: "Les itinéraires standard sont généralement chiffrés sous 15 à 30 minutes. Les itinéraires complexes peuvent demander plus de temps.", faq_q2: "Où puis-je suivre mon expédition ?", faq_a2: "Dans la démo, le suivi se trouve sur la page d’accueil. Un portail client ou une API pourra être connecté ensuite.", faq_q3: "Transportez-vous l’ADR et les marchandises sous température contrôlée ?", faq_a3: "Oui. Des solutions sont prévues pour l’ADR, la température contrôlée et les urgences AOG / OBC.", faq_q4: "Peut-on connecter un backend plus tard ?", faq_a4: "Oui. Le formulaire, le calculateur et le suivi peuvent être reliés à une API, un e-mail ou un CRM."
    }
  };

  Object.entries(extraLanguages).forEach(([code, dictionary]) => {
    translations[code] = Object.assign({}, translations.en, dictionary);
  });

  const languageMeta = {
    tk: "Türkmençe", ru: "Русский", en: "English", pl: "Polski",
    de: "Deutsch", ka: "ქართული", es: "Español", fr: "Français"
  };
  const languageOrder = Object.keys(languageMeta);

  function closeLanguageMenus(except) {
    document.querySelectorAll(".language-switch.open").forEach(switcher => {
      if (switcher === except) return;
      switcher.classList.remove("open");
      switcher.querySelector(".language-trigger")?.setAttribute("aria-expanded", "false");
    });
  }

  function syncLanguageMenus(lang) {
    document.querySelectorAll(".language-switch").forEach(switcher => {
      const triggerCode = switcher.querySelector(".language-trigger-code");
      if (triggerCode) triggerCode.textContent = String(lang).toUpperCase();
      switcher.querySelectorAll(".lang-option").forEach(option => {
        const active = option.dataset.lang === lang;
        option.classList.toggle("active", active);
        option.setAttribute("aria-selected", String(active));
      });
    });
  }

  function buildLanguageMenus() {
    document.querySelectorAll(".language-switch").forEach((switcher, index) => {
      switcher.classList.add("language-dropdown");
      switcher.setAttribute("aria-label", "Language selector");
      switcher.innerHTML = `
        <button class="language-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
          <span class="language-globe" aria-hidden="true">◎</span>
          <span class="language-trigger-code">${String(currentLang).toUpperCase()}</span>
          <svg aria-hidden="true" viewBox="0 0 12 8"><path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="language-menu" role="listbox" aria-label="Available languages">
          ${languageOrder.map(code => `<button class="lang lang-option" type="button" role="option" data-lang="${code}"><span>${languageMeta[code]}</span><small>${code.toUpperCase()}</small></button>`).join("")}
        </div>`;

      const trigger = switcher.querySelector(".language-trigger");
      trigger.addEventListener("click", event => {
        event.stopPropagation();
        const open = !switcher.classList.contains("open");
        closeLanguageMenus(switcher);
        switcher.classList.toggle("open", open);
        trigger.setAttribute("aria-expanded", String(open));
      });

      switcher.querySelectorAll(".lang-option").forEach(option => {
        option.addEventListener("click", () => {
          applyLanguage(option.dataset.lang);
          syncLanguageMenus(option.dataset.lang);
          closeLanguageMenus();
          if (index > 0) document.getElementById("mainNav")?.classList.remove("open");
        });
      });
    });
  }

  buildLanguageMenus();
  const storedLanguage = localStorage.getItem("orient-language");
  const initialLanguage = languageOrder.includes(storedLanguage) ? storedLanguage : currentLang;
  applyLanguage(initialLanguage);
  syncLanguageMenus(initialLanguage);

  document.addEventListener("click", () => closeLanguageMenus());
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLanguageMenus();
  });

  const icons = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 4v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-8 12h6l-1 8 9-13h-6z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M4.2 6.5l15.6 11M19.8 6.5l-15.6 11M7 4l5 3 5-3M7 20l5-3 5 3"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 20h18.4z"/><path d="M12 9v5M12 17.5v.1"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 16.5 22 3l-7 18-4-7z"/><path d="m11 14 5-5"/></svg>'
  ];
  document.querySelectorAll(".service-card .service-icon").forEach((icon, index) => {
    if (icons[index]) icon.innerHTML = icons[index];
  });

  const callButton = document.querySelector(".floating-call span");
  if (callButton) callButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 8l-2.1 2a15 15 0 0 0 6.1 6.1l2-2.1 4.5 2.8-1.1 3.1c-.3.8-1.1 1.3-2 1.2C9.8 20.3 3.7 14.2 2.9 6.6c-.1-.9.4-1.7 1.2-2z"/></svg>';
  const topButton = document.getElementById("backToTop");
  if (topButton) topButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6M12 8v12"/></svg>';

  const trackingInput = document.getElementById("trackingCode");
  if (trackingInput) {
    trackingInput.maxLength = 30;
    trackingInput.autocapitalize = "characters";
    trackingInput.spellcheck = false;
  }
  const quoteInputs = document.querySelectorAll("#quoteForm input[type='text']");
  quoteInputs[0]?.setAttribute("autocomplete", "address-level2");
  quoteInputs[1]?.setAttribute("autocomplete", "address-level2");
  document.querySelector("#contactForm input[type='text']")?.setAttribute("autocomplete", "name");
  document.querySelector("#contactForm input[type='tel']")?.setAttribute("autocomplete", "tel");
  document.querySelector("#contactForm input[type='email']")?.setAttribute("autocomplete", "email");
  document.getElementById("priceResult")?.setAttribute("aria-live", "polite");

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      const nav = document.getElementById("mainNav");
      nav?.classList.remove("open");
      document.body.classList.remove("nav-open");
      document.getElementById("menuBtn")?.classList.remove("active");
      document.getElementById("navBackdrop")?.classList.remove("visible");
    }
    closeLanguageMenus();
  }, { passive: true });

  document.documentElement.dataset.phase = "3";
})();
