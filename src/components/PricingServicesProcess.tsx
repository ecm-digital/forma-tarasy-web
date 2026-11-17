import {
  BRAND,
  FAQS,
  PRICING_TIERS,
  PROCESS_STEPS,
  SERVICES,
  TESTIMONIALS,
  WHATSAPP_DEFAULT,
} from '../data/site';

export function Pricing() {
  return (
    <section id="cennik" className="border-t border-line bg-sand/50">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Widełki orientacyjne</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Orientacyjne ceny — potem dokładna wycena.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">
            Najczęściej robimy małe ogrody szeregowców przy Lazurowej i na Bemowie. Po wizycie
            dostajecie kwotę pod Waszą działkę — nie katalog.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`flex flex-col justify-between p-7 md:p-8 ${
                tier.hot ? 'bg-forest text-cream' : 'bg-cream'
              }`}
            >
              <div>
                {tier.hot ? (
                  <p className="text-[11px] tracking-[0.2em] text-brass uppercase">
                    Najczęściej wybierany · 2026
                  </p>
                ) : null}
                <h3 className={`font-display text-3xl ${tier.hot ? 'mt-2' : ''}`}>{tier.name}</h3>
                <p className={`mt-3 text-lg ${tier.hot ? 'text-cream/85' : 'text-ink/80'}`}>
                  {tier.from}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    tier.hot ? 'text-cream/70' : 'text-ink/65'
                  }`}
                >
                  {tier.blurb}
                </p>
                <ul
                  className={`mt-6 space-y-2 text-sm ${
                    tier.hot ? 'text-cream/80' : 'text-ink/75'
                  }`}
                >
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                className={`mt-8 inline-flex w-fit px-4 py-2 text-[12px] tracking-[0.16em] uppercase transition ${
                  tier.hot
                    ? 'bg-cream text-ink hover:bg-sand'
                    : 'border border-ink hover:bg-ink hover:text-cream'
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/50">
          * Orientacyjnie dla Warszawy 2026. Ostateczna cena po wizji lokalnej · {BRAND.phone} ·{' '}
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-ink"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="uslugi" className="border-t border-line bg-sand/50">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Usługi</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-6xl">
              Od konstrukcji tarasu po ostatnie nasadzenie.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">
            Możemy wejść w jeden zakres albo poprowadzić całość. Najlepsze ogrody powstają, gdy
            taras, rośliny i nawierzchnie projektuje się razem.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article key={service.id} className="group overflow-hidden bg-cream">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 text-[12px] tracking-[0.22em] text-cream">
                  {service.number}
                </span>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-3xl md:text-4xl">{service.title}</h3>
                <p className="mt-3 text-ink/70">{service.lead}</p>
                <ul className="mt-6 space-y-2 text-sm text-ink/80">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-brass" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="proces" className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[12px] tracking-[0.28em] text-brass uppercase">Proces</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
          Cztery kroki. Spokojna realizacja.
        </h2>
        <ol className="mt-16 grid gap-px bg-cream/10 md:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li key={step.number} className="bg-forest p-7 md:p-8">
              <p className="font-display text-4xl text-brass">{step.number}</p>
              <h3 className="mt-8 font-display text-2xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-sand/60">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Opinie</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-6xl">
          Po sezonie widać, czy ogród jest dobry.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure key={item.name} className="flex flex-col justify-between bg-cream p-7 md:p-8">
              <blockquote className="font-display text-2xl leading-snug text-ink/85 italic">
                „{item.quote}”
              </blockquote>
              <figcaption className="mt-10 text-sm">
                <span className="block font-medium">{item.name}</span>
                <span className="text-ink/50">{item.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Pytania</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            To, o co najczęściej pytacie przed wyceną.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="cursor-pointer list-none font-display text-2xl marker:content-none md:text-3xl [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  {item.q}
                  <span className="mt-2 text-sm tracking-[0.16em] text-sage transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
