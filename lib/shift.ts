const dniTygodnia = [
  'niedzielę',
  'poniedziałek',
  'wtorek',
  'środę',
  'czwartek',
  'piątek',
  'sobotę',
];

const widzialnosc = [
  'czysto, sygnały widać z dalekiej odległości',
  'lekka mgła nad torami postojowymi',
  'mokre szyny po wieczornym deszczu',
  'gęsta mgła ograniczająca widoczność peronu',
  'przejrzyście, księżyc dobrze oświetla rozjazdy',
  'drobny mróz na iglicach zwrotnic',
  'wiatr boczny utrudniający odsłuch sygnałów',
];

const nastawienia = [
  'tor główny otwarty, boczny wyłączony z ruchu',
  'oba tory czynne, priorytet ma relacja pocztowa',
  'rozjazd numer trzy w naprawie, trasy poprowadzone okolicznie',
  'pełna przepustowość, brak ograniczeń na zmianę',
  'ruch wahadłowy na jednym torze, reszta sieci bez zmian',
  'peron krótki zajęty, długie składy kierowane dalej',
  'cisza na sieci, tylko jedna zapowiedziana relacja',
];

export interface StanZmiany {
  dzienSlowny: string;
  numerZmiany: number;
  widzialnosc: string;
  nastawienieTorow: string;
  aktywneRozjazdy: number;
  godzinaObliczenia: string;
}

function numerTygodniaISO(data: Date): number {
  const kopia = new Date(Date.UTC(data.getFullYear(), data.getMonth(), data.getDate()));
  const dzienTyg = (kopia.getUTCDay() + 6) % 7;
  kopia.setUTCDate(kopia.getUTCDate() - dzienTyg + 3);
  const pierwszyCzwartek = new Date(Date.UTC(kopia.getUTCFullYear(), 0, 4));
  const roznicaDni = (kopia.getTime() - pierwszyCzwartek.getTime()) / 86400000;
  return 1 + Math.round((roznicaDni - ((pierwszyCzwartek.getUTCDay() + 6) % 7)) / 7);
}

export function obliczStanZmiany(teraz: Date = new Date()): StanZmiany {
  const dzienIndeks = teraz.getUTCDay();
  const tydzien = numerTygodniaISO(teraz);
  const ziarno = tydzien + dzienIndeks * 3;

  return {
    dzienSlowny: dniTygodnia[dzienIndeks],
    numerZmiany: ((tydzien - 1) % 52) + 1,
    widzialnosc: widzialnosc[ziarno % widzialnosc.length],
    nastawienieTorow: nastawienia[(ziarno + 2) % nastawienia.length],
    aktywneRozjazdy: 4 + (ziarno % 9),
    godzinaObliczenia: teraz.toISOString().slice(11, 16),
  };
}
