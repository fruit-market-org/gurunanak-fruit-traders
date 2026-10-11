import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import FruitArt from '@/components/FruitArt';
import SectionHeading from '@/components/SectionHeading';
import {
  ADDRESS_ONE_LINE,
  COMPANY,
  GALLERY,
  GALLERY_INTRO,
  MAPS_LINK,
} from '@/constants/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `A look at the seasonal fruit that moves through ${COMPANY.name} at the New Fruit Market, Ahmedabad.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="What comes through our stall"
        subtitle={GALLERY_INTRO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {GALLERY.map((item) => (
              <figure
                key={item.id}
                className="card group overflow-hidden hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-cream-100">
                  <div
                    className="dot-grid pointer-events-none absolute inset-0 opacity-40"
                    aria-hidden="true"
                  />
                  {item.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.image}
                      alt={item.caption}
                      loading="lazy"
                      className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <FruitArt
                      art={item.art}
                      title={item.caption}
                      className="relative h-[76%] w-[76%] transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  )}
                </div>
                <figcaption className="px-5 py-4 text-sm font-medium text-ink-700 sm:px-6 sm:py-5">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            title="Come and see the fruit yourself"
            subtitle="The best way to judge a lot is to stand in front of it. Visit us at the market any morning — we are happy to show you what has just arrived."
          />
          <div className="mt-8 text-center">
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-ink-600">{ADDRESS_ONE_LINE}</p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7 w-full sm:w-auto"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
