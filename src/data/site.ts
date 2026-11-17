export const BRAND = {
  name: 'FORMA',
  tagline: 'Tarasy i ogrody',
  phrase: 'Przestrzenie, z których korzystacie na co dzień.',
  phone: '+48 535 330 323',
  phoneHref: 'tel:+48535330323',
  phoneDigits: '48535330323',
  email: 'kontakt@formaogrody.pl',
  city: 'Warszawa · Lazurowa, Bemowo i okolice',
  hours: 'Pn–Pt 8:00–17:00 · sob. po umowie',
  response: 'Oddzwaniamy zwykle jeszcze tego samego dnia.',
};

export const WHATSAPP_DEFAULT = `https://wa.me/${BRAND.phoneDigits}?text=Dzie%C5%84%20dobry!%20Prosz%C4%99%20o%20wycen%C4%99%20tarasu%20lub%20ogrodu.%20Lokalizacja%3A%20`;
export const WHATSAPP_PACK = `https://wa.me/${BRAND.phoneDigits}?text=Dzie%C5%84%20dobry!%20Interesuje%20mnie%20pakiet%20szeregowiec%2020%E2%80%9340%20m%C2%B2%20(Lazurowa%20%2F%20Bemowo).%20Lokalizacja%3A%20`;

export function buildWhatsAppQuoteUrl(params: { area: string; place: string; want: string }) {
  const lines = [
    'Dzień dobry! Proszę o wycenę ogrodu lub tarasu.',
    `Metraż: ${params.area}`,
    `Lokalizacja: ${params.place}`,
    `Zakres: ${params.want}`,
    'Mogę wysłać zdjęcia działki.',
  ].join('\n');
  return `https://wa.me/${BRAND.phoneDigits}?text=${encodeURIComponent(lines)}`;
}

export const NAV_LINKS = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#pakiet', label: 'Szeregowiec' },
  { href: '#wycena', label: 'Wycena' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#cennik', label: 'Cennik' },
  { href: '#faq', label: 'Pytania' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const HERO_STATS = [
  { value: '20–40 m²', label: 'typowa działka szeregowca' },
  { value: '48 h', label: 'widełki po wizycie' },
  { value: '0 zł', label: 'wizja lokalna' },
  { value: 'Lazurowa', label: 'Bemowo i zachodnia Warszawa' },
];

export const ABOUT_STATS = [
  { value: '12', label: 'lat na działce' },
  { value: '180+', label: 'zrealizowanych przestrzeni' },
  { value: '1', label: 'zespół od projektu do ogrodu' },
];

export const START_CARDS = [
  {
    title: 'Bezpłatna wizja lokalna',
    text: 'Przyjeżdżamy, mierzymy działkę i mówimy wprost, co da się zrobić w Waszym budżecie.',
    cta: 'Umów wizję',
    href: '#kontakt',
  },
  {
    title: 'Wycena w 48 godzin',
    text: 'Po wizycie dostajecie widełki kosztów materiału i robocizny — konkretnie, bez zgadywania.',
    cta: 'Wyślij zdjęcia',
    href: WHATSAPP_DEFAULT,
  },
  {
    title: 'Taras i ogród w jednym',
    text: 'Jedna ekipa od deski po nasadzenia. Jeden termin, jedna odpowiedzialność.',
    cta: 'Zobacz zakres',
    href: '#uslugi',
  },
];

export const SERVICE_AREAS = [
  'Lazurowa',
  'Bemowo',
  'Ursus',
  'Włochy',
  'Wola',
  'Ochota',
  'Bielany',
  'Serock',
  'Konstancin',
  'Piaseczno',
  'Izabelin',
];

export const TOWNHOUSE_PACK = {
  id: 'pakiet-szeregowiec',
  title: 'Pakiet szeregowiec 20–40 m²',
  eyebrow: 'Osiedla przy Lazurowej',
  lead: 'Mały ogród szeregowca, z którego naprawdę korzystacie — strefy, rabaty, światło i nawodnienie dopasowane do Waszej działki.',
  priceFrom: 'od ok. 12–18 tys. zł',
  priceNote: 'Widełki dla 20–40 m² w Warszawie, 2026. Ostateczna wycena po wizji lokalnej.',
  includes: [
    'Koncepcja układu na Wasze 20–40 m²',
    'Strefa kawowa i wypoczynkowa (opcjonalnie altana)',
    'Rabaty z kamieniem, światłem i nawodnieniem',
    'Dobór roślin pod Waszą działkę i nasłonecznienie',
    'Trawnik lub niska zieleń oraz plan pielęgnacji',
  ],
  constraints: [
    'Idealne pod szeregowce przy Lazurowej',
    'Także Bemowo i zachodnia Warszawa',
    'Prywatność zielenią, jeśli jej potrzebujecie',
    'Jedna ekipa od projektu do realizacji',
  ],
};

export const ESTATE_FIT = {
  title: 'Dla kogo jest ten pakiet?',
  lead: 'Jeśli mieszkacie na Lazurowej albo podobnym osiedlu szeregowców — to właśnie Wasz zakres.',
  checks: [
    'Szeregowiec lub bliźniak z ogrodem ok. 20–40 m²',
    'Osiedle przy Lazurowej, Bemowo lub zachodnia Warszawa',
    'Chcecie strefę kawową i wypoczynek, nie tylko trawnik',
    'Zależy Wam na nawodnieniu i niskiej pielęgnacji latem',
    'Jedna ekipa od koncepcji do nasadzeń',
  ],
};

export const QUICK_QUOTE_AREAS = ['do 20 m²', '20–40 m²', '40–80 m²', 'powyżej 80 m²'];
export const QUICK_QUOTE_PLACES = ['Lazurowa', 'Bemowo', 'Ursus / Włochy', 'Serock / okolice', 'inna Warszawa', 'poza Warszawą'];
export const QUICK_QUOTE_WANTS = [
  'Pakiet szeregowiec (strefy, rabaty, nawodnienie)',
  'Rewitalizacja i pielęgnacja',
  'Taras',
  'Ogród i taras',
  'Tylko nasadzenia lub odświeżenie',
];

export const SERVICES = [
  {
    id: 'tarasy',
    number: '01',
    title: 'Tarasy',
    lead: 'Drewno, kompozyt lub kamień — konstrukcje, które rozszerzają dom na zewnątrz.',
    points: [
      'Tarasy drewniane i kompozytowe',
      'Konstrukcje na gruncie i nad stropem',
      'Balustrady, zadaszenia, schody',
      'Oświetlenie i instalacje pod deską',
    ],
    image: '/images/tarasy.jpg',
  },
  {
    id: 'ogrody',
    number: '02',
    title: 'Ogrody',
    lead: 'Nasadzenia dopasowane do działki, światła i tego, jak naprawdę żyjecie.',
    points: [
      'Projekty ogrodów przydomowych',
      'Dobór gatunków i nasadzenia',
      'Trawniki, łąki, ogrody leśne',
      'Systemy nawodnienia',
    ],
    image: '/images/ogrody.jpg',
  },
  {
    id: 'nawierzchnie',
    number: '03',
    title: 'Nawierzchnie',
    lead: 'Ścieżki, podjazdy i place, które spajają ogród w jedną całość.',
    points: [
      'Kamień naturalny i płyty wielkoformatowe',
      'Żwir, corten, drewno',
      'Obrzeża i odprowadzenie wody',
      'Podjazdy i place zjazdowe',
    ],
    image: '/images/nawierzchnie.jpg',
  },
  {
    id: 'pielegnacja',
    number: '04',
    title: 'Pielęgnacja',
    lead: 'Ogród nie kończy się na odbiorze. Zostajemy, żeby rósł tak, jak został zaplanowany.',
    points: [
      'Sezonowe przeglądy',
      'Cięcia i nawożenie',
      'Serwis nawodnienia',
      'Plany pielęgnacji na cały rok',
    ],
    image: '/images/forest.jpg',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  place: string;
  year: string;
  type: string;
  area: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
  photoNote?: string;
  timeline?: string;
  budgetNote?: string;
  challenge?: string;
  solution?: string;
  description: string;
  results?: string[];
  plants?: string[];
  materials?: string[];
  process?: { title: string; text: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nordic-bemowo',
    title: 'Ogród wieczorny · Lazurowa',
    place: 'Warszawa, Bemowo · Lazurowa',
    year: '2026',
    type: 'Ogród, altana, nawodnienie',
    area: '27 m²',
    image: '/images/nordic-bemowo-ikea.jpg?v=29',
    gallery: [
      '/images/nordic-bemowo-ikea.jpg?v=29',
      '/images/nordic-bemowo.jpg?v=29',
      '/images/nordic-bemowo-day.jpg?v=29',
      '/images/nordic-bemowo-coffee.jpg?v=29',
      '/images/nordic-bemowo-lounge.jpg?v=29',
      '/images/nordic-bemowo-irrigation.jpg?v=29',
      '/images/nordic-bemowo-detail.jpg?v=29',
      '/images/nordic-bemowo-plants.jpg?v=29',
      '/images/nordic-bemowo-plan.jpg?v=29',
      '/images/nordic-bemowo-board.jpg?v=29',
    ],
    featured: true,
    timeline: 'Projekt 7 dni · realizacja ok. 2 tygodnie',
    budgetNote: '27 m²: strefy, rabaty, światło, nawodnienie i lekka altana — typowy zakres pakietu szeregowiec.',
    challenge: '27 m² szeregowca przy Lazurowej: mało miejsca, widać sąsiadów, a domownicy chcieli cień latem, strefę na kawę, wypoczynek i nawodnienie bez konewki.',
    solution: 'Trzy strefy: kawa przy drzwiach, wypoczynek pod lekką altaną, wąski trawnik. Prywatność zielenią — tujami, trawami i hortensjami. Rabaty z kamieniem, światłem i nawodnieniem kropelkowym.',
    description:
      'To 27 m² szeregowca na Bemowie, przy Lazurowej. Zamiast jednego trawnika są dwie strefy użytkowe: kawowa przy domu i wypoczynkowa w głębi, pod lekką altaną. Pośrodku zostaje czytelny, wąski trawnik.\n\nStrefa kawowa: nawierzchnia o wyglądzie drewna, stół i dwa fotele. Strefa wypoczynku: narożna sofa pod altaną.\n\nWzdłuż ogrodzenia biegną wąskie rabaty 40–50 cm: obrzeże, agrowłóknina, biały kamień, oświetlenie i linia kropelkowa. Tuje Smaragd, rozplenica i Limelight miękko zamykają widok.\n\nEfekt: mały ogród z cieniem, światłem i automatycznym podlewaniem — taki, z którego korzystacie codziennie.',
    results: [
      '27 m² zagospodarowane w czytelne strefy',
      'Prywatność roślinami: tuje, trawy, hortensje',
      'Lekka altana nad strefą wypoczynku',
      'Nawodnienie kropelkowe w rabatach i na trawniku',
      'Strefa kawowa przy domu: stół i dwa fotele',
      'Wąskie rabaty 40–50 cm z białym kamieniem i światłem',
      'Limelight, rozplenica, lawenda, jeżówka, tuje Smaragd',
    ],
    plants: [
      'Hortensja bukietowa Limelight',
      'Rozplenica japońska (Pennisetum)',
      'Lawenda Hidcote',
      'Jeżówka (Echinacea)',
      'Kostrzewa sina / turzyca',
      'Tuje Smaragd wzdłuż ogrodzenia',
    ],
    materials: [
      'Konstrukcja altanowa',
      'System nawodnienia kropelkowego',
      'Nawierzchnia tarasowa o wyglądzie drewna',
      'Obrzeże ogrodowe',
      'Agrowłóknina',
      'Biały kamień dekoracyjny',
      'Oświetlenie punktowe 12 V / solar',
      'Meble: strefa kawowa i wypoczynkowa',
    ],
    process: [
      { title: '1. Pomiar i układ', text: '27 m². Na rzucie: kawa, wypoczynek pod altaną, trawnik i rabaty dopasowane do światła i sąsiadów.' },
      { title: '2. Nawierzchnie i altana', text: 'Taras kawowy, strefa wypoczynku w rogu, lekka altana — cień latem bez ciężkiej zabudowy.' },
      { title: '3. Rabaty, światło, nawodnienie', text: 'Wąskie rabaty przy ogrodzeniu: kamień, światło, linia kropelkowa. Ogród podlewa się sam.' },
      { title: '4. Nasadzenia i odbiór', text: 'Tuje, trawy, Limelight, lawenda, jeżówka. Plan pielęgnacji i ustawienie nawodnienia.' },
    ],
  },
  {
    id: 'serock',
    title: 'Rewitalizacja ogrodu · Serock',
    place: 'Serock',
    year: '2026',
    type: 'Pielęgnacja i rewitalizacja rabat',
    area: '300 m²',
    image: '/images/serock-overview.jpg?v=30',
    gallery: [
      '/images/serock-overview.jpg?v=30',
      '/images/serock-pine.jpg?v=30',
      '/images/serock-edges.jpg?v=30',
      '/images/serock-terrace.jpg?v=30',
      '/images/serock-sprinkler.jpg?v=30',
    ],
    timeline: '3 dni robocze · 2 osoby',
    budgetNote: 'Robocizna 2 700 zł plus materiały w cenach zakupu. Sprzęt ogrodniczy zapewnił inwestor — bez kosztów wypożyczenia.',
    challenge: '300 m² w Serocku: zarosłe kamienne obrzeża, zaniedbana rabata wokół sosny, chwasty na tarasie, niesprawne zraszacze i potrzeba cięć formujących — bez pełnej przebudowy, w krótkim terminie.',
    solution: 'Rewitalizacja w trzy dni: odświeżenie krawędzi rabat, odbudowa rabaty przy sośnie (ekobord, włóknina, kora), cięcia i odchwaszczanie, oprysk ochronny, naprawa dwóch zraszaczy oraz koszenie trudno dostępnych krawędzi.',
    description:
      'Ogród 300 m² w Serocku nie wymagał nowego projektu — potrzebował solidnej rewitalizacji. W trzy dni przywróciliśmy czytelny układ rabat, zadbaliśmy o rośliny i odblokowaliśmy nawodnienie.\n\nKluczowy element to rabata wokół sosny: nowe ekobordy, włóknina i świeża kora zamiast rozjechanej, zarosłej struktury. Równolegle uporządkowaliśmy styki trawnika z kamiennymi obrzeżami — usunęliśmy roślinność przerastającą kamienie, żeby znów widać było linię rabaty.\n\nNa tarasie i w bryłach krzewów: cięcia pielęgnacyjne, formowanie oraz ręczne odchwaszczanie. Całą działkę zabezpieczyliśmy opryskiem ochronnym. Dwa niesprawne zraszacze wróciły do pracy.\n\nTo typowa realizacja „odśwież i utrzymuj”: konkretny zakres, jasna wycena robocizny, materiały w cenach zakupu. Dobry wzór dla większych ogrodów pod Warszawą, gdy potrzebny jest efekt bez wielomiesięcznej budowy.',
    results: [
      'Rewitalizacja krawędzi rabat kamiennych',
      'Odbudowa rabaty wokół sosny: ekobord, włóknina, kora',
      'Cięcia pielęgnacyjne drzew i krzewów oraz odchwaszczenie tarasu',
      'Oprysk ochronny całej działki',
      'Naprawa dwóch zraszaczy w systemie nawodnienia',
      'Koszenie krawędzi trudno dostępnych',
      'Trzy dojazdy Tłuszcz–Serock wliczone w wycenę',
      'Robocizna łącznie 2 700 zł plus materiały',
    ],
    materials: [
      'Włóknina ogrodowa',
      'Ekobordy — 4 szt.',
      'Kora ogrodowa — 5 opakowań',
      'Środek ochrony roślin',
      'Sprzęt ogrodniczy inwestora',
    ],
    process: [
      { title: '1. Diagnoza i zakres', text: 'Przegląd 300 m²: rabaty, taras, zraszacze, krawędzie. Lista prac i materiałów na trzy dni.' },
      { title: '2. Rabaty i obrzeża', text: 'Czyszczenie styku trawnika z kamieniem, wymiana ekobordów i włókniny przy sośnie, świeża kora.' },
      { title: '3. Rośliny i taras', text: 'Cięcia formujące, odchwaszczanie tarasu, oprysk ochronny całej działki.' },
      { title: '4. Nawodnienie i odbiór', text: 'Naprawa dwóch zraszaczy, koszenie krawędzi, przekazanie ogrodu gotowego do sezonu.' },
    ],
  },
  {
    id: 'karma-szeregowiec',
    title: 'Ogród przy szeregowcu · trawnik i prywatność',
    place: 'Warszawa i okolice',
    year: '2017',
    type: 'Trawnik, rabaty, nawodnienie',
    area: 'mała działka',
    image: '/images/karma-townhouse.jpg?v=31',
    gallery: [
      '/images/karma-townhouse.jpg?v=31',
      '/images/karma-townhouse-2.jpg?v=31',
      '/images/karma-planting.jpg?v=31',
    ],
    photoNote: 'Zdjęcia z portfolio współpracownika (KaRMa / Grzegorz Ragus). Realizacje partnerskie — ten sam standard robót ziemnych i nasadzeń.',
    timeline: 'Sezon wiosna–jesień · trawnik, rabaty, zraszanie',
    budgetNote: 'Typowy zakres małego ogrodu przy szeregowcu: trawnik, korowane rabaty, prywatność zielenią i nawodnienie.',
    challenge: 'Mała działka przy nowoczesnym szeregowcu: widać sąsiadów, potrzeba czytelnego trawnika i rabat — bez ciężkiej przebudowy całego ogrodu.',
    solution: 'Gęsty trawnik, rabaty z korą, rząd tui zamykający widok oraz zraszanie. Nasadzenia rozstawione na agrowłókninie — mniej chwastów, mniej pielęgnacji.',
    description:
      'Realizacja partnerska przy nowoczesnym szeregowcu: czytelny trawnik, korowane rabaty i prywatność zielenią.\n\nKlucz to prosty układ — trawnik do użytkowania, rabaty wzdłuż ogrodzenia, tuje i formowane kule zamykające widok. Zraszacz utrzymuje zieleń bez codziennej konewki.\n\nNa etapie sadzenia: agrowłóknina, rozstaw bylin w doniczkach, czyste obrzeże trawnika. Efekt dopasowany do Lazurowej i Bemowa — mały metraż, z którego korzystacie.',
    results: [
      'Gęsty trawnik przy szeregowcu',
      'Prywatność: tuje i ogrodzenie',
      'Rabaty na agrowłókninie z nasadzeniami',
      'Nawodnienie zraszaczem',
      'Czyste obrzeża trawnika i rabat',
    ],
    plants: [
      'Tuje formowane (szpaler)',
      'Lawenda / byliny w rabacie',
      'Kule formowane na pniu',
      'Iglaki ozdobne w kompozycji',
    ],
    materials: ['Trawnik z rolki', 'Agrowłóknina i obrzeża', 'Kora ogrodowa', 'System zraszania'],
    process: [
      { title: '1. Układ działki', text: 'Trawnik, linia rabat i prywatność wzdłuż ogrodzenia — bez zbędnych stref.' },
      { title: '2. Trawnik', text: 'Przygotowanie podłoża i trawnik z rolki — od razu zielona powierzchnia do użytkowania.' },
      { title: '3. Rabaty i prywatność', text: 'Agrowłóknina, rozstaw roślin w doniczkach, tuje wzdłuż ogrodzenia.' },
      { title: '4. Nawodnienie', text: 'Zraszanie utrzymuje trawnik i rabaty bez codziennego podlewania z konewki.' },
    ],
  },
  {
    id: 'karma-bialy-taras',
    title: 'Biały taras wypoczynkowy · ogród miejski',
    place: 'Warszawa i okolice',
    year: '2016–2017',
    type: 'Taras, mur, trawnik',
    area: 'mały ogród miejski',
    image: '/images/karma-brick-2.jpg?v=31',
    gallery: [
      '/images/karma-brick-2.jpg?v=31',
      '/images/karma-brick.jpg?v=31',
      '/images/karma-brick-3.jpg?v=31',
      '/images/karma-brick-build.jpg?v=31',
    ],
    photoNote: 'Zdjęcia z portfolio współpracownika (KaRMa / Grzegorz Ragus). Realizacje partnerskie — taras wypoczynkowy, mur i poziomy trawnika.',
    timeline: 'Mur i poziomy · potem trawnik i strefa wypoczynku',
    budgetNote: 'Mały ogród miejski: mur oporowy, dwa poziomy trawnika i strefa wypoczynku z zadaszeniem — zakres typowy pod zabudowę wielorodzinną / szeregowiec.',
    challenge: 'Mały ogród przy blokach: spadek terenu, widać sąsiadów, brak czytelnej strefy na wypoczynek — tylko trawnik bez miejsca na usiąść z kawą.',
    solution: 'Łukowy mur z cegły tworzy dwa poziomy. Na górnym — biały taras wypoczynkowy pod baldachimem (narożna sofa z palet). Dolny trawnik zostaje otwarty do użytkowania.',
    description:
      'Ogród miejski z portfolio partnerskiego: biały taras wypoczynkowy i dwa poziomy trawnika oddzielone murem z cegły.\n\nStrefa wypoczynku stoi na górnym poziomie — biała narożna sofa pod lekkim baldachimem z firanami. To konkretne miejsce na kawę i wieczór, nie tylko „ładna zieleń”.\n\nMur oporowy dzieli działkę na dwa poziomy i daje głębię małej przestrzeni. Budowa muru (poziomica, sznur) pokazuje solidną konstrukcję. W tle — bloki, czyli ten sam kontekst co Lazurowa i Bemowo.\n\nWzór pod małe ogrody szeregowców i parterów: poziomy, prywatność ogrodzeniem i jedna wyraźna strefa wypoczynku.',
    results: [
      'Biały taras wypoczynkowy pod baldachimem',
      'Narożna sofa — strefa kawowa / lounge',
      'Mur oporowy z cegły — dwa poziomy trawnika',
      'Trawnik z rolki na dolnym i górnym poziomie',
      'Prywatność: ogrodzenie i tuje',
      'Donice i zabudowa przy płocie',
    ],
    plants: ['Tuje formowane wzdłuż granicy', 'Krzewy w donicach przy ogrodzeniu', 'Rabata z korą przy trawniku'],
    materials: [
      'Cegła — mur oporowy łukowy',
      'Trawnik z rolki',
      'Konstrukcja baldachimu / zadaszenia',
      'Strefa wypoczynku (meble tarasowe)',
      'Ogrodzenie i donice drewniane',
    ],
    process: [
      { title: '1. Poziomy i mur', text: 'Wykop, sznur i poziomica. Łukowy mur z cegły dzieli działkę na dwa poziomy.' },
      { title: '2. Trawnik', text: 'Trawnik z rolki na dolnym i górnym poziomie — od razu do użytkowania.' },
      { title: '3. Biały taras', text: 'Strefa wypoczynku na górnym poziomie: narożna sofa i lekki baldachim z firanami.' },
      { title: '4. Prywatność', text: 'Ogrodzenie, donice i tuje — mniej widoku sąsiadów, więcej komfortu na tarasie.' },
    ],
  },
  {
    id: 'karma-oczko',
    title: 'Oczko wodne i nawodnienie',
    place: 'Warszawa i okolice',
    year: '2017–2018',
    type: 'Oczko, kaskada, nawodnienie',
    area: 'fragment ogrodu',
    image: '/images/karma-pond.jpg?v=31',
    gallery: [
      '/images/karma-pond.jpg?v=31',
      '/images/karma-pond-2.jpg?v=31',
      '/images/karma-pond-3.jpg?v=31',
      '/images/karma-phase1.jpg?v=31',
      '/images/karma-irrigation.jpg?v=31',
    ],
    photoNote: 'Zdjęcia z portfolio współpracownika (KaRMa / Grzegorz Ragus). Realizacje partnerskie — woda, kamień i instalacje pod ziemią.',
    timeline: 'Faza 1: wykop i folia · potem kamień, kaskada i nawodnienie',
    budgetNote: 'Zakres zależny od wielkości oczka i długości instalacji. Po wizji dostajecie widełki materiału i robocizny osobno.',
    challenge: 'Inwestor chciał oczko z kamiennym brzegiem i kaskadą oraz nawodnienie ogrodu — solidnie, z folią i rurami pod ziemią, nie „basenik z marketu”.',
    solution: 'Wykop i folia (FAZA 1), potem kamień naturalny, otoczaki i kaskada. Równolegle rowy pod nawodnienie — ogród podlewa się sam.',
    description:
      'Realizacja partnerska: oczko wodne z kamiennym brzegiem i białymi otoczakami oraz osobna faza nawodnienia.\n\nGotowe oczko ma czytelny owal, płaski kamień na styku z wodą i szeroki pas otoczaków. W tle — roślinność i prywatność ogrodzenia.\n\nDokumentacja budowy pokazuje FAZĘ 1: wykop, obrzeża i folia pod przyszłą kaskadę. Na końcu — rowy pod rury nawodnienia, gdy oczko i kamień już stoją.\n\nPrzydatne, gdy poza tarasem i rabatami chcecie też wodę albo pełne podlewanie działki.',
    results: [
      'Oczko z kamieniem naturalnym i otoczakami',
      'Kaskada z płaskiego kamienia',
      'Folia i obrzeża — poprawna hydroizolacja',
      'Rowy i instalacja nawodnienia',
      'Czytelny styk wody z ogrodem',
    ],
    materials: [
      'Folia do oczek wodnych',
      'Kamień naturalny (brzeg i kaskada)',
      'Białe otoczaki dekoracyjne',
      'Obrzeża ogrodowe',
      'Rury i elementy nawodnienia',
    ],
    process: [
      { title: '1. FAZA 1 — wykop', text: 'Kształt oczka, obrzeża i folia. Spadki pod przyszłą kaskadę.' },
      { title: '2. Kamień i woda', text: 'Brzeg z kamienia, otoczaki, napełnienie. Kaskada z płaskich płyt.' },
      { title: '3. Nawodnienie', text: 'Rowy pod rury, podłączenie zraszania — ogród podlewa się sam.' },
      { title: '4. Odbiór', text: 'Sprawdzenie szczelności, ustawienie nawodnienia, przekazanie inwestorowi.' },
    ],
  },
];

export const PRICING_TIERS = [
  {
    name: 'Szeregowiec 20–40 m²',
    from: 'od ok. 12–18 tys. zł',
    blurb: 'Strefy, rabaty, światło, nawodnienie, opcjonalnie altana — typowy ogród szeregowca przy Lazurowej.',
    includes: ['Koncepcja na mały metraż', 'Nawodnienie i światło', 'Nasadzenia pod działkę'],
    hot: true,
    href: '#pakiet',
    cta: 'Zobacz pakiet',
  },
  {
    name: 'Taras',
    from: 'od ok. 450 zł/m²',
    blurb: 'Kompozyt lub drewno thermo. Konstrukcja, deska, wykończenie krawędzi.',
    includes: ['Wizja lokalna', 'Wycena materiału i robocizny', 'Montaż'],
    hot: false,
    href: '#kontakt',
    cta: 'Zapytaj o wycenę',
  },
  {
    name: 'Ogród większy',
    from: 'od ok. 180 zł/m²',
    blurb: 'Nasadzenia, trawnik lub łąka, ścieżki. Cena zależy od gęstości roślin i nawodnienia.',
    includes: ['Dobór roślin', 'Nasadzenia', 'Plan pielęgnacji'],
    hot: false,
    href: '#kontakt',
    cta: 'Zapytaj o wycenę',
  },
  {
    name: 'Rewitalizacja i pielęgnacja',
    from: 'od ok. 2 700 zł',
    blurb: 'Jak Serock 300 m²: rabaty, cięcia, oprysk, naprawa zraszaczy — trzy dni, dwie osoby plus materiały.',
    includes: ['Wycena pozycji po pozycji', 'Rabaty i obrzeża', 'Serwis nawodnienia'],
    hot: false,
    href: '#realizacje',
    cta: 'Zobacz Serock',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Rozmowa i działka',
    text: 'Przyjeżdżamy, słuchamy i oglądamy światło, spadki oraz sąsiadów. Bez tego projekt jest tylko ładnym obrazkiem.',
  },
  {
    number: '02',
    title: 'Koncepcja',
    text: 'Dostajecie układ przestrzeni, materiały i nastrój. Dopracowujemy go, aż ogród zaczyna być Wasz.',
  },
  {
    number: '03',
    title: 'Projekt i wycena',
    text: 'Rysunki wykonawcze, zestawienia roślin, konstrukcja tarasu i jasny koszt — bez niedomówień.',
  },
  {
    number: '04',
    title: 'Realizacja',
    text: 'Jedna ekipa, jeden kierownik. Fundamenty, deska, ziemia, nasadzenia — w sensownej kolejności.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Mieliśmy zwykły trawnik. Po realizacji mamy strefę kawową, wypoczynek i rabaty, które wieczorem świecą. Sąsiedzi już pytają o kontakt.',
    name: 'Kasia i Tomek',
    place: 'Lazurowa, Bemowo',
  },
  {
    quote: '300 m² ogrodu wróciło do formy w trzy dni — rabaty, cięcia, zraszacze. Dostaliśmy jasną wycenę pozycji po pozycji, bez niespodzianek.',
    name: 'Marta i Paweł',
    place: 'Serock',
  },
];

export const FAQS = [
  {
    q: 'Ile kosztuje ogród 20–40 m² (szeregowiec)?',
    a: 'Pakiet szeregowiec zwykle mieści się w widełkach ok. 12–18 tys. zł — zależnie od altany, gęstości roślin i nawodnienia. Po wizji dostajecie konkretną kwotę, nie ogólnik.',
  },
  {
    q: 'Ile kosztuje rewitalizacja większego ogrodu?',
    a: 'Przykład z Serocka (300 m²): trzy dni, dwie osoby, robocizna 2 700 zł plus materiały (włóknina, ekobordy, kora). Zakres: rabaty, cięcia, oprysk, naprawa zraszaczy. Po zdjęciach i wizji dostajecie podobnie rozbitą wycenę.',
  },
  {
    q: 'Czy robicie ogrody na Lazurowej i Bemowie?',
    a: 'Tak — osiedla przy Lazurowej i zachodnia Warszawa to nasz naturalny teren. Pracujemy też w Serocku, Konstancinie, Piasecznie i okolicach. Napiszcie lokalizację — od razu powiemy, czy bierzemy temat.',
  },
  {
    q: 'Czy robicie nawodnienie i altanę?',
    a: 'Tak. Na małych działkach kropelkowe nawodnienie w rabatach oraz lekka altana to częsty zestaw: cień latem, mniej podlewania, komfort na co dzień.',
  },
  {
    q: 'Jak szybko możecie zacząć?',
    a: 'Małe ogrody 20–40 m² ruszamy najszybciej — często w ciągu kilku tygodni od wyceny. Im wcześniej wyślecie zdjęcia, tym szybciej znajdziecie się w kalendarzu.',
  },
  {
    q: 'Czy mogę wysłać zdjęcia zamiast wypełniać formularz?',
    a: 'Tak — WhatsApp jest najszybszy. Wyślijcie 2–3 zdjęcia działki, metraż i dzielnicę. Oddzwonimy lub odpiszemy z kolejnym krokiem.',
  },
];
