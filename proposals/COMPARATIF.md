# Comparatif des trois directions

Les trois maquettes partagent la matière V1 (perle, halos, verre, italique serif rare, marine), les mêmes données de démonstration étiquetées et le même jeu d'icônes original. Elles diffèrent par la structure : où regarde l'œil en premier, comment on navigue, ce qui bouge.

| | A · Fil du jour | B · Ciel ouvert | C · Orbite |
|---|---|---|---|
| Lien | [Artifact](https://claude.ai/artifact/UKcumUkPPF1WwmqV846Hcx) | [Artifact](https://claude.ai/artifact/DhWXJ8yjoTbHAt68dsrn7N) | [Artifact](https://claude.ai/artifact/RZ6fCwe4n4NsUBifaKU6KM) |
| Premier regard | une phrase-donnée, puis un ruban de 7 réponses | 7 questions écrites, 7 réponses en phrases | l'équipe en mouvement autour du Directeur |
| Navigation | barre latérale (12 modules), onglets en bas sur mobile | dock flottant + feuille « tous les modules » | bouton « Modules » + `Ctrl K` |
| Densité | moyenne : tout est visible en défilant | faible : une réponse ouverte à la fois | moyenne, très visuelle |
| Matière | verre clair V1, thème clair et sombre | ciel et prairie V1.5, verre fumé | verre clair V1, sphère irisée |
| Mouvement signature | entrées non vues qui « se posent » | dock qui grossit sous le pointeur, réponse qui se met au point | orbite amortie, pile de décisions à ressort |

## Forces
- **A** : la plus proche de l'app actuelle (barre latérale, React Query par bloc) ; tout est lisible sans interaction ; le fil répond le mieux à « échecs et causes vérifiées » ; thème sombre prêt.
- **B** : répond le plus vite aux sept questions, surtout sur téléphone (les 7 réponses dans le premier écran) ; c'est la plus singulière et la plus fidèle au brief (verre fumé, fond lumineux et naturel) ; peu de chrome, beaucoup de calme.
- **C** : la plus vivante ; rend la présence des agents tangible ; la pile oblige à décider une chose à la fois ; les tracés de mission se lisent sans chiffres.

## Risques
- **A** : peut sembler connue (structure de tableau de bord classique) ; défilement long sur mobile ; le « non vu » demande de mémoriser la dernière visite (serveur ou stockage local).
- **B** : flou sur grande image coûteux sur un téléphone modeste (repli opaque prévu) ; un seul monde visuel, pas de thème clair ; sur ordinateur, une seule réponse détaillée à la fois.
- **C** : coût d'animation permanent ; l'orbite se charge au-delà de 6 agents (V6 en prévoit jusqu'à 5) ; la pile cache 2 décisions sur 3 ; la nouveauté peut lasser au quotidien.

## Coût de réalisation (estimation, phase C en React dans `orchestrator/ui`)
| | Estimation | Ce qui coûte |
|---|---|---|
| A | 2 à 3 jours | tokens + verre sur la coque existante, ruban, fil « depuis ta visite » |
| B | 3 à 5 jours | coque nouvelle (dock, feuille), maître-détail qui devient accordéon, image de fond optimisée, tests de performance mobile |
| C | 5 à 7 jours | orbite (requestAnimationFrame, accessibilité, repli mobile), pile, tracés, tests de mouvement réduit |

Dans les trois cas, un agrégat `GET /api/v2/home` côté serveur éviterait 7 requêtes au chargement (détail dans l'audit transmis à Rayan, hors de ce dépôt public car il décrit l'API du dépôt privé).

## Vérifications faites (10/11/2026)
| Contrôle | A | B | C |
|---|---|---|---|
| Erreurs console (Chrome headless, 1440 et 390 px) | 0 | 0 | 0 |
| Défilement horizontal à 390 px | non | non | non |
| Contraste texte minimal mesuré (WCAG, fonds composés) | 4,72:1 clair · 6,21:1 sombre | 4,50:1 dans le pire cas (fenêtre sur fond presque blanc) | 4,73:1 |
| Navigation au clavier (Tab réel, focus visible) | oui, lien d'évitement | oui, flèches haut/bas sur les questions | oui, « Suivante » à Entrée testé |
| `prefers-reduced-motion` | animations coupées | dock et nuages figés | orbite figée, statique |
| Détecteur Impeccable | 2 avertissements de contraste corrigés ; reste un avis « hiérarchie typographique serrée » (voulu pour un outil) | 1 avertissement « pilule serrée » (faux positif probable) | « carte dans une carte » (la pile), avis « ombre large répétée » |

Limites : captures en navigateur sans interface (le panneau intégré était trop petit pour des captures nettes ; il a servi à vérifier l'affichage et la console). Pas de test Safari ni Firefox, pas de lecteur d'écran.

## Méthode
Les trois structures viennent d'une liste de sept structures classées (briefing éditorial, tuiles, boîte de décisions, fil du jour, constellation des agents, tableau par mission, fenêtre sur paysage). Le tirage du skill Impeccable (`concept-seed --scope surface --mode operate`) a retenu les numéros 4, 7 et 5 : fil du jour (A), fenêtre sur paysage (B), constellation (C). Le produit est décrit dans `PRODUCT.md`, rédigé à partir du brief (faits déduits marqués) faute de pouvoir interroger Rayan pendant ce travail.

## Recommandation
**B · Ciel ouvert pour l'accueil, avec la coque de A pour les modules.**

B est la seule des trois où les sept réponses se lisent sans défiler sur téléphone, et c'est la plus proche de ce que décrit le brief : verre fumé, fond lumineux et naturel, navigation minimaliste. Elle reste toutefois une page de synthèse : les douze modules ont besoin de place et d'une navigation stable, ce que la barre latérale de A fait bien (et que l'app possède déjà). L'orbite de C ferait une bonne vue de la page « Agents et workers », pas un accueil quotidien.

À trancher par Rayan : la direction, et si l'accueil reste le Directeur (comme aujourd'hui) ou devient cette page.
