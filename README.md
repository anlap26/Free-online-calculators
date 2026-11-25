# Free Online Calculators

Static bilingual site of calculators and comparison guides. English lives at the root. Russian lives under `/ru/` with the same slugs. Everything calculates in the browser. The homepage groups every calculator by category and filters the list from the search box.

The GitHub repository is named `Free-online-calculators`. Project Pages uses that name in the path, so the site URL is https://anlap26.github.io/Free-online-calculators/ . If you rename the repository to all-lowercase `free-online-calculators`, change `BASE` in `build/layout.mjs` to `/free-online-calculators`, run `npm run build`, and push.

## Affiliate links

Partner URLs live in `assets/js/affiliates.js`. The generator writes a live URL into the page. `assets/js/site.js` rewrites any `[data-affiliate]` element from the same object. Every partner link uses `target="_blank"` and `rel="sponsored nofollow noopener"`. A name with no live URL is left as text. It is not a button.

Travelpayouts marker `808586`:

- Airalo eSIM: https://airalo.tpx.lt/Z3nl2F1z
- Aviasales flights: https://aviasales.tpx.lt/45iBpc4b
- Klook tours and activities: https://klook.tpx.lt/xtutlwca
- Tiqets tickets: https://tiqets.tpx.lt/PUqK4uu8

Those four are placed only where the page is about travel, currency, or trip cost, and on the relocation hub:

- Schengen stay calculator
- Cost of living calculator
- Roaming and eSIM calculator
- Currency spread calculator
- Relocation hub
- Airalo eSIM guide
- Nomad insurance guide (the trip, not the policy)

Airalo also stays in the eSIM calculator and the Airalo guide as an in-article link.

Cyprus only, and only on a page that is clearly about Cyprus. None of the current pages is, so these are stored and not shown:

- Localrent: https://localrent.tpx.lt/XVEtrVFd
- Kiwitaxi: https://kiwitaxi.tpx.lt/TTuXoyTH
- Welcome Pickups: https://tpx.lt/HeqeBOtK

`amazon.url` is the Amazon.de homepage with the Associates tag. `amazon.search(query)` builds `https://www.amazon.de/s?k=<query>&tag=cynews24-21`. Product blocks use that search helper. They do not use ASINs.

Guides for Semrush, VPNs, password managers, brokers, exchanges, wallets, and hosts stay on the site. They do not show a partner button.

## Layout

- `index.html` and `ru/index.html` list all 35 tools.
- Cluster hubs: `/finance/`, `/security/`, `/relocation/`, `/webmaster/`.
- One folder per tool, for example `/compound-interest-calculator/`.
- Guides live in `/blog/`.
- `assets/js/affiliates.js` is the partner list.
- `assets/js/cost-of-living.js` is the editorial cost index (New York = 100).
- `assets/js/llm-prices.js` is the editable token price table. The numbers are placeholders.
- `assets/css/site.css` is the hand-written stylesheet. Do not replace it with a Tailwind build. A class named `grid` used to leak a three-column rule onto every form field.
- `content/` and `build/generate.mjs` rebuild the HTML. Run `npm run build` after copy changes, then commit the generated pages. Internal links are relative so the site works under `/Free-online-calculators/` on GitHub Pages.

## Rebuild

```bash
npm install
npm test
npm run build
```

`npm test` checks the formulas. The pages are already generated and committed, so a visitor does not need Node.

## GitHub Pages

The site is meant to be served from the `main` branch, root folder. This repo includes `.nojekyll` so Jekyll does not touch the files.

If Pages is not already on:

1. Open the repository on GitHub.
2. Settings, then Pages.
3. Build and deployment, Source: Deploy from a branch.
4. Branch: `main`, folder: `/ (root)`.
5. Save.

The site should appear at https://anlap26.github.io/Free-online-calculators/ after the first deployment finishes.

## After it is live

- In Google Search Console, add the property `https://anlap26.github.io/Free-online-calculators/` and submit `sitemap.xml`.
- When a partner URL changes, edit `assets/js/affiliates.js`, run `npm run build`, and push to `main`.
- A custom domain is optional. Add a `CNAME` file with the domain, set the DNS, and change `ORIGIN` and `BASE` in `build/layout.mjs` (`BASE` becomes `""` on a domain that serves the site at `/`). Then run `npm run build` and push.
