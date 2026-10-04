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
