# Free Online Calculators

Static bilingual site of 35 calculators and comparison guides. English lives at the root. Russian lives under `/ru/` with the same slugs. Everything calculates in the browser.

Live URL once GitHub Pages is enabled: https://anlap26.github.io/free-online-calculators/

## Affiliate links, one file

Edit only `assets/js/affiliates.js`. Every partner button and in-article partner link reads that object on load. The keys are:

`nordvpn`, `surfshark`, `proton`, `onepassword`, `bitwarden`, `safetywing`, `genki`, `interactivebrokers`, `binance`, `bybit`, `ledger`, `trezor`, `semrush`, `airalo`, `wise`, `cloudways`, `kinsta`.

Replace a value such as `#AFFILIATE_SEMRUSH` with the full tracking URL. Do not rename the keys. Links are rewritten to `target="_blank"` and `rel="sponsored noopener"`.

Semrush is the prominent offer on the SEO tools (text analyzer, meta tags, robots and sitemap, page speed, UTM builder, ROAS) and on four guides: the Semrush review, the trial walkthrough, Semrush versus Ahrefs and free tools, and the low-competition keyword method.

## Layout

- `index.html` and `ru/index.html` list all 35 tools.
- Cluster hubs: `/finance/`, `/security/`, `/relocation/`, `/webmaster/`.
- One folder per tool, for example `/compound-interest-calculator/`.
- Guides live in `/blog/`.
- `assets/js/affiliates.js` is the partner list.
- `assets/js/cost-of-living.js` is the editorial cost index (New York = 100).
- `assets/js/llm-prices.js` is the editable token price table. The numbers are placeholders.
- `assets/css/site.css` is compiled Tailwind. Source is `src/input.css`.
- `content/` and `build/generate.mjs` rebuild the HTML. Run `npm run build` after copy changes, then commit the generated pages.

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

The site should appear at https://anlap26.github.io/free-online-calculators/ after the first deployment finishes.

## After it is live

- In Google Search Console, add the property `https://anlap26.github.io/free-online-calculators/` and submit `sitemap.xml`.
- Paste the real affiliate URLs into `assets/js/affiliates.js` and push to `main`.
- A custom domain is optional. Add a `CNAME` file with the domain, set the DNS, and change `ORIGIN` and `BASE` in `build/layout.mjs` (`BASE` becomes `""` on a domain that serves the site at `/`). Then run `npm run build` and push.
