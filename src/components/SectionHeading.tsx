type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: Props) {
  const centred = align === 'center';
  return (
    <div
      className={`${centred ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'} ${className}`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          eyebrow ? 'mt-4' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
