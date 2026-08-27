export const etapyZmiany: Array<{ numer: string; tytul: string; opis: string }> = [
  {
    numer: '01',
    tytul: 'Odbierasz raport od poprzednika',
    opis:
      'Zmiana nie zaczyna się od zera. Dostajesz krótką notatkę o tym, co działo się wcześniej: który tor jest zajęty dłużej niż powinien, gdzie bocznica wymaga uwagi i czy jakaś brygada wróciła spóźniona z ostatniej trasy.',
  },
  {
    numer: '02',
    tytul: 'Czytasz plan i szukasz kolizji',
    opis:
      'Na tablicy pojawiają się zapowiedziane relacje wraz z oknami czasowymi. Twoim zadaniem jest znaleźć momenty, w których dwa składy chcą tego samego toru, i rozstrzygnąć to zanim stanie się problemem na żywo.',
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
      'Gdy ostatni skład opuści stację, zapisujesz, co zostało nierozwiązane. Ten raport trafia do kolejnej osoby, która przejmie pulpit, także wtedy, gdy jest to Ty sam za kilka dni.',
  },
];

export const elementyPulpitu: Array<{ tytul: string; opis: string }> = [
  {
    tytul: 'Tablica zapowiedzi',
    opis: 'Lista przyjazdów i odjazdów z oknami czasowymi, które potrafią się na siebie nakładać w najmniej wygodnym momencie.',
  },
  {
    tytul: 'Schemat torów i rozjazdów',
    opis: 'Układ bocznic rysowany jak na starych planach stacyjnych. Każdy rozjazd da się przełączyć, ale nie każdy przełączy się bez skutków dalej na trasie.',
  },
  {
    tytul: 'Rejestr brygad',
    opis: 'Obsada nie jest nieskończona. Czas odpoczynku między trasami jest realnym ograniczeniem, a nie liczbą do zignorowania.',
  },
  {
    tytul: 'Warunki na zewnątrz',
    opis: 'Mgła, deszcz i temperatura wpływają na to, jak szybko i jak bezpiecznie można prowadzić ruch tej nocy.',
  },
  {
    tytul: 'Notatnik zmiany',
    opis: 'Miejsce, w którym zapisujesz własne obserwacje o stacji. Przyda się, zanim zapomnisz, który peron ostatnio sprawiał kłopoty.',
  },
  {
    tytul: 'Radiotelefon bocznicowy',
    opis: 'Krótkie, tekstowe komunikaty do drugiej osoby na zmianie, jeśli pracujecie razem na tej samej stacji.',
  },
];

export const typyZmian: Array<{ tytul: string; dlaKogo: string; opis: string }> = [
  {
    tytul: 'Zmiana wprowadzająca',
    dlaKogo: 'dla nowej osoby na pulpicie',
    opis:
      'Niewielka stacja, jedna para torów i ruch rozłożony w spokojnym tempie. Czasu wystarcza, by przemyśleć każdą decyzję i spokojnie poznać układ rozjazdów.',
  },
  {
    tytul: 'Zmiana robocza',
    dlaKogo: 'dla kogoś, kto już czuje układ stacji',
    opis:
      'Więcej relacji na raz, krótsze okna czasowe i pierwsze sytuacje, w których dobra decyzja z wcześniejszej godziny ułatwia życie pod koniec nocy.',
  },
  {
    tytul: 'Zmiana pełna niespodzianek',
    dlaKogo: 'dla osoby, która chce się sprawdzić',
    opis:
      'Awaria rozjazdu, spóźniona brygada i pogoda, która nie ułatwia zadania. Stacja wybacza mniej, a każde rozwiązanie trzeba dopasować na bieżąco.',
  },
];

export const czegoNieZnajdziesz: string[] = [
  'Żadnych losowych nagród, które zastępowałyby decyzję gracza.',
  'Żadnego elementu, w którym wynik zależy od przypadku, a nie od odczytania sytuacji na stacji.',
  'Żadnej presji, by grać dłużej niż się chce, ani liczników zachęcających do powrotu za wszelką cenę.',
  'Żadnej rywalizacji z osobami, których nie znasz — współpraca dotyczy tylko osoby, z którą sam się umówisz.',
  'Żadnych elementów, które wymagałyby podawania danych wykraczających poza działanie strony.',
];

export const faq: Array<{ pytanie: string; odpowiedz: string }> = [
  {
    pytanie: 'Na czym dokładnie polega ta gra?',
    odpowiedz:
      'Prowadzisz nocny ruch na niewielkiej stacji rozrządowej: ustawiasz rozjazdy, przydzielasz perony i pilnujesz, żeby żaden skład nie czekał dłużej niż musi. To gra logiczna, w której każda decyzja widoczna jest w dalszym przebiegu zmiany.',
  },
  {
    pytanie: 'Czy trzeba znać prawdziwe zasady kolejowe?',
    odpowiedz:
      'Nie. Mechanika jest inspirowana pracą dyżurnego ruchu, ale tłumaczy się sama w trakcie pierwszych zmian, bez podręcznika i bez fachowego słownika na wejściu.',
  },
  {
    pytanie: 'Ile trwa jedna zmiana?',
    odpowiedz:
      'Krótka zmiana wprowadzająca zajmuje zwykle kilkanaście minut. Dłuższe, pełne zmiany można swobodnie przerwać i wrócić do nich później — stacja zapamiętuje stan, w jakim ją zostawiłeś.',
  },
  {
    pytanie: 'Czy da się grać z drugą osobą?',
    odpowiedz:
      'Tak, w trybie dla dwóch osób każda z nich odpowiada za inny koniec tej samej stacji. Ustalacie przebieg ruchu krótkimi, tekstowymi komunikatami, bez rozmowy głosowej.',
  },
  {
    pytanie: 'Co się stanie, jeśli podejmę błędną decyzję?',
    odpowiedz:
      'Zmiana nie kończy się od razu. Błąd zwykle komplikuje dalszy plan — trzeba go rozwiązać kolejnymi decyzjami, a nie zaczynać od nowa.',
  },
  {
    pytanie: 'Czy gra zawiera zakupy, loterie albo elementy losowe wpływające na wynik?',
    odpowiedz:
      'Nie. Wynik zmiany zależy wyłącznie od tego, jak rozplanujesz ruch na stacji. Strona nie zawiera mechanizmów opartych na przypadku.',
  },
  {
    pytanie: 'Na jakich urządzeniach mogę grać?',
    odpowiedz:
      'Strona działa w przeglądarce na komputerze, tablecie i telefonie. Układ pulpitu dopasowuje się do szerokości ekranu, choć większy ekran ułatwia odczytanie całego schematu torów.',
  },
];
