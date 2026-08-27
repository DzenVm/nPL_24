import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prywatność | Gra o nocnej zmianie dyżurnego ruchu',
  robots: { index: false, follow: true },
};

export default function Prywatnosc() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-20 md:py-28">
      <a className="mb-16 inline-block border-b divider-light pb-1 text-[13px]" href="/">
        ← Wróć do strony głównej
      </a>
      <p className="eyebrow mb-3">INFORMACJE FORMALNE</p>
      <h1 className="h-display text-[36px] md:text-[44px]">Prywatność</h1>
      <p className="mt-5 max-w-[620px] text-[18px] leading-[1.65]">
        Szanujemy prywatność osób odwiedzających tę stronę. Poniżej prostym językiem
        opisujemy, jakie informacje mogą być przetwarzane.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Pliki cookie</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Strona może korzystać z niezbędnych plików cookie wspierających jej poprawne
        działanie. Jeżeli w przyszłości zostaną włączone narzędzia analityczne lub
        reklamowe, informacja o tym oraz możliwość wyboru zostaną udostępnione przed
        ich aktywacją.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Formularz kontaktowy</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Wiadomość wysłana na adres kontaktowy jest wykorzystywana wyłącznie do
        obsługi zgłoszenia i nie jest przekazywana osobom postronnym.
      </p>

      <h2 className="h-display mt-12 text-[24px]">Zmiany informacji</h2>
      <p className="mt-3 text-[16px] leading-[1.7]">
        Treść tej informacji może zostać zaktualizowana w razie zmiany sposobu
        działania strony lub zakresu wykorzystywanych usług.
      </p>
    </main>
  );
}
