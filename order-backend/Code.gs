/**
 * ORIENT Logistics — Google Apps Script order intake backend.
 * Required Script Property: SHEET_ID
 * Optional: SHEET_NAME, NOTIFY_EMAIL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 */

const ORDER_HEADERS = [
  'Created At', 'Order ID', 'Status', 'Quote Reference', 'Language',
  'Company', 'Contact Name', 'Phone', 'Email',
  'From', 'To', 'Distance (km)', 'Loading Date',
  'Weight (t)', 'Pallets', 'Volume', 'Dimensions (cm)',
  'Cargo Type', 'Urgency', 'Vehicle', 'Selected Service',
  'Customs', 'Insurance', 'Declared Value (€)',
  'Temperature', 'ADR', 'Estimated Price', 'Price Breakdown',
  'Source', 'Page URL'
];

function doGet() {
  return jsonOutput_({ ok: true, service: 'ORIENT order intake', timestamp: new Date().toISOString() });
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const order = validateAndNormalize_(payload);

    if (order.website) return jsonOutput_({ ok: true, orderId: order.orderId });

    const duplicate = findDuplicate_(order);
    if (duplicate) return jsonOutput_({ ok: true, duplicate: true, orderId: duplicate });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const duplicateInsideLock = findDuplicate_(order);
      if (duplicateInsideLock) return jsonOutput_({ ok: true, duplicate: true, orderId: duplicateInsideLock });
      appendOrder_(order);
      rememberOrder_(order);
    } finally {
      lock.releaseLock();
    }

    try { sendEmailNotification_(order); }
    catch (emailError) { console.error('Email notification failed:', emailError); }
    try { sendTelegramNotification_(order); }
    catch (telegramError) { console.error('Telegram notification failed:', telegramError); }

    return jsonOutput_({ ok: true, orderId: order.orderId });
  } catch (error) {
    console.error(error);
    return jsonOutput_({ ok: false, message: String(error && error.message ? error.message : error) });
  }
}

function setupOrderSheet() {
  const sheet = getOrderSheet_();
  ensureHeaders_(sheet);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, ORDER_HEADERS.length);
  return `Ready: ${sheet.getParent().getUrl()}#gid=${sheet.getSheetId()}`;
}

function parsePayload_(e) {
  const raw = e && e.postData && e.postData.contents
    ? e.postData.contents
    : e && e.parameter && e.parameter.payload
      ? e.parameter.payload
      : '';
  if (!raw) throw new Error('Empty request body.');
  try { return JSON.parse(raw); }
  catch (error) { throw new Error('Invalid JSON request body.'); }
}

function validateAndNormalize_(payload) {
  const quote = payload && payload.quote ? payload.quote : {};
  const client = payload && payload.client ? payload.client : {};
  const orderId = text_(payload.orderId, 60);
  const name = text_(client.name, 120);
  const phone = text_(client.phone, 60);
  const email = text_(client.email, 160).toLowerCase();

  if (!/^OR-REQ-\d{8}-[A-Z0-9]{4,10}$/.test(orderId)) throw new Error('Invalid order ID.');
  if (!name) throw new Error('Contact name is required.');
  if (phone.replace(/\D/g, '').length < 7) throw new Error('Invalid phone number.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Invalid e-mail address.');
  if (!client.consent) throw new Error('Consent is required.');
  if (!text_(quote.from, 180) || !text_(quote.to, 180)) throw new Error('Route is required.');
  if (!text_(quote.price, 80)) throw new Error('Calculated price is required.');

  return {
    submittedAt: safeDate_(payload.submittedAt),
    orderId,
    quoteReference: text_(quote.quoteReference, 80),
    language: text_(payload.language, 10),
    source: text_(payload.source, 80),
    pageUrl: text_(payload.pageUrl, 500),
    website: text_(payload.website, 200),
    client: { company: text_(client.company, 160), name, phone, email },
    quote: {
      from: text_(quote.from, 180), to: text_(quote.to, 180), distanceKm: number_(quote.distanceKm), loadingDate: text_(quote.loadingDate, 30),
      weightT: number_(quote.weightT), pallets: number_(quote.pallets), volumeM3: text_(quote.volumeM3, 40), dimensionsCm: text_(quote.dimensionsCm, 80),
      cargoType: text_(quote.cargoType, 100), urgency: text_(quote.urgency, 100), vehicle: text_(quote.vehicle, 120), selectedService: text_(quote.selectedService, 120),
      customs: Boolean(quote.customs), insurance: Boolean(quote.insurance), declaredValue: number_(quote.declaredValue),
      temperature: quote.temperature || {}, adr: quote.adr || {}, price: text_(quote.price, 80),
      breakdown: Array.isArray(quote.breakdown) ? quote.breakdown.slice(0, 20) : []
    }
  };
}

function appendOrder_(order) {
  const sheet = getOrderSheet_();
  ensureHeaders_(sheet);
  const q = order.quote;
  const temperature = q.temperature && (q.temperature.min || q.temperature.max)
    ? `${text_(q.temperature.min, 20) || '—'}…${text_(q.temperature.max, 20) || '—'} °C`
    : '';
  const adr = q.adr && (q.adr.unNumber || q.adr.class || q.adr.packingGroup)
    ? `${text_(q.adr.unNumber, 30)} · ${text_(q.adr.class, 20)} · PG ${text_(q.adr.packingGroup, 10)}`
    : '';
  const breakdown = q.breakdown.map(line => `${text_(line.label, 100)}: ${text_(line.value, 60)}`).join(' | ');

  sheet.appendRow([
    order.submittedAt, order.orderId, 'New', order.quoteReference, order.language,
    order.client.company, order.client.name, order.client.phone, order.client.email,
    q.from, q.to, q.distanceKm, q.loadingDate,
    q.weightT, q.pallets, q.volumeM3, q.dimensionsCm,
    q.cargoType, q.urgency, q.vehicle, q.selectedService,
    q.customs ? 'Yes' : 'No', q.insurance ? 'Yes' : 'No', q.declaredValue || '',
    temperature, adr, q.price, breakdown,
    order.source, order.pageUrl
  ]);
}

function getOrderSheet_() {
  const properties = PropertiesService.getScriptProperties();
  const sheetId = properties.getProperty('SHEET_ID');
  if (!sheetId) throw new Error('Missing SHEET_ID Script Property.');
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const name = properties.getProperty('SHEET_NAME') || 'Orders';
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(ORDER_HEADERS);
    sheet.getRange(1, 1, 1, ORDER_HEADERS.length).setFontWeight('bold').setBackground('#153f37').setFontColor('#ffffff');
    return;
  }
  const current = sheet.getRange(1, 1, 1, ORDER_HEADERS.length).getValues()[0];
  if (current.join('|') !== ORDER_HEADERS.join('|')) throw new Error('Order sheet headers do not match the backend template.');
}

function findDuplicate_(order) {
  const cache = CacheService.getScriptCache();
  const direct = cache.get(`order:${order.orderId}`);
  if (direct) return direct;
  return cache.get(`fingerprint:${fingerprint_(order)}`) || '';
}

function rememberOrder_(order) {
  const cache = CacheService.getScriptCache();
  cache.put(`order:${order.orderId}`, order.orderId, 600);
  cache.put(`fingerprint:${fingerprint_(order)}`, order.orderId, 120);
}

function fingerprint_(order) {
  const source = JSON.stringify({ client: order.client, quote: order.quote });
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, source, Utilities.Charset.UTF_8);
  return Utilities.base64EncodeWebSafe(bytes).slice(0, 32);
}

function sendEmailNotification_(order) {
  const recipient = PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAIL');
  if (!recipient) return;
  const q = order.quote;
  const subject = `New logistics order ${order.orderId}: ${q.from} → ${q.to}`;
  const body = [
    `Order ID: ${order.orderId}`, `Quote: ${order.quoteReference || '—'}`,
    `Customer: ${order.client.company || '—'} / ${order.client.name}`,
    `Phone: ${order.client.phone}`, `Email: ${order.client.email}`,
    `Route: ${q.from} → ${q.to}`, `Distance: ${q.distanceKm} km`,
    `Loading date: ${q.loadingDate}`, `Cargo: ${q.weightT} t / ${q.pallets} pallets / ${q.volumeM3}`,
    `Vehicle: ${q.vehicle}`, `Service: ${q.selectedService}`, `Estimated price: ${q.price}`, `Page: ${order.pageUrl}`
  ].join('\n');
  MailApp.sendEmail(recipient, subject, body, { replyTo: order.client.email, name: 'ORIENT Logistics website' });
}

function sendTelegramNotification_(order) {
  const properties = PropertiesService.getScriptProperties();
  const token = properties.getProperty('TELEGRAM_BOT_TOKEN');
  const chatId = properties.getProperty('TELEGRAM_CHAT_ID');
  if (!token || !chatId) return;
  const q = order.quote;
  const text = [
    '🚚 New ORIENT Logistics order', `#${order.orderId}`, `${q.from} → ${q.to}`,
    `${q.weightT} t · ${q.pallets} pallets · ${q.vehicle}`, `${q.price}`,
    `${order.client.name} · ${order.client.phone}`
  ].join('\n');
  UrlFetchApp.fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'post', contentType: 'application/json',
    payload: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    muteHttpExceptions: true
  });
}

function jsonOutput_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function text_(value, maxLength) { return String(value == null ? '' : value).trim().slice(0, maxLength || 500); }
function number_(value) { const number = Number(value); return Number.isFinite(number) ? number : 0; }
function safeDate_(value) { const date = value ? new Date(value) : new Date(); return Number.isNaN(date.getTime()) ? new Date() : date; }
