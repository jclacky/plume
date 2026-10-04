# Plume — consignes pour Claude

Ce fichier est lu automatiquement par Claude Code quand il travaille dans ce dossier.

## Le projet
Plume est une plateforme de remise à niveau pour reprendre des études universitaires : français (pilier principal), anglais, mathématiques, physique, chimie, biologie, culture générale. Le cahier des charges complet est dans `docs/cahier-des-charges.md` : lis-le avant toute tâche importante.

## Qui je suis
Je débute en programmation et j'apprends en construisant ce projet. Le français n'est pas ma langue maternelle.

## Comment travailler avec moi
- Réponds **en français**, avec des phrases simples et courtes.
- Explique chaque étape comme un tuteur : ce que tu fais, et pourquoi.
- Avant de créer plusieurs fichiers, montre-moi le plan et attends mon accord.
- Les commandes Git (`commit`, `push`) : explique-les, mais laisse-moi les lancer moi-même.
- Garde le code simple et commenté en français ; pas de dépendance inutile.

## Choix techniques
- Backend : FastAPI (Python), base de données SQLite.
- Frontend : Progressive Web App (mobile d'abord, fonctionne hors ligne).
- IA : API Anthropic (Claude). La clé d'API va dans un fichier `.env`, **jamais** dans Git.

## Règles pédagogiques de Plume
- L'IA signale la faute et sa catégorie, **sans donner la correction** ; l'apprenant cherche, puis l'IA explique la règle.
- Le contenu pédagogique (dossier `base-connaissances/`) est séparé du code.
- On n'ajoute jamais de documents protégés par le droit d'auteur : seulement nos propres fiches, avec la source citée.
