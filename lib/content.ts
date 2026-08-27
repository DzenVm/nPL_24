export const liczbyStacji: Array<{ wartosc: string; opis: string }> = [
  { wartosc: '4', opis: 'etapy, przez które przechodzi każda zmiana' },
  { wartosc: '6', opis: 'elementów pulpitu do ogarnięcia naraz' },
  { wartosc: '3', opis: 'rodzaje zmian, od wprowadzającej po pełną niespodzianek' },
  { wartosc: '0', opis: 'elementów, w których o wyniku decyduje przypadek' },
];

export const etapyZmiany: Array<{ numer: string; tytul: string; opis: string }> = [
  {
    numer: '01',
    tytul: 'Odbierasz raport od poprzednika',
    opis:
      'Zmiana nie zaczyna się od zera. Dostajesz krótką notatkę o tym, co działo się wcześniej: który tor jest zajęty dłużej niż powinien, gdzie bocznica wymaga uwagi i czy jakaś brygada wróciła spóźniona z ostatniej trasy.',
  },
  {
    numer: '02',
    tytul: 'Szukasz miejsc, w których plany się zderzą',
    opis:
      'Na tablicy pojawiają się zapowiedziane relacje wraz z oknami czasowymi. Czasem dwa składy chcą tego samego toru o tej samej porze — trzeba to zauważyć, zanim zrobi się z tego prawdziwy problem.',
  },
  {
    numer: '03',
    tytul: 'Ustawiasz rozjazdy i przydzielasz perony',
    opis:
      'Każda decyzja ma koszt: dłuższy objazd zużywa czas bufora, krótszy peron nie przyjmie długiego składu, a zmiana trasy w ostatniej chwili może obudzić brygadę, która właśnie odpoczywa.',
  },
  {
    numer: '04',
    tytul: 'Zamykasz zmianę i piszesz raport dla następcy',
    opis:
      'Gdy ostatni skład opuści stację, zapisujesz, co zostało nierozwiązane. Ten raport trafia do kolejnej osoby, która przejmie pulpit — czasem jest to ktoś inny, czasem Ty sam za kilka dni.',
  },
];

export const elementyPulpitu: Array<{ tytul: string; opis: string }> = [
  {
    tytul: 'Tablica zapowiedzi',
    opis: 'Lista przyjazdów i odjazdów z oknami czasowymi, które potrafią się na siebie nakładać w najmniej wygodnym momencie.',
  },
  {
    tytul: 'Schemat torów i rozjazdów',
    opis: 'Układ bocznic rysowany jak na starych planach stacyjnych. Przełączysz każdy rozjazd, choć skutki bywają odczuwalne dalej na trasie.',
  },
  {
    tytul: 'Rejestr brygad',
    opis: 'Obsada nie jest nieskończona. Czas odpoczynku między trasami trzeba realnie policzyć, a nie tylko odnotować.',
  },
  {
    tytul: 'Warunki na zewnątrz',
    opis: 'Mgła, deszcz i temperatura wpływają na to, jak szybko i jak bezpiecznie da się poprowadzić ruch tej nocy.',
  },
  {
    tytul: 'Notatnik zmiany',
    opis: 'Miejsce na własne obserwacje o stacji. Warto zapisać, który peron ostatnio sprawiał kłopoty, zanim się zapomni.',
  },
  {
    tytul: 'Radiotelefon bocznicowy',
    opis: 'Krótkie, tekstowe komunikaty do drugiej osoby na zmianie — przydają się, kiedy pracujecie razem na tej samej stacji.',
  },
];

export const typyZmian: Array<{ tytul: string; dlaKogo: string; opis: string }> = [
  {
    tytul: 'Zmiana wprowadzająca',
    dlaKogo: 'dla nowej osoby na pulpicie',
    opis:
      'Niewielka stacja, jedna para torów i ruch rozłożony w spokojnym tempie. Czasu wystarcza, by przemyśleć każdą decyzję i poznać układ rozjazdów bez presji.',
  },
  {
    tytul: 'Zmiana robocza',
    dlaKogo: 'gdy układ stacji przestał być zagadką',
    opis:
      'Więcej relacji naraz, krótsze okna czasowe. Tu zaczyna być widać, że dobra decyzja sprzed godziny ułatwia życie pod koniec nocy.',
  },
  {
    tytul: 'Zmiana pełna niespodzianek',
    dlaKogo: 'na dni, gdy chce się sprawdzić',
    opis:
      'Awaria rozjazdu, spóźniona brygada, pogoda, która niczego nie ułatwia. Stacja wybacza tu mniej, a każde rozwiązanie trzeba dopasowywać na bieżąco.',
  },
];

export const czegoNieZnajdziesz: string[] = [
  'Losowe nagrody nie zastępują tu żadnej decyzji gracza — nie ma ich w ogóle.',
  'Wynik zmiany zależy od odczytania sytuacji na stacji, nie od przypadku.',
  'Nie znajdziesz liczników ani powiadomień, które namawiałyby do gry dłużej, niż akurat masz ochotę.',
  'Rywalizacja z osobami spoza Twojej znajomości nie jest tu przewidziana — współpraca dotyczy tylko kogoś, z kim się umówisz.',
  'Strona nie prosi o dane wykraczające poza to, co potrzebne do jej działania.',
];

export const pytaniaZmiany: Array<{ pytanie: string; odpowiedz: string }> = [
  {
    pytanie: 'Na czym dokładnie polega ta gra?',
    odpowiedz:
      'Prowadzisz nocny ruch na niewielkiej stacji rozrządowej: ustawiasz rozjazdy, przydzielasz perony i pilnujesz, żeby żaden skład nie czekał dłużej niż musi. Każda decyzja jest widoczna w dalszym przebiegu zmiany.',
  },
  {
    pytanie: 'Czy trzeba znać prawdziwe zasady kolejowe?',
    odpowiedz:
      'Wcale nie musisz. Mechanika jest inspirowana pracą dyżurnego ruchu, ale tłumaczy się sama w trakcie pierwszych zmian.',
  },
  {
    pytanie: 'Ile trwa jedna zmiana?',
    odpowiedz:
      'Krótka zmiana wprowadzająca zajmuje zwykle kilkanaście minut. Dłuższe, pełne zmiany można swobodnie przerwać i wrócić do nich później — stacja zapamiętuje stan, w jakim ją zostawiłeś.',
  },
  {
    pytanie: 'Czy da się grać z drugą osobą?',
    odpowiedz:
      'Tak. W trybie dla dwóch osób każda z nich odpowiada za inny koniec tej samej stacji i ustala przebieg ruchu krótkimi, tekstowymi komunikatami, bez rozmowy głosowej.',
  },
  {
    pytanie: 'Co się stanie, jeśli podejmę błędną decyzję?',
    odpowiedz:
      'Zmiana nie kończy się od razu. Błąd zwykle komplikuje dalszy plan i trzeba go rozwiązać kolejnymi decyzjami zamiast zaczynać od nowa.',
  },
  {
    pytanie: 'Czy pojawiają się tu elementy losowe wpływające na wynik?',
    odpowiedz:
      'Nie pojawiają się. Wynik zmiany zależy wyłącznie od tego, jak rozplanujesz ruch na stacji.',
  },
  {
    pytanie: 'Na jakich urządzeniach mogę grać?',
    odpowiedz:
      'Strona działa w przeglądarce na komputerze, tablecie i telefonie, a układ pulpitu dopasowuje się do szerokości ekranu — choć większy ekran ułatwia czytanie całego schematu torów.',
  },
];

export const cytatZNotatnika = {
  tresc:
    'Zapisałem trzeciej nocy: peron krótki znowu za ciasny na skład pocztowy. Następnym razem kierować od razu na tor B.',
  podpis: 'fragment notatnika zmiany, noc trzecia',
};
