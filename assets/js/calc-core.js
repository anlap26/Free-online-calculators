/* Pure calculation functions. No DOM. Shared by the pages and the Node tests. */
(function (root, factory) {
  var api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.CalcCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function CalcError(code, detail) {
    this.name = "CalcError";
    this.code = code;
    this.detail = detail || "";
    this.message = code;
  }
  CalcError.prototype = Object.create(Error.prototype);

  function num(v) {
    if (typeof v === "number") return v;
    if (typeof v === "string") v = v.trim().replace(/\s/g, "").replace(",", ".");
    var n = Number(v);
    return n;
  }

  function assertFinite(n, code) {
    if (!isFinite(n)) throw new CalcError(code || "number");
    return n;
  }

  function monthlyRate(annualRate, compoundsPerYear) {
    if (annualRate <= -0.999) throw new CalcError("rate");
    var n = compoundsPerYear;
    if (!n || n <= 0) throw new CalcError("rate");
    return Math.pow(1 + annualRate / n, n / 12) - 1;
  }

  function futureValue(opts) {
    var principal = assertFinite(num(opts.principal), "number");
    var annualRate = assertFinite(num(opts.annualRate), "rate");
    var years = assertFinite(num(opts.years), "years");
    var compounds = assertFinite(num(opts.compoundsPerYear), "rate");
    var pmt = assertFinite(num(opts.monthlyPmt), "number");
    var timing = opts.timing === "begin" ? "begin" : "end";
    if (years < 0 || years > 100) throw new CalcError("years");
    if (principal < 0 || pmt < 0) throw new CalcError("number");
    var months = Math.round(years * 12);
    var i = monthlyRate(annualRate, compounds);
    var fv;
    if (Math.abs(i) < 1e-14) {
      fv = principal + pmt * months;
    } else {
      var growth = Math.pow(1 + i, months);
      var annuity = pmt * ((growth - 1) / i);
      fv = principal * growth + (timing === "begin" ? annuity * (1 + i) : annuity);
    }
    var contributed = principal + pmt * months;
    var rows = [];
    for (var y = 1; y <= Math.ceil(years) && y <= 100; y++) {
      var m = Math.min(y * 12, months);
      var value;
      if (Math.abs(i) < 1e-14) value = principal + pmt * m;
      else {
        var g = Math.pow(1 + i, m);
        var ann = pmt * ((g - 1) / i);
        value = principal * g + (timing === "begin" ? ann * (1 + i) : ann);
      }
      rows.push({ year: y, months: m, value: value, contributed: principal + pmt * m, interest: value - (principal + pmt * m) });
      if (m === months) break;
    }
    return { futureValue: fv, contributed: contributed, interest: fv - contributed, months: months, monthlyRate: i, rows: rows };
  }

  function fire(opts) {
    var expenses = assertFinite(num(opts.annualExpenses), "number");
    var wr = assertFinite(num(opts.withdrawalRate), "rate");
    var portfolio = assertFinite(num(opts.portfolio), "number");
    var pmt = assertFinite(num(opts.monthlyPmt), "number");
    var annualReturn = assertFinite(num(opts.annualReturn), "rate");
    var divYield = assertFinite(num(opts.dividendYield), "rate");
    var yearsUntil = assertFinite(num(opts.yearsUntilRetirement), "years");
    if (expenses < 0 || portfolio < 0 || pmt < 0) throw new CalcError("number");
    if (wr <= 0 || wr >= 1) throw new CalcError("rate");
    var fiNumber = expenses / wr;
    var i = monthlyRate(annualReturn, 12);
    var months;
    if (portfolio >= fiNumber) months = 0;
    else if (Math.abs(i) < 1e-14) {
      months = pmt > 0 ? (fiNumber - portfolio) / pmt : Infinity;
    } else {
      var denom = portfolio + pmt / i;
      var numer = fiNumber + pmt / i;
      if (denom <= 0 || numer <= 0 || numer / denom <= 0) months = Infinity;
      else {
        var ratio = numer / denom;
        var base = 1 + i;
        if (base <= 0) months = Infinity;
        else months = Math.log(ratio) / Math.log(base);
        if (!isFinite(months) || months < 0) months = Infinity;
      }
    }
    var coastMonths = Math.max(0, Math.round(yearsUntil * 12));
    var coastNumber = fiNumber;
    if (coastMonths > 0) {
      var g = Math.abs(i) < 1e-14 ? 1 : Math.pow(1 + i, coastMonths);
      coastNumber = g === 0 ? Infinity : fiNumber / g;
    }
    return {
      fiNumber: fiNumber,
      gap: Math.max(0, fiNumber - portfolio),
      months: months,
      years: months === Infinity ? Infinity : months / 12,
      dividendIncome: portfolio * divYield,
      coastNumber: coastNumber,
      covered: portfolio >= fiNumber
    };
  }

  function averagePrice(lots, sellFee) {
    var qty = 0;
    var cost = 0;
    if (!lots || !lots.length) throw new CalcError("number");
    for (var i = 0; i < lots.length; i++) {
      var q = assertFinite(num(lots[i].qty), "number");
      var p = assertFinite(num(lots[i].price), "number");
      var fee = assertFinite(num(lots[i].fee || 0), "number");
      if (q < 0 || p < 0 || fee < 0) throw new CalcError("number");
      qty += q;
      cost += q * p + fee;
    }
    if (qty <= 0) throw new CalcError("number");
    var feeRate = sellFee == null || sellFee === "" ? 0 : assertFinite(num(sellFee), "rate");
    if (feeRate < 0 || feeRate >= 1) throw new CalcError("rate");
    var average = cost / qty;
    var breakEven = feeRate > 0 ? average / (1 - feeRate) : average;
    return { qty: qty, cost: cost, average: average, breakEven: breakEven };
  }

  function stakingRow(opts) {
    var amount = assertFinite(num(opts.amount), "number");
    var rate = assertFinite(num(opts.rate), "rate");
    var years = assertFinite(num(opts.years), "years");
    var compounds = opts.compounds == null ? 12 : assertFinite(num(opts.compounds), "rate");
    if (amount < 0 || years < 0 || years > 100) throw new CalcError("years");
    if (rate <= -0.999) throw new CalcError("rate");
    var effective;
    if (opts.mode === "apr") {
      if (compounds <= 0) throw new CalcError("rate");
      effective = Math.pow(1 + rate / compounds, compounds) - 1;
    } else {
      effective = rate;
    }
    var future = amount * Math.pow(1 + effective, years);
    return { effective: effective, future: future, profit: future - amount };
  }

  function tradeLeg(opts) {
    var price = assertFinite(num(opts.price), "number");
    var qty = assertFinite(num(opts.qty), "number");
    var slippage = assertFinite(num(opts.slippage), "rate");
    var feeRate = assertFinite(num(opts.feeRate), "rate");
    if (price < 0 || qty <= 0) throw new CalcError("number");
    if (slippage < 0 || slippage >= 1 || feeRate < 0 || feeRate >= 1) throw new CalcError("rate");
    var sign = opts.side === "sell" ? -1 : 1;
    var exec = price * (1 + sign * slippage);
    var notional = exec * qty;
    var fee = notional * feeRate;
    var total = opts.side === "sell" ? notional - fee : notional + fee;
    return {
      exec: exec,
      notional: notional,
      fee: fee,
      slippageCash: Math.abs(exec - price) * qty,
      total: total,
      effective: total / qty
    };
  }

  function roundTrip(opts) {
    var buy = tradeLeg({
      price: opts.price,
      qty: opts.qty,
      slippage: opts.slippage,
      feeRate: opts.entryFee,
      side: "buy"
    });
    var slip = assertFinite(num(opts.slippage), "rate");
    var exitFee = assertFinite(num(opts.exitFee), "rate");
    var qty = assertFinite(num(opts.qty), "number");
    var denom = qty * (1 - slip) * (1 - exitFee);
    if (denom <= 0) throw new CalcError("rate");
    return { buy: buy, breakEven: buy.total / denom };
  }

  function currencySpread(opts) {
    var amount = assertFinite(num(opts.amount), "number");
    var interbank = assertFinite(num(opts.interbank), "number");
    var bank = assertFinite(num(opts.bank), "number");
    var altFee = assertFinite(num(opts.altFee), "rate");
    if (amount < 0 || interbank < 0 || bank < 0) throw new CalcError("number");
    if (altFee < 0 || altFee >= 1) throw new CalcError("rate");
    var atBank = amount * bank;
    var atMid = amount * interbank;
    var loss = atMid - atBank;
    var percent = atMid === 0 ? 0 : loss / atMid;
    var alt = atMid * (1 - altFee);
    return { atBank: atBank, atMid: atMid, loss: loss, percent: percent, bps: percent * 10000, alt: alt, savings: alt - atBank };
  }

  function inflationPath(opts) {
    var amount = assertFinite(num(opts.amount), "number");
    var years = assertFinite(num(opts.years), "years");
    var inflationRate = assertFinite(num(opts.inflationRate), "rate");
    if (amount < 0 || years < 0 || years > 100) throw new CalcError("years");
    if (inflationRate <= -0.999) throw new CalcError("rate");
    var futureCost = amount * Math.pow(1 + inflationRate, years);
    var purchasingPower = amount / Math.pow(1 + inflationRate, years);
    var realReturn = null;
    if (opts.nominalReturn != null && opts.nominalReturn !== "") {
      var nominal = assertFinite(num(opts.nominalReturn), "rate");
      realReturn = (1 + nominal) / (1 + inflationRate) - 1;
    }
    var rows = [];
    var steps = Math.min(Math.ceil(years), 40);
    for (var y = 1; y <= steps; y++) {
      var yy = Math.min(y, years);
      rows.push({
        year: yy,
        cost: amount * Math.pow(1 + inflationRate, yy),
        power: amount / Math.pow(1 + inflationRate, yy)
      });
      if (yy === years) break;
    }
    return { futureCost: futureCost, purchasingPower: purchasingPower, realReturn: realReturn, rows: rows };
  }

  function positionSize(opts) {
    var account = assertFinite(num(opts.account), "number");
    var riskPct = assertFinite(num(opts.riskPct), "rate");
    var entry = assertFinite(num(opts.entry), "number");
    var stop = assertFinite(num(opts.stop), "number");
    if (account <= 0 || entry <= 0) throw new CalcError("number");
    if (riskPct <= 0 || riskPct > 1) throw new CalcError("rate");
    var side = opts.side === "short" ? "short" : "long";
    var distance = side === "short" ? stop - entry : entry - stop;
    if (distance <= 0) throw new CalcError("stop");
    var riskCash = account * riskPct;
    var units = riskCash / distance;
    var positionValue = units * entry;
    var reward = null;
    var rMultiple = null;
    if (opts.target != null && opts.target !== "") {
      var target = assertFinite(num(opts.target), "number");
      var rewardPer = side === "short" ? entry - target : target - entry;
      reward = rewardPer * units;
      rMultiple = rewardPer / distance;
    }
    return {
      riskCash: riskCash,
      units: units,
      positionValue: positionValue,
      reward: reward,
      rMultiple: rMultiple,
      accountPct: positionValue / account,
      distance: distance
    };
  }

  function marginMarkup(cost, price) {
    cost = assertFinite(num(cost), "number");
    price = assertFinite(num(price), "number");
    if (cost < 0 || price <= 0) throw new CalcError("number");
    return { margin: (price - cost) / price, markup: cost === 0 ? Infinity : (price - cost) / cost, profit: price - cost };
  }

  function priceFromMargin(cost, margin) {
    cost = assertFinite(num(cost), "number");
    margin = assertFinite(num(margin), "rate");
    if (cost < 0) throw new CalcError("number");
    if (margin >= 1 || margin < 0) throw new CalcError("rate");
    return cost / (1 - margin);
  }

  function priceFromMarkup(cost, markup) {
    cost = assertFinite(num(cost), "number");
    markup = assertFinite(num(markup), "rate");
    if (cost < 0 || markup < -0.999) throw new CalcError("number");
    return cost * (1 + markup);
  }

  function percentOf(pct, x) {
    return assertFinite(num(x), "number") * assertFinite(num(pct), "number");
  }
  function percentChange(a, b) {
    a = assertFinite(num(a), "number");
    b = assertFinite(num(b), "number");
    if (a === 0) throw new CalcError("divide");
    return (b - a) / a;
  }
  function whatPercent(x, y) {
    x = assertFinite(num(x), "number");
    y = assertFinite(num(y), "number");
    if (y === 0) throw new CalcError("divide");
    return x / y;
  }

  function adReturn(opts) {
    var spend = assertFinite(num(opts.spend), "number");
    var revenue = assertFinite(num(opts.revenue), "number");
    var margin = assertFinite(num(opts.margin), "rate");
    var other = assertFinite(num(opts.other || 0), "number");
    if (spend < 0 || revenue < 0 || other < 0) throw new CalcError("number");
    if (margin < 0 || margin > 1) throw new CalcError("rate");
    var gross = revenue * margin;
    var profit = gross - spend - other;
    var base = spend + other;
    var roas = spend === 0 ? Infinity : revenue / spend;
    var romi = base === 0 ? Infinity : profit / base;
    var breakEvenRevenue = margin === 0 ? Infinity : base / margin;
    var breakEvenRoas = spend === 0 || margin === 0 ? Infinity : breakEvenRevenue / spend;
    return { gross: gross, profit: profit, roas: roas, romi: romi, roi: romi, breakEvenRoas: breakEvenRoas };
  }

  function speedRevenue(opts) {
    var sessions = assertFinite(num(opts.sessions), "number");
    var cvr = assertFinite(num(opts.cvr), "rate");
    var aov = assertFinite(num(opts.aov), "number");
    var currentSec = assertFinite(num(opts.currentSec), "number");
    var fasterSec = assertFinite(num(opts.fasterSec), "number");
    var lossPerSec = assertFinite(num(opts.lossPerSec), "rate");
    if (sessions < 0 || aov < 0 || currentSec < 0 || fasterSec < 0) throw new CalcError("number");
    if (cvr < 0 || cvr > 1 || lossPerSec < 0 || lossPerSec >= 1) throw new CalcError("rate");
    var extra = Math.max(0, currentSec - fasterSec);
    var revenueNow = sessions * cvr * aov;
    var factor = Math.pow(1 - lossPerSec, extra);
    var revenueFast = factor === 0 ? Infinity : revenueNow / factor;
    return { revenueNow: revenueNow, revenueFast: revenueFast, lost: revenueFast - revenueNow, extra: extra };
  }

  function freelanceRate(opts) {
    var net = assertFinite(num(opts.netIncome), "number");
    var tax = assertFinite(num(opts.taxRate), "rate");
    var costs = assertFinite(num(opts.annualCosts), "number");
    var vacationWeeks = assertFinite(num(opts.vacationWeeks), "number");
    var sickDays = assertFinite(num(opts.sickDays), "number");
    var holidays = assertFinite(num(opts.holidays), "number");
    var hoursPerWeek = assertFinite(num(opts.hoursPerWeek), "number");
    var utilization = assertFinite(num(opts.utilization), "rate");
    if (net < 0 || costs < 0 || vacationWeeks < 0 || sickDays < 0 || holidays < 0) throw new CalcError("number");
    if (tax < 0 || tax >= 1 || utilization < 0 || utilization > 1) throw new CalcError("rate");
    var gross = (net + costs) / (1 - tax);
    var workDays = (52 - vacationWeeks) * 5 - sickDays - holidays;
    if (workDays <= 0 || hoursPerWeek <= 0) throw new CalcError("days");
    var dayHours = hoursPerWeek / 5;
    var billableHours = workDays * dayHours * utilization;
    if (billableHours <= 0) throw new CalcError("hours");
    var hourly = gross / billableHours;
    return { gross: gross, workDays: workDays, billableHours: billableHours, hourly: hourly, daily: hourly * dayHours, monthly: gross / 12 };
  }

  function llmCost(opts) {
    var inputTokens = assertFinite(num(opts.inputTokens), "number");
    var outputTokens = assertFinite(num(opts.outputTokens), "number");
    var inputPrice = assertFinite(num(opts.inputPrice), "number");
    var outputPrice = assertFinite(num(opts.outputPrice), "number");
    var requests = assertFinite(num(opts.requestsPerDay), "number");
    if (inputTokens < 0 || outputTokens < 0 || inputPrice < 0 || outputPrice < 0 || requests < 0) throw new CalcError("number");
    var per = (inputTokens / 1e6) * inputPrice + (outputTokens / 1e6) * outputPrice;
    return { perRequest: per, perDay: per * requests, perMonth: per * requests * 30 };
  }

  function salaryEquivalent(salary, indexA, indexB) {
    salary = assertFinite(num(salary), "number");
    indexA = assertFinite(num(indexA), "number");
    indexB = assertFinite(num(indexB), "number");
    if (salary < 0 || indexA <= 0 || indexB <= 0) throw new CalcError("number");
    return { equivalent: salary * indexB / indexA, powerA: salary / indexA, powerB: salary / indexB, ratio: indexA / indexB };
  }

  function esimCost(opts) {
    var days = assertFinite(num(opts.days), "number");
    var roamDay = assertFinite(num(opts.roamDay), "number");
    var packagePrice = assertFinite(num(opts.packagePrice), "number");
    var includedGb = assertFinite(num(opts.includedGb), "number");
    var useGb = assertFinite(num(opts.useGb), "number");
    var extraGb = assertFinite(num(opts.extraGb), "number");
    if (days < 0 || roamDay < 0 || packagePrice < 0 || includedGb < 0 || useGb < 0 || extraGb < 0) throw new CalcError("number");
    var roaming = days * roamDay;
    var over = Math.max(0, useGb - includedGb);
    var esim = packagePrice + over * extraGb;
    return { roaming: roaming, esim: esim, difference: roaming - esim, cheaper: roaming === esim ? "tie" : roaming > esim ? "esim" : "roaming" };
  }

  function utcDay(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) throw new CalcError("date");
    var y = +m[1], mo = +m[2], d = +m[3];
    if (mo < 1 || mo > 12 || d < 1 || d > 31) throw new CalcError("date");
    var t = Date.UTC(y, mo - 1, d);
    var check = new Date(t);
    if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) throw new CalcError("date");
    return t;
  }

  function isoDay(utc) {
    var d = new Date(utc);
    var y = d.getUTCFullYear();
    var mo = String(d.getUTCMonth() + 1).padStart(2, "0");
    var da = String(d.getUTCDate()).padStart(2, "0");
    return y + "-" + mo + "-" + da;
  }

  function eachDay(startIso, endIso) {
    var a = utcDay(startIso);
    var b = utcDay(endIso);
    if (b < a) throw new CalcError("range");
    var span = Math.round((b - a) / 86400000);
    if (span > 366 * 20) throw new CalcError("range");
    var out = [];
    for (var t = a; t <= b; t += 86400000) out.push(isoDay(t));
    return out;
  }

  function isWeekend(iso) {
    var day = new Date(utcDay(iso)).getUTCDay();
    return day === 0 || day === 6;
  }

  function businessDaysBetween(start, end, holidays) {
    var set = {};
    (holidays || []).forEach(function (h) { if (h) set[h] = true; });
    var days = eachDay(start, end);
    var count = 0, weekend = 0, hol = 0;
    for (var i = 1; i < days.length; i++) {
      var day = days[i];
      if (isWeekend(day)) weekend++;
      else if (set[day]) hol++;
      else count++;
    }
    return { calendar: days.length - 1, business: count, weekendDays: weekend, holidays: hol };
  }

  function addBusinessDays(start, n, holidays) {
    n = assertFinite(num(n), "number");
    if (!isFinite(n) || Math.abs(n) > 10000) throw new CalcError("range");
    n = Math.trunc(n);
    var set = {};
    (holidays || []).forEach(function (h) { if (h) set[h] = true; });
    var left = Math.abs(n);
    var step = n >= 0 ? 1 : -1;
    var t = utcDay(start);
    var guard = 0;
    while (left > 0) {
      t += step * 86400000;
      var iso = isoDay(t);
      if (!isWeekend(iso) && !set[iso]) left--;
      if (++guard > 20000) throw new CalcError("range");
    }
    return isoDay(t);
  }

  function schengen(trips, asOf) {
    var present = {};
    var total = 0;
    (trips || []).forEach(function (trip) {
      eachDay(trip.start, trip.end).forEach(function (d) {
        if (!present[d]) { present[d] = true; total++; }
      });
    });
    function countWindow(iso) {
      var end = utcDay(iso);
      var start = end - 179 * 86400000;
      var n = 0;
      for (var t = start; t <= end; t += 86400000) if (present[isoDay(t)]) n++;
      return n;
    }
    var used = countWindow(asOf);
    var firstOver = null;
    var all = Object.keys(present).sort();
    for (var i = 0; i < all.length; i++) {
      if (countWindow(all[i]) > 90) { firstOver = all[i]; break; }
    }
    return { used: used, remaining: Math.max(0, 90 - used), totalDays: total, firstOver: firstOver, over: used > 90 };
  }

  function daysInYear(trips, year) {
    year = String(year);
    if (!/^\d{4}$/.test(year)) throw new CalcError("date");
    var present = {};
    var total = 0;
    (trips || []).forEach(function (trip) {
      eachDay(trip.start, trip.end).forEach(function (d) {
        if (d.slice(0, 4) === year && !present[d]) { present[d] = true; total++; }
      });
    });
    return { days: total, threshold: 183, reached: total >= 183 };
  }

  function hexToRgb(hex) {
    var h = String(hex || "").trim().replace("#", "");
    if (h.length === 3) h = h.split("").map(function (c) { return c + c; }).join("");
    if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new CalcError("hex");
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
  }

  function rgbToHex(r, g, b) {
    function c(n) {
      n = Math.max(0, Math.min(255, Math.round(n)));
      return n.toString(16).padStart(2, "0");
    }
    return "#" + c(r) + c(g) + c(b);
  }

  function channel(c) {
    var s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  }

  function luminance(rgb) {
    return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
  }

  function contrastRatio(fg, bg) {
    var L1 = luminance(hexToRgb(fg));
    var L2 = luminance(hexToRgb(bg));
    var lighter = Math.max(L1, L2);
    var darker = Math.min(L1, L2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function wcag(ratio) {
    return {
      ratio: ratio,
      aaNormal: ratio >= 4.5,
      aaLarge: ratio >= 3,
      aaaNormal: ratio >= 7,
      aaaLarge: ratio >= 4.5,
      ui: ratio >= 3
    };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0;
    var l = (max + min) / 2;
    var d = max - min;
    if (d !== 0) {
      s = d / (1 - Math.abs(2 * l - 1));
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
      if (h < 0) h += 360;
    }
    return { h: h, s: s, l: l };
  }

  function hslToRgb(h, s, l) {
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var hp = h / 60;
    var x = c * (1 - Math.abs(hp % 2 - 1));
    var r = 0, g = 0, b = 0;
    if (hp >= 0 && hp < 1) { r = c; g = x; }
    else if (hp < 2) { r = x; g = c; }
    else if (hp < 3) { g = c; b = x; }
    else if (hp < 4) { g = x; b = c; }
    else if (hp < 5) { r = x; b = c; }
    else { r = c; b = x; }
    var m = l - c / 2;
    return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
  }

  function palette(hex) {
    var rgb = hexToRgb(hex);
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    var lights = [0.16, 0.32, hsl.l, 0.82, 0.94];
    return lights.map(function (l, idx) {
      var useL = idx === 2 ? hsl.l : l;
      var useS = idx === 2 ? hsl.s : Math.min(1, hsl.s * (idx < 2 ? 0.9 : 0.7));
      var c = hslToRgb(hsl.h, useS, useL);
      return rgbToHex(c.r, c.g, c.b);
    });
  }

  function convertPx(opts) {
    var px = assertFinite(num(opts.px), "number");
    var root = assertFinite(num(opts.root), "number");
    var parent = assertFinite(num(opts.parent), "number");
    var viewport = assertFinite(num(opts.viewport), "number");
    if (root <= 0 || parent <= 0 || viewport <= 0) throw new CalcError("divide");
    return { rem: px / root, em: px / parent, vw: px / viewport * 100, pxFromRem: null };
  }

  function entropyBits(length, charsetSize) {
    length = assertFinite(num(length), "number");
    charsetSize = assertFinite(num(charsetSize), "number");
    if (length <= 0 || charsetSize <= 1) return 0;
    return length * Math.log2(charsetSize);
  }

  function crackLog10Seconds(bits, guessesPerSec) {
    bits = assertFinite(num(bits), "number");
    guessesPerSec = assertFinite(num(guessesPerSec), "number");
    if (guessesPerSec <= 0) throw new CalcError("number");
    return Math.log10(0.5) + bits * (Math.LN2 / Math.LN10) - Math.log10(guessesPerSec);
  }

  var AMBIGUOUS = { "0": 1, "O": 1, "I": 1, "l": 1, "1": 1, "|": 1 };

  function buildCharset(opts) {
    var s = "";
    if (opts.lower) s += "abcdefghijklmnopqrstuvwxyz";
    if (opts.upper) s += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (opts.digit) s += "0123456789";
    if (opts.symbol) s += "!@#$%^&*()-_=+[]{};:,.?/";
    if (!opts.ambiguous) {
      s = s.split("").filter(function (c) { return !AMBIGUOUS[c]; }).join("");
    }
    if (s.length < 2) throw new CalcError("charset");
    return s;
  }

  function randomFromCharset(charset, length) {
    length = Math.trunc(assertFinite(num(length), "number"));
    if (length < 1 || length > 256) throw new CalcError("range");
    var n = charset.length;
    var max = Math.floor(0x100000000 / n) * n;
    var out = [];
    var guard = 0;
    while (out.length < length) {
      var buf = new Uint32Array(length - out.length + 8);
      crypto.getRandomValues(buf);
      for (var i = 0; i < buf.length && out.length < length; i++) {
        if (buf[i] < max) out.push(charset[buf[i] % n]);
      }
      if (++guard > 20) throw new CalcError("range");
    }
    return out.join("");
  }

  function pickWords(words, count) {
    count = Math.trunc(assertFinite(num(count), "number"));
    if (!words || words.length < 2) throw new CalcError("wordlist");
    if (count < 1 || count > 20) throw new CalcError("range");
    var n = words.length;
    var max = Math.floor(0x100000000 / n) * n;
    var picks = [];
    var guard = 0;
    while (picks.length < count) {
      var buf = new Uint32Array(count - picks.length + 4);
      crypto.getRandomValues(buf);
      for (var i = 0; i < buf.length && picks.length < count; i++) {
        if (buf[i] < max) picks.push(words[buf[i] % n]);
      }
      if (++guard > 20) throw new CalcError("range");
    }
    return { words: picks, bits: count * Math.log2(n) };
  }

  var COMMON_PASSWORDS = {
    password: 1, "123456": 1, "123456789": 1, "12345678": 1, qwerty: 1, "111111": 1,
    abc123: 1, password1: 1, iloveyou: 1, admin: 1, welcome: 1, letmein: 1,
    monkey: 1, dragon: 1, master: 1, login: 1, passw0rd: 1, qwerty123: 1,
    "123123": 1, "000000": 1, football: 1, shadow: 1, sunshine: 1, princess: 1,
    azerty: 1, trustno1: 1, "1q2w3e4r": 1, "qwertyuiop": 1
  };

  var KEY_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "1234567890"];

  function hasSequence(pw) {
    var lower = pw.toLowerCase();
    if (lower.length >= 4) {
      for (var i = 0; i <= lower.length - 4; i++) {
        var a = lower.charCodeAt(i);
        var up = true, down = true;
        for (var k = 1; k < 4; k++) {
          if (lower.charCodeAt(i + k) !== a + k) up = false;
          if (lower.charCodeAt(i + k) !== a - k) down = false;
        }
        if (up || down) return true;
      }
      for (var r = 0; r < KEY_ROWS.length; r++) {
        var row = KEY_ROWS[r];
        for (var j = 0; j <= row.length - 4; j++) {
          var slice = row.slice(j, j + 4);
          var rev = slice.split("").reverse().join("");
          if (lower.indexOf(slice) !== -1 || lower.indexOf(rev) !== -1) return true;
        }
      }
    }
    return false;
  }

  function passwordStrength(pw, guessesPerSec) {
    pw = String(pw || "");
    if (!pw) throw new CalcError("empty");
    guessesPerSec = assertFinite(num(guessesPerSec), "number");
    var warnings = [];
    if (COMMON_PASSWORDS[pw.toLowerCase()]) warnings.push("common");
    if (/(.)\1{2,}/.test(pw)) warnings.push("repeat");
    if (hasSequence(pw)) warnings.push("sequence");
    var size = 0;
    var classes = 0;
    if (/[a-z]/.test(pw)) { classes++; size += 26; }
    if (/[A-Z]/.test(pw)) { classes++; size += 26; }
    if (/[0-9]/.test(pw)) { classes++; size += 10; }
    if (/[^A-Za-z0-9]/.test(pw)) { classes++; size += 32; }
    if (size < 2) size = Math.max(2, new Set(pw).size);
    var bits = pw.length * Math.log2(size);
    if (warnings.indexOf("common") !== -1) bits = Math.min(bits, 10);
    if (warnings.indexOf("repeat") !== -1) bits *= 0.6;
    if (warnings.indexOf("sequence") !== -1) bits *= 0.7;
    return { bits: bits, warnings: warnings, log10: crackLog10Seconds(bits, guessesPerSec), classes: classes, charsetSize: size };
  }

  function durationFromLog10(log10s) {
    if (!isFinite(log10s)) return { key: "unknown", value: null };
    var universe = Math.log10(13.8e9 * 365.25 * 86400);
    if (log10s >= universe) return { key: "universe", value: null };
    if (log10s < 0) return { key: "seconds", value: Math.pow(10, log10s) };
    var bands = [
      ["seconds", 1],
      ["minutes", 60],
      ["hours", 3600],
      ["days", 86400],
      ["years", 86400 * 365.25]
    ];
    var chosen = bands[0];
    for (var i = bands.length - 1; i >= 0; i--) {
      if (log10s >= Math.log10(bands[i][1])) { chosen = bands[i]; break; }
    }
    var value = Math.pow(10, log10s - Math.log10(chosen[1]));
    return { key: chosen[0], value: value };
  }

  function isEmailFormat(s) {
    s = String(s || "");
    if (!s || s.length > 254) return false;
    var re = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
    if (!re.test(s)) return false;
    var at = s.lastIndexOf("@");
    var local = s.slice(0, at);
    var domain = s.slice(at + 1);
    if (!local || local.length > 64 || domain.length > 253) return false;
    return true;
  }

  function plusAddress(email, tag) {
    if (!isEmailFormat(email)) throw new CalcError("email");
    tag = String(tag || "").trim();
    if (!/^[A-Za-z0-9._-]{1,40}$/.test(tag)) throw new CalcError("email");
    var at = email.lastIndexOf("@");
    var local = email.slice(0, at).split("+")[0];
    return local + "+" + tag + "@" + email.slice(at + 1);
  }

  function analyzeText(text, keyword) {
    text = String(text || "");
    var chars = Array.from(text).length;
    var charsNoSpace = Array.from(text.replace(/\s/g, "")).length;
    var words = text.trim() ? text.trim().split(/\s+/).filter(Boolean) : [];
    var parts = text.split(/[.!?]+/);
    var sentences = 0;
    for (var i = 0; i < parts.length; i++) {
      if (/[\p{L}\p{N}]/u.test(parts[i])) sentences++;
    }
    var keywordCount = 0;
    var density = 0;
    var kWords = 0;
    if (keyword && String(keyword).trim()) {
      var k = String(keyword).trim().toLowerCase();
      var hay = text.toLowerCase();
      var idx = 0;
      while (idx <= hay.length) {
        var at = hay.indexOf(k, idx);
        if (at < 0) break;
        keywordCount++;
        idx = at + Math.max(1, k.length);
      }
      kWords = k.split(/\s+/).length;
      density = words.length ? (keywordCount * kWords) / words.length : 0;
    }
    return {
      chars: chars,
      charsNoSpace: charsNoSpace,
      words: words.length,
      sentences: sentences,
      readingMin: words.length / 200,
      speakingMin: words.length / 130,
      keywordCount: keywordCount,
      density: density
    };
  }

  function topWords(text, stopwords, limit) {
    var stop = {};
    (stopwords || []).forEach(function (w) { stop[w.toLowerCase()] = true; });
    var counts = {};
    var words = String(text || "").toLowerCase().match(/[\p{L}\p{N}']+/gu) || [];
    words.forEach(function (w) {
      if (w.length < 2 || stop[w]) return;
      counts[w] = (counts[w] || 0) + 1;
    });
    return Object.keys(counts).map(function (w) { return { word: w, count: counts[w] }; })
      .sort(function (a, b) { return b.count - a.count || a.word.localeCompare(b.word); })
      .slice(0, limit || 8);
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function escapeXml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c];
    });
  }

  function metaTags(o) {
    var e = escapeHtml;
    var lines = [];
    lines.push("<title>" + e(o.title) + "</title>");
    lines.push('<meta name="description" content="' + e(o.description) + '">');
    if (o.url) lines.push('<link rel="canonical" href="' + e(o.url) + '">');
    lines.push('<meta property="og:title" content="' + e(o.title) + '">');
    lines.push('<meta property="og:description" content="' + e(o.description) + '">');
    if (o.url) lines.push('<meta property="og:url" content="' + e(o.url) + '">');
    lines.push('<meta property="og:type" content="' + e(o.type || "website") + '">');
    if (o.site) lines.push('<meta property="og:site_name" content="' + e(o.site) + '">');
    if (o.image) lines.push('<meta property="og:image" content="' + e(o.image) + '">');
    lines.push('<meta name="twitter:card" content="summary_large_image">');
    lines.push('<meta name="twitter:title" content="' + e(o.title) + '">');
    lines.push('<meta name="twitter:description" content="' + e(o.description) + '">');
    if (o.image) lines.push('<meta name="twitter:image" content="' + e(o.image) + '">');
    if (o.twitter) lines.push('<meta name="twitter:site" content="' + e(o.twitter) + '">');
    var ld = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": o.title,
      "description": o.description
    };
    if (o.url) ld.url = o.url;
    lines.push('<script type="application/ld+json">' + JSON.stringify(ld) + "</script>");
    return lines.join("\n");
  }

  function robotsTxt(opts) {
    var lines = ["User-agent: *"];
    (opts.allow || []).forEach(function (a) { if (String(a).trim()) lines.push("Allow: " + String(a).trim()); });
    (opts.disallow || []).forEach(function (d) { if (String(d).trim()) lines.push("Disallow: " + String(d).trim()); });
    var maps = (opts.sitemaps || []).filter(function (s) { return String(s).trim(); });
    if (!maps.length && opts.site) maps = [String(opts.site).replace(/\/$/, "") + "/sitemap.xml"];
    maps.forEach(function (s) { lines.push("Sitemap: " + String(s).trim()); });
    return lines.join("\n") + "\n";
  }

  function sitemapXml(urls) {
    var body = (urls || []).filter(Boolean).map(function (u) {
      return "  <url><loc>" + escapeXml(String(u).trim()) + "</loc></url>";
    }).join("\n");
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "\n</urlset>\n";
  }

  function formatJson(text, indent) {
    var n = Number(indent);
    if (!isFinite(n) || n < 0 || n > 8) n = 2;
    try {
      return JSON.stringify(JSON.parse(text), null, n);
    } catch (e) {
      throw new CalcError("json", e.message);
    }
  }

  function parseCsv(text) {
    var rows = [];
    var row = [];
    var cur = "";
    var q = false;
    text = String(text || "");
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"') {
          if (text[i + 1] === '"') { cur += '"'; i++; }
          else q = false;
        } else cur += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(cur); cur = ""; }
      else if (c === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; }
      else if (c !== "\r") cur += c;
    }
    if (q) throw new CalcError("csv");
    if (cur.length || row.length) { row.push(cur); rows.push(row); }
    return rows;
  }

  function formatCsv(text) {
    return parseCsv(text).map(function (r) {
      return r.map(function (cell) {
        if (/[",\n\r]/.test(cell)) return '"' + cell.replace(/"/g, '""') + '"';
        return cell;
      }).join(",");
    }).join("\n");
  }

  function formatSql(sql) {
    sql = String(sql || "");
    var parens = 0;
    var quote = null;
    for (var i = 0; i < sql.length; i++) {
      var c = sql[i];
      if (quote) {
        if (c === quote) {
          if (sql[i + 1] === quote) { i++; continue; }
          quote = null;
        }
        continue;
      }
      if (c === "'" || c === '"') { quote = c; continue; }
      if (c === "-" && sql[i + 1] === "-") {
        while (i < sql.length && sql[i] !== "\n") i++;
        continue;
      }
      if (c === "(") parens++;
      else if (c === ")") {
        parens--;
        if (parens < 0) throw new CalcError("sql");
      }
    }
    if (quote || parens !== 0) throw new CalcError("sql");
    var out = sql.replace(/\s+/g, " ").trim();
    var breaks = ["UNION ALL", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "GROUP BY", "ORDER BY", "INSERT INTO", "SELECT", "FROM", "WHERE", "HAVING", "LIMIT", "OFFSET", "VALUES", "UPDATE", "SET", "JOIN", "AND", "OR"];
    for (var b = 0; b < breaks.length; b++) {
      var re = new RegExp("\\s+(" + breaks[b] + ")\\b", "ig");
      out = out.replace(re, "\n$1");
    }
    out = out.replace(/\b(select|from|where|and|or|group by|order by|left join|right join|inner join|join|having|limit|offset|insert into|values|update|set|union all|union|on|as|desc|asc)\b/gi, function (m) {
      return m.toUpperCase();
    });
    return out;
  }

  function buildUtm(opts) {
    var u;
    try { u = new URL(opts.url); }
    catch (e) { throw new CalcError("url"); }
    function set(key, val) {
      if (val != null && String(val).trim() !== "") u.searchParams.set(key, String(val).trim());
    }
    set("utm_source", opts.source);
    set("utm_medium", opts.medium);
    set("utm_campaign", opts.campaign);
    set("utm_term", opts.term);
    set("utm_content", opts.content);
    return u.toString();
  }

  function concatBytes(chunks) {
    var size = 0;
    for (var i = 0; i < chunks.length; i++) size += chunks[i].length;
    var out = new Uint8Array(size);
    var o = 0;
    for (var j = 0; j < chunks.length; j++) { out.set(chunks[j], o); o += chunks[j].length; }
    return out;
  }

  function stripJpegMetadata(bytes) {
    var u = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    if (u.length < 4 || u[0] !== 0xFF || u[1] !== 0xD8) throw new CalcError("jpeg");
    var chunks = [u.slice(0, 2)];
    var removed = [];
    var i = 2;
    while (i + 1 < u.length) {
      if (u[i] !== 0xFF) { chunks.push(u.slice(i)); break; }
      var j = i;
      while (j < u.length && u[j] === 0xFF) j++;
      if (j >= u.length) break;
      var marker = u[j];
      var markerStart = j - 1;
      if (marker === 0xDA || marker === 0xD9) { chunks.push(u.slice(markerStart)); break; }
      if (marker === 0x01 || (marker >= 0xD0 && marker <= 0xD7)) {
        chunks.push(u.slice(markerStart, j + 1));
        i = j + 1;
        continue;
      }
      if (j + 3 >= u.length) throw new CalcError("jpeg");
      var len = (u[j + 1] << 8) | u[j + 2];
      if (len < 2 || j + 1 + len > u.length) throw new CalcError("jpeg");
      var segEnd = j + 1 + len;
      var segment = u.slice(markerStart, segEnd);
      if (marker === 0xE1 || marker === 0xFE) removed.push(marker === 0xFE ? "COM" : "APP1");
      else chunks.push(segment);
      i = segEnd;
    }
    return { bytes: concatBytes(chunks), removed: removed };
  }

  function u16le(b, o) { return b[o] | (b[o + 1] << 8); }
  function u32le(b, o) { return (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0; }
  function u16be(b, o) { return (b[o] << 8) | b[o + 1]; }
  function u32be(b, o) { return ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0; }

  function readIfd(tiff, offset, le) {
    var u16 = le ? u16le : u16be;
    var u32 = le ? u32le : u32be;
    if (offset + 2 > tiff.length) return {};
    var n = u16(tiff, offset);
    var map = {};
    for (var i = 0; i < n; i++) {
      var e = offset + 2 + i * 12;
      if (e + 12 > tiff.length) break;
      map[u16(tiff, e)] = { type: u16(tiff, e + 2), count: u32(tiff, e + 4), inlineAt: e + 8, value: u32(tiff, e + 8) };
    }
    return map;
  }

  function typeSize(type) {
    return { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1 }[type] || 1;
  }

  function dataOffset(entry) {
    var bytes = typeSize(entry.type) * entry.count;
    return bytes <= 4 ? entry.inlineAt : entry.value;
  }

  function readAscii(tiff, entry) {
    var start = dataOffset(entry);
    var chars = [];
    for (var i = 0; i < entry.count && start + i < tiff.length; i++) {
      if (tiff[start + i] === 0) break;
      chars.push(String.fromCharCode(tiff[start + i]));
    }
    return chars.join("");
  }

  function readRational(tiff, offset, le) {
    var u32 = le ? u32le : u32be;
    if (offset + 8 > tiff.length) return 0;
    var n = u32(tiff, offset);
    var d = u32(tiff, offset + 4);
    return d ? n / d : 0;
  }

  function parseTiff(tiff) {
    if (!tiff || tiff.length < 8) return {};
    var le = tiff[0] === 0x49 && tiff[1] === 0x49;
    var be = tiff[0] === 0x4D && tiff[1] === 0x4D;
    if (!le && !be) return {};
    var u16 = le ? u16le : u16be;
    var u32 = le ? u32le : u32be;
    if (u16(tiff, 2) !== 42) return {};
    var tags = readIfd(tiff, u32(tiff, 4), le);
    var out = {};
    if (tags[0x010F]) out.make = readAscii(tiff, tags[0x010F]);
    if (tags[0x0110]) out.model = readAscii(tiff, tags[0x0110]);
    if (tags[0x0132]) out.date = readAscii(tiff, tags[0x0132]);
    if (tags[0x0131]) out.software = readAscii(tiff, tags[0x0131]);
    if (tags[0x8825]) {
      var gps = readIfd(tiff, tags[0x8825].value, le);
      if (gps[2] && gps[1]) {
        var ref = readAscii(tiff, gps[1]);
        var off = dataOffset(gps[2]);
        var lat = readRational(tiff, off, le) + readRational(tiff, off + 8, le) / 60 + readRational(tiff, off + 16, le) / 3600;
        if (ref === "S") lat = -lat;
        out.lat = lat;
        out.latRef = ref;
      }
      if (gps[4] && gps[3]) {
        var ref2 = readAscii(tiff, gps[3]);
        var off2 = dataOffset(gps[4]);
        var lon = readRational(tiff, off2, le) + readRational(tiff, off2 + 8, le) / 60 + readRational(tiff, off2 + 16, le) / 3600;
        if (ref2 === "W") lon = -lon;
        out.lon = lon;
        out.lonRef = ref2;
      }
    }
    return out;
  }

  function parseJpegMetadata(bytes) {
    var u = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    var meta = { segments: [], exif: {} };
    if (u.length < 4 || u[0] !== 0xFF || u[1] !== 0xD8) return meta;
    var i = 2;
    while (i + 4 < u.length) {
      if (u[i] !== 0xFF) break;
      var j = i;
      while (j < u.length && u[j] === 0xFF) j++;
      if (j >= u.length) break;
      var marker = u[j];
      if (marker === 0xDA || marker === 0xD9) break;
      if (marker === 0x01 || (marker >= 0xD0 && marker <= 0xD7)) { i = j + 1; continue; }
      var len = (u[j + 1] << 8) | u[j + 2];
      if (len < 2 || j + 1 + len > u.length) break;
      var name = "FF" + marker.toString(16).toUpperCase();
      if (marker >= 0xE0 && marker <= 0xEF) name = "APP" + (marker - 0xE0);
      meta.segments.push(name);
      if (marker === 0xE1) {
        var payload = u.slice(j + 3, j + 1 + len);
        var head = "";
        for (var k = 0; k < 6 && k < payload.length; k++) head += String.fromCharCode(payload[k]);
        if (head.indexOf("Exif") === 0 && payload.length > 6) {
          var exif = parseTiff(payload.slice(6));
          Object.keys(exif).forEach(function (key) { meta.exif[key] = exif[key]; });
        }
      }
      i = j + 1 + len;
    }
    return meta;
  }

  function stripPngMetadata(bytes) {
    var u = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    var sig = [137, 80, 78, 71, 13, 10, 26, 10];
    for (var s = 0; s < 8; s++) if (u[s] !== sig[s]) throw new CalcError("png");
    var drop = { eXIf: 1, tEXt: 1, iTXt: 1, zTXt: 1, tIME: 1 };
    var chunks = [u.slice(0, 8)];
    var texts = [];
    var removed = [];
    var i = 8;
    while (i + 12 <= u.length) {
      var len = u32be(u, i);
      var type = String.fromCharCode(u[i + 4], u[i + 5], u[i + 6], u[i + 7]);
      var total = 12 + len;
      if (i + total > u.length) throw new CalcError("png");
      if (type === "tEXt") {
        var data = u.slice(i + 8, i + 8 + len);
        var zero = data.indexOf(0);
        if (zero > 0) {
          texts.push({
            key: new TextDecoder().decode(data.slice(0, zero)),
            value: new TextDecoder().decode(data.slice(zero + 1))
          });
        }
      }
      if (drop[type]) removed.push(type);
      else chunks.push(u.slice(i, i + total));
      i += total;
      if (type === "IEND") break;
    }
    return { bytes: concatBytes(chunks), removed: removed, texts: texts };
  }

  function bytesToBase64(bytes) {
    var s = "";
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }

  function base64ToBytes(b64) {
    var clean = String(b64 || "").replace(/\s/g, "");
    var bin;
    try { bin = atob(clean); }
    catch (e) { throw new CalcError("decrypt"); }
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  async function deriveAesKey(password, salt, iterations) {
    var enc = new TextEncoder();
    var material = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: salt, iterations: iterations, hash: "SHA-256" },
      material,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  async function aesEncrypt(text, password, iterations) {
    if (!password) throw new CalcError("empty");
    var rounds = iterations || 150000;
    var salt = crypto.getRandomValues(new Uint8Array(16));
    var iv = crypto.getRandomValues(new Uint8Array(12));
    var key = await deriveAesKey(password, salt, rounds);
    var ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, key, new TextEncoder().encode(text)));
    var out = new Uint8Array(4 + salt.length + iv.length + ct.length);
    out.set([0x45, 0x4e, 0x43, 0x31], 0);
    out.set(salt, 4);
    out.set(iv, 20);
    out.set(ct, 32);
    return bytesToBase64(out);
  }

  async function aesDecrypt(payload, password, iterations) {
    if (!password) throw new CalcError("empty");
    var rounds = iterations || 150000;
    var raw = base64ToBytes(payload);
    if (raw.length < 33 || raw[0] !== 0x45 || raw[1] !== 0x4e || raw[2] !== 0x43 || raw[3] !== 0x31) throw new CalcError("decrypt");
    var salt = raw.slice(4, 20);
    var iv = raw.slice(20, 32);
    var ct = raw.slice(32);
    try {
      var key = await deriveAesKey(password, salt, rounds);
      var plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, key, ct);
      return new TextDecoder().decode(plain);
    } catch (e) {
      throw new CalcError("decrypt");
    }
  }

  async function sha256Hex(text) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(text)));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }

  function randomUint(min, max) {
    min = Math.ceil(assertFinite(num(min), "number"));
    max = Math.floor(assertFinite(num(max), "number"));
    if (max < min) throw new CalcError("range");
    var span = max - min + 1;
    if (span > 0x100000000) throw new CalcError("range");
    var limit = Math.floor(0x100000000 / span) * span;
    var x;
    do {
      x = crypto.getRandomValues(new Uint32Array(1))[0];
    } while (x >= limit);
    return min + (x % span);
  }

  function randomKey(bits) {
    bits = Math.trunc(assertFinite(num(bits), "number"));
    if (bits < 8 || bits > 4096 || bits % 8 !== 0) throw new CalcError("range");
    var bytes = crypto.getRandomValues(new Uint8Array(bits / 8));
    return {
      hex: Array.from(bytes).map(function (b) { return b.toString(16).padStart(2, "0"); }).join(""),
      base64: bytesToBase64(bytes)
    };
  }

  function compareIps(publicIp, rtcIps) {
    function norm(ip) { return String(ip || "").replace(/^::ffff:/i, "").trim(); }
    var pub = norm(publicIp);
    var leaks = [];
    var seen = {};
    var matched = false;
    (rtcIps || []).forEach(function (ip) {
      var n = norm(ip);
      if (!n || n.endsWith(".local")) return;
      if (n === pub) matched = true;
      else if (!seen[n]) { seen[n] = true; leaks.push(n); }
    });
    return { leaks: leaks, matched: matched };
  }

  function zonedParts(utcMs, timeZone) {
    var fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short"
    });
    var parts = {};
    fmt.formatToParts(new Date(utcMs)).forEach(function (p) { parts[p.type] = p.value; });
    return parts;
  }

  function zonedTimeToUtc(isoDate, time, timeZone) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
    var t = /^(\d{2}):(\d{2})$/.exec(time);
    if (!m || !t) throw new CalcError("date");
    var y = +m[1], mo = +m[2], d = +m[3], hh = +t[1], mm = +t[2];
    var utc = Date.UTC(y, mo - 1, d, hh, mm, 0);
    for (var k = 0; k < 4; k++) {
      var parts = zonedParts(utc, timeZone);
      var asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour % 24, +parts.minute, +parts.second);
      var desired = Date.UTC(y, mo - 1, d, hh, mm, 0);
      var diff = desired - asUtc;
      if (diff === 0) return utc;
      utc += diff;
    }
    return utc;
  }

  function hourInZone(utcMs, timeZone) {
    var parts = zonedParts(utcMs, timeZone);
    return { hour: (+parts.hour) % 24, minute: parts.minute, weekday: parts.weekday, day: parts.day, month: parts.month };
  }

  function meetingHours(isoDate, zones) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
    if (!m) throw new CalcError("date");
    var y = +m[1], mo = +m[2], d = +m[3];
    var scores = [];
    for (var h = 0; h < 24; h++) {
      var utc = Date.UTC(y, mo - 1, d, h, 0, 0);
      var ok = 0;
      var rows = zones.map(function (tz) {
        var info = hourInZone(utc, tz);
        var inside = info.hour >= 9 && info.hour < 17;
        if (inside) ok++;
        return { tz: tz, hour: info.hour, minute: info.minute, weekday: info.weekday, inside: inside };
      });
      scores.push({ utcHour: h, ok: ok, rows: rows });
    }
    return scores;
  }

  function buildPolicy(opts) {
    var site = String(opts.site || "This website").trim();
    var url = String(opts.url || "").trim();
    var email = String(opts.email || "").trim();
    var country = String(opts.country || "").trim();
    var lang = opts.lang === "ru" ? "ru" : "en";
    if (lang === "ru") {
      var lines = [];
      lines.push("Политика конфиденциальности — " + site);
      lines.push("Это черновик, а не юридическая консультация. Подставьте свои факты и, если сайт собирает данные не так, как описано ниже, попросите юриста проверить текст.");
      lines.push(site + (url ? " (" + url + ")" : "") + " — статический сайт. Страницы отдаются как файлы. У владельца нет своей базы данных и нет учётной записи на этом сайте, если вы сами не напишете иное.");
      lines.push("Калькуляторы считают в вашем браузере. Числа, которые вы вводите в финансовые формы, в генератор паролей, в шифрование и в проверку стойкости пароля, не отправляются владельцу сайта.");
      if (opts.ipTool) lines.push("Страница проверки IP обращается к сторонним службам (сейчас это ipify, ipwho.is и трассировка Cloudflare), чтобы показать адрес, который эти службы видят. Этим службам виден ваш IP. Владелец сайта этот запрос не получает.");
      if (opts.analytics) lines.push("Сайт может использовать аналитику. Если вы включите счётчик, поставщик аналитики получит технические данные о визите: адрес страницы, приблизительное место, тип браузера. Напишите здесь название счётчика и ссылку на его политику.");
      else lines.push("Сейчас на сайте нет собственного счётчика аналитики и нет рекламной сети.");
      if (opts.cookies) lines.push("Сайт или встроенные службы могут сохранять cookie или localStorage. Опишите, какие именно, и зачем.");
      else lines.push("Сам сайт не ставит рекламных и аналитических cookie. Браузер может хранить обычные технические данные, без отдельной учётной записи.");
      if (opts.affiliates) lines.push("На части страниц есть партнёрские ссылки. Если вы перейдёте к партнёру и оформите продукт, владелец сайта может получить комиссию. Партнёр увидит, что переход пришёл по партнёрской ссылке, и может поставить свою cookie уже на своём сайте. Цена для вас из-за этого не увеличивается. Список партнёров и пояснение лежат на странице раскрытия партнёрских ссылок.");
      if (opts.accounts) lines.push("Если вы позже добавите регистрацию, опишите, какие данные аккаунта хранятся, где и сколько времени.");
      if (opts.contactForm) lines.push("Если вы напишете на почту" + (email ? " " + email : "") + ", письмо содержит то, что вы сами в него вложили. Используйте его только для ответа.");
      else if (email) lines.push("Связаться с владельцем можно по адресу " + email + ".");
      if (country) lines.push("Владелец ориентируется на правила страны: " + country + ". Если вы находитесь в ЕС или ЕЭЗ, у вас могут быть права на доступ, исправление и удаление данных, которые владелец действительно хранит.");
      lines.push("Черновик составлен " + (opts.date || "") + ". Замените дату, когда текст изменится.");
      return lines.join("\n\n");
    }
    var en = [];
    en.push("Privacy policy — " + site);
    en.push("This is a starting draft, not legal advice. Replace every sentence that does not match what you actually do, and have a lawyer read it if your site collects personal data.");
    en.push(site + (url ? " (" + url + ")" : "") + " is a static website. Pages are files. The publisher does not run an account system or a database of its own unless you add one and say so here.");
    en.push("Calculators run in your browser. Numbers you type into the finance tools, the password generator, the encryptor, and the strength checker are not sent to the publisher.");
    if (opts.ipTool) en.push("The IP test calls third-party services (currently ipify, ipwho.is, and a Cloudflare trace) to show the address those services see. Those services see your IP. The publisher does not receive that request.");
    if (opts.analytics) en.push("The site may use analytics. If you turn a counter on, the analytics provider receives technical visit data such as the page address, a coarse location, and the browser type. Name the provider and link to its policy here.");
    else en.push("The site does not currently run its own analytics counter or an ad network.");
    if (opts.cookies) en.push("The site or an embedded service may store cookies or localStorage. Describe which ones, and why.");
    else en.push("The site itself does not set advertising or analytics cookies.");
    if (opts.affiliates) en.push("Some pages contain affiliate links. If you go to a partner and buy or sign up, the publisher may earn a commission. The partner can see that you arrived through an affiliate link and may set its own cookie on its own site. You do not pay more because of that. The partner list and a fuller note live on the affiliate disclosure page.");
    if (opts.accounts) en.push("If you later add accounts, describe which account data you store, where, and for how long.");
    if (opts.contactForm) en.push("If you email" + (email ? " " + email : " the publisher") + ", the message contains what you chose to write. It is used to reply.");
    else if (email) en.push("You can reach the publisher at " + email + ".");
    if (country) en.push("The publisher looks to the rules of " + country + ". If you are in the EU or EEA you may have rights to access, correct, and delete personal data the publisher actually holds.");
    en.push("Draft dated " + (opts.date || "") + ". Change the date when the text changes.");
    return en.join("\n\n");
  }

  return {
    CalcError: CalcError,
    num: num,
    futureValue: futureValue,
    fire: fire,
    averagePrice: averagePrice,
    stakingRow: stakingRow,
    tradeLeg: tradeLeg,
    roundTrip: roundTrip,
    currencySpread: currencySpread,
    inflationPath: inflationPath,
    positionSize: positionSize,
    marginMarkup: marginMarkup,
    priceFromMargin: priceFromMargin,
    priceFromMarkup: priceFromMarkup,
    percentOf: percentOf,
    percentChange: percentChange,
    whatPercent: whatPercent,
    adReturn: adReturn,
    speedRevenue: speedRevenue,
    freelanceRate: freelanceRate,
    llmCost: llmCost,
    salaryEquivalent: salaryEquivalent,
    esimCost: esimCost,
    utcDay: utcDay,
    isoDay: isoDay,
    eachDay: eachDay,
    isWeekend: isWeekend,
    businessDaysBetween: businessDaysBetween,
    addBusinessDays: addBusinessDays,
    schengen: schengen,
    daysInYear: daysInYear,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    contrastRatio: contrastRatio,
    wcag: wcag,
    palette: palette,
    convertPx: convertPx,
    entropyBits: entropyBits,
    crackLog10Seconds: crackLog10Seconds,
    buildCharset: buildCharset,
    randomFromCharset: randomFromCharset,
    pickWords: pickWords,
    passwordStrength: passwordStrength,
    durationFromLog10: durationFromLog10,
    isEmailFormat: isEmailFormat,
    plusAddress: plusAddress,
    analyzeText: analyzeText,
    topWords: topWords,
    escapeHtml: escapeHtml,
    metaTags: metaTags,
    robotsTxt: robotsTxt,
    sitemapXml: sitemapXml,
    formatJson: formatJson,
    parseCsv: parseCsv,
    formatCsv: formatCsv,
    formatSql: formatSql,
    buildUtm: buildUtm,
    stripJpegMetadata: stripJpegMetadata,
    parseJpegMetadata: parseJpegMetadata,
    parseTiff: parseTiff,
    stripPngMetadata: stripPngMetadata,
    aesEncrypt: aesEncrypt,
    aesDecrypt: aesDecrypt,
    sha256Hex: sha256Hex,
    randomUint: randomUint,
    randomKey: randomKey,
    compareIps: compareIps,
    zonedTimeToUtc: zonedTimeToUtc,
    hourInZone: hourInZone,
    meetingHours: meetingHours,
    buildPolicy: buildPolicy,
    bytesToBase64: bytesToBase64
  };
});
