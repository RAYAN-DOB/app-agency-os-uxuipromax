# B · Ciel ouvert

**Intention.** Un seul monde : le ciel et la prairie de la V1.5, et une grande fenêtre de verre fumé posée dessus. À gauche, les sept questions de Rayan écrites comme il les pose ; à droite, la réponse ouverte. Sur téléphone, les sept réponses tiennent dans le premier écran et chacune se déplie sur place. La navigation est un dock flottant.

**Maquette.** `index.html` (autonome, prairie intégrée en data URI) · Artifact : https://claude.ai/artifact/DhWXJ8yjoTbHAt68dsrn7N
Captures : `captures/desktop-1440.jpg`, `captures/desktop-1440-page.jpg`, `captures/mobile-390.jpg`, `captures/mobile-390-page.jpg`.

## Palette et matières
| Rôle | Valeur |
|---|---|
| Ciel (haut → horizon) | `#24539a` → `#4a83cc` → `#8dbbe9` → `#d6e7f6` |
| Verre fumé | `rgba(17,25,40,.74)` en haut, `.86` en bas, flou 30 px, saturation 140 % |
| Texte | `#f4f7fc` · secondaire `#d3dbe8` · tertiaire `#c4cddd` |
| Ciel clair (accent) | `#b4d6ff` |
| États | ok `#a6ecc9` · attention `#ffdcaa` · échec `#ffd0d4` |
| Dock | verre blanc `rgba(255,255,255,.55)`, encre `#18243a` |

Monde unique assumé, sans thème sombre séparé : la fenêtre est déjà sombre. Contraste vérifié dans le pire cas (fenêtre posée sur un fond presque blanc) : minimum 4,5:1. `prefers-reduced-transparency` : fenêtre opaque.

## Typographie
DM Sans 400 à 700, axe optique (SIL OFL 1.1), reprise de la V1.5 ; Instrument Serif italique (SIL OFL 1.1) pour la demi-phrase du titre.

## Grille
Colonne de 1280 px. Fenêtre en deux volets : questions 300 à 400 px, réponse fluide. Sous 900 px : accordéon, dock en barre de 5 boutons.

## Motion
Changement de réponse : fondu, montée de 10 px et netteté qui revient (flou 6 px → 0) en 550 ms. Signature : grossissement du dock selon la distance du pointeur, comme sur macOS (désactivé au tactile et en mouvement réduit). Nuages qui dérivent en 70 à 110 s. Flèches haut/bas pour parcourir les sept questions.

## Icônes
Même jeu original que A, en version bicolore (couche secondaire remplie à 22 %).

## Réponses aux sept questions
Les sept lignes de gauche sont les sept questions. Le chiffre d'affaires encaissé est affiché « indisponible » dans « Qu'est-ce qui est vraiment fait ? ».
