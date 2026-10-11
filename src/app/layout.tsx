import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import {
  ADDRESS_ONE_LINE,
  COMPANY,
  CONTACT,
  SEO,
} from '@/constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: 'website',
    siteName: COMPANY.name,
    title: SEO.defaultTitle,
    description: SEO.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: SEO.defaultTitle,
    description: SEO.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#C1272D',
  width: 'device-width',
  initialScale: 1,
};

/* Local-business structured data, built from the constants file. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY.name,
  description: COMPANY.description,
  foundingDate: String(COMPANY.sinceYear),
  email: CONTACT.email,
  telephone: CONTACT.phoneTel,
  url: SEO.siteUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${CONTACT.address.line1}, ${CONTACT.address.line2}`,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.state,
    postalCode: CONTACT.address.pincode,
    addressCountry: 'IN',
  },
  areaServed: 'Ahmedabad, Gujarat, India',
  knowsAbout: ADDRESS_ONE_LINE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]
                     focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-3 focus:text-sm
                     focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
