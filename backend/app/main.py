"""Point d'entrée du serveur Plume (FastAPI).

Lancer le serveur (depuis le dossier backend) :
    uvicorn app.main:app --reload
Puis ouvrir http://127.0.0.1:8000/docs pour tester l'API dans le navigateur.
"""

from fastapi import FastAPI, HTTPException

from app.matieres import MATIERES

# L'application : c'est elle qui reçoit les requêtes
app = FastAPI(
    title="Plume",
    description="API de la plateforme de remise à niveau Plume",
    version="0.1.0",
)


@app.get("/sante")
def sante():
    """Vérifie que le serveur fonctionne."""
    return {"statut": "ok"}


@app.get("/matieres")
def liste_matieres():
    """Renvoie toutes les matières (sans le détail des chapitres)."""
    return [
        {"id": m["id"], "nom": m["nom"], "reference": m["reference"]}
        for m in MATIERES
    ]


@app.get("/matieres/{matiere_id}")
def detail_matiere(matiere_id: str):
    """Renvoie une matière avec ses chapitres."""
    for m in MATIERES:
        if m["id"] == matiere_id:
            return m
    # Si on ne trouve pas la matière, on renvoie une erreur 404 (« introuvable »)
    raise HTTPException(status_code=404, detail="Matière introuvable")
