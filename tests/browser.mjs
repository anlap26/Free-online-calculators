import puppeteer from "puppeteer-core";
import http from "http";
import fs from "fs";
import path from "path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const prefix = "/free-online-calculators";

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === prefix || urlPath === prefix + "/") urlPath = "/index.html";
  else if (urlPath.startsWith(prefix + "/")) urlPath = urlPath.slice(prefix.length);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const file = path.join(root, urlPath);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end("no"); return;
  }
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png" };
  res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

await new Promise((resolve) => server.listen(8765, resolve));
const browser = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome", headless: "new", args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage();
const base = "http://127.0.0.1:8765" + prefix;

async function textOf(sel) {
  return page.$eval(sel, (el) => el.innerText);
}

await page.goto(base + "/compound-interest-calculator/", { waitUntil: "networkidle0" });
await page.$eval('input[name="principal"]', (el) => { el.value = "1000"; });
await page.$eval('input[name="rate"]', (el) => { el.value = "10"; });
await page.$eval('input[name="years"]', (el) => { el.value = "2"; });
await page.$eval('input[name="pmt"]', (el) => { el.value = "0"; });
await page.select('select[name="compounds"]', "1");
await page.click("button.go");
await page.waitForSelector("#result table");
const compound = await textOf("#result");
if (!compound.includes("1,210") && !compound.includes("1210")) throw new Error("compound: " + compound);

await page.goto(base + "/margin-markup-calculator/", { waitUntil: "networkidle0" });
await page.waitForSelector("#result table");
const margin = await textOf("#result");
if (!margin.includes("40%")) throw new Error("margin: " + margin);

await page.goto(base + "/schengen-stay-calculator/", { waitUntil: "networkidle0" });
await page.waitForSelector("#result table");
const stay = await textOf("#result");
if (!stay.includes("90")) throw new Error("schengen: " + stay);

await page.goto(base + "/page-speed-revenue-calculator/", { waitUntil: "networkidle0" });
const semrush = await page.$$('a[data-affiliate="semrush"]');
if (semrush.length) throw new Error("semrush button still present");
const speedHtml = await page.content();
if (speedHtml.includes("#" + "AFFILIATE")) throw new Error("placeholder on page speed");
const h1s = await page.$$eval("h1", (els) => els.length);
if (h1s !== 1) throw new Error("h1 " + h1s);

await page.goto(base + "/roaming-esim-calculator/", { waitUntil: "networkidle0" });
const href = await page.$eval('a[data-affiliate="airalo"]', (el) => el.getAttribute("href"));
const rel = await page.$eval('a[data-affiliate="airalo"]', (el) => el.getAttribute("rel"));
if (href !== "https://airalo.tpx.lt/Z3nl2F1z") throw new Error("airalo href " + href);
if (!rel.includes("sponsored") || !rel.includes("nofollow") || !rel.includes("noopener")) throw new Error("rel " + rel);

await page.setViewport({ width: 1280, height: 800 });
await page.goto(base + "/mortgage-calculator/", { waitUntil: "networkidle0" });
await page.waitForSelector("#result table");
const inputWidth = await page.$eval('input[name="price"]', (el) => el.getBoundingClientRect().width);
if (inputWidth < 200) throw new Error("desktop input width " + inputWidth);
const mortgage = await textOf("#result");
if (!mortgage.includes("320,000") && !mortgage.includes("320000")) throw new Error("mortgage principal: " + mortgage);
if (!mortgage.includes("2,022") && !mortgage.includes("2022")) throw new Error("mortgage payment: " + mortgage);

await page.setViewport({ width: 390, height: 844 });
await page.goto(base + "/bmi-calculator/", { waitUntil: "networkidle0" });
await page.waitForSelector("#result table");
const mobileWidth = await page.$eval('input[name="weight"]', (el) => el.getBoundingClientRect().width);
if (mobileWidth < 250) throw new Error("mobile input width " + mobileWidth);
const bmi = await textOf("#result");
if (!bmi.includes("22.9") && !bmi.includes("22,9")) throw new Error("bmi: " + bmi);

await page.setViewport({ width: 1280, height: 800 });
await page.goto(base + "/percentage-calculator/", { waitUntil: "networkidle0" });
await page.waitForSelector("#result table");
const pct = await textOf("#result");
if (!pct.includes("16")) throw new Error("percent: " + pct);
await page.select('select[name="op"]', "change");
await page.$eval('input[name="a"]', (el) => { el.value = "80"; });
await page.$eval('input[name="b"]', (el) => { el.value = "100"; });
await page.click("button.go");
await page.waitForFunction(() => document.querySelector("#result").innerText.includes("%"));
const change = await textOf("#result");
if (!change.includes("25")) throw new Error("percent change: " + change);

await page.goto(base + "/", { waitUntil: "networkidle0" });
const links = await page.$$eval(".catalog a", (els) => els.length);
if (links < 50) throw new Error("catalog links " + links);
await page.type("#finder", "mortgage");
await page.waitForFunction(() => document.querySelectorAll("[data-tool]:not([hidden])").length < 10);
const visible = await page.$$eval("[data-tool]:not([hidden])", (els) => els.map((el) => el.innerText));
if (!visible.some((text) => /mortgage/i.test(text))) throw new Error("search " + visible.join("|"));

await page.goto(base + "/ru/blog/semrush-free-trial/", { waitUntil: "networkidle0" });
const lang = await page.$eval("html", (el) => el.lang);
const title = await page.title();
if (lang !== "ru") throw new Error(lang);
if (!title.includes("Semrush")) throw new Error(title);

await browser.close();
server.close();
console.log("browser checks passed");
console.log(compound.split("\n").slice(0, 4).join(" | "));
