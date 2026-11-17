import { useEffect, useState } from 'react';
import { ABOUT_STATS, BRAND, PROJECTS, WHATSAPP_DEFAULT } from '../data/site';
import { trackEvent } from '../lib/firebase';

export function About() {
  return (
    <section id="o-nas" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[12px] tracking-[0.28em] text-sage uppercase">O nas</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Nie robimy ogrodów z katalogu.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg leading-relaxed text-ink/80">
            FORMA łączy projekt ogrodu z wykonaniem tarasu. Zaczynamy od światła, spadków i tego,
            jak naprawdę żyjecie — dopiero potem wybieramy deskę, kamień i rośliny.
          </p>
          <p className="mt-5 leading-relaxed text-ink/70">
            Baza to Lazurowa, Bemowo i zachodnia Warszawa. Jedna ekipa prowadzi temat od pierwszej
            rozmowy do sezonowej pielęgnacji, więc nic nie ginie między projektem a realizacją.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-3 px-5 pb-20 md:grid-cols-12 md:px-8 md:pb-28">
        <figure className="relative overflow-hidden md:col-span-8 md:h-[560px]">
          <img
            src="/images/about.jpg"
            alt="Jadalnia na tarasie wśród zieleni"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </figure>
        <div className="flex flex-col justify-between bg-forest p-8 text-cream md:col-span-4 md:p-10">
          {ABOUT_STATS.map((item) => (
            <div
              key={item.label}
              className="border-b border-cream/15 py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <p className="font-display text-5xl md:text-6xl">{item.value}</p>
              <p className="mt-2 text-sm tracking-wide text-cream/65">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const selected = PROJECTS.find((p) => p.id === selectedId);
  const gallery = selected?.gallery?.length
    ? selected.gallery
    : selected
      ? [selected.image]
      : [];

  useEffect(() => {
    if (!selectedId) return;
    setSlideIndex(0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
      if (e.key === 'ArrowRight') {
        setSlideIndex((idx) => (idx + 1) % Math.max(gallery.length, 1));
      }
      if (e.key === 'ArrowLeft') {
        setSlideIndex((idx) => (idx - 1 + Math.max(gallery.length, 1)) % Math.max(gallery.length, 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedId, gallery.length]);

  return (
    <section id="realizacje" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Realizacje</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Realne ogrody — od szeregowca po oczko.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">
            Przykłady realizacji dla naszych 3 pakietów: Taras Start, Strefa Relaksu z pergolą oraz
            Ogród Pod Klucz — obok bieżących projektów w Warszawie i okolicach.
          </p>
        </div>

        <div className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const photos = project.gallery?.length ? project.gallery : [project.image];
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={`group text-left ${project.featured ? 'md:col-span-2' : ''}`}
              >
                {project.featured && photos.length > 1 ? (
                  <div className="relative grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-4 md:gap-3">
                    {project.packageBadge ? (
                      <span className="absolute top-3 left-3 z-10 max-w-[calc(100%-1.5rem)] bg-forest text-cream px-2.5 py-1.5 text-[10px] tracking-[0.14em] uppercase sm:top-4 sm:left-4 sm:px-3 sm:text-[11px] sm:tracking-[0.18em] shadow-sm font-medium">
                        {project.packageBadge}
                      </span>
                    ) : (
                      <span className="absolute top-3 left-3 z-10 max-w-[calc(100%-1.5rem)] bg-cream px-2.5 py-1.5 text-[10px] tracking-[0.14em] text-ink uppercase sm:top-4 sm:left-4 sm:px-3 sm:text-[11px] sm:tracking-[0.18em]">
                        Lazurowa · {photos.length} zdjęć
                      </span>
                    )}
                    {photos.slice(0, 4).map((src, idx) => (
                      <div
                        key={src}
                        className={`overflow-hidden ${
                          idx < 2
                            ? 'col-span-2 h-44 sm:h-56 md:col-span-2 md:h-[420px]'
                            : 'h-28 sm:h-36 md:h-48'
                        }`}
                      >
                        <img
                          src={src}
                          alt={`${project.title} — zdjęcie ${idx + 1}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative h-[340px] overflow-hidden md:h-[420px]">
                    {project.packageBadge ? (
                      <span className="absolute top-3 left-3 z-10 max-w-[calc(100%-1.5rem)] bg-forest text-cream px-2.5 py-1.5 text-[10px] tracking-[0.14em] uppercase sm:top-4 sm:left-4 sm:px-3 sm:text-[11px] sm:tracking-[0.18em] shadow-sm font-medium">
                        {project.packageBadge}
                      </span>
                    ) : null}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-5 text-cream md:p-6 md:opacity-0 md:transition md:group-hover:opacity-100">
                      <p className="text-sm tracking-wide">Zobacz realizację</p>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">
                      {project.place} · {project.type}
                      {photos.length > 1 ? ` · ${photos.length} zdjęć` : ''}
                    </p>
                  </div>
                  <p className="pt-2 text-sm tracking-wide text-sage">{project.year}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 p-0 sm:p-3 md:items-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onClick={() => setSelectedId(null)}
        >
          <article
            className="max-h-[92svh] w-full max-w-5xl overflow-y-auto bg-cream pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={gallery[slideIndex] ?? selected.image}
                alt={`${selected.title} — ${slideIndex + 1}/${gallery.length}`}
                className="h-72 w-full object-cover md:h-[28rem]"
              />
              {gallery.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Poprzednie zdjęcie"
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-cream/95 px-3 py-2 text-sm"
                    onClick={() =>
                      setSlideIndex((idx) => (idx - 1 + gallery.length) % gallery.length)
                    }
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Następne zdjęcie"
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-cream/95 px-3 py-2 text-sm"
                    onClick={() => setSlideIndex((idx) => (idx + 1) % gallery.length)}
                  >
                    →
                  </button>
                  <p className="absolute right-3 bottom-3 bg-ink/75 px-2 py-1 text-xs tracking-wide text-cream">
                    {slideIndex + 1} / {gallery.length}
                  </p>
                </>
              ) : null}
            </div>

            {gallery.length > 1 ? (
              <div className="grid grid-cols-4 gap-2 px-4 pt-3 sm:grid-cols-4 md:grid-cols-8 md:px-8">
                {gallery.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setSlideIndex(idx)}
                    className={`overflow-hidden border-2 ${
                      slideIndex === idx ? 'border-ink' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Miniatura ${idx + 1}`}
                      className="h-14 w-full object-cover md:h-16"
                    />
                  </button>
                ))}
              </div>
            ) : null}

            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[12px] tracking-[0.22em] text-sage uppercase">
                      {selected.place} · {selected.year}
                    </p>
                    {selected.packageBadge ? (
                      <span className="bg-forest px-2.5 py-0.5 text-[10px] tracking-[0.16em] text-cream uppercase font-medium">
                        {selected.packageBadge}
                      </span>
                    ) : null}
                  </div>
                  <h3 id="project-title" className="mt-2 font-display text-4xl md:text-5xl">
                    {selected.title}
                  </h3>
                  {selected.timeline ? (
                    <p className="mt-3 text-sm text-ink/55">{selected.timeline}</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="text-sm tracking-[0.16em] text-ink/60 uppercase hover:text-ink"
                >
                  Zamknij
                </button>
              </div>

              {(selected.challenge || selected.solution) && (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {selected.challenge ? (
                    <div className="bg-sand/70 p-5">
                      <p className="text-[11px] tracking-[0.2em] text-sage uppercase">Wyzwanie</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/75">
                        {selected.challenge}
                      </p>
                    </div>
                  ) : null}
                  {selected.solution ? (
                    <div className="bg-forest p-5 text-cream">
                      <p className="text-[11px] tracking-[0.2em] text-brass uppercase">Rozwiązanie</p>
                      <p className="mt-3 text-sm leading-relaxed text-cream/85">
                        {selected.solution}
                      </p>
                    </div>
                  ) : null}
                </div>
              )}

              <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-ink/75 md:text-lg">
                {selected.description.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              {selected.results?.length ? (
                <div className="mt-10">
                  <p className="text-[12px] tracking-[0.22em] text-sage uppercase">Co powstało</p>
                  <ul className="mt-4 grid gap-3 text-sm text-ink/80 md:grid-cols-2">
                    {selected.results.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-px w-4 shrink-0 bg-brass" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {(selected.plants || selected.materials) && (
                <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
                  {selected.plants?.length ? (
                    <div>
                      <p className="text-[12px] tracking-[0.22em] text-sage uppercase">Rośliny</p>
                      <ul className="mt-4 space-y-2 text-sm text-ink/80">
                        {selected.plants.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {selected.materials?.length ? (
                    <div>
                      <p className="text-[12px] tracking-[0.22em] text-sage uppercase">Materiały</p>
                      <ul className="mt-4 space-y-2 text-sm text-ink/80">
                        {selected.materials.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}

              {selected.process?.length ? (
                <div className="mt-10 border-t border-line pt-8">
                  <p className="text-[12px] tracking-[0.22em] text-sage uppercase">Przebieg</p>
                  <ol className="mt-6 grid gap-4 md:grid-cols-2">
                    {selected.process.map((step) => (
                      <li key={step.title} className="border border-line p-5">
                        <p className="font-display text-xl">{step.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm md:grid-cols-4">
                <div>
                  <dt className="text-ink/45">Zakres</dt>
                  <dd className="mt-1">{selected.type}</dd>
                </div>
                <div>
                  <dt className="text-ink/45">Powierzchnia</dt>
                  <dd className="mt-1">{selected.area}</dd>
                </div>
                <div>
                  <dt className="text-ink/45">Lokalizacja</dt>
                  <dd className="mt-1">{selected.place}</dd>
                </div>
                <div>
                  <dt className="text-ink/45">Rok</dt>
                  <dd className="mt-1">{selected.year}</dd>
                </div>
              </dl>

              {selected.budgetNote ? (
                <p className="mt-4 text-sm text-ink/50">{selected.budgetNote}</p>
              ) : null}
              {selected.photoNote ? (
                <p className="mt-3 text-xs leading-relaxed text-ink/40">{selected.photoNote}</p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  onClick={() => setSelectedId(null)}
                  className="bg-ink px-5 py-3 text-[13px] tracking-[0.16em] text-cream uppercase"
                >
                  Chcę podobny ogród
                </a>
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-ink px-5 py-3 text-[13px] tracking-[0.16em] uppercase"
                >
                  {selected.id === 'serock' ? 'Zapytaj o pielęgnację' : 'Napisz na WhatsApp'}
                </a>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}

export function LeadStrip() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
        <div className="max-w-xl">
          <p className="text-[12px] tracking-[0.28em] text-brass uppercase">Następny krok</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
            Wyślijcie zdjęcia działki — dostaniecie kolejny krok jeszcze dziś.
          </h2>
          <p className="mt-4 text-cream/70">{BRAND.response}</p>
        </div>

        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
          <a
            href="#wycena"
            className="bg-cream px-5 py-3.5 text-center text-[13px] tracking-[0.16em] text-ink uppercase transition hover:bg-sand"
            onClick={() => trackEvent('click_cta', { place: 'lead_strip', action: 'quick_quote' })}
          >
            Szybka wycena
          </a>
          <div className="grid grid-cols-2 gap-2.5 sm:contents">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="border border-cream/70 px-4 py-3.5 text-center text-[12px] tracking-[0.12em] uppercase transition hover:bg-cream hover:text-ink sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
              onClick={() => trackEvent('click_whatsapp', { place: 'lead_strip' })}
            >
              WhatsApp
            </a>
            <a
              href={BRAND.phoneHref}
              className="border border-cream/70 px-4 py-3.5 text-center text-[12px] tracking-[0.12em] uppercase transition hover:bg-cream hover:text-ink sm:px-5 sm:text-[13px] sm:tracking-[0.16em]"
              onClick={() => trackEvent('click_phone', { place: 'lead_strip' })}
            >
              Zadzwoń
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
