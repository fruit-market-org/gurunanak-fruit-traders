'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { WhatsAppIcon } from './Icons';
import { CONTACT, NAV_LINKS, whatsappLink } from '@/constants/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Close the drawer whenever the route changes. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Lock body scroll while the mobile drawer is open. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-ink-100 bg-cream-50/90 backdrop-blur-md'
          : 'border-transparent bg-cream-50'
      }`}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-3">
        <Link href="/" className="shrink-0" aria-label="Gurunanak Fruit Traders — home">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:px-4 ${
                isActive(item.href)
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-ink-600 hover:bg-cream-200 hover:text-ink-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/*
          The WhatsApp call-to-action is desktop-only by design.
          On tablet and phone widths it lives inside the drawer instead,
          so the header bar can never overflow.
        */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp hidden shrink-0 !px-5 !py-2.5 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp us
        </a>

        {/* Mobile / tablet menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                     text-ink-800 transition-colors hover:bg-cream-200 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? 'top-[7px] rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition-all duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? 'top-[7px] -rotate-45' : 'top-[14px]'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-ink-100 bg-cream-50 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-ink-700 hover:bg-cream-200'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-3 w-full"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp {CONTACT.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
