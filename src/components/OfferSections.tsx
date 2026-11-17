import { useMemo, useState, type ReactNode } from 'react';
import {
  BRAND,
  ESTATE_FIT,
  QUICK_QUOTE_AREAS,
  QUICK_QUOTE_PLACES,
  QUICK_QUOTE_WANTS,
  SERVICE_AREAS,
  START_CARDS,
  TOWNHOUSE_PACK,
  WHATSAPP_DEFAULT,
  WHATSAPP_PACK,
  buildWhatsAppQuoteUrl,
} from '../data/site';
import { trackEvent } from '../lib/firebase';

export function StartOffer() {
  return (
    <section id="oferta" className="border-t border-line bg-sand/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Oferta na start</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Trzy rzeczy, które skracają drogę do wyceny.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">
            {BRAND.response} Działamy głównie na {BRAND.city.split('·')[0].trim()} i zachodnim Mazowszu.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {START_CARDS.map((card) => (
            <article key={card.title} className="flex flex-col justify-between bg-cream p-7 md:p-8">
              <div>
                <h3 className="font-display text-3xl">{card.title}</h3>
                <p className="mt-4 text-ink/70">{card.text}</p>
              </div>
              <a
                href={card.href}
                className="mt-8 inline-flex w-fit border-b border-ink pb-1 text-[13px] tracking-[0.16em] uppercase transition hover:opacity-70"
                {...(card.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[12px] tracking-[0.22em] text-sage uppercase">Teren realizacji</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
              {SERVICE_AREAS.join(' · ')}
            </p>
          </div>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-[#1f5c3a] px-5 py-3 text-[13px] tracking-[0.14em] text-cream uppercase transition hover:bg-forest"
          >
            Napisz na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function TownhousePack() {
  return (
    <section id="pakiet" className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[12px] tracking-[0.28em] text-brass uppercase">{TOWNHOUSE_PACK.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            {TOWNHOUSE_PACK.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">{TOWNHOUSE_PACK.lead}</p>
          <p className="mt-8 font-display text-3xl text-cream md:text-4xl">
            {TOWNHOUSE_PACK.priceFrom}
          </p>
          <p className="mt-2 text-sm text-cream/55">{TOWNHOUSE_PACK.priceNote}</p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="#kontakt"
              className="bg-cream px-5 py-3.5 text-center text-[13px] tracking-[0.16em] text-ink uppercase transition hover:bg-sand"
              onClick={() => {
                sessionStorage.setItem('forma-pack', '1');
                trackEvent('click_cta', { place: 'townhouse_pack', action: 'form' });
              }}
            >
              Chcę ten pakiet
            </a>
            <div className="grid grid-cols-2 gap-2.5 sm:contents">
              <a
                href={WHATSAPP_PACK}
                target="_blank"
                rel="noreferrer"
                className="border border-cream/70 px-4 py-3.5 text-center text-[12px] tracking-[0.12em] uppercase transition hover:bg-cream hover:text-ink sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
                onClick={() => trackEvent('click_whatsapp', { place: 'townhouse_pack' })}
              >
                WhatsApp
              </a>
              <a
                href="#realizacje"
                className="border border-cream/40 px-4 py-3.5 text-center text-[12px] tracking-[0.12em] text-cream/80 uppercase transition hover:border-cream hover:text-cream sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
              >
                Realizacje
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:col-span-7 md:grid-cols-2">
          <div className="bg-cream/5 p-7 ring-1 ring-cream/15">
            <p className="text-[12px] tracking-[0.22em] text-brass uppercase">W pakiecie</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/85">
              {TOWNHOUSE_PACK.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream/5 p-7 ring-1 ring-cream/15">
            <p className="text-[12px] tracking-[0.22em] text-brass uppercase">Dla kogo</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/85">
              {TOWNHOUSE_PACK.constraints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex border-b border-cream/50 pb-1 text-[12px] tracking-[0.16em] text-cream/70 uppercase transition hover:border-cream hover:text-cream"
            >
              Wyślij zdjęcie działki
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EstateFit() {
  return (
    <section id="osiedle" className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Lazurowa i okolice</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            {ESTATE_FIT.title}
          </h2>
          <p className="mt-5 text-ink/70">{ESTATE_FIT.lead}</p>
          <a
            href="#wycena"
            className="mt-8 inline-flex border-b border-ink pb-1 text-[13px] tracking-[0.16em] uppercase transition hover:opacity-70"
            onClick={() => trackEvent('click_cta', { place: 'estate_fit', action: 'quick_quote' })}
          >
            Sprawdź wycenę
          </a>
        </div>

        <ul className="space-y-4 md:col-span-7">
          {ESTATE_FIT.checks.map((item, idx) => (
            <li key={item} className="flex gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
              <span className="font-display text-2xl text-brass tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="pt-1 text-base text-ink/85 md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function QuoteGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[12px] tracking-[0.2em] text-sage uppercase">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function QuoteChips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`min-h-11 px-3 py-2.5 text-left text-[12px] leading-snug tracking-[0.02em] transition sm:px-4 sm:text-[13px] sm:tracking-[0.04em] ${
            opt === value
              ? 'bg-forest text-cream'
              : 'bg-cream text-ink ring-1 ring-line hover:ring-ink/30'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function QuickQuote() {
  const [area, setArea] = useState(QUICK_QUOTE_AREAS[1]);
  const [place, setPlace] = useState(QUICK_QUOTE_PLACES[0]);
  const [want, setWant] = useState(QUICK_QUOTE_WANTS[0]);

  const whatsappUrl = useMemo(
    () => buildWhatsAppQuoteUrl({ area, place, want }),
    [area, place, want],
  );

  return (
    <section id="wycena" className="border-t border-line bg-sand/30">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] tracking-[0.28em] text-sage uppercase">30 sekund</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Szybka wycena na WhatsApp
          </h2>
          <p className="mt-5 text-ink/70">
            Wybierzcie metraż, lokalizację i zakres — otworzy się wiadomość gotowa do wysłania.
            Zdjęcia działki możecie dołączyć zaraz potem.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <div className="space-y-7 md:col-span-8">
            <QuoteGroup label="Metraż działki">
              <QuoteChips options={QUICK_QUOTE_AREAS} value={area} onChange={setArea} />
            </QuoteGroup>
            <QuoteGroup label="Lokalizacja">
              <QuoteChips options={QUICK_QUOTE_PLACES} value={place} onChange={setPlace} />
            </QuoteGroup>
            <QuoteGroup label="Czego potrzebujecie">
              <QuoteChips options={QUICK_QUOTE_WANTS} value={want} onChange={setWant} />
            </QuoteGroup>
          </div>

          <aside className="flex flex-col justify-between bg-forest p-7 text-cream md:col-span-4 md:p-8">
            <div>
              <p className="text-[12px] tracking-[0.22em] text-brass uppercase">Podgląd wiadomości</p>
              <p className="mt-5 font-display text-2xl leading-snug">
                {area} · {place}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{want}</p>
              <p className="mt-6 text-sm text-cream/60">
                {area === '20–40 m²' && (place === 'Lazurowa' || place === 'Bemowo')
                  ? 'To nasz typowy zakres — pakiet szeregowiec ok. 12–18 tys. zł.'
                  : 'Oddzwaniamy zwykle jeszcze tego samego dnia z kolejnym krokiem.'}
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-[#1f5c3a] px-5 py-3.5 text-[13px] tracking-[0.14em] text-cream uppercase transition hover:bg-moss"
              onClick={() =>
                trackEvent('click_whatsapp', {
                  place: 'quick_quote',
                  area,
                  location: place,
                  scope: want,
                })
              }
            >
              Wyślij na WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
