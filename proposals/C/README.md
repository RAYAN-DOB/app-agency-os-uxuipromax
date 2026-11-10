# C · Orbite

**Intention.** L'équipe devient la scène. La sphère irisée de la V1 représente le Directeur ; les agents tournent autour avec leur tâche en cours, et l'agent bloqué reste à l'écart, cerclé de pointillés. À droite, les décisions en pile : une à la fois, on accepte ou on passe à la suivante. Dessous, une seule dalle de verre en trois colonnes (résultats, échecs, manques), puis les missions dessinées comme des tracés, un point par tâche.

**Maquette.** `index.html` (autonome) · Artifact : https://claude.ai/artifact/RZ6fCwe4n4NsUBifaKU6KM
Captures : `captures/desktop-1440.jpg`, `captures/desktop-1440-page.jpg`, `captures/mobile-390.jpg`, `captures/mobile-390-page.jpg`.

## Palette et matières
| Rôle | Valeur |
|---|---|
| Fond perle | `#edf0f7` + trois lueurs fixes (lavande, rose, menthe) |
| Encre | `#1b2335` · secondaire `#445069` · tertiaire `#5a667c` |
| Accent | `#4a5fb2` |
| Irisé de la sphère | rose `#f6c9dc`, bleu `#b9cdf7`, menthe `#bfeee4` |
| Marine | `#232d43` |
| États | ok `#2a7457` · attention `#925510` · échec `#a83a45` |

Verre clair `rgba(255,255,255,.56)`, flou 22 px. Monde clair unique (choix assumé pour la sphère).

## Typographie
Hanken Grotesk 400 à 800 (SIL OFL 1.1) ; Instrument Serif italique (SIL OFL 1.1) pour la phrase du Directeur.

## Grille
1400 px. Scène 1,5 / pile 1 ; dalle en trois colonnes égales ; missions 1,5 / coût 1. Sous 1080 px : une colonne. Sous 640 px : l'orbite s'arrête, les agents passent en liste sous la sphère.

## Motion
Orbite à vitesse angulaire amortie : un tour en 140 s ; au survol ou au focus d'un agent, l'orbite ralentit jusqu'à l'arrêt puis repart en douceur. Bouton « Figer l'orbite ». La carte du dessus de la pile part à l'arrière avec un ressort. Sphère : rotation de teinte lente (18 s). Tout est statique en mouvement réduit.

## Icônes
Même jeu original, trait simple.

## Réponses aux sept questions
Agents : orbite. Décisions : pile. Résultats, échecs, manques : dalle. Missions : tracés. Coût : bloc final. Le chiffre d'affaires encaissé est affiché « indisponible ».

## Point connu
La pile superpose des cartes dans un bloc de verre (le détecteur Impeccable signale « carte dans une carte ») : c'est le principe même de la pile, à revoir si la direction est retenue.
