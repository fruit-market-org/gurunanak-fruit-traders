import Link from 'next/link';
import FruitArt from '@/components/FruitArt';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import CtaBand from '@/components/CtaBand';
import { ArrowIcon, CheckIcon, Icon, WhatsAppIcon } from '@/components/Icons';
import {
  CLIENT_TYPES,
  COMPANY,
  HERO,
  HIGHLIGHTS,
  HISTORY_INTRO,
  PRODUCTS,
  RANGE_CATEGORIES,
  STATS,
  VALUES,
  whatsappLink,
} from '@/constants/site';

const FEATURED = PRODUCTS.slice(0, 8);

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-white">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-leaf-50 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="animate-fade-up lg:col-span-6 xl:col-span-6">
            <span className="eyebrow">{HERO.eyebrow}</span>
            <h1 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {HERO.title}{' '}
              <span className="text-brand-500">{HERO.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {HERO.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {HERO.primaryCta.label}
              </a>
              <Link href={HERO.secondaryCta.href} className="btn-ghost w-full sm:w-auto">
                {HERO.secondaryCta.label}
                <ArrowIcon />
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink-100 pt-8 sm:grid-cols-4 sm:gap-x-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-ink-500 sm:text-[0.8rem]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Illustrated fruit cluster */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
              <div
                className="absolute inset-[8%] rounded-full bg-gradient-to-br from-cream-100 to-cream-200"
                aria-hidden="true"
              />
              <div
                className="absolute inset-[8%] rounded-full border border-ink-100"
                aria-hidden="true"
              />
              <FruitArt
                art="mango"
                title="Mango"
                className="absolute left-[6%] top-[4%] w-[48%] drop-shadow-sm"
              />
              <FruitArt
                art="pomegranate"
                title="Pomegranate"
                className="absolute right-[2%] top-[18%] w-[40%] animate-float drop-shadow-sm"
              />
              <FruitArt
                art="grapes"
                title="Grapes"
                className="absolute bottom-[2%] left-[16%] w-[38%] drop-shadow-sm"
              />
              <FruitArt
                art="orange"
                title="Orange"
                className="absolute bottom-[10%] right-[8%] w-[34%] drop-shadow-sm"
              />
              <FruitArt
                art="strawberry"
                title="Strawberry"
                className="absolute left-[0%] top-[44%] w-[26%] drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            eyebrow="Why traders buy from us"
            title="Thirty years of getting the basics right"
            subtitle="No complicated promises — just good fruit, graded honestly and sent out on time, morning after morning."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="card h-full p-6 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Featured products ---------------- */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Our fruits"
              title="The complete seasonal range"
              subtitle="Whatever is at its best this month, we have it on the floor — and if it is not, we will get it."
            />
            <Link href="/products" className="btn-ghost shrink-0 self-start sm:self-auto">
              View all fruits
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {FEATURED.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Seasons ---------------- */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            eyebrow="Through the year"
            title="A calendar built around the market"
            subtitle="We buy to the season, so you are never sold fruit that has been sitting in storage waiting for a buyer."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {RANGE_CATEGORIES.map((cat) => (
              <div key={cat.title} className="card h-full p-6 sm:p-7">
                <h3 className="text-lg font-bold">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{cat.blurb}</p>
                <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Story strip ---------------- */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
              A family stall at the New Fruit Market, since {COMPANY.sinceYear}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{HISTORY_INTRO}</p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((value) => (
                <li key={value.title} className="rounded-2xl border border-ink-100 bg-cream-50 p-5">
                  <h3 className="text-sm font-bold text-ink-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{value.body}</p>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-ghost mt-8">
              More about us
              <ArrowIcon />
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {(['watermelon', 'banana', 'kiwi', 'pineapple'] as const).map((art, i) => (
                <div
                  key={art}
                  className={`card flex aspect-square items-center justify-center bg-cream-100 p-5 ${
                    i % 2 === 1 ? 'sm:translate-y-6' : ''
                  }`}
                >
                  <FruitArt art={art} className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Who we serve ---------------- */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            eyebrow="Who we supply"
            title="From the corner fruit shop to the banquet kitchen"
            subtitle="If you buy fruit in quantity, we have almost certainly supplied someone like you."
          />
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3">
            {CLIENT_TYPES.map((type) => (
              <li
                key={type}
                className="rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 sm:px-5"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
