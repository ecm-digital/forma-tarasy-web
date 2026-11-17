import { HERO_STATS } from '../data/site';
import { trackEvent } from '../lib/firebase';

export function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] overflow-hidden bg-forest text-cream">
      <img
        src="/images/hero-v30.jpg"
        alt="Mały ogród szeregowca ze strefą kawową"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pt-28 pb-28 sm:px-5 md:px-8 md:pt-40 md:pb-20">
        <p className="reveal text-[11px] tracking-[0.22em] text-cream/85 uppercase sm:text-[12px] sm:tracking-[0.32em]">
          Tarasy i ogrody · Warszawa i okolice
        </p>
        <h1 className="reveal mt-4 max-w-4xl font-display text-[clamp(2.75rem,12vw,7rem)] leading-[0.9] font-medium tracking-tight text-cream drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:mt-5">
          Tarasy i ogrody
          <br />
          <em className="italic">na lata</em>
        </h1>

        <div className="reveal mt-6 max-w-lg space-y-6 md:mt-10 md:space-y-8">
          <p className="text-[15px] leading-relaxed text-cream/90 md:text-lg">
            Projektujemy i budujemy tarasy (kompozyt, drewno, gres) oraz ogrody w Warszawie i
            okolicach — z bezpłatną wizją lokalną i wyceną w 48 godzin.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="#wycena"
              className="bg-cream px-5 py-3.5 text-center text-[13px] tracking-[0.16em] text-ink uppercase transition hover:bg-sand"
              onClick={() => trackEvent('click_cta', { place: 'hero', action: 'quick_quote' })}
            >
              Szybka wycena
            </a>
            <div className="grid grid-cols-2 gap-2.5 sm:contents">
              <a
                href="#cennik"
                className="border border-cream/80 px-4 py-3.5 text-center text-[12px] tracking-[0.12em] uppercase transition hover:bg-cream hover:text-ink sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
                onClick={() => trackEvent('click_cta', { place: 'hero', action: 'pack' })}
              >
                Oferta i pakiety
              </a>
              <a
                href="#realizacje"
                className="border border-cream/40 px-4 py-3.5 text-center text-[12px] tracking-[0.12em] text-cream/85 uppercase transition hover:border-cream hover:text-cream sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
                onClick={() => trackEvent('click_cta', { place: 'hero', action: 'case' })}
              >
                Realizacje
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="Dlaczego FORMA" className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line md:grid-cols-4">
        {HERO_STATS.map((item) => (
          <div key={item.label} className="bg-cream px-4 py-5 sm:px-5 sm:py-7 md:px-8 md:py-9">
            <p className="font-display text-2xl tracking-tight text-forest sm:text-3xl md:text-4xl">
              {item.value}
            </p>
            <p className="mt-1.5 text-[10px] leading-snug tracking-[0.12em] text-ink/55 uppercase sm:mt-2 sm:text-[12px] sm:tracking-[0.14em]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
