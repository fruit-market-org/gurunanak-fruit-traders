import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import FruitArt from '@/components/FruitArt';
import { PhoneIcon, WhatsAppIcon } from '@/components/Icons';
import {
  ADDRESS_ONE_LINE,
  COMPANY,
  HISTORY_INTRO,
  MILESTONES,
  STATS,
  TEAM,
  VALUES,
  YEARS_OF_EXPERIENCE,
  whatsappLink,
} from '@/constants/site';

export const metadata: Metadata = {
  title: 'About us',
  description: `${COMPANY.name} has traded seasonal fruit from the New Fruit Market on Naroda Road, Ahmedabad since ${COMPANY.sinceYear}. Meet the family behind the stall.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title={`Fruit merchants on Naroda Road since ${COMPANY.sinceYear}`}
        subtitle={`${YEARS_OF_EXPERIENCE} years at the same market, run by the same family, buying fruit the same careful way.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
              Built one crate at a time
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{HISTORY_INTRO}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              {COMPANY.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              You will find us at {ADDRESS_ONE_LINE} — the same address we have traded from since the
              beginning. Come early; the market does its real business before the city wakes up.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-100 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-ink-500">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="card overflow-hidden bg-cream-100 p-8 sm:p-10">
              <div className="grid grid-cols-2 gap-5">
                {(['mango', 'pomegranate', 'grapes', 'guava'] as const).map((art) => (
                  <FruitArt key={art} art={art} className="w-full" />
                ))}
              </div>
              <p className="mt-8 border-t border-ink-200 pt-6 text-center font-display text-lg text-ink-800">
                {COMPANY.nameGujarati}
              </p>
              <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                {COMPANY.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            eyebrow="Milestones"
            title="How the business grew"
            subtitle="Steady steps rather than big leaps — which is rather how the fruit trade works."
          />

          <ol className="mx-auto mt-12 max-w-3xl space-y-0 lg:mt-16">
            {MILESTONES.map((m, i) => (
              <li key={m.year} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-xs font-bold text-brand-600 sm:h-12 sm:w-12 sm:text-sm">
                    {i + 1}
                  </span>
                  {i < MILESTONES.length - 1 ? (
                    <span className="mt-2 w-px flex-1 bg-ink-200" aria-hidden="true" />
                  ) : null}
                </div>
                <div className="flex-1 pb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">
                    {m.year}
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold sm:text-xl">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What we stand by"
            title="Four things we do not compromise on"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {VALUES.map((value, i) => (
              <div key={value.title} className="card h-full p-6 sm:p-7">
                <span className="font-display text-3xl font-bold text-brand-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            eyebrow="The partners"
            title="Speak to the people who buy the fruit"
            subtitle="There is no call centre here. Ring any of us and you are talking to someone who was on the market floor this morning."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3 lg:gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="card h-full p-6 text-center sm:p-7">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 font-display text-xl font-bold text-brand-500">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <h3 className="mt-5 text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500">
                  {member.role}
                </p>
                <a
                  href={`tel:${member.phoneTel}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {member.phoneDisplay}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start a WhatsApp enquiry
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
