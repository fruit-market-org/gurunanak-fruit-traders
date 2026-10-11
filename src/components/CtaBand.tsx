import { WhatsAppIcon } from './Icons';
import { CONTACT, CTA, whatsappLink } from '@/constants/site';

export default function CtaBand() {
  return (
    <section id="whatsapp" className="section scroll-mt-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center sm:rounded-4xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-leaf-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
              {CTA.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{CTA.body}</p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {CTA.buttonLabel}
              </a>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="btn w-full border border-white/20 bg-white/5 text-white
                           hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
