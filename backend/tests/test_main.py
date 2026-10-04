"""Tests du serveur. Lancer depuis le dossier backend : pytest"""

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_sante():
    reponse = client.get("/sante")
    assert reponse.status_code == 200
    assert reponse.json() == {"statut": "ok"}


def test_liste_matieres():
    reponse = client.get("/matieres")
    assert reponse.status_code == 200
    ids = [m["id"] for m in reponse.json()]
    assert "francais" in ids
    assert len(ids) == 7


def test_detail_matiere():
    reponse = client.get("/matieres/chimie")
    assert reponse.status_code == 200
    assert "Dosages" in reponse.json()["chapitres"]


def test_matiere_introuvable():
    reponse = client.get("/matieres/astronomie")
    assert reponse.status_code == 404


def test_site_page_accueil():
    """La page d'accueil du site est servie à l'adresse /."""
    reponse = client.get("/")
    assert reponse.status_code == 200
    assert "Reprendre ses études" in reponse.text


def test_site_application():
    reponse = client.get("/app.html")
    assert reponse.status_code == 200
    assert "Tableau de bord" in reponse.text


def test_contenu_chapitre():
    reponse = client.get("/contenu/grammaire/subjonctif-present.md")
    assert reponse.status_code == 200
    assert "## Cours oral" in reponse.text


def test_contenu_interdit_hors_dossier():
    """On ne doit pas pouvoir lire un fichier en dehors de base-connaissances."""
    assert client.get("/contenu/../backend/app/main.py").status_code == 404
    assert client.get("/contenu/%2e%2e/%2e%2e/README.md").status_code == 404
