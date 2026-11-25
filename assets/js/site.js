(function () {
  "use strict";
  var partners = window.AFFILIATES || {};
  document.querySelectorAll("[data-affiliate]").forEach(function (node) {
    if (node.hasAttribute("data-amazon-query")) return;
    var key = node.getAttribute("data-affiliate");
    var item = partners[key];
    if (!item || !item.url || item.url.charAt(0) === "#") {
      node.remove();
      return;
    }
    node.setAttribute("href", item.url);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "sponsored nofollow noopener");
  });
  document.querySelectorAll(".cta-btns").forEach(function (box) {
    if (box.querySelector("a")) return;
    var aside = box.closest("aside");
    if (aside) aside.remove();
    else box.remove();
  });

  var amazon = partners.amazon;
  document.querySelectorAll("[data-amazon-query]").forEach(function (node) {
    var query = node.getAttribute("data-amazon-query");
    if (!amazon || !query || typeof amazon.search !== "function") return;
    node.setAttribute("href", amazon.search(query));
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "sponsored nofollow noopener");
  });

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-copy");
      var el = document.getElementById(id);
      if (!el) return;
      var text = el.value != null && "value" in el ? el.value : el.textContent;
      function done() {
        var prev = btn.textContent;
        btn.textContent = btn.getAttribute("data-copied") || prev;
        setTimeout(function () { btn.textContent = prev; }, 1400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text); done(); });
      } else {
        fallback(text);
        done();
      }
    });
  });

  function fallback(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-999px";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    area.remove();
  }

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    function themeNow() {
      var set = document.documentElement.getAttribute("data-theme");
      if (set === "light" || set === "dark") return set;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function paintTheme() {
      var mode = themeNow();
      var next = mode === "dark" ? "light" : "dark";
      themeBtn.textContent = next === "dark" ? themeBtn.getAttribute("data-to-dark") : themeBtn.getAttribute("data-to-light");
      themeBtn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    }
    paintTheme();
    themeBtn.addEventListener("click", function () {
      var next = themeNow() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("foc-theme", next); } catch (e) { /* private mode */ }
      paintTheme();
    });
  }

  var finder = document.getElementById("finder");
  if (finder) {
    var empty = document.getElementById("finder-empty");
    function filterTools() {
      var q = finder.value.trim().toLowerCase();
      var shown = 0;
      document.querySelectorAll("[data-cat]").forEach(function (cat) {
        var any = false;
        cat.querySelectorAll("[data-tool]").forEach(function (item) {
          var hay = (item.getAttribute("data-tool") || "").toLowerCase();
          var match = !q || hay.indexOf(q) !== -1;
          item.hidden = !match;
          if (match) any = true;
        });
        cat.hidden = !any;
        if (any) shown += 1;
      });
      if (empty) empty.hidden = shown !== 0;
    }
    finder.addEventListener("input", filterTools);
  }
})();
