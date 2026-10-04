"""Liste des matières de Plume et de leurs chapitres.

Source : base-connaissances/programmes/remise-niveau-sciences.md
Plus tard, ces données iront dans la base SQLite.
"""

MATIERES = [
    {
        "id": "francais",
        "nom": "Français",
        "reference": "Niveaux CECRL A1 à C2",
        "chapitres": [
            "Grammaire", "Orthographe", "Vocabulaire", "Conjugaison",
            "Syntaxe", "Ponctuation", "Registres", "Méthodes universitaires",
        ],
    },
    {
        "id": "anglais",
        "nom": "Anglais",
        "reference": "Niveaux CECRL A1 à C2",
        "chapitres": [],
    },
    {
        "id": "mathematiques",
        "nom": "Mathématiques",
        "reference": "Remise à niveau scientifique, niveau 1",
        "chapitres": [
            "Calcul algébrique", "Trigonométrie", "Nombres complexes",
            "Étude de fonctions", "Calcul intégral", "Probabilités",
        ],
    },
    {
        "id": "physique",
        "nom": "Physique",
        "reference": "Remise à niveau scientifique, niveau 1",
        "chapitres": [
            "Mécanique", "Électromagnétisme", "Vibrations et propagation", "Ondes",
        ],
    },
    {
        "id": "chimie",
        "nom": "Chimie",
        "reference": "Remise à niveau scientifique, niveau 1",
        "chapitres": [
            "Structure de la matière", "Solutions", "Acidité et pH",
            "Oxydoréduction", "Dosages", "Estérification et hydrolyse",
            "Chimie organique", "Analyses spectrales",
        ],
    },
    {
        "id": "biologie",
        "nom": "Biologie",
        "reference": "Remise à niveau scientifique, niveau 1",
        "chapitres": [
            "La cellule", "Constituants de la matière vivante", "Cycle cellulaire",
            "Génétique", "Système immunitaire", "Procréation", "Endocrinologie",
        ],
    },
    {
        "id": "culture-generale",
        "nom": "Culture générale",
        "reference": "À définir",
        "chapitres": [],
    },
]
