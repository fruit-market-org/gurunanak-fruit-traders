import { COMPANY } from '@/constants/site';

/* ------------------------------------------------------------------ *
 *  Brand mark: a rounded crimson badge holding a stylised fruit with
 *  a leaf, drawn from the negative space of a "G". Pairs with a serif
 *  wordmark. Kept as inline SVG so it stays crisp at every size.
 * ------------------------------------------------------------------ */

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gft-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8333A" />
          <stop offset="100%" stopColor="#8B1A20" />
        </linearGradient>
        <linearGradient id="gft-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8FC5A2" />
          <stop offset="100%" stopColor="#2F7D4F" />
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#gft-badge)" />
      <rect x="2" y="2" width="60" height="60" rx="18" fill="none" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* Fruit body formed as an open "G" */}
      <path
        d="M44.5 22.2a15.5 15.5 0 1 0 2.6 15.1H33.8v-6.6h20.4"
        fill="none"
        stroke="#FFF6EC"
        strokeWidth="6.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Leaf on the stem */}
      <path d="M46 19.4c1.4-4.8 5.2-7.6 11-8-0.6 5.8-4.6 9-11 8Z" fill="url(#gft-leaf)" />
      <path d="M46 19.4c3-2.4 6-4 9.6-5" stroke="#F1F8F3" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Logo({
  className = '',
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoMark className={compact ? 'h-9 w-9 shrink-0' : 'h-10 w-10 shrink-0 sm:h-11 sm:w-11'} />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[0.95rem] font-bold tracking-tight text-ink-900 sm:text-lg">
          Gurunanak
        </span>
        <span className="mt-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-brand-500 sm:text-[0.63rem] sm:tracking-[0.24em]">
          Fruit Traders
        </span>
      </span>
      <span className="sr-only">{COMPANY.name}</span>
    </span>
  );
}
