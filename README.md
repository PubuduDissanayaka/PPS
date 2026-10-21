# Paris Premium Shuttle

A new, responsive static website for Paris Premium Shuttle built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html`: homepage and booking enquiry form
- `styles.css`: responsive styling and design tokens
- `script.js`: mobile navigation, booking form validation, and enquiry handoff
- `assets/logo.png`: place the existing official logo here without editing it

## Brand asset requirement
The original website could not be reliably fetched during initial implementation, so the exact logo file and sampled brand color values could not be verified from the source. Do not replace the official logo with a recreated mark. Add the unchanged original logo at `assets/logo.png`, then update the CSS variables at the top of `styles.css` to the exact colors sampled from that logo before launch. The design tokens are centralized for this purpose.

## Run locally
Open `index.html` in a browser. No build step or package installation is required.

## GitHub Pages
1. Open **Settings → Pages** in this repository.
2. Choose **Deploy from a branch**.
3. Select `master` and `/ (root)`, then save.
4. Wait for GitHub Pages to publish the site.

A custom domain can be configured in GitHub Pages after DNS is pointed to GitHub Pages. Configure HTTPS once available.

## Booking form
The form currently prepares an email enquiry and opens the visitor's email client. It does not claim to make a confirmed reservation, calculate fares, or connect to a booking backend. Before production, replace the configured enquiry destination in `script.js` with the business's verified booking email or connect a real booking service.

## Verified business information used
- Phone: +33 6 33 30 89 83
- Airport transfers for CDG, Orly, and Beauvais
- Private transfers, hotel pickups, and sightseeing/private shuttle services
- Bilingual chauffeurs, 24/7 service, flight monitoring, and meet-and-greet, as stated on the existing website

No prices, customer reviews, or unverified performance metrics are invented.
