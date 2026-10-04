# Guide de démarrage

Ce guide explique comment récupérer Plume sur ton ordinateur et lancer le serveur. À faire une seule fois.

## 1. Installer les outils (si ce n'est pas déjà fait)

- **Git** : https://git-scm.com/downloads
- **Python 3.12** : https://www.python.org/downloads/ (sur Windows, coche **« Add Python to PATH »**)
- **VS Code** + l'extension **Python** (Microsoft)

## 2. Récupérer le projet (cloner)

1. Dans VS Code : `Ctrl+Shift+P` → tape **Git: Clone** → colle `https://github.com/jclacky/plume.git`
2. Choisis un dossier (par exemple `Documents/projets`) → **Ouvrir**.

> **Cloner** = copier le dépôt GitHub sur ton ordinateur.

## 3. Préparer Python

Ouvre le terminal de VS Code (*Terminal → Nouveau terminal*) et tape, ligne par ligne :

```bash
cd backend
python -m venv .venv
```

> `venv` crée un **environnement virtuel** : une boîte où on installe les bibliothèques du projet sans toucher au reste de l'ordinateur.

Active-le :

- **Windows :** `.venv\Scripts\activate`
- **Mac / Linux :** `source .venv/bin/activate`

`(.venv)` apparaît au début de la ligne : c'est activé. Puis installe les bibliothèques :

```bash
pip install -r requirements.txt
```

## 4. Lancer le serveur

```bash
uvicorn app.main:app --reload
```

Ouvre http://127.0.0.1:8000/docs dans ton navigateur. Tu vois la liste des « routes » de l'API : clique sur **GET /matieres**, puis **Try it out**, puis **Execute**. Les 7 matières s'affichent !

> `--reload` relance le serveur tout seul à chaque fois que tu modifies le code. Pour l'arrêter : `Ctrl+C`.

## 5. Lancer les tests

```bash
pytest
```

Tu dois voir `4 passed`. Les tests vérifient automatiquement que le serveur répond bien.

## 6. Récupérer les nouveautés

Quand Claude ajoute du code sur GitHub, récupère-le avec :

```bash
git pull
```

ou dans VS Code : icône **Source Control** → **…** → **Pull**.

## Vocabulaire

| Mot | Sens |
|---|---|
| Dépôt (*repository*) | Le dossier du projet avec tout son historique |
| Commit | Une « photo » des fichiers, avec un message |
| Push | Envoyer ses commits vers GitHub |
| Pull | Récupérer les commits depuis GitHub |
| API | Le « guichet » du serveur : on lui pose une question (une requête), il répond |
| Route | Une adresse de l'API, par exemple `/matieres` |
