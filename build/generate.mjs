import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { tools as sourceTools } from "../content/tools.mjs";
import { articles as coreArticles } from "../content/articles.mjs";
import { semrushArticles } from "../content/articles-semrush.mjs";
import { moreSemrushArticles } from "../content/articles-semrush-rest.mjs";
import { pageCopy } from "../content/pages.mjs";
import { amazonBlocks } from "../content/amazon.mjs";

const SEMRUSH_TOOLS = {
  "seo-text-analyzer": "low-competition-keywords-semrush",
  "meta-tag-generator": "semrush-vs-ahrefs",
  "robots-sitemap-generator": "semrush-free-trial",
  "page-speed-revenue-calculator": "semrush-for-seo",
  "utm-qr-generator": "semrush-free-trial",
  "roas-calculator": "semrush-vs-ahrefs"
};

const semrushCta = {
  en: {
    ctaTitle: "Open Semrush for the part this form cannot see",
    ctaBody: "Semrush is the suite the SEO guides on this site are written around: what to do in a trial, how it compares with Ahrefs and with free tools, and how to look for lower-competition phrases on a new site. This calculator does not log in, and the result does not change if you skip the link. Plans and prices change. Read the current offer.",
    ctaButton: "Open Semrush"
  },
  ru: {
    ctaTitle: "Откройте Semrush для того, чего форма не видит",
    ctaBody: "Semrush — сервис, вокруг которого написаны SEO-статьи этого сайта: что делать в пробном доступе, как он соотносится с Ahrefs и с бесплатными инструментами, и как искать менее конкурентные запросы для нового сайта. Калькулятор в Semrush не входит, и результат не меняется, если ссылку пропустить. Тарифы меняются. Смотрите актуальное предложение.",
    ctaButton: "Открыть Semrush"
  }
};

const semrushExtra = {
  en: `<h2>Where Semrush fits</h2><p>The numbers on this page stay in the browser. For the wider job, read the <a href="{{href:blog/semrush-free-trial}}">Semrush trial guide</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush versus Ahrefs and free SEO tools</a>, and <a href="{{href:blog/low-competition-keywords-semrush}}">how to find lower-competition phrases</a>. The longer review is <a href="{{href:blog/semrush-for-seo}}">how to use Semrush for SEO</a>. <a href="{{aff:semrush}}">Semrush</a> is optional.</p>`,
  ru: `<h2>Где здесь Semrush</h2><p>Цифры на этой странице остаются в браузере. Дальше по задаче читайте <a href="{{href:blog/semrush-free-trial}}">гайд по пробному доступу Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">сравнение Semrush, Ahrefs и бесплатных инструментов</a> и <a href="{{href:blog/low-competition-keywords-semrush}}">как искать менее конкурентные запросы</a>. Общий разбор — <a href="{{href:blog/semrush-for-seo}}">как пользоваться Semrush для SEO</a>. <a href="{{aff:semrush}}">Semrush</a> не обязателен.</p>`
};

function emphasizeSemrush(tool) {
  const guide = SEMRUSH_TOOLS[tool.slug];
  if (!guide) return tool;
  const next = { ...tool, affiliate: "semrush", guide };
  if (tool.slug === "page-speed-revenue-calculator") next.secondary = "kinsta";
  for (const lang of ["en", "ru"]) {
    const body = tool[lang].body.includes("semrush-free-trial") ? tool[lang].body : tool[lang].body + semrushExtra[lang];
    next[lang] = { ...tool[lang], ...semrushCta[lang], body };
    if (tool.slug === "page-speed-revenue-calculator") {
      next[lang].secondaryButton = lang === "ru" ? "Смотреть Kinsta" : "See Kinsta";
    }
  }
  return next;
}

const tools = sourceTools.map(emphasizeSemrush);
const articles = [...coreArticles, ...semrushArticles, ...moreSemrushArticles];
import { renderForm } from "./forms.mjs";
import { BASE, SITE, clusters, t, pathFor, abs, page, crumb, breadcrumbLd, faqLd, esc, words } from "./layout.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];

function amazonSearch(query) {
  const src = fs.readFileSync(new URL("../assets/js/affiliates.js", import.meta.url), "utf8");
  const tag = src.match(/tag:\s*"([^"]+)"/);
  if (!tag) throw new Error("amazon tag missing from affiliates.js");
  return "https://www.amazon.de/s?k=" + encodeURIComponent(query) + "&tag=" + tag[1];
}

function amazonAside(slug, lang) {
  const block = amazonBlocks[slug];
  if (!block) return "";
  const title = lang === "ru" ? "Поиск на Amazon" : "Searches on Amazon";
  const intro = lang === "ru"
    ? "Это поисковые ссылки на Amazon.de, не отзыв о конкретной модели. Как участник программы Amazon Associates я получаю доход от соответствующих покупок."
    : "These are Amazon.de search links, not a review of one model. As an Amazon Associate I earn from qualifying purchases.";
  const items = block.links.map((link) => {
    const href = amazonSearch(link.query);
    const label = link[lang] || link.en;
    return `<li><a href="${esc(href)}" data-amazon-query="${esc(link.query)}" target="_blank" rel="sponsored nofollow noopener">${esc(label)}</a></li>`;
  }).join("");
  return `<aside class="cta"><h2>${esc(title)}</h2><p>${esc(intro)}</p><ul class="amazon-links">${items}</ul></aside>`;
}

function writeFile(rel, contents) {
  const dest = path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, contents);
}

function linkify(html, lang) {
  return html
    .replace(/href="\{\{href:([a-z0-9-/]+)\}\}"/g, (_, slug) => {
      const pathname = slug.startsWith("/") ? slug : `/${slug}/`;
      return `href="${pathFor(lang, pathname)}"`;
    })
    .replace(/href="\{\{aff:([a-z0-9]+)\}\}"/g, (_, key) => {
      return `href="#AFFILIATE_${key.toUpperCase()}" data-affiliate="${key}" target="_blank" rel="sponsored noopener"`;
    });
}

function faqHtml(faq) {
  return `<section class="faq"><h2>${esc(t("en").faq)}</h2>${faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("")}</section>`.replace(
    `<h2>${esc(t("en").faq)}</h2>`,
    ""
  );
}

function toolScripts() {
  return [
    `${BASE}/assets/js/calc-core.js`,
    `${BASE}/assets/js/wordlists.js`,
    `${BASE}/assets/js/cost-of-living.js`,
    `${BASE}/assets/js/llm-prices.js`,
    `${BASE}/assets/js/ui-LANG.js`,
    `${BASE}/assets/js/qrcode.js`,
    `${BASE}/assets/js/calculators.js`
  ];
}

function renderTool(tool, lang) {
  const copy = tool[lang];
  const ui = t(lang);
  const cluster = clusters[tool.cluster];
  const pathname = `/${tool.slug}/`;
  const crumbs = crumb(lang, [
    { name: ui.home, path: "/" },
    { name: cluster[lang].name, path: `/${cluster.slug}/` },
    { name: copy.h1, path: pathname }
  ]);
  const related = tool.related.map((slug) => tools.find((item) => item.slug === slug)).filter(Boolean);
  const guide = articles.find((item) => item.slug === tool.guide);
  const body = linkify(copy.body, lang);
  const count = words(body);
  if (count < 400 || count > 820) problems.push(`tool ${lang} ${tool.slug}: ${count} words`);
  const secondary = tool.secondary
    ? `<a class="go alt" data-affiliate="${tool.secondary}" href="#AFFILIATE_${tool.secondary.toUpperCase()}">${esc(copy.secondaryButton || tool.secondary)}</a>`
    : "";
  const main = `<article class="page"><div class="wrap">
<h1>${esc(copy.h1)}</h1>
<p class="lede">${esc(copy.lede)}</p>
${copy.banner ? `<p class="banner">${esc(copy.banner)}</p>` : ""}
${renderForm(tool.calc, lang)}
<p class="disclosure">${esc(ui.disclosureShort)} <a href="${pathFor(lang, "/affiliate-disclosure/")}">${esc(ui.disclosure)}</a></p>
<aside class="cta"><h2>${esc(copy.ctaTitle)}</h2><p>${esc(copy.ctaBody)}</p><div class="cta-btns"><a class="go" data-affiliate="${tool.affiliate}" href="#AFFILIATE_${tool.affiliate.toUpperCase()}">${esc(copy.ctaButton)}</a>${secondary}</div></aside>
${amazonAside(tool.slug, lang)}
<div class="prose">${body}</div>
<section class="faq"><h2>${esc(ui.faq)}</h2>${copy.faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${linkify(esc(item.a), lang)}</p></details>`).join("")}</section>
<section><h2 class="sec">${esc(ui.related)}</h2><div class="grid">${related.map((item) => `<article class="card"><h3>${esc(item[lang].h1)}</h3><p>${esc(item[lang].lede)}</p><a class="more" href="${pathFor(lang, "/" + item.slug + "/")}">${esc(ui.read)}</a></article>`).join("")}${guide ? `<article class="card"><h3>${esc(guide[lang].h1)}</h3><p>${esc(guide[lang].lede)}</p><a class="more" href="${pathFor(lang, "/blog/" + guide.slug + "/")}">${esc(ui.guide)}</a></article>` : ""}</div></section>
</div></article>`;
  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: copy.h1,
        description: copy.description,
        url: abs(lang, pathname),
        applicationCategory: tool.category,
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        isAccessibleForFree: true,
        inLanguage: lang,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
      },
      faqLd(copy.faq),
      breadcrumbLd(lang, [
        { name: ui.home, path: "/" },
        { name: cluster[lang].name, path: `/${cluster.slug}/` },
        { name: copy.h1, path: pathname }
      ])
    ]
  });
  const scripts = toolScripts().map((src) => src.replace("LANG", lang));
  if (tool.calc !== "utm") {
    const i = scripts.findIndex((src) => src.endsWith("qrcode.js"));
    scripts.splice(i, 1);
  }
  return page({
    lang,
    pathname,
    title: copy.title,
    description: copy.description,
    crumbs,
    main,
    jsonld,
    extraScripts: scripts
  });
}

function renderArticle(article, lang) {
  const copy = article[lang];
  const ui = t(lang);
  const pathname = `/blog/${article.slug}/`;
  const body = linkify(copy.body, lang);
  const count = words(body);
  if (count < 1200 || count > 2100) problems.push(`article ${lang} ${article.slug}: ${count} words`);
  const linkedTools = article.tools.map((slug) => tools.find((item) => item.slug === slug)).filter(Boolean);
  const buttons = article.affiliates.map((key, i) => `<a class="${i === 0 ? "go" : "go alt"}" data-affiliate="${key}" href="#AFFILIATE_${key.toUpperCase()}">${esc(copy.buttons[key] || key)}</a>`).join("");
  const main = `<article class="page"><div class="wrap">
<p class="meta">${esc(ui.updated)}</p>
<h1>${esc(copy.h1)}</h1>
<p class="lede">${esc(copy.lede)}</p>
<p class="disclosure">${esc(ui.disclosureShort)} <a href="${pathFor(lang, "/affiliate-disclosure/")}">${esc(ui.disclosure)}</a></p>
<div class="prose">${body}</div>
<aside class="cta"><h2>${esc(copy.ctaTitle)}</h2><p>${esc(copy.ctaBody)}</p><div class="cta-btns">${buttons}</div></aside>
${amazonAside(article.slug, lang)}
<section class="faq"><h2>${esc(ui.faq)}</h2>${copy.faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("")}</section>
<section><h2 class="sec">${esc(ui.related)}</h2><div class="grid">${linkedTools.map((item) => `<article class="card"><h3>${esc(item[lang].h1)}</h3><p>${esc(item[lang].lede)}</p><a class="more" href="${pathFor(lang, "/" + item.slug + "/")}">${esc(ui.read)}</a></article>`).join("")}</div></section>
</div></article>`;
  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: copy.h1,
        description: copy.description,
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
        inLanguage: lang,
        author: { "@type": "Person", name: "Anna" },
        publisher: { "@type": "Organization", name: t("en").name, url: SITE + "/" },
        mainEntityOfPage: abs(lang, pathname)
      },
      faqLd(copy.faq),
      breadcrumbLd(lang, [
        { name: ui.home, path: "/" },
        { name: ui.guides, path: "/blog/" },
        { name: copy.h1, path: pathname }
      ])
    ]
  });
  return page({
    lang,
    pathname,
    title: copy.title,
    description: copy.description,
    crumbs: crumb(lang, [
      { name: ui.home, path: "/" },
      { name: ui.guides, path: "/blog/" },
      { name: copy.h1, path: pathname }
    ]),
    main,
    jsonld
  });
}

function card(lang, item) {
  const ui = t(lang);
  return `<article class="card"><h2>${esc(item[lang].h1)}</h2><p>${esc(item[lang].lede)}</p><a class="more" href="${pathFor(lang, "/" + item.slug + "/")}">${esc(ui.read)}</a></article>`;
}

function renderHome(lang) {
  const copy = pageCopy.home[lang];
  const ui = t(lang);
  const groups = Object.values(clusters).map((cluster) => {
    const list = tools.filter((tool) => tool.cluster === cluster.slug);
    return `<h2 class="sec">${esc(cluster[lang].h1)}</h2><p class="lede">${esc(cluster[lang].desc)}</p><div class="grid">${list.map((item) => card(lang, item)).join("")}</div><p><a class="more" href="${pathFor(lang, "/" + cluster.slug + "/")}">${esc(cluster[lang].name)}</a></p>`;
  }).join("");
  const main = `<div class="wrap hero"><h1>${esc(copy.h1)}</h1><p class="lede">${esc(copy.lede)}</p><p class="banner">${esc(ui.disclaimer)}</p></div><div class="wrap"><div class="prose">${linkify(copy.body, lang)}</div>${groups}<section class="faq"><h2>${esc(ui.faq)}</h2>${copy.faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("")}</section></div>`;
  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: ui.name, url: abs(lang, "/"), inLanguage: lang, description: copy.description },
      faqLd(copy.faq)
    ]
  });
  const extraHead = lang === "en" ? `<meta name="google-site-verification" content="s-0iJOldUS8OhEjahKd_140IjmUAu3QdenCVsJIx-KI" />
<meta name="yandex-verification" content="a2b06268a87bb42b" />
<meta name="msvalidate.01" content="BA1BD1F9BEE60D7C5588821874A737FA" />
<!-- Bing Webmaster: replace YOUR_BING_CODE in this file (index.html), which is generated from build/generate.mjs renderHome. -->
<!-- <meta name="msvalidate.01" content="YOUR_BING_CODE"> -->
` : "";
  return page({ lang, pathname: "/", title: copy.title, description: copy.description, main, jsonld, extraHead });
}

function renderHub(cluster, lang) {
  const copy = pageCopy.hubs[cluster.slug][lang];
  const ui = t(lang);
  const list = tools.filter((tool) => tool.cluster === cluster.slug);
  const pathname = `/${cluster.slug}/`;
  const main = `<article class="page"><div class="wrap"><h1>${esc(copy.h1)}</h1><p class="lede">${esc(copy.lede)}</p><div class="prose">${linkify(copy.body, lang)}</div><div class="grid">${list.map((item) => card(lang, item)).join("")}</div><section class="faq"><h2>${esc(ui.faq)}</h2>${copy.faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("")}</section></div></article>`;
  const count = words(copy.body);
  if (count < 160) problems.push(`hub ${lang} ${cluster.slug}: ${count} words`);
  return page({
    lang,
    pathname,
    title: copy.title,
    description: copy.description,
    crumbs: crumb(lang, [{ name: ui.home, path: "/" }, { name: copy.h1, path: pathname }]),
    main,
    jsonld: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [faqLd(copy.faq), breadcrumbLd(lang, [{ name: ui.home, path: "/" }, { name: copy.h1, path: pathname }])]
    })
  });
}

function renderSimple(key, pathname, lang) {
  const copy = pageCopy[key][lang];
  const ui = t(lang);
  const body = linkify(copy.body, lang);
  const main = `<article class="page"><div class="wrap"><h1>${esc(copy.h1)}</h1><div class="prose">${body}</div></div></article>`;
  return page({
    lang,
    pathname,
    title: copy.title,
    description: copy.description,
    crumbs: crumb(lang, [{ name: ui.home, path: "/" }, { name: copy.h1, path: pathname }]),
    main,
    jsonld: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [breadcrumbLd(lang, [{ name: ui.home, path: "/" }, { name: copy.h1, path: pathname }])]
    })
  });
}

function renderBlogIndex(lang) {
  const copy = pageCopy.blog[lang];
  const ui = t(lang);
  const main = `<div class="page"><div class="wrap"><h1>${esc(copy.h1)}</h1><p class="lede">${esc(copy.lede)}</p><div class="grid">${articles.map((article) => `<article class="card"><h2>${esc(article[lang].h1)}</h2><p>${esc(article[lang].lede)}</p><a class="more" href="${pathFor(lang, "/blog/" + article.slug + "/")}">${esc(ui.read)}</a></article>`).join("")}</div></div></div>`;
  return page({
    lang,
    pathname: "/blog/",
    title: copy.title,
    description: copy.description,
    crumbs: crumb(lang, [{ name: ui.home, path: "/" }, { name: copy.h1, path: "/blog/" }]),
    main
  });
}

function render404() {
  return page({
    lang: "en",
    pathname: "/404.html",
    title: "Page not found | Free Online Calculators",
    description: "That page is not on this site. Go back to the free calculators in English or Russian.",
    robots: "noindex",
    main: `<div class="page"><div class="wrap"><h1>Page not found</h1><p class="lede">That address is not on this site.</p><p><a href="${pathFor("en", "/")}">English calculators</a> · <a href="${pathFor("ru", "/")}">Калькуляторы на русском</a></p></div></div>`
  });
}

const urls = [];
function add(lang, pathname) {
  urls.push({ lang, pathname });
}

for (const lang of ["en", "ru"]) {
  const homeRel = lang === "en" ? "index.html" : "ru/index.html";
  writeFile(homeRel, renderHome(lang));
  add(lang, "/");
  for (const cluster of Object.values(clusters)) {
    const rel = lang === "en" ? `${cluster.slug}/index.html` : `ru/${cluster.slug}/index.html`;
    writeFile(rel, renderHub(cluster, lang));
    add(lang, `/${cluster.slug}/`);
  }
  writeFile(lang === "en" ? "blog/index.html" : "ru/blog/index.html", renderBlogIndex(lang));
  add(lang, "/blog/");
  for (const [key, pathname] of [["about", "/about/"], ["privacy", "/privacy-policy/"], ["disclosure", "/affiliate-disclosure/"]]) {
    const rel = (lang === "en" ? "" : "ru/") + pathname.slice(1) + "index.html";
    writeFile(rel, renderSimple(key, pathname, lang));
    add(lang, pathname);
  }
}

for (const tool of tools) {
  for (const lang of ["en", "ru"]) {
    const rel = (lang === "en" ? "" : "ru/") + tool.slug + "/index.html";
    writeFile(rel, renderTool(tool, lang));
    add(lang, `/${tool.slug}/`);
  }
}
for (const article of articles) {
  for (const lang of ["en", "ru"]) {
    const rel = (lang === "en" ? "" : "ru/") + "blog/" + article.slug + "/index.html";
    writeFile(rel, renderArticle(article, lang));
    add(lang, `/blog/${article.slug}/`);
  }
}
writeFile("404.html", render404());

const body = urls.map((item) => {
  const loc = abs(item.lang, item.pathname);
  const en = abs("en", item.pathname);
  const ru = abs("ru", item.pathname);
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-11-19</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${ru}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>
  </url>`;
}).join("\n");
writeFile("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`);
writeFile("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
writeFile("site.webmanifest", JSON.stringify({
  name: "Free Online Calculators",
  short_name: "Calculators",
  start_url: BASE + "/",
  scope: BASE + "/",
  display: "standalone",
  background_color: "#f7f3ec",
  theme_color: "#1e3d34",
  lang: "en",
  icons: [
    { src: BASE + "/assets/img/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: BASE + "/favicon.svg", sizes: "any", type: "image/svg+xml" }
  ]
}, null, 2));
writeFile(".nojekyll", "");

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("pages", urls.length);
