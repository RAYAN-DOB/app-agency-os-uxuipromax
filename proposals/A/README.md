# A · Fil du jour

**Intention.** La V1 telle quelle, mise au service d'une seule lecture : la phrase du haut dit ce qui attend Rayan, un ruban donne les sept réponses, puis « À décider » et le fil de ce qui s'est passé depuis la dernière visite. C'est la proposition la plus proche de l'interface actuelle (barre latérale + contenu), donc la moins risquée à construire.

**Maquette.** `index.html` (autonome) · Artifact : https://claude.ai/artifact/UKcumUkPPF1WwmqV846Hcx
Captures : `captures/desktop-1440.jpg`, `captures/desktop-1440-page.jpg`, `captures/desktop-1440-sombre.jpg`, `captures/mobile-390.jpg`, `captures/mobile-390-page.jpg`.

## Palette et matières
| Rôle | Clair | Sombre |
|---|---|---|
| Fond perle | `#e9edf5` | `#10141f` |
| Encre | `#1d2537` | `#eef1f8` |
| Texte secondaire | `#59657b` | `#a9b2c5` |
| Accent pervenche (texte, sélection) | `#4b62b5` | `#9db0ff` |
| Marine (action principale) | `#252f45` | `#dfe5f5` |
| États | ok `#2b7558` · attention `#93560f` · échec `#ab3c47` | versions claires |

Verre clair `rgba(255,255,255,.58)`, flou 22 px, saturation 150 %, liseré blanc. Trois halos (bleu, pêche, menthe) qui dérivent en 26 à 31 s. `prefers-reduced-transparency` : surfaces opaques. Thème clair et sombre.

## Typographie
Manrope 400 à 800 (SIL OFL 1.1) pour tout ; Instrument Serif italique (SIL OFL 1.1) pour une seule phrase, celle qui porte la donnée principale. Chiffres tabulaires.

## Grille
Barre latérale 252 px + contenu fluide (max 1560 px). Contenu en deux colonnes 1,62 / 1 : décisions, missions, fil à gauche ; équipe, manques, coût à droite. Sous 980 px : une colonne, réordonnée (décider, équipe, missions, manques, fil, coût), barre d'onglets en bas.

## Motion
Ressort court sur les boutons (`cubic-bezier(.34,1.4,.64,1)`), dépliage des validations par `grid-template-rows`, barres qui se remplissent une fois. Signature : les entrées non vues du fil restent teintées jusqu'à ce que Rayan les survole ou les sélectionne, puis la teinte se pose. Tout est coupé sous `prefers-reduced-motion`.

## Icônes
Jeu original de 12 marques de module (24 × 24, trait 1,6, jonctions rondes), dans `../_shared/icons.svg`. Marque Agency OS : les trois tuiles de la V1 redessinées en vecteur.

## Réponses aux sept questions
Ruban du haut, puis : Équipe en ce moment (agents), Missions en cours, fil (résultats et échecs avec cause vérifiée et prochaine action), Ce qui manque, À décider, Coût. Le chiffre d'affaires encaissé s'affiche « indisponible ».
