import Link from 'next/link';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white">
      <div
        className="dot-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-50 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div className="container relative py-14 sm:py-16 lg:py-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-brand-500">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink-700">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-balance text-[2.1rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
