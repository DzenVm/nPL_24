import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zasady korzystania | Gra o nocnej zmianie dyżurnego ruchu',
  robots: { index: false, follow: true },
};

export default function Zasady() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-20 md:py-28">
      <a className="mb-16 inline-block border-b divider-light pb-1 text-[13px]" href="/">
        ← Wróć do strony głównej
      </a>
      <p className="eyebrow mb-3">INFORMACJE FORMALNE</p>
      <h1 className="h-display text-[36px] md:text-[44px]">Zasady korzystania</h1>
      <p className="mt-5 max-w-[620px] text-[18px] leading-[1.65]">
        Ta strona przedstawia opis gry przeglądarkowej oraz informacje porządkowe
        dotyczące korzystania z niej. Poniżej znajdziesz podstawowe zasady.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Charakter strony</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Strona opisuje mechanikę rozgrywki oraz sposób działania pulpitu dyżurnego
        ruchu. Treści mają charakter informacyjny i promocyjny wobec opisywanej gry.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Własność treści</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Opisy, ilustracje i układ strony są chronione. Ich kopiowanie lub dalsze
        wykorzystywanie poza zakresem dozwolonym przez prawo wymaga zgody osoby
        zarządzającej tą stroną.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Dostępność</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Dążymy do tego, żeby strona działała bez przerw, jednak krótkie przestoje
        mogą wystąpić w związku z pracami aktualizacyjnymi.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Zgłaszanie uwag</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Uwagi dotyczące treści lub działania strony można zgłaszać przez stronę
        kontaktową.
      </p>
    </main>
  );
}
