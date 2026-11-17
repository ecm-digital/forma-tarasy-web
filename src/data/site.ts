export const BRAND = {
  name: 'FORMA',
  tagline: 'Tarasy i ogrody',
  phrase: 'Przestrzenie, z których korzystacie na co dzień.',
  phone: '+48 517 303 400',
  phoneHref: 'tel:+48517303400',
  phoneDigits: '48517303400',
  email: 'kontakt@formaogrody.pl',
  city: 'Warszawa i okolice',
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
  { href: '#cennik', label: 'Oferta' },
  { href: '#wycena', label: 'Wycena' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#proces', label: 'Proces' },
  { href: '#faq', label: 'Pytania' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const HERO_STATS = [
  { value: 'Warszawa', label: 'i okolice (do 35 km)' },
  { value: '48 h', label: 'wycena po wizycie' },
  { value: '0 zł', label: 'wizja lokalna' },
  { value: '1 ekipa', label: 'od pomiaru po odbiór' },
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
  packageBadge?: string;
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
    id: 'realizacja-taras-start',
    title: 'Taras Start · 24 m² kompozyt WPC',
    place: 'Warszawa, Ursus',
    year: '2026',
    type: 'Taras kompozytowy, stopień zejściowy',
    area: '24 m²',
    packageBadge: 'Pakiet: Taras Start (15–30 m²)',
    image: '/images/tarasy.jpg',
    gallery: [
      '/images/tarasy.jpg',
      '/images/nordic-bemowo-board.jpg',
      '/images/nordic-bemowo-coffee.jpg',
    ],
    timeline: 'Realizacja: 3 dni robocze',
    budgetNote: 'Pakiet Taras Start: podbudowa punktowa, legary aluminiowe, deska kompozytowa WPC, wykończenie krawędzi i stopień zejściowy.',
    challenge: 'Taras deweloperski 8 m² był za mały na stół i leżaki. Inwestorzy potrzebowali powiększenia do 24 m², trwałej nawierzchni bez corocznego olejowania i bezpiecznego zejścia na trawnik.',
    solution: 'Demontaż starych płyt, rozbudowa stabilnej podbudowy punktowej, montaż ramy aluminiowej z deską kompozytową WPC w kolorze grafitu oraz wykonanie stopnia na pełną szerokość.',
    description:
      'Przykład realizacji wariantu Taras Start dla domu w Warszawie (Ursus).\n\nZastąpiliśmy mały, 8-metrowy taras deweloperski przestronnym tarasem o powierzchni 24 m². Zastosowaliśmy deskę kompozytową WPC o głębokiej strukturze drewna — odporną na mróz, wilgoć i słońce, bez potrzeby corocznego szlifowania i olejowania.\n\nKonstrukcja spoczywa na punktowych fundamentach betonowych i legarach aluminiowych. Krawędzie wykończyliśmy systemowymi listwami kątowymi, a od strony trawnika zamontowaliśmy szeroki, wygodny stopień zejściowy.\n\nCzas realizacji: 3 dni robocze od wejścia na działkę do odbioru.',
    results: [
      'Powiększenie powierzchni z 8 m² do 24 m²',
      'Deska kompozytowa WPC odporna na warunki atmosferyczne',
      'Stabilna podbudowa i legary aluminiowe',
      'Szeroki stopień zejściowy do ogrodu',
      'Brak konieczności corocznej impregnacji',
    ],
    materials: [
      'Deska kompozytowa WPC premium',
      'Legary aluminiowe konstrukcyjne',
      'Wsporniki i podbudowa punktowa',
      'Listwy krawędziowe maskujące',
      'System ukrytego montażu klipsów',
    ],
    process: [
      { title: '1. Pomiar i wyznaczenie poziomów', text: 'Sprawdzenie wysokości progu drzwi tarasowych, spadków i wyznaczenie obrysu 24 m².' },
      { title: '2. Podbudowa i legary', text: 'Przygotowanie punktów podparcia, ułożenie geowłókniny i montaż stabilnej ramy z legarów.' },
      { title: '3. Układanie deski i stopnia', text: 'Montaż desek na niewidoczne klipsy dylatacyjne, obróbka krawędzi i budowa stopnia.' },
    ],
  },
  {
    id: 'realizacja-taras-strefa-relaksu',
    title: 'Taras + Strefa Relaksu · 38 m² z pergolą i LED',
    place: 'Pęcice Małe / Komorów',
    year: '2026',
    type: 'Taras kompozytowy, pergola, ławka, LED',
    area: '38 m²',
    packageBadge: 'Pakiet: Taras + Strefa Relaksu (30–50 m²)',
    image: '/images/serock-terrace.jpg',
    gallery: [
      '/images/serock-terrace.jpg',
      '/images/nordic-bemowo-lounge.jpg',
      '/images/nordic-bemowo-detail.jpg',
      '/images/karma-brick-2.jpg',
    ],
    timeline: 'Projekt 5 dni · realizacja 6 dni roboczych',
    budgetNote: 'Pakiet Taras + Strefa: 38 m² tarasu, pergola aluminiowa 4 × 3 m, narożna ławka na wymiar, 2 donice i listwa LED.',
    challenge: 'Duża nasłoneczniona działka (38 m² tarasu) wymagała ochrony przed upałem w południe, wydzielenia strefy jadalnej i wypoczynkowej oraz nastrojowego oświetlenia na wieczory.',
    solution: 'Taras kompozytowy z pergolą aluminiową nad strefą jadalną. W rogu powstała zabudowana ławka z donicami na zioła i trawy ozdobne, a w krawędzi tarasu zamontowaliśmy dyskretną listwę LED 12 V.',
    description:
      'Realizacja odpowiadająca pakietowi B (Taras + Strefa Relaksu) w Pęcicach Małych k. Komorowa.\n\nTaras o powierzchni 38 m² podzieliliśmy na dwie funkcje: jadalną pod pergolą aluminiową 4 × 3 m oraz strefę wypoczynkową (lounge) ze zintegrowaną ławką i donicami kompozytowymi.\n\nWzdłuż krawędzi tarasu oraz pod siedziskiem wbudowaliśmy wodoodporne taśmy LED w profilach aluminiowych (światło ciepłe 3000K), sterowane pilotem i czujnikiem zmierzchu.\n\nEfekt to pełnoprawny pokój na zewnątrz, gotowy do użytkowania od wczesnej wiosny po ciepłą jesień.',
    results: [
      '38 m² funkcjonalnego tarasu z podziałem na strefy',
      'Pergola aluminiowa 4 × 3 m z zadaszeniem',
      'Wbudowane siedzisko z kompozytu + 2 donice',
      'Oświetlenie LED w krawędzi i pod meblami (3000K)',
      'Pełna wygoda użytkowania w dzień i w nocy',
    ],
    materials: [
      'Deska kompozytowa WPC w kolorze naturalnego dębu',
      'Pergola aluminiowa malowana proszkowo (grafit)',
      'Wbudowane profile z listwami LED 12 V IP67',
      'Donice kompozytowe na wymiar',
      'Okucia i łączniki ze stali nierdzewnej',
    ],
    process: [
      { title: '1. Koncepcja strefowania', text: 'Podział 38 m² na strefę stołu pod pergolą oraz strefę relaksu z narożną ławką.' },
      { title: '2. Konstrukcja i instalacja elektryczna', text: 'Wyprowadzenie okablowania LED pod tarasem, kotwienie stóp pergoli i montaż ramy.' },
      { title: '3. Montaż desek, pergoli i mebli', text: 'Ułożenie deski kompozytowej, montaż zadaszenia pergoli, montaż ławki i donic.' },
      { title: '4. Oświetlenie i testy', text: 'Podłączenie sterownika zmierzchowego LED, regulacja zadaszenia i odbiór.' },
    ],
  },
  {
    id: 'realizacja-taras-ogrod-pod-klucz',
    title: 'Taras + Ogród Pod Klucz · gres, trawnik i nawodnienie',
    place: 'Warszawa, Wilanów',
    year: '2026',
    type: 'Gres na wspornikach, ogród, nawadnianie',
    area: '35 m² taras + 140 m² ogród',
    packageBadge: 'Pakiet: Taras + Ogród Pod Klucz',
    image: '/images/nawierzchnie.jpg',
    gallery: [
      '/images/nawierzchnie.jpg',
      '/images/karma-townhouse.jpg',
      '/images/nordic-bemowo-plants.jpg',
      '/images/karma-irrigation.jpg',
    ],
    timeline: 'Projekt 10 dni · realizacja 2,5 tygodnia',
    budgetNote: 'Kompleksowa realizacja pod klucz: taras gresowy 2 cm na wspornikach, trawnik z rolki, nawadnianie Hunter, oświetlenie i rabaty.',
    challenge: 'Nowy dom w Wilanowie z surową działką po budowie — gliniasta ziemia, brak tarasu, potrzeba kompleksowego ogrodu z automatycznym podlewaniem i nowoczesnym tarasem na jednym poziomie z salonem.',
    solution: 'Jeden wykonawca od A do Z: wymiana gruntu, montaż tarasu z płyt gresowych 2 cm na regulowanych wspornikach, instalacja automatycznego nawadniania, ułożenie trawnika z rolki i posadzenie roślin z oświetleniem ogrodowym.',
    description:
      'Kompletna realizacja wariantu C (Taras + Ogród Pod Klucz) dla domu w Warszawie (Wilanów).\n\nInwestorzy zlecili nam całość prac w jednym kontrakcie. Wykonaliśmy taras o powierzchni 35 m² z wielkoformatowych płyt gresowych 2 cm na wspornikach regulowanych — idealnie równo z progiem okna przesuwnego HS, z bezpiecznym odprowadzeniem wody pod płytami.\n\nW ogrodzie (140 m²) rozprowadziliśmy 3-sekcyjny system automatycznego nawadniania (zraszacze wynurzalne + linia kropelkowa w rabatach), ułożyliśmy siatkę przeciw kretom i trawnik z rolki.\n\nWzdłuż ogrodzenia posadziliśmy szpaler traw ozdobnych, hortensji i zimozielonych krzewów z 10 punktami świetlnymi podświetlającymi rośliny wieczorem.',
    results: [
      '35 m² tarasu gresowego 2 cm w poziomie salonu',
      '140 m² gęstego, zielonego trawnika z rolki',
      '3-sekcyjne automatyczne nawadnianie ze sterownikiem Wi-Fi',
      'Rabaty z hortensjami, trawami i oświetleniem punktowym',
      'Wszystko zrealizowane przez jedną ekipę bez podwykonawców',
    ],
    materials: [
      'Płyty gresowe 2 cm 60 × 60 cm na wspornikach regulowanych',
      'Trawnik z rolki + siatka przeciw kretom',
      'System nawadniania Hunter (zraszacze + linia kropelkowa)',
      'Ziemia urodzajna humusowa i kora sosnowa',
      'Reflektory ogrodowe 12 V do iluminacji zieleni',
    ],
    process: [
      { title: '1. Projekt i niwelacja terenu', text: 'Projekt koncepcyjny, wyznaczenie poziomów, korytowanie i wymiana gruntu pod trawnik.' },
      { title: '2. Montaż tarasu na wspornikach', text: 'Układanie płyt gresowych 2 cm na regulowanych stopach z drenażem wody.' },
      { title: '3. Instalacje podziemne', text: 'Rozprowadzenie rur nawadniania, kabli oświetlenia ogrodowego i montaż zraszaczy.' },
      { title: '4. Nasadzenia i trawnik', text: 'Sadzenie roślin, korowanie rabat, rozłożenie siatki i ułożenie trawnika z rolki.' },
    ],
  },
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
    name: 'Taras Start (15–30 m²)',
    from: 'od ok. 450 zł/m²',
    blurb: 'Najczęstszy metraż przy domach i szeregowcach: solidny taras z kompozytu WPC lub drewna thermo pod klucz.',
    includes: [
      'Przygotowanie podłoża i konstrukcja nośna',
      'Deska kompozytowa WPC lub drewno thermo',
      'Obróbka krawędzi i stopień zejściowy do ogrodu',
    ],
    hot: false,
    href: '#kontakt',
    cta: 'Zapytaj o wycenę',
  },
  {
    name: 'Taras + Strefa Relaksu (30–50 m²)',
    from: 'od ok. 28 tys. zł',
    blurb: 'Większy taras wypoczynkowy z zadaszeniem, zabudową i nastrojowym światłem — gotowy „pokój na zewnątrz”.',
    includes: [
      'Wszystko z pakietu Taras Start (30–50 m²)',
      'Pergola aluminiowa z montażem',
      'Ławka na wymiar, donice i oświetlenie LED',
    ],
    hot: true,
    href: '#kontakt',
    cta: 'Wybierz strefę relaksu',
  },
  {
    name: 'Taras + Ogród Pod Klucz',
    from: 'wycena indywidualna',
    blurb: 'Kompleksowa realizacja tarasu (gres 2 cm lub kompozyt) z ogrodem, trawnikiem i nawadnianiem — jeden wykonawca.',
    includes: [
      'Taras z gresu 2 cm na wspornikach lub kompozytu',
      'Projekt, nasadzenia, trawnik z rolki lub siewu',
      'Automatyczne nawadnianie i oświetlenie ogrodu',
    ],
    hot: false,
    href: '#kontakt',
    cta: 'Umów wizję lokalną',
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
