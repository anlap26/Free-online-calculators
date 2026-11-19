/* Relative cost index. New York = 100.
   Rounded editorial figures for a mixed basket of rent, food, and local transport.
   They are not a statistical-office series and not a quote of rents.
   Last reviewed 19 November 2026. Replace a number when you have a source you trust. */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = data;
  if (root) root.COL_DATA = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
    updated: "2026-11-19",
    base: "New York",
    cities: [
      { id: "new-york", en: "New York", ru: "Нью-Йорк", index: 100 },
      { id: "london", en: "London", ru: "Лондон", index: 90 },
      { id: "los-angeles", en: "Los Angeles", ru: "Лос-Анджелес", index: 88 },
      { id: "singapore", en: "Singapore", ru: "Сингапур", index: 85 },
      { id: "paris", en: "Paris", ru: "Париж", index: 80 },
      { id: "amsterdam", en: "Amsterdam", ru: "Амстердам", index: 78 },
      { id: "dubai", en: "Dubai", ru: "Дубай", index: 78 },
      { id: "limassol", en: "Limassol", ru: "Лимассол", index: 70 },
      { id: "berlin", en: "Berlin", ru: "Берлин", index: 68 },
      { id: "nicosia", en: "Nicosia", ru: "Никосия", index: 66 },
      { id: "barcelona", en: "Barcelona", ru: "Барселона", index: 66 },
      { id: "lisbon", en: "Lisbon", ru: "Лиссабон", index: 64 },
      { id: "tallinn", en: "Tallinn", ru: "Таллин", index: 60 },
      { id: "athens", en: "Athens", ru: "Афины", index: 58 },
      { id: "prague", en: "Prague", ru: "Прага", index: 55 },
      { id: "warsaw", en: "Warsaw", ru: "Варшава", index: 50 },
      { id: "budapest", en: "Budapest", ru: "Будапешт", index: 48 },
      { id: "mexico-city", en: "Mexico City", ru: "Мехико", index: 45 },
      { id: "belgrade", en: "Belgrade", ru: "Белград", index: 45 },
      { id: "bangkok", en: "Bangkok", ru: "Бангкок", index: 42 },
      { id: "buenos-aires", en: "Buenos Aires", ru: "Буэнос-Айрес", index: 40 },
      { id: "tbilisi", en: "Tbilisi", ru: "Тбилиси", index: 38 },
      { id: "yerevan", en: "Yerevan", ru: "Ереван", index: 36 }
    ]
  };
});
