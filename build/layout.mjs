export const ORIGIN = "https://anlap26.github.io";
export const BASE = "/Free-online-calculators";
export const SITE = ORIGIN + BASE;

export const clusters = {
  finance: {
    slug: "finance",
    en: { name: "Financial", nav: "Financial", home: "Financial calculators", h1: "Finance, capital and crypto calculators", desc: "Mortgage, loan, and interest payments, plus compound growth, position size, staking, trading fees, FIRE, inflation, and bank spreads." },
    ru: { name: "Финансы", nav: "Финансы", home: "Финансовые калькуляторы", h1: "Калькуляторы финансов, капитала и крипто", desc: "Ипотека, кредит и процент, а также сложный процент, размер позиции, стейкинг, комиссии, FIRE, инфляция и скрытая наценка банка." }
  },
  fitness: {
    slug: "fitness",
    en: { name: "Fitness", nav: "Fitness", home: "Fitness and health calculators", h1: "Fitness and health calculators", desc: "BMI, daily calories from the Mifflin–St Jeor equation, US Navy body fat, and running pace. Adult formulas, not a diagnosis." },
    ru: { name: "Здоровье", nav: "Здоровье", home: "Калькуляторы здоровья", h1: "Калькуляторы здоровья и нагрузки", desc: "ИМТ, калории по формуле Миффлина — Сан Жеора, процент жира по формуле ВМС США и темп бега. Формулы для взрослых, не диагноз." }
  },
  math: {
    slug: "math",
    en: { name: "Math", nav: "Math", home: "Math calculators", h1: "Math calculators", desc: "Percentages, fractions in lowest terms, population and sample standard deviation, and triangle area." },
    ru: { name: "Математика", nav: "Математика", home: "Математические калькуляторы", h1: "Математические калькуляторы", desc: "Проценты, дроби в несократимом виде, стандартное отклонение для совокупности и выборки и площадь треугольника." }
  },
  other: {
    slug: "other",
    en: { name: "Other", nav: "Other", home: "Other calculators", h1: "Other calculators", desc: "Age, date and time arithmetic, GPA, a letter grade, and unit conversions with exact factors." },
    ru: { name: "Другое", nav: "Другое", home: "Другие калькуляторы", h1: "Другие калькуляторы", desc: "Возраст, даты и время, средний балл, буквенная оценка и перевод единиц по точным коэффициентам." }
  },
  security: {
    slug: "security",
    en: { name: "Privacy", nav: "Privacy", home: "Privacy and security", h1: "Privacy and security tools", desc: "Password generation, a local strength check, an IP and WebRTC test, alias email, EXIF removal, AES, and random keys. The sensitive steps stay in the browser." },
    ru: { name: "Приватность", nav: "Приватность", home: "Приватность и безопасность", h1: "Инструменты приватности и безопасности", desc: "Пароли, локальная проверка стойкости, тест IP и WebRTC, псевдоним почты, снятие EXIF, AES и случайные ключи. Чувствительные шаги остаются в браузере." }
  },
  relocation: {
    slug: "relocation",
    en: { name: "Relocation", nav: "Relocation", home: "Relocation and remote work", h1: "Relocation and remote-work calculators", desc: "Schengen and 183-day counts, a sourced cost index, a meeting-time planner, roaming versus eSIM, and a freelance rate that includes tax and days off." },
    ru: { name: "Переезд", nav: "Переезд", home: "Переезд и удалённая работа", h1: "Калькуляторы переезда и удалённой работы", desc: "Шенген и 183 дня, индекс стоимости жизни с указанным источником, планировщик встреч, роуминг против eSIM и ставка фрилансера с налогом и выходными." }
  },
  webmaster: {
    slug: "webmaster",
    en: { name: "Webmaster", nav: "Web", home: "Webmaster, SEO and AI", h1: "Webmaster, SEO and content tools", desc: "LLM token cost, on-page text checks, meta tags, page-speed revenue, robots and sitemaps, image compression, UTM and QR, formatters, ROAS, contrast, and a policy draft." },
    ru: { name: "Веб", nav: "Веб", home: "Веб, SEO и ИИ", h1: "Инструменты вебмастера, SEO и контента", desc: "Цена токенов, проверка текста, мета-теги, набросок потерь от скорости, robots и sitemap, сжатие картинок, UTM и QR, форматтеры, ROAS, контраст и черновик политики." }
  }
};

const ui = {
  en: {
    name: "Free Online Calculators",
    tag: "Money, health, math, privacy, and the web",
    skip: "Skip to content",
    home: "Home",
    search: "Search calculators",
    searchPlaceholder: "Try mortgage, BMI, percent, age…",
    noMatch: "No calculator matches that search.",
    themeToDark: "Dark",
    themeToLight: "Light",
    guides: "Guides",
    about: "About",
    privacy: "Privacy policy",
    disclosure: "Affiliate disclosure",
    related: "Related tools",
    guide: "From the guides",
    faq: "Questions people ask",
    disclosureShort: "Some links on this page are affiliate links. If you open an account or buy through them, we may earn a commission. You do not pay more because of that. The calculator does not change its result to suit a partner.",
    disclaimer: "Every calculator runs in your browser. Results are arithmetic, not financial, tax, legal, immigration, or insurance advice. Check a current offer before you act. Affiliate links are marked.",
    rights: "© 2026 Free Online Calculators. Published by Anna.",
    sister: "Another project by the same publisher:",
    read: "Open",
    all: "All tools",
    updated: "Updated 19 November 2026"
  },
  ru: {
    name: "Бесплатные онлайн-калькуляторы",
    tag: "Деньги, здоровье, математика, приватность и веб",
    skip: "К содержанию",
    home: "Главная",
    search: "Найти калькулятор",
    searchPlaceholder: "Ипотека, ИМТ, процент, возраст…",
    noMatch: "Такого калькулятора нет.",
    themeToDark: "Тёмная",
    themeToLight: "Светлая",
    guides: "Статьи",
    about: "О сайте",
    privacy: "Политика конфиденциальности",
    disclosure: "Партнёрские ссылки",
    related: "Другие инструменты",
    guide: "Из статей",
    faq: "Частые вопросы",
    disclosureShort: "Часть ссылок на странице — партнёрские. Если вы откроете счёт или купите по ним, мы можем получить комиссию. Для вас цена из-за этого не растёт. Калькулятор не подстраивает результат под партнёра.",
    disclaimer: "Все калькуляторы считают в браузере. Результат — арифметика, а не финансовая, налоговая, юридическая, визовая или страховая рекомендация. Перед решением сверьте актуальное предложение. Партнёрские ссылки помечены.",
    rights: "© 2026 Бесплатные онлайн-калькуляторы. Издатель — Анна.",
    sister: "Другой проект того же издателя:",
    read: "Открыть",
    all: "Все инструменты",
    updated: "Обновлено 19 ноября 2026"
  }
};

export function t(lang) {
  return ui[lang];
}

export function locate(lang, pathname) {
  const p = pathname.startsWith("/") ? pathname : "/" + pathname;
  if (lang === "ru") {
    if (p === "/404.html") return "/ru/404.html";
    return "/ru" + (p === "/" ? "/" : p);
  }
  return p;
}

let here = "/";

export function beginPage(lang, pathname) {
  here = locate(lang, pathname);
}

export function relative(fromPath, toPath) {
  const fromDir = (fromPath.endsWith("/") ? fromPath : fromPath.replace(/[^/]+$/, "")).split("/").filter(Boolean);
  const toIsDir = toPath.endsWith("/");
  const toParts = toPath.split("/").filter(Boolean);
  let i = 0;
  while (i < fromDir.length && i < toParts.length && fromDir[i] === toParts[i]) i += 1;
  const rest = toParts.slice(i);
  let out = "../".repeat(fromDir.length - i) + rest.join("/");
  if (!out) out = "./";
  else if (toIsDir) out += "/";
  return out;
}

export function pathFor(lang, pathname) {
  return relative(here, locate(lang, pathname));
}

export function asset(pathname) {
  const p = pathname.startsWith("/") ? pathname : "/" + pathname;
  return relative(here, p);
}

export function abs(lang, pathname) {
  const path = locate(lang, pathname);
  return ORIGIN + BASE + (path.startsWith("/") ? path : "/" + path);
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export function words(html) {
  const text = String(html).replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ");
  const parts = text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  return parts.length;
}

function scriptSrc(src) {
  if (/^https?:/i.test(src)) return src;
  let path = src;
  if (path.startsWith(BASE + "/")) path = path.slice(BASE.length);
  if (!path.startsWith("/")) path = "/" + path;
  return asset(path);
}

export function page({ lang, pathname, title, description, h1, crumbs, main, jsonld, extraScripts, robots, extraHead }) {
  beginPage(lang, pathname);
  const copy = ui[lang];
  const canonical = abs(lang, pathname);
  const en = abs("en", pathname);
  const ru = abs("ru", pathname);
  const nav = [
    ["/", copy.home],
    ...Object.values(clusters).map((cluster) => [`/${cluster.slug}/`, cluster[lang].nav]),
    ["/blog/", copy.guides]
  ];
  const scripts = [
    "/assets/js/affiliates.js",
    "/assets/js/site.js",
    ...(extraScripts || [])
  ];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>
(function () {
  try {
    var saved = localStorage.getItem("foc-theme");
    if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}
})();
</script>
<meta name="impact-site-verification" value="04c75eec-b177-4aab-a06b-a7dc4db45d6b">
<meta name="impact-site-verification" value="b33c7a36-3ecd-4d6c-b37e-2ffdb0396d00">
${extraHead || ""}
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${en}">
<link rel="alternate" hreflang="ru" href="${ru}">
<link rel="alternate" hreflang="x-default" href="${en}">
<meta name="robots" content="${robots || "index,follow,max-image-preview:large"}">
<meta property="og:site_name" content="${esc(copy.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${lang === "ru" ? "ru_RU" : "en_US"}">
<meta property="og:image" content="${SITE}/assets/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${SITE}/assets/img/og.png">
<meta name="theme-color" content="#0f3d3b" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0e141b" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${asset("/favicon.ico")}" sizes="16x16 32x32 48x48">
<link rel="icon" href="${asset("/favicon-48x48.png")}" type="image/png" sizes="48x48">
<link rel="icon" href="${asset("/favicon.svg")}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${asset("/apple-touch-icon.png")}" sizes="180x180">
<link rel="manifest" href="${asset("/site.webmanifest")}">
<link rel="stylesheet" href="${asset("/assets/css/site.css")}">
${jsonld ? `<script type="application/ld+json">${jsonld.replace(/</g, "\\u003c")}</script>` : ""}
<script nowprocket data-noptimize="1" data-cfasync="false" data-wpfc-render="false" seraph-accel-crit="1" data-no-defer="1" data-cmp-ab="2">
  (function () {
      var script = document.createElement("script");
      script.async = 1;
      script.setAttribute("data-cmp-ab","2");
      script.src = 'https://emrldtp.com/NjA0NDc4.js?t=604478';
      document.head.appendChild(script);
  })();
</script>
</head>
<body>
<a class="skip" href="#main">${esc(copy.skip)}</a>
<header class="top">
<div class="wrap bar">
<a class="logo" href="${pathFor(lang, "/")}">${esc(copy.name)}<small>${esc(copy.tag)}</small></a>
<div class="head-tools">
<button type="button" class="theme" id="theme-toggle" data-to-dark="${esc(copy.themeToDark)}" data-to-light="${esc(copy.themeToLight)}" aria-pressed="false">${esc(copy.themeToDark)}</button>
<span class="langs"><a href="${en}" hreflang="en" lang="en"${lang === "en" ? ' aria-current="true"' : ""}>EN</a> <a href="${ru}" hreflang="ru" lang="ru"${lang === "ru" ? ' aria-current="true"' : ""}>RU</a></span>
</div>
</div>
<div class="wrap"><nav class="main" aria-label="${lang === "ru" ? "Разделы" : "Sections"}">
${nav.map(([href, label]) => `<a href="${pathFor(lang, href)}"${href === pathname ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("")}
</nav></div>
</header>
<main id="main">${crumbs ? `<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb">${crumbs}</nav></div>` : ""}
${main}</main>
<footer><div class="wrap">
<nav class="cols">
<a href="${pathFor(lang, "/about/")}">${esc(copy.about)}</a>
<a href="${pathFor(lang, "/privacy-policy/")}">${esc(copy.privacy)}</a>
<a href="${pathFor(lang, "/affiliate-disclosure/")}">${esc(copy.disclosure)}</a>
<a href="${pathFor(lang, "/blog/")}">${esc(copy.guides)}</a>
</nav>
<p>${esc(copy.disclaimer)}</p>
<p class="projects">${esc(copy.sister)} <a href="https://mycytax.com/">MyCyTax</a></p>
<p>${esc(copy.rights)}</p>
</div></footer>
${scripts.map((src) => `<script defer src="${scriptSrc(src)}"></script>`).join("\n")}
</body>
</html>
`;
}

export function crumb(lang, items) {
  return items.map((item, i) => {
    if (i === items.length - 1) return `<span aria-current="page">${esc(item.name)}</span>`;
    return `<a href="${pathFor(lang, item.path)}">${esc(item.name)}</a><span aria-hidden="true">/</span>`;
  }).join(" ");
}

export function breadcrumbLd(lang, items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(lang, item.path)
    }))
  };
}

export function faqLd(faq) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
}

export { esc };
