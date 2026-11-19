export const ORIGIN = "https://anlap26.github.io";
export const BASE = "/Free-online-calculators";
export const SITE = ORIGIN + BASE;

export const clusters = {
  finance: {
    slug: "finance",
    en: { name: "Finance", nav: "Finance", h1: "Finance, capital and crypto calculators", desc: "Free calculators for compound interest, position size, staking yield, trading fees, FIRE, inflation, and the gap between a bank rate and the interbank rate." },
    ru: { name: "Финансы", nav: "Финансы", h1: "Калькуляторы финансов, капитала и крипто", desc: "Бесплатные калькуляторы сложного процента, размера позиции, стейкинга, комиссий, финансовой независимости, инфляции и скрытой наценки банка." }
  },
  security: {
    slug: "security",
    en: { name: "Privacy", nav: "Privacy", h1: "Privacy and security tools", desc: "Password generation, a local strength check, an IP and WebRTC test, alias email, EXIF removal, AES, and random keys. The sensitive steps stay in the browser." },
    ru: { name: "Приватность", nav: "Приватность", h1: "Инструменты приватности и безопасности", desc: "Пароли, локальная проверка стойкости, тест IP и WebRTC, псевдоним почты, снятие EXIF, AES и случайные ключи. Чувствительные шаги остаются в браузере." }
  },
  relocation: {
    slug: "relocation",
    en: { name: "Relocation", nav: "Relocation", h1: "Relocation and remote-work calculators", desc: "Schengen and 183-day counts, a sourced cost index, a meeting-time planner, roaming versus eSIM, and a freelance rate that includes tax and days off." },
    ru: { name: "Переезд", nav: "Переезд", h1: "Калькуляторы переезда и удалённой работы", desc: "Шенген и 183 дня, индекс стоимости жизни с указанным источником, планировщик встреч, роуминг против eSIM и ставка фрилансера с налогом и выходными." }
  },
  webmaster: {
    slug: "webmaster",
    en: { name: "Webmaster", nav: "Webmaster", h1: "Webmaster, SEO and content tools", desc: "Token cost, on-page text checks, meta tags, a page-speed revenue sketch, robots and sitemaps, image compression, UTM and QR, formatters, ROAS, contrast, and a policy draft." },
    ru: { name: "Веб", nav: "Веб", h1: "Инструменты вебмастера, SEO и контента", desc: "Цена токенов, проверка текста, мета-теги, набросок потерь от скорости, robots и sitemap, сжатие картинок, UTM и QR, форматтеры, ROAS, контраст и черновик политики." }
  }
};

const ui = {
  en: {
    name: "Free Online Calculators",
    tag: "Finance, privacy, relocation, webmaster",
    skip: "Skip to content",
    home: "Home",
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
    tag: "Финансы, приватность, переезд, веб",
    skip: "К содержанию",
    home: "Главная",
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

export function pathFor(lang, pathname) {
  const p = pathname.startsWith("/") ? pathname : "/" + pathname;
  if (lang === "ru") return BASE + "/ru" + (p === "/" ? "/" : p);
  return BASE + (p === "/" ? "/" : p);
}

export function abs(lang, pathname) {
  return ORIGIN + pathFor(lang, pathname);
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export function words(html) {
  const text = String(html).replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ");
  const parts = text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  return parts.length;
}

export function page({ lang, pathname, title, description, h1, crumbs, main, jsonld, extraScripts, robots }) {
  const copy = ui[lang];
  const canonical = abs(lang, pathname);
  const en = abs("en", pathname);
  const ru = abs("ru", pathname);
  const nav = [
    ["/", copy.home],
    ["/finance/", clusters.finance[lang].nav],
    ["/security/", clusters.security[lang].nav],
    ["/relocation/", clusters.relocation[lang].nav],
    ["/webmaster/", clusters.webmaster[lang].nav],
    ["/blog/", copy.guides]
  ];
  const scripts = [
    `${BASE}/assets/js/affiliates.js`,
    `${BASE}/assets/js/site.js`,
    ...(extraScripts || [])
  ];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
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
<meta name="theme-color" content="#1e3d34">
<link rel="icon" href="${BASE}/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${BASE}/assets/img/icon-192.png">
<link rel="manifest" href="${BASE}/site.webmanifest">
<link rel="stylesheet" href="${BASE}/assets/css/site.css">
${jsonld ? `<script type="application/ld+json">${jsonld.replace(/</g, "\\u003c")}</script>` : ""}
</head>
<body>
<a class="skip" href="#main">${esc(copy.skip)}</a>
<header class="top"><div class="wrap bar">
<a class="logo" href="${pathFor(lang, "/")}">${esc(copy.name)}<small>${esc(copy.tag)}</small></a>
<nav class="main" aria-label="${lang === "ru" ? "Разделы" : "Sections"}">
${nav.map(([href, label]) => `<a href="${pathFor(lang, href)}"${href === pathname ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("")}
<span class="langs"><a href="${en}" hreflang="en" lang="en"${lang === "en" ? ' aria-current="true"' : ""}>EN</a> <a href="${ru}" hreflang="ru" lang="ru"${lang === "ru" ? ' aria-current="true"' : ""}>RU</a></span>
</nav></div></header>
<main id="main">${crumbs ? `<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb">${crumbs}</nav></div>` : ""}
${h1 ? "" : ""}${main}</main>
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
${scripts.map((src) => `<script defer src="${src}"></script>`).join("\n")}
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
