/* ------------------------------------------------------------------ *
 *  Gurunanak Fruit Traders — single source of truth for site content
 *  ----------------------------------------------------------------
 *  Everything the website displays lives in this file. Change a value
 *  here and it updates everywhere on the site. No other file needs to
 *  be touched for a normal content update.
 * ------------------------------------------------------------------ */

/* ---------------------------------- *
 *  1. Company identity
 * ---------------------------------- */
export const COMPANY = {
  name: 'Gurunanak Fruit Traders',
  shortName: 'Gurunanak Fruit Traders',
  initials: 'GFT',
  nameGujarati: 'ગુરુનાનક ફ્રુટ ટ્રેડર્સ',
  tagline: 'Fruit Merchant',
  sinceYear: 1996,
  /** Short line used under the logo and in the footer. */
  strapline: 'Wholesale suppliers of all seasonal fruits since 1996.',
  /** One-paragraph description used for SEO and the about intro. */
  description:
    'Gurunanak Fruit Traders is a wholesale fruit merchant based at the New Fruit Market, Naroda Road, Ahmedabad. Serving the trade since 1996, we supply the complete range of seasonal fruits — fresh, carefully graded and delivered on time.',
} as const;

/** Years in business, recalculated automatically every year. */
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - COMPANY.sinceYear;

/* ---------------------------------- *
 *  2. Contact details
 * ---------------------------------- */
export const CONTACT = {
  email: 'mohnanihitesh70@gmail.com',
  /** Shown to visitors. */
  phoneDisplay: '96870 82001',
  /** Used in tel: links. */
  phoneTel: '+919687082001',
  /** Digits only, with country code — used to build wa.me links. */
  whatsappNumber: '919687082001',
  /** Pre-filled text for the WhatsApp chat. */
  whatsappMessage:
    'Hello Gurunanak Fruit Traders, I would like to enquire about your seasonal fruits.',
  address: {
    line1: '25, G. M. Market',
    line2: 'New Fruit Market, Naroda Road',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '382330',
    country: 'India',
  },
  /** Google Maps search query for the "Get directions" link. */
  mapsQuery: 'New Fruit Market, Naroda Road, Ahmedabad 382330',
  businessHours: [
    { days: 'Monday – Saturday', hours: '5:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '5:00 AM – 1:00 PM' },
  ],
  /** Leave as empty strings to hide the social icons entirely. */
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

export const ADDRESS_ONE_LINE = [
  CONTACT.address.line1,
  CONTACT.address.line2,
  `${CONTACT.address.city} – ${CONTACT.address.pincode}`,
  CONTACT.address.state,
].join(', ');

/** Builds the WhatsApp deep link, optionally with a custom message. */
export function whatsappLink(message: string = CONTACT.whatsappMessage): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT.mapsQuery,
)}`;

/* ---------------------------------- *
 *  3. The people behind the firm
 * ---------------------------------- */
export type TeamMember = {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneTel: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'Jairam Mohnani',
    role: 'Partner',
    phoneDisplay: '98253 10260',
    phoneTel: '+919825310260',
  },
  {
    name: 'Hitesh Mohnani',
    role: 'Partner — Sales & Enquiries',
    phoneDisplay: '96870 82001',
    phoneTel: '+919687082001',
  },
  {
    name: 'Jayesh Mohnani',
    role: 'Partner',
    phoneDisplay: '81416 62374',
    phoneTel: '+918141662374',
  },
];

/* ---------------------------------- *
 *  4. Navigation
 * ---------------------------------- */
export type NavItem = { label: string; href: string };

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

/* ---------------------------------- *
 *  5. Home page — hero & highlights
 * ---------------------------------- */
export const HERO = {
  eyebrow: `Fruit merchants since ${COMPANY.sinceYear}`,
  title: 'Every season’s best fruit,',
  titleAccent: 'sourced fresh for your trade.',
  subtitle:
    'From the New Fruit Market in Ahmedabad, Gurunanak Fruit Traders supplies the complete range of seasonal fruits to retailers, vendors, caterers and institutions — graded, packed and despatched the same day.',
  primaryCta: { label: 'Enquire on WhatsApp', href: '#whatsapp' },
  secondaryCta: { label: 'Browse our fruits', href: '/products' },
};

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: `${COMPANY.sinceYear}`, label: 'Trading since' },
  { value: `${YEARS_OF_EXPERIENCE}+`, label: 'Years of experience' },
  { value: 'All', label: 'Seasonal fruits stocked' },
  { value: 'Daily', label: 'Fresh market arrivals' },
];

export type Highlight = { title: string; body: string; icon: IconName };

export const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Complete seasonal range',
    body: 'Whatever the month, we carry the fruit that is at its peak — mangoes in summer, citrus in winter and everything in between.',
    icon: 'basket',
  },
  {
    title: 'Hand-graded quality',
    body: 'Every consignment is sorted by size, ripeness and finish before it leaves our stall, so what you order is what you receive.',
    icon: 'leaf',
  },
  {
    title: 'Three decades of trust',
    body: `Family-run since ${COMPANY.sinceYear}, we have grown on repeat business from traders who know our word is good.`,
    icon: 'handshake',
  },
  {
    title: 'Same-day despatch',
    body: 'Place your order in the morning and we load it the same day — fruit reaches you while it is still at its freshest.',
    icon: 'truck',
  },
];

/* ---------------------------------- *
 *  6. Products
 * ---------------------------------- */
export type Season = 'Summer' | 'Monsoon' | 'Winter' | 'Year-round';

export type Product = {
  /** Unique slug — also used as the React key. */
  id: string;
  name: string;
  /** Local name, shown as a subtitle on the card. Optional. */
  localName?: string;
  season: Season;
  description: string;
  /**
   * Illustration key — see src/components/FruitArt.tsx for the list.
   * Ignored when `image` is set.
   */
  art: FruitArtKey;
  /**
   * Optional photograph. Set this to a URL (https://…) or to a file you
   * place in /public (e.g. '/images/products/mango.jpg') and the card
   * will show the photo instead of the illustration.
   */
  image?: string;
};

export const SEASONS: Season[] = ['Summer', 'Monsoon', 'Winter', 'Year-round'];

export const PRODUCTS: Product[] = [
  {
    id: 'alphonso-mango',
    name: 'Alphonso Mango',
    localName: 'Hapus',
    season: 'Summer',
    description: 'Saffron-fleshed, fibre-free and intensely aromatic — the benchmark of the Indian mango season.',
    art: 'mango',
  },
  {
    id: 'kesar-mango',
    name: 'Kesar Mango',
    localName: 'Gir Kesar',
    season: 'Summer',
    description: 'Gujarat’s own mango from the Gir belt, prized for its deep orange pulp and honeyed sweetness.',
    art: 'kesarMango',
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    localName: 'Tarbooch',
    season: 'Summer',
    description: 'Crisp, deep-red and sugar-sweet. Supplied whole in field crates by the tonne.',
    art: 'watermelon',
  },
  {
    id: 'muskmelon',
    name: 'Muskmelon',
    localName: 'Sakkar Teti',
    season: 'Summer',
    description: 'Netted-skin melons with fragrant, juicy flesh — a summer counter favourite.',
    art: 'muskmelon',
  },
  {
    id: 'litchi',
    name: 'Litchi',
    season: 'Summer',
    description: 'Rose-scented litchis arriving in short, sharp season — booked ahead and moved fast.',
    art: 'litchi',
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit',
    localName: 'Fanas',
    season: 'Summer',
    description: 'Whole jackfruit and cleaned bulbs, sourced from the Konkan and Southern belts.',
    art: 'jackfruit',
  },
  {
    id: 'custard-apple',
    name: 'Custard Apple',
    localName: 'Sitaphal',
    season: 'Monsoon',
    description: 'Creamy, sweet sitaphal picked at the right firmness so it ripens in your shop, not in transit.',
    art: 'customApple',
  },
  {
    id: 'jamun',
    name: 'Jamun',
    localName: 'Black Plum',
    season: 'Monsoon',
    description: 'Deep-purple jamun with that signature tart finish — a short monsoon window every year.',
    art: 'jamun',
  },
  {
    id: 'dragon-fruit',
    name: 'Dragon Fruit',
    season: 'Monsoon',
    description: 'Pink-skinned pitaya, white and red flesh varieties, graded by count and weight.',
    art: 'dragonFruit',
  },
  {
    id: 'pear',
    name: 'Pear',
    localName: 'Nashpati',
    season: 'Monsoon',
    description: 'Crisp Asian and soft European pears, firm-packed in trays to arrive unmarked.',
    art: 'pear',
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    localName: 'Dadam',
    season: 'Winter',
    description: 'Thick-skinned Bhagwa pomegranates with ruby arils and excellent shelf life.',
    art: 'pomegranate',
  },
  {
    id: 'orange',
    name: 'Orange',
    localName: 'Santra',
    season: 'Winter',
    description: 'Nagpur and Kinnow oranges, juicy and easy-peeling, supplied by the crate.',
    art: 'orange',
  },
  {
    id: 'sweet-lime',
    name: 'Sweet Lime',
    localName: 'Mosambi',
    season: 'Winter',
    description: 'Juice-grade and table-grade mosambi, sorted separately so you buy exactly what you need.',
    art: 'sweetLime',
  },
  {
    id: 'grapes',
    name: 'Grapes',
    localName: 'Draksh',
    season: 'Winter',
    description: 'Green Thompson and black seedless bunches from Nashik, packed in ventilated punnets.',
    art: 'grapes',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    season: 'Winter',
    description: 'Mahabaleshwar strawberries in cold-chain punnets, moved quickly to hold their shine.',
    art: 'strawberry',
  },
  {
    id: 'apple',
    name: 'Apple',
    localName: 'Safarchand',
    season: 'Winter',
    description: 'Kashmiri, Himachali and imported apples — colour-graded and count-packed per box.',
    art: 'apple',
  },
  {
    id: 'guava',
    name: 'Guava',
    localName: 'Jamfal',
    season: 'Winter',
    description: 'White and pink-fleshed guava, firm and fragrant, straight from Gujarat’s orchards.',
    art: 'guava',
  },
  {
    id: 'chikoo',
    name: 'Chikoo',
    localName: 'Sapota',
    season: 'Winter',
    description: 'Gholvad-style sapota with malty sweetness, graded so the whole lot ripens together.',
    art: 'chikoo',
  },
  {
    id: 'banana',
    name: 'Banana',
    localName: 'Kela',
    season: 'Year-round',
    description: 'Robusta and Elaichi bananas supplied green or chamber-ripened to your schedule.',
    art: 'banana',
  },
  {
    id: 'papaya',
    name: 'Papaya',
    localName: 'Papaiya',
    season: 'Year-round',
    description: 'Taiwan Red Lady papaya with dense orange flesh, sized for retail and for cut-fruit counters.',
    art: 'papaya',
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    localName: 'Ananas',
    season: 'Year-round',
    description: 'Queen and Kew pineapples with golden flesh — a steady seller all twelve months.',
    art: 'pineapple',
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    season: 'Year-round',
    description: 'Imported kiwi in single-layer trays, available firm for storage or ready to eat.',
    art: 'kiwi',
  },
  {
    id: 'coconut',
    name: 'Tender Coconut',
    localName: 'Nariyal',
    season: 'Year-round',
    description: 'Fresh tender coconuts, trimmed and loaded for juice counters and caterers.',
    art: 'coconut',
  },
  {
    id: 'lemon',
    name: 'Lemon',
    localName: 'Limbu',
    season: 'Year-round',
    description: 'Thin-skinned, heavy-juice lemons supplied loose by weight or in mesh bags.',
    art: 'lemon',
  },
];

/* ---------------------------------- *
 *  7. Product range groupings
 * ---------------------------------- */
export type RangeCategory = { title: string; blurb: string; items: string[] };

export const RANGE_CATEGORIES: RangeCategory[] = [
  {
    title: 'Summer fruits',
    blurb: 'The mango months, when the market runs from before dawn.',
    items: ['Alphonso Mango', 'Kesar Mango', 'Watermelon', 'Muskmelon', 'Litchi', 'Jackfruit'],
  },
  {
    title: 'Monsoon fruits',
    blurb: 'Short, seasonal windows that reward buyers who book early.',
    items: ['Custard Apple', 'Jamun', 'Dragon Fruit', 'Pear', 'Plum', 'Peach'],
  },
  {
    title: 'Winter fruits',
    blurb: 'Citrus, berries and the heart of the table-fruit season.',
    items: ['Pomegranate', 'Orange', 'Sweet Lime', 'Grapes', 'Strawberry', 'Apple', 'Guava', 'Chikoo'],
  },
  {
    title: 'Year-round staples',
    blurb: 'The lines that need to be on your counter every single day.',
    items: ['Banana', 'Papaya', 'Pineapple', 'Kiwi', 'Tender Coconut', 'Lemon'],
  },
];

/* ---------------------------------- *
 *  8. Services
 * ---------------------------------- */
export type Service = { title: string; body: string; icon: IconName };

export const SERVICES: Service[] = [
  {
    title: 'Wholesale supply',
    body: 'Bulk quantities of any seasonal fruit for retailers, pushcart vendors, juice bars and fruit shops, priced by the crate, box or kilo.',
    icon: 'basket',
  },
  {
    title: 'Grading & sorting',
    body: 'Fruit is sorted by size, colour and ripeness before despatch, so a single lot stays consistent from the top of the crate to the bottom.',
    icon: 'scale',
  },
  {
    title: 'Bulk & contract orders',
    body: 'Standing weekly or monthly supply arrangements for hotels, caterers, canteens, hospitals and corporate kitchens.',
    icon: 'clipboard',
  },
  {
    title: 'Season booking',
    body: 'Reserve your mango, litchi or strawberry volumes ahead of the season so you are covered when the market tightens.',
    icon: 'calendar',
  },
  {
    title: 'Packing & crating',
    body: 'Fruit packed in ventilated crates, corrugated boxes or trays with protective lining to survive the journey to your door.',
    icon: 'box',
  },
  {
    title: 'Loading & despatch',
    body: 'Same-day loading from our stall at the New Fruit Market, with help arranging transport anywhere in and around Ahmedabad.',
    icon: 'truck',
  },
  {
    title: 'Festival & event supply',
    body: 'Large one-off consignments for weddings, festivals, temple bhandaras and corporate gifting, planned with you in advance.',
    icon: 'gift',
  },
  {
    title: 'Mandi buying support',
    body: 'Not sure what is arriving or what it should cost? Call us — thirty years on the floor is advice you can act on.',
    icon: 'chat',
  },
];

/* ---------------------------------- *
 *  9. Who we serve
 * ---------------------------------- */
export const CLIENT_TYPES: string[] = [
  'Fruit retailers & shops',
  'Pushcart & street vendors',
  'Juice bars & cut-fruit counters',
  'Hotels & restaurants',
  'Caterers & banquet halls',
  'Hospitals & canteens',
  'Corporate gifting',
  'Temples & community kitchens',
  'Weddings & events',
  'Resellers & sub-traders',
];

/* ---------------------------------- *
 *  10. Company history
 * ---------------------------------- */
export type Milestone = { year: string; title: string; body: string };

export const HISTORY_INTRO = `Gurunanak Fruit Traders began in ${COMPANY.sinceYear} as a single stall at the New Fruit Market on Naroda Road, Ahmedabad. The business was built the old way — by turning up before sunrise, buying carefully, and standing behind every crate that left the shop. Three decades on it is still run by the same family, from the same market, for many of the same customers.`;

export const MILESTONES: Milestone[] = [
  {
    year: '1996',
    title: 'The first stall',
    body: 'Gurunanak Fruit Traders opens at 25, G. M. Market in the New Fruit Market, trading a handful of seasonal lines.',
  },
  {
    year: '2000s',
    title: 'A full seasonal range',
    body: 'Buying expands beyond Gujarat to the Konkan, Nashik, Nagpur and the Himalayan belt, so the stall can carry every fruit in season.',
  },
  {
    year: '2010s',
    title: 'Serving the trade',
    body: 'Regular supply arrangements begin with hotels, caterers, juice bars and institutional kitchens across Ahmedabad.',
  },
  {
    year: 'Today',
    title: 'The same promise',
    body: `${YEARS_OF_EXPERIENCE} years on, three partners still buy the fruit themselves every morning — and still answer the phone personally.`,
  },
];

export type Value = { title: string; body: string };

export const VALUES: Value[] = [
  {
    title: 'Freshness first',
    body: 'We buy daily and move stock quickly. Fruit that has been sitting is fruit that has lost money for everyone.',
  },
  {
    title: 'Honest grading',
    body: 'What you see on top is what you get at the bottom. No packing the crate to flatter the lot.',
  },
  {
    title: 'A fair, clear price',
    body: 'Market-linked rates quoted plainly, with no surprises added between the quote and the invoice.',
  },
  {
    title: 'Relationships that last',
    body: 'Most of our business comes from customers who have been with us for years. We intend to keep it that way.',
  },
];

/* ---------------------------------- *
 *  11. Gallery
 * ---------------------------------- */
export type GalleryItem = {
  id: string;
  caption: string;
  art: FruitArtKey;
  /** Optional photograph — set a URL or a /public path to override the art. */
  image?: string;
};

export const GALLERY_INTRO =
  'A look at what moves through our stall through the year — the fruit, the seasons and the range we keep on the floor.';

export const GALLERY: GalleryItem[] = [
  { id: 'g-mango', caption: 'Kesar and Alphonso mangoes, peak summer', art: 'mango' },
  { id: 'g-pomegranate', caption: 'Bhagwa pomegranates, winter arrivals', art: 'pomegranate' },
  { id: 'g-grapes', caption: 'Nashik grapes, fresh off the truck', art: 'grapes' },
  { id: 'g-watermelon', caption: 'Field-crate watermelons by the tonne', art: 'watermelon' },
  { id: 'g-orange', caption: 'Nagpur oranges, sorted and crated', art: 'orange' },
  { id: 'g-banana', caption: 'Robusta bananas, ripened to order', art: 'banana' },
  { id: 'g-apple', caption: 'Apples, colour-graded and count-packed', art: 'apple' },
  { id: 'g-pineapple', caption: 'Queen pineapples, year-round line', art: 'pineapple' },
  { id: 'g-papaya', caption: 'Red Lady papaya for cut-fruit counters', art: 'papaya' },
  { id: 'g-strawberry', caption: 'Mahabaleshwar strawberries in punnets', art: 'strawberry' },
  { id: 'g-custard', caption: 'Sitaphal, graded to ripen together', art: 'customApple' },
  { id: 'g-coconut', caption: 'Tender coconuts, trimmed and loaded', art: 'coconut' },
];

/* ---------------------------------- *
 *  12. FAQs
 * ---------------------------------- */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: 'What is your minimum order?',
    a: 'We trade wholesale, so orders are generally by the crate or box rather than by the kilo. Message us on WhatsApp with what you need and we will tell you the practical minimum for that fruit.',
  },
  {
    q: 'Do you deliver?',
    a: 'We load from our stall at the New Fruit Market and help arrange transport anywhere in and around Ahmedabad. Tell us where the consignment has to reach and we will work it out with you.',
  },
  {
    q: 'How do I get current rates?',
    a: 'Fruit prices move with the market every day, so we do not publish a fixed list. Send us a WhatsApp message with the fruit and quantity and you will get that day’s rate.',
  },
  {
    q: 'Can I book fruit before the season starts?',
    a: 'Yes. For mango, litchi, strawberry and other short-season fruits we strongly recommend booking your volumes in advance.',
  },
  {
    q: 'Do you supply hotels, caterers and institutions?',
    a: 'Regularly. We run standing weekly and monthly supply arrangements for hotels, banquet halls, canteens, hospitals and corporate kitchens.',
  },
  {
    q: 'What are your market hours?',
    a: 'The market runs early. We are at the stall from 5:00 AM, Monday to Saturday, and on Sunday mornings.',
  },
];

/* ---------------------------------- *
 *  13. Call-to-action block
 * ---------------------------------- */
export const CTA = {
  title: 'Tell us what you need this season',
  body: 'Send us the fruit, the quantity and when you need it. You will get today’s rate and a straight answer about availability — usually within the hour.',
  buttonLabel: 'Message us on WhatsApp',
};

/* ---------------------------------- *
 *  14. SEO / metadata
 * ---------------------------------- */
export const SEO = {
  titleTemplate: `%s | ${COMPANY.name}`,
  defaultTitle: `${COMPANY.name} — Wholesale Seasonal Fruit Merchants, Ahmedabad`,
  description: COMPANY.description,
  keywords: [
    'fruit wholesaler Ahmedabad',
    'fruit merchant Naroda Road',
    'New Fruit Market Ahmedabad',
    'seasonal fruit supplier',
    'mango wholesaler Gujarat',
    'Gurunanak Fruit Traders',
    'bulk fruit supplier Ahmedabad',
  ],
  /** Set this once the site has a live domain. */
  siteUrl: 'https://gurunanakfruittraders.com',
};

/* ---------------------------------- *
 *  Shared type helpers
 * ---------------------------------- */
export type IconName =
  | 'basket'
  | 'leaf'
  | 'handshake'
  | 'truck'
  | 'scale'
  | 'clipboard'
  | 'calendar'
  | 'box'
  | 'gift'
  | 'chat';

export type FruitArtKey =
  | 'mango'
  | 'kesarMango'
  | 'watermelon'
  | 'muskmelon'
  | 'litchi'
  | 'jackfruit'
  | 'customApple'
  | 'jamun'
  | 'dragonFruit'
  | 'pear'
  | 'pomegranate'
  | 'orange'
  | 'sweetLime'
  | 'grapes'
  | 'strawberry'
  | 'apple'
  | 'guava'
  | 'chikoo'
  | 'banana'
  | 'papaya'
  | 'pineapple'
  | 'kiwi'
  | 'coconut'
  | 'lemon';
