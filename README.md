# Przeglądarka repozytoriów githuba


Aplikacja jest dostępna pod adresem: https://maciek1651g-github-repos.herokuapp.com/ (Pierwsze uruchomienie może być dłuższe, jest to związane z darmowym hostingiem na herokuapp)

Lokalne uruchomienie: (Do lokalnego uruchomienia potrzebny jest zainstalowany node.js)

1. Pobieramy wszystkie pliki.
2. Uruchamiamy terminal i wchodzimy do folderu gdzie pobraliśmy pliki.
3. Wpisujemy polecenie "npm install".
4. Wpisujemy polecenie "npm start". Gdy wszystko przebiegnie pomyślnie otworzy się nowa karta przeglądarki z aplikacją.


Uwagi/komentarze: API githuba nie udostępnia sortowania po liczbie gwiazdek, przez co gdy wymagane jest sortowanie trzeba pobrać wszystkie repozytoria i wtedy je posortować, co może wydłużyć czas pobierania danych. Istnieje również ograniczenie do pobierania 100 repozytoriów jednocześnie oraz ograniczenie liczby wysyłanych zapytań do API githuba do 60 na godzinę.

Założenia/Uproszczenia: Minimalna szerokość strony 480px.
