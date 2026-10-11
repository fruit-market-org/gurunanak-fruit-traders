import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import CtaBand from '@/components/CtaBand';
import { CheckIcon, WhatsAppIcon } from '@/components/Icons';
import {
  COMPANY,
  PRODUCTS,
  RANGE_CATEGORIES,
  SEASONS,
  whatsappLink,
} from '@/constants/site';

export const metadata: Metadata = {
  title: 'Our fruits',
  description: `The complete range of seasonal fruits supplied wholesale by ${COMPANY.name} from the New Fruit Market, Naroda Road, Ahmedabad.`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="All seasonal fruits, under one roof"
        subtitle="Summer mangoes, monsoon sitaphal, winter citrus and the staples that sell every day of the year — graded, packed and ready to load."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      {/* Season index */}
      <section className="border-b border-ink-100 bg-white py-8 sm:py-10">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-ink-400 sm:inline">
              Jump to
            </span>
            {SEASONS.map((season) => (
              <a
                key={season}
                href={`#${season.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-full border border-ink-200 bg-cream-50 px-4 py-2 text-sm font-medium
                           text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
              >
                {season}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products grouped by season */}
      {SEASONS.map((season, index) => {
        const items = PRODUCTS.filter((p) => p.season === season);
        if (!items.length) return null;

        return (
          <section
            key={season}
            id={season.toLowerCase().replace(/\s+/g, '-')}
            className={`section scroll-mt-24 ${index % 2 === 0 ? 'bg-cream-50' : 'bg-white'}`}
          >
            <div className="container">
              <SectionHeading
                align="left"
                eyebrow={`${items.length} ${items.length === 1 ? 'variety' : 'varieties'}`}
                title={season === 'Year-round' ? 'Year-round staples' : `${season} fruits`}
                subtitle={
                  RANGE_CATEGORIES.find((c) => c.title.toLowerCase().startsWith(season.toLowerCase()))
                    ?.blurb
                }
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Not listed */}
      <section className="section bg-cream-50">
        <div className="container">
          <div className="card mx-auto max-w-3xl p-8 text-center sm:p-12">
            <h2 className="text-balance text-2xl font-bold sm:text-3xl">
              Looking for something not listed here?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-600">
              This page covers what we carry regularly, but the market brings in far more. Tell us the
              fruit, the grade and the quantity — if it is arriving in Ahmedabad, we can usually source it.
            </p>
            <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left sm:grid-cols-2">
              {['Imported varieties', 'Specific grades & counts', 'Bulk season bookings', 'Custom packing'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <a
              href={whatsappLink('Hello Gurunanak Fruit Traders, I am looking for a fruit that is not listed on your website. Can you help?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-9 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ask us about it
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
