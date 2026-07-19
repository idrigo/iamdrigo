# iamdrigo.com

Personal portfolio of Ilya Drigo — static site, no build step, no framework.

## Files

- `index.html` — the whole site (one page)
- `styles.css` — styles
- `script.js` — scroll-reveal animation + footer year
- `assets/` — SVG illustrations for the Selected work cards
- `CNAME` — custom domain for GitHub Pages

## Run locally

```bash
python3 -m http.server 3000
# open http://localhost:3000
```

## Deploy

**GitHub Pages:**

```bash
git init && git add . && git commit -m "Portfolio site"
gh repo create iamdrigo --public --source=. --push
gh api repos/{owner}/iamdrigo/pages -X POST -f build_type=legacy -f "source[branch]=main" -f "source[path]=/"
```

Then point DNS for `iamdrigo.com`: `A` records to GitHub Pages IPs
(185.199.108.153 / .109. / .110. / .111.) and `CNAME` for `www` to `<user>.github.io`.
The `CNAME` file in the repo already declares the domain.

**VPS (nginx/caddy):** copy the three files to the web root — nothing else needed.

```bash
rsync -av index.html styles.css script.js assets user@vps:/var/www/iamdrigo/
```

## Design notes

Nautical-chart theme: chart-paper background, marine ink, and the magenta
used for plotted courses on real navigational charts. Hero shows bathymetry
contours, depth soundings, and a dashed course line with waypoint crosses.
Type: Spectral (display) + IBM Plex Sans (body) + IBM Plex Mono (dates,
coordinates, labels).
