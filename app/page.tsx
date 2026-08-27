import {
  etapyZmiany,
  elementyPulpitu,
  typyZmian,
  czegoNieZnajdziesz,
  faq,
} from '@/lib/content';
import { obliczStanZmiany } from '@/lib/shift';

export const dynamic = 'force-dynamic';

export default function Home() {
  const stan = obliczStanZmiany();

  return (
    <main className="bg-paper text-ink">
      <nav
        aria-label="Główna nawigacja"
        className="absolute z-20 flex w-full items-center gap-7 px-6 py-6 text-[13px] text-paper md:px-[5.5vw]"
      >
        <a className="opacity-90 hover:opacity-100" href="#o-grze">O grze</a>
        <a className="hidden opacity-90 hover:opacity-100 md:inline" href="#zmiana">Pulpit zmiany</a>
        <a className="hidden opacity-90 hover:opacity-100 md:inline" href="#wspolnie">Gra we dwoje</a>
        <span className="mr-auto" />
        <a className="border-b border-paper/40 pb-1" href="#faq">
          Sprawdź, jak to działa <span className="ml-1">↗</span>
        </a>
      </nav>

      <section className="relative h-[94vh] min-h-[640px] overflow-hidden text-paper" aria-labelledby="start">
        <img
          src="/images/hero-tor.svg"
          alt="Nocna stacja rozrządowa z sygnałami świetlnymi i zbiegającymi się torami"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        <div className="absolute left-6 top-[26%] max-w-[680px] md:left-[9vw]">
          <p className="eyebrow eyebrow-light mb-5">GRA PRZEGLĄDAROWA · LOGIKA I PLANOWANIE</p>
          <h1 className="h-display text-[42px] text-paper sm:text-[58px] md:text-[76px]">
            Stacja budzi się,<br /><em className="font-medium">gdy inni już śpią.</em>
          </h1>
          <p className="mt-7 max-w-[520px] text-[16px] leading-[1.6] text-paper/85">
            Przejmujesz pulpit dyżurnego ruchu na bocznicy, którą dopiero od niedawna
            przywrócono do życia. Zanim wzejdzie słońce, każdy skład musi dotrzeć tam,
            gdzie powinien — a to, jak rozłożysz ruch, zostaje widoczne do końca zmiany.
          </p>
          <a className="btn btn-pale mt-8" href="#o-grze">
            Zobacz, jak wygląda zmiana <span>↓</span>
          </a>
        </div>
        <div className="absolute bottom-10 right-6 max-w-[230px] text-right text-paper/90 md:right-[7vw]">
          <span className="font-tag text-[10px]">ZMIANA 01 / WIELE</span>
          <p className="mt-2 font-display text-[14px] leading-[1.45]">
            Żadna noc nie wygląda tu tak samo jak poprzednia.
          </p>
        </div>
      </section>

      <section className="section grid gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw] md:px-[10vw] md:py-[120px]" id="o-grze">
        <div>
          <p className="eyebrow mb-4">O CZYM JEST TA GRA</p>
          <h2 className="h-display text-[34px] sm:text-[46px] md:text-[58px]">
            To nie pośpiech.<br />To <em className="font-medium">odczytanie stacji.</em>
          </h2>
        </div>
        <div className="space-y-5 pt-2 text-[16px] leading-[1.7] md:pt-10">
          <p>
            Bocznica stała pusta przez lata. Teraz wraca na nią ruch nocny — pocztowy,
            towarowy i kilka relacji, które przewożą ludzi wracających z późnej zmiany
            w mieście. Twoim zadaniem nie jest wygrać z czasem, tylko poprowadzić wszystko
            tak, żeby nikt nie czekał dłużej, niż musi.
          </p>
          <p>
            Każda zmiana zaczyna się od tego, co zostawił poprzednik: rozjazd, który
            zacina się przy niskiej temperaturze, brygadę, która wróciła później niż
            planowano, albo peron, na którym coś trzeba było naprawić w pośpiechu.
            Grasz dalej tę samą historię, nie zaczynasz jej od nowa.
          </p>
        </div>
      </section>

      <section className="panel px-6 py-16 md:px-[10vw]" id="zmiana">
        <p className="eyebrow eyebrow-light mb-6">PODGLĄD — TAK WYGLĄDA PRZYKŁADOWA ZMIANA</p>
        <div className="grid gap-px divide-y divide-line-dark overflow-hidden border border-line-dark sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          <div className="p-6">
            <span className="eyebrow eyebrow-light">DZIEŃ</span>
            <p className="mt-2 font-display text-[20px] capitalize">{stan.dzienSlowny}</p>
          </div>
          <div className="p-6">
            <span className="eyebrow eyebrow-light">NUMER ZMIANY W ROKU</span>
            <p className="mt-2 font-display text-[20px]">#{stan.numerZmiany}</p>
          </div>
          <div className="p-6">
            <span className="eyebrow eyebrow-light">WIDOCZNOŚĆ</span>
            <p className="mt-2 text-[15px] leading-[1.5]">{stan.widzialnosc}</p>
          </div>
          <div className="p-6">
            <span className="eyebrow eyebrow-light">UKŁAD TORÓW</span>
            <p className="mt-2 text-[15px] leading-[1.5]">{stan.nastawienieTorow}</p>
          </div>
        </div>
        <p className="mt-5 text-[12px] text-paper/55">
          Ten zestaw warunków to poglądowy przykład tego, jak różni się jedna zmiana od
          drugiej — wyliczony dla dzisiejszej daty ({stan.godzinaObliczenia} UTC), nie
          zapis żadnej realnej infrastruktury.
        </p>
      </section>

      <section className="overflow-hidden bg-[var(--color-signal)]/25 py-4">
        <p className="marquee-track inline-block whitespace-nowrap font-tag text-[14px] tracking-[0.12em]">
          {'planowanie · rozjazdy · perony · brygady · raport zmiany · widoczność · planowanie · rozjazdy · perony · brygady · raport zmiany · widoczność · '.repeat(2)}
        </p>
      </section>

      <section className="grid gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.05fr] md:gap-[8vw] md:px-[10vw] md:py-[120px]">
        <div>
          <p className="eyebrow mb-4">PRZEBIEG JEDNEJ ZMIANY</p>
          <h2 className="h-display text-[34px] sm:text-[46px] md:text-[56px]">
            Cztery momenty,<br /><em className="font-medium">które się liczą.</em>
          </h2>
          <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-[#44555c]">
            Nie ma tu listy zadań do odklikania. Jest stan stacji na wejściu i Twoje
            decyzje, które go zmieniają — krok po kroku, do samego końca nocy.
          </p>
        </div>
        <div className="border-t divider-light">
          {etapyZmiany.map((etap) => (
            <article key={etap.numer} className="grid grid-cols-[56px_1fr] gap-4 border-b divider-light py-7">
              <span className="font-tag text-[12px] text-[#5a7a7a]">{etap.numer}</span>
              <div>
                <h3 className="font-display text-[21px] font-medium">{etap.tytul}</h3>
                <p className="mt-2 text-[14px] leading-[1.6]">{etap.opis}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative h-[600px] overflow-hidden text-paper">
        <img src="/images/pulpit-dyzurnego.svg" alt="Pulpit dyżurnego ruchu z tablicą zapowiedzi i przełącznikami rozjazdów" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-[1] flex h-full w-full items-center bg-gradient-to-r from-ink/95 via-ink/75 to-transparent p-8 md:w-1/2 md:p-[7vw]">
          <div>
            <p className="eyebrow eyebrow-light mb-4">PULPIT, NA KTÓRYM WSZYSTKO SIĘ ZBIEGA</p>
            <h2 className="h-display text-[32px] sm:text-[42px] md:text-[54px]">
              Każdy przełącznik<br /><em className="font-medium">ma swoją cenę.</em>
            </h2>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-paper/85">
              Przesunięcie jednej iglicy rozjazdu może skrócić trasę jednemu składowi
              i wydłużyć ją drugiemu. Gra nie podświetla „dobrego” rozwiązania —
              uczysz się je rozpoznawać po skutkach.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-[10vw] md:py-[120px]">
        <div className="mb-14 max-w-[640px]">
          <p className="eyebrow mb-4">CO ZNAJDZIESZ NA PULPICIE</p>
          <h2 className="h-display text-[34px] sm:text-[46px] md:text-[56px]">
            Sześć elementów,<br /><em className="font-medium">które trzeba czytać razem.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 divide-y divide-line-light border-t border-l divider-light sm:grid-cols-2 sm:divide-x md:grid-cols-3">
          {elementyPulpitu.map((el) => (
            <article key={el.tytul} className="border-b border-r divider-light p-6 min-h-[200px]">
              <h3 className="font-display text-[19px] font-medium">{el.tytul}</h3>
              <p className="mt-3 text-[14px] leading-[1.6]">{el.opis}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 bg-[#15222b] text-paper md:grid-cols-[38vw_1fr]">
        <figure className="relative m-0 h-[320px] overflow-hidden md:h-auto">
          <img src="/images/peron-nocny.svg" alt="Pusty peron nocą, oświetlony pojedynczą latarnią" className="h-full w-full object-cover" />
          <figcaption className="absolute bottom-4 left-5 font-tag text-[10px] tracking-[0.1em] text-paper/85">Peron, na który ktoś jeszcze wróci</figcaption>
        </figure>
        <div className="grid grid-rows-[auto_1fr] p-6 md:p-0">
          <div className="px-0 py-8 md:px-[6vw] md:py-16">
            <p className="eyebrow eyebrow-light mb-4">DROBNE DECYZJE ZMIENIAJĄ CAŁOŚĆ</p>
            <h2 className="h-display text-[30px] sm:text-[40px] md:text-[48px]">
              Stacja pamięta<br /><em className="font-medium">to, co zostawiłeś.</em>
            </h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.6] text-paper/85">
              Notatka o zaciętym rozjeździe albo o brygadzie, która potrzebuje dłuższego
              odpoczynku, wraca na kolejnej zmianie. Nic nie znika bez śladu.
            </p>
          </div>
          <figure className="relative m-0 hidden overflow-hidden md:block">
            <img src="/images/mgla-bocznica.svg" alt="Gęsta mgła nad bocznicą towarową, widoczny jeden sygnał w oddali" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-4 left-5 font-tag text-[10px] tracking-[0.1em] text-paper/85">Noce z mgłą wymagają więcej uwagi</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 py-24 md:px-[10vw] md:py-[120px]">
        <div className="mb-14 max-w-[640px]">
          <p className="eyebrow mb-4">TRZY RODZAJE ZMIAN</p>
          <h2 className="h-display text-[34px] sm:text-[46px] md:text-[56px]">
            Zaczynasz spokojnie,<br /><em className="font-medium">dalej jest trudniej.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {typyZmian.map((typ) => (
            <article key={typ.tytul} className="border divider-light p-7">
              <span className="eyebrow">{typ.dlaKogo.toUpperCase()}</span>
              <h3 className="mt-3 font-display text-[22px] font-medium">{typ.tytul}</h3>
              <p className="mt-3 text-[14px] leading-[1.65]">{typ.opis}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel px-6 py-24 md:px-[10vw] md:py-[120px]">
        <div className="mb-10 max-w-[560px]">
          <p className="eyebrow eyebrow-light mb-4">JASNO I BEZ NIEDOPOWIEDZEŃ</p>
          <h2 className="h-display text-[30px] sm:text-[40px] md:text-[50px]">
            Czego w tej grze<br /><em className="font-medium">świadomie nie ma.</em>
          </h2>
        </div>
        <ul className="grid gap-4 border-t divider-dark pt-8 md:grid-cols-2">
          {czegoNieZnajdziesz.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-paper/90">
              <span aria-hidden="true" className="mt-1 text-[var(--color-signal)]">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-[#ece5d4] px-5 py-24 text-center md:py-[110px]">
        <blockquote className="h-display relative z-[1] mx-auto max-w-[780px] text-[28px] leading-[1.15] sm:text-[38px] md:text-[50px]">
          „Dobra zmiana to ta, po której<br className="hidden sm:block" /> następca nie musi pytać,{' '}
          <em className="font-medium">co się tu stało.”</em>
        </blockquote>
        <p className="eyebrow mt-7">TAK OPISUJE SIĘ TU DOBRZE POPROWADZONĄ NOC</p>
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:px-[10vw] md:py-[120px]" id="wspolnie">
        <div>
          <p className="eyebrow mb-4">DLA DWÓCH OSÓB NA JEDNEJ STACJI</p>
          <h2 className="h-display text-[32px] sm:text-[44px] md:text-[52px]">
            Jedna zmiana,<br /><em className="font-medium">dwa końce stacji.</em>
          </h2>
          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.65]">
            W trybie wspólnym jedna osoba odpowiada za północny koniec stacji, druga za
            południowy. Żadna z nich nie widzi całości — tylko krótkie, tekstowe
            komunikaty przez wewnętrzny radiotelefon pozwalają zgrać ruch pociągów
            przejeżdżających z jednej strony na drugą.
          </p>
          <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65]">
            To nie rywalizacja. To rozmowa dwóch osób, które muszą dogadać się szybciej,
            niż skład dojedzie do rozjazdu.
          </p>
        </div>
        <figure className="relative m-0 h-[320px] overflow-hidden sm:h-[420px]">
          <img src="/images/dwoje-dyzurnych.svg" alt="Dwa pulpity połączone sygnałem radiowym, symbol wspólnej zmiany dwóch osób" className="h-full w-full object-cover" />
        </figure>
      </section>

      <section className="px-6 py-20 md:px-[10vw]">
        <div className="grid grid-cols-1 gap-10 border-t divider-light pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">DLA KOGO JEST TA GRA</p>
            <p className="text-[15px] leading-[1.65]">
              Dla osób, które lubią układanki wymagające spokoju, a nie refleksu.
              Nie trzeba znać kolejnictwa — zasady tłumaczą się w praniu.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">NA CZYM DZIAŁA</p>
            <p className="text-[15px] leading-[1.65]">
              Wyłącznie w przeglądarce, na komputerze, tablecie i telefonie.
              Nic nie trzeba instalować ani aktualizować osobno.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">JAK ZACZĄĆ</p>
            <p className="text-[15px] leading-[1.65]">
              Pierwsza zmiana wprowadzająca prowadzi przez podstawy pulpitu
              bez osobnej instrukcji do przeczytania z góry.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-[8vw] md:px-[10vw] md:py-[120px]" id="faq">
        <div>
          <p className="eyebrow mb-4">PYTANIA, KTÓRE PADAJĄ NAJCZĘŚCIEJ</p>
          <h2 className="h-display text-[34px] sm:text-[46px] md:text-[56px]">
            Zanim wejdziesz<br /><em className="font-medium">na pulpit.</em>
          </h2>
        </div>
        <div className="border-t divider-light">
          {faq.map((pozycja) => (
            <details key={pozycja.pytanie} className="border-b divider-light py-5">
              <summary className="flex items-center justify-between gap-4 font-display text-[17px] font-medium">
                {pozycja.pytanie}
                <span className="plus text-[22px] font-light text-[#6b7b82] transition-transform">+</span>
              </summary>
              <p className="mr-8 mt-3 max-w-[600px] text-[14px] leading-[1.65]">{pozycja.odpowiedz}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-amber)] px-6 py-24 text-ink md:px-[10vw] md:py-[110px]">
        <p className="eyebrow text-[#6b4a1f]">PULPIT CZEKA TAK, JAK GO ZOSTAWIONO</p>
        <h2 className="h-display mt-3 text-[46px] sm:text-[64px] md:text-[88px]">
          Zmiana<br />zaraz się zacznie.
        </h2>
        <p className="mt-5 max-w-[460px] text-[16px] leading-[1.6]">
          Domena dla tej strony zostanie podana później — do tego czasu możesz
          zapoznać się z zasadami i opisem rozgrywki.
        </p>
        <a className="btn mt-7" href="#start">
          Wróć na górę strony <span>↑</span>
        </a>
      </section>

      <footer className="flex flex-col gap-4 bg-ink px-6 py-7 text-[10px] tracking-[0.08em] text-paper/75 md:flex-row md:items-center md:justify-between md:px-[5vw]">
        <span className="font-tag">© {new Date().getFullYear()} · Informacje o grze</span>
        <div className="flex flex-wrap gap-5 font-tag">
          <a href="/prywatnosc">Prywatność</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/zasady">Zasady korzystania</a>
        </div>
      </footer>
    </main>
  );
}
