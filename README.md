# Gurunanak Fruit Traders — Marketing Website

Marketing site for **Gurunanak Fruit Traders**, wholesale fruit merchants at the New Fruit
Market, Naroda Road, Ahmedabad — trading since 1996.

Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**.
Light theme throughout, fully responsive, no email forms — every enquiry goes to WhatsApp.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

---

## Changing the content

**Everything on the site is driven by one file: [`src/constants/site.ts`](src/constants/site.ts).**
Edit a value there and it updates on every page. You should not need to touch any
component for a normal content change.

| What you want to change | Where in `src/constants/site.ts` |
| --- | --- |
| Company name, tagline, founding year | `COMPANY` |
| Phone, WhatsApp number, email, address, hours | `CONTACT` |
| Partner names and phone numbers | `TEAM` |
| Menu items | `NAV_LINKS` |
| Home page headline and buttons | `HERO` |
| The four stat figures | `STATS` |
| "Why traders buy from us" cards | `HIGHLIGHTS` |
| The fruit list | `PRODUCTS` |
| Season groupings in the footer and home page | `RANGE_CATEGORIES` |
| Services page cards | `SERVICES` |
| Types of buyer served | `CLIENT_TYPES` |
| Company history and timeline | `HISTORY_INTRO`, `MILESTONES` |
| Values | `VALUES` |
| Gallery tiles and captions | `GALLERY` |
| FAQs | `FAQS` |
| Closing call-to-action | `CTA` |
| Page titles, description, keywords, live domain | `SEO` |

### Years of experience updates itself

`YEARS_OF_EXPERIENCE` is calculated from `COMPANY.sinceYear`, so the "30+ years" figure
rolls over on its own each January. Nothing to maintain.

### Social links

`CONTACT.social.instagram` and `.facebook` are empty strings. Fill them in when the
accounts exist; leaving them blank simply hides them.

---

## Adding real photographs

The site currently ships with **hand-drawn SVG fruit illustrations** (in
[`src/components/FruitArt.tsx`](src/components/FruitArt.tsx)). They are vector, so they stay
sharp at any size and add no page weight.

To use a real photo instead, add an `image` field to any product or gallery item. The card
prefers the photo and ignores the illustration:

```ts
{
  id: 'alphonso-mango',
  name: 'Alphonso Mango',
  // ...
  art: 'mango',
  image: '/images/products/alphonso-mango.jpg',   // a file in /public
  // or: image: 'https://example.com/mango.jpg',  // a direct URL
}
```

Put local image files in `public/images/…` and reference them with a leading `/`.
Recommended size is roughly **800 × 600** (4:3), since that is the card's aspect ratio.

The same `image` field works for gallery tiles — this is where shop, office and stock
photographs should go once they are available:

```ts
{ id: 'g-shop', caption: 'Our stall at the New Fruit Market', art: 'mango',
  image: '/images/gallery/shop-front.jpg' },
```

---

## Brand assets

| Asset | File |
| --- | --- |
| Logo (mark + wordmark, React) | `src/components/Logo.tsx` |
| Logo (standalone SVG, for print/email) | `public/logo.svg` |
| Favicon | `src/app/icon.svg` (also copied to `public/favicon.svg`) |

Brand colours are defined in [`tailwind.config.ts`](tailwind.config.ts):
crimson `brand-500 #C1272D` (taken from the company letterhead), green `leaf-500 #2F7D4F`,
amber `amber-500 #E8A33D`, and a warm off-white `cream` background scale.

---

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, why-us, featured fruits, seasons, story, buyers served |
| `/about` | History, milestones, values, the three partners |
| `/products` | Full range grouped by season, with jump links |
| `/services` | Services, how an order works, buyers served, FAQs |
| `/gallery` | Visual grid of the range |
| `/contact` | WhatsApp call-to-action, address, partner numbers, map, FAQs |

A `not-found.tsx`, `sitemap.xml` and `robots.txt` are generated automatically.

### Contact page — by design, there is no email form

The brief called for WhatsApp-only enquiries. The contact page offers a WhatsApp button,
click-to-call links for all three partners, an email link and an embedded map. There is no
form to submit anywhere on the site.

---

## Before going live

1. Set `SEO.siteUrl` in `src/constants/site.ts` to the real domain (used by the sitemap,
   robots.txt and Open Graph tags).
2. Drop in real photographs of the shop, office and stock via the `image` fields above.
3. Add the Instagram and Facebook URLs to `CONTACT.social` if those accounts get created.
4. Confirm the business hours in `CONTACT.businessHours` match the market's actual timings.
