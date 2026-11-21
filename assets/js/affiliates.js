/* Live partner URLs. Travelpayouts marker: 808586.
   Pages and assets/js/site.js read this object.
   A key with no url is not rendered. Do not add placeholder hashes. */
window.AFFILIATES = {
  airalo: {
    name: "Airalo",
    url: "https://airalo.tpx.lt/Z3nl2F1z",
    marker: "808586",
    en: "Airalo eSIM",
    ru: "eSIM Airalo"
  },
  aviasales: {
    name: "Aviasales",
    url: "https://aviasales.tpx.lt/45iBpc4b",
    marker: "808586",
    en: "Aviasales flights",
    ru: "Авиабилеты Aviasales"
  },
  klook: {
    name: "Klook",
    url: "https://klook.tpx.lt/xtutlwca",
    marker: "808586",
    en: "Klook tours and activities",
    ru: "Экскурсии и развлечения Klook"
  },
  tiqets: {
    name: "Tiqets",
    url: "https://tiqets.tpx.lt/PUqK4uu8",
    marker: "808586",
    en: "Tiqets tickets",
    ru: "Билеты Tiqets"
  },
  localrent: {
    name: "Localrent",
    url: "https://localrent.tpx.lt/XVEtrVFd",
    marker: "808586",
    en: "Localrent car hire in Cyprus",
    ru: "Аренда авто на Кипре Localrent",
    cyprus: true
  },
  kiwitaxi: {
    name: "Kiwitaxi",
    url: "https://kiwitaxi.tpx.lt/TTuXoyTH",
    marker: "808586",
    en: "Kiwitaxi transfers in Cyprus",
    ru: "Трансферы по Кипру Kiwitaxi",
    cyprus: true
  },
  welcomepickups: {
    name: "Welcome Pickups",
    url: "https://tpx.lt/HeqeBOtK",
    marker: "808586",
    en: "Welcome Pickups in Cyprus",
    ru: "Welcome Pickups на Кипре",
    cyprus: true
  },
  amazon: {
    name: "Amazon",
    url: "https://www.amazon.de/?tag=cynews24-21",
    tag: "cynews24-21",
    en: "Amazon.de",
    ru: "Amazon.de",
    search: function (query) {
      return "https://www.amazon.de/s?k=" + encodeURIComponent(query) + "&tag=" + this.tag;
    }
  }
};
