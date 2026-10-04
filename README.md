# Plume

Plateforme de remise à niveau pour reprendre des études universitaires : **français** (pilier principal), anglais, mathématiques, physique, chimie, biologie et culture générale.

Principe : l'apprenant écrit ou s'enregistre, l'IA signale les erreurs **sans donner la réponse**, l'apprenant se corrige, puis l'IA explique la règle. On peut aussi téléverser ses notes de cours pour en faire des fiches et des quiz.

## Organisation du dépôt

| Dossier / fichier | Contenu |
|---|---|
| `docs/cahier-des-charges.md` | Le cahier des charges complet (objectifs, écrans, choix techniques) |
| `docs/guide-demarrage.md` | Comment récupérer le projet et lancer le serveur sur son ordinateur |
| `base-connaissances/` | Les fiches pédagogiques que l'IA utilise (niveaux, programmes, grammaire, méthodes) |
| `backend/` | Le serveur (API) en FastAPI / Python |
| `frontend/` | Le site (application web PWA) : accueil, connexion, tableau de bord, matières, méthodes, test de niveau |
| `CLAUDE.md` | Les consignes pour Claude quand il travaille sur le projet |

## Démarrage rapide

Voir [docs/guide-demarrage.md](docs/guide-demarrage.md).

## État

Version 0.1 : squelette du serveur avec la liste des matières. Prochaine étape : le test de niveau et l'atelier d'écriture.
