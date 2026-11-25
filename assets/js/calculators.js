(function () {
  "use strict";
  var C = window.CalcCore;
  var UI = window.UI;
  if (!C || !UI) return;
  var lang = document.documentElement.lang || "en";

  function $(form, name) {
    return form.elements[name];
  }
  function val(form, name) {
    var el = $(form, name);
    return el ? el.value : "";
  }
  function on(form, name) {
    var el = $(form, name);
    return !!(el && el.checked);
  }
  function num(form, name) {
    return C.num(val(form, name));
  }
  function pct(form, name) {
    return C.num(val(form, name)) / 100;
  }
  function sym(form) {
    return val(form, "symbol") || "";
  }
  function digits(n) {
    var a = Math.abs(n);
    if (!isFinite(a) || a === 0 || a >= 100) return 2;
    if (a >= 1) return 4;
    return 8;
  }
  function money(n, symbol) {
    if (n == null || !isFinite(n)) return "—";
    var body = n.toLocaleString(lang, { minimumFractionDigits: Math.abs(n) >= 100 ? 2 : 0, maximumFractionDigits: digits(n) });
    return (symbol || "") + body;
  }
  function plain(n, d) {
    if (!isFinite(n)) return "—";
    return n.toLocaleString(lang, { maximumFractionDigits: d == null ? 2 : d });
  }
  function percent(fraction) {
    if (!isFinite(fraction)) return "—";
    return (fraction * 100).toLocaleString(lang, { maximumFractionDigits: 2 }) + "%";
  }
  function duration(log10) {
    var d = C.durationFromLog10(log10);
    if (d.key === "universe") return UI.dur.universe;
    var n = d.value.toLocaleString(lang, { maximumFractionDigits: d.value >= 10 ? 1 : 2 });
    return n + " " + UI.dur[d.key];
  }
  function table(rows) {
    var t = document.createElement("table");
    t.className = "out";
    rows.forEach(function (pair) {
      if (pair[1] == null || pair[1] === "") return;
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.scope = "row";
      th.textContent = pair[0];
      var td = document.createElement("td");
      td.textContent = pair[1];
      tr.append(th, td);
      t.append(tr);
    });
    return t;
  }
  function grid(headers, data) {
    var t = document.createElement("table");
    t.className = "out";
    var thead = document.createElement("thead");
    var hr = document.createElement("tr");
    headers.forEach(function (h) {
      var th = document.createElement("th");
      th.textContent = h;
      hr.append(th);
    });
    thead.append(hr);
    var tb = document.createElement("tbody");
    data.forEach(function (row) {
      var tr = document.createElement("tr");
      row.forEach(function (cell, i) {
        var el = document.createElement(i === 0 ? "th" : "td");
        if (i === 0) el.scope = "row";
        el.textContent = cell;
        tr.append(el);
      });
      tb.append(tr);
    });
    t.append(thead, tb);
    return t;
  }
  function p(text, cls) {
    var el = document.createElement("p");
    if (cls) el.className = cls;
    el.textContent = text;
    return el;
  }
  function pre(text, id) {
    var el = document.createElement("pre");
    el.className = "outbox";
    if (id) el.id = id;
    el.textContent = text;
    return el;
  }
  function show(out, nodes) {
    out.replaceChildren.apply(out, nodes);
  }
  function fail(out, err) {
    var code = err && err.code ? err.code : "number";
    var msg = (UI.errors && UI.errors[code]) || UI.errors.number;
    if (code === "json" && err.detail) msg += " " + err.detail;
    show(out, [p(msg, "err")]);
  }
  function download(filename, text, type) {
    var blob = text instanceof Blob ? text : new Blob([text], { type: type || "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  document.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrap = document.querySelector(btn.getAttribute("data-add"));
      var tpl = document.querySelector(btn.getAttribute("data-template"));
      if (!wrap || !tpl) return;
      if (wrap.querySelectorAll("[data-row]").length >= 20) return;
      wrap.appendChild(tpl.content.cloneNode(true));
    });
  });
  document.addEventListener("click", function (e) {
    var rm = e.target.closest("[data-remove]");
    if (!rm) return;
    var row = rm.closest("[data-row]");
    if (!row || !row.parentElement) return;
    if (row.parentElement.querySelectorAll("[data-row]").length <= 1) return;
    row.remove();
  });

  var form = document.querySelector("form[data-calc]");
  if (!form) return;
  var out = document.getElementById("result");
  var kind = form.getAttribute("data-calc");

  var handlers = {
    compound: function () {
      var r = C.futureValue({
        principal: num(form, "principal"),
        annualRate: pct(form, "rate"),
        years: num(form, "years"),
        compoundsPerYear: num(form, "compounds"),
        monthlyPmt: num(form, "pmt"),
        timing: val(form, "timing")
      });
      var s = sym(form);
      show(out, [
        table([
          [UI.compound.future, money(r.futureValue, s)],
          [UI.compound.contributed, money(r.contributed, s)],
          [UI.compound.interest, money(r.interest, s)],
          [UI.compound.monthly, percent(r.monthlyRate)]
        ]),
        grid(
          [UI.compound.year, UI.compound.value, UI.compound.inCol, UI.compound.growth],
          r.rows.map(function (row) {
            return [String(row.year), money(row.value, s), money(row.contributed, s), money(row.interest, s)];
          })
        )
      ]);
    },
    average: function () {
      var lots = [];
      form.querySelectorAll("[data-row]").forEach(function (row) {
        lots.push({
          qty: row.querySelector('[name="qty"]').value,
          price: row.querySelector('[name="price"]').value,
          fee: row.querySelector('[name="fee"]').value
        });
      });
      var r = C.averagePrice(lots, pct(form, "sellFee"));
      var s = sym(form);
      var rows = [
        [UI.average.qty, plain(r.qty, 8)],
        [UI.average.cost, money(r.cost, s)],
        [UI.average.avg, money(r.average, s)],
        [UI.average.breakeven, money(r.breakEven, s)]
      ];
      if (val(form, "target").trim() !== "") {
        var target = C.num(val(form, "target"));
        var pl = (target - r.breakEven) * r.qty;
        rows.push([UI.average.pl, money(pl, s)]);
      }
      show(out, [table(rows)]);
    },
    staking: function () {
      var years = num(form, "years");
      var mode = val(form, "mode");
      var compounds = num(form, "compounds");
      var raw = [];
      var future = 0;
      var profit = 0;
      form.querySelectorAll("[data-row]").forEach(function (row) {
        var r = C.stakingRow({
          amount: C.num(row.querySelector('[name="amount"]').value),
          rate: C.num(row.querySelector('[name="rate"]').value) / 100,
          years: years,
          mode: mode,
          compounds: compounds
        });
        future += r.future;
        profit += r.profit;
        raw.push({
          label: row.querySelector('[name="label"]').value || "—",
          effective: r.effective,
          future: r.future,
          profit: r.profit
        });
      });
      if (!raw.length) throw new C.CalcError("number");
      raw.sort(function (a, b) { return b.profit - a.profit; });
      var data = raw.map(function (row) {
        return [row.label, percent(row.effective), money(row.future, ""), money(row.profit, "")];
      });
      show(out, [
        grid([UI.staking.coin, UI.staking.effective, UI.staking.future, UI.staking.profit], data),
        table([
          [UI.staking.totalFuture, money(future, "")],
          [UI.staking.totalProfit, money(profit, "")]
        ])
      ]);
    },
    fees: function () {
      var maker = pct(form, "maker");
      var taker = pct(form, "taker");
      var entryFee = val(form, "entry") === "maker" ? maker : taker;
      var exitFee = val(form, "exit") === "maker" ? maker : taker;
      var side = val(form, "side");
      var s = sym(form);
      var nodes = [];
      if (side === "round") {
        var rt = C.roundTrip({
          price: num(form, "price"),
          qty: num(form, "qty"),
          slippage: pct(form, "slippage"),
          entryFee: entryFee,
          exitFee: exitFee
        });
        nodes.push(table([
          [UI.fees.exec, money(rt.buy.exec, s)],
          [UI.fees.fee, money(rt.buy.fee, s)],
          [UI.fees.slip, money(rt.buy.slippageCash, s)],
          [UI.fees.total, money(rt.buy.total, s)],
          [UI.fees.breakeven, money(rt.breakEven, s)]
        ]));
      } else {
        var leg = C.tradeLeg({
          price: num(form, "price"),
          qty: num(form, "qty"),
          slippage: pct(form, "slippage"),
          feeRate: side === "sell" ? exitFee : entryFee,
          side: side
        });
        nodes.push(table([
          [UI.fees.exec, money(leg.exec, s)],
          [UI.fees.notional, money(leg.notional, s)],
          [UI.fees.fee, money(leg.fee, s)],
          [UI.fees.slip, money(leg.slippageCash, s)],
          [UI.fees.total, money(leg.total, s)],
          [UI.fees.effective, money(leg.effective, s)]
        ]));
      }
      show(out, nodes);
    },
    fire: function () {
      var current = num(form, "currentAge");
      var retire = num(form, "retireAge");
      var r = C.fire({
        annualExpenses: num(form, "expenses"),
        withdrawalRate: pct(form, "withdrawal"),
        portfolio: num(form, "portfolio"),
        monthlyPmt: num(form, "pmt"),
        annualReturn: pct(form, "rate"),
        dividendYield: pct(form, "dividend"),
        yearsUntilRetirement: Math.max(0, retire - current)
      });
      var s = sym(form);
      var whole = Math.floor(r.years + 1e-9);
      var monthsLeft = Math.round((r.years - whole) * 12);
      if (monthsLeft === 12) { whole += 1; monthsLeft = 0; }
      var years = r.covered ? UI.fire.covered : (r.years === Infinity ? UI.fire.never : (r.years > 80 ? UI.fire.long : UI.fire.ym.replace("{y}", String(whole)).replace("{m}", String(monthsLeft))));
      show(out, [table([
        [UI.fire.fi, money(r.fiNumber, s)],
        [UI.fire.gap, money(r.gap, s)],
        [UI.fire.years, years],
        [UI.fire.dividend, money(r.dividendIncome, s)],
        [UI.fire.coast, money(r.coastNumber, s)]
      ])]);
    },
    inflation: function () {
      var years = num(form, "years");
      var amount = num(form, "amount");
      var nominal = val(form, "nominal").trim() === "" ? "" : pct(form, "nominal");
      var a = C.inflationPath({ amount: amount, years: years, inflationRate: pct(form, "infA"), nominalReturn: nominal });
      var b = C.inflationPath({ amount: amount, years: years, inflationRate: pct(form, "infB"), nominalReturn: nominal });
      var s = sym(form);
      var nameA = val(form, "nameA") || "A";
      var nameB = val(form, "nameB") || "B";
      show(out, [
        table([
          [nameA + " — " + UI.inflation.future, money(a.futureCost, s)],
          [nameA + " — " + UI.inflation.power, money(a.purchasingPower, s)],
          [nameB + " — " + UI.inflation.future, money(b.futureCost, s)],
          [nameB + " — " + UI.inflation.power, money(b.purchasingPower, s)],
          [UI.inflation.real, a.realReturn == null ? "—" : percent(a.realReturn) + " / " + percent(b.realReturn)]
        ]),
        grid(
          [UI.inflation.year, nameA + " " + UI.inflation.cost, nameA + " " + UI.inflation.left, nameB + " " + UI.inflation.cost],
          a.rows.map(function (row, i) {
            return [String(row.year), money(row.cost, s), money(row.power, s), money(b.rows[i].cost, s)];
          })
        )
      ]);
    },
    position: function () {
      var target = val(form, "target").trim();
      var r = C.positionSize({
        account: num(form, "account"),
        riskPct: pct(form, "risk"),
        entry: num(form, "entry"),
        stop: num(form, "stop"),
        target: target === "" ? "" : target,
        side: val(form, "side")
      });
      var s = sym(form);
      show(out, [table([
        [UI.position.risk, money(r.riskCash, s)],
        [UI.position.units, plain(r.units, 8)],
        [UI.position.value, money(r.positionValue, s)],
        [UI.position.reward, r.reward == null ? "—" : money(r.reward, s)],
        [UI.position.r, r.rMultiple == null ? "—" : plain(r.rMultiple, 2)],
        [UI.position.pct, percent(r.accountPct)]
      ])]);
    },
    spread: function () {
      var r = C.currencySpread({
        amount: num(form, "amount"),
        interbank: num(form, "interbank"),
        bank: num(form, "bank"),
        altFee: pct(form, "alt")
      });
      show(out, [table([
        [UI.spread.bank, plain(r.atBank, 2) + " " + val(form, "to")],
        [UI.spread.mid, plain(r.atMid, 2) + " " + val(form, "to")],
        [UI.spread.loss, plain(r.loss, 2)],
        [UI.spread.percent, percent(r.percent)],
        [UI.spread.bps, plain(r.bps, 1)],
        [UI.spread.alt, plain(r.alt, 2)],
        [UI.spread.savings, plain(r.savings, 2)]
      ])]);
    },
    password: function () {
      var mode = val(form, "mode");
      var fast = 1e10;
      var slow = 1e4;
      if (mode === "phrase") {
        var list = (window.WORDLISTS && window.WORDLISTS[lang]) || (window.WORDLISTS && window.WORDLISTS.en);
        var picked = C.pickWords(list, num(form, "words"));
        var phrase = picked.words.join(val(form, "sep") || "-");
        var box = document.createElement("p");
        box.className = "pass";
        box.id = "secret";
        box.textContent = phrase;
        show(out, [box, table([
          [UI.password.bits, plain(picked.bits, 1)],
          [UI.password.words, String(list.length)],
          [UI.password.fast, duration(C.crackLog10Seconds(picked.bits, fast))],
          [UI.password.slow, duration(C.crackLog10Seconds(picked.bits, slow))]
        ])]);
      } else {
        var charset = C.buildCharset({
          lower: on(form, "lower"),
          upper: on(form, "upper"),
          digit: on(form, "digit"),
          symbol: on(form, "symbol"),
          ambiguous: on(form, "ambiguous")
        });
        var secret = C.randomFromCharset(charset, num(form, "length"));
        var bits = C.entropyBits(secret.length, charset.length);
        var box2 = document.createElement("p");
        box2.className = "pass";
        box2.id = "secret";
        box2.textContent = secret;
        show(out, [box2, table([
          [UI.password.bits, plain(bits, 1)],
          [UI.password.charset, String(charset.length)],
          [UI.password.fast, duration(C.crackLog10Seconds(bits, fast))],
          [UI.password.slow, duration(C.crackLog10Seconds(bits, slow))]
        ])]);
      }
    },
    strength: function () {
      var r = C.passwordStrength(val(form, "password"), num(form, "guesses"));
      var warnings = r.warnings.length ? r.warnings.map(function (w) { return UI.warn[w]; }).join(" ") : UI.strength.clean;
      show(out, [
        p(UI.strength.note, "fine"),
        table([
          [UI.strength.bits, plain(r.bits, 1)],
          [UI.strength.time, duration(r.log10)],
          ["", warnings]
        ])
      ]);
    },
    ip: function () {
      show(out, [p(UI.ip.waiting)]);
      var rtcPromise = new Promise(function (resolve) {
        var ips = [];
        var mdns = false;
        try {
          var pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
          pc.createDataChannel("leak");
          pc.onicecandidate = function (e) {
            if (!e.candidate || !e.candidate.candidate) return;
            var parts = e.candidate.candidate.split(" ");
            var ip = parts[4] || "";
            if (/\.local$/i.test(ip)) mdns = true;
            else if (ip && ips.indexOf(ip) === -1) ips.push(ip);
          };
          pc.createOffer().then(function (o) { return pc.setLocalDescription(o); }).catch(function () {});
          setTimeout(function () { try { pc.close(); } catch (e) {} resolve({ ips: ips, mdns: mdns }); }, 2500);
        } catch (e) {
          resolve({ ips: [], mdns: false });
        }
      });
      var ipPromise = fetch("https://api.ipify.org?format=json").then(function (r) { return r.json(); });
      var geoPromise = fetch("https://ipwho.is/").then(function (r) { return r.json(); }).catch(function () { return null; });
      Promise.all([ipPromise, geoPromise, rtcPromise]).then(function (all) {
        var ip = all[0] && all[0].ip ? all[0].ip : "";
        var geo = all[1] && all[1].success !== false ? all[1] : null;
        var rtc = all[2];
        var cmp = C.compareIps(ip, rtc.ips);
        var place = "—";
        var isp = "—";
        if (geo) {
          place = [geo.city, geo.region, geo.country].filter(Boolean).join(", ") || "—";
          isp = (geo.connection && (geo.connection.isp || geo.connection.org)) || "—";
        }
        var nodes = [table([
          [UI.ip.public, ip || "—"],
          [UI.ip.place, place],
          [UI.ip.isp, isp],
          [UI.ip.rtc, rtc.ips.length ? rtc.ips.join(", ") : "—"]
        ]), p(UI.ip.dns, "fine")];
        if (cmp.leaks.length) nodes.push(p(UI.ip.leak + ": " + cmp.leaks.join(", "), "err"));
        else nodes.push(p(UI.ip.clean));
        if (rtc.mdns) nodes.push(p(UI.ip.mdns, "fine"));
        show(out, nodes);
      }).catch(function () { fail(out, { code: "network" }); });
    },
    email: function () {
      var list = (window.WORDLISTS && window.WORDLISTS.en) || ["alpha", "bravo"];
      var words = C.pickWords(list, 2).words;
      var n = C.randomUint(0, 9999).toString().padStart(4, "0");
      var domain = (val(form, "domain") || "example.com").replace(/^@/, "").trim();
      var alias = words.join(".") + n + "@" + domain;
      var nodes = [p(alias, "pass"), p(UI.email.note, "fine")];
      var check = val(form, "check").trim();
      if (check) nodes.push(p(C.isEmailFormat(check) ? UI.email.valid : UI.email.invalid));
      var base = val(form, "base").trim();
      var tag = val(form, "tag").trim();
      if (base && tag) {
        try { nodes.push(p(UI.email.plus + ": " + C.plusAddress(base, tag))); }
        catch (e) { nodes.push(p(UI.errors.email, "err")); }
      }
      var hold = document.createElement("p");
      hold.id = "secret";
      hold.className = "pass";
      hold.textContent = alias;
      nodes[0] = hold;
      show(out, nodes);
    },
    exif: function () {
      var file = form.elements.file.files[0];
      if (!file) throw new C.CalcError("file");
      var reader = new FileReader();
      reader.onload = function () {
        var bytes = new Uint8Array(reader.result);
        var nodes = [];
        var name = file.name.replace(/\.[^.]+$/, "");
        try {
          if (bytes[0] === 0xFF && bytes[1] === 0xD8) {
            var meta = C.parseJpegMetadata(bytes);
            var ex = meta.exif || {};
            var gps = ex.lat != null ? plain(ex.lat, 5) + ", " + plain(ex.lon, 5) : "—";
            nodes.push(table([
              [UI.exif.make, ex.make || "—"],
              [UI.exif.model, ex.model || "—"],
              [UI.exif.date, ex.date || "—"],
              [UI.exif.software, ex.software || "—"],
              [UI.exif.gps, gps],
              [UI.exif.segments, meta.segments.join(", ") || "—"]
            ]));
            var stripped = C.stripJpegMetadata(bytes);
            nodes.push(p(UI.exif.stripped));
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "go";
            btn.textContent = UI.download;
            btn.addEventListener("click", function () {
              download(name + "-stripped.jpg", new Blob([stripped.bytes], { type: "image/jpeg" }));
            });
            nodes.push(btn);
          } else if (bytes[0] === 137 && bytes[1] === 80) {
            var png = C.stripPngMetadata(bytes);
            nodes.push(table([
              [UI.exif.segments, png.texts.map(function (t) { return t.key + ": " + t.value; }).join(" · ") || "—"],
              [UI.exif.removed, png.removed.join(", ") || "—"]
            ]));
            var btnP = document.createElement("button");
            btnP.type = "button";
            btnP.className = "go";
            btnP.textContent = UI.download;
            btnP.addEventListener("click", function () {
              download(name + "-stripped.png", new Blob([png.bytes], { type: "image/png" }));
            });
            nodes.push(btnP);
          } else nodes.push(p(UI.exif.none));
        } catch (err) {
          fail(out, err);
          return;
        }
        nodes.push(p(UI.exif.flat, "fine"));
        show(out, nodes);
      };
      reader.readAsArrayBuffer(file);
    },
    aes: function () {
      var mode = val(form, "mode");
      var password = val(form, "password");
      var text = val(form, "text");
      show(out, [p(UI.working)]);
      var job = mode === "decrypt" ? C.aesDecrypt(text, password) : C.aesEncrypt(text, password);
      job.then(function (value) {
        var box = document.createElement("textarea");
        box.id = "secret";
        box.readOnly = true;
        box.value = value;
        show(out, [p(UI.aes.note, "fine"), box]);
      }).catch(function (err) { fail(out, err); });
    },
    hash: function () {
      /* buttons call runHash */
    },
    schengen: function () {
      var trips = [];
      form.querySelectorAll("[data-row]").forEach(function (row) {
        var start = row.querySelector('[name="start"]').value;
        var end = row.querySelector('[name="end"]').value;
        if (start && end) trips.push({ start: start, end: end });
      });
      if (!trips.length) throw new C.CalcError("date");
      if (val(form, "mode") === "year") {
        var y = C.daysInYear(trips, val(form, "year"));
        show(out, [table([
          [UI.schengen.yearDays, String(y.days)],
          ["183", y.reached ? UI.schengen.reached : UI.schengen.under]
        ]), p(UI.schengen.advice, "fine")]);
      } else {
        var asof = val(form, "asof");
        var s = C.schengen(trips, asof);
        show(out, [table([
          [UI.schengen.used, String(s.used)],
          [UI.schengen.left, String(s.remaining)],
          [UI.schengen.total, String(s.totalDays)],
          [UI.schengen.first, s.firstOver || "—"]
        ]), p(s.firstOver ? UI.schengen.over : UI.schengen.ok), p(UI.schengen.advice, "fine")]);
      }
    },
    col: function () {
      var data = window.COL_DATA;
      var a = data.cities.filter(function (c) { return c.id === val(form, "cityA"); })[0];
      var b = data.cities.filter(function (c) { return c.id === val(form, "cityB"); })[0];
      var r = C.salaryEquivalent(num(form, "salary"), a.index, b.index);
      var s = sym(form);
      show(out, [table([
        [UI.col.indexA, a.index + " — " + (lang === "ru" ? a.ru : a.en)],
        [UI.col.indexB, b.index + " — " + (lang === "ru" ? b.ru : b.en)],
        [UI.col.equiv, money(r.equivalent, s)],
        [UI.col.powerA, plain(r.powerA, 2)],
        [UI.col.powerB, plain(r.powerB, 2)]
      ]), p(UI.col.note, "fine")]);
    },
    meeting: function () {
      var zones = [];
      form.querySelectorAll('input[name="zones"]:checked').forEach(function (el) { zones.push(el.value); });
      var home = val(form, "zone");
      if (zones.indexOf(home) === -1) zones.unshift(home);
      var utc = C.zonedTimeToUtc(val(form, "date"), val(form, "time"), home);
      var rows = zones.map(function (tz) {
        var info = C.hourInZone(utc, tz);
        var label = tz;
        return [label, info.weekday + " " + String(info.hour).padStart(2, "0") + ":" + info.minute, info.hour >= 9 && info.hour < 17 ? UI.meeting.inside : UI.meeting.outside];
      });
      var scores = C.meetingHours(val(form, "date"), zones);
      scores.sort(function (a, b) { return b.ok - a.ok || a.utcHour - b.utcHour; });
      var best = scores.filter(function (row) { return row.ok === scores[0].ok; }).slice(0, 4).map(function (row) {
        return String(row.utcHour).padStart(2, "0") + ":00 UTC";
      }).join(", ");
      show(out, [
        grid([UI.meeting.zone, UI.meeting.time, UI.meeting.hours], rows),
        p(UI.meeting.best + ": " + best)
      ]);
    },
    esim: function () {
      var r = C.esimCost({
        days: num(form, "days"),
        roamDay: num(form, "roam"),
        packagePrice: num(form, "package"),
        includedGb: num(form, "included"),
        useGb: num(form, "use"),
        extraGb: num(form, "extra")
      });
      var s = sym(form);
      var verdict = r.cheaper === "esim" ? UI.esim.esimWins : r.cheaper === "roaming" ? UI.esim.roamWins : UI.esim.tie;
      show(out, [table([
        [UI.esim.roaming, money(r.roaming, s)],
        [UI.esim.esim, money(r.esim, s)],
        [UI.esim.diff, money(r.difference, s)]
      ]), p(verdict), p(UI.esim.prices, "fine")]);
    },
    freelance: function () {
      var r = C.freelanceRate({
        netIncome: num(form, "net"),
        taxRate: pct(form, "tax"),
        annualCosts: num(form, "costs"),
        vacationWeeks: num(form, "vacation"),
        sickDays: num(form, "sick"),
        holidays: num(form, "holidays"),
        hoursPerWeek: num(form, "hours"),
        utilization: pct(form, "util")
      });
      var s = sym(form);
      show(out, [table([
        [UI.freelance.gross, money(r.gross, s)],
        [UI.freelance.days, plain(r.workDays, 1)],
        [UI.freelance.hours, plain(r.billableHours, 1)],
        [UI.freelance.hourly, money(r.hourly, s)],
        [UI.freelance.daily, money(r.daily, s)],
        [UI.freelance.monthly, money(r.monthly, s)]
      ])]);
    },
    llm: function () {
      var r = C.llmCost({
        inputTokens: num(form, "inTok"),
        outputTokens: num(form, "outTok"),
        inputPrice: num(form, "inPrice"),
        outputPrice: num(form, "outPrice"),
        requestsPerDay: num(form, "perDay")
      });
      show(out, [table([
        [UI.llm.per, money(r.perRequest, "$")],
        [UI.llm.day, money(r.perDay, "$")],
        [UI.llm.month, money(r.perMonth, "$")]
      ]), p(UI.llm.note, "fine")]);
    },
    seo: function () {
      var text = val(form, "text");
      var r = C.analyzeText(text, val(form, "keyword"));
      var stops = lang === "ru"
        ? ["и", "в", "во", "не", "что", "он", "на", "я", "с", "со", "как", "а", "то", "все", "она", "так", "его", "но", "да", "ты", "к", "у", "же", "вы", "за", "бы", "по", "только", "ее", "мне", "было", "вот", "от", "меня", "еще", "нет", "о", "из", "ему", "теперь", "когда", "даже", "ну", "вдруг", "ли", "если", "уже", "или", "ни", "быть", "был", "него", "до", "вас", "нибудь", "опять", "уж", "вам", "ведь", "там", "потом", "себя", "ничего", "ей", "может", "они", "тут", "где", "есть", "надо", "ней", "для", "мы", "тебя", "их", "чем", "была", "сам", "чтоб", "без", "будто", "человек", "чего", "раз", "тоже", "себе", "под", "жизнь", "будет", "ж", "тогда", "кто", "этот", "того", "потому", "этого", "какой", "совсем", "ним", "здесь", "этом", "один", "почти", "мой", "тем", "чтобы", "нее", "сейчас", "были", "куда", "зачем", "сказать", "всех", "никогда", "сегодня", "можно", "при", "наконец", "два", "об", "другой", "хоть", "после", "над", "больше", "тот", "через", "эти", "нас", "про", "всего", "них", "какая", "много", "разве", "три", "эту", "моя", "впрочем", "хорошо", "свою", "этой", "перед", "иногда", "лучше", "чуть", "том", "нельзя", "такой", "им", "более", "всегда", "конечно", "всю", "между"]
        : ["the", "and", "for", "that", "with", "this", "from", "your", "have", "are", "was", "were", "will", "you", "not", "but", "can", "all", "any", "its", "our", "out", "about", "into", "than", "then", "them", "they", "their", "what", "when", "who", "how", "has", "had", "been", "also", "just", "more", "most", "some", "such", "only", "over", "after", "before", "because", "while", "where", "which"];
      var top = C.topWords(text, stops, 8).map(function (w) { return w.word + " (" + w.count + ")"; }).join(", ");
      show(out, [table([
        [UI.seo.words, String(r.words)],
        [UI.seo.chars, String(r.chars)],
        [UI.seo.charsNo, String(r.charsNoSpace)],
        [UI.seo.sentences, String(r.sentences)],
        [UI.seo.read, plain(r.readingMin, 1) + " " + UI.seo.minutes],
        [UI.seo.speak, plain(r.speakingMin, 1) + " " + UI.seo.minutes],
        [UI.seo.count, String(r.keywordCount)],
        [UI.seo.density, percent(r.density)],
        [UI.seo.top, top || "—"]
      ])]);
    },
    meta: function () {
      var title = val(form, "title");
      var description = val(form, "description");
      var html = C.metaTags({
        title: title,
        description: description,
        url: val(form, "url"),
        site: val(form, "site"),
        image: val(form, "image"),
        type: val(form, "type") || "website",
        twitter: val(form, "twitter")
      });
      var notes = [];
      if (Array.from(title).length > 60) notes.push(UI.meta.titleWarn);
      if (Array.from(description).length > 160) notes.push(UI.meta.descWarn);
      show(out, [
        table([
          [UI.meta.title, String(Array.from(title).length)],
          [UI.meta.desc, String(Array.from(description).length)]
        ]),
        notes.length ? p(notes.join(" ")) : p(""),
        pre(html, "secret")
      ]);
    },
    speed: function () {
      var r = C.speedRevenue({
        sessions: num(form, "sessions"),
        cvr: pct(form, "cvr"),
        aov: num(form, "aov"),
        currentSec: num(form, "current"),
        fasterSec: num(form, "faster"),
        lossPerSec: pct(form, "loss")
      });
      var s = sym(form);
      show(out, [table([
        [UI.speed.extra, plain(r.extra, 2)],
        [UI.speed.now, money(r.revenueNow, s)],
        [UI.speed.fast, money(r.revenueFast, s)],
        [UI.speed.lost, money(r.lost, s)],
        [UI.speed.year, money(r.lost * 12, s)]
      ]), p(UI.speed.assumption, "fine")]);
    },
    robots: function () {
      var disallow = val(form, "disallow").split(/\n+/);
      var allow = val(form, "allow").split(/\n+/);
      var urls = val(form, "urls").split(/\n+/).map(function (s) { return s.trim(); }).filter(Boolean);
      var robots = C.robotsTxt({ site: val(form, "site"), disallow: disallow, allow: allow, sitemaps: urls.length ? [] : undefined });
      if (urls.length && val(form, "site")) {
        var site = val(form, "site").replace(/\/$/, "");
        if (!/sitemap\.xml$/i.test(urls[0] || "")) {
          robots = C.robotsTxt({ site: val(form, "site"), disallow: disallow, allow: allow, sitemaps: [site + "/sitemap.xml"] });
        }
      }
      var map = C.sitemapXml(urls);
      show(out, [p(UI.robots.robots), pre(robots, "robots-out"), p(UI.robots.sitemap), pre(map, "sitemap-out")]);
    },
    image: function () {
      var file = form.elements.file.files[0];
      if (!file) throw new C.CalcError("file");
      var mime = val(form, "format");
      var quality = Math.min(1, Math.max(0.05, num(form, "quality") / 100));
      createImageBitmap(file).then(function (bmp) {
        var maxW = Math.max(1, num(form, "maxW"));
        var maxH = Math.max(1, num(form, "maxH"));
        var scale = Math.min(1, maxW / bmp.width, maxH / bmp.height);
        var w = Math.max(1, Math.round(bmp.width * scale));
        var h = Math.max(1, Math.round(bmp.height * scale));
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(bmp, 0, 0, w, h);
        canvas.toBlob(function (blob) {
          if (!blob) { fail(out, { code: "image" }); return; }
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "go";
          btn.textContent = UI.download;
          btn.addEventListener("click", function () {
            var ext = mime.indexOf("png") >= 0 ? "png" : mime.indexOf("webp") >= 0 ? "webp" : mime.indexOf("avif") >= 0 ? "avif" : "jpg";
            download("image." + ext, blob);
          });
          show(out, [canvas, table([
            [UI.image.before, String(file.size)],
            [UI.image.after, String(blob.size)],
            [UI.image.saved, String(file.size - blob.size)],
            [UI.image.dims, w + " × " + h]
          ]), btn]);
        }, mime, quality);
      }).catch(function () { fail(out, { code: "image" }); });
    },
    utm: function () {
      var link = C.buildUtm({
        url: val(form, "url"),
        source: val(form, "source"),
        medium: val(form, "medium"),
        campaign: val(form, "campaign"),
        term: val(form, "term"),
        content: val(form, "content")
      });
      var box = document.createElement("p");
      box.id = "secret";
      box.className = "pass";
      box.textContent = link;
      var canvas = document.createElement("canvas");
      canvas.className = "qr";
      drawQr(canvas, link, null);
      var logo = form.elements.logo && form.elements.logo.files[0];
      if (logo) {
        var img = new Image();
        img.onload = function () { drawQr(canvas, link, img); };
        img.src = URL.createObjectURL(logo);
      }
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ghost";
      btn.textContent = UI.download;
      btn.addEventListener("click", function () {
        canvas.toBlob(function (blob) { download("qr.png", blob); }, "image/png");
      });
      show(out, [p(UI.utm.link), box, canvas, btn]);
    },
    format: function () {
      var mode = val(form, "mode");
      var text = val(form, "text");
      var formatted = mode === "json" ? C.formatJson(text, num(form, "indent")) : mode === "csv" ? C.formatCsv(text) : C.formatSql(text);
      show(out, [pre(formatted, "secret")]);
    },
    roas: function () {
      var r = C.adReturn({
        spend: num(form, "spend"),
        revenue: num(form, "revenue"),
        margin: pct(form, "margin"),
        other: num(form, "other")
      });
      var s = sym(form);
      show(out, [table([
        [UI.roas.roas, plain(r.roas, 2)],
        [UI.roas.gross, money(r.gross, s)],
        [UI.roas.profit, money(r.profit, s)],
        [UI.roas.romi, percent(r.romi)],
        [UI.roas.be, plain(r.breakEvenRoas, 2)]
      ])]);
    },
    contrast: function () {
      var ratio = C.contrastRatio(val(form, "fg"), val(form, "bg"));
      var w = C.wcag(ratio);
      function mark(ok) { return ok ? UI.pass : UI.fail; }
      var sample = document.createElement("div");
      sample.className = "sample";
      sample.style.color = val(form, "fg");
      sample.style.background = val(form, "bg");
      sample.textContent = lang === "ru" ? "Образец текста 16px" : "Sample text 16px";
      var colors = C.palette(val(form, "bg"));
      var row = document.createElement("p");
      colors.forEach(function (hex) {
        var sw = document.createElement("span");
        sw.className = "swatch";
        sw.style.background = hex;
        sw.title = hex;
        row.append(sw, document.createTextNode(hex + " "));
      });
      show(out, [sample, table([
        [UI.contrast.ratio, plain(ratio, 2) + ":1"],
        [UI.contrast.aaN, mark(w.aaNormal)],
        [UI.contrast.aaL, mark(w.aaLarge)],
        [UI.contrast.aaaN, mark(w.aaaNormal)],
        [UI.contrast.aaaL, mark(w.aaaLarge)],
        [UI.contrast.ui, mark(w.ui)]
      ]), p(UI.contrast.palette), row]);
    },
    px: function () {
      var r = C.convertPx({
        px: num(form, "px"),
        root: num(form, "root"),
        parent: num(form, "parent"),
        viewport: num(form, "viewport")
      });
      show(out, [table([
        [UI.px.rem, plain(r.rem, 4)],
        [UI.px.em, plain(r.em, 4)],
        [UI.px.vw, plain(r.vw, 4)]
      ])]);
    },
    policy: function () {
      var text = C.buildPolicy({
        site: val(form, "site"),
        url: val(form, "url"),
        email: val(form, "email"),
        country: val(form, "country"),
        date: val(form, "date"),
        lang: lang,
        analytics: on(form, "analytics"),
        cookies: on(form, "cookies"),
        affiliates: on(form, "affiliates"),
        accounts: on(form, "accounts"),
        contactForm: on(form, "contact"),
        ipTool: on(form, "ipTool")
      });
      show(out, [p(UI.policy.ready, "fine"), pre(text, "secret")]);
    },
    margin: function () {
      var mode = val(form, "mode");
      var s = sym(form);
      if (mode === "percent") {
        var op = val(form, "op");
        if (op === "of") show(out, [table([[UI.margin.of, money(C.percentOf(pct(form, "a"), num(form, "b")), s)]])]);
        else if (op === "change") show(out, [table([[UI.margin.change, percent(C.percentChange(num(form, "a"), num(form, "b")))]])]);
        else show(out, [table([[UI.margin.of, percent(C.whatPercent(num(form, "a"), num(form, "b")))]])]);
      } else if (mode === "margin") {
        if (val(form, "marginOp") === "price") {
          show(out, [table([[UI.margin.price, money(C.priceFromMargin(num(form, "cost"), pct(form, "rate")), s)]])]);
        } else {
          var mm = C.marginMarkup(num(form, "cost"), num(form, "price"));
          show(out, [table([[UI.margin.margin, percent(mm.margin)], [UI.margin.markup, percent(mm.markup)], [UI.margin.profit, money(mm.profit, s)]])]);
        }
      } else if (val(form, "markupOp") === "price") {
        show(out, [table([[UI.margin.price, money(C.priceFromMarkup(num(form, "cost"), pct(form, "rate")), s)]])]);
      } else {
        var mm2 = C.marginMarkup(num(form, "cost"), num(form, "price"));
        show(out, [table([[UI.margin.markup, percent(mm2.markup)], [UI.margin.margin, percent(mm2.margin)], [UI.margin.profit, money(mm2.profit, s)]])]);
      }
    },
    mortgage: function () {
      var price = num(form, "price");
      var down = num(form, "down");
      if (down > price || price < 0 || down < 0) throw new C.CalcError("number");
      var principal = price - down;
      var months = Math.round(num(form, "years") * 12);
      var r = C.amortizationSchedule(principal, pct(form, "rate"), months);
      var s = sym(form);
      var tax = num(form, "tax") / 12;
      var ins = num(form, "insurance") / 12;
      var hoa = num(form, "hoa");
      var monthly = r.payment + tax + ins + hoa;
      show(out, [
        table([
          [UI.mortgage.loan, money(principal, s)],
          [UI.mortgage.pi, money(r.payment, s)],
          [UI.mortgage.tax, money(tax, s)],
          [UI.mortgage.ins, money(ins, s)],
          [UI.mortgage.hoa, money(hoa, s)],
          [UI.mortgage.total, money(monthly, s)],
          [UI.mortgage.interest, money(r.totalInterest, s)],
          [UI.mortgage.paid, money(r.payment * r.months, s)],
          [UI.mortgage.piti, money(monthly * r.months, s)]
        ]),
        grid(
          [UI.mortgage.year, UI.mortgage.yInt, UI.mortgage.yPrin, UI.mortgage.bal],
          r.years.map(function (row) {
            return [String(row.year), money(row.interest, s), money(row.principal, s), money(row.balance, s)];
          })
        )
      ]);
    },
    loan: function () {
      var months = Math.round(num(form, "years") * 12 + num(form, "months"));
      var r = C.loanWithExtra(num(form, "amount"), pct(form, "rate"), months, num(form, "extra"));
      var s = sym(form);
      show(out, [table([
        [UI.loan.payment, money(r.payment, s)],
        [UI.loan.months, String(r.months)],
        [UI.loan.interest, money(r.totalInterest, s)],
        [UI.loan.paid, money(r.totalPaid, s)],
        [UI.loan.payoff, String(r.payoffMonths)],
        [UI.loan.saved, money(r.interestSaved, s)]
      ])]);
    },
    simple: function () {
      var r = C.simpleInterest(num(form, "principal"), pct(form, "rate"), num(form, "time"), val(form, "unit"), val(form, "basis"));
      var s = sym(form);
      show(out, [table([
        [UI.simple.interest, money(r.interest, s)],
        [UI.simple.amount, money(r.amount, s)],
        [UI.simple.years, plain(r.years, 6)]
      ])]);
    },
    bmi: function () {
      var r = C.bmi({ units: val(form, "units"), weight: num(form, "weight"), height: num(form, "height") });
      var range = val(form, "units") === "imperial"
        ? plain(r.minLb, 1) + "–" + plain(r.maxLb, 1) + " lb"
        : plain(r.minKg, 1) + "–" + plain(r.maxKg, 1) + " kg";
      show(out, [table([
        [UI.bmi.bmi, plain(r.bmi, 1)],
        [UI.bmi.cat, UI.bmi[r.category]],
        [UI.bmi.range, range]
      ])]);
    },
    calorie: function () {
      var r = C.calories({
        sex: val(form, "sex"),
        units: val(form, "units"),
        weight: num(form, "weight"),
        height: num(form, "height"),
        age: num(form, "age"),
        activity: val(form, "activity")
      });
      show(out, [table([
        [UI.calorie.bmr, plain(r.bmr, 0) + " kcal"],
        [UI.calorie.factor, plain(r.factor, 3)],
        [UI.calorie.tdee, plain(r.tdee, 0) + " kcal"],
        [UI.calorie.lose, plain(r.lose, 0) + " kcal"],
        [UI.calorie.gain, plain(r.gain, 0) + " kcal"]
      ])]);
    },
    bodyfat: function () {
      var r = C.bodyFat({
        sex: val(form, "sex"),
        units: val(form, "units"),
        height: num(form, "height"),
        neck: num(form, "neck"),
        waist: num(form, "waist"),
        hip: num(form, "hip")
      });
      show(out, [table([[UI.bodyfat.fat, plain(r.fat, 1) + "%"]])]);
    },
    pace: function () {
      var r = C.pace({
        mode: val(form, "mode"),
        distance: num(form, "distance"),
        distanceUnit: val(form, "distanceUnit"),
        hours: num(form, "hours"),
        minutes: num(form, "minutes"),
        seconds: num(form, "seconds"),
        paceMin: num(form, "paceMin"),
        paceSec: num(form, "paceSec")
      });
      show(out, [table([
        [UI.pace.time, clockText(fromSeconds(r.seconds))],
        [UI.pace.distance, plain(r.km, 3) + " km · " + plain(r.miles, 3) + " mi"],
        [UI.pace.perKm, paceText(r.perKm)],
        [UI.pace.perMi, paceText(r.perMile)],
        [UI.pace.kmh, plain(r.kmh, 2)],
        [UI.pace.mph, plain(r.mph, 2)]
      ])]);
    },
    percentage: function () {
      var op = val(form, "op");
      if (op === "of") show(out, [table([[UI.percentage.of, plain(C.percentOf(pct(form, "a"), num(form, "b")), 6)]])]);
      else if (op === "change") show(out, [table([[UI.percentage.change, percent(C.percentChange(num(form, "a"), num(form, "b")))]])]);
      else show(out, [table([[UI.percentage.what, percent(C.whatPercent(num(form, "a"), num(form, "b")))]])]);
    },
    fraction: function () {
      var r = C.fraction(num(form, "a"), num(form, "b"), num(form, "c"), num(form, "d"), val(form, "op"));
      var mixed = r.rem === 0 ? String(r.whole) : (r.whole === 0 ? r.n + "/" + r.d : r.whole + " " + r.rem + "/" + r.d);
      show(out, [table([
        [UI.fraction.improper, r.n + "/" + r.d],
        [UI.fraction.mixed, mixed],
        [UI.fraction.decimal, plain(r.value, 8)]
      ])]);
    },
    stats: function () {
      var values = val(form, "values").split(/[\s,;]+/).filter(Boolean);
      var r = C.stats(values);
      var rows = [
        [UI.stats.n, String(r.n)],
        [UI.stats.sum, plain(r.sum, 6)],
        [UI.stats.min, plain(r.min, 6)],
        [UI.stats.max, plain(r.max, 6)],
        [UI.stats.mean, plain(r.mean, 6)],
        [UI.stats.popSd, plain(r.popSd, 6)],
        [UI.stats.popVar, plain(r.popVar, 6)]
      ];
      if (r.sampleSd == null) rows.push([UI.stats.sampleSd, UI.stats.sampleNote]);
      else {
        rows.push([UI.stats.sampleSd, plain(r.sampleSd, 6)]);
        rows.push([UI.stats.sampleVar, plain(r.sampleVar, 6)]);
      }
      show(out, [table(rows)]);
    },
    triangle: function () {
      var mode = val(form, "mode");
      var r = C.triangle({ mode: mode, a: num(form, "a"), b: num(form, "b"), c: num(form, "c"), base: num(form, "base"), height: num(form, "height") });
      var rows = [[UI.triangle.area, plain(r.area, 6)]];
      if (r.perimeter != null) rows.push([UI.triangle.perimeter, plain(r.perimeter, 6)]);
      if (mode === "right") rows.push([UI.triangle.hyp, plain(r.c, 6)]);
      if (mode === "sides") {
        rows.push([UI.triangle.a, plain(r.a, 6)]);
        rows.push([UI.triangle.b, plain(r.b, 6)]);
        rows.push([UI.triangle.c, plain(r.c, 6)]);
      }
      show(out, [table(rows)]);
    },
    age: function () {
      var r = C.age(val(form, "birth"), val(form, "asof"));
      show(out, [table([
        [UI.age.age, ymdText(r.years, r.months, r.days)],
        [UI.age.total, String(r.totalDays)],
        [UI.age.next, r.next],
        [UI.age.until, String(r.daysUntil)]
      ])]);
    },
    datecalc: function () {
      if (val(form, "mode") === "add") {
        show(out, [table([[UI.datecalc.result, C.shiftDate(val(form, "from"), num(form, "years"), num(form, "months"), num(form, "days"))]])]);
        return;
      }
      var r = C.dateSpan(val(form, "start"), val(form, "end"));
      var sign = r.sign < 0 ? "−" : "";
      show(out, [table([
        [UI.datecalc.days, sign + String(r.days)],
        [UI.datecalc.inclusive, sign + String(r.inclusive)],
        [UI.datecalc.weeks, sign + plain(r.weeks, 4)],
        [UI.datecalc.span, ymdText(r.years, r.months, r.remDays)]
      ])]);
    },
    timecalc: function () {
      if (val(form, "mode") === "clock") {
        var span = C.clockBetween(num(form, "sh"), num(form, "sm"), num(form, "eh"), num(form, "em"));
        var parts = fromSeconds(span.minutes * 60);
        var label = clockText(parts);
        show(out, [table([[UI.timecalc.clock, label]]), span.nextDay ? p(UI.timecalc.next, "fine") : p("", "fine")]);
        return;
      }
      var r = C.addTime(
        { hours: num(form, "h1"), minutes: num(form, "m1"), seconds: num(form, "s1") },
        { hours: num(form, "h2"), minutes: num(form, "m2"), seconds: num(form, "s2") },
        val(form, "mode")
      );
      show(out, [table([[UI.timecalc.result, clockText(r)]])]);
    },
    gpa: function () {
      var rows = [];
      form.querySelectorAll("[data-row]").forEach(function (row) {
        rows.push({ grade: row.querySelector('[name="grade"]').value, credits: row.querySelector('[name="credits"]').value });
      });
      var r = C.gpa(rows);
      show(out, [table([
        [UI.gpa.gpa, plain(r.gpa, 3)],
        [UI.gpa.credits, plain(r.credits, 2)],
        [UI.gpa.points, plain(r.points, 2)]
      ])]);
    },
    grade: function () {
      var rows = [];
      form.querySelectorAll("[data-row]").forEach(function (row) {
        rows.push({
          earned: row.querySelector('[name="earned"]').value,
          possible: row.querySelector('[name="possible"]').value,
          weight: row.querySelector('[name="weight"]').value
        });
      });
      var r = C.gradeAverage(rows);
      show(out, [table([
        [UI.grade.percent, plain(r.percent, 2) + "%"],
        [UI.grade.letter, r.letter],
        [UI.grade.earned, plain(r.earned, 2)],
        [UI.grade.possible, plain(r.possible, 2)]
      ])]);
    },
    unit: function () {
      var value = C.convertUnit(num(form, "value"), val(form, "from"), val(form, "to"));
      show(out, [table([[UI.unit.result, plain(value, 8) + " " + val(form, "to")]])]);
    },
    dates: function () {
      var holidays = val(form, "holidays").split(/[\s,]+/).filter(Boolean);
      var between = C.businessDaysBetween(val(form, "start"), val(form, "end"), holidays);
      var landed = C.addBusinessDays(val(form, "addStart"), num(form, "addN"), holidays);
      show(out, [table([
        [UI.dates.calendar, String(between.calendar)],
        [UI.dates.business, String(between.business)],
        [UI.dates.weekends, String(between.weekendDays)],
        [UI.dates.holidays, String(between.holidays)],
        [UI.dates.landed, landed]
      ])]);
    }
  };

  function drawQr(canvas, text, logo) {
    if (typeof qrcode !== "function") throw new C.CalcError("qr");
    var qr = qrcode(0, "H");
    qr.addData(text);
    qr.make();
    var count = qr.getModuleCount();
    var cell = 8;
    var margin = 16;
    var size = count * cell + margin * 2;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#1c2420";
    for (var r = 0; r < count; r++) {
      for (var c = 0; c < count; c++) {
        if (qr.isDark(r, c)) ctx.fillRect(margin + c * cell, margin + r * cell, cell, cell);
      }
    }
    if (logo) {
      var logoSize = Math.round(size * 0.22);
      var x = (size - logoSize) / 2;
      var y = (size - logoSize) / 2;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(x - 6, y - 6, logoSize + 12, logoSize + 12);
      ctx.drawImage(logo, x, y, logoSize, logoSize);
    }
  }

  function run(action) {
    try {
      if (action && kind === "hash") return runHash(action);
      if (!handlers[kind]) return;
      handlers[kind]();
    } catch (err) {
      if (out) fail(out, err);
    }
  }

  function runHash(action) {
    if (action === "uuid") {
      var n = Math.max(1, Math.min(20, num(form, "count") || 1));
      var ids = [];
      for (var i = 0; i < n; i++) ids.push(crypto.randomUUID());
      show(out, [pre(ids.join("\n"), "secret")]);
      return;
    }
    if (action === "sha") {
      show(out, [p(UI.working)]);
      C.sha256Hex(val(form, "text")).then(function (hex) {
        show(out, [table([[UI.hash.digest, hex]])]);
        var box = document.createElement("p");
        box.id = "secret";
        box.className = "pass";
        box.textContent = hex;
        out.append(box);
      }).catch(function (err) { fail(out, err); });
      return;
    }
    if (action === "number") {
      show(out, [table([[UI.hash.number, String(C.randomUint(num(form, "min"), num(form, "max")))]])]);
      return;
    }
    if (action === "key") {
      var key = C.randomKey(num(form, "bits"));
      show(out, [table([[UI.hash.hex, key.hex], [UI.hash.b64, key.base64]])]);
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var action = e.submitter && e.submitter.getAttribute("data-action");
    run(action);
  });

  if (kind === "pomodoro") setupPomodoro(form, out);
  if (kind === "llm") setupLlm(form);
  if (kind === "col") setupCol(form);
  if (kind === "margin") setupMargin(form);
  if (kind === "pace" || kind === "triangle" || kind === "datecalc" || kind === "timecalc") setupShow(form);
  if (kind === "age") setupToday(form);

  if (form.getAttribute("data-autorun") === "1") run();

  function ymdText(y, m, d) {
    if (lang === "ru") return y + " лет, " + m + " мес., " + d + " дн.";
    return y + " years, " + m + " months, " + d + " days";
  }
  function fromSeconds(total) {
    var sign = total < 0 ? -1 : 1;
    var t = Math.abs(Math.round(total));
    var days = Math.floor(t / 86400);
    t -= days * 86400;
    var hours = Math.floor(t / 3600);
    t -= hours * 3600;
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;
    return { sign: sign, days: days, hours: hours, minutes: minutes, seconds: seconds };
  }
  function clockText(parts) {
    var body = String(parts.hours).padStart(2, "0") + ":" + String(parts.minutes).padStart(2, "0") + ":" + String(parts.seconds).padStart(2, "0");
    if (parts.days) body = parts.days + "d " + body;
    return (parts.sign < 0 ? "−" : "") + body;
  }
  function paceText(seconds) {
    var s = Math.round(seconds);
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + String(r).padStart(2, "0");
  }
  function setupShow(form) {
    function sync() {
      var mode = val(form, "mode");
      form.querySelectorAll("[data-show]").forEach(function (el) {
        el.hidden = el.getAttribute("data-show").split(/\s+/).indexOf(mode) === -1;
      });
    }
    form.elements.mode.addEventListener("change", function () { sync(); run(); });
    sync();
  }
  function setupToday(form) {
    var el = form.querySelector("[data-today]");
    if (!el || el.value) return;
    var now = new Date();
    el.value = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  }

  function setupLlm(form) {
    var data = window.LLM_PRICES;
    if (!data) return;
    var sel = form.elements.model;
    data.models.forEach(function (m) {
      var o = document.createElement("option");
      o.value = m.id;
      o.textContent = m.name;
      sel.appendChild(o);
    });
    function apply() {
      var m = data.models.filter(function (item) { return item.id === sel.value; })[0] || data.models[0];
      form.elements.inPrice.value = m.input;
      form.elements.outPrice.value = m.output;
    }
    sel.addEventListener("change", apply);
    apply();
    var note = form.querySelector("[data-price-note]");
    if (note) note.textContent = (lang === "ru" ? "Заглушки, не котировка. Дата в файле цен: " : "Placeholders, not a quote. Date in the price file: ") + data.updated;
  }

  function setupCol(form) {
    var data = window.COL_DATA;
    if (!data) return;
    ["cityA", "cityB"].forEach(function (name) {
      var sel = form.elements[name];
      data.cities.forEach(function (c) {
        var o = document.createElement("option");
        o.value = c.id;
        o.textContent = (lang === "ru" ? c.ru : c.en) + " (" + c.index + ")";
        sel.appendChild(o);
      });
    });
    form.elements.cityA.value = "limassol";
    form.elements.cityB.value = "lisbon";
  }

  function setupMargin(form) {
    function sync() {
      var mode = val(form, "mode");
      form.querySelectorAll("[data-show]").forEach(function (el) {
        el.hidden = el.getAttribute("data-show") !== mode;
      });
    }
    form.elements.mode.addEventListener("change", sync);
    sync();
  }

  function setupPomodoro(form, out) {
    var left = num(form, "focus") * 60;
    var running = false;
    var mode = "focus";
    var done = 0;
    var endAt = 0;
    var timer = null;
    var clock = form.querySelector("[data-clock]");
    var label = form.querySelector("[data-mode]");
    function render() {
      var s = Math.max(0, Math.ceil(left));
      var m = Math.floor(s / 60);
      var r = s % 60;
      clock.textContent = String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
      var name = mode === "focus" ? UI.pomodoro.focus : mode === "short" ? UI.pomodoro.short : UI.pomodoro.long;
      label.textContent = name;
      document.title = clock.textContent + " · " + name;
    }
    function beep() {
      try {
        var ctx = setupPomodoro.ctx || new (window.AudioContext || window.webkitAudioContext)();
        setupPomodoro.ctx = ctx;
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.frequency.value = 740;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.04, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        o.start();
        o.stop(ctx.currentTime + 0.26);
      } catch (e) { /* autoplay limits */ }
    }
    function next() {
      if (mode === "focus") {
        done += 1;
        mode = done % Math.max(1, num(form, "rounds")) === 0 ? "long" : "short";
      } else mode = "focus";
      var minutes = mode === "focus" ? num(form, "focus") : mode === "short" ? num(form, "short") : num(form, "long");
      left = minutes * 60;
      if (running) endAt = Date.now() + left * 1000;
      if (out) show(out, [p(UI.pomodoro.done + ": " + done)]);
      beep();
      render();
    }
    function tick() {
      if (running) {
        left = (endAt - Date.now()) / 1000;
        if (left <= 0) next();
      }
      render();
    }
    form.querySelector("[data-start]").addEventListener("click", function () {
      if (!running) {
        if (left <= 0) left = num(form, "focus") * 60;
        endAt = Date.now() + left * 1000;
        running = true;
        if (setupPomodoro.ctx && setupPomodoro.ctx.resume) setupPomodoro.ctx.resume();
      }
    });
    form.querySelector("[data-pause]").addEventListener("click", function () {
      if (running) {
        left = Math.max(0, (endAt - Date.now()) / 1000);
        running = false;
      }
      render();
    });
    form.querySelector("[data-reset]").addEventListener("click", function () {
      running = false;
      mode = "focus";
      done = 0;
      left = num(form, "focus") * 60;
      render();
      if (out) out.replaceChildren();
    });
    form.querySelector("[data-skip]").addEventListener("click", function () { next(); });
    ["focus", "short", "long"].forEach(function (name) {
      form.elements[name].addEventListener("change", function () {
        if (!running && ((mode === "focus" && name === "focus") || (mode === "short" && name === "short") || (mode === "long" && name === "long"))) {
          left = num(form, name) * 60;
          render();
        }
      });
    });
    render();
    timer = setInterval(tick, 250);
    window.addEventListener("pagehide", function () { clearInterval(timer); });
  }
})();
