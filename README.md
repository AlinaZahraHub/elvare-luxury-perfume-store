
# ÉLVARÉ — Luxury Fragrance Store

A responsive React + Vite multi-page e-commerce concept website for a fictional luxury fragrance brand.

## Run locally

1. Extract the ZIP file.
2. Open the extracted `ELVARE` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
npm run preview
```

The production-ready website files will be generated in `dist/`.

## Pages

- `/` — Home
- `/collection` — Collection, search and family filter
- `/product/:slug` — Product detail
- `/our-story` — Brand story
- `/contact` — Contact form demo
- `/wishlist` — Saved fragrances
- `/bag` — Shopping bag
- `/checkout` — Demo checkout
- `/order-confirmation` — Demo confirmation

## Notes

- This is a self-initiated portfolio concept project for ÉLVARÉ.
- Cart and wishlist are stored in browser LocalStorage.
- Checkout is a demonstration only. No payment is collected and no real order is submitted.
- Contact form demonstrates the UI only; it does not send email.
- All six signature fragrances use the supplied JPG product photographs stored in `src/assets/perfumes/`.
- Google Fonts are loaded from Google Fonts when internet access is available; system fallbacks remain in place.

