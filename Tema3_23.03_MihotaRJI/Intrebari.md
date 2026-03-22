1\. Care sunt cele 4 metode HTTP principale și când se folosește fiecare?

Cele 4 metode HTTP principale sunt: GET, POST, HEAD și PUT.

GET: Este cea mai folosită metodă, fiind utilizată pentru a solicita date dintr-o resursă.
POST: Este folosită pentru a trimite date de intrare.
HEAD: Cu ea cerem returnarea doar a antetului paginii, fără restul conținutului.
PUT: Este inversul metodei GET, și este utilizata pentru a transmite date către o resursă.


2\. Ce semnifică codurile de status: 200, 301, 400, 401, 403, 404, 500?

Codul 200: Înseamnă că solicitarea a fost finalizată cu succes și că serverul a returnat datele solicitate.

Codul 301: Înseamnă o redirecționare permanentă.

Codul 400: Indică faptul că serverul nu a putut găsi ceea ce căutam, de exemplu, o pagină de pe un site web.

Codul 401: Înseamnă că accesul la o pagină necesită autorizare.

Codul 403: Înseamnă că nu ne este permis să accesăm resursa dorită.

Codul 404: Înseamnă că pagina solicitată nu a fost găsită.

Codul 500: Indică o eroare internă a serverului atunci când ceva nu a mers bine în timpul procesării cererii.


3\. Care este diferența între HTTP și HTTPS?

***Securitatea:***

* HTTP: Datele transmise prin HTTP sunt în text simplu, ceea ce înseamnă că oricine interceptează conexiunea poate citi datele.
* HTTPS: Datele transmise prin HTTPS sunt criptate utilizând SSL/TLS, asigurând protecția informațiilor sensibile împotriva interceptării și falsificării.

***Criptarea SSL/TLS:***

* HTTP: Nu se utilizează nicio criptare, ceea ce îl face vulnerabil la atacuri precum ascultarea și atacurile man-in-the-middle.
* HTTPS: utilizează criptarea SSL (Secure Sockets Layer) sau TLS (Transport Layer Security) pentru a securiza transmiterea datelor. Site-urile HTTPS trebuie să aibă un certificat SSL pentru a stabili o comunicare securizată.

***Indicatori de încredere:***

* HTTP: browserele pot afișa avertismente atunci când utilizatorii încearcă să viziteze site-uri web prin HTTP, în special dacă aceste site-uri necesită informații sensibile, cum ar fi parolele sau detaliile de plată.
* HTTPS: Site-urile web care utilizează HTTPS afișează simbolul unui lacăt în bara de adrese a browserului, indicând faptul că conexiunea este sigură. Unele browsere pot afișa, de asemenea, numele proprietarului sau al organizației site-ului web pentru un plus de încredere.

***SEO (optimizarea motorului de căutare):***

* HTTP: Site-urile web care utilizează HTTP pot fi mai slab cotate de motoarele de căutare precum Google, care prioritizează site-urile web securizate.
* HTTPS: Google și alte motoare de căutare favorizează site-urile web HTTPS, oferindu-le o creștere în clasamentul rezultatelor căutării.

***Performanță:***

* HTTP: HTTP nu beneficiază de optimizările de performanță oferite de protocoalele moderne de criptare.
* HTTPS: Datorită progreselor în SSL/TLS, site-urile HTTPS se pot încărca mai rapid și mai eficient datorită optimizărilor precum HTTP/2 și TLS 1.3. Aceste protocoale reduc latența și îmbunătățesc viteza conexiunilor securizate.

***Integritatea datelor:***

* HTTP: Nu există nicio garanție că datele transmise între browser și server nu au fost modificate în timpul transmiterii.
* HTTPS: Garantează integritatea datelor, ceea ce înseamnă că datele transmise între browser și server nu pot fi modificate sau corupte fără a fi detectate.