import { useEffect, useState } from 'react';
import { BRAND, NAV_LINKS, WHATSAPP_DEFAULT } from '../data/site';
import { trackEvent } from '../lib/firebase';

const month = new Date().getMonth();
const isPeakSeason = month >= 2 && month <= 9;

function SeasonBanner() {
  return (
    <aside
      aria-label="Informacja o sezonie i terminach"
      className="border-b border-cream/15 bg-forest px-4 py-2.5 text-center text-[12px] font-medium tracking-[0.08em] text-cream uppercase sm:px-6 sm:py-3 sm:text-[13px] sm:tracking-[0.1em] md:text-[14px]"
    >
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="inline-block h-2 w-2 rounded-full bg-brass" />
        <span className="md:hidden">
          Projekt zimą · start wiosna 2027.{' '}
        </span>
        <span className="hidden md:inline">
          Zima to idealny czas na projekt. Start realizacji: wiosna 2027 — zarezerwujcie termin wizji w Warszawie.{' '}
        </span>
        <a
          href="#wycena"
          className="ml-1 inline-flex items-center gap-1 font-semibold text-brass underline decoration-brass underline-offset-4 transition hover:text-cream"
          onClick={() => trackEvent('click_season_banner', { season: 'winter_2027' })}
        >
          Szybka wycena &rarr;
        </a>
      </div>
    </aside>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <SeasonBanner />
      <header
        className={`transition-colors duration-500 ${
          scrolled || menuOpen ? 'nav-blur border-b border-line/70' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <a href="#start" className="relative z-10 text-sm font-medium tracking-[0.28em]">
            <span className={scrolled || menuOpen ? 'text-ink' : 'text-cream'}>{BRAND.name}</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] tracking-[0.16em] uppercase transition-opacity hover:opacity-70 ${
                  scrolled ? 'text-ink' : 'text-cream'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className={`border px-4 py-2 text-[13px] tracking-[0.16em] uppercase transition-colors ${
                scrolled
                  ? 'border-ink text-ink hover:bg-ink hover:text-cream'
                  : 'border-cream/70 text-cream hover:bg-cream hover:text-ink'
              }`}
            >
              Wycena
            </a>
          </nav>

          <button
            type="button"
            className={`relative z-10 flex h-11 w-11 items-center justify-center lg:hidden ${
              scrolled || menuOpen ? 'text-ink' : 'text-cream'
            }`}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="flex w-6 flex-col gap-1.5">
              <span className="block h-px w-full bg-current" />
              <span className={`block h-px w-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className="block h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream lg:hidden">
          <div className="flex h-14 items-center justify-between border-b border-line px-4">
            <span className="text-sm font-medium tracking-[0.28em] text-ink">{BRAND.name}</span>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-2xl text-ink"
              aria-label="Zamknij menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 font-display text-3xl text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 flex flex-col gap-3 pb-8">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center border border-ink px-5 py-3.5 text-sm tracking-[0.16em] uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Umów wycenę
              </a>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-[#1f5c3a] px-5 py-3.5 text-sm tracking-[0.16em] uppercase text-cream"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
