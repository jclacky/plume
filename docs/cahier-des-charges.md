# Plume — Cahier des charges (V1)

4 octobre 2026 · Cleid

## 1. Définition du projet

Plume est une plateforme de remise à niveau pour reprendre des études universitaires. Elle couvre sept matières : **français, anglais, mathématiques, physique, chimie, biologie et culture générale**. Le français académique (du niveau A1 au niveau C1/C2) en est le pilier : grammaire, orthographe, vocabulaire, conjugaison, syntaxe, ponctuation, registres, à l'écrit comme à l'oral. L'apprenant peut aussi **téléverser ses propres notes de cours**, que l'IA transforme en fiches, quiz et révisions.

Son principe fondamental est l'apprentissage actif guidé par l'IA :

- **À l'écrit :** l'apprenant formule son texte, l'IA souligne les erreurs et signale leur nature sans donner la solution, l'apprenant se corrige activement, puis l'IA valide et explique la règle sous-jacente.
- **À l'oral :** l'apprenant enregistre sa prise de parole, l'IA analyse la structure, le débit, la clarté et le niveau de vocabulaire, puis propose des reformulations académiques.

### Matières et programme de référence

Les sciences suivent le programme officiel de la remise à niveau scientifique (niveau 1, Sorbonne Université, session du 5 octobre 2026 au 4 juin 2027). Chaque chapitre devient une unité : fiche de cours, exercices niveau bac, notes de l'apprenant, quiz.

| Matière | Référence | Chapitres |
| --- | --- | --- |
| Mathématiques (150 h) | Programme Sorbonne | Calcul algébrique, trigonométrie, nombres complexes, étude de fonctions, calcul intégral, probabilités |
| Physique (90 h) | Programme Sorbonne | Mécanique, électromagnétisme, vibrations et propagation, ondes |
| Chimie (90 h) | Programme Sorbonne | Structure de la matière, solutions, acidité et pH, oxydoréduction, dosages, estérification et hydrolyse, chimie organique, analyses spectrales |
| Biologie (90 h) | Programme Sorbonne | Cellule, constituants du vivant, cycle cellulaire, génétique, système immunitaire, procréation, endocrinologie, un dernier système (à préciser) |
| Français | Niveaux CECRL A1 à C2 | Grammaire, orthographe, vocabulaire, conjugaison, syntaxe, ponctuation, registres, méthodes universitaires |
| Anglais | Niveaux CECRL A1 à C2 | Même organisation que le français |
| Culture générale | À définir | — |

La méthodologie (raisonnement scientifique, organisation, prise de notes, apprendre à apprendre) est intégrée à chaque matière.

## 2. Objectifs d'apprentissage

### Objectifs à 1 an (octobre 2027)

Cleid produit en autonomie, sans assistance extérieure :

- **Courriels formels :** rédaction claire, respect strict des formules de politesse et des registres administratifs ou universitaires.
- **Comptes rendus et synthèses :** restitution neutre, concise et structurée de cours ou de réunions.
- **Devoirs universitaires :** problématisation, argumentation articulée en plusieurs parties, maîtrise des connecteurs logiques.
- **Prises de parole académiques :** exposés fluides, réponses structurées aux questions en amphi ou en TD sans tics de langage.

### Objectif sciences (juin 2027)

- **Réussir l'examen écrit de la remise à niveau** en mathématiques, physique, chimie et biologie, pour obtenir l'attestation de compétences (niveau baccalauréat) et poursuivre en licence scientifique.

### But ultime (niveau Master / Recherche)

- **Rapports scientifiques et mémoires de recherche :** rédaction longue, rigueur conceptuelle, précision du lexique scientifique, appareil critique et bibliographie sans faille.
- **Soutenances orales :** aisance rhétorique, maîtrise du registre soutenu devant un jury, argumentation solide face aux objections.

## 3. Profil utilisateur et contraintes d'usage

- **Utilisateur :** un adulte qui reprend ses études en parallèle de son travail.
- **Contexte principal :** séances courtes de 15 minutes sur smartphone dans les transports (trajets quotidiens), complétées par des sessions de travail approfondi sur ordinateur.
- **Contrainte technique :** coupures de réseau fréquentes dans les transports (nécessité d'une saisie hors-ligne avec synchronisation dès reconnexion).
- **Préférence d'interaction :** guidage direct, explications concises des règles, jamais de correction passive toute faite.

## 4. Spécifications des modules et écrans (brief pour Claude Design)

### Écran 1 — Tableau de bord

- **Barres de progression globales :** affichage par pilier (Grammaire, Orthographe, Vocabulaire, Conjugaison, Syntaxe, Ponctuation, Registres, Écrit, Oral).
- **L'entraînement du jour (15 min) :** accès rapide en un clic pour démarrer la session de transport.
- **Rubrique « Pièges fréquents » :** rappel des 3 règles ou tics de langage personnels à surveiller aujourd'hui.

### Écran 2 — Atelier d'écriture académique

- **Zone de rédaction :** interface sobre, responsive, adaptée au smartphone.
- **Mode révision active :**
  - Soulignement des erreurs par catégorie (accord, temps, homophone, ponctuation, rupture de registre) sans affichage direct de la solution.
  - Saisie de la correction par l'apprenant.
  - Validation et fiche d'explication de la règle par l'IA une fois l'effort fourni.
- **Outil de reformulation stylistique :** suggestions de synonymes précis et de tournures universitaires pour remplacer les mots vagues (faire, avoir, chose, problème).

### Écran 3 — Studio d'oral et éloquence

- **Module d'enregistrement vocal :** bouton micro pour s'enregistrer en répondant à une question type d'examen ou en résumant une notion de cours.
- **Retour IA structuré :**
  - Transcription fidèle avec repérage des hésitations et tics de langage.
  - Évaluation du registre de langue (familier, courant, soutenu).
  - Version réécrite et enrichie pour montrer comment reformuler la même idée à l'oral d'un concours ou d'un examen.

### Écran 4 — Bibliothèque de méthodes et guides universitaires

- **Fiches méthodologiques :** guides pas à pas sur la dissertation, la note de synthèse, la problématique de recherche, l'introduction de mémoire et le plan de soutenance.
- **Boîte à outils du vocabulaire académique :** répertoire thématique de connecteurs logiques, verbes d'analyse (démontrer, corréler, inférer, réfuter) et formules de transition.

### Écran 5 — Mes notes (toutes matières)

- **Téléversement :** photo, PDF ou texte de ses notes de cours, rangées par matière.
- **Transformation par l'IA :** fiche de synthèse claire, notions clés, définitions, formules (maths, physique, chimie).
- **Révision :** quiz générés à partir des notes et répétition espacée.

### Écran 6 — Matières

- **Une page par matière :** français, anglais, mathématiques, physique, chimie, biologie, culture générale.
- **Contenu de chaque matière :** programme de remise à niveau par chapitres, exercices, notes de l'apprenant et barre de progression.
- **Tableau de bord :** une barre de progression par matière, en plus des piliers du français.

## 5. Socle technique

- **Frontend :** Progressive Web App (PWA) compatible mobile et ordinateur, gestion du cache et du stockage local hors-ligne (Local Storage / IndexedDB).
- **Backend :** API FastAPI (Python).
- **Base de données :** SQLite au démarrage (simple et transportable).
- **Moteur IA et linguistique :** API Anthropic (Claude), couplée à des outils de vérification syntaxique (LanguageTool / Grammalecte) et à une brique de reconnaissance vocale (Web Speech API ou Whisper) pour le module oral.

## 6. Ressources

Le projet repose sur une base de connaissances écrite par nous, à partir de sources citées, jamais copiées.

| Ressource | Détail | État |
| --- | --- | --- |
| Base de connaissances | 4 dossiers : niveaux, grammaire, méthodes, examens | Niveaux B1 à C2 écrits ; le reste à faire |
| Niveaux | Référentiels de cours B1, B2, C1 (Alliance française) ; descripteurs CECRL C2 (CIEP) | Utilisés |
| Grammaire | Terminologie grammaticale (Ministère, Eduscol) | À exploiter |
| Méthodes | Guide de rédaction universitaire (HEC Montréal) ; méthodologie du travail universitaire (A. Baillot, HAL) | À exploiter |
| Examens | Démo DELF A1 (format et barème) | Manquent : démos DELF B2 et DALF C1, descripteurs B2 et C1 |
| Usage personnel seulement | *Grammaire progressive du français A2-B1* (manuel commercial) | Pour lei, hors du projet |
| Écartées | freescience.fr (scans sans licence) | Non utilisées |
| Temps | Environ 2 h par semaine pour le projet | — |
| Budget | outils gratuits pour le reste (GitHub, VS Code, Python) | À vérifier en service |
| Outils | VS Code, GitHub, FastAPI, Claude Design (écrans), Claude Code ou Cowork (construction) | Comptes à créer : dépôt GitHub |
| Programme des sciences | Fiche officielle de la remise à niveau scientifique, niveau 1 (Sorbonne Université) | Chapitres repris dans base-connaissances/programmes/ |

Le détail des sources et de leurs droits est dans `notes/sources-donnees.md` (dossier du projet).

## 7. Plus tard (V2 et après)

Ces modules restent dans le projet mais attendent que la V1 serve tous les jours.

- Fiches de révision avec répétition espacée, créées à partir des fautes de lei.
- Parcours complet A1–C2 par leçons.
- Suggestions de lectures et fiches de lecture.
- Laboratoire d'oral (reconnaissance vocale, exposés).
- Dictionnaire étymologique.
- Comptes pour d'autres utilisateurs, version payante.

## 9. Prochaines étapes

- [ ] lei relit ce cahier des charges et le corrige.
- [ ] Dessiner les écrans dans Claude Design : test de niveau, atelier d'écriture, progression, méthodes.
- [ ] Compléter la base de connaissances (méthodes, puis grammaire), puis créer le dépôt GitHub et faire le premier push (guide prêt).
- [ ] Construire la V1 avec Claude Code ou Cowork, à partir de ce document.
