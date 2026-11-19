(function () {
  "use strict";
  var partners = window.AFFILIATES || {};
  document.querySelectorAll("[data-affiliate]").forEach(function (node) {
    var key = node.getAttribute("data-affiliate");
    var item = partners[key];
    if (!item || !item.url) return;
    node.setAttribute("href", item.url);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "sponsored noopener");
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
})();
