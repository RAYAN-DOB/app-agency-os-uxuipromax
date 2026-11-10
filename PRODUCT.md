# Product

<!-- impeccable:product-schema 1 -->

> Rédigé le 10/11/2026 par Claude Code (sous-agent, sans outil de question) à partir du brief écrit de Rayan et de l'audit du dépôt `RAYAN-DOB/agency-os`. Chaque fait marqué *(déduit)* reste à confirmer par Rayan.

## Platform

web

## Users

Rayan, seul opérateur et propriétaire. Il pilote une équipe d'agents IA (Directeur + workers `agent-01` à `agent-03`) qui travaillent sur ses projets, sa boutique et son infrastructure. Il consulte le Command Center surtout sur téléphone, parfois hors du réseau local, et sur PC *(déduit)*.

## Product Purpose

Le Command Center d'Agency OS dit à Rayan, en quelques secondes : ce que font ses agents, les missions en cours, les résultats réellement obtenus, les échecs et leurs causes vérifiées, les permissions ou ressources manquantes, les validations qui attendent sa décision, et le coût de fonctionnement. Il lui permet ensuite d'agir : décider, relancer, autoriser, arrêter.

## Positioning

Un poste de pilotage où rien n'est présumé : chaque succès porte sa preuve (tests, CI, PR), chaque échec sa cause, chaque chiffre sa source. Les actions à effet externe passent par la décision de Rayan.

## Operating Context

- Application React 19 / Vite dans `agency-os/services/aicos/orchestrator/ui`, API FastAPI `/api/v2/*` derrière une session (cookie), flux temps réel SSE `/api/v2/events/stream`.
- Accueil actuel : le Directeur (discussion). La vue générale vit sur `/tableau-de-bord`.
- Usage court et fréquent : un coup d'œil, une décision, retour au reste de la journée.

## Capabilities and Constraints

Modules à préserver : Directeur, Missions et tâches, Agents et workers, Modèles IA et budgets, Exécutions et traces, Validations humaines, Infrastructure, Jarvis et permissions, Brain OS et mémoire, Skills et intégrations, Supplier OS, Paramètres.

Toutes les routes de lecture exigent une session ou un jeton : aucune API publique en lecture seule.

## Brand Commitments

- Nom : Agency OS ; société mère Aurions ; espace « Aurion Studio » dans le prototype V1.
- Direction préférée : la V1 du laboratoire `app-agency-os-uxuipromax` (commits `75fe143`, `c75fb52`). La V2 « Atelier Glass » (`3188912`) a été rejetée puis annulée.
- Langue de l'interface : français.

## Evidence on Hand

- Aucune donnée réelle n'est accessible sans secret : les maquettes utilisent des données de démonstration étiquetées.
- Le chiffre d'affaires encaissé n'existe pas dans l'API (`revenue_collected_ht: null`, pas d'intégration bancaire) : il s'affiche « indisponible », jamais estimé.
- Une projection de chiffre d'affaires n'est pas du CA encaissé.

## Product Principles

1. Aucune statistique inventée : une donnée absente s'affiche « indisponible » avec sa raison.
2. La décision d'abord : ce qui attend Rayan passe avant ce qui va bien.
3. Un échec se montre avec sa cause vérifiée et la prochaine action sûre.
4. Simple même avec beaucoup de fonctions : douze modules, une seule question par écran.
5. Le calme est une fonction : le mouvement signale un changement d'état, pas une ambiance.

## Accessibility & Inclusion

WCAG 2.1 AA visé : contraste 4,5:1 pour le texte, navigation clavier complète, `prefers-reduced-motion` et `prefers-reduced-transparency` respectés, cibles tactiles de 44 px sur mobile.
