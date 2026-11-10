# Références : refonte du Command Center (phase A)

Recherche du 10/11/2026. Pages publiques seulement, aucune connexion, aucun compte, aucun bandeau de cookies accepté. Captures prises en navigateur sans interface (Chrome headless, 1440 × 900, JPEG), stockées dans `research/captures/`.

**Droits des captures.** Les captures de sites tiers servent d'aide-mémoire interne. Elles restent sur le poste (`research/captures/*.jpg` est ignoré par git) et ne sont pas redistribuées. Seules les captures de nos propres versions (`historique-*.jpg`) sont versionnées.

**Règle commune.** On étudie un problème d'interface, puis on le résout avec nos propres composants, nos tokens et nos textes. Aucun site n'est reproduit.

## Point de départ : ce qui sépare V1 de V2 (historique du dépôt)

| | V1 (`75fe143`, `c75fb52`) : préférée | V2 « Atelier Glass » (`3188912`) : rejetée, annulée par `a9e61ed` |
|---|---|---|
| Fond | Perle lavande `#e9edf4`, trois halos pastel flous (bleu, rose, menthe) qui dérivent, grain léger | Pierre bleutée `#f2f5f8`, halos plus pâles et plus froids |
| Verre | Partout : barre latérale, barre du haut, tuiles (`rgba(255,255,255,.53)`, flou 24 px) | Réservé à la navigation, données sur surfaces presque opaques |
| Typographie | Manrope 800 très serrée + italique serif pour une phrase (« in motion. ») | Police système, italique Georgia |
| Accent | Pervenche `#5d77c7`, bouton marine `#252f43` | Bleu Atlantique `#3a667e`, plus terne |
| Héros | Sphère irisée, grand titre, beaucoup d'air | Schéma en orbite, liste « ce qui mérite votre attention » dès l'accueil |
| Densité | Faible, aérée | Plus dense, plus « produit d'entreprise » |

Lecture : Rayan a rejeté une V2 plus juste sur le fond (échecs d'abord, preuves) mais plus froide et plus dense. Les trois propositions gardent la matière V1 (perle, halos, verre, Manrope ou équivalent, italique serif rare, marine) et y versent le contenu « preuve d'abord » de la V2. La V1.5 (`fdec99a`) a ajouté ciel, prairie et fenêtre de verre fumé ; la proposition B en hérite.

Captures : `historique-v1-c75fb52.jpg`, `historique-v2-3188912-rejetee.jpg`, `historique-v1-5-fdec99a.jpg`.

## Les 10 références retenues

### 1. Linear : agents dans le flux de travail
- **URL** : https://linear.app · capture `linear.jpg`
- **Problème étudié** : montrer qui a fait quoi quand des humains et des agents travaillent sur le même objet.
- **Remarquable** : le fil d'activité d'un ticket mélange humains, automatisations et agent (« Linear created the issue via Slack », « Triage Intelligence added labels »), chaque ligne attribuée à un acteur et horodatée. Barre latérale courte (Inbox, My issues, Reviews), contenu dense mais calme.
- **Technique** : liste d'événements typés, acteur + verbe + objet + temps relatif ; panneau d'agent flottant.
- **Adapter** : le « fil du jour » de A et la colonne échecs de C reprennent la grammaire acteur/verbe/preuve. **Éviter** : le noir quasi pur et la densité de Linear, contraires à V1.
- **Licence** : site propriétaire ; seul le principe d'information est repris.

### 2. Raycast : commande au clavier et matière vitrée
- **URL** : https://www.raycast.com · capture `raycast.jpg`
- **Problème étudié** : accéder à beaucoup de fonctions sans menu chargé.
- **Remarquable** : barre de navigation en capsule vitrée détachée du bord, palette de commandes comme porte d'entrée unique, raccourcis visibles.
- **Technique** : palette `Ctrl K` / `Cmd K`, actions listées avec leur raccourci.
- **Adapter** : les douze modules restent accessibles par `Ctrl K` dans les trois maquettes (déjà présent dans l'app : `command-palette.tsx`). **Éviter** : les faisceaux rouges et le fond noir.
- **Licence** : propriétaire.

### 3. Lusion : mouvement physique sur fond clair
- **URL** : https://lusion.co · capture `lusion.jpg`
- **Problème étudié** : rendre une interface vivante sans la rendre bruyante.
- **Remarquable** : fond clair lavande très proche de la V1, objets 3D soumis à une vraie physique, boutons pilules sobres, texte d'intention en une phrase.
- **Technique** : WebGL (Three.js) et simulation physique.
- **Adapter** : le mouvement de C (orbite à vitesse amortie, ralentit au survol) et le ressort des boutons. **Éviter** : WebGL plein écran sur un outil d'usage quotidien (batterie, mobile, coût) ; l'équivalent CSS/JS léger suffit.
- **Licence** : propriétaire.

### 4. React Bits, Glass Surface : verre réfractant
- **URL** : https://reactbits.dev/components/glass-surface · capture `reactbits.jpg`
- **Problème étudié** : un verre crédible, pas un simple flou.
- **Remarquable** : barre d'onglets en verre qui courbe l'image derrière elle sur les bords ; propriétés exposées (flou 11 px, distorsion, décalage RVB).
- **Technique** : filtres SVG (`feDisplacementMap`) dans Chromium, WebGL dans Safari et Firefox, repli en verre dépoli.
- **Adapter** : candidat pour le dock de B et la barre mobile, en phase C seulement, avec repli `backdrop-filter`. **Éviter** : la réfraction sur des blocs de texte (lisibilité).
- **Licence** : MIT + Commons Clause (pas de revente des composants eux-mêmes ; usage dans un produit permis). Vérifiée dans `LICENSE.md` du dépôt DavidHDev/react-bits.

### 5. Aceternity UI, Glowing Effect : signal de bord
- **URL** : https://ui.aceternity.com/components/glowing-effect · capture `aceternity.jpg`
- **Problème étudié** : attirer l'œil sur un seul élément.
- **Remarquable** : bord lumineux qui suit le pointeur.
- **Adapter** : l'idée d'un signal sur l'élément qui attend Rayan ; dans A il devient un fond teinté qui « se pose » quand l'entrée est vue, sans halo. **Éviter** : le halo coloré (le détecteur Impeccable le classe parmi les tics d'IA ; retiré de A).
- **Licence** : « Aceternity License », licence d'usage non exclusive sur ui.aceternity.com ; à relire avant tout copier-coller.

### 6. 21st.dev : registre de composants
- **URL** : https://21st.dev/home · capture `21st.jpg`
- **Problème étudié** : trouver des composants existants plutôt que tout dessiner.
- **Remarquable** : barre latérale courte, recherche `Cmd K`, classement « Top today ».
- **Adapter** : source de composants en phase C (le CLI `21st` et la clé API ne sont pas encore installés ; aucune recherche 21st n'a été lancée). **Éviter** : le bleu électrique et le fond nuit.
- **Licence** : selon les conditions, le code reste la propriété de son auteur et de 21st Labs ; pas de licence ouverte par défaut. Chaque composant est à vérifier.

### 7. recent.design : curation de motion et d'interfaces
- **URL** : https://recent.design · capture `recent.jpg`
- **Problème étudié** : confirmer une action risquée sans fenêtre modale.
- **Remarquable** : dans la sélection du jour, une pilule « glisser pour confirmer » et une interface radar à cercles concentriques.
- **Adapter** : la confirmation en place pour les validations à fort risque (phase C) ; l'idée d'orbite pour C. **Éviter** : les effets néon de la sélection.
- **Licence** : chaque œuvre appartient à son auteur ; rien n'est repris.

### 8. Refero Styles : documenter un système en DESIGN.md
- **URL** : https://styles.refero.design · capture `refero-styles.jpg`
- **Problème étudié** : rendre un style transmissible à une équipe d'agents.
- **Remarquable** : plus de 2 000 systèmes décrits en DESIGN.md (couleurs, typo, espacements, composants).
- **Adapter** : une fois la direction choisie, écrire `DESIGN.md` (le skill Impeccable le prévoit) pour que les agents d'Agency OS respectent le système. **Éviter** : le titre en dégradé.
- **Licence** : contenu propriétaire ; seul le format est repris.

### 9. Mobbin : page publique seulement
- **URL** : https://mobbin.com · capture `mobbin.jpg`
- **Problème étudié** : rythme d'un titre qui intègre des icônes d'application.
- **Remarquable** : titre noir très serré avec trois icônes dans la ligne, bandeau de cookies discret en pilule.
- **Limite** : la bibliothèque d'écrans exige une connexion ; non consultée.
- **Licence** : propriétaire.

### 10. Awwwards, catégorie Dashboard : contre-référence
- **URL** : https://www.awwwards.com/websites/dashboard/ et `/websites/sites_of_the_day/` · capture `awwwards-dashboard.jpg` (bandeau de cookies non accepté, visible sur la capture)
- **Problème étudié** : ce que le web primé fait des tableaux de bord.
- **Constat** : la catégorie est dominée par des gabarits d'administration (gros chiffres, graphiques décoratifs, Bootstrap). C'est la liste de ce qu'il ne faut pas faire : tuiles « gros chiffre + petit libellé » en ouverture, graphiques sans échelle.
- **Licence** : sans objet.

## Non consultées
- **land-book.com** : vérification Cloudflare « êtes-vous humain » (capture `landbook.jpg`). Aucun contournement ; ignoré.
- **refero.design** (bibliothèque d'écrans) : accueil public seulement (`refero.jpg`) ; le contenu exige une connexion.
- **Apple Human Interface Guidelines, Materials** : connexion réinitialisée depuis ce poste (navigateur et WebFetch). Les principes cités (verre sur la navigation, surfaces lisibles pour le texte, réduction de transparence) viennent du document V2 `docs/DESIGN_DIRECTION.md`, pas d'une lecture fraîche.
- **Serveurs MCP One Page Love, Spline, Chrome DevTools, 21st.dev** : ajoutés à la configuration mais indisponibles dans cette session ; non utilisés.
