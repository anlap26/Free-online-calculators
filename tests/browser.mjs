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
const href = await page.$eval('a[data-affiliate="semrush"]', (el) => el.getAttribute("href"));
const rel = await page.$eval('a[data-affiliate="semrush"]', (el) => el.getAttribute("rel"));
if (href !== "#AFFILIATE_SEMRUSH") throw new Error("semrush href " + href);
if (!rel.includes("sponsored")) throw new Error("rel " + rel);
const h1s = await page.$$eval("h1", (els) => els.length);
if (h1s !== 1) throw new Error("h1 " + h1s);

await page.goto(base + "/ru/blog/semrush-free-trial/", { waitUntil: "networkidle0" });
const lang = await page.$eval("html", (el) => el.lang);
const title = await page.title();
if (lang !== "ru") throw new Error(lang);
if (!title.includes("Semrush")) throw new Error(title);

await browser.close();
server.close();
console.log("browser checks passed");
console.log(compound.split("\n").slice(0, 4).join(" | "));
