/* Starter prices per 1 million tokens, in USD.
   These are round placeholders so the calculator runs offline.
   They are not a quote. Vendor prices change. Edit them.
   Last filled in on 19 November 2026. */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = data;
  if (root) root.LLM_PRICES = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
    updated: "2026-11-19",
    models: [
      { id: "gpt-flagship", name: "GPT flagship (placeholder)", input: 5, output: 15 },
      { id: "gpt-mini", name: "GPT mini (placeholder)", input: 0.4, output: 1.6 },
      { id: "claude-flagship", name: "Claude flagship (placeholder)", input: 3, output: 15 },
      { id: "claude-fast", name: "Claude fast (placeholder)", input: 0.8, output: 4 },
      { id: "gemini-pro", name: "Gemini Pro (placeholder)", input: 1.25, output: 10 },
      { id: "gemini-flash", name: "Gemini Flash (placeholder)", input: 0.15, output: 0.6 }
    ]
  };
});
