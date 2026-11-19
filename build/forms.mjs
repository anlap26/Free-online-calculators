function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function L(en, ru) {
  return { en, ru };
}

const T = {
  calc: L("Calculate", "Посчитать"),
  copy: L("Copy", "Копировать"),
  copied: L("Copied", "Скопировано"),
  addLot: L("Add a purchase", "Добавить покупку"),
  addCoin: L("Add a coin", "Добавить монету"),
  addTrip: L("Add a trip", "Добавить поездку"),
  remove: L("Remove", "Убрать"),
  symbol: L("Currency symbol", "Знак валюты"),
  run: L("Run the test", "Запустить проверку"),
  encrypt: L("Encrypt", "Зашифровать"),
  decrypt: L("Decrypt", "Расшифровать")
};

function num(name, label, value, extra) {
  return `<label class="fld"><span>${esc(label)}</span><input name="${name}" type="number" inputmode="decimal" value="${esc(value)}" step="any" ${extra || ""}></label>`;
}
function text(name, label, value, extra) {
  const raw = extra || "";
  const typed = /type="([^"]+)"/.exec(raw);
  const type = typed ? typed[1] : "text";
  const rest = raw.replace(/type="[^"]+"/, "").trim();
  return `<label class="fld"><span>${esc(label)}</span><input name="${name}" type="${type}" value="${esc(value)}"${rest ? " " + rest : ""}></label>`;
}
function area(name, label, value) {
  return `<label class="fld"><span>${esc(label)}</span><textarea name="${name}">${esc(value)}</textarea></label>`;
}
function sel(name, label, options, current) {
  const opts = options.map(([v, lab]) => `<option value="${esc(v)}"${v === current ? " selected" : ""}>${esc(lab)}</option>`).join("");
  return `<label class="fld"><span>${esc(label)}</span><select name="${name}">${opts}</select></label>`;
}
function check(name, label, checked) {
  return `<label class="chk"><input name="${name}" type="checkbox"${checked ? " checked" : ""}><span>${esc(label)}</span></label>`;
}
function go(lang) {
  return `<button class="go" type="submit">${esc(T.calc[lang])}</button>`;
}
function copyBtn(lang) {
  return `<button class="ghost" type="button" data-copy="secret" data-copied="${esc(T.copied[lang])}">${esc(T.copy[lang])}</button>`;
}
function t(dict, lang) {
  return dict[lang];
}

const zones = [
  ["Europe/London", "London"],
  ["Europe/Lisbon", "Lisbon"],
  ["Europe/Berlin", "Berlin"],
  ["Europe/Paris", "Paris"],
  ["Europe/Athens", "Athens"],
  ["Europe/Nicosia", "Nicosia"],
  ["Europe/Moscow", "Moscow"],
  ["Asia/Dubai", "Dubai"],
  ["Asia/Tbilisi", "Tbilisi"],
  ["Asia/Yerevan", "Yerevan"],
  ["Asia/Kolkata", "India"],
  ["Asia/Bangkok", "Bangkok"],
  ["Asia/Singapore", "Singapore"],
  ["Asia/Tokyo", "Tokyo"],
  ["America/New_York", "New York"],
  ["America/Chicago", "Chicago"],
  ["America/Los_Angeles", "Los Angeles"],
  ["America/Sao_Paulo", "São Paulo"],
  ["UTC", "UTC"]
];

export function renderForm(calc, lang) {
  const f = {
    compound: () => `<form class="calc" data-calc="compound" data-autorun="1">
      <div class="row2">${num("principal", t(L("Starting amount", "Начальная сумма"), lang), "10000")}${num("pmt", t(L("Added each month", "Довнесение каждый месяц"), lang), "200")}</div>
      <div class="row3">${num("rate", t(L("Nominal annual rate, %", "Номинальная годовая ставка, %"), lang), "7")}${num("years", t(L("Years", "Лет"), lang), "10", 'min="0"')}${sel("compounds", t(L("Compounds per year", "Начислений в год"), lang), [["1", "1"], ["4", "4"], ["12", "12"], ["365", "365"]], "12")}</div>
      <div class="row2">${sel("timing", t(L("When the monthly sum is added", "Когда вносится ежемесячная сумма"), lang), [["end", t(L("End of the month", "В конце месяца"), lang)], ["begin", t(L("Start of the month", "В начале месяца"), lang)]], "end")}${text("symbol", t(T.symbol, lang), "")}</div>
      ${go(lang)}</form>`,
    average: () => `<form class="calc" data-calc="average" data-autorun="1">
      <div id="lots" class="grid">${lot(lang, "2", "3000", "0")}${lot(lang, "1", "3600", "0")}</div>
      <button class="ghost" type="button" data-add="#lots" data-template="#lot-tpl">${esc(T.addLot[lang])}</button>
      <div class="row3">${num("sellFee", t(L("Sale fee, %", "Комиссия продажи, %"), lang), "0")}${num("target", t(L("Target sale price (optional)", "Целевая цена продажи (необяз.)"), lang), "")}${text("symbol", t(T.symbol, lang), "")}</div>
      ${go(lang)}
      <template id="lot-tpl">${lot(lang, "", "", "0")}</template></form>`,
    staking: () => `<form class="calc" data-calc="staking" data-autorun="1">
      <div class="row3">${sel("mode", t(L("The rate you type is", "Ставка, которую вы вводите"), lang), [["apy", t(L("APY, effective yearly", "APY, эффективная годовая"), lang)], ["apr", t(L("APR, nominal", "APR, номинальная"), lang)]], "apy")}${num("compounds", t(L("Compounds per year, if APR", "Начислений в год, если APR"), lang), "12")}${num("years", t(L("Years", "Лет"), lang), "2")}</div>
      <div id="coins">${coin(lang, "USD coin", "1000", "5")}</div>
      <button class="ghost" type="button" data-add="#coins" data-template="#coin-tpl">${esc(T.addCoin[lang])}</button>
      ${go(lang)}
      <template id="coin-tpl">${coin(lang, "", "", "")}</template></form>`,
    fees: () => `<form class="calc" data-calc="fees" data-autorun="1">
      <div class="row3">${num("price", t(L("Quote price", "Котировка"), lang), "100")}${num("qty", t(L("Quantity", "Количество"), lang), "2")}${num("slippage", t(L("Slippage, %", "Проскальзывание, %"), lang), "0")}</div>
      <div class="row2">${num("maker", t(L("Maker fee, %", "Комиссия мейкера, %"), lang), "0.1")}${num("taker", t(L("Taker fee, %", "Комиссия тейкера, %"), lang), "0.1")}</div>
      <div class="row3">${sel("entry", t(L("Entry order", "Ордер на вход"), lang), [["taker", "Taker"], ["maker", "Maker"]], "taker")}${sel("exit", t(L("Exit order", "Ордер на выход"), lang), [["taker", "Taker"], ["maker", "Maker"]], "taker")}${sel("side", t(L("What to show", "Что показать"), lang), [["round", t(L("Round trip and break-even", "Круг и безубыток"), lang)], ["buy", t(L("Buy only", "Только покупка"), lang)], ["sell", t(L("Sell only", "Только продажа"), lang)]], "round")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    fire: () => `<form class="calc" data-calc="fire" data-autorun="1">
      <div class="row2">${num("expenses", t(L("Spending per year", "Расходы в год"), lang), "40000")}${num("withdrawal", t(L("Withdrawal rate, %", "Ставка изъятия, %"), lang), "4")}</div>
      <div class="row2">${num("portfolio", t(L("Portfolio today", "Портфель сегодня"), lang), "250000")}${num("pmt", t(L("Added each month", "Довнесение в месяц"), lang), "1000")}</div>
      <div class="row3">${num("rate", t(L("Expected nominal return, %", "Ожидаемая номинальная доходность, %"), lang), "7")}${num("dividend", t(L("Dividend yield, %", "Дивидендная доходность, %"), lang), "3")}${text("symbol", t(T.symbol, lang), "")}</div>
      <div class="row2">${num("currentAge", t(L("Age now", "Возраст сейчас"), lang), "35")}${num("retireAge", t(L("Age you would stop adding money", "Возраст, когда перестанете довнесения"), lang), "65")}</div>
      ${go(lang)}</form>`,
    inflation: () => `<form class="calc" data-calc="inflation" data-autorun="1">
      <div class="row3">${num("amount", t(L("Sum in today's money", "Сумма в сегодняшних деньгах"), lang), "100")}${num("years", t(L("Years", "Лет"), lang), "10")}${num("nominal", t(L("Nominal return, % (optional)", "Номинальная доходность, % (необяз.)"), lang), "5")}</div>
      <div class="row2">${text("nameA", t(L("First currency name", "Название первой валюты"), lang), "USD")}${num("infA", t(L("Its inflation, % per year", "Её инфляция, % в год"), lang), "3")}</div>
      <div class="row2">${text("nameB", t(L("Second currency name", "Название второй валюты"), lang), "EUR")}${num("infB", t(L("Its inflation, % per year", "Её инфляция, % в год"), lang), "2.5")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    position: () => `<form class="calc" data-calc="position" data-autorun="1">
      <div class="row3">${num("account", t(L("Account size", "Размер счёта"), lang), "10000")}${num("risk", t(L("Risk per trade, %", "Риск на сделку, %"), lang), "1")}${sel("side", t(L("Direction", "Направление"), lang), [["long", t(L("Long", "Лонг"), lang)], ["short", t(L("Short", "Шорт"), lang)]], "long")}</div>
      <div class="row3">${num("entry", t(L("Entry", "Вход"), lang), "50")}${num("stop", t(L("Stop", "Стоп"), lang), "48")}${num("target", t(L("Target (optional)", "Цель (необяз.)"), lang), "56")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    spread: () => `<form class="calc" data-calc="spread" data-autorun="1">
      <div class="row3">${num("amount", t(L("Amount you convert", "Сколько меняете"), lang), "1000")}${text("from", t(L("From", "Из"), lang), "USD")}${text("to", t(L("To", "В"), lang), "EUR")}</div>
      <div class="row3">${num("interbank", t(L("Interbank rate", "Межбанковский курс"), lang), "1.10")}${num("bank", t(L("Bank rate", "Курс банка"), lang), "1.07")}${num("alt", t(L("Alternative fee, % of the mid amount", "Комиссия альтернативы, % от межбанка"), lang), "0.5")}</div>
      ${go(lang)}</form>`,
    password: () => `<form class="calc" data-calc="password" data-autorun="1">
      ${sel("mode", t(L("Kind", "Тип"), lang), [["random", t(L("Random characters", "Случайные символы"), lang)], ["phrase", t(L("Passphrase", "Парольная фраза"), lang)]], "random")}
      <div class="row3">${num("length", t(L("Length", "Длина"), lang), "16", 'min="4"')}${num("words", t(L("Words, for a passphrase", "Слов во фразе"), lang), "6", 'min="3"')}${text("sep", t(L("Separator", "Разделитель"), lang), "-")}</div>
      ${check("lower", t(L("Lower case", "Строчные"), lang), true)}
      ${check("upper", t(L("Upper case", "Заглавные"), lang), true)}
      ${check("digit", t(L("Digits", "Цифры"), lang), true)}
      ${check("symbol", t(L("Symbols", "Знаки"), lang), false)}
      ${check("ambiguous", t(L("Keep lookalikes such as 0, O, 1, l", "Оставить похожие: 0, O, 1, l"), lang), false)}
      ${go(lang)} ${copyBtn(lang)}</form>`,
    strength: () => `<form class="calc" data-calc="strength">
      ${text("password", t(L("Password, checked only in this browser", "Пароль, проверка только в этом браузере"), lang), "", 'autocomplete="off" spellcheck="false"')}
      ${sel("guesses", t(L("Guesses per second", "Попыток в секунду"), lang), [["10000000000", t(L("10 billion, fast offline", "10 миллиардов, быстрый офлайн"), lang)], ["10000", t(L("10 thousand, online limit", "10 тысяч, онлайн-лимит"), lang)], ["1000", t(L("1 thousand, slow online", "1 тысяча, медленный онлайн"), lang)]], "10000000000")}
      ${go(lang)}</form>`,
    ip: () => `<form class="calc" data-calc="ip"><p class="fine">${esc(t(L("The lookup uses ipify and ipwho.is. Those services see the IP they are asked about. This site does not receive it.", "Запрос идёт в ipify и ipwho.is. Эти службы видят IP, о котором их спрашивают. Сайт его не получает."), lang))}</p><button class="go" type="submit">${esc(T.run[lang])}</button></form>`,
    email: () => `<form class="calc" data-calc="email" data-autorun="1">
      ${text("domain", t(L("Domain for the alias (you must own the mailbox)", "Домен для адреса (ящик должен быть ваш)"), lang), "example.com")}
      ${text("base", t(L("Your address, for a plus-tag (optional)", "Ваш адрес для плюс-метки (необяз.)"), lang), "")}
      ${text("tag", t(L("Tag", "Метка"), lang), "news")}
      ${text("check", t(L("Address to check", "Адрес для проверки"), lang), "")}
      ${go(lang)} ${copyBtn(lang)}</form>`,
    exif: () => `<form class="calc" data-calc="exif"><label class="fld"><span>${esc(t(L("Photo, it stays on this device", "Фото, оно остаётся на устройстве"), lang))}</span><input name="file" type="file" accept="image/*"></label><button class="go" type="submit">${esc(t(L("Read and strip", "Прочитать и убрать"), lang))}</button></form>`,
    aes: () => `<form class="calc" data-calc="aes">
      ${sel("mode", t(L("Action", "Действие"), lang), [["encrypt", T.encrypt[lang]], ["decrypt", T.decrypt[lang]]], "encrypt")}
      ${text("password", t(L("Password", "Пароль"), lang), "", 'autocomplete="off"')}
      ${area("text", t(L("Text", "Текст"), lang), "")}
      ${go(lang)} ${copyBtn(lang)}</form>`,
    hash: () => `<form class="calc" data-calc="hash">
      <div class="row2">${num("count", t(L("How many UUIDs", "Сколько UUID"), lang), "3", 'min="1" max="20"')}<div class="fld"><span>&nbsp;</span><button class="go" type="submit" data-action="uuid">UUID</button></div></div>
      ${area("text", t(L("Text to hash", "Текст для хеша"), lang), "hello")}
      <button class="go" type="submit" data-action="sha">SHA-256</button>
      <div class="row3">${num("min", t(L("Lowest integer", "Нижнее целое"), lang), "1")}${num("max", t(L("Highest integer", "Верхнее целое"), lang), "100")}<div class="fld"><span>&nbsp;</span><button class="go" type="submit" data-action="number">${esc(t(L("Random number", "Случайное число"), lang))}</button></div></div>
      <div class="row2">${sel("bits", t(L("Key length", "Длина ключа"), lang), [["128", "128"], ["256", "256"], ["512", "512"]], "256")}<div class="fld"><span>&nbsp;</span><button class="go" type="submit" data-action="key">${esc(t(L("Random key", "Случайный ключ"), lang))}</button></div></div>
      ${copyBtn(lang)}</form>`,
    schengen: () => `<form class="calc" data-calc="schengen" data-autorun="1">
      ${sel("mode", t(L("Count", "Подсчёт"), lang), [["schengen", t(L("Schengen 90 days in 180", "Шенген: 90 дней из 180"), lang)], ["year", t(L("Days in a calendar year", "Дни в календарном году"), lang)]], "schengen")}
      <div class="row2">${text("asof", t(L("Count the Schengen window on", "Окно Шенгена на дату"), lang), "2026-03-31", 'type="date"')}${num("year", t(L("Year for the 183-day count", "Год для подсчёта 183 дней"), lang), "2026")}</div>
      <div id="trips">${trip(lang, "2026-01-01", "2026-03-31")}</div>
      <button class="ghost" type="button" data-add="#trips" data-template="#trip-tpl">${esc(T.addTrip[lang])}</button>
      ${go(lang)}
      <template id="trip-tpl">${trip(lang, "", "")}</template></form>`,
    col: () => `<form class="calc" data-calc="col" data-autorun="1">
      <div class="row2">${sel("cityA", t(L("City where the salary is paid", "Город, где платят зарплату"), lang), [], "")}${sel("cityB", t(L("City you are comparing", "Город для сравнения"), lang), [], "")}</div>
      <div class="row2">${num("salary", t(L("Gross salary, same currency in both", "Зарплата до налогов, в одной валюте"), lang), "4000")}${text("symbol", t(T.symbol, lang), "")}</div>
      ${go(lang)}</form>`,
    meeting: () => `<form class="calc" data-calc="meeting" data-autorun="1">
      <div class="row3">${text("date", t(L("Date", "Дата"), lang), "2026-11-19", 'type="date"')}${text("time", t(L("Time", "Время"), lang), "15:00", 'type="time"')}${sel("zone", t(L("That time is in", "Это время в поясе"), lang), zones, "Europe/London")}</div>
      <fieldset class="fld"><legend>${esc(t(L("Also show", "Ещё показать"), lang))}</legend>
        ${zones.map(([v, lab]) => `<label class="chk"><input type="checkbox" name="zones" value="${esc(v)}"${["Europe/Berlin", "America/New_York", "Asia/Dubai", "Asia/Singapore"].includes(v) ? " checked" : ""}><span>${esc(lab)}</span></label>`).join("")}
      </fieldset>
      ${go(lang)}</form>`,
    esim: () => `<form class="calc" data-calc="esim" data-autorun="1">
      <div class="row3">${num("days", t(L("Days", "Дней"), lang), "10")}${num("roam", t(L("Roaming price per day", "Роуминг в день"), lang), "8")}${num("package", t(L("eSIM package price", "Цена пакета eSIM"), lang), "25")}</div>
      <div class="row3">${num("included", t(L("GB included", "ГБ в пакете"), lang), "5")}${num("use", t(L("GB you expect to use", "ГБ, которые потратите"), lang), "3")}${num("extra", t(L("Price per extra GB", "Цена лишнего ГБ"), lang), "4")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    freelance: () => `<form class="calc" data-calc="freelance" data-autorun="1">
      <div class="row3">${num("net", t(L("Net income you want per year", "Чистыми в год"), lang), "60000")}${num("tax", t(L("Tax and contributions, %", "Налог и взносы, %"), lang), "25")}${num("costs", t(L("Business costs per year", "Расходы бизнеса в год"), lang), "5000")}</div>
      <div class="row3">${num("vacation", t(L("Vacation weeks", "Недель отпуска"), lang), "4")}${num("sick", t(L("Sick days", "Больничных дней"), lang), "5")}${num("holidays", t(L("Weekday public holidays", "Праздников в будни"), lang), "8")}</div>
      <div class="row2">${num("hours", t(L("Hours you could work in a week", "Часов, которые можете работать в неделю"), lang), "40")}${num("util", t(L("Share that is billable, %", "Доля оплачиваемого времени, %"), lang), "60")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    llm: () => `<form class="calc" data-calc="llm" data-autorun="1">
      <p class="fine" data-price-note></p>
      ${sel("model", t(L("Model", "Модель"), lang), [], "")}
      <div class="row2">${num("inPrice", t(L("Input price per 1M tokens", "Цена входа за 1 млн токенов"), lang), "5")}${num("outPrice", t(L("Output price per 1M tokens", "Цена выхода за 1 млн токенов"), lang), "15")}</div>
      <div class="row3">${num("inTok", t(L("Input tokens per call", "Входных токенов на вызов"), lang), "1000")}${num("outTok", t(L("Output tokens per call", "Выходных токенов на вызов"), lang), "500")}${num("perDay", t(L("Calls per day", "Вызовов в день"), lang), "1000")}</div>
      ${go(lang)}</form>`,
    seo: () => `<form class="calc" data-calc="seo" data-autorun="1">
      ${area("text", t(L("Text", "Текст"), lang), lang === "ru" ? "Калькулятор считает слова, знаки и плотность ключа в браузере. Калькулятор не отправляет текст." : "This calculator counts words, characters, and keyword density in the browser. This calculator does not send the text anywhere.")}
      ${text("keyword", t(L("Keyword or phrase", "Ключ или фраза"), lang), lang === "ru" ? "калькулятор" : "calculator")}
      ${go(lang)}</form>`,
    meta: () => `<form class="calc" data-calc="meta" data-autorun="1">
      ${text("title", t(L("Title", "Заголовок"), lang), lang === "ru" ? "Калькулятор сложного процента" : "Compound Interest Calculator")}
      ${area("description", t(L("Description", "Описание"), lang), lang === "ru" ? "Бесплатный калькулятор сложного процента и регулярных взносов." : "Free compound interest calculator with monthly contributions.")}
      <div class="row2">${text("url", t(L("Canonical URL", "Канонический URL"), lang), "https://example.com/tool/")}${text("site", t(L("Site name", "Название сайта"), lang), "Example")}</div>
      <div class="row2">${text("image", t(L("Social image URL", "URL картинки"), lang), "https://example.com/og.png")}${text("type", t(L("og:type", "og:type"), lang), "website")}</div>
      ${text("twitter", t(L("Twitter handle (optional)", "Имя в Twitter (необяз.)"), lang), "")}
      ${go(lang)} ${copyBtn(lang)}</form>`,
    speed: () => `<form class="calc" data-calc="speed" data-autorun="1">
      <div class="row3">${num("sessions", t(L("Visits per month", "Визитов в месяц"), lang), "10000")}${num("cvr", t(L("Current conversion, %", "Текущая конверсия, %"), lang), "2")}${num("aov", t(L("Revenue per conversion", "Выручка с конверсии"), lang), "50")}</div>
      <div class="row3">${num("current", t(L("Current load, seconds", "Текущая загрузка, секунды"), lang), "4")}${num("faster", t(L("Faster load, seconds", "Более быстрая загрузка, секунды"), lang), "2")}${num("loss", t(L("Conversion kept away per extra second, %", "Какой процент конверсии забирает лишняя секунда"), lang), "7")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    robots: () => `<form class="calc" data-calc="robots">
      ${text("site", t(L("Site URL", "Адрес сайта"), lang), "https://example.com/")}
      ${area("disallow", t(L("Disallow, one path per line", "Disallow, по пути на строку"), lang), "/admin\n/draft")}
      ${area("allow", t(L("Allow, one path per line", "Allow, по пути на строку"), lang), "")}
      ${area("urls", t(L("URLs for the sitemap, one per line", "Адреса для sitemap, по одному на строку"), lang), "https://example.com/\nhttps://example.com/about/")}
      ${go(lang)}</form>`,
    image: () => `<form class="calc" data-calc="image">
      <label class="fld"><span>${esc(t(L("Image, processed locally", "Изображение, обработка на устройстве"), lang))}</span><input name="file" type="file" accept="image/*"></label>
      <div class="row3">${num("maxW", t(L("Max width", "Макс. ширина"), lang), "1600")}${num("maxH", t(L("Max height", "Макс. высота"), lang), "1600")}${num("quality", t(L("Quality, 1–100", "Качество, 1–100"), lang), "80")}</div>
      ${sel("format", t(L("Format", "Формат"), lang), [["image/webp", "WebP"], ["image/avif", "AVIF"], ["image/jpeg", "JPEG"], ["image/png", "PNG"]], "image/webp")}
      <button class="go" type="submit">${esc(t(L("Compress", "Сжать"), lang))}</button></form>`,
    utm: () => `<form class="calc" data-calc="utm" data-autorun="1">
      ${text("url", t(L("Landing page URL", "Адрес страницы"), lang), "https://example.com/pricing")}
      <div class="row3">${text("source", "utm_source", "newsletter")}${text("medium", "utm_medium", "email")}${text("campaign", "utm_campaign", "spring")}</div>
      <div class="row2">${text("term", "utm_term", "")}${text("content", "utm_content", "logo")}</div>
      <label class="fld"><span>${esc(t(L("Logo in the middle of the QR (optional)", "Логотип в центре QR (необяз.)"), lang))}</span><input name="logo" type="file" accept="image/*"></label>
      ${go(lang)} ${copyBtn(lang)}</form>`,
    format: () => `<form class="calc" data-calc="format" data-autorun="1">
      ${sel("mode", t(L("Format", "Формат"), lang), [["json", "JSON"], ["csv", "CSV"], ["sql", "SQL"]], "json")}
      ${num("indent", t(L("JSON indent", "Отступ JSON"), lang), "2")}
      ${area("text", t(L("Text", "Текст"), lang), '{"b":1,"a":[2,3]}')}
      ${go(lang)} ${copyBtn(lang)}</form>`,
    roas: () => `<form class="calc" data-calc="roas" data-autorun="1">
      <div class="row2">${num("spend", t(L("Ad spend", "Расход на рекламу"), lang), "1000")}${num("revenue", t(L("Revenue attributed to the ads", "Выручка, которую относите к рекламе"), lang), "4000")}</div>
      <div class="row2">${num("margin", t(L("Gross margin, % of revenue kept before ads", "Валовая маржа, % выручки до рекламы"), lang), "100")}${num("other", t(L("Other marketing cost", "Прочие маркетинговые расходы"), lang), "0")}</div>
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    contrast: () => `<form class="calc" data-calc="contrast" data-autorun="1">
      <div class="row2">${text("fg", t(L("Text colour", "Цвет текста"), lang), "#1c2420")}${text("bg", t(L("Background colour", "Цвет фона"), lang), "#f7f3ec")}</div>
      ${go(lang)}</form>`,
    px: () => `<form class="calc" data-calc="px" data-autorun="1">
      <div class="row2">${num("px", t(L("Pixels", "Пиксели"), lang), "32")}${num("root", t(L("Root font size, px", "Корневой размер шрифта, px"), lang), "16")}</div>
      <div class="row2">${num("parent", t(L("Parent font size, px", "Размер шрифта родителя, px"), lang), "20")}${num("viewport", t(L("Viewport width, px", "Ширина окна, px"), lang), "1280")}</div>
      ${go(lang)}</form>`,
    policy: () => `<form class="calc" data-calc="policy">
      <div class="row2">${text("site", t(L("Site name", "Название сайта"), lang), "")}${text("url", t(L("Site URL", "Адрес сайта"), lang), "")}</div>
      <div class="row2">${text("email", t(L("Contact email", "Почта для связи"), lang), "")}${text("country", t(L("Country you work from", "Страна, из которой вы работаете"), lang), "")}</div>
      ${text("date", t(L("Date of this draft", "Дата черновика"), lang), "2026-11-19")}
      ${check("analytics", t(L("The site uses an analytics counter", "На сайте есть счётчик аналитики"), lang), false)}
      ${check("cookies", t(L("The site sets its own cookies", "Сайт ставит свои cookie"), lang), false)}
      ${check("affiliates", t(L("The site has affiliate links", "На сайте есть партнёрские ссылки"), lang), true)}
      ${check("accounts", t(L("People can create an account", "Люди могут завести аккаунт"), lang), false)}
      ${check("contact", t(L("People email you from the site", "Люди пишут вам с сайта"), lang), false)}
      ${check("ipTool", t(L("A page calls a public IP service", "Страница обращается к публичной службе IP"), lang), false)}
      <button class="go" type="submit">${esc(t(L("Write the draft", "Собрать черновик"), lang))}</button> ${copyBtn(lang)}</form>`,
    margin: () => `<form class="calc" data-calc="margin" data-autorun="1">
      ${sel("mode", t(L("What to work out", "Что считать"), lang), [["margin", t(L("Margin and markup", "Маржа и наценка"), lang)], ["percent", t(L("Percentages", "Проценты"), lang)], ["markup", t(L("Price from a markup", "Цена из наценки"), lang)]], "margin")}
      <div data-show="margin">
        ${sel("marginOp", t(L("Known values", "Что уже известно"), lang), [["both", t(L("Cost and price", "Себестоимость и цена"), lang)], ["price", t(L("Cost and margin percent", "Себестоимость и маржа в процентах"), lang)]], "both")}
      </div>
      <div data-show="markup">
        ${sel("markupOp", t(L("Known values", "Что уже известно"), lang), [["price", t(L("Cost and markup percent", "Себестоимость и наценка в процентах"), lang)], ["both", t(L("Cost and price", "Себестоимость и цена"), lang)]], "price")}
      </div>
      <div data-show="percent">
        ${sel("op", t(L("Question", "Вопрос"), lang), [["of", t(L("What is A% of B", "Сколько будет A% от B"), lang)], ["change", t(L("Percent change from A to B", "Изменение в процентах от A к B"), lang)], ["what", t(L("A is what percent of B", "A — это сколько процентов от B"), lang)]], "of")}
      </div>
      <div class="row2">${num("cost", t(L("Cost, or A", "Себестоимость или A"), lang), "60")}${num("price", t(L("Price, or B", "Цена или B"), lang), "100")}</div>
      ${num("rate", t(L("Margin or markup percent, when you are solving for price", "Процент маржи или наценки, если ищете цену"), lang), "40")}
      ${text("symbol", t(T.symbol, lang), "")}
      ${go(lang)}</form>`,
    dates: () => `<form class="calc" data-calc="dates" data-autorun="1">
      <div class="row2">${text("start", t(L("From", "С даты"), lang), "2026-11-20", 'type="date"')}${text("end", t(L("To", "По дату"), lang), "2026-11-23", 'type="date"')}</div>
      ${area("holidays", t(L("Weekday holidays, YYYY-MM-DD, one per line", "Праздники в будни, ГГГГ-ММ-ДД, по одному на строку"), lang), "")}
      <div class="row2">${text("addStart", t(L("Add business days from", "Прибавить рабочие дни к дате"), lang), "2026-11-20", 'type="date"')}${num("addN", t(L("How many business days", "Сколько рабочих дней"), lang), "1")}</div>
      ${go(lang)}</form>`,
    pomodoro: () => `<form class="calc" data-calc="pomodoro">
      <p class="clock" data-clock>25:00</p>
      <p data-mode>${esc(t(L("Focus", "Фокус"), lang))}</p>
      <div class="row2">${num("focus", t(L("Focus minutes", "Минут фокуса"), lang), "25", 'min="1"')}${num("short", t(L("Short break", "Короткий перерыв"), lang), "5", 'min="1"')}</div>
      <div class="row2">${num("long", t(L("Long break", "Длинный перерыв"), lang), "15", 'min="1"')}${num("rounds", t(L("Focus blocks before a long break", "Блоков фокуса до длинного перерыва"), lang), "4", 'min="1"')}</div>
      <div class="cta-btns">
        <button class="go" type="button" data-start>${esc(t(L("Start", "Старт"), lang))}</button>
        <button class="ghost" type="button" data-pause>${esc(t(L("Pause", "Пауза"), lang))}</button>
        <button class="ghost" type="button" data-skip>${esc(t(L("Skip", "Дальше"), lang))}</button>
        <button class="ghost" type="button" data-reset>${esc(t(L("Reset", "Сброс"), lang))}</button>
      </div></form>`
  };
  if (!f[calc]) throw new Error("no form " + calc);
  return f[calc]() + '<div id="result" class="result" aria-live="polite"></div>';
}

function lot(lang, qty, price, fee) {
  return `<div class="lot" data-row>${num("qty", t(L("Quantity", "Количество"), lang), qty)}${num("price", t(L("Price", "Цена"), lang), price)}${num("fee", t(L("Fee", "Комиссия"), lang), fee)}<button class="ghost" type="button" data-remove>${esc(T.remove[lang])}</button></div>`;
}
function coin(lang, label, amount, rate) {
  return `<div class="lot" data-row>${text("label", t(L("Name", "Название"), lang), label)}${num("amount", t(L("Amount", "Сумма"), lang), amount)}${num("rate", t(L("Rate, %", "Ставка, %"), lang), rate)}<button class="ghost" type="button" data-remove>${esc(T.remove[lang])}</button></div>`;
}
function trip(lang, start, end) {
  return `<div class="trip" data-row>${text("start", t(L("Arrived", "Приезд"), lang), start, 'type="date"')}${text("end", t(L("Left", "Отъезд"), lang), end, 'type="date"')}<button class="ghost" type="button" data-remove>${esc(T.remove[lang])}</button></div>`;
}
