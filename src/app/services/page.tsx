import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import { CheckIcon, Icon, WhatsAppIcon } from '@/components/Icons';
import { CLIENT_TYPES, COMPANY, FAQS, SERVICES, whatsappLink } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Services',
  description: `Wholesale supply, grading, bulk and contract orders, season booking, packing and despatch from ${COMPANY.name}, Ahmedabad.`,
};

const PROCESS = [
  {
    step: 'Tell us what you need',
    body: 'Send the fruit, grade and quantity over WhatsApp, along with the date you need it by.',
  },
  {
    step: 'We quote the day’s rate',
    body: 'Fruit prices move daily, so you get the live market rate along with a note on what is actually good right now.',
  },
  {
    step: 'We pick and grade',
    body: 'Your lot is sorted by size, colour and ripeness, then packed in crates, boxes or trays to suit the journey.',
  },
  {
    step: 'Same-day loading',
    body: 'We load from the stall and help arrange transport, so the fruit reaches you while it is still at its best.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="More than a fruit stall"
        subtitle="Sourcing, grading, packing, booking and despatch — everything that has to happen between the orchard and your counter."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Services grid */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="Built around how the trade actually works"
            subtitle="Every one of these came out of something a customer asked us for. Nothing here is theoretical."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {SERVICES.map((service) => (
              <div key={service.title} className="card h-full p-6 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-50 text-leaf-500">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            eyebrow="How an order works"
            title="Four steps, one morning"
            subtitle="Most orders placed before the market closes are loaded the very same day."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((item, i) => (
              <div key={item.step} className="relative rounded-3xl border border-ink-100 bg-white p-6 sm:p-7">
                <span className="font-display text-4xl font-bold text-brand-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-base font-bold leading-snug sm:text-lg">{item.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Who we supply</span>
            <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
              Buyers of every size, across Ahmedabad
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              A single crate for a pushcart or a standing weekly order for a banquet kitchen — the
              fruit is graded the same way and the price is quoted the same way.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Discuss your requirement
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {CLIENT_TYPES.map((type) => (
              <li
                key={type}
                className="flex items-start gap-2.5 rounded-2xl border border-ink-100 bg-cream-50 px-4 py-3.5 text-sm font-medium text-ink-700"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                {type}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading eyebrow="Questions" title="Things buyers usually ask" />

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                className="group card overflow-hidden p-0"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-ink-900 sm:p-6 sm:text-lg">
                  {faq.q}
                  <span
                    className="relative mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 rounded bg-current" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6 sm:pb-6 sm:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
