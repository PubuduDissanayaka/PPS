# Paris Premium Shuttle

A responsive, multi-page static website for Paris Premium Shuttle, built with HTML, CSS, and vanilla JavaScript. No build system or package installation is required.

## Project files

- `index.html`: focused homepage and service overview
- `services.html`: dedicated airport transfers, private pickups, shuttles, and sightseeing page
- `about.html`: service overview and journey support information
- `how-it-works.html`: transfer enquiry process and preparation checklist
- `contact.html`: contact details and WhatsApp transfer enquiry form
- `styles.css`: responsive design system and centralized CSS variables
- `script.js`: accessible mobile navigation, date validation, and WhatsApp enquiry handoff
- `.github/workflows/pages.yml`: automated GitHub Pages deployment
- `assets/logo.png`: add the original official logo here unchanged

## Brand asset handoff

The live website timed out during implementation, so I could not retrieve its original logo file or reliably sample its exact brand colors. The website is prepared to use the original logo at `assets/logo.png`, with a typographic fallback until that file is added. Do not redraw or replace the logo with a recreated mark.

Before launch, add the untouched official logo at `assets/logo.png` and update the `--brand-*` CSS variables at the top of `styles.css` to the exact colors sampled from the original brand artwork. The current colors are a temporary design palette, not a claim about the original palette.

## Site map

- Home: `index.html`
- Services: `services.html`
- About: `about.html`
- How it works: `how-it-works.html`
- Contact and transfer enquiries: `contact.html`

Every page uses the shared responsive navigation and footer. The site is built with plain HTML, CSS, and JavaScript, with no build system required.

## Preview locally

Open `index.html` directly in a modern browser. The website uses a remote Google Fonts stylesheet and remote Unsplash imagery, so those visual assets need an internet connection.

## Deploy with GitHub Pages

A workflow is included at `.github/workflows/pages.yml`. To enable it:

1. Open the repository's **Settings → Pages**.
2. Under the build and deployment settings, choose **GitHub Actions** as the source.
3. Push to `master`, or manually run the workflow from the **Actions** tab.
4. After the first successful run, open the published URL shown in the Pages settings.

Add a custom domain and configure DNS in Pages settings only when you're ready to point the domain to this repository. Enable HTTPS when GitHub offers it.

## Transfer enquiry form

The form validates the required trip details and opens WhatsApp with a prefilled enquiry for **+33 6 33 30 89 83**. The visitor reviews and sends the message themselves. This is an enquiry handoff, not an instant booking, availability check, fare calculator, or payment system.

## Business information included

- Phone: +33 6 33 30 89 83
- Airport transfer enquiries for Charles de Gaulle (CDG), Orly (ORY), and Beauvais (BVA)
- Private transfers, hotel pickups, private shuttles, and sightseeing enquiries
- Bilingual chauffeurs, flight monitoring, meet-and-greet, and 24/7 availability, as stated in the existing site information

No prices, invented testimonials, or unsupported performance statistics are included.
