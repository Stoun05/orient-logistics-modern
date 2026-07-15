# ORIENT Logistics — Google Sheets sargyt backend sazlamasy

Bu bukjadaky `Code.gs` Google Apps Script web app hökmünde işleýär. GitHub-a Telegram tokeni, Google Sheet ID-si ýa-da gizlin açar ýazylmaly däl.

## 1. Google Sheet döret

1. Täze Google Sheet aç.
2. URL-däki `/d/` bilen `/edit` aralygyndaky Sheet ID-ni göçür.
3. Tablisada öňünden sütün döretmek hökman däl; `setupOrderSheet()` muny özi edýär.

## 2. Apps Script proýektini döret

1. Google Sheet-de **Extensions → Apps Script** aç.
2. `Code.gs` içine şu bukjadaky kody goý.
3. Project Settings-de **Script Properties** bölümine geç.
4. Şu sazlamalary goş:

| Property | Hökmany | Mysal |
|---|---:|---|
| `SHEET_ID` | Hawa | Google Sheet ID |
| `SHEET_NAME` | Ýok | `Orders` |
| `NOTIFY_EMAIL` | Ýok | `dispatch@company.com` |
| `TELEGRAM_BOT_TOKEN` | Ýok | BotFather tokeni |
| `TELEGRAM_CHAT_ID` | Ýok | Telegram chat ID |

## 3. Tablisany taýýarla

Apps Script editorynda `setupOrderSheet` funksiýasyny bir gezek işlet. Google zerur rugsatlary sorar. Funksiýa `Orders` sahypasyny, sözbaşylary we esasy dizaýny döredýär.

## 4. Web app hökmünde deploy et

1. **Deploy → New deployment** saýla.
2. Type: **Web app**.
3. Execute as: **Me**.
4. Who has access: saýt müşderileriniň ulanyp biljek derejesi, adatça **Anyone**.
5. Deploy et we `/exec` bilen gutarýan URL-ni göçür.

## 5. Saýta birikdir

`config.js` içinde:

```js
orderIntake: {
  endpoint: "GOOGLE_APPS_SCRIPT_EXEC_URL",
  timeoutMs: 15000,
  duplicateWindowMs: 120000,
  allowOpaqueFallback: false
}
```

`endpoint` ýerine deploy URL-ni goý. Tokenleri ýa-da Sheet ID-ni `config.js` içine ýazma.

## 6. Telegram sazlamasy

Telegram hökmany däl. BotFather arkaly bot döredip, tokeni diňe Apps Script Properties-de sakla. `TELEGRAM_CHAT_ID` hem şol ýerde bolmaly.

## Howpsuzlyk bellikleri

- Frontend-de görünýän maglumatlary gizlin açar hökmünde ulanma.
- Apps Script web app URL-si spamdan doly gorag däldir; backend honeypot, validasiýa, gysga wagtlaýyn duplicate cache we Sheet lock ulanýar.
- Köp traffikli önümçilik üçin Cloudflare Turnstile/reCAPTCHA, öz API backend-i, güýçli rate limiting we audit logging goşmak maslahat berilýär.
- Müşderiniň razylygy bolmazdan şahsy maglumat ýygnama.
