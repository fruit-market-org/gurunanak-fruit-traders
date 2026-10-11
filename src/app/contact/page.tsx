import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/Icons';
import {
  ADDRESS_ONE_LINE,
  COMPANY,
  CONTACT,
  FAQS,
  MAPS_LINK,
  TEAM,
  whatsappLink,
} from '@/constants/site';

export const metadata: Metadata = {
  title: 'Contact us',
  description: `Reach ${COMPANY.name} on WhatsApp at ${CONTACT.phoneDisplay} or visit us at ${ADDRESS_ONE_LINE}.`,
};

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.mapsQuery,
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="One message is all it takes"
        subtitle="No forms, no waiting on a reply by email. Send us a WhatsApp message with what you need and you will hear back from one of the partners directly."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      {/* Primary WhatsApp call to action */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl border border-leaf-100 bg-leaf-50 p-8 text-center sm:rounded-4xl sm:p-12">
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1FA855] text-white">
              <WhatsAppIcon className="h-8 w-8" />
            </span>
            <h2 className="mt-6 text-balance text-2xl font-bold sm:text-3xl">
              Message us on WhatsApp
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-600">
              Tell us the fruit, the quantity and the date you need it. You will get that day’s rate
              and a straight answer on availability.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 w-full text-base sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on {CONTACT.phoneDisplay}
            </a>
            <p className="mt-5 text-xs text-ink-500">
              Prefer to talk? Call{' '}
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="font-semibold text-brand-500 hover:text-brand-600"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Details + map */}
      <section className="section bg-cream-50 !pt-0">
        <div className="container grid gap-8 pt-16 sm:pt-20 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-4 lg:col-span-2">
            <div className="card p-6 sm:p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <PinIcon />
              </span>
              <h3 className="mt-4 text-base font-bold">Visit the stall</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {CONTACT.address.line1},<br />
                {CONTACT.address.line2},<br />
                {CONTACT.address.city} – {CONTACT.address.pincode},<br />
                {CONTACT.address.state}, {CONTACT.address.country}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-brand-500 link-underline hover:text-brand-600"
              >
                Get directions
              </a>
            </div>

            <div className="card p-6 sm:p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <PhoneIcon />
              </span>
              <h3 className="mt-4 text-base font-bold">Call a partner</h3>
              <ul className="mt-3 space-y-2.5">
                {TEAM.map((member) => (
                  <li key={member.name} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="text-sm text-ink-600">{member.name}</span>
                    <a
                      href={`tel:${member.phoneTel}`}
                      className="text-sm font-semibold text-ink-900 transition-colors hover:text-brand-500"
                    >
                      {member.phoneDisplay}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 sm:p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <MailIcon />
              </span>
              <h3 className="mt-4 text-base font-bold">Email</h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 block break-all text-sm text-ink-600 transition-colors hover:text-brand-500"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="card p-6 sm:p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <ClockIcon />
              </span>
              <h3 className="mt-4 text-base font-bold">Market hours</h3>
              <ul className="mt-3 space-y-2">
                {CONTACT.businessHours.map((slot) => (
                  <li key={slot.days} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="text-sm text-ink-600">{slot.days}</span>
                    <span className="text-sm font-semibold text-ink-900">{slot.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card h-full min-h-[22rem] overflow-hidden p-0">
              <iframe
                title={`Map to ${COMPANY.name}`}
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[22rem] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Before you message" title="Quick answers" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-ink-100 bg-cream-50 p-5 sm:p-6">
                <h3 className="text-sm font-bold text-ink-900 sm:text-base">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
