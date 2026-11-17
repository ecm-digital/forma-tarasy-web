import { useEffect, useState, type FormEvent } from 'react';
import { BRAND, NAV_LINKS, WHATSAPP_DEFAULT } from '../data/site';
import { submitLead, trackEvent } from '../lib/firebase';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  location: '',
  area: '',
  scope: 'taras-i-ogrod',
  timing: 'jak-najszybciej',
  message: '',
  consent: false,
};

const PACK_PREFILL = {
  location: 'Lazurowa / Bemowo',
  area: '20–40 m²',
  scope: 'pakiet-szeregowiec',
  message: 'Interesuje mnie pakiet szeregowiec 20–40 m².',
};

function formatMailtoBody(form: typeof INITIAL_FORM) {
  return [
    `Imię: ${form.name}`,
    `Telefon: ${form.phone}`,
    `E-mail: ${form.email || '—'}`,
    `Lokalizacja: ${form.location}`,
    `Metraż: ${form.area || '—'}`,
    `Zakres: ${form.scope}`,
    `Termin: ${form.timing}`,
    '',
    form.message,
  ].join('\n');
}

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fallbackNote, setFallbackNote] = useState('');
  const [leadRef, setLeadRef] = useState('');

  useEffect(() => {
    const checkPackPrefill = () => {
      if (
        (window.location.hash === '#pakiet' || window.location.hash === '#kontakt') &&
        (sessionStorage.getItem('forma-pack') === '1' || window.location.hash === '#pakiet')
      ) {
        setForm((prev) => ({ ...prev, ...PACK_PREFILL }));
        sessionStorage.setItem('forma-pack', '1');
      }
    };
    checkPackPrefill();
    window.addEventListener('hashchange', checkPackPrefill);
    return () => window.removeEventListener('hashchange', checkPackPrefill);
  }, []);

  function updateField<K extends keyof typeof INITIAL_FORM>(
    key: K,
    value: (typeof INITIAL_FORM)[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFallbackNote('');

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      location: form.location.trim(),
      area: form.area.trim(),
      scope: form.scope,
      timing: form.timing,
      message: form.message.trim(),
      source: 'website-form',
    };

    try {
      const id = await submitLead(payload);
      setLeadRef(id);
      setSent(true);
    } catch {
      await trackEvent('lead_fallback_mailto', { scope: form.scope });
      const subject = encodeURIComponent(`Wycena: ${form.scope} · ${form.location || 'Warszawa'}`);
      const body = encodeURIComponent(formatMailtoBody(form));
      window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
      setFallbackNote(
        'Zapis online niedostępny — otworzyliśmy e-mail. Możecie też napisać na WhatsApp.',
      );
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="bg-cream pb-8 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[12px] tracking-[0.28em] text-sage uppercase">Kontakt</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Opowiedzcie o działce.
          </h2>
          <p className="mt-6 max-w-md text-ink/70">
            Im więcej szczegółów — dzielnica, metraż, zdjęcia — tym szybsza i celniejsza wycena.{' '}
            {BRAND.response}
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-ink/45">Telefon</dt>
              <dd className="mt-1">
                <a
                  href={BRAND.phoneHref}
                  className="text-lg hover:text-moss"
                  onClick={() => trackEvent('click_phone', { place: 'contact' })}
                >
                  {BRAND.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/45">WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-moss"
                  onClick={() => trackEvent('click_whatsapp', { place: 'contact' })}
                >
                  Wyślij zdjęcia działki
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/45">E-mail</dt>
              <dd className="mt-1">
                <a href={`mailto:${BRAND.email}`} className="text-lg hover:text-moss">
                  {BRAND.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink/45">Teren</dt>
              <dd className="mt-1 text-lg">{BRAND.city}</dd>
            </div>
            <div>
              <dt className="text-ink/45">Godziny</dt>
              <dd className="mt-1 text-lg">{BRAND.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-sand/70 p-6 md:col-span-7 md:p-10">
          {sent ? (
            <div className="flex min-h-80 flex-col justify-center">
              <p className="font-display text-4xl">Dziękujemy.</p>
              <p className="mt-4 max-w-md text-ink/70">
                {leadRef
                  ? 'Zapytanie zapisane. Oddzwonimy z kolejnym krokiem — zwykle jeszcze dziś.'
                  : 'Zapytanie przygotowane. Jeśli mail się nie otworzył, napiszcie na WhatsApp.'}
              </p>
              {fallbackNote ? (
                <p className="mt-3 max-w-md text-sm text-moss">{fallbackNote}</p>
              ) : null}
              {leadRef ? (
                <p className="mt-2 text-xs tracking-wide text-ink/40">Ref: {leadRef.slice(0, 8)}</p>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1f5c3a] px-5 py-3 text-[13px] tracking-[0.16em] text-cream uppercase"
                  onClick={() => trackEvent('click_whatsapp', { place: 'thanks' })}
                >
                  Doślij zdjęcia na WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setLeadRef('');
                    setFallbackNote('');
                    setForm(INITIAL_FORM);
                  }}
                  className="border border-ink px-5 py-3 text-[13px] tracking-[0.16em] uppercase"
                >
                  Nowe zapytanie
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm md:col-span-1">
                <span>Imię i nazwisko *</span>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 transition outline-none focus:border-ink"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span>Telefon *</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 transition outline-none focus:border-ink"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span>E-mail</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 transition outline-none focus:border-ink"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span>Lokalizacja / dzielnica *</span>
                <input
                  name="location"
                  required
                  placeholder="np. Lazurowa / Bemowo"
                  value={form.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 transition outline-none focus:border-ink"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span>Metraż (ok.)</span>
                <input
                  name="area"
                  placeholder="np. 40 m² taras / 200 m² ogród"
                  value={form.area}
                  onChange={(e) => updateField('area', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 transition outline-none focus:border-ink"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span>Zakres</span>
                <select
                  name="scope"
                  value={form.scope}
                  onChange={(e) => updateField('scope', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 outline-none focus:border-ink"
                >
                  <option value="pakiet-szeregowiec">Pakiet szeregowiec 20–40 m²</option>
                  <option value="taras-i-ogrod">Taras i ogród</option>
                  <option value="taras">Tylko taras</option>
                  <option value="ogrod">Tylko ogród</option>
                  <option value="nawierzchnie">Nawierzchnie</option>
                  <option value="pielegnacja">Pielęgnacja</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm md:col-span-2">
                <span>Kiedy chcecie ruszać?</span>
                <select
                  name="timing"
                  value={form.timing}
                  onChange={(e) => updateField('timing', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 outline-none focus:border-ink"
                >
                  <option value="jak-najszybciej">Jak najszybciej</option>
                  <option value="ten-sezon">W tym sezonie</option>
                  <option value="nastepny-sezon">Na następny sezon</option>
                  <option value="tylko-wycena">Na razie tylko wycena</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm md:col-span-2">
                <span>Wiadomość *</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Co chcecie zrobić? Czy macie zdjęcia? Preferowany materiał?"
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="border-b border-ink/20 bg-transparent py-3 outline-none focus:border-ink"
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-ink/70 md:col-span-2">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => updateField('consent', e.target.checked)}
                  className="mt-1"
                />
                <span>
                  Wyrażam zgodę na kontakt w sprawie wyceny tarasu lub ogrodu. Dane używamy
                  wyłącznie do odpowiedzi na zapytanie.
                </span>
              </label>

              <div className="flex flex-wrap gap-3 md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-ink px-6 py-4 text-[13px] tracking-[0.16em] text-cream uppercase transition hover:bg-forest disabled:opacity-60"
                >
                  {submitting ? 'Wysyłanie…' : 'Wyślij zapytanie'}
                </button>
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-ink px-6 py-4 text-[13px] tracking-[0.16em] uppercase transition hover:bg-ink hover:text-cream"
                  onClick={() => trackEvent('click_whatsapp', { place: 'form_alt' })}
                >
                  Wolę WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-sm tracking-[0.28em]">{BRAND.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink/55">
            {BRAND.tagline}. Projekt, realizacja i pielęgnacja przestrzeni zewnętrznych.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-line px-5 py-6 text-xs text-ink/40 md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. Wszelkie prawa zastrzeżone.
        </p>
        <p>
          <a href="#kontakt" className="hover:text-ink">
            Umów wycenę
          </a>{' '}
          · Lazurowa · Bemowo · Warszawa
        </p>
      </div>
    </footer>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-cream/95 px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={BRAND.phoneHref}
          className="flex min-h-12 items-center justify-center bg-ink px-3 py-3 text-[12px] tracking-[0.14em] text-cream uppercase"
          onClick={() => trackEvent('click_phone', { place: 'sticky' })}
        >
          Zadzwoń
        </a>
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center bg-[#1f5c3a] px-3 py-3 text-[12px] tracking-[0.14em] text-cream uppercase"
          onClick={() => trackEvent('click_whatsapp', { place: 'sticky' })}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

const EXIT_SEEN_KEY = 'forma-exit-seen';

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      sessionStorage.getItem(EXIT_SEEN_KEY) === '1' ||
      window.matchMedia('(max-width: 767px)').matches
    ) {
      return;
    }

    let armed = false;
    const timer = window.setTimeout(() => {
      armed = true;
    }, 12000);

    const onMouseOut = (e: MouseEvent) => {
      if (!armed || e.clientY > 12) return;
      sessionStorage.setItem(EXIT_SEEN_KEY, '1');
      setOpen(true);
      trackEvent('exit_intent_shown', {});
      window.removeEventListener('mouseout', onMouseOut);
    };

    window.addEventListener('mouseout', onMouseOut);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/55 p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
    >
      <div className="relative w-full max-w-md bg-cream p-8 shadow-2xl">
        <button
          type="button"
          className="absolute top-3 right-4 text-2xl leading-none text-ink/40 hover:text-ink"
          aria-label="Zamknij"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <p className="text-[12px] tracking-[0.22em] text-sage uppercase">Zanim wyjdziesz</p>
        <h2 id="exit-title" className="mt-3 font-display text-3xl leading-tight">
          Wyślijcie dwa zdjęcia działki — oddzwonimy jeszcze dziś.
        </h2>
        <p className="mt-4 text-sm text-ink/70">
          WhatsApp jest najszybszy. Metraż i dzielnica wystarczą na pierwszy krok.
        </p>
        <div className="mt-7 flex flex-col gap-2">
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="bg-[#1f5c3a] px-5 py-3 text-center text-[13px] tracking-[0.14em] text-cream uppercase"
            onClick={() => {
              trackEvent('click_whatsapp', { place: 'exit_intent' });
              setOpen(false);
            }}
          >
            Otwórz WhatsApp
          </a>
          <button
            type="button"
            className="px-5 py-3 text-[12px] tracking-[0.14em] text-ink/50 uppercase hover:text-ink"
            onClick={() => setOpen(false)}
          >
            Nie teraz
          </button>
        </div>
      </div>
    </div>
  );
}
