## 1. Ce este o resursă (resource) în aplicația ta?
În aplicația mea, o resursă reprezintă un punct de interes sau o facilitate din cadrul campusului universității. Exemple de resurse sunt biblioteca, cantina sau spațiile pentru evenimente. 
Fiecare resursă este descrisă prin mai multe informații, precum numele, tipul, locația, programul și etichetele (tags). 
Aceste resurse sunt definite într-un fișier `resources.json`, iar datele sunt încărcate și afișate în pagina principală folosind JavaScript.

## 2. Dă exemplu de un URI și explică componentele acestuia.
Exemplu de URI:
`pages/library.html#schedule`

Acest URI conține următoarele componente:
- `pages/library.html` – reprezintă path (calea) către documentul HTML care descrie biblioteca.
- `#schedule` – reprezintă un anchor (fragment) care duce direct la secțiunea de program din pagină.

## 3. Care părți sunt statice și care sunt dinamice?
Părțile statice ale aplicației sunt paginile HTML, stilurile CSS și imaginile, deoarece conținutul lor este definit direct în fișiere și nu se schimbă automat.
Partea dinamică a aplicației este secțiunea cu resursele din campus. Aceasta folosește JavaScript pentru a citi datele din fișierul `resources.json` folosind `fetch()` și pentru a le afișa dinamic în pagina principală.

## 4. Este aplicația ta document-centric sau interactive (sau ambele)? De ce?
Aplicația este atât document-centric, cât și interactivă, deci ambele.

Este document-centric deoarece paginile HTML prezintă informații despre facilitățile din campus, cum ar fi biblioteca, cantina sau evenimentele.
Aplicația este interactivă deoarece folosește JavaScript pentru a încărca date dintr-un fișier JSON și pentru a le afișa dinamic în pagină. Utilizatorii pot să filtreze resursele pentru a vedea doar anumite tipuri de facilități, cum ar fi locurile de studiu.