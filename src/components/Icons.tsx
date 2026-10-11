import type { IconName } from '@/constants/site';
import type { JSX, SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const PATHS: Record<IconName, JSX.Element> = {
  basket: (
    <>
      <path d="M4 9h16l-1.4 9.3A2 2 0 0 1 16.6 20H7.4a2 2 0 0 1-2-1.7L4 9Z" />
      <path d="M8.5 9 11 3.5M15.5 9 13 3.5M9.5 13v3M14.5 13v3" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-14 16-15 1 11-5 16-12 16H4Z" />
      <path d="M4 20c3-5 7-8 12-10" />
    </>
  ),
  handshake: (
    <>
      <path d="m8 12 3 3a1.6 1.6 0 0 0 2.3 0l4.2-4.2" />
      <path d="M3 9.5 7 6h3.5L13 8l-3 2.2L8 9" />
      <path d="M21 9.5 17 6h-3.5" />
      <path d="M3 9.5v5l3.5 3.5M21 9.5v5l-3.5 3.5" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 8h14M5 8 2 14h6L5 8ZM19 8l-3 6h6l-3-6Z" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6v3H9zM7 5.5H5.5A1.5 1.5 0 0 0 4 7v12a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19V7a1.5 1.5 0 0 0-1.5-1.5H17" />
      <path d="M8 12h8M8 16h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M8 14h3" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9L12 3Z" />
      <path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="9" width="17" height="11.5" rx="1.5" />
      <path d="M2.5 9h19v3.5h-19zM12 9v11.5" />
      <path d="M12 9S10.5 4 8 4a2 2 0 0 0 0 5M12 9s1.5-5 4-5a2 2 0 0 1 0 5" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12.5c0 4-3.8 7-8.5 7-1 0-2-.15-2.9-.42L4 20.5l1.5-3.6A6.9 6.9 0 0 1 3.5 12.5c0-4 3.8-7 8.5-7s8.5 3 8.5 7Z" />
      <path d="M8.5 12h7M8.5 9h4" />
    </>
  ),
};

export function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {PATHS[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.3 1.27.49 1.7.63.71.22 1.36.19 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.17 6.42 2.17 11.86c0 1.74.46 3.44 1.33 4.94L2 22.5l5.86-1.53a9.85 9.85 0 0 0 4.18.93h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.64-1.02-5.11-2.89-6.98A9.8 9.8 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2a8.14 8.14 0 0 1 5.8 2.4 8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.2-8.2 8.2Z" />
    </svg>
  );
}

export function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg {...base} strokeWidth={1.9} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function PinIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg {...base} strokeWidth={2} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
