import { WhatsAppIcon } from './Icons';
import { whatsappLink } from '@/constants/site';

/* A single, always-available WhatsApp entry point. Sized down on
   phones so it never crowds the content. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center
                 rounded-full bg-[#1FA855] text-white shadow-lift transition-transform duration-200
                 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
