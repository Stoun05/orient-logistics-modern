/* ORIENT Logistics — Phase 9 professional quote calculator */
(() => {
  "use strict";

  const form = document.getElementById("quoteForm");
  const originalGrid = form?.querySelector(".form-grid");
  const submitButton = form?.querySelector("button[type='submit']");
  const priceResult = document.getElementById("priceResult");
  const distanceInput = document.getElementById("distance");
  const weightInput = document.getElementById("weight");
  const cargoSelect = document.getElementById("cargoType");
  const urgencySelect = document.getElementById("urgency");

  if (!form || !originalGrid || !submitButton || !priceResult || !distanceInput || !weightInput || !cargoSelect || !urgencySelect) return;

  const dictionary = {
    tk: {
      title: "Ýüküň jikme-jik maglumatlary",
      intro: "Ölçegleri, ulag görnüşini we goşmaça hyzmatlary giriziň. Göwrüm hem-de baha awtomatik hasaplanar.",
      pallets: "Palet / ýer sany",
      length: "Uzynlygy",
      width: "Ini",
      height: "Beýikligi",
      perPallet: "Her palet ýa-da ýer üçin ölçeg (sm)",
      volume: "Hasaplanan göwrüm",
      loadingDate: "Ýükleme senesi",
      vehicle: "Ulag görnüşi",
      vehicleAuto: "Awtomatiki saýla",
      vehicleVan: "Kiçi awtoulag / van",
      vehicleCurtain: "Tentli ýük maşyny",
      vehicleMega: "MEGA tent",
      vehicleReefer: "Sowadyjy / reefer",
      extras: "Goşmaça hyzmatlar",
      customs: "Gümrük goldawy",
      customsHint: "Resminama barlagy we deklarasiýa koordinasiýasy",
      insurance: "Ýük ätiýaçlandyryşy",
      insuranceHint: "Deklarirlenen gymmata görä takmynan hasap",
      declaredValue: "Ýüküň deklarirlenen gymmaty (€)",
      temperatureTitle: "Temperatura režimi",
      tempMin: "Minimum °C",
      tempMax: "Maksimum °C",
      adrTitle: "ADR maglumatlary",
      unNumber: "UN belgisi",
      adrClass: "ADR klasy",
      packingGroup: "Packing Group",
      packingGroupChoose: "Saýlaň",
      validationTitle: "Maglumatlary barlaň",
      invalidPositive: "Agram, palet sany we ölçegler noldan uly bolmaly.",
      invalidDate: "Ýükleme senesi şu günden öň bolup bilmez.",
      capacityError: "Saýlanan ulag bu agrama, göwrüme ýa-da palet sanyna laýyk däl. Awtomatiki saýlawy ýa-da has uly ulagy saýlaň.",
      oversizeError: "Bu ýük standart ulag çäginden uly. Aýratyn çözgüt üçin logist bilen habarlaşyň.",
      temperatureVehicle: "Temperatura ýükleri üçin sowadyjy ulag saýlanmaly.",
      insuranceValue: "Ätiýaçlandyryş üçin ýüküň deklarirlenen gymmatyny giriziň.",
      tempRange: "Minimum temperatura maksimumdan pes bolmaly.",
      adrRequired: "ADR ýük üçin UN belgisi, klass we Packing Group gerek.",
      calculatedVehicle: "Saýlanan ulag",
      calculatedVolume: "Göwrüm",
      breakdown: "Bahanyň bölünişi",
      lineTransport: "Esasy transport",
      lineCargo: "Ýük hyzmatynyň koeffisiýenti",
      lineUrgency: "Ekspress goşmaçasy",
      lineDate: "Gyssagly ýükleme senesi",
      lineCustoms: "Gümrük goldawy",
      lineInsurance: "Ätiýaçlandyryş",
      lineAdr: "ADR taýýarlygy",
      lineTemperature: "Temperatura gözegçiligi",
      estimateDisclaimer: "Bu takmynan frontend hasabydyr. Takyk täjirçilik teklibi logist we resminama barlagyndan soň tassyklanýar.",
      emptyBreakdown: "Hasaplamak üçin maglumatlary dolduryň.",
      today: "Şu gün"
    },
    ru: {
      title: "Подробные параметры груза",
      intro: "Укажите размеры, транспорт и дополнительные услуги. Объём и стоимость рассчитаются автоматически.",
      pallets: "Палеты / места",
      length: "Длина",
      width: "Ширина",
      height: "Высота",
      perPallet: "Размер одного места или палеты (см)",
      volume: "Расчётный объём",
      loadingDate: "Дата загрузки",
      vehicle: "Тип транспорта",
      vehicleAuto: "Подобрать автоматически",
      vehicleVan: "Малотоннажный фургон",
      vehicleCurtain: "Тентованный грузовик",
      vehicleMega: "Тент MEGA",
      vehicleReefer: "Рефрижератор",
      extras: "Дополнительные услуги",
      customs: "Таможенное сопровождение",
      customsHint: "Проверка документов и координация декларации",
      insurance: "Страхование груза",
      insuranceHint: "Ориентировочно по заявленной стоимости",
      declaredValue: "Заявленная стоимость груза (€)",
      temperatureTitle: "Температурный режим",
      tempMin: "Минимум °C",
      tempMax: "Максимум °C",
      adrTitle: "Данные ADR",
      unNumber: "Номер UN",
      adrClass: "Класс ADR",
      packingGroup: "Packing Group",
      packingGroupChoose: "Выберите",
      validationTitle: "Проверьте данные",
      invalidPositive: "Вес, количество мест и размеры должны быть больше нуля.",
      invalidDate: "Дата загрузки не может быть раньше сегодняшнего дня.",
      capacityError: "Выбранный транспорт не подходит по весу, объёму или количеству палет. Выберите автоматический подбор или более крупный автомобиль.",
      oversizeError: "Груз превышает стандартные лимиты. Свяжитесь с логистом для специального решения.",
      temperatureVehicle: "Для температурного груза требуется рефрижератор.",
      insuranceValue: "Для страхования укажите заявленную стоимость груза.",
      tempRange: "Минимальная температура должна быть ниже максимальной.",
      adrRequired: "Для ADR нужны номер UN, класс и Packing Group.",
      calculatedVehicle: "Подобранный транспорт",
      calculatedVolume: "Объём",
      breakdown: "Структура стоимости",
      lineTransport: "Базовая перевозка",
      lineCargo: "Коэффициент типа груза",
      lineUrgency: "Доплата за срочность",
      lineDate: "Срочная дата загрузки",
      lineCustoms: "Таможенное сопровождение",
      lineInsurance: "Страхование",
      lineAdr: "Подготовка ADR",
      lineTemperature: "Температурный контроль",
      estimateDisclaimer: "Это ориентировочный frontend-расчёт. Точное коммерческое предложение подтверждается логистом после проверки документов.",
      emptyBreakdown: "Заполните параметры для расчёта.",
      today: "Сегодня"
    },
    en: {
      title: "Detailed cargo parameters",
      intro: "Enter dimensions, vehicle type and optional services. Volume and the estimated quote update automatically.",
      pallets: "Pallets / packages",
      length: "Length",
      width: "Width",
      height: "Height",
      perPallet: "Dimensions per pallet or package (cm)",
      volume: "Calculated volume",
      loadingDate: "Loading date",
      vehicle: "Vehicle type",
      vehicleAuto: "Select automatically",
      vehicleVan: "Small van",
      vehicleCurtain: "Curtainsider truck",
      vehicleMega: "MEGA trailer",
      vehicleReefer: "Refrigerated truck",
      extras: "Optional services",
      customs: "Customs support",
      customsHint: "Document review and declaration coordination",
      insurance: "Cargo insurance",
      insuranceHint: "Estimated from the declared cargo value",
      declaredValue: "Declared cargo value (€)",
      temperatureTitle: "Temperature regime",
      tempMin: "Minimum °C",
      tempMax: "Maximum °C",
      adrTitle: "ADR details",
      unNumber: "UN number",
      adrClass: "ADR class",
      packingGroup: "Packing Group",
      packingGroupChoose: "Choose",
      validationTitle: "Check the cargo details",
      invalidPositive: "Weight, package count and dimensions must be greater than zero.",
      invalidDate: "The loading date cannot be earlier than today.",
      capacityError: "The selected vehicle is too small for this weight, volume or pallet count. Use automatic selection or choose a larger vehicle.",
      oversizeError: "The cargo exceeds standard vehicle limits. Contact a logistician for a special solution.",
      temperatureVehicle: "Temperature-controlled cargo requires a refrigerated vehicle.",
      insuranceValue: "Enter the declared cargo value to calculate insurance.",
      tempRange: "Minimum temperature must be lower than maximum temperature.",
      adrRequired: "ADR cargo requires a UN number, class and Packing Group.",
      calculatedVehicle: "Selected vehicle",
      calculatedVolume: "Volume",
      breakdown: "Price breakdown",
      lineTransport: "Base transport",
      lineCargo: "Cargo service multiplier",
      lineUrgency: "Express surcharge",
      lineDate: "Short-notice loading",
      lineCustoms: "Customs support",
      lineInsurance: "Insurance",
      lineAdr: "ADR preparation",
      lineTemperature: "Temperature control",
      estimateDisclaimer: "This is a frontend estimate. A logistician confirms the commercial quote after checking the route and documents.",
      emptyBreakdown: "Complete the cargo details to calculate.",
      today: "Today"
    },
    pl: {
      title: "Szczegółowe parametry ładunku",
      intro: "Podaj wymiary, pojazd i usługi dodatkowe. Objętość oraz cena zostaną obliczone automatycznie.",
      pallets: "Palety / sztuki",
      length: "Długość",
      width: "Szerokość",
      height: "Wysokość",
      perPallet: "Wymiary jednej palety lub sztuki (cm)",
      volume: "Obliczona objętość",
      loadingDate: "Data załadunku",
      vehicle: "Typ pojazdu",
      vehicleAuto: "Dobierz automatycznie",
      vehicleVan: "Mały samochód dostawczy",
      vehicleCurtain: "Naczepa firanka",
      vehicleMega: "Naczepa MEGA",
      vehicleReefer: "Chłodnia",
      extras: "Usługi dodatkowe",
      customs: "Obsługa celna",
      customsHint: "Kontrola dokumentów i koordynacja deklaracji",
      insurance: "Ubezpieczenie ładunku",
      insuranceHint: "Szacunek według zadeklarowanej wartości",
      declaredValue: "Deklarowana wartość ładunku (€)",
      temperatureTitle: "Zakres temperatury",
      tempMin: "Minimum °C",
      tempMax: "Maksimum °C",
      adrTitle: "Dane ADR",
      unNumber: "Numer UN",
      adrClass: "Klasa ADR",
      packingGroup: "Packing Group",
      packingGroupChoose: "Wybierz",
      validationTitle: "Sprawdź dane",
      invalidPositive: "Waga, liczba sztuk i wymiary muszą być większe od zera.",
      invalidDate: "Data załadunku nie może być wcześniejsza niż dzisiaj.",
      capacityError: "Wybrany pojazd jest za mały. Wybierz dobór automatyczny lub większy pojazd.",
      oversizeError: "Ładunek przekracza standardowe limity. Skontaktuj się z logistykiem.",
      temperatureVehicle: "Ładunek temperaturowy wymaga chłodni.",
      insuranceValue: "Podaj deklarowaną wartość do obliczenia ubezpieczenia.",
      tempRange: "Temperatura minimalna musi być niższa od maksymalnej.",
      adrRequired: "ADR wymaga numeru UN, klasy i Packing Group.",
      calculatedVehicle: "Wybrany pojazd",
      calculatedVolume: "Objętość",
      breakdown: "Struktura ceny",
      lineTransport: "Transport podstawowy",
      lineCargo: "Współczynnik rodzaju ładunku",
      lineUrgency: "Dopłata ekspresowa",
      lineDate: "Pilny termin załadunku",
      lineCustoms: "Obsługa celna",
      lineInsurance: "Ubezpieczenie",
      lineAdr: "Przygotowanie ADR",
      lineTemperature: "Kontrola temperatury",
      estimateDisclaimer: "To orientacyjna kalkulacja frontendowa. Ostateczną ofertę potwierdza logistyk po sprawdzeniu dokumentów.",
      emptyBreakdown: "Uzupełnij dane, aby obliczyć cenę.",
      today: "Dzisiaj"
    },
    de: {
      title: "Detaillierte Ladungsdaten",
      intro: "Geben Sie Maße, Fahrzeug und Zusatzleistungen ein. Volumen und Richtpreis werden automatisch berechnet.",
      pallets: "Paletten / Packstücke",
      length: "Länge",
      width: "Breite",
      height: "Höhe",
      perPallet: "Maße je Palette oder Packstück (cm)",
      volume: "Berechnetes Volumen",
      loadingDate: "Ladedatum",
      vehicle: "Fahrzeugtyp",
      vehicleAuto: "Automatisch auswählen",
      vehicleVan: "Kleintransporter",
      vehicleCurtain: "Planen-Lkw",
      vehicleMega: "MEGA-Auflieger",
      vehicleReefer: "Kühlfahrzeug",
      extras: "Zusatzleistungen",
      customs: "Zollunterstützung",
      customsHint: "Dokumentenprüfung und Deklarationskoordination",
      insurance: "Transportversicherung",
      insuranceHint: "Schätzung anhand des deklarierten Warenwerts",
      declaredValue: "Deklarierter Warenwert (€)",
      temperatureTitle: "Temperaturbereich",
      tempMin: "Minimum °C",
      tempMax: "Maximum °C",
      adrTitle: "ADR-Angaben",
      unNumber: "UN-Nummer",
      adrClass: "ADR-Klasse",
      packingGroup: "Packing Group",
      packingGroupChoose: "Auswählen",
      validationTitle: "Angaben prüfen",
      invalidPositive: "Gewicht, Packstückzahl und Maße müssen größer als null sein.",
      invalidDate: "Das Ladedatum darf nicht vor heute liegen.",
      capacityError: "Das gewählte Fahrzeug ist zu klein. Nutzen Sie die automatische Auswahl oder ein größeres Fahrzeug.",
      oversizeError: "Die Ladung überschreitet Standardgrenzen. Kontaktieren Sie einen Logistiker.",
      temperatureVehicle: "Temperaturgeführte Ladung benötigt ein Kühlfahrzeug.",
      insuranceValue: "Geben Sie für die Versicherung den deklarierten Warenwert ein.",
      tempRange: "Die Mindesttemperatur muss unter der Höchsttemperatur liegen.",
      adrRequired: "Für ADR sind UN-Nummer, Klasse und Packing Group erforderlich.",
      calculatedVehicle: "Ausgewähltes Fahrzeug",
      calculatedVolume: "Volumen",
      breakdown: "Preisaufteilung",
      lineTransport: "Basistransport",
      lineCargo: "Ladungszuschlag",
      lineUrgency: "Expresszuschlag",
      lineDate: "Kurzfristige Beladung",
      lineCustoms: "Zollunterstützung",
      lineInsurance: "Versicherung",
      lineAdr: "ADR-Vorbereitung",
      lineTemperature: "Temperaturkontrolle",
      estimateDisclaimer: "Dies ist eine Frontend-Schätzung. Das verbindliche Angebot bestätigt ein Logistiker nach Dokumentenprüfung.",
      emptyBreakdown: "Vervollständigen Sie die Angaben für die Berechnung.",
      today: "Heute"
    },
    ka: {
      title: "ტვირთის დეტალური პარამეტრები",
      intro: "მიუთითეთ ზომები, ავტომობილი და დამატებითი მომსახურებები. მოცულობა და სავარაუდო ფასი ავტომატურად გამოითვლება.",
      pallets: "პალეტები / ადგილები",
      length: "სიგრძე",
      width: "სიგანე",
      height: "სიმაღლე",
      perPallet: "ერთი პალეტის ან ადგილის ზომები (სმ)",
      volume: "გამოთვლილი მოცულობა",
      loadingDate: "დატვირთვის თარიღი",
      vehicle: "ავტომობილის ტიპი",
      vehicleAuto: "ავტომატური შერჩევა",
      vehicleVan: "მცირე ფურგონი",
      vehicleCurtain: "ტენტიანი სატვირთო",
      vehicleMega: "MEGA ტენტი",
      vehicleReefer: "რეფრიჟერატორი",
      extras: "დამატებითი მომსახურებები",
      customs: "საბაჟო მხარდაჭერა",
      customsHint: "დოკუმენტების შემოწმება და დეკლარაციის კოორდინაცია",
      insurance: "ტვირთის დაზღვევა",
      insuranceHint: "სავარაუდო თანხა დეკლარირებული ღირებულებით",
      declaredValue: "ტვირთის დეკლარირებული ღირებულება (€)",
      temperatureTitle: "ტემპერატურის რეჟიმი",
      tempMin: "მინიმუმი °C",
      tempMax: "მაქსიმუმი °C",
      adrTitle: "ADR მონაცემები",
      unNumber: "UN ნომერი",
      adrClass: "ADR კლასი",
      packingGroup: "Packing Group",
      packingGroupChoose: "აირჩიეთ",
      validationTitle: "შეამოწმეთ მონაცემები",
      invalidPositive: "წონა, ადგილების რაოდენობა და ზომები ნულზე მეტი უნდა იყოს.",
      invalidDate: "დატვირთვის თარიღი დღევანდელზე ადრე ვერ იქნება.",
      capacityError: "არჩეული ავტომობილი ძალიან მცირეა. აირჩიეთ ავტომატური შერჩევა ან უფრო დიდი ავტომობილი.",
      oversizeError: "ტვირთი სტანდარტულ ლიმიტებს აჭარბებს. დაუკავშირდით ლოგისტს.",
      temperatureVehicle: "ტემპერატურულ ტვირთს რეფრიჟერატორი სჭირდება.",
      insuranceValue: "დაზღვევისთვის მიუთითეთ დეკლარირებული ღირებულება.",
      tempRange: "მინიმალური ტემპერატურა მაქსიმალურზე დაბალი უნდა იყოს.",
      adrRequired: "ADR ტვირთს სჭირდება UN ნომერი, კლასი და Packing Group.",
      calculatedVehicle: "შერჩეული ავტომობილი",
      calculatedVolume: "მოცულობა",
      breakdown: "ფასის სტრუქტურა",
      lineTransport: "ძირითადი ტრანსპორტი",
      lineCargo: "ტვირთის ტიპის დანამატი",
      lineUrgency: "ექსპრეს დანამატი",
      lineDate: "სასწრაფო დატვირთვა",
      lineCustoms: "საბაჟო მხარდაჭერა",
      lineInsurance: "დაზღვევა",
      lineAdr: "ADR მომზადება",
      lineTemperature: "ტემპერატურის კონტროლი",
      estimateDisclaimer: "ეს არის საორიენტაციო frontend-ანგარიში. საბოლოო შეთავაზებას ლოგისტი ადასტურებს დოკუმენტების შემოწმების შემდეგ.",
      emptyBreakdown: "შეავსეთ მონაცემები ფასის გამოსათვლელად.",
      today: "დღეს"
    },
    es: {
      title: "Parámetros detallados de la carga",
      intro: "Introduzca dimensiones, vehículo y servicios adicionales. El volumen y el precio estimado se calcularán automáticamente.",
      pallets: "Palés / bultos",
      length: "Longitud",
      width: "Anchura",
      height: "Altura",
      perPallet: "Dimensiones por palé o bulto (cm)",
      volume: "Volumen calculado",
      loadingDate: "Fecha de carga",
      vehicle: "Tipo de vehículo",
      vehicleAuto: "Seleccionar automáticamente",
      vehicleVan: "Furgoneta pequeña",
      vehicleCurtain: "Camión con lona",
      vehicleMega: "Remolque MEGA",
      vehicleReefer: "Camión frigorífico",
      extras: "Servicios adicionales",
      customs: "Asistencia aduanera",
      customsHint: "Revisión documental y coordinación de la declaración",
      insurance: "Seguro de carga",
      insuranceHint: "Estimado según el valor declarado",
      declaredValue: "Valor declarado de la carga (€)",
      temperatureTitle: "Régimen de temperatura",
      tempMin: "Mínimo °C",
      tempMax: "Máximo °C",
      adrTitle: "Datos ADR",
      unNumber: "Número UN",
      adrClass: "Clase ADR",
      packingGroup: "Packing Group",
      packingGroupChoose: "Elegir",
      validationTitle: "Revise los datos",
      invalidPositive: "El peso, los bultos y las dimensiones deben ser mayores que cero.",
      invalidDate: "La fecha de carga no puede ser anterior a hoy.",
      capacityError: "El vehículo elegido es demasiado pequeño. Use la selección automática o elija uno mayor.",
      oversizeError: "La carga supera los límites estándar. Contacte con logística.",
      temperatureVehicle: "La carga con temperatura requiere un vehículo frigorífico.",
      insuranceValue: "Introduzca el valor declarado para calcular el seguro.",
      tempRange: "La temperatura mínima debe ser inferior a la máxima.",
      adrRequired: "ADR requiere número UN, clase y Packing Group.",
      calculatedVehicle: "Vehículo seleccionado",
      calculatedVolume: "Volumen",
      breakdown: "Desglose del precio",
      lineTransport: "Transporte base",
      lineCargo: "Coeficiente del tipo de carga",
      lineUrgency: "Recargo exprés",
      lineDate: "Carga con poca antelación",
      lineCustoms: "Asistencia aduanera",
      lineInsurance: "Seguro",
      lineAdr: "Preparación ADR",
      lineTemperature: "Control de temperatura",
      estimateDisclaimer: "Este es un cálculo frontend orientativo. La oferta final la confirma logística tras revisar la documentación.",
      emptyBreakdown: "Complete los datos para calcular.",
      today: "Hoy"
    },
    fr: {
      title: "Paramètres détaillés du chargement",
      intro: "Saisissez les dimensions, le véhicule et les services optionnels. Le volume et le prix estimé seront calculés automatiquement.",
      pallets: "Palettes / colis",
      length: "Longueur",
      width: "Largeur",
      height: "Hauteur",
      perPallet: "Dimensions par palette ou colis (cm)",
      volume: "Volume calculé",
      loadingDate: "Date de chargement",
      vehicle: "Type de véhicule",
      vehicleAuto: "Sélection automatique",
      vehicleVan: "Petit fourgon",
      vehicleCurtain: "Camion bâché",
      vehicleMega: "Remorque MEGA",
      vehicleReefer: "Camion frigorifique",
      extras: "Services optionnels",
      customs: "Assistance douanière",
      customsHint: "Contrôle documentaire et coordination de la déclaration",
      insurance: "Assurance marchandises",
      insuranceHint: "Estimation selon la valeur déclarée",
      declaredValue: "Valeur déclarée de la marchandise (€)",
      temperatureTitle: "Régime de température",
      tempMin: "Minimum °C",
      tempMax: "Maximum °C",
      adrTitle: "Données ADR",
      unNumber: "Numéro UN",
      adrClass: "Classe ADR",
      packingGroup: "Packing Group",
      packingGroupChoose: "Choisir",
      validationTitle: "Vérifiez les données",
      invalidPositive: "Le poids, le nombre de colis et les dimensions doivent être supérieurs à zéro.",
      invalidDate: "La date de chargement ne peut pas être antérieure à aujourd’hui.",
      capacityError: "Le véhicule choisi est trop petit. Utilisez la sélection automatique ou choisissez un véhicule plus grand.",
      oversizeError: "Le chargement dépasse les limites standard. Contactez un logisticien.",
      temperatureVehicle: "Un chargement sous température nécessite un véhicule frigorifique.",
      insuranceValue: "Saisissez la valeur déclarée pour calculer l’assurance.",
      tempRange: "La température minimale doit être inférieure à la maximale.",
      adrRequired: "L’ADR exige un numéro UN, une classe et un Packing Group.",
      calculatedVehicle: "Véhicule sélectionné",
      calculatedVolume: "Volume",
      breakdown: "Détail du prix",
      lineTransport: "Transport de base",
      lineCargo: "Coefficient du type de fret",
      lineUrgency: "Supplément express",
      lineDate: "Chargement à court préavis",
      lineCustoms: "Assistance douanière",
      lineInsurance: "Assurance",
      lineAdr: "Préparation ADR",
      lineTemperature: "Contrôle de température",
      estimateDisclaimer: "Ceci est une estimation frontend. L’offre finale est confirmée par un logisticien après contrôle des documents.",
      emptyBreakdown: "Complétez les données pour calculer.",
      today: "Aujourd’hui"
    }
  };

  const localeByLanguage = { tk: "tk-TM", ru: "ru-RU", en: "en-GB", pl: "pl-PL", de: "de-DE", ka: "ka-GE", es: "es-ES", fr: "fr-FR" };
  const capacities = {
    van: { weight: 1.2, pallets: 8, volume: 18, rate: 0.68, label: "vehicleVan" },
    curtain: { weight: 24, pallets: 33, volume: 90, rate: 0.92, label: "vehicleCurtain" },
    mega: { weight: 24, pallets: 33, volume: 100, rate: 1.02, label: "vehicleMega" },
    reefer: { weight: 22, pallets: 33, volume: 86, rate: 1.18, label: "vehicleReefer" }
  };

  const details = document.createElement("details");
  details.className = "quote-pro-details";
  details.open = true;
  details.innerHTML = `
    <summary>
      <span><strong data-quote-pro="title"></strong><small data-quote-pro="intro"></small></span>
      <i aria-hidden="true"></i>
    </summary>
    <div class="quote-pro-body">
      <div class="quote-pro-grid">
        <label><span data-quote-pro="pallets"></span><input id="palletCount" type="number" min="1" max="99" step="1" value="10" required /></label>
        <label><span data-quote-pro="loadingDate"></span><input id="loadingDate" type="date" required /></label>
        <label class="quote-pro-span-2"><span data-quote-pro="vehicle"></span><select id="vehicleType">
          <option value="auto" data-quote-pro-option="vehicleAuto"></option>
          <option value="van" data-quote-pro-option="vehicleVan"></option>
          <option value="curtain" data-quote-pro-option="vehicleCurtain"></option>
          <option value="mega" data-quote-pro-option="vehicleMega"></option>
          <option value="reefer" data-quote-pro-option="vehicleReefer"></option>
        </select></label>
      </div>

      <fieldset class="quote-pro-dimensions">
        <legend data-quote-pro="perPallet"></legend>
        <div class="quote-pro-dimension-grid">
          <label><span data-quote-pro="length"></span><div class="quote-pro-unit"><input id="cargoLength" type="number" min="1" step="1" value="120" required /><b>cm</b></div></label>
          <label><span data-quote-pro="width"></span><div class="quote-pro-unit"><input id="cargoWidth" type="number" min="1" step="1" value="80" required /><b>cm</b></div></label>
          <label><span data-quote-pro="height"></span><div class="quote-pro-unit"><input id="cargoHeight" type="number" min="1" step="1" value="150" required /><b>cm</b></div></label>
          <div class="quote-pro-volume"><span data-quote-pro="volume"></span><strong id="cargoVolume">14.40 m³</strong></div>
        </div>
      </fieldset>

      <fieldset class="quote-pro-extras">
        <legend data-quote-pro="extras"></legend>
        <div class="quote-pro-toggle-grid">
          <label class="quote-pro-toggle"><input id="customsSupport" type="checkbox" /><span><b data-quote-pro="customs"></b><small data-quote-pro="customsHint"></small></span></label>
          <label class="quote-pro-toggle"><input id="cargoInsurance" type="checkbox" /><span><b data-quote-pro="insurance"></b><small data-quote-pro="insuranceHint"></small></span></label>
        </div>
        <div class="quote-pro-conditional" id="insuranceDetails" hidden>
          <label><span data-quote-pro="declaredValue"></span><div class="quote-pro-unit quote-pro-money"><b>€</b><input id="declaredValue" type="number" min="1" step="100" value="25000" /></div></label>
        </div>
      </fieldset>

      <fieldset class="quote-pro-conditional" id="temperatureDetails" hidden>
        <legend data-quote-pro="temperatureTitle"></legend>
        <div class="quote-pro-grid">
          <label><span data-quote-pro="tempMin"></span><input id="tempMin" type="number" step="1" value="2" /></label>
          <label><span data-quote-pro="tempMax"></span><input id="tempMax" type="number" step="1" value="8" /></label>
        </div>
      </fieldset>

      <fieldset class="quote-pro-conditional" id="adrDetails" hidden>
        <legend data-quote-pro="adrTitle"></legend>
        <div class="quote-pro-grid quote-pro-grid-3">
          <label><span data-quote-pro="unNumber"></span><input id="unNumber" type="text" maxlength="12" placeholder="UN 1203" /></label>
          <label><span data-quote-pro="adrClass"></span><input id="adrClass" type="text" maxlength="8" placeholder="3" /></label>
          <label><span data-quote-pro="packingGroup"></span><select id="packingGroup"><option value="" data-quote-pro-option="packingGroupChoose"></option><option value="I">I</option><option value="II">II</option><option value="III">III</option></select></label>
        </div>
      </fieldset>

      <div class="quote-pro-error" id="quoteProError" role="alert" aria-live="assertive" hidden><strong data-quote-pro="validationTitle"></strong><p></p></div>
    </div>`;

  const breakdown = document.createElement("section");
  breakdown.className = "quote-pro-result";
  breakdown.setAttribute("aria-live", "polite");
  breakdown.innerHTML = `
    <div class="quote-pro-result-head">
      <div><span data-quote-pro="calculatedVehicle"></span><strong id="calculatedVehicle">—</strong></div>
      <div><span data-quote-pro="calculatedVolume"></span><strong id="calculatedVolume">14.40 m³</strong></div>
    </div>
    <div class="quote-pro-breakdown">
      <h4 data-quote-pro="breakdown"></h4>
      <div id="quoteBreakdownLines"><p class="quote-pro-empty" data-quote-pro="emptyBreakdown"></p></div>
    </div>
    <p class="quote-pro-disclaimer" data-quote-pro="estimateDisclaimer"></p>`;

  originalGrid.insertAdjacentElement("afterend", details);
  priceResult.insertAdjacentElement("afterend", breakdown);
  form.classList.add("quote-pro-ready");

  const fields = {
    pallets: document.getElementById("palletCount"),
    loadingDate: document.getElementById("loadingDate"),
    vehicle: document.getElementById("vehicleType"),
    length: document.getElementById("cargoLength"),
    width: document.getElementById("cargoWidth"),
    height: document.getElementById("cargoHeight"),
    volume: document.getElementById("cargoVolume"),
    customs: document.getElementById("customsSupport"),
    insurance: document.getElementById("cargoInsurance"),
    declaredValue: document.getElementById("declaredValue"),
    insuranceDetails: document.getElementById("insuranceDetails"),
    temperatureDetails: document.getElementById("temperatureDetails"),
    tempMin: document.getElementById("tempMin"),
    tempMax: document.getElementById("tempMax"),
    adrDetails: document.getElementById("adrDetails"),
    unNumber: document.getElementById("unNumber"),
    adrClass: document.getElementById("adrClass"),
    packingGroup: document.getElementById("packingGroup"),
    error: document.getElementById("quoteProError"),
    calculatedVehicle: document.getElementById("calculatedVehicle"),
    calculatedVolume: document.getElementById("calculatedVolume"),
    lines: document.getElementById("quoteBreakdownLines")
  };

  let lastResult = null;

  function currentLanguage() {
    const language = document.documentElement.lang;
    return dictionary[language] ? language : "tk";
  }

  function t(key) {
    return dictionary[currentLanguage()][key] || dictionary.en[key] || key;
  }

  function localDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function setInitialDate() {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    fields.loadingDate.min = localDateString(today);
    if (!fields.loadingDate.value) fields.loadingDate.value = localDateString(tomorrow);
  }

  function volumeValue() {
    const pallets = Number(fields.pallets.value);
    const length = Number(fields.length.value);
    const width = Number(fields.width.value);
    const height = Number(fields.height.value);
    if (![pallets, length, width, height].every(value => Number.isFinite(value) && value > 0)) return 0;
    return pallets * length * width * height / 1_000_000;
  }

  function formatNumber(value, digits = 0) {
    return new Intl.NumberFormat(localeByLanguage[currentLanguage()] || "en-GB", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(value);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat(localeByLanguage[currentLanguage()] || "en-GB", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(value);
  }

  function updateVolume() {
    const volume = volumeValue();
    const label = `${formatNumber(volume, 2)} m³`;
    fields.volume.textContent = label;
    fields.calculatedVolume.textContent = label;
    return volume;
  }

  function cargoMode() {
    const value = Number(cargoSelect.value);
    if (value >= 1.39) return "adr";
    if (value >= 1.24 && value < 1.39) return "temperature";
    return "standard";
  }

  function updateConditionalFields() {
    const mode = cargoMode();
    fields.insuranceDetails.hidden = !fields.insurance.checked;
    fields.temperatureDetails.hidden = mode !== "temperature";
    fields.adrDetails.hidden = mode !== "adr";
    if (mode === "temperature" && fields.vehicle.value === "auto") fields.vehicle.dataset.prefer = "reefer";
    else delete fields.vehicle.dataset.prefer;
  }

  function chooseVehicle(weight, pallets, volume, mode) {
    if (fields.vehicle.value !== "auto") return fields.vehicle.value;
    if (mode === "temperature") return "reefer";
    if (weight <= capacities.van.weight && pallets <= capacities.van.pallets && volume <= capacities.van.volume) return "van";
    if (volume > capacities.curtain.volume) return "mega";
    return "curtain";
  }

  function validationMessage() {
    const distance = Number(distanceInput.value);
    const weight = Number(weightInput.value);
    const pallets = Number(fields.pallets.value);
    const length = Number(fields.length.value);
    const width = Number(fields.width.value);
    const height = Number(fields.height.value);
    const volume = volumeValue();
    const mode = cargoMode();

    if (![distance, weight, pallets, length, width, height].every(value => Number.isFinite(value) && value > 0)) return t("invalidPositive");

    const today = localDateString(new Date());
    if (!fields.loadingDate.value || fields.loadingDate.value < today) return t("invalidDate");
    if (weight > 24 || pallets > 33 || volume > 100) return t("oversizeError");

    const vehicle = chooseVehicle(weight, pallets, volume, mode);
    const capacity = capacities[vehicle];
    if (!capacity || weight > capacity.weight || pallets > capacity.pallets || volume > capacity.volume) return t("capacityError");
    if (mode === "temperature" && vehicle !== "reefer") return t("temperatureVehicle");

    if (fields.insurance.checked && !(Number(fields.declaredValue.value) > 0)) return t("insuranceValue");
    if (mode === "temperature" && !(Number(fields.tempMin.value) < Number(fields.tempMax.value))) return t("tempRange");
    if (mode === "adr" && (!fields.unNumber.value.trim() || !fields.adrClass.value.trim() || !fields.packingGroup.value)) return t("adrRequired");
    return "";
  }

  function setError(message) {
    fields.error.hidden = !message;
    fields.error.querySelector("p").textContent = message;
    form.classList.toggle("quote-pro-invalid", Boolean(message));
  }

  function daysUntilLoading() {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const selected = new Date(`${fields.loadingDate.value}T00:00:00`);
    return Math.round((selected - start) / 86_400_000);
  }

  function calculateQuote() {
    const error = validationMessage();
    setError(error);
    if (error) {
      priceResult.querySelector("strong").textContent = "—";
      fields.lines.innerHTML = `<p class="quote-pro-empty">${t("emptyBreakdown")}</p>`;
      fields.calculatedVehicle.textContent = "—";
      lastResult = null;
      return null;
    }

    const distance = Number(distanceInput.value);
    const weight = Number(weightInput.value);
    const pallets = Number(fields.pallets.value);
    const volume = volumeValue();
    const cargoMultiplier = Math.max(1, Number(cargoSelect.value) || 1);
    const urgencyMultiplier = Math.max(1, Number(urgencySelect.value) || 1);
    const mode = cargoMode();
    const vehicle = chooseVehicle(weight, pallets, volume, mode);
    const vehicleData = capacities[vehicle];

    const transport = distance * vehicleData.rate + 250 + weight * 32 + volume * 5 + pallets * 7;
    const cargoSurcharge = transport * (cargoMultiplier - 1);
    const urgencySurcharge = (transport + cargoSurcharge) * (urgencyMultiplier - 1);
    const shortNotice = urgencyMultiplier === 1 && daysUntilLoading() <= 2 ? (transport + cargoSurcharge) * 0.08 : 0;
    const customs = fields.customs.checked ? 260 : 0;
    const insurance = fields.insurance.checked ? Math.max(85, Number(fields.declaredValue.value) * 0.0035) : 0;
    const adr = mode === "adr" ? 190 : 0;
    const temperature = mode === "temperature" ? 160 + distance * 0.06 : 0;

    const subtotal = transport + cargoSurcharge + urgencySurcharge + shortNotice + customs + insurance + adr + temperature;
    const low = Math.round(subtotal / 10) * 10;
    const high = Math.round(subtotal * 1.09 / 10) * 10;

    const lines = [
      ["lineTransport", transport],
      ["lineCargo", cargoSurcharge],
      ["lineUrgency", urgencySurcharge],
      ["lineDate", shortNotice],
      ["lineCustoms", customs],
      ["lineInsurance", insurance],
      ["lineAdr", adr],
      ["lineTemperature", temperature]
    ].filter(([, value], index) => index === 0 || value > 0.5);

    lastResult = { vehicle, volume, low, high, lines };
    renderResult(lastResult);
    return lastResult;
  }

  function renderResult(result) {
    if (!result) return;
    fields.calculatedVehicle.textContent = t(capacities[result.vehicle].label);
    fields.calculatedVolume.textContent = `${formatNumber(result.volume, 2)} m³`;
    priceResult.querySelector("strong").textContent = `${formatCurrency(result.low)} – ${formatCurrency(result.high)}`;
    fields.lines.innerHTML = result.lines.map(([key, value]) => `
      <div class="quote-pro-line"><span>${t(key)}</span><strong>${formatCurrency(value)}</strong></div>`).join("");
  }

  function applyTranslations() {
    document.querySelectorAll("[data-quote-pro]").forEach(element => {
      const value = t(element.dataset.quotePro);
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-quote-pro-option]").forEach(option => {
      const value = t(option.dataset.quoteProOption);
      if (value) option.textContent = value;
    });
    updateVolume();
    if (lastResult) renderResult(lastResult);
  }

  [fields.pallets, fields.length, fields.width, fields.height].forEach(input => {
    input.addEventListener("input", updateVolume);
  });
  fields.insurance.addEventListener("change", updateConditionalFields);
  cargoSelect.addEventListener("change", updateConditionalFields);

  form.addEventListener("submit", event => {
    event.preventDefault();
    calculateQuote();
  });

  new MutationObserver(applyTranslations)
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  setInitialDate();
  updateConditionalFields();
  applyTranslations();
  calculateQuote();
})();