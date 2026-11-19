const assert = require("assert");
const C = require("../assets/js/calc-core.js");

function close(a, b, eps) {
  eps = eps || 1e-6;
  if (typeof a === "number" && typeof b === "number" && Math.abs(a) > 1) eps = Math.abs(b) * 1e-9 + 1e-6;
  assert.ok(Math.abs(a - b) <= eps, a + " !~ " + b);
}

// Compound: 1000 at 10% compounded monthly for 1 year.
close(C.futureValue({ principal: 1000, annualRate: 0.1, years: 1, compoundsPerYear: 12, monthlyPmt: 0, timing: "end" }).futureValue, 1000 * Math.pow(1 + 0.1 / 12, 12));

// Annual compounding, 2 years, exact.
close(C.futureValue({ principal: 1000, annualRate: 0.1, years: 2, compoundsPerYear: 1, monthlyPmt: 0, timing: "end" }).futureValue, 1210);

// DCA end-of-month, 12% nominal, 100 per month, 1 year.
close(C.futureValue({ principal: 0, annualRate: 0.12, years: 1, compoundsPerYear: 12, monthlyPmt: 100, timing: "end" }).futureValue, 100 * (Math.pow(1.01, 12) - 1) / 0.01);

// Begin timing is one period larger.
const endFv = C.futureValue({ principal: 0, annualRate: 0.12, years: 1, compoundsPerYear: 12, monthlyPmt: 100, timing: "end" }).futureValue;
const beginFv = C.futureValue({ principal: 0, annualRate: 0.12, years: 1, compoundsPerYear: 12, monthlyPmt: 100, timing: "begin" }).futureValue;
close(beginFv, endFv * 1.01);

// Zero rate.
close(C.futureValue({ principal: 500, annualRate: 0, years: 1, compoundsPerYear: 12, monthlyPmt: 100, timing: "end" }).futureValue, 1700);

// Independent loop check.
function loop(principal, rate, years, n, pmt, timing) {
  const months = Math.round(years * 12);
  const i = Math.pow(1 + rate / n, n / 12) - 1;
  let fv = principal;
  for (let m = 0; m < months; m++) {
    if (timing === "begin") fv += pmt;
    fv *= 1 + i;
    if (timing === "end") fv += pmt;
  }
  return fv;
}
close(
  C.futureValue({ principal: 2500, annualRate: 0.07, years: 10.5, compoundsPerYear: 4, monthlyPmt: 150, timing: "begin" }).futureValue,
  loop(2500, 0.07, 10.5, 4, 150, "begin")
);

// FIRE number.
const fi = C.fire({ annualExpenses: 40000, withdrawalRate: 0.04, portfolio: 250000, monthlyPmt: 0, annualReturn: 0.05, dividendYield: 0.03, yearsUntilRetirement: 20 });
close(fi.fiNumber, 1000000);
close(fi.gap, 750000);
close(fi.dividendIncome, 7500);
assert.ok(fi.years > 20 && fi.years < 40);
// Already there.
assert.strictEqual(C.fire({ annualExpenses: 1000, withdrawalRate: 0.04, portfolio: 100000, monthlyPmt: 0, annualReturn: 0.05, dividendYield: 0, yearsUntilRetirement: 10 }).years, 0);
// No contributions and zero return cannot catch a gap.
assert.strictEqual(C.fire({ annualExpenses: 40000, withdrawalRate: 0.04, portfolio: 1000, monthlyPmt: 0, annualReturn: 0, dividendYield: 0, yearsUntilRetirement: 10 }).years, Infinity);

// Average price: 2 at 3000 and 1 at 3600.
const avg = C.averagePrice([{ qty: 2, price: 3000, fee: 0 }, { qty: 1, price: 3600, fee: 0 }], 0);
close(avg.average, 3200);
close(avg.qty, 3);
close(C.averagePrice([{ qty: 1, price: 100, fee: 0 }], 0.01).breakEven, 100 / 0.99);

// Staking.
close(C.stakingRow({ amount: 1000, rate: 0.05, years: 2, mode: "apy" }).future, 1102.5);
const apr = C.stakingRow({ amount: 1000, rate: 0.12, years: 1, mode: "apr", compounds: 12 });
close(apr.effective, Math.pow(1.01, 12) - 1);

// Fees.
const buy = C.tradeLeg({ price: 100, qty: 2, slippage: 0, feeRate: 0.001, side: "buy" });
close(buy.fee, 0.2);
close(buy.total, 200.2);
close(buy.effective, 100.1);
const slipBuy = C.tradeLeg({ price: 100, qty: 1, slippage: 0.0005, feeRate: 0.001, side: "buy" });
close(slipBuy.exec, 100.05);
close(slipBuy.fee, 100.05 * 0.001);
const rt = C.roundTrip({ price: 100, qty: 1, slippage: 0, entryFee: 0.001, exitFee: 0.001 });
close(rt.breakEven, 100.1 / 0.999);

// Spread.
const sp = C.currencySpread({ amount: 1000, interbank: 1.1, bank: 1.07, altFee: 0.005 });
close(sp.atMid, 1100);
close(sp.atBank, 1070);
close(sp.loss, 30);
close(sp.percent, 30 / 1100);
close(sp.alt, 1094.5);
close(sp.savings, 24.5);

// Inflation.
const inf = C.inflationPath({ amount: 100, years: 10, inflationRate: 0.03, nominalReturn: 0.05 });
close(inf.futureCost, 100 * Math.pow(1.03, 10));
close(inf.purchasingPower, 100 / Math.pow(1.03, 10));
close(inf.realReturn, 1.05 / 1.03 - 1);

// Position.
const pos = C.positionSize({ account: 10000, riskPct: 0.01, entry: 50, stop: 48, target: 56, side: "long" });
close(pos.riskCash, 100);
close(pos.units, 50);
close(pos.positionValue, 2500);
close(pos.reward, 300);
close(pos.rMultiple, 3);
const short = C.positionSize({ account: 10000, riskPct: 0.01, entry: 100, stop: 110, target: 80, side: "short" });
close(short.units, 10);
close(short.rMultiple, 2);
assert.throws(() => C.positionSize({ account: 10000, riskPct: 0.01, entry: 50, stop: 55, side: "long" }), (e) => e.code === "stop");

// Margin.
const mm = C.marginMarkup(60, 100);
close(mm.margin, 0.4);
close(mm.markup, 40 / 60);
close(C.priceFromMargin(80, 0.5), 160);
close(C.priceFromMarkup(80, 0.25), 100);
close(C.percentOf(0.15, 80), 12);
close(C.percentChange(200, 250), 0.25);
close(C.whatPercent(25, 200), 0.125);

// Ads.
const ad = C.adReturn({ spend: 1000, revenue: 4000, margin: 1, other: 0 });
close(ad.roas, 4);
close(ad.profit, 3000);
close(ad.roi, 3);
const ad2 = C.adReturn({ spend: 1000, revenue: 4000, margin: 0.5, other: 0 });
close(ad2.gross, 2000);
close(ad2.profit, 1000);
close(ad2.breakEvenRoas, 2);

// Page speed. 10000 * 0.02 * 50 = 10000 now. extra 2 seconds, 7% loss.
const speed = C.speedRevenue({ sessions: 10000, cvr: 0.02, aov: 50, currentSec: 4, fasterSec: 2, lossPerSec: 0.07 });
close(speed.revenueNow, 10000);
close(speed.revenueFast, 10000 / Math.pow(0.93, 2));
close(speed.lost, 10000 / Math.pow(0.93, 2) - 10000);

// Freelance. Zero tax, full utilisation, no leave: 52*5*8 = 2080 hours, 52000/2080 = 25.
const fr = C.freelanceRate({ netIncome: 52000, taxRate: 0, annualCosts: 0, vacationWeeks: 0, sickDays: 0, holidays: 0, hoursPerWeek: 40, utilization: 1 });
close(fr.workDays, 260);
close(fr.billableHours, 2080);
close(fr.hourly, 25);
const fr2 = C.freelanceRate({ netIncome: 60000, taxRate: 0.25, annualCosts: 5000, vacationWeeks: 4, sickDays: 5, holidays: 8, hoursPerWeek: 40, utilization: 0.6 });
close(fr2.gross, 65000 / 0.75);
close(fr2.workDays, 48 * 5 - 13);
close(fr2.hourly, fr2.gross / fr2.billableHours);

// LLM.
const llm = C.llmCost({ inputTokens: 1000, outputTokens: 500, inputPrice: 5, outputPrice: 15, requestsPerDay: 1000 });
close(llm.perRequest, 0.0125);
close(llm.perDay, 12.5);
close(llm.perMonth, 375);

// Salary index.
close(C.salaryEquivalent(5000, 100, 68).equivalent, 3400);
close(C.salaryEquivalent(5000, 100, 68).powerA, 50);

// eSIM.
const esim = C.esimCost({ days: 10, roamDay: 8, packagePrice: 25, includedGb: 5, useGb: 3, extraGb: 4 });
close(esim.roaming, 80);
close(esim.esim, 25);
assert.strictEqual(esim.cheaper, "esim");
close(C.esimCost({ days: 2, roamDay: 5, packagePrice: 20, includedGb: 1, useGb: 3, extraGb: 4 }).esim, 28);

// Dates. 2026-11-20 is a Friday, 2026-11-23 is Monday.
const bd = C.businessDaysBetween("2026-11-20", "2026-11-23", []);
assert.strictEqual(bd.calendar, 3);
assert.strictEqual(bd.business, 1);
assert.strictEqual(C.businessDaysBetween("2026-11-16", "2026-11-20", []).business, 4);
assert.strictEqual(C.businessDaysBetween("2026-11-16", "2026-11-23", []).business, 5);
// Holiday on Monday removes it.
assert.strictEqual(C.businessDaysBetween("2026-11-20", "2026-11-23", ["2026-11-23"]).business, 0);
assert.strictEqual(C.addBusinessDays("2026-11-20", 1, []), "2026-11-23");
assert.strictEqual(C.addBusinessDays("2026-11-20", 1, ["2026-11-23"]), "2026-11-24");
assert.strictEqual(C.addBusinessDays("2026-11-23", -1, []), "2026-11-20");

// Schengen: 1 Jan 2026 through 31 Mar 2026 is 90 days. 2026 is not a leap year.
const stay = C.schengen([{ start: "2026-01-01", end: "2026-03-31" }], "2026-03-31");
assert.strictEqual(stay.totalDays, 90);
assert.strictEqual(stay.used, 90);
assert.strictEqual(stay.remaining, 0);
assert.strictEqual(stay.firstOver, null);
const over = C.schengen([{ start: "2026-01-01", end: "2026-04-01" }], "2026-04-01");
assert.strictEqual(over.totalDays, 91);
assert.strictEqual(over.used, 91);
assert.strictEqual(over.firstOver, "2026-04-01");
// Overlap is not double counted.
const overlap = C.schengen([{ start: "2026-01-01", end: "2026-01-10" }, { start: "2026-01-05", end: "2026-01-12" }], "2026-01-12");
assert.strictEqual(overlap.totalDays, 12);

// 183 days.
const tax = C.daysInYear([{ start: "2026-01-01", end: "2026-07-02" }], 2026);
assert.strictEqual(tax.days, 183);
assert.strictEqual(tax.reached, true);
const shortStay = C.daysInYear([{ start: "2025-12-01", end: "2026-01-10" }], 2026);
assert.strictEqual(shortStay.days, 10);

// Contrast.
close(C.contrastRatio("#000000", "#ffffff"), 21);
close(C.contrastRatio("#ffffff", "#000000"), 21);
const mid = C.wcag(C.contrastRatio("#767676", "#ffffff"));
assert.ok(mid.ratio > 4.5 && mid.ratio < 4.6);
assert.strictEqual(mid.aaNormal, true);
assert.strictEqual(C.wcag(C.contrastRatio("#777777", "#ffffff")).aaNormal, false);
const pal = C.palette("#2f6f5e");
assert.strictEqual(pal.length, 5);
assert.ok(C.contrastRatio(pal[0], pal[4]) > 4.5);

// PX.
const px = C.convertPx({ px: 32, root: 16, parent: 20, viewport: 1280 });
close(px.rem, 2);
close(px.em, 1.6);
close(px.vw, 2.5);

// Entropy. 12 chars from 62 symbols.
const bits = C.entropyBits(12, 62);
close(bits, 12 * Math.log2(62));
const log10 = C.crackLog10Seconds(bits, 1e10);
const years = Math.pow(10, log10) / (365.25 * 86400);
assert.ok(years > 5000 && years < 5300, years);

// Charset excludes ambiguous by default.
const set = C.buildCharset({ lower: true, upper: true, digit: true, symbol: false, ambiguous: false });
assert.ok(!set.includes("0") && !set.includes("O") && !set.includes("1") && !set.includes("l") && !set.includes("I"));
const pw = C.randomFromCharset(set, 20);
assert.strictEqual(pw.length, 20);
assert.ok([...pw].every((ch) => set.includes(ch)));

// Strength.
const weak = C.passwordStrength("password", 1e10);
assert.ok(weak.warnings.includes("common"));
assert.ok(weak.bits <= 10);
const rep = C.passwordStrength("aaaaaaa", 1e4);
assert.ok(rep.warnings.includes("repeat"));
const seq = C.passwordStrength("abcd1234", 1e10);
assert.ok(seq.warnings.includes("sequence"));
const strong = C.passwordStrength("r7#Kq2!mP0vL9x", 1e10);
assert.ok(strong.bits > weak.bits);

// Email.
assert.strictEqual(C.isEmailFormat("a.b+c@example.co.uk"), true);
assert.strictEqual(C.isEmailFormat("not an email"), false);
assert.strictEqual(C.isEmailFormat("a@b"), false);
assert.strictEqual(C.plusAddress("Ada@Example.com", "news"), "Ada+news@Example.com");

// Text.
const text = C.analyzeText("Alpha beta alpha. New York and New York!", "alpha");
assert.strictEqual(text.words, 8);
assert.strictEqual(text.keywordCount, 2);
assert.strictEqual(text.sentences, 2);
close(text.density, 2 / 8);
const phrase = C.analyzeText("new york and new york", "new york");
assert.strictEqual(phrase.keywordCount, 2);
close(phrase.density, 4 / 5);
close(C.analyzeText("one two three four", "").readingMin, 4 / 200);

// JSON, CSV, SQL, UTM, robots.
assert.strictEqual(C.formatJson('{"b":1,"a":[2]}', 2).includes('"b"'), true);
assert.throws(() => C.formatJson("{", 2), (e) => e.code === "json");
const csv = C.parseCsv('name,city\n"Doe, Ann","Limassol"\nplain,Dubai');
assert.deepStrictEqual(csv[1], ["Doe, Ann", "Limassol"]);
assert.ok(C.formatCsv('a,"b,c"\n').includes('"b,c"'));
const sql = C.formatSql("select a from t where b = 1 and c = 2");
assert.ok(sql.startsWith("SELECT"));
assert.ok(sql.includes("\nFROM"));
assert.ok(sql.includes("\nWHERE"));
assert.throws(() => C.formatSql("select (a from t"), (e) => e.code === "sql");
const utm = C.buildUtm({ url: "https://example.com/land", source: "newsletter", medium: "email", campaign: "spring", term: "", content: "logo" });
assert.ok(utm.includes("utm_source=newsletter"));
assert.ok(utm.includes("utm_content=logo"));
assert.ok(!utm.includes("utm_term"));
const robots = C.robotsTxt({ site: "https://example.com/", disallow: ["/admin", ""], allow: ["/admin/public"] });
assert.ok(robots.includes("Disallow: /admin"));
assert.ok(robots.includes("Sitemap: https://example.com/sitemap.xml"));
assert.ok(C.sitemapXml(["https://example.com/a"]).includes("<loc>https://example.com/a</loc>"));
const meta = C.metaTags({ title: 'Tom & "Jerry"', description: "x", url: "https://example.com" });
assert.ok(meta.includes("Tom &amp; &quot;Jerry&quot;"));

// JPEG strip keeps the scan and drops EXIF.
const exifPayload = Buffer.from("Exif\0\0", "binary");
const app1Body = Buffer.concat([exifPayload, Buffer.from([0, 0, 0, 0])]);
const len = app1Body.length + 2;
const jpeg = Buffer.concat([
  Buffer.from([0xff, 0xd8]),
  Buffer.from([0xff, 0xe1, len >> 8, len & 255]),
  app1Body,
  Buffer.from([0xff, 0xda, 0x00, 0x04, 0x00, 0x00, 0x12, 0x34, 0xff, 0xd9])
]);
const stripped = C.stripJpegMetadata(jpeg);
assert.ok(stripped.removed.includes("APP1"));
assert.ok(!Buffer.from(stripped.bytes).includes(Buffer.from("Exif")));
assert.strictEqual(stripped.bytes[0], 0xff);
assert.strictEqual(stripped.bytes[1], 0xd8);
assert.ok(Buffer.from(stripped.bytes).includes(Buffer.from([0xff, 0xda])));

// Crafted TIFF: Make "AB", GPS 51°30'0" N.
function u16(n) { return Buffer.from([n & 255, (n >> 8) & 255]); }
function u32(n) { return Buffer.from([n & 255, (n >> 8) & 255, (n >> 16) & 255, (n >> 24) & 255]); }
function entry(tag, type, count, valueBuf) {
  const b = Buffer.alloc(12);
  u16(tag).copy(b, 0);
  u16(type).copy(b, 2);
  u32(count).copy(b, 4);
  valueBuf.copy(b, 8);
  return b;
}
const rationals = Buffer.concat([u32(51), u32(1), u32(30), u32(1), u32(0), u32(1)]);
// Layout: header 8, IFD0 at 8 with 2 entries (2+24+4=30) ends at 38.
// GPS IFD at 38 with 2 entries ends at 68. Rationals at 68.
const gpsOff = 38;
const ratOff = 68;
const ifd0 = Buffer.concat([
  u16(2),
  entry(0x010f, 2, 3, Buffer.from([0x41, 0x42, 0x00, 0x00])),
  entry(0x8825, 4, 1, u32(gpsOff)),
  u32(0)
]);
const gpsIfd = Buffer.concat([
  u16(2),
  entry(1, 2, 2, Buffer.from([0x4e, 0x00, 0x00, 0x00])),
  entry(2, 5, 3, u32(ratOff)),
  u32(0)
]);
const tiff = Buffer.concat([
  Buffer.from([0x49, 0x49, 0x2a, 0x00]),
  u32(8),
  ifd0,
  gpsIfd,
  rationals
]);
assert.strictEqual(tiff.length, 68 + rationals.length);
const parsed = C.parseTiff(tiff);
assert.strictEqual(parsed.make, "AB");
close(parsed.lat, 51.5);
assert.strictEqual(parsed.latRef, "N");

// Wrap TIFF in a JPEG APP1 and parse through the JPEG walker.
const tiffPayload = Buffer.concat([Buffer.from("Exif\0\0", "binary"), tiff]);
const tlen = tiffPayload.length + 2;
const jpeg2 = Buffer.concat([
  Buffer.from([0xff, 0xd8, 0xff, 0xe1, tlen >> 8, tlen & 255]),
  tiffPayload,
  Buffer.from([0xff, 0xda, 0x00, 0x02, 0xff, 0xd9])
]);
const jpegMeta = C.parseJpegMetadata(jpeg2);
assert.strictEqual(jpegMeta.exif.make, "AB");
close(jpegMeta.exif.lat, 51.5);
assert.ok(jpegMeta.segments.includes("APP1"));

// PNG text strip. Minimal IHDR is not a valid image but the chunk walker does not care
// as long as the signature and CRC-bearing chunks are well framed. CRC is opaque.
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  return Buffer.concat([len, Buffer.from(type), data, crc]);
}
const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", Buffer.alloc(13)),
  chunk("tEXt", Buffer.concat([Buffer.from("Comment"), Buffer.from([0]), Buffer.from("gps secret")])),
  chunk("IEND", Buffer.alloc(0))
]);
const pngOut = C.stripPngMetadata(png);
assert.ok(pngOut.removed.includes("tEXt"));
assert.strictEqual(pngOut.texts[0].value, "gps secret");
assert.ok(!Buffer.from(pngOut.bytes).includes(Buffer.from("gps secret")));
assert.ok(Buffer.from(pngOut.bytes).includes(Buffer.from("IHDR")));

// AES round trip. Fewer iterations in the test.
(async () => {
  const secret = "local note — локальная заметка";
  const enc = await C.aesEncrypt(secret, "correct horse", 1000);
  const dec = await C.aesDecrypt(enc, "correct horse", 1000);
  assert.strictEqual(dec, secret);
  await assert.rejects(C.aesDecrypt(enc, "wrong", 1000), (e) => e.code === "decrypt");
  assert.strictEqual(await C.sha256Hex(""), "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
  assert.strictEqual(await C.sha256Hex("abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
  const n = C.randomUint(1, 6);
  assert.ok(n >= 1 && n <= 6);
  const key = C.randomKey(256);
  assert.strictEqual(key.hex.length, 64);
  const ips = C.compareIps("203.0.113.5", ["203.0.113.5", "::ffff:198.51.100.9", "198.51.100.9"]);
  assert.deepStrictEqual(ips.leaks, ["198.51.100.9"]);
  assert.strictEqual(ips.matched, true);
  const utc = C.zonedTimeToUtc("2026-11-19", "15:00", "Europe/London");
  assert.strictEqual(utc, Date.UTC(2026, 10, 19, 15, 0, 0));
  const ny = C.hourInZone(utc, "America/New_York");
  assert.strictEqual(ny.hour, 10);
  const plan = C.meetingHours("2026-11-19", ["Europe/London", "America/New_York"]);
  assert.strictEqual(plan.length, 24);
  const at15 = plan.find((row) => row.utcHour === 15);
  assert.strictEqual(at15.rows[0].inside, true);
  assert.strictEqual(at15.rows[1].hour, 10);
  const policy = C.buildPolicy({ site: "Example", url: "https://example.com", email: "a@b.co", country: "Cyprus", affiliates: true, ipTool: true, lang: "en", date: "2026-11-19" });
  assert.ok(policy.includes("affiliate"));
  assert.ok(policy.includes("ipify"));
  const policyRu = C.buildPolicy({ site: "Пример", affiliates: true, lang: "ru", date: "2026-11-19" });
  assert.ok(policyRu.includes("партнёр"));
  console.log("calc tests passed");
  console.log("speed lost/month", speed.lost.toFixed(2));
  console.log("12-char years", years.toFixed(1));
  console.log("inflation 10y", inf.futureCost.toFixed(2), inf.purchasingPower.toFixed(2));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
