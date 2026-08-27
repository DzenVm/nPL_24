import {
  liczbyStacji,
  etapyZmiany,
  elementyPulpitu,
  typyZmian,
  czegoNieZnajdziesz,
  pytaniaZmiany,
  cytatZNotatnika,
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
        <a className="hidden opacity-90 hover:opacity-100 md:inline" href="#pulpit">Pulpit</a>
        <a className="hidden opacity-90 hover:opacity-100 md:inline" href="#wspolnie">We dwoje</a>
        <span className="mr-auto" />
        <a className="border-b border-paper/40 pb-1" href="#faq">Pytania i odpowiedzi</a>
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
            gdzie powinien.
          </p>
          <a className="btn btn-pale mt-8" href="#o-grze">Poznaj zasady zmiany</a>
        </div>
        <div className="absolute bottom-10 right-6 max-w-[230px] text-right text-paper/90 md:right-[7vw]">
          <span className="font-tag text-[10px]">ZMIANA 01 / WIELE</span>
          <p className="mt-2 font-display text-[14px] leading-[1.45]">
            Żadna noc nie wygląda tu tak samo jak poprzednia.
          </p>
        </div>
      </section>

      <section className="grid gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw] md:px-[10vw] md:py-[120px]" id="o-grze">
        <div>
          <p className="eyebrow mb-4">O CZYM JEST TA GRA</p>
          <h2 className="h-display text-[32px] leading-[1.08] sm:text-[42px] md:text-[50px]">
            Bocznica, na którą po latach ciszy znowu wraca ruch.
          </h2>
        </div>
        <div className="space-y-5 pt-2 text-[16px] leading-[1.7] md:pt-10">
          <p>
            Wraca na nią ruch pocztowy, towarowy i kilka relacji, które przewożą ludzi
            wracających z późnej zmiany w mieście. Zadanie nie polega na wygraniu
            z czasem — polega na poprowadzeniu wszystkiego tak, żeby nikt nie czekał
            dłużej, niż musi.
          </p>
          <p>
            Każda zmiana zaczyna się od tego, co zostawił poprzednik: rozjazd zacinający
            się przy niskiej temperaturze, brygada wracająca później niż planowano,
            peron, na którym coś trzeba było naprawić w pośpiechu. Historia toczy się
            dalej, nie zaczyna się od nowa.
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

      <section className="grid grid-cols-2 gap-px border-y divider-light bg-[#e3ddcc] md:grid-cols-4">
        {liczbyStacji.map((liczba) => (
          <div key={liczba.opis} className="bg-paper px-6 py-10 text-center">
            <p className="h-display text-[44px] text-[#2a7d70] md:text-[52px]">{liczba.wartosc}</p>
            <p className="mt-2 text-[13px] leading-[1.4] text-[#44555c]">{liczba.opis}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-24 md:px-[10vw] md:py-[120px]">
        <p className="eyebrow mb-4">PRZEBIEG JEDNEJ ZMIANY</p>
        <h2 className="h-display mb-12 max-w-[640px] text-[32px] leading-[1.1] sm:text-[42px] md:text-[50px]">
          Nie ma tu listy zadań do odklikania — jest stan stacji na wejściu i decyzje, które go zmieniają.
        </h2>
        <div className="grid grid-cols-1 gap-px border-t border-l divider-light sm:grid-cols-2">
          {etapyZmiany.map((etap) => (
            <article key={etap.numer} className="border-b border-r divider-light p-7">
              <span className="font-tag text-[12px] text-[#5a7a7a]">{etap.numer}</span>
              <h3 className="mt-3 font-display text-[20px] font-medium">{etap.tytul}</h3>
              <p className="mt-2 text-[14px] leading-[1.6]">{etap.opis}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative h-[600px] overflow-hidden text-paper" id="pulpit">
        <img src="/images/pulpit-dyzurnego.svg" alt="Pulpit dyżurnego ruchu z tablicą zapowiedzi i przełącznikami rozjazdów" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-[1] flex h-full w-full items-center bg-gradient-to-r from-ink/95 via-ink/75 to-transparent p-8 md:w-1/2 md:p-[7vw]">
          <div>
            <p className="eyebrow eyebrow-light mb-4">PULPIT, NA KTÓRYM WSZYSTKO SIĘ ZBIEGA</p>
            <h2 className="h-display text-[30px] sm:text-[40px] md:text-[48px]">
              Co widzisz, kiedy zapala się pierwsze światło zmiany?
            </h2>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-paper/85">
              Sześć elementów poniżej trzeba czytać razem — pojedynczo żaden z nich
              niewiele mówi o tym, co dzieje się na stacji.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-[10vw] md:py-[120px]">
        <div className="grid grid-cols-1 divide-y divide-line-light border-t border-l divider-light sm:grid-cols-2 md:grid-cols-3">
          {elementyPulpitu.map((el) => (
            <article key={el.tytul} className="min-h-[200px] border-b border-r divider-light p-6 sm:divide-x">
              <h3 className="font-display text-[19px] font-medium">{el.tytul}</h3>
              <p className="mt-3 text-[14px] leading-[1.6]">{el.opis}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-[10vw] md:py-[120px]">
        <p className="eyebrow mb-4">TRZY RODZAJE ZMIAN</p>
        <h2 className="h-display mb-12 max-w-[600px] text-[32px] leading-[1.1] sm:text-[42px] md:text-[50px]">
          Zaczyna się spokojnie. Dalej robi się ciekawiej.
        </h2>
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
        <div className="grid gap-12 md:grid-cols-[1fr_0.85fr] md:gap-[6vw]">
          <div>
            <p className="eyebrow eyebrow-light mb-4">JASNO I BEZ NIEDOPOWIEDZEŃ</p>
            <h2 className="h-display mb-8 text-[28px] sm:text-[36px] md:text-[42px]">
              Zapytasz pewnie, czego tu nie ma.
            </h2>
            <ul className="space-y-4 border-t divider-dark pt-8">
              {czegoNieZnajdziesz.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-paper/90">
                  <span aria-hidden="true" className="mt-1 text-[var(--color-signal)]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="relative m-0 hidden self-stretch overflow-hidden md:block">
            <img src="/images/siatka-rozjazdow.svg" alt="Schemat sieci torów i rozjazdów na stacji" className="h-full w-full object-cover" />
          </figure>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2">
        <figure className="relative m-0 h-[300px] overflow-hidden sm:h-[420px]">
          <img src="/images/peron-nocny.svg" alt="Pusty peron nocą, oświetlony pojedynczą latarnią" className="h-full w-full object-cover" />
        </figure>
        <figure className="relative m-0 h-[300px] overflow-hidden sm:h-[420px]">
          <img src="/images/mgla-bocznica.svg" alt="Gęsta mgła nad bocznicą towarową, widoczny jeden sygnał w oddali" className="h-full w-full object-cover" />
        </figure>
      </section>

      <section className="border-y divider-light bg-[#ece5d4] px-6 py-16 md:px-[10vw]">
        <blockquote className="h-display max-w-[640px] text-[22px] leading-[1.4] sm:text-[26px]">
          „{cytatZNotatnika.tresc}”
        </blockquote>
        <p className="eyebrow mt-5">{cytatZNotatnika.podpis.toUpperCase()}</p>
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:px-[10vw] md:py-[120px]" id="wspolnie">
        <figure className="relative m-0 h-[300px] overflow-hidden sm:h-[420px] md:order-2">
          <img src="/images/dwoje-dyzurnych.svg" alt="Dwa pulpity połączone sygnałem radiowym, symbol wspólnej zmiany dwóch osób" className="h-full w-full object-cover" />
        </figure>
        <div className="md:order-1">
          <p className="eyebrow mb-4">DLA DWÓCH OSÓB NA JEDNEJ STACJI</p>
          <h2 className="h-display text-[30px] sm:text-[40px] md:text-[46px]">
            Jedna zmiana. Dwa końce tej samej stacji.
          </h2>
          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.65]">
            W trybie wspólnym jedna osoba odpowiada za północny koniec stacji, druga za
            południowy. Żadna z nich nie widzi całości — tylko krótkie, tekstowe
            komunikaty przez wewnętrzny radiotelefon pozwalają zgrać ruch pociągów
            przejeżdżających z jednej strony na drugą.
          </p>
          <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65]">
            Chodzi tu bardziej o rozmowę dwojga osób, które muszą dogadać się szybciej
            niż skład dojedzie do rozjazdu, niż o współzawodnictwo.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-[10vw]">
        <div className="grid grid-cols-1 gap-10 border-t divider-light pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">DLA KOGO JEST TA GRA</p>
            <p className="text-[15px] leading-[1.65]">
              Dla osób, które lubią układanki wymagające spokoju, a nie refleksu.
              Znajomość kolejnictwa nie jest tu potrzebna — zasady tłumaczą się w praniu.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">NA CZYM DZIAŁA</p>
            <p className="text-[15px] leading-[1.65]">
              Wyłącznie w przeglądarce, na komputerze, tablecie i telefonie. Nic nie
              trzeba instalować ani aktualizować osobno.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">JAK ZACZĄĆ</p>
            <p className="text-[15px] leading-[1.65]">
              Pierwsza zmiana wprowadzająca prowadzi przez podstawy pulpitu bez osobnej
              instrukcji do przeczytania z góry.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-[8vw] md:px-[10vw] md:py-[120px]" id="faq">
        <div>
          <p className="eyebrow mb-4">PYTANIA, KTÓRE PADAJĄ NAJCZĘŚCIEJ</p>
          <h2 className="h-display text-[30px] sm:text-[40px] md:text-[46px]">
            Zanim wejdziesz na pulpit.
          </h2>
        </div>
        <div className="border-t divider-light">
          {pytaniaZmiany.map((pozycja) => (
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
        <h2 className="h-display mt-3 text-[42px] sm:text-[58px] md:text-[76px]">
          Do zmiany zostało kilka chwil.
        </h2>
        <p className="mt-5 max-w-[460px] text-[16px] leading-[1.6]">
          Domena dla tej strony zostanie podana później — do tego czasu możesz
          zapoznać się z zasadami i opisem rozgrywki.
        </p>
        <a className="btn mt-7" href="#start">Do początku strony</a>
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
