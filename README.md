# Uniduna Diák Büfé - Frontend Weboldal

## 🎯 A Projekt Célja
A projekt célja egy modern, mobilra is optimalizált (reszponzív) bemutatkozó weboldal tervezése és frontend fejlesztése (HTML, CSS, JS) a fiktív Uniduna diák büfé számára. A felület tartalmaz egy interaktív digitális étlapot, egy JavaScript alapú képgalériát a helyszínről, valamint egy nyitvatartási és kapcsolattartási szekciót. A hangsúly a letisztult vizuális megjelenésen és a felhasználóbarát navigáción van.

## 🌿 Git Stratégia (Branching)
A projekt verziókövetése során az alábbi két fő ágat (branch) használjuk:
* **`main` ág:** A publikus, éles, stabil verzió. Ide csak letesztelt, véglegesített kód kerülhet.
* **`Develop` ág:** A fő fejlesztési ág. Minden új kód, módosítás és funkció (HTML struktúra, CSS formázás, JS logika) először ide kerül feltöltésre.

## 💻 Technológiai Stack (In-Scope)
A projekt tisztán kliensoldali (frontend) technológiákra épül:
* **HTML5:** Szemantikus weboldal váz.
* **CSS3:** Stíluslapok, reszponzív design (Flexbox/Grid).
* **JavaScript (Vanilla):** Interaktív funkciók (digitális étlap, képgaléria).

## 📁 Projekt Szerkezete (Tervezett)
```text
uniduna-bufe/
├── index.html        # A weboldal főoldala (Single Page)
├── css/
│   └── style.css     # Fő stíluslap és reszponzív szabályok
├── js/
│   └── script.js     # JS logika az étlaphoz és a galériához
├── assets/
│   ├── images/       # Helyszíni fotók, galéria elemek
│   └── icons/        # Logó, SVG ikonok
└── README.md         # Projekt dokumentáció
