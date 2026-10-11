import Link from 'next/link';
import Logo from './Logo';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons';
import {
  COMPANY,
  CONTACT,
  MAPS_LINK,
  NAV_LINKS,
  RANGE_CATEGORIES,
  whatsappLink,
} from '@/constants/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-600">
              {COMPANY.strapline}
            </p>
            <p className="mt-4 font-display text-base text-ink-800">{COMPANY.nameGujarati}</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp us
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-600 transition-colors hover:text-brand-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Range */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900">
              Our range
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {RANGE_CATEGORIES.map((cat) => (
                <li key={cat.title}>
                  <Link
                    href="/products"
                    className="text-ink-600 transition-colors hover:text-brand-500"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900">
              Reach us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-600">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors hover:text-brand-500"
                >
                  {CONTACT.address.line1},<br />
                  {CONTACT.address.line2},<br />
                  {CONTACT.address.city} – {CONTACT.address.pincode}, {CONTACT.address.state}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="transition-colors hover:text-brand-500"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-brand-500"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span className="leading-relaxed">
                  {CONTACT.businessHours.map((slot) => (
                    <span key={slot.days} className="block">
                      {slot.days}: {slot.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-100 pt-7 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            {COMPANY.tagline} · Established {COMPANY.sinceYear} · Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
