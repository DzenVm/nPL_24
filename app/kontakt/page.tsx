import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | Gra o nocnej zmianie dyżurnego ruchu',
  robots: { index: false, follow: true },
};

export default function Kontakt() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-20 md:py-28">
      <a className="mb-16 inline-block border-b divider-light pb-1 text-[13px]" href="/">
        ← Wróć do strony głównej
      </a>
      <p className="eyebrow mb-3">KONTAKT</p>
      <h1 className="h-display text-[36px] md:text-[44px]">Masz pytanie o stację?</h1>
      <p className="mt-5 max-w-[620px] text-[18px] leading-[1.65]">
        Napisz, jeśli chcesz dowiedzieć się więcej o opisywanej grze albo zgłosić
        uwagę techniczną dotyczącą samej strony.
      </p>
      <a
        className="btn mt-8"
        href="mailto:kontakt@twoja-domena.pl"
      >
        kontakt@twoja-domena.pl
      </a>
      <p className="mt-4 text-[13px] text-[#537178]">
        Adres zostanie zastąpiony adresem we wskazanej domenie przed publikacją strony.
      </p>
    </main>
  );
}
